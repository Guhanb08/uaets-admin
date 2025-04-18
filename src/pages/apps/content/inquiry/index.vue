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
  useAllInquiryQuery,
  useDeleteInquiryMutation,
  useRepositionInquiryMutation,
  useUpdateInquiryMutation,
  Inquiry,
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

const selectOptions = {
  persistSelection: true,
  type: "Single",
};

const selectedRow = ref<Inquiry>();
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
    field: "name",
    headerText: "Name",
  },

  {
    field: "email",
    headerText: "Email",
  },
  {
    field: "phone",
    headerText: "Phone",
  },
  {
    field: "courseName",
    headerText: "Course Name",
  },
  {
    field: "regard",
    headerText: "Regard",
  },
  {
    field: "message",
    headerText: "Message"
  }
 ,
  ...tableDefaultFields,
]);

/* =======================
 * Form State
 * ======================= */

/* =======================
 * GraphQL Mutations
 * ======================= */

const {
  result: inquiry,
  loading: inquiryLoading,
  error: inquiryError,
  refetch: refetchInquiry,
} = useAllInquiryQuery();

const {
  mutate: deleteInquiry,
  loading: inquiryDeleteLoading,
  error: inquiryDeleteError,
} = useDeleteInquiryMutation();

const {
  mutate: repositionInquiry,
  loading: repositionInquiryFetching,
  error: repositionInquiryError,
} = useRepositionInquiryMutation();

const {
  mutate: updateInquiry,
  loading: updateInquiryLoading,
  error: updateInquiryError,
} = useUpdateInquiryMutation();



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

  await deleteInquiry({ id: selectedRow.value.id });
  if(!inquiryDeleteError.value) {
    toast.success("Inquiry deleted successfully");
  }

  await refetchInquiry();
};

const onClose = async () => {
  editId.value = undefined;
  await refetchInquiry();
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
  await repositionInquiry({
    fromIndex,
    toIndex,
  });
  await refetchInquiry();
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
  selectedRow.value = args.data as Inquiry;
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
  [inquiryError, inquiryDeleteError, repositionInquiryError, updateInquiryError],
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
const inquiryData = computed(() => {
  return inquiry?.value?.AllInquiry;
});
/* =======================
 * Exposes
 * ======================= */
</script>

<template>
  <section>
    <VRow>
      <VCol cols="12">
        <VCard id="table-list" title="Inquiry">
          <VCardText>
            <VProgressLinear
              v-if="
                inquiryLoading ||
                inquiryDeleteLoading ||
                repositionInquiryFetching ||
                updateInquiryLoading
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
              :dataSource="inquiryData"
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

          
            </ejs-grid>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
   
    <DeleteDialog
      v-if="isDeleteConfirmDialogVisible"
      v-model:is-dialog-visible="isDeleteConfirmDialogVisible"
      @confirm="onDelete"
    />
  </section>
</template>

<style lang="scss"></style>
