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
  CreateTestimonialMutationVariables,
  useTestimonialLazyQuery,
  useCreateTestimonialMutation,
  useUpdateTestimonialMutation,
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
const initialFormState: CreateTestimonialMutationVariables = {
  name: "", // Default testimonial name
  designation: "",
  message: "",
  image: "",
};

const form = reactive<CreateTestimonialMutationVariables>({
  ...initialFormState,
});
/* =======================
 * GraphQL Mutations
 * ======================= */

const {
  load: findTestimonial,
  result: testimonialData,
  loading: testimonialFindFetching,
  error: testimonialFindError,
} = useTestimonialLazyQuery();

const {
  mutate: createTestimonial,
  loading: testimonialCreateFetching,
  error: testimonialCreateError,
} = useCreateTestimonialMutation();

const {
  mutate: updateTestimonial,
  loading: testimonialUpdateFetching,
  error: testimonialUpdateError,
} = useUpdateTestimonialMutation();

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
    // form.testimonialTags = connectTags.value;
    if (props.id) {
      const updateForm = {
        id: props.id,
        data: { ...form },
      };
      await updateTestimonial(updateForm);
      toast.success("Testimonial updated successfully");
    } else {
      await createTestimonial(form);
      toast.success("Testimonial created successfully");
    }
    onClose();
  } catch (error) {
    console.error(error);
  }
};

const onReset = () => {
  formRef.value?.reset();
  // testimonialData.value = undefined;
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
      await findTestimonial(null, { id });
    }
  },
  { immediate: true }
);

watch(
  () => testimonialData.value,
  (data) => {
    if (data?.Testimonial) {
      const testimonial = data.Testimonial;
      Object.keys(form).forEach((key) => {
        if (Object.prototype.hasOwnProperty.call(testimonial, key)) {
          (form as any)[key] =
            testimonial[key as keyof typeof testimonial] ?? (form as any)[key];
        }
      });
    }
  },
  { immediate: true }
);

watch(
  [testimonialCreateError, testimonialUpdateError, testimonialFindError],
  (errors) => {
    errors.forEach((error) => error && toast.error(error.message));
  }
);

/* =======================
 * Computed Properties
 * ======================= */

const title = computed(() => {
  return props.id ? `Edit Testimonial ` : "Add Testimonial";
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
          v-if="testimonialFindFetching"
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
                label="Name"
                v-model.trim="form.name"
                :rules="[requiredValidator]"
              />
            </VCol>
            <VCol cols="12">
              <AppTextField
                prepend-inner-icon="tabler-user-check"
                label="Designation"
                v-model.trim="form.designation"
                :rules="[requiredValidator]"
              />
            </VCol>

            <VCol cols="12">
              <AppTextarea
                prepend-inner-icon="tabler-message"
                label="Message"
                rows="5"
                v-model.trim="form.message"
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
                    testimonialCreateFetching || testimonialUpdateFetching
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
