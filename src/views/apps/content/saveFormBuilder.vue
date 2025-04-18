<script setup lang="ts">
/* =======================
 * Page Metadata
 * ======================= */

definePage({
  meta: {
    layoutWrapperClasses: "layout-content-height-fixed",
  },
});

/* =======================
 * Components & Utilities
 * ======================= */
import AppTextField from "@/@core/components/app-form-elements/AppTextField.vue";
import { toast } from "vue-sonner";
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
import draggable from "vuedraggable";
import type { VForm } from "vuetify/components/VForm";

/* =======================
 * GraphQL
 * ======================= */
import {
  ContentType,
  CreateContentMutationVariables,
  useContentLazyQuery,
  useCreateContentMutation,
  useUpdateContentMutation,
} from "@/generated/operations";
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

const componentRegistry: Record<string, any> = {
  text: AppTextField,
  file: FileUpload,
  textarea: AppTextarea,
  richtext: RichText,
};

const { isLeftSidebarOpen } = useResponsiveLeftSidebar();
const fields = [
  { title: "Text Field", value: 1, prependIcon: "tabler-text-caption" },
  { title: "File Upload", value: 2, prependIcon: "tabler-upload" },
  { title: "Text Area", value: 3, prependIcon: "tabler-text-wrap" },
  { title: "Rich Text Editor", value: 4, prependIcon: "tabler-file-text" },
];

const selectedFieldIndex = ref<number | null>(null);
const dialogVisible = ref(false);
const dialogForm = reactive({
  label: "",
  allowMultiSelection: false,
  required: false,
  type: "",
  allowedFileTypes: [],
  rows: null,
});

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
 * Methods
 * ======================= */

