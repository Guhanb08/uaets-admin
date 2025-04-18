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
  useLearnerCourseLazyQuery,
  LearnerCourseType,

  useAllActiveCourseQuery,
  useCreateLearnerCourseMutation,
  CreateLearnerCourseMutationVariables,
  LearnerCourseStatus
} from "@/generated/operations";

/* =======================
 * Interfaces
 * ======================= */
interface Props {
  isDialogVisible: boolean;
  userId?: string;
}
interface Emit {
  (e: "update:isDialogVisible", value: boolean): void;
}

/* =======================
 * Props & Emits
 * ======================= */

const props = withDefaults(defineProps<Props>(), {
  isDialogVisible: false,
  userId: undefined,
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
const initialFormState: CreateLearnerCourseMutationVariables = {

  userId: "",
  courseId: "",
  status : LearnerCourseStatus.Enrolled,
  type : LearnerCourseType.Trial,

};
const form = reactive<CreateLearnerCourseMutationVariables>({ ...initialFormState });
/* =======================
 * GraphQL Mutations
 * ======================= */


 const {
  result: courses,
  loading: courseLoading,
  error: courseError,
  refetch: refetchCourses,
} = useAllActiveCourseQuery();


const {
  load: findLearnerCourse,
  result: learnerCourseData,
  loading: learnerCourseFindFetching,
  error: learnerCourseFindError,
} = useLearnerCourseLazyQuery();

const {
  mutate: createLearnerCourse,
  loading: learnerCourseCreateFetching,
  error: learnerCourseCreateError,
} = useCreateLearnerCourseMutation();



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

   /*  if (props.id) {
      await updateLearnerCourse({ id: props.id, data: { ...form } });
      toast.success("Learner Course updated successfully");
    } else { */
      await createLearnerCourse(form);
      toast.success("Learner Course created successfully");
    // }
    onClose();
  } catch (error) {
    console.error(error);
  }
};

const onReset = () => {
  formRef.value?.reset();
  // learnerCourseData.value = undefined;
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
  () => props.userId,
  async (id) => {
    if (id) {
      // await findLearnerCourse(null, { id });
      form.userId = id
    }
  },
  { immediate: true }
);

watch(
  () => learnerCourseData.value,
  (data) => {
    if (data?.LearnerCourse) {
      const learnerCourse = data.LearnerCourse;
      Object.keys(form).forEach((key) => {
        if (Object.prototype.hasOwnProperty.call(learnerCourse, key)) {
          (form as any)[key] =
            learnerCourse[key as keyof typeof learnerCourse] ?? (form as any)[key];
        }
      });
    }
  },
  { immediate: true }
);
// learnerCourseUpdateError
watch([learnerCourseCreateError, learnerCourseFindError], (errors) => {
  errors.forEach((error) => error && toast.error(error.message));
});

/* =======================
 * Computed Properties
 * ======================= */

const title = computed(() => {
  // return props.id ? `Edit Record ` : "Add Record";
  return "Add Learner Course";
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
          v-if="learnerCourseFindFetching"
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

       
            <VCol cols="12" >
              <AppAutocomplete
                prepend-inner-icon="tabler-book"
                label="Course"
                :items="courses?.AllCourse"
                item-title="name"
                item-value="id"
                placeholder="Select Courses"
                :rules="[requiredValidator]"
                v-model="form.courseId"
              />
            </VCol>




            <VCol cols="12" >
              <AppSelect
                prepend-inner-icon="tabler-school"
                label="Purchase Method"
                placeholder="Select Method"
                :items="[LearnerCourseType.Trial, LearnerCourseType.Paid]"
                :rules="[requiredValidator]"
                v-model="form.type"
              />
            </VCol>
            
            <VCol cols="12">
              <AppDateTimePicker
               v-if="form.type === LearnerCourseType.Trial"
                v-model="form.expiryAt"
                label="Expiry Date"
              />
            </VCol>

            <VCol cols="12">
              <div class="d-flex justify-end flex-wrap gap-3">
                <VBtn variant="tonal" color="secondary" type="reset">
                  Reset
                </VBtn>
                <VBtn
                  type="submit"
                  :loading="learnerCourseCreateFetching"
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
