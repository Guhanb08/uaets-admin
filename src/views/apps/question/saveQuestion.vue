<script setup lang="ts">
/* =======================
 * Page Metadata
 * ======================= */

/* =======================
 * Components & Utilities
 * ======================= */
import { toast } from "vue-sonner";
import type { VForm } from "vuetify/components/VForm";
import Quiz from "@images/pages/quiz.png";

/* =======================
 * GraphQL
 * ======================= */
import {
  CreateQuestionMutationVariables,
  useCreateQuestionMutation,
  useCreateDummyQuestionsMutation,
  useUpdateQuestionMutation,
  useAllQuestionByExamIdLazyQuery,
  Question,
  QuestionType,
  useDeleteQuestionMutation,
  Status
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
const questionsCount = ref<number | null>(null);
const id = ref<number | null>(null); // `id` can be null
const currentQuestionIndex = ref(0);

/* =======================
 * Form State
 * ======================= */

const formRef = ref<VForm>();

const initialFormState: CreateQuestionMutationVariables = {
  question: "",
  description: "",
  thumbnail: "",
  answerExplanation: "",
  videoUrl: "",
  gallery: [],
  type: QuestionType.Mcq,
  examId: "",
  options: [
    {
      text: "",
      isCorrect: false,
    },
    {
      text: "",
      isCorrect: false,
    },
    {
      text: "",
      isCorrect: false,
    },
    {
      text: "",
      isCorrect: false,
    },
  ] as any[],
};

const form = reactive<any>({ ...initialFormState });
/* =======================
 * GraphQL Mutations
 * ======================= */

const {
  load: findQuestion,
  result: questions,
  loading: questionFindFetching,
  error: questionFindError,
  refetch: refetchQuestion,
} = useAllQuestionByExamIdLazyQuery();

const {
  mutate: createQuestion,
  loading: questionCreateFetching,
  error: questionCreateError,
} = useCreateQuestionMutation();

const {
  mutate: createDummyQuestions,
  loading: questionCreateDummyFetching,
  error: questionCreateDummyError,
} = useCreateDummyQuestionsMutation();

const {
  mutate: updateQuestion,
  loading: questionUpdateFetching,
  error: questionUpdateError,
} = useUpdateQuestionMutation();

const {
  mutate: deleteQuestion,
  loading: questionDeleteLoading,
  error: questionDeleteError,
} = useDeleteQuestionMutation();

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
    // form.questionTags = connectTags.value;
    if (props.id) {
      const updateForm = {
        ...form,
        id: props.id,
      };
      await updateQuestion(updateForm);
    } else {
      await createQuestion(form);
    }

    if (!questionUpdateError.value || !questionCreateError.value) {
      onClose();
    }
  } catch (error) {
    console.error(error);
  }
};

const initQuestions = async () => {
  try {
    if (!questionsCount.value || !props.id) return;

    if (questionsCount.value < 1 || questionsCount.value > 100) {
      toast.error("Please enter between 1 and 100 questions.");
      return;
    }

    await createDummyQuestions({
      count: questionsCount.value,
      examId: props.id,
    });
    questionsCount.value = null;
    toast.success("Questions added!");
    await refetchQuestion();
  } catch (error) {
    console.error(error);
  }
};

const onDelete = async () => {
  if (!currentQuestion.value?.id) return;
  const deletedIndex = currentQuestionIndex.value;
  await deleteQuestion({ id: currentQuestion.value.id });

  if (!questionDeleteError.value) toast.success("Question deleted!");

  await refetchQuestion();

  const totalQuestions = questions.value?.AllQuestion?.length ?? 0;

  // If the deleted question was the last one, move back
  if (deletedIndex >= totalQuestions && deletedIndex > 0) {
    currentQuestionIndex.value--;
  }
};

const onClose = () => {
  emit("update:isDialogVisible", false);
  // onReset();
};

