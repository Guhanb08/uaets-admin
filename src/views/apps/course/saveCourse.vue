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
  CreateCourseMutationVariables,
  useAllActiveCourseCategoryQuery,
  useAllTagQuery,
  useCourseLazyQuery,
  useCreateCourseMutation,
  useUpdateCourseMutation,
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
const currentTab = ref("item-1");
const id = ref<number | null>(null); // `id` can be null

/* =======================
 * Form State
 * ======================= */

const formRef = ref<VForm>();
const initialFormState: CreateCourseMutationVariables = {
  name: "",
  description: "",
  shortDescription: "",
  longDescription: "",
  gallery: [],
  thumbnail: [],
  documents: [],
  videoUrl: "",
  isFree: false,
  price: null,
  isDiscounted: false,
  finalPrice: null,
  courseCategoryId: "",
};
const form = reactive<CreateCourseMutationVariables>({ ...initialFormState });
/* =======================
 * GraphQL Mutations
 * ======================= */

const {
  result: tags,
  loading: tagLoading,
  error: tagError,
  refetch: refetchTags,
} = useAllTagQuery();

const {
  result: courseCategory,
  loading: courseCategoryLoading,
  error: courseCategoryError,
  refetch: refetchCourseCategory,
} = useAllActiveCourseCategoryQuery();

const {
  load: findCourse,
  result: courseData,
  loading: courseFindFetching,
  error: courseFindError,
} = useCourseLazyQuery();

const {
  mutate: createCourse,
  loading: courseCreateFetching,
  error: courseCreateError,
} = useCreateCourseMutation();

const {
  mutate: updateCourse,
  loading: courseUpdateFetching,
  error: courseUpdateError,
} = useUpdateCourseMutation();

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
    // form.courseTags = connectTags.value;
    if (props.id) {
      const updateForm  = {
        ...form,
        id: props.id,
      }
      await updateCourse(updateForm);
      toast.success("Course updated successfully");

    } else {
      await createCourse(form);
      toast.success("Course created successfully");

    }

      onClose();
  } catch (error) {
    console.error(error);
  }
};

const onReset = () => {
  formRef.value?.reset();
  // courseData.value = undefined;
  Object.assign(form, initialFormState);
};

const onClose = () => {
  emit("update:isDialogVisible", false);
  // onReset();
};

const selectedTags = ref<string[]>([]);
/* =======================
 * Watchers
 * ======================= */

watch(
  () => props.id,
  async (id) => {
    if (id) {
      await findCourse(null, { id });
    }
  },
  { immediate: true }
);

watch(
  () => courseData.value,
  (data) => {
    if (data?.Course) {
      const course = data.Course;
      Object.keys(form).forEach((key) => {
        if (Object.prototype.hasOwnProperty.call(course, key)) {
          (form as any)[key] =
            course[key as keyof typeof course] ?? (form as any)[key];
        }
      });
    }
  },
  { immediate: true }
);

watch([courseCreateError, courseUpdateError, courseFindError], (errors) => {
  errors.forEach((error) => error && toast.error(error.message));
});

/* =======================
 * Computed Properties
 * ======================= */

const title = computed(() => {
  return props.id ? `Edit Record ` : "Add Record";
});

const connectTags = computed(() => {
  return selectedTags.value.map((tag) => ({
    tag: {
      connect: {
        id: tag,
      },
    },
  }));
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
          v-if="courseFindFetching"
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
            <VCol cols="12" md="8">
              <VCard class="mb-6 position-initial" title="Course Information">
                <VCardText>
                  <VRow>
                    <VCol cols="12" md="8">
                      <AppTextField
                        label="Name"
                        v-model.trim="form.name"
                        :rules="[requiredValidator]"
                      />
                    </VCol>
                
                    <VCol cols="12" md="4">
                      <AppAutocomplete
                        label="Category"
                        :items="courseCategory?.AllCourseCategory"
                        item-title="name"
                        item-value="id"
                        placeholder="Select Category"
                        :rules="[requiredValidator]"
                        v-model="form.courseCategoryId"
                      />
                    </VCol>
                    <VCol cols="12" md="12">
                      <AppTextField
                        label="Short Description"
                        v-model.trim="form.shortDescription"
                        :rules="[requiredValidator]"
                      />
                    </VCol>
                  <!--   <VCol cols="12" md="8">
                      <AppAutocomplete
                        label="Tags"
                        :items="tags?.AllTag"
                        item-title="name"
                        chips
                        item-value="id"
                        placeholder="Select Tags"
                        multiple
                        :rules="[requiredValidator]"
                        v-model="selectedTags"
                      />
                    </VCol> -->

                    <VCol>
                      <VTabs v-model="currentTab">
                        <VTab>Description</VTab>
                        <VTab>Additional Description</VTab>
                      </VTabs>
                      <div class="mt-5">
                        <VWindow v-model="currentTab">
                          <VWindowItem :key="2" value="item-1">
                            <RichText v-model:content="form.description" />
                          </VWindowItem>

                          <VWindowItem :key="3" value="item-2">
                            <RichText v-model:content="form.longDescription" />
                          </VWindowItem>
                        </VWindow>
                      </div>
                    </VCol>
                  </VRow>
                </VCardText>
              </VCard>
            </VCol>
            <VCol cols="12" md="4">
              <VCard title="Pricing" class="mb-6">
                <VCardText>
                  <VRow>
                    <VCol
                      cols="12"
                      :md="form.isDiscounted ? 6 : 12"
                      v-if="!form.isFree"
                    >
                      <AppTextField
                        label="Best Price"
                        v-model.number="form.price"
                        prefix="CHF"
                        type="number"
                        :rules="[!form.isFree ? requiredValidator : null]"
                      />
                    </VCol>
                    <VCol
                      cols="12"
                      md="6"
                      v-if="form.isDiscounted && !form.isFree"
                    >
                      <AppTextField
                        label="Discount Price"
                        prefix="€"
                        type="number"
                        v-model.number="form.finalPrice"
                        :rules="[form.isDiscounted ? requiredValidator : null]"
                      />
                    </VCol>
                    <VCol cols="12" md="6">
                      <VCheckbox label="Is Free Course" v-model="form.isFree" />
                    </VCol>
                    <VCol cols="12" md="6" v-if="!form.isFree">
                      <VCheckbox
                        label="Is Discounted"
                        v-model="form.isDiscounted"
                      />
                    </VCol>
                  </VRow>
                </VCardText>
              </VCard>
              <VCard title="Gallery" class="mb-6">
                <VCardText>
                  <VRow>
                    <VCol cols="12">
                      <FileUpload
                        label="Course Thumbnail"
                        v-model:files="form.thumbnail"
                        :allowedFileTypes="['png', 'jpg', 'jpeg']"
                        :allowMultiSelection="true"
                      ></FileUpload>
                    </VCol>
                    <VCol cols="12">
                      <FileUpload
                        label="Course Gallery"
                        v-model:files="form.gallery"
                        :allowedFileTypes="['png', 'jpg', 'jpeg', 'mp4']"
                        :allowMultiSelection="true"
                      ></FileUpload>
                    </VCol>


                    <VCol cols="12">
                      <FileUpload
                        label="Course Documents"
                        v-model:files="form.documents"
                        :allowedFileTypes="['pdf']"
                        :allowMultiSelection="true"
                      ></FileUpload>
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
