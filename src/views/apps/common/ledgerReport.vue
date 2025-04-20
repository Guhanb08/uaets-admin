<script setup lang="ts">
/* =======================
 * Page Metadata
 * ======================= */

/* =======================
 * Components & Utilities
 * ======================= */
import { toast } from "vue-sonner";
import type { VForm } from "vuetify/components/VForm";
import VueDatePicker from '@vuepic/vue-datepicker';
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
}
interface Emit {
  (e: "update:isDialogVisible", value: boolean): void;
}

/* =======================
 * Props & Emits
 * ======================= */

const props = withDefaults(defineProps<Props>(), {
  isDialogVisible: false,
});

const emit = defineEmits<Emit>();

/* =======================
 * Provides
 * ======================= */

/* =======================
 * Refs & Reactive State
 * ======================= */

/* =======================
 * Form State
 * ======================= */

const formRef = ref<VForm>();
const initialFormState = {
  reportType: "Monthly",
  date:  new Date(),
};

const form = reactive({ ...initialFormState });
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
  [ledgerCreateError, ledgerUpdateError, ledgerFindError],
  (errors) => {
    errors.forEach((error) => error && toast.error(error.message));
  }
);

/* =======================
 * Computed Properties
 * ======================= */

const title = computed(() => 'Report Download');

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
              <AppSelect prepend-inner-icon="tabler-file-description" label="Report Type"
                :items="['Monthly', 'Yearly']" placeholder="Select Type" :rules="[requiredValidator]"
                v-model="form.reportType" />
            </VCol>

            <VCol cols="12" v-if="form.reportType">
              <VLabel class="mb-1 text-body-2 text-wrap text-bold" style="color: #2f2b3de6">
                Month / Year
              </VLabel>
              
                <VueDatePicker   teleport="body" v-if="form.reportType === 'Monthly'" id="datepicker" v-model="form.date"   text-input   auto-apply  month-picker ></VueDatePicker>

                <VueDatePicker  teleport="body"  v-if="form.reportType === 'Yearly'" id="yeardatepicker" v-model="form.date" text-input    auto-apply  year-picker ></VueDatePicker>

            
            </VCol>


            <VCol cols="12">
              <div class="d-flex justify-end flex-wrap gap-3">
                <VBtn variant="tonal" color="secondary" type="reset">
                  Reset
                </VBtn>
                <VBtn type="submit" :loading="ledgerCreateFetching || ledgerUpdateFetching">
                  Download
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
