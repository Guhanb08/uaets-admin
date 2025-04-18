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
  CreateLanguageMutationVariables,
  useCreateLanguageMutation,
  useLanguageLazyQuery,
  useUpdateLanguageMutation,
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
const initialFormState: CreateLanguageMutationVariables = {
  name: "",
  description: "",
  icon: "",
  code: "",
};

const form = reactive<CreateLanguageMutationVariables>({ ...initialFormState });
/* =======================
 * GraphQL Mutations
 * ======================= */
const {
  load: findLanguage,
  result: languageData,
  loading: languageFindFetching,
  error: languageFindError,
} = useLanguageLazyQuery();

const {
  mutate: createLanguage,
  loading: languageCreateFetching,
  error: languageCreateError,
} = useCreateLanguageMutation();

const {
  mutate: updateLanguage,
  loading: languageUpdateFetching,
  error: languageUpdateError,
} = useUpdateLanguageMutation();

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
      await updateLanguage({ id: props.id, data: { ...form } });
      toast.success("Language updated successfully");
    } else {
      await createLanguage(form);
      toast.success("Language created successfully");
    }
    onClose();
  } catch (error) {
    console.error(error);
  }
};

const onReset = () => {
  formRef.value?.reset();
  // languageData.value = undefined;
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
      await findLanguage(null, { id });
    }
  },
  { immediate: true }
);

watch(
  () => languageData.value,
  (data) => {
    if (data?.Language) {
      const language = data.Language;
      Object.keys(form).forEach((key) => {
        if (Object.prototype.hasOwnProperty.call(language, key)) {
          (form as any)[key] =
            language[key as keyof typeof language] ?? (form as any)[key];
        }
      });
    }
  },
  { immediate: true }
);

watch(
  [languageCreateError, languageUpdateError, languageFindError],
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
          v-if="languageFindFetching"
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
              <AppTextField
                label="Code"
                v-model.trim="form.code"
                :rules="[requiredValidator]"
              />
            </VCol>

            <VCol cols="12">
              <FileUpload
                label="Icon"
                v-model:files="form.icon"
                :allowedFileTypes="['png', 'jpg', 'jpeg']"
                :allowMultiSelection="false"
              ></FileUpload>
            </VCol>
            <VCol cols="12">
              <AppTextField
                label="Description"
                v-model.trim="form.description"
              />
            </VCol>
            <VCol cols="12">
              <div class="d-flex justify-end flex-wrap gap-3">
                <VBtn variant="tonal" color="secondary" type="reset">
                  Reset
                </VBtn>
                <VBtn
                  type="submit"
                  :loading="languageCreateFetching || languageUpdateFetching"
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
