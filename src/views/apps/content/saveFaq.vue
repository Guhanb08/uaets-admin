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
  CreateFaqMutationVariables,
  useFaqLazyQuery,
  useCreateFaqMutation,
  useUpdateFaqMutation,
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
const initialFormState: CreateFaqMutationVariables = {
  question: "", // Default faq name
  answer: "",
};

const form = reactive<CreateFaqMutationVariables>({ ...initialFormState });
/* =======================
 * GraphQL Mutations
 * ======================= */


const {
  load: findFaq,
  result: faqData,
  loading: faqFindFetching,
  error: faqFindError,
} = useFaqLazyQuery();

const {
  mutate: createFaq,
  loading: faqCreateFetching,
  error: faqCreateError,
} = useCreateFaqMutation();

const {
  mutate: updateFaq,
  loading: faqUpdateFetching,
  error: faqUpdateError,
} = useUpdateFaqMutation();

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
    // form.faqTags = connectTags.value;
    if (props.id) {
      const updateForm = {
        id: props.id,
        data: { ...form },
      };
      await updateFaq(updateForm);
      toast.success("Faq updated successfully");
    } else {
      await createFaq(form);
      toast.success("Faq created successfully");
    }
    onClose();
  } catch (error) {
    console.error(error);
  }
};

const onReset = () => {
  formRef.value?.reset();
  // faqData.value = undefined;
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
      await findFaq(null, { id });
    }
  },
  { immediate: true }
);

watch(
  () => faqData.value,
  (data) => {
    if (data?.Faq) {
      const faq = data.Faq;
      Object.keys(form).forEach((key) => {
        if (Object.prototype.hasOwnProperty.call(faq, key)) {
          (form as any)[key] =
            faq[key as keyof typeof faq] ?? (form as any)[key];
        }
      });
    }
  },
  { immediate: true }
);

watch([faqCreateError, faqUpdateError, faqFindError], (errors) => {
  errors.forEach((error) => error && toast.error(error.message));
});

/* =======================
 * Computed Properties
 * ======================= */

const title = computed(() => {
  return props.id ? `Edit Faq ` : "Add Faq";
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
          v-if="faqFindFetching"
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
                prepend-inner-icon="tabler-question-mark"
                label="Question"
                v-model.trim="form.question"
                :rules="[requiredValidator]"
              />
            </VCol>
            <VCol cols="12">
              <AppTextarea
                prepend-inner-icon="tabler-message"
                label="Answer"
                rows="3"
                v-model.trim="form.answer"
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
                  :loading="faqCreateFetching || faqUpdateFetching"
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
