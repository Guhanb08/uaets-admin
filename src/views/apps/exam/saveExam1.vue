<script setup lang="ts">
/* =======================
 * Page Metadata
 * ======================= */

/* =======================
 * Components & Utilities
 * ======================= */
import { toast } from "vue-sonner";
import type { VForm } from "vuetify/components/VForm";
import ExamStepper from "./ExamStepper.vue";
import draggable from "vuedraggable";

/* =======================
 * GraphQL
 * ======================= */
import {
  CreateExamMutationVariables,
  useAllTagQuery,
  useExamLazyQuery,
  useCreateExamMutation,
  useUpdateExamMutation,
  Question,
  useAllCourseQuery,
  ExamType,
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
  name: "",
  description: "",
  duration: null,
  totalMarks: null,
  passingMarks: null,
  examType: ExamType.Preparation,
  courseName: "",
  level: null,
  defaultMarks: null,
};

const form = reactive<CreateExamMutationVariables>({ ...initialFormState });
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
  result: courses,
  loading: courseLoading,
  error: courseError,
  refetch: refetchCourses,
} = useAllCourseQuery();

const {
  load: findExam,
  result: courseData,
  loading: courseFindFetching,
  error: courseFindError,
} = useExamLazyQuery();

const {
  mutate: createExam,
  loading: courseCreateFetching,
  error: courseCreateError,
} = useCreateExamMutation();

const {
  mutate: updateExam,
  loading: courseUpdateFetching,
  error: courseUpdateError,
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
    // form.courseTags = connectTags.value;
    if (props.id) {
      const updateForm = {
        ...form,
        id: props.id,
      };
      await updateExam(updateForm);
    } else {
      await createExam(form);
    }

    if (!courseUpdateError.value || !courseCreateError.value) {
      onClose();
    }
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
      await findExam(null, { id });
    }
  },
  { immediate: true }
);

