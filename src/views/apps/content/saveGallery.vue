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
  CreateGalleryMutationVariables,
  useAllGalleryCategoryQuery,
  useCreateGalleryMutation,
  useGalleryLazyQuery,
  useUpdateGalleryMutation,
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
const initialFormState: CreateGalleryMutationVariables = {
  image: "",
  shortDescription: "",
  galleryCategoryId : "",
};
const form = reactive<CreateGalleryMutationVariables>({ ...initialFormState });
/* =======================
 * GraphQL Mutations
 * ======================= */
const {
  load: findGallery,
  result: galleryData,
  loading: galleryFindFetching,
  error: galleryFindError,
} = useGalleryLazyQuery();

const {
  mutate: createGallery,
  loading: galleryCreateFetching,
  error: galleryCreateError,
} = useCreateGalleryMutation();

const {
  mutate: updateGallery,
  loading: galleryUpdateFetching,
  error: galleryUpdateError,
} = useUpdateGalleryMutation();


const {
  result: galleryCategoryData,
  loading: galleryCategoryFindFetching,
  error: galleryCategoryFindError,
  refetch: refetchGalleryCategory,
} = useAllGalleryCategoryQuery();



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
      await updateGallery({ id: props.id, ...form  });
      toast.success("Gallery updated successfully");
    } else {
      await createGallery(form);
      toast.success("Gallery created successfully");
    }
    onClose();
  } catch (error) {
    console.error(error);
  }
};

const onReset = () => {
  formRef.value?.reset();
  // galleryData.value = undefined;
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
      await findGallery(null, { id });
    }
  },
  { immediate: true }
);

watch(
  () => galleryData.value,
  (data) => {
    if (data?.Gallery) {
      const gallery = data.Gallery;
      Object.keys(form).forEach((key) => {
        if (Object.prototype.hasOwnProperty.call(gallery, key)) {
          (form as any)[key] =
            gallery[key as keyof typeof gallery] ?? (form as any)[key];
        }
      });
    }
  },
  { immediate: true }
);

watch([galleryCreateError, galleryUpdateError, galleryFindError], (errors) => {
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
          v-if="galleryFindFetching"
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
              <FileUpload
                label="Image"
                v-model:files="form.image"
                :allowedFileTypes="['png', 'jpg', 'jpeg']"
                :allowMultiSelection="false"
              ></FileUpload>
            </VCol>
            <VCol cols="12">
              <AppTextField
                label="Description"
                v-model.trim="form.shortDescription"
              />
            </VCol>

            <VCol cols="12" >
              <AppAutocomplete
                prepend-inner-icon="tabler-library-photo"
                label="Category"
                :items="galleryCategoryData?.AllGalleryCategory"
                item-title="name"
                item-value="id"
                placeholder="Select Category"
                :rules="[requiredValidator]"
                v-model="form.galleryCategoryId"
              />
            </VCol>



            <VCol cols="12">
              <div class="d-flex justify-end flex-wrap gap-3">
                <VBtn variant="tonal" color="secondary" type="reset">
                  Reset
                </VBtn>
                <VBtn
                  type="submit"
                  :loading="galleryCreateFetching || galleryUpdateFetching"
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
