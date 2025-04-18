<script setup lang="ts">
// Imports
import {
  useAllActivePermissionQuery,
} from "@/generated/operations";
import SaveDialog from "@/views/admin/permissions/SavePermissions.vue";
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
import { provide, ref } from "vue";

// Icons

import { Icon } from "@iconify/vue";

// Defines
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
// Queries

const {
  result: permissions,
  loading: permissionLoading,
  error: permissionError,
  refetch: refetchPermissions,
} = useAllActivePermissionQuery();

const permissionData = computed(() => {
  return permissions?.value?.AllPermission;
});

const {
  mutate: deletePermission,
  loading: permissionDeleteLoading,
  error: permissionDeleteError,
} = useDeletePermissionMutation();

const {
  mutate: deleteManyPermission,
  loading: deleteManyPermissionFetching,
  error: deleteManyPermissionError,
} = useDeleteManyPermissionMutation();

const {
  mutate: repositionPermission,
  loading: repositionPermissionFetching,
  error: repositionPermissionError,
} = useRepositionPermissionMutation();

// Services
// Data
const deleteIds = ref<number[]>([]);
const editId = ref<number | undefined>(undefined);
const grid = ref<InstanceType<typeof EjsGrid> | null>(null);
const isSaveDialogVisible = ref(false);
const filterSettings = ref({ type: "Excel" });
const editSettings = ref({
  allowEditing: false,
  allowAdding: true,
  allowDeleting: true,
});
const pageSettings = ref({ pageSizes: [12, 50, 100, 200], pageCount: 4 });
const loadingIndicator = { indicatorType: "Shimmer" };
const contextMenuItems = ref(["Copy", "Edit", "Delete"]);
const columns = ref([
  {
    field: "id",
    headerText: "ID",
    isPrimaryKey: true,
  },
  {
    field: "permissionName",
    headerText: "Permission Name",
  },
  {
    field: "description",
    headerText: "Description",
  },
  {
    field: "corePermission",
    headerText: "Core Permission",
  },

  {
    field: "createdBy",
    headerText: "Created By",
  },
  {
    field: "createdAt",
    headerText: "Created At",
    type: "date",
    format: "dd/MM/yyyy",
  },
  {
    field: "updatedBy",
    headerText: "Updated By",
  },
  {
    field: "updatedAt",
    headerText: "Updated At",
    type: "date",
    format: "dd/MM/yyyy",
  },
  {
    field: "deletedBy",
    headerText: "Deleted By",
  },
  {
    field: "deletedAt",
    headerText: "Deleted At",
    type: "date",
    format: "dd/MM/yyyy",
  },
]);
const toolbar = ref(["Add", "Delete", "Search"]);
// Lifecycle hooks

//  Methods

const onEdit = (id: number) => {
  isSaveDialogVisible.value = true;
  editId.value = id;
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
const selectOptions = {
  persistSelection: true,
  type: "Multiple",
};
const toolbarClick = async (args: ClickEventArgs) => {
  console.log("args", args);
  args.cancel = true;
  switch (args.item.id) {
    case "grid_excelexport":
      grid.value.showSpinner();
      grid.value?.excelExport();
      break;
    case "grid_pdfexport":
      grid.value.showSpinner();
      grid.value?.pdfExport();
      break;
    case "grid_add":
      args.cancel = true;
      isSaveDialogVisible.value = true;
      break;

    case "grid_delete":
      // get row data id and pass to onDelete
      args.cancel = true;

      if (deleteIds.value.length > 0) {
        await deleteManyPermission({
          ids: deleteIds.value,
        });
        await refetchPermissions();
      }
      break;
  }
};

const pdfExportComplete = () => {
  grid.value.hideSpinner();
};

const excelExportComplete = () => {
  grid.value.hideSpinner();
};

const onClose = async () => {
  await refetchPermissions();
  isSaveDialogVisible.value = false;
};

const onDelete = async (id: number) => {
  await deletePermission({
    id,
  });
};

const contextClicked = (args: ClickEventArgs) => {
  switch (args.item.id) {
    case "grid_delete":
      args.cancel = true;
      console.log("grid_delete", grid.value.getSelectedRecords());
      onDelete(grid.value.getSelectedRecords()[0].id);
      break;
  }
};
const selectedRow = ref(null);

const onRowSelected = () => {
  const records = grid.value.ej2Instances.getSelectedRecords();
  selectedRow.value = records.length ? records : [];
  deleteIds.value = records.map((record: any) => record.id);
};

const onRowDrop = async (args: any) => {
  args.cancel = true;
  const fromIndex = args.fromIndex;
  const toIndex = args.dropIndex;

  await repositionPermission({
    fromIndex,
    toIndex,
  });
  await refetchPermissions();
};

// Computed

// Watchers
</script>

<template>
  <section>
    <VRow>
      <VCol cols="12">
        <VCard title="Permissions">
          <VCardText>
            <ejs-grid
              ref="grid"
              id="grid"
              :dataSource="permissionData"
              :contextMenuItems="contextMenuItems"
              :allowRowDragAndDrop="true"
              :allowGrouping="true"
              :emptyRecordTemplate="'emptyRecordTemplate'"
              :allowSorting="true"
              :allowFiltering="true"
              :allowPaging="true"
              :pageSettings="pageSettings"
              :filterSettings="filterSettings"
              :allowPdfExport="true"
              :allowExcelExport="true"
              :editSettings="editSettings"
              :toolbar="toolbar"
              :columns="columns"
              :loadingIndicator="loadingIndicator"
              :toolbarClick="toolbarClick"
              @created="attachSearchHandler"
              :pdfExportComplete="pdfExportComplete"
              :excelExportComplete="excelExportComplete"
              :showColumnMenu="true"
              @contextMenuClick="contextClicked"
              :allowSelection="true"
              :selectionSettings="selectOptions"
              @rowSelected="onRowSelected"
              :rowDrop="onRowDrop"
            >
              <template v-slot:emptyRecordTemplate>
                <div class="emptyRecordTemplate">
                  <div class="d-flex align-end gap-1" v-if="permissionLoading">
                    Loading
                    <Icon icon="svg-spinners:3-dots-bounce" />
                  </div>
                  <div v-else>
                    There is no data available to display at the moment.
                  </div>
                </div>
              </template>
            </ejs-grid>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
    <SaveDialog
      v-model:is-dialog-visible="isSaveDialogVisible"
      @update:is-dialog-visible="onClose"
      :id="editId"
    />
  </section>
</template>

<style lang="scss"></style>
