<script setup lang="ts">
/* =======================
 * Page Metadata
 * ======================= */

/* =======================
 * Components & Utilities
 * ======================= */
import {
  CreateGalleryCategoryMutationVariables,
  useAllGalleryCategoryQuery,
  useCreateGalleryCategoryMutation,
  useDeleteGalleryCategoryMutation,
  useUpdateGalleryCategoryMutation,
} from "@/generated/operations";
import { enableRipple } from "@syncfusion/ej2-base";
import { MenuComponent as EjsMenu } from "@syncfusion/ej2-vue-navigations";
import { toast } from "vue-sonner";
import type { VForm } from "vuetify/components/VForm";

/* =======================
 * GraphQL
 * ======================= */

/* =======================
 * Interfaces
 * ======================= */

/* =======================
 * Props & Emits
 * ======================= */

/* =======================
 * Provides
 * ======================= */

/* =======================
 * Refs & Reactive State
 * ======================= */
const menuItems = ref<any[]>([]);
enableRipple(true);
const isSaveDialogVisible = ref(false);
const isDeleteConfirmDialogVisible = ref(false);

const editId = ref<string | null>(null);
const deleteId = ref<string | null>(null);

/* =======================
 * Form State
 * ======================= */

const formRef = ref<VForm>();
const initialFormState: CreateGalleryCategoryMutationVariables = {
  name: "", // Default exam name
};

const form = reactive<CreateGalleryCategoryMutationVariables>({
  ...initialFormState,
});

/* =======================
 * GraphQL Mutations
 * ======================= */

const {
  result: galleryCategoryData,
  loading: galleryCategoryFindFetching,
  error: galleryCategoryFindError,
  refetch: refetchGalleryCategory,
} = useAllGalleryCategoryQuery();

const {
  mutate: createGalleryCategory,
  loading: galleryCategoryCreateFetching,
  error: galleryCategoryCreateError,
} = useCreateGalleryCategoryMutation();

const {
  mutate: updateGalleryCategory,
  loading: galleryCategoryUpdateFetching,
  error: galleryCategoryUpdateError,
} = useUpdateGalleryCategoryMutation();

const {
  mutate: deleteGalleryCategory,
  loading: galleryCategoryDeleteLoading,
  error: galleryCategoryDeleteError,
} = useDeleteGalleryCategoryMutation();

/* =======================
 * Methods
 * ======================= */

onMounted(async () => {
  loadMenus();
});

const loadMenus = () => {
  const menus =
    galleryCategoryData.value?.AllGalleryCategory.map((item: any) => {
      return {
        text: item.name,
        id: `category-${item.id}`,
        items: [
          { text: "Edit", id: `edit-${item.id}` },
          { text: "Delete", id: `delete-${item.id}` },
        ],
      };
    }) || [];
  menuItems.value = [...menus, { text: "Add Category", id: "addcategory" }];
};

const onSelect = (args: any) => {
  const action = args.item.text;
  const itemId = args.item.id;

  if (action === "Add Category") {
    isSaveDialogVisible.value = true;
  }

  if (action === "Edit") {
    editId.value = itemId.replace("edit-", "");
    isSaveDialogVisible.value = true;
  }

  if (action === "Delete") {
    deleteId.value = itemId.replace("delete-", "");
    isDeleteConfirmDialogVisible.value = true;
  }
};

const onClose = () => {
  isSaveDialogVisible.value = false;
  editId.value = null;
  refetchGalleryCategory();
  onReset();
};

const onSubmit = async () => {
  try {
    const formValidate = await formRef.value?.validate();
    if (!formValidate?.valid) return;
    // form.examTags = connectTags.value;
    if (editId.value) {
      const updateForm = {
        id: editId.value,
        ...form,
      };
      await updateGalleryCategory(updateForm);
      toast.success("Exam updated successfully");
    } else {
      await createGalleryCategory(form);
      toast.success("Exam created successfully");
    }
    onClose();
  } catch (error) {
    console.error(error);
  }
};

const onReset = () => {
  formRef.value?.reset();
  Object.assign(form, initialFormState);
};

const onDelete = async (confirm: boolean) => {
  if (!confirm || !deleteId.value) return;
  await deleteGalleryCategory({ id: deleteId.value });
  if (!galleryCategoryDeleteError.value) {
    toast.success("Gallery deleted successfully");
  }

  await refetchGalleryCategory();
};

watch(editId, (newId) => {
  if (newId) {
    const category = galleryCategoryData.value?.AllGalleryCategory.find(
      (item) => item.id === newId
    );
    if (category) {
      form.name = category.name;
    }
  } else {
    Object.assign(form, initialFormState);
  }
});

/* =======================
 * Watchers
 * ======================= */

watch(
  () => galleryCategoryData?.value?.AllGalleryCategory,
  async () => {
    loadMenus();
  }
);

/* =======================
 * Computed Properties
 * ======================= */

/* =======================
 * Exposes
 * ======================= */
</script>

<template>
  <div class="menu-bar" v-if="menuItems.length > 0">
    <ejs-menu
      :items="menuItems"
      :enableScrolling="true"
      @select="onSelect"
    ></ejs-menu>

    <VDialog
      v-if="isSaveDialogVisible"
      :width="$vuetify.display.smAndDown ? 300 : 600"
      :model-value="isSaveDialogVisible"
      @update:model-value="onClose"
    >
      <DialogCloseBtn @click="onClose()" />

      <VCard title="Add Category">
        <VCardText>
          <VForm
            ref="formRef"
            @submit.prevent="onSubmit()"
            @reset.prevent="onReset"
          >
            <VRow>
              <VCol cols="12">
                <AppTextField
                  prepend-inner-icon="tabler-writing"
                  label="Name"
                  v-model.trim="form.name"
                  :rules="[requiredValidator]"
                />
              </VCol>
              <VCol cols="12">
                <div class="d-flex justify-end flex-wrap gap-3">
                  <VBtn variant="tonal" color="secondary" type="reset">
                    Reset
                  </VBtn>
                  <VBtn
                    type="submit"
                    :loading="
                      galleryCategoryCreateFetching ||
                      galleryCategoryUpdateFetching
                    "
                  >
                    {{ editId ? "Update" : "Save" }}
                  </VBtn>
                </div>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </VDialog>

    <DeleteDialog
      v-if="isDeleteConfirmDialogVisible"
      v-model:is-dialog-visible="isDeleteConfirmDialogVisible"
      @confirm="onDelete"
    />
  </div>
</template>

<style lang="scss">
.menu-bar .e-menu-wrapper {
  width: 100% !important;
}
</style>
