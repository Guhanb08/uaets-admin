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
  CreateTagMutationVariables,
  useCreateTagMutation,
  useTagLazyQuery,
  useUpdateTagMutation,
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
const initialFormState: CreateTagMutationVariables = {
  name: "",
  description: "",
};
const form = reactive<CreateTagMutationVariables>({ ...initialFormState });
/* =======================
 * GraphQL Mutations
 * ======================= */
const {
  load: findTag,
  result: tagData,
  loading: tagFindFetching,
  error: tagFindError,
} = useTagLazyQuery();

const {
  mutate: createTag,
  loading: tagCreateFetching,
  error: tagCreateError,
} = useCreateTagMutation();

const {
  mutate: updateTag,
  loading: tagUpdateFetching,
  error: tagUpdateError,
} = useUpdateTagMutation();

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
      await updateTag({ id: props.id, data: { ...form } });
      toast.success("Tag updated successfully");
    } else {
      await createTag(form);
      toast.success("Tag created successfully");
    }
    onClose();
  } catch (error) {
    console.error(error);
  }
};

const onReset = () => {
  formRef.value?.reset();
  // tagData.value = undefined;
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
      await findTag(null, { id });
    }
  },
  { immediate: true }
);

watch(
  () => tagData.value,
  (data) => {
    if (data?.Tag) {
      const tag = data.Tag;
      Object.keys(form).forEach((key) => {
        if (Object.prototype.hasOwnProperty.call(tag, key)) {
          (form as any)[key] =
            tag[key as keyof typeof tag] ?? (form as any)[key];
        }
      });
    }
  },
  { immediate: true }
);

watch([tagCreateError, tagUpdateError, tagFindError], (errors) => {
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
          v-if="tagFindFetching"
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
              <AppTextField label="Description" v-model.trim="form.description" />
            </VCol>
            <VCol cols="12">
              <div class="d-flex justify-end flex-wrap gap-3">
                <VBtn variant="tonal" color="secondary" type="reset">
                  Reset
                </VBtn>
                <VBtn
                  type="submit"
                  :loading="tagCreateFetching || tagUpdateFetching"
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
