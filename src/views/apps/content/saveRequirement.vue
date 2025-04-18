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
  CreateRequirementMutationVariables,
  useRequirementLazyQuery,
  useCreateRequirementMutation,
  useUpdateRequirementMutation,
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
const initialFormState: CreateRequirementMutationVariables = {
  title: "", // Default requirement name
  description : "",
  image: "",
};

const form = reactive<CreateRequirementMutationVariables>({
  ...initialFormState,
});
/* =======================
 * GraphQL Mutations
 * ======================= */

const {
  load: findRequirement,
  result: requirementData,
  loading: requirementFindFetching,
  error: requirementFindError,
} = useRequirementLazyQuery();

const {
  mutate: createRequirement,
  loading: requirementCreateFetching,
  error: requirementCreateError,
} = useCreateRequirementMutation();

const {
  mutate: updateRequirement,
  loading: requirementUpdateFetching,
  error: requirementUpdateError,
} = useUpdateRequirementMutation();

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
    // form.requirementTags = connectTags.value;
    if (props.id) {
      const updateForm = {
        id: props.id,
        data: { ...form },
      };
      await updateRequirement(updateForm);
      toast.success("Requirement updated successfully");
    } else {
      await createRequirement(form);
      toast.success("Requirement created successfully");
    }
    onClose();
  } catch (error) {
    console.error(error);
  }
};

const onReset = () => {
  formRef.value?.reset();
  // requirementData.value = undefined;
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
      await findRequirement(null, { id });
    }
  },
  { immediate: true }
);

watch(
  () => requirementData.value,
  (data) => {
    if (data?.Requirement) {
      const requirement = data.Requirement;
      Object.keys(form).forEach((key) => {
        if (Object.prototype.hasOwnProperty.call(requirement, key)) {
          (form as any)[key] =
            requirement[key as keyof typeof requirement] ?? (form as any)[key];
        }
      });
    }
  },
  { immediate: true }
);

watch(
  [requirementCreateError, requirementUpdateError, requirementFindError],
  (errors) => {
    errors.forEach((error) => error && toast.error(error.message));
  }
);

/* =======================
 * Computed Properties
 * ======================= */

const title = computed(() => {
  return props.id ? `Edit Requirement ` : "Add Requirement";
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
          v-if="requirementFindFetching"
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
                prepend-inner-icon="tabler-user"
                label="Title"
                v-model.trim="form.title"
                :rules="[requiredValidator]"
              />
            </VCol>
        

            <VCol cols="12">
              <AppTextarea
                prepend-inner-icon="tabler-message"
                label="Description"
                rows="5"
                v-model.trim="form.description"
                :rules="[requiredValidator]"
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
                  :loading="
                    requirementCreateFetching || requirementUpdateFetching
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
