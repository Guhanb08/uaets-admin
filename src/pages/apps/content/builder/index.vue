<script setup lang="ts">
/* =======================
 * Page Metadata
 * ======================= */

/* =======================
 * Components & Utilities
 * ======================= */
import AppTextField from "@/@core/components/app-form-elements/AppTextField.vue";
import draggable from "vuedraggable";

import { PerfectScrollbar } from "vue3-perfect-scrollbar";
definePage({
  meta: {
    layoutWrapperClasses: "layout-content-height-fixed",
  },
});

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
  placeholder: "",
  required: false,
});

/* =======================
 * Form State
 * ======================= */
const formFields = ref<any[]>([]);
/* =======================
 * GraphQL Mutations
 * ======================= */

/* =======================
 * Methods
 * ======================= */

const addField = (item: { value: number; title: string }) => {
  const fieldMap: Record<number, any> = {
    1: {
      component: AppTextField,
      props: {
        label: "Text Field",
        placeholder: "Enter text",
      },
      key: `field_${Date.now()}`,
    },
  };

  const newField = fieldMap[item.value];
  if (newField) formFields.value.push(newField);
};

onMounted(() => {
  addField(fields[0]);
});

const openSettingsDialog = (index: number) => {
  selectedFieldIndex.value = index;
  const field = formFields.value[index];
  dialogForm.label = field.props.label;
  dialogForm.placeholder = field.props.placeholder;
  dialogForm.required = !!field.props.required;
  dialogVisible.value = true;
};

const saveFieldSettings = () => {
  if (selectedFieldIndex.value !== null) {
    const field = formFields.value[selectedFieldIndex.value];
    field.props.label = dialogForm.label;
    field.props.placeholder = dialogForm.placeholder;
    field.props.required = dialogForm.required;
    dialogVisible.value = false;
  }
};

const onCloseSettingsDialog = () => {
  dialogVisible.value = false;
};

/* =======================
 * Watchers
 * ======================= */

/* =======================
 * Computed Properties
 * ======================= */

/* =======================
 * Exposes
 * ======================= */
</script>

<template>
  <VLayout class="fleet-app-layout">
    <!-- 👉 Sidebar -->
    <VNavigationDrawer
      v-model="isLeftSidebarOpen"
      data-allow-mismatch
      width="300"
      absolute
      touchless
      location="start"
      border="none"
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
      <div class="h-100 bg-white border-md-only pa-5 pa-sm-4 pa-xs-2">
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
          :options="{ wheelPropagation: false }"
          style="block-size: calc(100% - 50px)"
        >
          <draggable
            v-model="formFields"
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
                <div class="d-flex align-center justify-space-between mb-3">
                  <VIcon
                    icon="tabler-grip-horizontal"
                    class="cursor-move drag-handle"
                  />
                  <div class="d-flex align-center gap-2">
                    <IconBtn size="small" @click="openSettingsDialog(index)">
                      <VIcon icon="tabler-adjustments-horizontal" />
                    </IconBtn>
                    <IconBtn size="small" @click="formFields.splice(index, 1)">
                      <VIcon icon="tabler-x" />
                    </IconBtn>
                  </div>
                </div>

                <!-- Dynamic Component -->
                <component :is="element.component" v-bind="element.props" />
              </VCard>
            </template>
          </draggable>
        </PerfectScrollbar>

        <!-- Save Button -->
        <div class="d-flex justify-end flex-wrap gap-3 mt-4">
          <VBtn type="submit"> Save Form </VBtn>
        </div>
      </div>
    </VMain>
  </VLayout>

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

            <VCol cols="12">
              <AppTextField
                label="Placeholder"
                prepend-inner-icon="tabler-input-search"
                v-model.trim="dialogForm.placeholder"
              />
            </VCol>

            <VCol cols="12">
              <VCheckbox v-model="dialogForm.required" label="Required" />
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
