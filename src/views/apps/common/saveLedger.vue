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
  CreateLedgerMutationVariables,
  LedgerType,
  useCreateLedgerMutation,
  useLedgerLazyQuery,
  useUpdateLedgerMutation,
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
const initialFormState: CreateLedgerMutationVariables = {
  amount: 0,
  transactionType: LedgerType.Credit,
  transactionDate: new Date(),
  transactionBy: "",
  remarks: "",
  referenceId: "",
};

const form = reactive<CreateLedgerMutationVariables>({ ...initialFormState });
/* =======================
 * GraphQL Mutations
 * ======================= */
const {
  load: findLedger,
  result: ledgerData,
  loading: ledgerFindFetching,
  error: ledgerFindError,
} = useLedgerLazyQuery();

const {
  mutate: createLedger,
  loading: ledgerCreateFetching,
  error: ledgerCreateError,
} = useCreateLedgerMutation();

const {
  mutate: updateLedger,
  loading: ledgerUpdateFetching,
  error: ledgerUpdateError,
} = useUpdateLedgerMutation();

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
      await updateLedger({ id: props.id, ...form });
      toast.success("Ledger updated successfully");
    } else {
      await createLedger(form);
      toast.success("Ledger created successfully");
    }
    onClose();
  } catch (error) {
    console.error(error);
  }
};

const onReset = () => {
  formRef.value?.reset();
  // ledgerData.value = undefined;
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
      await findLedger(null, { id });
    }
  },
  { immediate: true }
);

watch(
  () => ledgerData.value,
  (data) => {
    if (data?.Ledger) {
      const ledger = data.Ledger;
      Object.keys(form).forEach((key) => {
        if (Object.prototype.hasOwnProperty.call(ledger, key)) {
          (form as any)[key] =
            ledger[key as keyof typeof ledger] ?? (form as any)[key];
        }
      });
    }
  },
  { immediate: true }
);

watch(
  [ledgerCreateError, ledgerUpdateError, ledgerFindError],
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
  <VDialog :width="$vuetify.display.smAndDown ? 300 : 600" :model-value="props.isDialogVisible"
    @update:model-value="onClose">
    <DialogCloseBtn @click="onClose()" />
    <VCard :title="title">
      <VCardText>
        <VProgressLinear v-if="ledgerFindFetching" indeterminate height="3" color="primary" striped :rounded="false" />
        <VForm v-else ref="formRef" @submit.prevent="onSubmit()" @reset.prevent="onReset">
          <VRow>

            <VCol cols="12">
              <AppSelect prepend-inner-icon="tabler-credit-card-pay" label="Transaction Type"
                :items="[LedgerType.Credit, LedgerType.Debit]" placeholder="Select Type" :rules="[requiredValidator]"
                v-model="form.transactionType" />
            </VCol>


        
            <VCol cols="12">
              <AppDateTimePicker
                v-model="form.transactionDate"
                label="Transaction Date"
                    :config="{ dateFormat: 'F j, Y' }"
              />
            </VCol>

            <VCol cols="12">
              <AppTextField label="Name" model.trim="form.transactionBy" :rules="[requiredValidator]"  />
            </VCol>


            <VCol cols="12">
              <AppTextField label="Reference Id" v-model.trim="form.referenceId" />
            </VCol>
       
            <VCol cols="12">
              <AppTextarea  label="Remarks" v-model.trim="form.remarks" />
            </VCol>
      
            <VCol cols="12">
              <div class="d-flex justify-end flex-wrap gap-3">
                <VBtn variant="tonal" color="secondary" type="reset">
                  Reset
                </VBtn>
                <VBtn type="submit" :loading="ledgerCreateFetching || ledgerUpdateFetching">
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
