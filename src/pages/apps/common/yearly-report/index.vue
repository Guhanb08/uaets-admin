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
  AggregateDirective as EAggregate,
   AggregatesDirective, 
  Aggregate,
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
  useAllLedgerQuery,
  useDeleteLedgerMutation,
  useUpdateLedgerMutation,
  Ledger,
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
  Aggregate,
  ColumnMenu,
  RowDD,
  ContextMenu,
  Resize,
]);

/* =======================
 * Refs & Reactive State
 * ======================= */
const grid = ref<InstanceType<typeof EjsGrid> | null>(null);

const selectOptions = {
  persistSelection: true,
  type: "Single",
};

const selectedRow = ref<Ledger>();
const editId = ref<string | undefined>(undefined);
const isDeleteConfirmDialogVisible = ref(false);

const isSaveDialogVisible = ref(false);
const isReportDialogVisible = ref(false);
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
  { text: "Report", id: "grid_tool_report", iconCss: "e-icons e-copy" },

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
    field: "transactionDate",
    headerText: "Transaction Date",
        type: "date",
        format: "dd-MMM-yyyy", // Example: 18-Apr-2025

  },

  {
    field: "referenceId",
    headerText: "Reference ID",

  },

  {
    field: "transactionType",
    headerText: "Transaction Type",

  },
  // transaction by
  {
    field: "transactionBy",
    headerText: "Payer / Payee",

  }
  ,
  {
    field: "amount",
    headerText: "Amount",
    // inr 
    template: "amountTemplate",
  },

  {
    field: "remarks",
    headerText: "Remarks",

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
  result: ledgers,
  loading: ledgerLoading,
  error: ledgerError,
  refetch: refetchLedgers,
} = useAllLedgerQuery();

const {
  mutate: deleteLedger,
  loading: ledgerDeleteLoading,
  error: ledgerDeleteError,
} = useDeleteLedgerMutation();



const {
  mutate: updateLedger,
  loading: updateLedgerLoading,
  error: updateLedgerError,
} = useUpdateLedgerMutation();

/* =======================
 * Methods
 * ======================= */
const fileHostUrl = import.meta.env.VITE_FILE_BASE_URL
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

  await deleteLedger({ id: selectedRow.value.id });
  if (!ledgerDeleteError.value) {
    toast.success("Ledger deleted successfully");
  }
  await refetchLedgers();
};

const onClose = async () => {
  editId.value = undefined;
  await refetchLedgers();
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

    case "grid_tool_report":
      isReportDialogVisible.value = true;
      break;
  }
};

const onRowSelected = (args: any) => {
  selectedRow.value = args.data as Ledger;
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


/* =======================
 * Watchers
 * ======================= */

watch(
  [
    ledgerError,
    ledgerDeleteError,
    updateLedgerError,
  ],
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
const ledgerData = computed(() => {
  return ledgers?.value?.AllLedger;
});

const groupOptions = {  columns: [  ] };

/* =======================
 * Exposes
 * ======================= */
</script>

<template>
  <section>
    <VRow>
      <VCol cols="12">
        <VCard id="table-list" title="Ledgers">
          <VCardText>
            <VProgressLinear v-if="
              ledgerLoading ||
              ledgerDeleteLoading ||
              updateLedgerLoading
            " indeterminate height="3" color="primary" striped :rounded="false" />
            <ejs-grid ref="grid" id="grid" :dataSource="ledgerData" :contextMenuItems="contextMenuItems"
              :groupSettings="groupOptions" :allowRowDragAndDrop="false" :allowGrouping="true"
              :emptyRecordTemplate="'emptyRecordTemplate'" :allowSorting="true" :allowFiltering="true"
              :allowPaging="true" :allowResizing="true" :pageSettings="pageSettings" :filterSettings="filterSettings"
              :allowPdfExport="true" :allowExcelExport="true" :editSettings="editSettings" :toolbar="toolbar"
              :columns="columns" :toolbarClick="toolbarClick" @created="attachSearchHandler" :showColumnMenu="true"
              @contextMenuClick="contextClicked" :allowSelection="true" :selectionSettings="selectOptions"
              :enablePersistence="false" @rowSelected="onRowSelected" @rowDeselected="onRowDeSelected">

              
              
              <template v-slot:emptyRecordTemplate>
                <div class="emptyRecordTemplate">
                  There is no data available to display at the moment.
                </div>
              </template>
              <template #amountTemplate="{ data }">
                <span :class="data.transactionType === 'CREDIT' ? 'text-success' : 'text-error'">
                  <b> ₹ {{ data.amount }}</b>
                </span>
              </template>

              <template #nameTemplate="{ data }">
                <div class="name-template">
                  <img :src="fileHostUrl + data.icon" />

                  <span>{{ data.name }}</span>
                </div>
              </template>



            </ejs-grid>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
    <SaveLedger v-if="isSaveDialogVisible" v-model:is-dialog-visible="isSaveDialogVisible"
      @update:is-dialog-visible="onClose" :id="editId" />


    <LedgerReport v-if="isReportDialogVisible" v-model:is-dialog-visible="isReportDialogVisible"
      @update:is-dialog-visible="onClose" />


    <DeleteDialog v-if="isDeleteConfirmDialogVisible" v-model:is-dialog-visible="isDeleteConfirmDialogVisible"
      @confirm="onDelete" />
  </section>
</template>

<style lang="scss">
.name-template {
  img {
    height: 30px;
    margin-right: 10px;
  }

  display: flex;
  align-items: center;

}
</style>
