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
  CreateBranchMutationVariables,
  useCreateBranchMutation,
  useBranchLazyQuery,
  useUpdateBranchMutation,
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
const initialFormState: CreateBranchMutationVariables = {
  name: "",
  description: "",
  address: "",
  phone : "",
  image : "",
  email : "",

};
const form = reactive<CreateBranchMutationVariables>({ ...initialFormState });
/* =======================
 * GraphQL Mutations
 * ======================= */
const {
  load: findBranch,
  result: branchData,
  loading: branchFindFetching,
  error: branchFindError,
} = useBranchLazyQuery();

const {
  mutate: createBranch,
  loading: branchCreateFetching,
  error: branchCreateError,
} = useCreateBranchMutation();

const {
  mutate: updateBranch,
  loading: branchUpdateFetching,
  error: branchUpdateError,
} = useUpdateBranchMutation();

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
      await updateBranch({ id: props.id, data: { ...form } });
      toast.success("Branch updated successfully");
    } else {
      await createBranch(form);
      toast.success("Branch created successfully");
    }
    onClose();
  } catch (error) {
    console.error(error);
  }
};

const onReset = () => {
  formRef.value?.reset();
  // branchData.value = undefined;
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
      await findBranch(null, { id });
    }
  },
  { immediate: true }
);

watch(
  () => branchData.value,
  (data) => {
    if (data?.Branch) {
      const branch = data.Branch;
      Object.keys(form).forEach((key) => {
        if (Object.prototype.hasOwnProperty.call(branch, key)) {
          (form as any)[key] =
            branch[key as keyof typeof branch] ?? (form as any)[key];
        }
      });
    }
  },
  { immediate: true }
);

watch([branchCreateError, branchUpdateError, branchFindError], (errors) => {
  errors.forEach((error) => error && toast.error(error.message));
});

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
          v-if="branchFindFetching"
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

            <VCol cols="12" >
              <AppTextField
                label="Address"
                v-model.trim="form.address"
                :rules="[requiredValidator]"
              />
            </VCol>

            <VCol cols="12" >
              <AppTextField
                label="Phone"
                v-model.trim="form.phone"
                :rules="[requiredValidator]"
              />
            </VCol>

            <VCol cols="12" >
              <AppTextField
                label="Email"
                v-model.trim="form.email"
                :rules="[requiredValidator, emailValidator]"
              />
            </VCol>

            <VCol cols="12">
              <AppTextField
                label="Description"
                v-model.trim="form.description"
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
                  :loading="branchCreateFetching || branchUpdateFetching"
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
