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
  CreateContentMutationVariables,
  useCreateContentMutation,
  useContentLazyQuery,
  useUpdateContentMutation,
  ContentType,
} from "@/generated/operations";
import AppTextField from "@/@core/components/app-form-elements/AppTextField.vue";
import FileUpload from "@/views/admin/fileManager/fileUpload.vue";
import AppTextarea from "@/@core/components/app-form-elements/AppTextarea.vue";
import RichText from "@/components/forms/RichText.vue";

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
const componentRegistry: Record<string, any> = {
  text: AppTextField,
  file: FileUpload,
  textarea: AppTextarea,
  richtext: RichText,
  // Add more types as needed
};

/* =======================
 * Form State
 * ======================= */

const formRef = ref<VForm>();
const initialFormState: CreateContentMutationVariables = {
  key: "",
  title: "",
  image: "",
  formConfig: [],
  formValue: {},
  contentType: ContentType.Section,
};
const form = reactive<CreateContentMutationVariables>({ ...initialFormState });
/* =======================
 * GraphQL Mutations
 * ======================= */
const {
  load: findContent,
  result: contentData,
  loading: contentFindFetching,
  error: contentFindError,
} = useContentLazyQuery();

const {
  mutate: createContent,
  loading: contentCreateFetching,
  error: contentCreateError,
} = useCreateContentMutation();

const {
  mutate: updateContent,
  loading: contentUpdateFetching,
  error: contentUpdateError,
} = useUpdateContentMutation();

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
      await updateContent({ id: props.id, data: { ...form } });
      toast.success("Content updated successfully");
    } else {
      await createContent(form);
      toast.success("Content created successfully");
    }
    onClose();
  } catch (error) {
    console.error(error);
  }
};

const onReset = () => {
  formRef.value?.reset();
  // contentData.value = undefined;
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
      await findContent(null, { id });
    }
  },
  { immediate: true }
);

watch(
  () => contentData.value,
  (data) => {
    if (data?.Content) {
      const content = data.Content;
      Object.keys(form).forEach((key) => {
        if (Object.prototype.hasOwnProperty.call(content, key)) {
          const value = content[key as keyof typeof content];

          // If the field is an array, clone it to avoid mutation issues (like with frozen arrays)
          if (Array.isArray(value)) {
            (form as any)[key] = [...value];
          } else if (
            value &&
            typeof value === "object" &&
            !Array.isArray(value)
          ) {
            // For objects, you may also want to shallow clone to avoid reactive reference bugs
            (form as any)[key] = { ...value };
          } else {
            (form as any)[key] = value;
          }
        }
      });
    }
  },
  { immediate: true }
);
watch([contentCreateError, contentUpdateError, contentFindError], (errors) => {
  errors.forEach((error) => error && toast.error(error.message));
});

/* =======================
 * Computed Properties
 * ======================= */

const title = computed(() => {
  return "Update Content";
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
          v-if="contentFindFetching"
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
            <VCol
              v-for="(field, index) in form.formConfig"
              :key="index"
              cols="12"
            >
              <component
                v-if="
field.type == 'text' ||
field.type == 'textarea'
                "
                :is="componentRegistry[field.type]"
                v-bind="field.props"
                v-model="form.formValue[field.key]"
                :rules="field.props?.required ? [requiredValidator] : []"
              />

              <RichText
                v-if="field.type == 'richtext'"
                v-bind="field.props"
                v-model:content="form.formValue[field.key]"
              />

              <FileUpload
                v-if="field.type == 'file'"
                v-model:files="form.formValue[field.key]"
                v-bind="field.props"
              ></FileUpload>
            </VCol>

            <VCol cols="12">
              <div class="d-flex justify-end flex-wrap gap-3">
                <VBtn variant="tonal" color="secondary" type="reset">
                  Reset
                </VBtn>
                <VBtn
                  type="submit"
                  :loading="contentCreateFetching || contentUpdateFetching"
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