watch(
  () => courseData.value,
  (data) => {
    if (data?.Exam) {
      const course = data.Exam;
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

const currentStep = ref(0);
type QuestionModel = {
  title: string;
  image: string;
  options: {
    option: string;
    isCorrect: boolean;
  }[];
};

const questions = reactive<QuestionModel[]>([]);

const addOption = (index: number) => {
  questions[index].options.push({
    option: "",
    isCorrect: false,
  });
  toast.success("Option added!");
};

const addQuestion = () => {
  questions.push({
    title: "",
    image: "",
    options: [],
  });
  toast.success("Question added!");
};

const removeQuestion = (index: number) => {
  questions.splice(index, 1);
  toast.success("Question removed!");
};
</script>

<template>
  <VDialog
    fullscreen
    :model-value="props.isDialogVisible"
    @update:model-value="onClose"
    persistent
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
        <VForm ref="formRef" @submit.prevent="onSubmit()">
          <VRow>
            <VCol md="8">
              <VCard class="mb-6 position-initial" title="Exam Information">
                <VCardText>
                  <VRow>
                    <VCol cols="12" md="6">
                      <AppTextField
                        label="Name"
                        v-model="form.name"
                        :rules="[requiredValidator]"
                      />
                    </VCol>

                    <VCol cols="12" md="6">
                      <AppAutocomplete
                        label="Courses"
                        :items="courses?.AllCourse"
                        item-title="name"
                        item-value="name"
                        placeholder="Select Courses"
                        :rules="[requiredValidator]"
                        v-model="form.courseName"
                      />
                    </VCol>
                    <VCol cols="12" md="3">
                      <AppSelect
                        label="Exam Type"
                        :items="[ExamType.Preparation, ExamType.Final]"
                        placeholder="Select Type"
                        :rules="[requiredValidator]"
                        v-model="form.examType"
                      />
                    </VCol>

                    <VCol cols="12" md="3">
                      <AppTextField label="Level" v-model.number="form.level" />
                    </VCol>

                    <VCol cols="12" md="6">
                      <AppTextField
                        label="Short Description"
                        v-model="form.description"
                        :rules="[requiredValidator]"
                      />
                    </VCol>
                    <VCol cols="12">
                      <VRow>
                        <VCol
                          cols="12"
                          md="4"
                          :class="
                            $vuetify.display.smAndDown ? 'border-b' : 'border-e'
                          "
                        >
                          <div class="d-flex justify-space-between">
                            <h5 class="text-lg">Questions</h5>

                            <VBtn
                              color="success"
                              size="small"
                              @click="addQuestion"
                            >
                              <VIcon icon="tabler-plus" />
                              Add
                            </VBtn>
                          </div>

                          <ExamStepper
                            style="height: 500px; overflow: scroll"
                            v-model:current-step="currentStep"
                            :items="questions"
                            direction="vertical"
                            icon-size="22"
                            class="stepper-icon-step-bg"
                          />
                        </VCol>

                        <VCol cols="12" md="8">
                          <VCardText v-if="questions.length">
                            <VWindow
                              v-model="currentStep"
                              class="disable-tab-transition"
                            >
                              <VWindowItem
                                v-for="(question, index) in questions"
                              >
                                <AppCardActions
                                  :title="'Question ' + (index + 1)"
                                  class="mb-6 relative"
                                >
                                  <!--    :action-remove="true"
                                @trash="removeQuestion(index)" -->
                                  <VCardText>
                                    <VRow>
                                      <VCol cols="12">
                                        <AppTextField
                                          label="Question"
                                          v-model="question.title"
                                          :rules="[requiredValidator]"
                                        />
                                      </VCol>
                                      <VCol cols="12">
                                        <FileUpload
                                          label="Images"
                                          v-model:files="question.image"
                                          :allowedFileTypes="[
                                            'png',
                                            'jpg',
                                            'jpeg',
                                            'mp4',
                                          ]"
                                          :allowMultiSelection="true"
                                        ></FileUpload>
                                      </VCol>

                                      <VCol cols="12">
                                        <draggable
                                          v-model="question.options"
                                          item-key="optionIndex"
                                          class="d-flex flex-column gap-2 mb-4"
                                        >
                                          <template
                                            #item="{
                                              element: option,
                                              index: optionIndex,
                                            }"
                                          >
                                            <div
                                              class="d-flex gap-2 align-center"
                                            >
                                              <VCheckbox
                                                v-model="option.isCorrect"
                                              />

                                              <AppTextField
                                                class="w-100"
                                                v-model="option.option"
                                              />

                                              <VBtn
                                                variant="tonal"
                                                color="error"
                                                icon="tabler-trash"
                                                @click="
                                                  question.options.splice(
                                                    optionIndex,
                                                    1
                                                  )
                                                "
                                              />
                                              <VIcon
                                                size="18"
                                                icon="tabler-background"
                                                class="cursor-move text-secondary"
                                              />
                                            </div>
                                          </template>
                                        </draggable>
                                      </VCol>

                                      <VCol cols="12">
                                        <VBtn
                                          variant="outlined"
                                          block
                                          @click="addOption(index)"
                                        >
                                          Add Option
                                        </VBtn>
                                      </VCol>
                                    </VRow>
                                  </VCardText>
                                </AppCardActions>
                              </VWindowItem>
                            </VWindow>

                            <div
                              class="d-flex flex-wrap gap-4 justify-space-between mt-6"
                            >
                              <VBtn
                                color="secondary"
                                variant="tonal"
                                :disabled="currentStep === 0"
                                @click="currentStep--"
                              >
                                <VIcon
                                  icon="tabler-arrow-left"
                                  start
                                  class="flip-in-rtl"
                                />
                                Previous
                              </VBtn>

                              <VBtn
                                :disabled="currentStep === questions.length - 1"
                                @click="currentStep++"
                              >
                                Next

                                <VIcon
                                  icon="tabler-arrow-right"
                                  end
                                  class="flip-in-rtl"
                                />
                              </VBtn>
                            </div>
                          </VCardText>
                        </VCol>
                      </VRow>
                    </VCol>
                  </VRow>
                </VCardText>
              </VCard>
            </VCol>

            <VCol md="4" cols="12">
              <VCard title="Additional Info" class="mb-6">
                <VCardText>
                  <VRow>
                    <VCol cols="12" md="6">
                      <AppTextField
                        label="Duration"
                        v-model.number="form.duration"
                      />
                    </VCol>

                    <VCol cols="12" md="6">
                      <AppTextField
                        label="Total Marks"
                        v-model.number="form.totalMarks"
                      />
                    </VCol>

                    <VCol cols="12" md="6">
                      <AppTextField
                        label="Passing Marks"
                        v-model.number="form.passingMarks"
                      />
                    </VCol>

                    <VCol cols="12" md="6">
                      <AppTextField
                        label="Marks per Question"
                        v-model.number="form.defaultMarks"
                      />
                    </VCol>
                  </VRow>
                </VCardText>
              </VCard>
              <VCard title="Questions Preview" class="mb-6">
                <VCardText style="height: 500px; overflow: scroll">
                  <VRow v-if="questions.length">
                    <VCol
                      cols="12"
                      v-for="(question, index) in questions"
                      :key="index"
                    >
                      <div v-if="question.title" class="border pa-4">
                        <p class="font-weight-bold mb-2 text-primary">
                          {{ index + 1 }}. {{ question.title }}
                        </p>
                        <ul class="ml-4">
                          <li v-for="option in question.options" class="mb-1">
                            <span v-if="option.option">{{
                              option.option
                            }}</span>
                          </li>
                        </ul>
                      </div>
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
