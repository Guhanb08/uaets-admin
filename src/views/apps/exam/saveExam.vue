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
  CreateExamMutationVariables,
  useAllTagQuery,
  useExamLazyQuery,
  useCreateExamMutation,
  useUpdateExamMutation,
  ExamType,
  useAllActiveCourseQuery,
  useAllLanguageQuery,
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
const initialFormState: CreateExamMutationVariables = {
  name: "", // Default exam name
  language: "",
  description: "", // Default short description
  duration: null, // Default duration (60 minutes)
  totalMarks: null, // Default total marks
  passingMarks: null, // Default passing marks (40%)
  examType: ExamType.Preparation, // Default exam type: Preparation
  courseName: "", // Default course name
  courseId : "",
  level: null, // Default level (1)
  defaultMarks: null, // Default marks per question (1)
};

const form = reactive<CreateExamMutationVariables>({ ...initialFormState });
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
  result: languages,
  loading: languageLoading,
  error: languageError,
  refetch: refetchLanguages,
} = useAllLanguageQuery();

const {
  load: findExam,
  result: examData,
  loading: examFindFetching,
  error: examFindError,
} = useExamLazyQuery();

const {
  mutate: createExam,
  loading: examCreateFetching,
  error: examCreateError,
} = useCreateExamMutation();

const {
  mutate: updateExam,
  loading: examUpdateFetching,
  error: examUpdateError,
} = useUpdateExamMutation();

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
    // form.examTags = connectTags.value;
    if (props.id) {
      const updateForm = {
        ...form,
        id: props.id,
      };
      await updateExam(updateForm);
      toast.success("Exam updated successfully");

    } else {
      await createExam(form);
      toast.success("Exam created successfully");

    }
    onClose();

  } catch (error) {
    console.error(error);
  }
};

const onReset = () => {
  formRef.value?.reset();
  // examData.value = undefined;
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
      await findExam(null, { id });
    }
  },
  { immediate: true }
);

watch(
  () => examData.value,
  (data) => {
    if (data?.Exam) {
      const exam = data.Exam;
      Object.keys(form).forEach((key) => {
        if (Object.prototype.hasOwnProperty.call(exam, key)) {
          (form as any)[key] =
            exam[key as keyof typeof exam] ?? (form as any)[key];
        }
      });
    }
  },
  { immediate: true }
);

watch([examCreateError, examUpdateError, examFindError], (errors) => {
  errors.forEach((error) => error && toast.error(error.message));
});

/* =======================
 * Computed Properties
 * ======================= */

const title = computed(() => {
  return props.id ? `Edit Exam ` : "Add Exam";
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
    :width="$vuetify.display.smAndDown ? 300 : 900"
    :model-value="props.isDialogVisible"
    @update:model-value="onClose"
  >
    <DialogCloseBtn @click="onClose()" />

    <VCard :title="title">
      <!--    <div>
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
      </div> -->

      <VCardText>
        <VProgressLinear
          v-if="examFindFetching"
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
                prepend-inner-icon="tabler-writing"
                label="Name"
                v-model.trim="form.name"
                :rules="[requiredValidator]"
              />
            </VCol>

            <VCol cols="12" >
              <AppAutocomplete
                prepend-inner-icon="tabler-book"
                label="Courses"
                :items="courses?.AllCourse"
                item-title="name"
                item-value="id"
                placeholder="Select Courses"
                :rules="[requiredValidator]"
                v-model="form.courseId"
              />

            </VCol>

            <VCol cols="12" md="4">
              <AppSelect
                prepend-inner-icon="tabler-school"
                label="Exam Type"
                :items="[ExamType.Preparation, ExamType.Final]"
                placeholder="Select Type"
                :rules="[requiredValidator]"
                v-model="form.examType"
              />
            </VCol>

            <VCol cols="12" md="4">
              <AppTextField
                type="number"
                prepend-inner-icon="tabler-stairs"
                label="Level"
                v-model.number="form.level"
              />
            </VCol>

            <VCol cols="12" md="4">
              <AppAutocomplete
                prepend-inner-icon="tabler-language"
                label="Language"
                :items="languages?.AllLanguage"
                item-title="name"
                item-value="name"
                placeholder="Select Language"
                :rules="[requiredValidator]"
                v-model="form.language"
              />
            </VCol>

            <VCol cols="12" md="12">
              <AppTextField
                prepend-inner-icon="tabler-align-left"
                label="Short Description"
                v-model.trim="form.description"
              />
            </VCol>
            <VCol cols="12" md="4">
              <AppTextField
                type="number"
                prepend-inner-icon="tabler-clock"
                label="Duration (in Mins)"
                v-model.number="form.duration"
              />
            </VCol>
            <VCol cols="12" md="4">
              <AppTextField
                type="number"
                prepend-inner-icon="tabler-list-numbers"
                label="Marks per Question"
                v-model.number="form.defaultMarks"
              />
            </VCol>
           <!--  <VCol cols="12" md="4">
              <AppTextField
                type="number"
                label="Total Marks"
                prepend-inner-icon="tabler-sum"
                v-model.number="form.totalMarks"
              />
            </VCol> -->

            <VCol cols="12" md="4">
              <AppTextField
                type="number"
                label="Passing Marks (%)"
                prepend-inner-icon="tabler-checklist"
                v-model.number="form.passingMarks"
              />
            </VCol>
            <VCol cols="12">
              <div class="d-flex justify-end flex-wrap gap-3">
                <VBtn variant="tonal" color="secondary" type="reset">
                  Reset
                </VBtn>
                <VBtn
                  type="submit"
                  :loading="examCreateFetching || examUpdateFetching"
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
