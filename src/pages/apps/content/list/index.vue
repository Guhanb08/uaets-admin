<script setup lang="ts">
/* =======================
 * Page Metadata
 * ======================= */

/* =======================
 * Components & Utilities
 * ======================= */
import { provide } from "vue";
import {
  ColumnMenu,
  ContextMenu,
  Edit,
  GridComponent as EjsGrid,
  ExcelExport,
  Filter,
  Group,
  Page,
  PdfExport,
  Resize,
  RowDD,
  Search,
  Sort,
  Toolbar,
} from "@syncfusion/ej2-vue-grids";
import { ClickEventArgs } from "@syncfusion/ej2-vue-navigations";
import { toast } from "vue-sonner";

/* =======================
 * GraphQL
 * ======================= */
import {
  useAllContentQuery,
  useDeleteContentMutation,
  useRepositionContentMutation,
  useUpdateContentMutation,
  Content,
  Status,
  useUpdateContentStatusMutation
} from "@/generated/operations";

/* =======================
 * Interfaces
 * ======================= */

/* =======================
 * Props & Emits
 * ======================= */

/* =======================
 * Provides
 * ======================= */

provide("grid", [
  Page,
  Sort,
  Toolbar,
  Edit,
  Filter,
  Search,
  PdfExport,
  ExcelExport,
  Group,
  ColumnMenu,
  RowDD,
  ContextMenu,
  Resize,
]);

/* =======================
 * Refs & Reactive State
 * ======================= */
 const fileHostUrl = import.meta.env.VITE_FILE_BASE_URL
 const isContentDialogVisible = ref(false);
 const contentId = ref<string | undefined>(undefined);

const grid = ref<InstanceType<typeof EjsGrid> | null>(null);

const selectOptions = {
  persistSelection: true,
  type: "Single",
};

const selectedRow = ref<Content>();
const editId = ref<string | undefined>(undefined);
const isDeleteConfirmDialogVisible = ref(false);

const isSaveDialogVisible = ref(false);
const filterSettings = ref({ type: "Excel" });
const editSettings = ref({
  allowEditing: false,
  allowAdding: false,
  allowDeleting: false,
});
const pageSettings = ref({ pageSizes: [12, 50, 100, 200], pageCount: 4 });
const contextMenuItems = ref([
  "Copy",
  { text: "Edit", id: "grid_contextmenu_edit", iconCss: "e-icons e-edit" },
  {
    text: "Delete",
    id: "grid_contextmenu_delete",
    iconCss: "e-icons e-delete",
  },
  "PdfExport",
  "ExcelExport",
  "CsvExport",
]);

const toolbar = ref([
   { text: "Add", id: "grid_tool_add", iconCss: "e-icons e-add" },
  { text: "Edit", id: "grid_tool_edit", iconCss: "e-icons e-edit" },
  { text: "Delete", id: "grid_tool_delete", iconCss: "e-icons e-delete" },
   
   "Search"]);

const columns = ref([
  {
    field: "id",
    headerText: "ID",
    isPrimaryKey: true,
    visible : false,
    width: 50,
  },
  

  {
    field: "formConfig",
    headerText: "Form Config",
    template: "formConfigTemplate",
  },

  {
    field: "title",
    headerText: "Title",
  },
  {
    field: "key",
    headerText: "Key",
  },
  {
    field: "image",
    headerText: "Image",
    template: "imageTemplate", // Optional: to display image thumbnail
  },
  {
    field: "contentType",
    headerText: "Content Type",
  },
  {
    field: "status",
    headerText: "Status",
    width: 50,
    template: "statusTemplate",
  },
  ...tableDefaultFields,
]);

/* =======================
 * Form State
 * ======================= */

/* =======================
 * GraphQL Mutations
 * ======================= */

const {
  result: content,
  loading: contentLoading,
  error: contentError,
  refetch: refetchContent,
} = useAllContentQuery();

const {
  mutate: deleteContent,
  loading: contentDeleteLoading,
  error: contentDeleteError,
} = useDeleteContentMutation();

const {
  mutate: repositionContent,
  loading: repositionContentFetching,
  error: repositionContentError,
} = useRepositionContentMutation();

const {
  mutate: updateContent,
  loading: updateContentLoading,
  error: updateContentError,
} = useUpdateContentMutation();

const {
  mutate: updateContentStatus,
  loading: updateContentStatusLoading,
  error: updateContentStatusError,
} = useUpdateContentStatusMutation();


/* =======================
 * Methods
 * ======================= */

const onEdit = () => {
  if (!selectedRow.value) {
    toast.warning("Please select a row to edit");
    return;
  }
  editId.value = selectedRow.value?.id;
  isSaveDialogVisible.value = true;
};
const onDeleteRequest = () => {
  if (!selectedRow.value?.id) {
    return toast.warning("Please select a row to delete");
  }
  isDeleteConfirmDialogVisible.value = true;
};

const onDelete = async (confirm: boolean) => {
  if (!confirm || !selectedRow.value?.id) return;

  await deleteContent({ id: selectedRow.value.id });
  if(!contentDeleteError.value) {
    toast.success("Content deleted successfully");
  }

  await refetchContent();
};

