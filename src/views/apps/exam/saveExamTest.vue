<script setup lang="ts">
import ExamStepper from "./ExamStepper.vue";
import draggable from "vuedraggable";

/* =======================
 * Page Metadata
 * ======================= */

/* =======================
 * Components & Utilities
 * ======================= */
import type { VForm } from "vuetify/components/VForm";
/* =======================
 * GraphQL
 * ======================= */
import { CreateExamMutationVariables, Status } from "@/generated/operations";
import { useCreateExamMutation } from "@/generated/operations";
import FileUpload from "@/pages/admin/files/upload.vue";
import { toast } from "vue-sonner";

/* =======================
 * Interfaces
 * ======================= */
interface Props {
  isDialogVisible: boolean;
  id?: number;
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
const id = ref<number | undefined>(undefined);

/* =======================
 * Form State
 * ======================= */

const formRef = ref<VForm>();
const form = reactive<CreateExamMutationVariables>({
  name: "",
  level: 0,
  description: "",
  duration: 0,
  totalMarks: 0,
  passingMarks: 0,
  defaultMarks: 0,
  status: Status.Inactive,
});

/* =======================
 * GraphQL Mutations
 * ======================= */
const {
  mutate: createExam,
  loading: examCreateFetching,
  error: examCreateError,
} = useCreateExamMutation();

/* =======================
 * Methods
 * ======================= */
const onSubmit = async (status: Status = Status.Inactive) => {
  try {
    const formValidate = await formRef.value?.validate();
    if (!formValidate?.valid) return;
    if (id.value) {
      await createExam();
      if (!examCreateError.value) {
        onReset();
      }
    } else {
      form.status = status;
      await createExam(form);
      if (!examCreateError.value) {
        toast.success("Exam has been created");
        onReset();
      }
    }
  } catch (error) {
    console.error(error);
  }
};

const onReset = () => {
  emit("update:isDialogVisible", false);
  id.value = undefined;
  formRef.value?.reset();
};

/* =======================
 * Watchers
 * ======================= */

watch(examCreateError, (error) => {
  console.log(error);
  if (error) toast.error(error.message);
});

/* =======================
 * Computed Properties
 * ======================= */
const title = computed(() => {
  return props.id ? "Edit Exam" : "Add Exam";
});

/* =======================
 * Exposes
 * ======================= */

/* =======================
 * Emits
 * ======================= */

import type { PropertyListingData } from "./types";

const currentStep = ref(0);

const propertyListingSteps = [
  {
    title: "Explain the graphql mutation",
  },
  {
    title: "Explain the nest js decorators and graphql query ",
  },
  {
    title: "Explain the graphql query",
  },
  {
    title: "Explain the graphql subscription",
  },
  {
    title: "Explain the graphql mutation",
  },
  {
    title: "Explain the graphql mutation",
  },
  {
    title: "Explain the nest js decorators",
  },
  {
    title: "Explain the graphql query",
  },
  {
    title: "Explain the graphql subscription",
  },
  {
    title: "Explain the graphql mutation",
  },
];

const propertyListingData = ref<PropertyListingData>({
  personalDetails: {
    userType: "builder",
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    email: "",
    contact: null,
  },
  priceDetails: {
    expectedPrice: null,
    pricePerSqft: null,
    maintenanceCharge: null,
    maintenancePeriod: null,
    bookingAmount: null,
    otherAmount: null,
    priceDisplayType: "Negotiable",
    priceIncludes: ["Car Parking"],
  },
  propertyFeatures: {
    bedroomCount: "",
    floorNo: "",
    bathroomCount: "",
    isCommonArea: true,
    furnishedStatus: null,
    furnishingDetails: ["AC", "TV", "Fridge"],
    isCommonArea1: "true",
    isCommonArea2: "false",
  },
  propertyArea: {
    totalArea: null,
    carpetArea: null,
    plotArea: null,
    availableFrom: null,
    possessionStatus: "Under Construciton",
    transactionType: "New Property",
    isOnMainRoad: "No",
    isGatedColony: "No",
  },
  propertyDetails: {
    propertyDealType: "sell",
    propertyType: null,
    zipCode: null,
    country: null,
    state: "",
    city: "",
    landmark: "",
    address: "",
  },
});

const radioContent: any[] = [
  {
    title: "Basic",
    subtitle: "Free",
    desc: "Get 1 project with 1 team member.",
    value: "basic",
  },
  {
    title: "Premium",
    subtitle: "$45.80",
    value: "premium",
    desc: "Get 5 projects with 5 team members.",
  },

  {
    title: "Enterprise",
    subtitle: "$89.80",
    value: "enterprise",
    desc: "Get unlimited projects with unlimited team members.",
  },

  {
    title: "Custom",
    subtitle: "Custom",
    value: "custom",
    desc: "Get unlimited projects with unlimited team members.",
  },
];
const selectedRadio = ref("basic");
const radioGroup = ref(1);
const questions = reactive([
  {
    title: "What is the capital of France?",
    image: "paris.jpg",
    options: [
      { option: "Berlin", isCorrect: false },
      { option: "Madrid", isCorrect: false },
      { option: "Paris", isCorrect: true },
      { option: "Rome", isCorrect: false },
    ],
  },
  {
    title: "Which programming language is used for web development?",
    image: "code.jpg",
    options: [
      { option: "Python", isCorrect: false },
      { option: "JavaScript", isCorrect: true },
      { option: "C++", isCorrect: false },
      { option: "Java", isCorrect: false },
    ],
  },
  {
    title: "Who developed the theory of relativity?",
    image: "einstein.jpg",
    options: [
      { option: "Isaac Newton", isCorrect: false },
      { option: "Albert Einstein", isCorrect: true },
      { option: "Galileo Galilei", isCorrect: false },
      { option: "Nikola Tesla", isCorrect: false },
    ],
  },
  {
    title: "What is the largest planet in our solar system?",
    image: "jupiter.jpg",
    options: [
      { option: "Earth", isCorrect: false },
      { option: "Mars", isCorrect: false },
      { option: "Jupiter", isCorrect: true },
      { option: "Saturn", isCorrect: false },
    ],
  },
  {
    title: "Which country is famous for sushi?",
    image: "sushi.jpg",
    options: [
      { option: "China", isCorrect: false },
      { option: "Japan", isCorrect: true },
      { option: "Thailand", isCorrect: false },
      { option: "South Korea", isCorrect: false },
    ],
  },
  {
    title: "What does CPU stand for?",
    image: "cpu.jpg",
    options: [
      { option: "Central Processing Unit", isCorrect: true },
      { option: "Computer Processing Unit", isCorrect: false },
      { option: "Central Program Unit", isCorrect: false },
      { option: "Core Processing Utility", isCorrect: false },
    ],
  },
  {
    title: "Which is the longest river in the world?",
    image: "nile.jpg",
    options: [
      { option: "Amazon River", isCorrect: false },
      { option: "Nile River", isCorrect: true },
      { option: "Yangtze River", isCorrect: false },
      { option: "Mississippi River", isCorrect: false },
    ],
  },
]);

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


const selectedOption = ref<number | null>(null);

// Function to update the correct answer
const setCorrectAnswer = (index: number) => {
/*   question.options.forEach((opt, i) => {
    opt.isCorrect = i === index; // Set only the selected one as correct
  }); */
};

</script>

<template>
  <VDialog
    fullscreen
    :model-value="props.isDialogVisible"
    @update:model-value="onReset"
    transition="dialog-bottom-transition"
  >
    <VCard >
      <div>
        <VToolbar color="primary">
          <VBtn icon variant="plain" @click="onReset">
            <VIcon color="white" icon="tabler-x" />
          </VBtn>
          <VToolbarTitle>{{ title }}</VToolbarTitle>
          <VSpacer />
          <VToolbarItems>
            <VBtn variant="text" @click.prevent="onSubmit(Status.Inactive)">
              Save as Draft
            </VBtn>
            <VBtn variant="text" @click.prevent="onSubmit(Status.Active)">
              Publish
            </VBtn>
          </VToolbarItems>
        </VToolbar>
      </div>
      <VCardText >
        <VForm ref="formRef" @submit.prevent="onSubmit()">
          <VRow>
            <VCol md="8">
              <VCard class="mb-6 position-initial" title="Exam Information">
                <VCardText>
                  <VRow>
                    <VCol cols="12">
                      <AppTextField
                        label="Name"
                        v-model="form.name"
                        :rules="[requiredValidator]"
                      />
                    </VCol>

