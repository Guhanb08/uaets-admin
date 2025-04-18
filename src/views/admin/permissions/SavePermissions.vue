<script setup lang="ts">
import {
  CreatePermissionMutationVariables,
  useCreatePermissionMutation,
} from "@/generated/operations";
import type { VForm } from "vuetify/components/VForm";

// Importsn

// Defines
interface Props {
  isDialogVisible: boolean;
  id?: number;
}
interface Emit {
  (e: "update:isDialogVisible", value: boolean): void;
}
// Services

const {
  mutate: createPermission,
  loading: permissionCreateFetching,
  error: permissionCreateError,
} = useCreatePermissionMutation();

// Data
const props = withDefaults(defineProps<Props>(), {
  isDialogVisible: false,
  id: undefined,
});
const emit = defineEmits<Emit>();
const id = ref<number | undefined>(undefined);
const refForm = ref<VForm>();
const form = reactive<CreatePermissionMutationVariables>({
  permissionName: "",
  description: "",
  corePermission: false,
});

// Lifecycle hooks

// Methods

const onSubmit = async () => {
  try {
    const formValidate = await refForm.value?.validate();
    if (!formValidate?.valid) return;
    if (id.value) {
      await createPermission();
      if (!permissionCreateError.value) {
        onReset();
      }
    } else {
      await createPermission(form);
      if (!permissionCreateError.value) {
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
  refForm.value?.reset();
};

// Computed

const title = computed(() => {
  return props.id ? "Edit Permission" : "Add Permission";
});

// Watchers
</script>

<template>
  <VDialog
    :width="$vuetify.display.smAndDown ? 300 : 600"
    :model-value="props.isDialogVisible"
    @update:model-value="onReset"
  >
    <DialogCloseBtn @click="onReset" />

    <VCard :title="title">
      <VCardText>
        <VForm ref="refForm" @submit.prevent="onSubmit()">
          <VRow>
            <VCol cols="12">
              <AppTextField
                label="Name"
                v-model="form.permissionName"
                :rules="[requiredValidator]"
              />
            </VCol>
            <VCol cols="12">
              <AppTextField label="Description" v-model="form.description" />
            </VCol>

            <VCol cols="12">
              <div class="d-flex justify-end flex-wrap gap-3">
                <VBtn variant="tonal" color="secondary" type="reset">
                  Reset
                </VBtn>
                <VBtn type="submit" :loading="permissionCreateFetching">
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
