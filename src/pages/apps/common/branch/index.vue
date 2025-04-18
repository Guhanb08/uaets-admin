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
  useAllBranchQuery,
  useDeleteBranchMutation,
  useRepositionBranchMutation,
  useUpdateBranchMutation,
  Branch,
  Status,
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
const grid = ref<InstanceType<typeof EjsGrid> | null>(null);
  const fileHostUrl = import.meta.env.VITE_FILE_BASE_URL

const selectOptions = {
  persistSelection: true,
  type: "Single",
};

const selectedRow = ref<Branch>();
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

  "Search",
]);

const columns = ref([
  {
    field: "id",
    headerText: "ID",
    isPrimaryKey: true,
    width: 50,
    visible: false,
  },
  {
    field: "name",
    headerText: "Name",
  template: "nameTemplate",
  },

  {
    field: "address",
    headerText: "Address",
  },
  {
    field: "phone",
    headerText: "Phone",
  },
  {
    field: "email",
    headerText: "Email",
  },

  {
    field: "description",
    headerText: "Description",
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
  result: branches,
  loading: branchLoading,
  error: branchError,
  refetch: refetchBranches,
} = useAllBranchQuery();

const {
  mutate: deleteBranch,
  loading: branchDeleteLoading,
  error: branchDeleteError,
} = useDeleteBranchMutation();

const {
  mutate: repositionBranch,
  loading: repositionBranchFetching,
  error: repositionBranchError,
} = useRepositionBranchMutation();

const {
  mutate: updateBranch,
  loading: updateBranchLoading,
  error: updateBranchError,
} = useUpdateBranchMutation();

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

  await deleteBranch({ id: selectedRow.value.id });
  if (!branchDeleteError.value) {
    toast.success("Branch deleted successfully");
  }
  await refetchBranches();
};

const onClose = async () => {
  editId.value = undefined;
  await refetchBranches();
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
  await repositionBranch({
    fromIndex,
    toIndex,
  });
  await refetchBranches();
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
  selectedRow.value = args.data as Branch;
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

const onStatusChange = async (branch: Branch) => {
  const newStatus =
    branch.status === Status.Active ? Status.Inactive : Status.Active;
  await updateBranch({ id: branch.id, data: { status: newStatus } });
  await refetchBranches();
};

/* =======================
 * Watchers
 * ======================= */

watch(
  [branchError, branchDeleteError, repositionBranchError, updateBranchError],
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
const branchData = computed(() => {
  return branches?.value?.AllBranch;
});
/* =======================
 * Exposes
 * ======================= */
</script>

<template>
  <section>
    <VRow>
      <VCol cols="12">
        <VCard id="table-list" title="Branches">
          <VCardText>
            <VProgressLinear
              v-if="
                branchLoading ||
                branchDeleteLoading ||
                repositionBranchFetching ||
                updateBranchLoading
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
              :dataSource="branchData"
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
              <template #nameTemplate="{ data }">
              <div class="name-template">
                <a :href="fileHostUrl + data.image" target="_blank">
                  <VAvatar :image="fileHostUrl + data.image" />
                </a>
                <span class="ms-2">{{ data.name }}</span>
              </div>
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
    <SaveBranch
      v-if="isSaveDialogVisible"
      v-model:is-dialog-visible="isSaveDialogVisible"
      @update:is-dialog-visible="onClose"
      :id="editId"
    />

    <DeleteDialog
      v-if="isDeleteConfirmDialogVisible"
      v-model:is-dialog-visible="isDeleteConfirmDialogVisible"
      @confirm="onDelete"
    />
  </section>
</template>

<style lang="scss"></style>
