<script setup lang="ts">
/* =======================
 * Page Metadata
 * ======================= */

/* =======================
 * Components & Utilities
 * ======================= */
import type { VForm } from "vuetify/components/VForm";
/* =======================
 * GraphQL
 * ======================= */
import {
  CreateCourseMutationVariables,
  Status,
  useCreateCourseMutation,
} from "@/generated/operations";
import FileUpload from "@/pages/admin/files/upload.vue";
import { toast } from "vue-sonner";

/* =======================
 * Interfaces
 * ======================= */
interface Props {
  isDialogVisible: boolean;
  id?: number;
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
const currentTab = ref("item-1");
const id = ref<number | undefined>(undefined);

/* =======================
 * Form State
 * ======================= */

const formRef = ref<VForm>();
const form = reactive<CreateCourseMutationVariables>({
  name: "",
  shortDescription: "",
  description: "",
  longDescription: "",
  thumbnail: "",
  gallery: [],
  videoUrl: "",
  isFree: false,
  price: null,
  isDiscounted: false,
  finalPrice: null,
  status: Status.Inactive,
});

/* =======================
 * GraphQL Mutations
 * ======================= */
const {
  mutate: createCourse,
  loading: courseCreateFetching,
  error: courseCreateError,
} = useCreateCourseMutation();

/* =======================
 * Methods
 * ======================= */
const onSubmit = async (status: Status = Status.Inactive) => {
  try {
    const formValidate = await formRef.value?.validate();
    if (!formValidate?.valid) return;
    if (id.value) {
      await createCourse();
      if (!courseCreateError.value) {
        onReset();
      }
    } else {
      form.status = status;
      form.finalPrice = form.finalPrice ? (form.finalPrice) : null;
      form.price = form.price ? (form.price) : null;

      await createCourse(form);
      if (!courseCreateError.value) {
        toast.success("Course has been created");
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
  formRef.value?.reset();
};

/* =======================
 * Watchers
 * ======================= */

watch(courseCreateError, (error) => {
  console.log(error);
  if (error) toast.error(error.message);
});

/* =======================
 * Computed Properties
 * ======================= */
const title = computed(() => {
  return props.id ? "Edit Course" : "Add Course";
});

/* =======================
 * Exposes
 * ======================= */

/* =======================
 * Emits
 * ======================= */
</script>

<template>
  <VDialog
    fullscreen
    :model-value="props.isDialogVisible"
    @update:model-value="onReset"
    transition="dialog-bottom-transition"
  >
    <VCard>
      <div>
        <VToolbar color="primary">
          <VBtn icon variant="plain" @click="onReset">
            <VIcon color="white" icon="tabler-x" />
          </VBtn>
          <VToolbarTitle>{{ title }}</VToolbarTitle>
          <VSpacer />
          <VToolbarItems>
            <VBtn variant="text" @click.prevent="onSubmit(Status.Inactive)">
              Save as Draft
            </VBtn>
            <VBtn variant="text" @click.prevent="onSubmit(Status.Active)">
              Publish
            </VBtn>
          </VToolbarItems>
        </VToolbar>
      </div>

      <VCardText>
        <VForm ref="formRef" @submit.prevent="onSubmit()">
          <VRow>
            <VCol md="8">
              <VCard class="mb-6 position-initial" title="Course Information">
                <VCardText>
                  <VRow>
                    <VCol cols="12">
                      <AppTextField
                        label="Name"
                        v-model="form.name"
                        :rules="[requiredValidator]"
                      />
                    </VCol>

                    <VCol cols="12">
                      <AppTextField
                        label="Short Description"
                        v-model="form.shortDescription"
                        :rules="[requiredValidator]"
                      />
                    </VCol>

                    <VCol>
                      <VTabs v-model="currentTab">
                        <VTab>Description</VTab>
                        <VTab>Additional Description</VTab>
                      </VTabs>

                      <div class="mt-5">
                        <VWindow v-model="currentTab">
                          <VWindowItem :key="2" value="item-1">
                            <RichText v-model:content="form.description" />
                          </VWindowItem>

                          <VWindowItem :key="3" value="item-2">
                            <RichText v-model:content="form.longDescription" />
                          </VWindowItem>
                        </VWindow>
                      </div>
                    </VCol>
                  </VRow>
                </VCardText>
              </VCard>
            </VCol>

            <VCol md="4" cols="12">
              <VCard title="Pricing" class="mb-6">
                <VCardText>
                  <VRow>
                    <VCol
                      cols="12"
                      :md="form.isDiscounted ? 6 : 12"
                      v-if="!form.isFree"
                    >
                      <AppTextField
                        label="Best Price"
                        v-model="form.price"
                        prefix="€"
                        type="number"
                        :rules="[!form.isFree ? requiredValidator : null]"
                      />
                    </VCol>
                    <VCol cols="12" md="6" v-if="form.isDiscounted">
                      <AppTextField
                        label="Discount Price"
                        prefix="€"
                        type="number"
                        v-model="form.finalPrice"
                        :rules="[form.isDiscounted ? requiredValidator : null]"
                      />
                    </VCol>
                    <VCol cols="12" md="6">
                      <VCheckbox label="Is Free Course" v-model="form.isFree" />
                    </VCol>
                    <VCol cols="12" md="6" v-if="!form.isFree">
                      <VCheckbox
                        label="Is Discounted"
                        v-model="form.isDiscounted"
                      />
                    </VCol>
                  </VRow>
                </VCardText>
              </VCard>
              <VCard title="Gallery" class="mb-6">
                <VCardText>
                  <VRow>
                    <VCol cols="12">
                      <FileUpload
                        label="Course Thumbnail"
                        v-model:files="form.thumbnail"
                        :allowedFileTypes="['png', 'jpg', 'jpeg']"
                        :allowMultiSelection="false"
                      ></FileUpload>
                    </VCol>
                    <VCol cols="12">
                      <FileUpload
                        label="Course Gallery"
                        v-model:files="form.gallery"
                        :allowedFileTypes="['png', 'jpg', 'jpeg', 'mp4']"
                        :allowMultiSelection="true"
                      ></FileUpload>
                    </VCol>
                  </VRow>
                </VCardText>
              </VCard>
            </VCol>
          </VRow>
        </VForm>
      </VCardText>
    </VCard>
  </VDialog>
</template>

<style lang="scss"></style>