const initQuestion = () => {
  if (currentQuestion.value) {
    
  form.question = currentQuestion.value.question ?? "";
  form.description = currentQuestion.value.description ?? "";
  form.thumbnail = currentQuestion.value.thumbnail ?? "";
  form.answerExplanation = currentQuestion.value.answerExplanation ?? "";
  form.videoUrl = currentQuestion.value.videoUrl ?? "";
  form.gallery = currentQuestion.value.gallery ?? [];
  form.type = currentQuestion.value.type ?? QuestionType.Mcq;
  form.examId = currentQuestion.value.examId ?? "";

  // Ensure options are assigned properly
  form.options = currentQuestion.value.options?.map((option : any) => ({
    text: option.text ?? "",
    isCorrect: option.isCorrect ?? false,
  })) ?? [];
  }
};

const onAddQuestion = async () => {
  if (!props.id) return;
  const payload = {
    ...initialFormState,
    examId: props.id,
  };
  await createQuestion(payload);
  await refetchQuestion();
  if (!questionCreateError.value) toast.success("Question added!");
};

const onSaveQuestion = async () => {
  if (!props.id || !currentQuestion.value) return;
  const payload = {
    id: currentQuestion.value?.id,
    ...form,
    status: Status.Active,
    examId: props.id,
  };
  await updateQuestion(payload);
  await refetchQuestion();
  if (!questionUpdateError.value) toast.info("Question updated!");

  if (
    currentQuestionIndex.value <
    (questions.value?.AllQuestion?.length ?? 1) - 1
  ) {
    currentQuestionIndex.value++;
  }
  initQuestion();


  // if not last add index
};
const removeOption = (index: number) => {
  form.options.splice(index, 1);
}

const addOption = () => {
  form.options.push({
    text: "",
    isCorrect: false,
  });
}

const selectQuestion = (index: number) => {
  currentQuestionIndex.value = index
  initQuestion()
}

const prevQuestion = () => {
  currentQuestionIndex.value--
  initQuestion()
}

const nextQuestion = () => {
  currentQuestionIndex.value++
  initQuestion()
}

/* =======================
 * Watchers
 * ======================= */

watch(
  () => props.id,
  async (id) => {
    if (id) {
      await findQuestion(null, { examId: id });
      initQuestion();
    }
  },
  { immediate: true }
);

/* watch(
  () => questionData.value,
  (data) => {
    if (data?.Question) {
      const question = data.Question;
      Object.keys(form).forEach((key) => {
        if (Object.prototype.hasOwnProperty.call(question, key)) {
          (form as any)[key] =
            question[key as keyof typeof question] ?? (form as any)[key];
        }
      });
    }
  },
  { immediate: true }
); */

watch(
  [
    questionCreateError,
    questionUpdateError,
    questionFindError,
    questionDeleteError,
  ],
  (errors) => {
    errors.forEach((error) => error && toast.error(error.message));
  }
);

/* =======================
 * Computed Properties
 * ======================= */

const title = computed(() => "Questionnaire");

