<script setup lang="ts">
/* =======================
 * Page Metadata
 * ======================= */

/* =======================
 * Components & Utilities
 * ======================= */
import { toast } from "vue-sonner";
import type { VForm } from "vuetify/components/VForm";

/* =======================
 * GraphQL
 * ======================= */
import {
  CreateBlogMutationVariables,
  useBlogLazyQuery,
  useCreateBlogMutation,
  useUpdateBlogMutation,
} from "@/generated/operations";

/* =======================
 * Interfaces
 * ======================= */
interface Props {
  isDialogVisible: boolean;
  id?: string;
}
interface Emit {
  (e: "update:isDialogVisible", value: boolean): void;
}

/* =======================
 * Props & Emits
 * ======================= */

const props = withDefaults(defineProps<Props>(), {
  isDialogVisible: false,
  id: undefined,
});

const emit = defineEmits<Emit>();

/* =======================
 * Provides
 * ======================= */

/* =======================
 * Refs & Reactive State
 * ======================= */
const id = ref<number | null>(null); // `id` can be null

/* =======================
 * Form State
 * ======================= */

const formRef = ref<VForm>();
const initialFormState: CreateBlogMutationVariables = {
  title: "",
  image: "",
  thumbnail: "",
  content: "",
  author: "",
  tags: "",
};

const form = reactive<CreateBlogMutationVariables>({ ...initialFormState });
/* =======================
 * GraphQL Mutations
 * ======================= */

const {
  load: findBlog,
  result: blogData,
  loading: blogFindFetching,
  error: blogFindError,
} = useBlogLazyQuery();

const {
  mutate: createBlog,
  loading: blogCreateFetching,
  error: blogCreateError,
} = useCreateBlogMutation();

const {
  mutate: updateBlog,
  loading: blogUpdateFetching,
  error: blogUpdateError,
} = useUpdateBlogMutation();

/* =======================
 * Lifecycle Hooks
 * ======================= */

/* =======================
 * Methods
 * ======================= */

const onSubmit = async () => {
  try {
    const formValidate = await formRef.value?.validate();
    if (!formValidate?.valid) return;
    if (props.id) {
      const updateForm = {
        id: props.id,
        data: { ...form },
      };
      await updateBlog(updateForm);
      toast.success("Blog updated successfully");
    } else {
      await createBlog(form);
      toast.success("Blog created successfully");
    }
    onClose();
  } catch (error) {
    console.error(error);
  }
};

const onReset = () => {
  formRef.value?.reset();
  // blogData.value = undefined;
  Object.assign(form, initialFormState);
};

const onClose = () => {
  emit("update:isDialogVisible", false);
  // onReset();
};

/* =======================
 * Watchers
 * ======================= */

watch(
  () => props.id,
  async (id) => {
    if (id) {
      await findBlog(null, { id });
    }
  },
  { immediate: true }
);

watch(
  () => blogData.value,
  (data) => {
    if (data?.Blog) {
      const blog = data.Blog;
      Object.keys(form).forEach((key) => {
        if (Object.prototype.hasOwnProperty.call(blog, key)) {
          (form as any)[key] =
            blog[key as keyof typeof blog] ?? (form as any)[key];
        }
      });
    }
  },
  { immediate: true }
);

watch([blogCreateError, blogUpdateError, blogFindError], (errors) => {
  errors.forEach((error) => error && toast.error(error.message));
});

/* =======================
 * Computed Properties
 * ======================= */

const title = computed(() => {
  return props.id ? `Edit Blog ` : "Add Blog";
});

/* =======================
 * Exposes
 * ======================= */
</script>

<template>
   <VDialog
    fullscreen
    :model-value="props.isDialogVisible"
    @update:model-value="onClose"
    transition="dialog-bottom-transition"
  >
    <VCard>
      <div>
        <VToolbar color="primary">
          <VBtn icon variant="plain" @click="onClose">
            <VIcon color="white" icon="tabler-x" />
          </VBtn>
          <VToolbarTitle>{{ title }}</VToolbarTitle>
          <VSpacer />
          <VToolbarItems>
            <VBtn variant="text" @click.prevent="onSubmit"> Save </VBtn>
          </VToolbarItems>
        </VToolbar>
      </div>

      <VCardText>
        <VProgressLinear
          v-if="blogFindFetching"
          indeterminate
          height="3"
          color="primary"
          striped
          :rounded="false"
        />
        <VForm
          v-else
          ref="formRef"
          @submit.prevent="onSubmit()"
          @reset.prevent="onReset"
        >
          <VRow>
            <VCol cols="12">
              <VCard class="mb-6 position-initial" title="Blog Information">
                <VCardText>
                  <VRow>
                    <VCol cols="12"  >
                      <AppTextField
                        label="Title"
                        v-model.trim="form.title"
                        :rules="[requiredValidator]"
                      />
                    </VCol>



                    <VCol cols="12"  md="3">
                      <AppTextField
                        label="Author"
                        v-model.trim="form.author"
                        :rules="[requiredValidator]"
                      />
                    </VCol>

                    <VCol cols="12"  md="3">
                      <FileUpload
                        label="Image"
                        v-model:files="form.image"
                        :allowedFileTypes="['png', 'jpg', 'jpeg']"
                        :allowMultiSelection="false"
                      ></FileUpload>
                    </VCol>

                    <VCol cols="12"  md="3">
                      <FileUpload
                        label="Thumbnail"
                        v-model:files="form.thumbnail"
                        :allowedFileTypes="['png', 'jpg', 'jpeg']"
                        :allowMultiSelection="false"
                      ></FileUpload>
                    </VCol>


                    <VCol cols="12"  md="3">
                      <AppTextField
                        label="Tags"
                        v-model.trim="form.tags"
                        :rules="[requiredValidator]"
                      />
                    </VCol>

                

                    <VCol cols="12" >
                      
                      <RichText label="Content" v-model:content="form.content" />

                    </VCol>
                
                  </VRow>
                </VCardText>
              </VCard>
            </VCol>
         
          </VRow>
        </VForm>
      </VCardText>
    </VCard>
  </VDialog>
</template>

<style lang="scss"></style>