                    <VCol cols="12">
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
                          <VCardText>
                            <VWindow
                              v-model="currentStep"
                              class="disable-tab-transition"
                            >
                              <VWindowItem
                                v-for="(question, index) in questions"
                              >
                                <VCard
                                  :title="'Question ' + (index + 1)"
                                  class="mb-6"
                                >
                                  <VCardText>
                                    <VRow>
                                      <VCol cols="12" md="7">
                                        <AppTextField
                                          label="Question"
                                          v-model="question.title"
                                          :rules="[requiredValidator]"
                                        />
                                      </VCol>
                                      <VCol cols="12" md="5">
                                        <FileUpload
                                          label="Images"
                                          v-model:files="question.image"
                                          :allowedFileTypes="[
                                            'png',
                                            'jpg',
                                            'jpeg',
                                            'mp4',
                                          ]"
                                          :allowMultiSelection="false"
                                        ></FileUpload>
                                      </VCol>

                                      <VCol cols="12">
                                        <VRadioGroup v-model="selectedOption">
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
                                      

                                                <VRadio
                                                  :value="optionIndex"
                                                  v-model="selectedOption"
                                                  @change="
                                                    setCorrectAnswer(
                                                      optionIndex
                                                    )
                                                  "
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
                                        </VRadioGroup>
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
                                </VCard>
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
                                v-if="
                                  propertyListingSteps.length - 1 ===
                                  currentStep
                                "
                                color="success"
                                @click="onSubmit"
                              >
                                submit
                              </VBtn>

                              <VBtn v-else @click="currentStep++">
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
                      <AppTextField label="Duration" v-model="form.duration" />
                    </VCol>

                    <VCol cols="12" md="6">
                      <AppTextField
                        label="Total Marks"
                        v-model="form.totalMarks"
                      />
                    </VCol>

                    <VCol cols="12" md="6">
                      <AppTextField
                        label="Passing Marks"
                        v-model="form.passingMarks"
                      />
                    </VCol>

                    <VCol cols="12" md="6">
                      <AppTextField
                        label="Default Marks"
                        v-model="form.defaultMarks"
                      />
                    </VCol>
                  </VRow>
                </VCardText>
              </VCard>
              <VCard title="Questions Preview" class="mb-6">
                <VCardText style="height: 500px; overflow: scroll">
                  <VRow>
                    <VCol
                      cols="12"
                      v-for="(question, index) in questions"
                      :key="index"
                    >
                      <div v-if="question.title" class="border  pa-4 ">
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

                    <VCol cols="12">
                      <VBtn color="success" block @click="onSubmit">
                        Submit
                      </VBtn>
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