const currentQuestion = computed(
  () => questions.value?.AllQuestion[currentQuestionIndex.value]
);

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
            <VBtn variant="text" @click.prevent="onClose"> Close </VBtn>
          </VToolbarItems>
        </VToolbar>
      </div>
      <VCardText>
        <!-- <VProgressLinear
          v-if="questionFindFetching"
          indeterminate
          height="3"
          color="primary"
          striped
          :rounded="false"
        /> -->
        <VForm ref="formRef">
          <div
            class="d-flex w-100 justify-center"
            v-if="questions?.AllQuestion.length === 0"
          >
            <div>
              <h1 class="text-center">Build Your Questionnaire...</h1>
              <img height="400" class="img-fluid" :src="Quiz" />
              <AppTextField
                clearable
                type="number"
                placeholder="Enter Number between 1 - 100"
                v-model.number="questionsCount"
              >
                <template #append>
                  <VBtn
                    :icon="$vuetify.display.smAndDown"
                    @click="initQuestions()"
                  >
                    <VIcon icon="tabler-circle-plus" color="#fff" size="22" />
                    <span v-if="$vuetify.display.mdAndUp" class="ms-3"
                      >Add
                    </span>
                  </VBtn>
                </template>
              </AppTextField>
            </div>
          </div>

          <VRow v-else>
            <VCol cols="12" md="8">
              <VCard
                class="mb-6 position-initial"
                :title="'Question Information ' + (currentQuestionIndex + 1)"
              >
                <VCardText v-if="currentQuestion">
                  <VRow>
                    <VCol cols="12" md="12">
                      <AppTextarea
                        label="Question"
                        v-model.trim="form.question"
                        auto-grow
                        rows="2"
                      />
                    </VCol>
                    <VCol cols="12" md="6">
                      <FileUpload
                        label="Image"
                        v-model:files="form.thumbnail"
                        :allowedFileTypes="['png', 'jpg', 'jpeg']"
                        :allowMultiSelection="false"
                      ></FileUpload>
                    </VCol>

                    <VCol cols="12" md="6">
                      <AppTextField label="Video" v-model="form.videoUrl" />
                    </VCol>

                      <VCol cols="12">
                      <VLabel
                        class="mb-1 text-body-2 text-wrap text-bold"
                        style="color: #2f2b3de6"
                      >
                        Answer Options
                      </VLabel>
                     <div
                        v-for="(option, index) in form.options"
                        :key="index"
                        class="d-flex gap-3 mb-3 border rounded pa-1"
                      >
                        <VCheckbox v-model="option.isCorrect" />

                        <VTextField variant="plain" 
                         v-model.trim="option.text"
                        />
                        <VBtn
                          color="error"
                          variant="text"
                          @click="removeOption(index)"
                          size="small"
                          icon="tabler-x"
                        />
                      </div> 
                    </VCol>

                    <VCol cols="12" md="12" class="text-end">
                      <VBtn
                        class=""
                        variant="outlined"
                        color="info"
                        size="small"
                        @click="addOption"
                      >
                        Add Options
                        <VIcon end icon="tabler-checkbox" />
                      </VBtn>
                    </VCol>

                    <VCol cols="12" md="12">
                      <RichText
                        v-model:content="form.answerExplanation"
                        label="Answer Explanation"
                      />
                    </VCol>
                  </VRow>
                </VCardText>
              </VCard>
            </VCol>
            <VCol md="4" cols="12">
              <VCard title="Questions" class="mb-6">
                <VCardText>
                  <VRow>
                    <VCol cols="12">
                      <div class="d-flex justify-center flex-wrap gap-5">
                        <VBtn
                          v-for="(question, index) in questions?.AllQuestion"
                          :key="index"
                          :variant="
                            question.id === currentQuestion?.id
                              ? 'outlined'
                              : 'text'
                          "
                          :color="
                            question.id === currentQuestion?.id
                              ? 'primary'
                              : 'secondary'
                          "
                          icon="tabler-help-hexagon"
                          @click="selectQuestion(index)"
                        >
                          {{ index + 1 }}
                        </VBtn>
                      </div>

                      <div class="demo-space-x mt-4 d-flex justify-center">
                        <VBtn
                          rounded="pill"
                          variant="outlined"
                          start
                          icon="tabler-arrow-left"
                          @click="prevQuestion"
                          :disabled="currentQuestionIndex === 0"
                        >
                        </VBtn>

                        <VBtn
                          rounded="pill"
                          color="info"
                          @click="onAddQuestion"
                        >
                          <VIcon start icon="tabler-plus" />

                          Add
                        </VBtn>

                        <VBtn
                          rounded="pill"
                          color="success"
                          @click="onSaveQuestion"
                        >
                          <VIcon start icon="tabler-device-floppy" />

                          Save
                        </VBtn>

                        <VBtn rounded="pill" color="error" @click="onDelete">
                          <VIcon start icon="tabler-trash" />
                          Delete
                        </VBtn>
                        <VBtn
                          rounded="pill"
                          variant="outlined"
                          icon="tabler-arrow-right"
                          @click="nextQuestion"
                          :disabled="
                            (questions?.AllQuestion ?? []).length - 1 ===
                            currentQuestionIndex
                          "
                        >
                        </VBtn>
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