const onClose = async () => {
  editId.value = undefined;
  await refetchContent();
};

const contextClicked = (args: ClickEventArgs) => {
  switch (args.item.id) {
    case "grid_contextmenu_delete":
      onDeleteRequest();
      break;

    case "grid_contextmenu_edit":
      onEdit();
      break;
  }
};

const onRowDrop = async (args: any) => {
  args.cancel = true;
  const fromIndex = args.fromIndex;
  const toIndex = args.dropIndex;
  await repositionContent({
    fromIndex,
    toIndex,
  });
  await refetchContent();
};

const toolbarClick = async (args: ClickEventArgs) => {
  args.cancel = true;
  switch (args.item.id) {

    case "grid_tool_add":
      isSaveDialogVisible.value = true;
      break;
    case "grid_tool_edit":
      onEdit();
      break;
    case "grid_tool_delete":
      onDeleteRequest();
      break;
  }
};

const onRowSelected = (args: any) => {
  selectedRow.value = args.data as Content;
};
const onRowDeSelected = () => {
  selectedRow.value = undefined;
};

const attachSearchHandler = () => {
  const searchBar = document.querySelector(
    "#grid_searchbar"
  ) as HTMLInputElement;
  if (searchBar) {
    searchBar.addEventListener("keyup", (event) => {
      if (event && event.target) {
        grid.value.search((event.target as HTMLInputElement).value);
      }
    });
  }
};

const onStatusChange = async (content: Content) => {
  const newStatus =
    content.status === Status.Active ? Status.Inactive : Status.Active;
  await updateContentStatus({
    id: content.id,
    status: newStatus
  });
  await refetchContent();
};


const openFormBuilder = (content: Content) => {
  contentId.value = content.id;
  isContentDialogVisible.value = true;
};



/* =======================
 * Watchers
 * ======================= */

watch(
  [contentError, contentDeleteError, repositionContentError, updateContentError],
  (errors) => {
    errors.forEach((error) => {
      if (error) {
        toast.error(error.message);
      }
    });
  }
);

/* =======================
 * Computed Properties
 * ======================= */
const contentData = computed(() => {
  return content?.value?.AllContent;
});
/* =======================
 * Exposes
 * ======================= */
</script>

<template>
  <section>
    <VRow>
      <VCol cols="12">
        <VCard id="table-list" title="Content">
          <VCardText>
            <VProgressLinear
              v-if="
                contentLoading ||
                contentDeleteLoading ||
                repositionContentFetching ||
                updateContentLoading
              "
              indeterminate
              height="3"
              color="primary"
              striped
              :rounded="false"
            />
            <ejs-grid
              ref="grid"
              id="grid"
              :dataSource="contentData"
              :contextMenuItems="contextMenuItems"
              :allowRowDragAndDrop="true"
              :allowGrouping="true"
              :emptyRecordTemplate="'emptyRecordTemplate'"
              :allowSorting="true"
              :allowFiltering="true"
              :allowPaging="true"
              :allowResizing="true"
              :pageSettings="pageSettings"
              :filterSettings="filterSettings"
              :allowPdfExport="true"
              :allowExcelExport="true"
              :editSettings="editSettings"
              :toolbar="toolbar"
              :columns="columns"
              :toolbarClick="toolbarClick"
              @created="attachSearchHandler"
              :showColumnMenu="true"
              @contextMenuClick="contextClicked"
              :allowSelection="true"
              :selectionSettings="selectOptions"
              :rowDrop="onRowDrop"
              :enablePersistence="false"
              @rowSelected="onRowSelected"
              @rowDeselected="onRowDeSelected"
              
            >
              <template v-slot:emptyRecordTemplate>
                <div class="emptyRecordTemplate">
                  There is no data available to display at the moment.
                </div>
              </template>
              <template #formConfigTemplate="{ data }">
                <VBtn icon="tabler-help-hexagon" variant="text" color="error" @click="openFormBuilder(data)"   size="small" />
              </template>

              <template #imageTemplate="{ data }">
                <a :href="fileHostUrl + data.image" target="_blank">
                  <VAvatar :image="fileHostUrl + data.image" />
                </a>
              </template>

              <template #statusTemplate="{ data }">
                <VSwitch
                  class="status-switch"
                  color="success"
                  :model-value="data.status === Status.Active"
                  @change="onStatusChange(data)"
                />
              </template>
            </ejs-grid>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
    <SaveContent
      v-if="isSaveDialogVisible"
      v-model:is-dialog-visible="isSaveDialogVisible"
      @update:is-dialog-visible="onClose"
      :id="editId"
    />

    <SaveFormBuilder
      v-if="isContentDialogVisible"
      v-model:is-dialog-visible="isContentDialogVisible"
      @update:is-dialog-visible="onClose"
      :id="contentId"
    />

    <DeleteDialog
      v-if="isDeleteConfirmDialogVisible"
      v-model:is-dialog-visible="isDeleteConfirmDialogVisible"
      @confirm="onDelete"
    />
  </section>
</template>

<style lang="scss"></style>
