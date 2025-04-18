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
  CreateContentMutationVariables,
  useCreateContentMutation,
  useContentLazyQuery,
  useUpdateContentMutation,
  ContentType,
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
const initialFormState: CreateContentMutationVariables = {
  key: "",
  title: "",
  image: "",
  formConfig: [],
  formValue: {},
  contentType: ContentType.Section,
};
const form = reactive<CreateContentMutationVariables>({ ...initialFormState });
/* =======================
 * GraphQL Mutations
 * ======================= */
const {
  load: findContent,
  result: contentData,
  loading: contentFindFetching,
  error: contentFindError,
} = useContentLazyQuery();

const {
  mutate: createContent,
  loading: contentCreateFetching,
  error: contentCreateError,
} = useCreateContentMutation();

const {
  mutate: updateContent,
  loading: contentUpdateFetching,
  error: contentUpdateError,
} = useUpdateContentMutation();

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
      await updateContent({ id: props.id, data: { ...form } });
      toast.success("Content updated successfully");
    } else {
      await createContent(form);
      toast.success("Content created successfully");
    }
    onClose();
  } catch (error) {
    console.error(error);
  }
};

const onReset = () => {
  formRef.value?.reset();
  // contentData.value = undefined;
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
      await findContent(null, { id });
    }
  },
  { immediate: true }
);

watch(
  () => contentData.value,
  (data) => {
    if (data?.Content) {
      const content = data.Content;
      Object.keys(form).forEach((key) => {
        if (Object.prototype.hasOwnProperty.call(content, key)) {
          (form as any)[key] =
            content[key as keyof typeof content] ?? (form as any)[key];
        }
      });
    }
  },
  { immediate: true }
);

watch([contentCreateError, contentUpdateError, contentFindError], (errors) => {
  errors.forEach((error) => error && toast.error(error.message));
});

/* =======================
 * Computed Properties
 * ======================= */

const title = computed(() => {
  return props.id ? `Edit Record ` : "Add Record";
});

/* =======================
 * Exposes
 * ======================= */
</script>

<template>
  <VDialog
    :width="$vuetify.display.smAndDown ? 300 : 600"
    :model-value="props.isDialogVisible"
    @update:model-value="onClose"
  >
    <DialogCloseBtn @click="onClose()" />
    <VCard :title="title">
      <VCardText>
        <VProgressLinear
          v-if="contentFindFetching"
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
              <AppTextField
                prepend-inner-icon="tabler-edit"
                label="Title"
                v-model.trim="form.title"
              />
            </VCol>

          <!--   <VCol cols="12">
              <AppTextField
                prepend-inner-icon="tabler-keyboard"
                label="Key"
                v-model.trim="form.key"
              />
            </VCol> -->

            <VCol cols="12">
              <AppSelect
                label="Purchase Method"
                placeholder="Select Method"
                :items="[
                  ContentType.Page,
                  ContentType.Banner,
                  ContentType.Section,
                ]"
                :rules="[requiredValidator]"
                v-model="form.contentType"
              />
            </VCol>

            <VCol cols="12">
              <FileUpload
                label="Image"
                v-model:files="form.image"
                :allowedFileTypes="['png', 'jpg', 'jpeg']"
                :allowMultiSelection="false"
              ></FileUpload>
            </VCol>

            <VCol cols="12">
              <div class="d-flex justify-end flex-wrap gap-3">
                <VBtn variant="tonal" color="secondary" type="reset">
                  Reset
                </VBtn>
                <VBtn
                  type="submit"
                  :loading="contentCreateFetching || contentUpdateFetching"
                >
                  {{ id ? "Update" : "Save" }}
                </VBtn>
              </div>
            </VCol>
          </VRow>
        </VForm>
      </VCardText>
    </VCard>
  </VDialog>
</template>

<style lang="scss"></style>
