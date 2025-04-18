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
  CreateCourseCategoryMutationVariables,
  useCourseCategoryLazyQuery,
  useCreateCourseCategoryMutation,
  useUpdateCourseCategoryMutation,
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
const initialFormState: CreateCourseCategoryMutationVariables = {
  name: "",
};
const form = reactive<CreateCourseCategoryMutationVariables>({
  ...initialFormState,
});
/* =======================
 * GraphQL Mutations
 * ======================= */
const {
  load: findCourseCategory,
  result: courseCategoryData,
  loading: courseCategoryFindFetching,
  error: courseCategoryFindError,
} = useCourseCategoryLazyQuery();

const {
  mutate: createCourseCategory,
  loading: courseCategoryCreateFetching,
  error: courseCategoryCreateError,
} = useCreateCourseCategoryMutation();

const {
  mutate: updateCourseCategory,
  loading: courseCategoryUpdateFetching,
  error: courseCategoryUpdateError,
} = useUpdateCourseCategoryMutation();

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
      await updateCourseCategory({ id: props.id, data: { ...form } });
      toast.success("Course category updated successfully");
    } else {
      await createCourseCategory(form);
      toast.success("Course category created successfully");
    }

    onClose();
  } catch (error) {
    console.error(error);
  }
};

const onReset = () => {
  formRef.value?.reset();
  // courseCategoryData.value = undefined;
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
      await findCourseCategory(null, { id });
    }
  },
  { immediate: true }
);

watch(
  () => courseCategoryData.value,
  (data) => {
    if (data?.CourseCategory) {
      const courseCategory = data.CourseCategory;
      Object.keys(form).forEach((key) => {
        if (Object.prototype.hasOwnProperty.call(courseCategory, key)) {
          (form as any)[key] =
            courseCategory[key as keyof typeof courseCategory] ??
            (form as any)[key];
        }
      });
    }
  },
  { immediate: true }
);

watch(
  [
    courseCategoryCreateError,
    courseCategoryUpdateError,
    courseCategoryFindError,
  ],
  (errors) => {
    errors.forEach((error) => error && toast.error(error.message));
  }
);

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
          v-if="courseCategoryFindFetching"
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
                label="Name"
                v-model.trim="form.name"
                :rules="[requiredValidator]"
              />
            </VCol>
            <VCol cols="12">
              <div class="d-flex justify-end flex-wrap gap-3">
                <VBtn variant="tonal" color="secondary" type="reset">
                  Reset
                </VBtn>
                <VBtn
                  type="submit"
                  :loading="
                    courseCategoryCreateFetching || courseCategoryUpdateFetching
                  "
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