const onSubmit = async () => {
  try {
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

const onClose = () => {
  emit("update:isDialogVisible", false);
};

const addField = (item: { value: number; title: string }) => {
  const label = item.title;
  const key = label
    .toLowerCase()
    .replace(/\s+/g, "_") // Replace spaces with underscores
    .replace(/[^a-z0-9_]/g, ""); // Remove non-alphanumeric characters

  const fieldMap: Record<number, any> = {
    1: {
      type: "text",
      props: {
        label: "Text Field",
        required: false,
      },
      key: key,
    },
    2: {
      type: "file",
      props: {
        label: "File Upload",
        allowMultiSelection: false,
        allowedFileTypes: ["png", "jpg", "jpeg"],
      },
      key: key,
    },

    3: {
      type: "textarea",
      props: {
        label: "Text Area",
        rows: 3,
        required: false,
      },
      key: key,
    },
    4: {
      type: "richtext",
      props: {
        label: "Rich Text Editor",
        required: false,
      },
      key,
    },
  };

  const newField = fieldMap[item.value];
  if (newField) form.formConfig.push(newField);
};

const openSettingsDialog = (index: number) => {
  selectedFieldIndex.value = index;
  const field = form.formConfig[index];
  dialogForm.type = field.type;
  dialogForm.label = field.props.label;
  dialogForm.required = !!field.props.required;
  dialogForm.allowMultiSelection = !!field.props.allowMultiSelection;
  dialogForm.allowedFileTypes = field.props.allowedFileTypes;
  dialogVisible.value = true;
};
const saveFieldSettings = () => {
  if (selectedFieldIndex.value !== null) {
    const field = form.formConfig[selectedFieldIndex.value];

    // Generate the new key from the label
    let newKey = dialogForm.label
      .toLowerCase()
      .replace(/\s+/g, "_")
      .replace(/[^a-z0-9_]/g, "");

    // Ensure the new key is unique
    let uniqueKey = newKey;
    let counter = 1;
    while (
      form.formConfig.some(
        (f: any) => f.key === uniqueKey && f.key !== field.key
      )
    ) {
      uniqueKey = `${newKey}_${counter}`;
      counter++;
    }

    // Update the field with the new key
    const clonedField = { ...field };
    clonedField.props = {
      ...clonedField.props,
      label: dialogForm.label,
    };

    if (
      dialogForm.type === "text" ||
      dialogForm.type === "textarea"
    ) {
      clonedField.props.required = dialogForm.required;
    }

    if (dialogForm.type === "file") {
      clonedField.props.allowMultiSelection = dialogForm.allowMultiSelection;
      clonedField.props.allowedFileTypes = dialogForm.allowedFileTypes;

      if (dialogForm.allowMultiSelection) {
        form.formValue[uniqueKey] = form.formValue[uniqueKey] || [];
      }
    }

    if (dialogForm.type === "textarea") {
      clonedField.props.required = dialogForm.required;
      clonedField.props.rows = dialogForm.rows || 3;
    }

    clonedField.key = uniqueKey;

    // Update the field in formConfig
    form.formConfig[selectedFieldIndex.value] = clonedField;

    // Insert/update the key in formValue for dynamic fields
    form.formValue[uniqueKey] = form.formValue[uniqueKey] || null;

    dialogVisible.value = false;
  }
};

const onCloseSettingsDialog = () => {
  dialogVisible.value = false;
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

const title = computed(() => "Form Builder");

/* =======================
 * Exposes
 * ======================= */
</script>

<template>
  <VDialog
    fullscreen
    :model-value="props.isDialogVisible"
    @update:model-value="onClose"
    transition="dialog-bottom-transition"
  >
    <VCard>
      <div>
        <VToolbar color="primary">
          <VBtn icon variant="plain" @click="onClose">
            <VIcon color="white" icon="tabler-x" />
          </VBtn>
          <VToolbarTitle>{{ title }}</VToolbarTitle>
          <VSpacer />
          <VToolbarItems>
            <VBtn variant="text" @click.prevent="onSubmit"> Save </VBtn>
          </VToolbarItems>
        </VToolbar>
      </div>
      <VCardText>
        <VLayout class="fleet-app-layout h-100">
          <!-- 👉 Sidebar -->
          <VNavigationDrawer
            v-model="isLeftSidebarOpen"
            data-allow-mismatch
            width="300"
            absolute
            touchless
            location="start"
          >
            <VCard class="h-100 fleet-navigation-drawer" flat>
              <VCardItem>
                <VCardTitle> Form Builder </VCardTitle>
                <template #append>
                  <IconBtn
                    class="d-lg-none navigation-close-btn"
                    @click="isLeftSidebarOpen = !isLeftSidebarOpen"
                  >
                    <VIcon icon="tabler-x" />
                  </IconBtn>
                </template>
              </VCardItem>

              <PerfectScrollbar
                :options="{ wheelPropagation: false, suppressScrollX: true }"
                style="block-size: calc(100% - 60px)"
              >
                <VCardText class="pt-0">
                  <VList nav :lines="false">
                    <VListItem
                      v-for="item in fields"
                      :key="item.value"
                      :value="item.value"
                      @click="addField(item)"
                    >
                      <template #prepend>
                        <VIcon :icon="item.prependIcon" />
                      </template>
                      <VListItemTitle>{{ item.title }}</VListItemTitle>
                    </VListItem>
                  </VList>
                </VCardText>
              </PerfectScrollbar>
            </VCard>
          </VNavigationDrawer>

          <!-- 👉 Main Content -->
          <VMain>
            <div class="h-100 bg-white pa-5 pa-sm-4 pa-xs-2">
              <!-- Mobile toggle -->
              <IconBtn
                class="d-lg-none navigation-toggle-btn rounded-sm"
                variant="elevated"
                @click="isLeftSidebarOpen = true"
              >
                <VIcon icon="tabler-menu-2" />
              </IconBtn>

              <PerfectScrollbar
                class="mb-5"
                style="block-size: calc(100% - 50px)"
              >
                <draggable
                  v-model="form.formConfig"
                  item-key="key"
                  handle=".drag-handle"
                  ghost-class="drag-ghost"
                  drag-class="dragging"
                  animation="200"
                  class="d-grid gap-y-4"
                >
                  <template #item="{ element, index }">
                    <VCard class="pa-4 elevation-0 field-card">
                      <!-- Toolbar -->
                      <div
                        class="d-flex align-center justify-space-between mb-3"
                      >
                        <!-- {{ element }} -->
                        <div>
                          <VIcon
                            icon="tabler-grip-horizontal"
                            class="cursor-move drag-handle"
                          />
                          <span class="ms-2"> Key : {{ element.key }} </span>
                        </div>
                        <div class="d-flex align-center gap-2">
                          <IconBtn
                            size="small"
                            @click="openSettingsDialog(index)"
                          >
                            <VIcon icon="tabler-adjustments-horizontal" />
                          </IconBtn>
                          <IconBtn
                            size="small"
                            @click="form.formConfig.splice(index, 1)"
                          >
                            <VIcon icon="tabler-x" />
                          </IconBtn>
                        </div>
                      </div>
                      <!-- Dynamic Component -->
                      <component
                        :is="componentRegistry[element.type]"
                        v-bind="element.props"
                      />
                    </VCard>
                  </template>
                </draggable>
              </PerfectScrollbar>
            </div>
          </VMain>
        </VLayout>
      </VCardText>
    </VCard>
  </VDialog>

  <VDialog
    :width="$vuetify.display.smAndDown ? 300 : 600"
    :model-value="dialogVisible"
    @update:model-value="onCloseSettingsDialog"
  >
    <DialogCloseBtn @click="onCloseSettingsDialog()" />

    <VCard title="Edit Field Settings">
      <VCardText>
        <VForm @submit.prevent="saveFieldSettings">
          <VRow>
            <VCol cols="12">
              <AppTextField
                label="Label"
                prepend-inner-icon="tabler-writing"
                v-model.trim="dialogForm.label"
              />
            </VCol>

            <VCol
              cols="12"
              v-if="dialogForm.type == 'text' || dialogForm.type == 'textarea'"
            >
              <VCheckbox v-model="dialogForm.required" label="Required" />
            </VCol>

   

            <VCol cols="12" v-if="dialogForm.type === 'file'">
              <AppSelect
                v-model="dialogForm.allowedFileTypes"
                :items="['png', 'jpg', 'jpeg', 'mp4', 'pdf']"
                label="Suported File Types"
                chips
                multiple
                closable-chips
              />
            </VCol>

            <VCol cols="12" v-if="dialogForm.type === 'file'">
              <VCheckbox
                v-model="dialogForm.allowMultiSelection"
                label="Allow Multi-selection"
              />
            </VCol>

            <VCol cols="12" v-if="dialogForm.type === 'textarea'">
              <AppTextField
                label="Rows"
                type="number"
                v-model.number="dialogForm.rows"
              />
            </VCol>

            <VCol cols="12">
              <div class="d-flex justify-end flex-wrap gap-3 mt-2">
                <VBtn
                  variant="tonal"
                  color="secondary"
                  @click="onCloseSettingsDialog"
                >
                  Cancel
                </VBtn>
                <VBtn type="submit"> Save </VBtn>
              </div>
            </VCol>
          </VRow>
        </VForm>
      </VCardText>
    </VCard>
  </VDialog>
</template>

<style lang="scss">
.bg-white {
  background-color: white !important;
}

/* in your main style file or scoped style */
.border-md-only {
  border: none;
}

@media (min-width: 960px) {
  /* Vuetify's md breakpoint starts at 960px */
  .border-md-only {
    border-left: 1px solid #dedede; /* or use a Vuetify color */
  }
}
.drag-ghost {
  opacity: 0.1;
  // transform: rotate(2deg);
  background-color: #f5f5f5;
  border: 1px dashed #ccc;
  border-radius: 8px;
}

.dragging {
  opacity: 0.9;
}
</style>
