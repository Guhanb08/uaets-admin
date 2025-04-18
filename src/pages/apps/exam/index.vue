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
  useAllExamQuery,
  useDeleteExamMutation,
  useRepositionExamMutation,
  useUpdateExamMutation,
  Exam,
  Status,
  useUpdateExamStatusMutation,
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

const selectedRow = ref<Exam>();
const editId = ref<string | undefined>(undefined);
const examId = ref<string | undefined>(undefined);
const isDeleteConfirmDialogVisible = ref(false);

const isSaveDialogVisible = ref(false);
const isQuestionDialogVisible = ref(false);
const filterSettings = ref({ type: "Excel" });
const editSettings = ref({
  allowEditing: false,
  allowAdding: false,
  allowDeleting: false,
});
const pageSettings = ref({ pageSizes: [12, 50, 100, 200], pageCount: 4 });
const contextMenuItems = ref([
  "Copy",
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
    field: "status",
    headerText: "Status",
    width: 50,
    template: "statusTemplate",
  },

  {
    field: "question",
    headerText: "Questions",
    width: 50,

    template: "questionIconTemplate",
  },

  {
    field: "id",
    headerText: "ID",
    isPrimaryKey: true,
    visible: false,
    width: 50,
  },
  {
    field: "level",
    headerText: "Level",
    autoFit: true,
  },
  {
    field: "course.name",
    headerText: "Course Name",
  },

  {
    field: "name",
    headerText: "Exam Name",
  },

  {
    field: "description",
    headerText: "Description",
  },

  {
    field: "examType",
    headerText: "Exam Type",
  },

  {
    field: "duration",
    headerText: "Duration",
  },

  {
    field: "defaultMarks",
    headerText: "Default Marks",
  },

/*   {
    field: "totalMarks",
    headerText: "Total Marks",
  }, */

  {
    field: "passingMarks",
    headerText: "Passing Marks",
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
  result: exam,
  loading: examLoading,
  error: examError,
  refetch: refetchExam,
} = useAllExamQuery();

const {
  mutate: deleteExam,
  loading: examDeleteLoading,
  error: examDeleteError,
} = useDeleteExamMutation();

const {
  mutate: repositionExam,
  loading: repositionExamFetching,
  error: repositionExamError,
} = useRepositionExamMutation();

const {
  mutate: updateExam,
  loading: updateExamLoading,
  error: updateExamError,
} = useUpdateExamMutation();

const {
  mutate: updateExamStatus,
  loading: updateExamStatusLoading,
  error: updateExamStatusError,
} = useUpdateExamStatusMutation();

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

  await deleteExam({ id: selectedRow.value.id });

  if(!examDeleteError.value) {
    toast.success("Exam deleted successfully");
  }

  await refetchExam();
};

const onClose = async () => {
  editId.value = undefined;
  await refetchExam();
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
  await repositionExam({
    fromIndex,
    toIndex,
  });
  await refetchExam();
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
  selectedRow.value = args.data as Exam;
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

const onStatusChange = async (exam: Exam) => {
  const newStatus =
    exam.status === Status.Active ? Status.Inactive : Status.Active;
  await updateExamStatus({
    id: exam.id,
    status: newStatus,
  });
  await refetchExam();
};

const openQuestion = (exam: Exam) => {
  examId.value = exam.id;
  isQuestionDialogVisible.value = true;
};

/* =======================
 * Watchers
 * ======================= */

watch(
  [examError, examDeleteError, repositionExamError, updateExamError],
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
const examData = computed(() => {
  return exam?.value?.AllExam;
});
/* =======================
 * Exposes
 * ======================= */
</script>

<template>
  <section>
    <VRow>
      <VCol cols="12">
        <VCard id="table-list" title="Exam">
          <VCardText>
            <VProgressLinear
              v-if="
                examLoading ||
                examDeleteLoading ||
                repositionExamFetching ||
                updateExamLoading
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
              :dataSource="examData"
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
              <template #questionIconTemplate="{ data }">
                <VBtn icon="tabler-help-hexagon" variant="text" color="error" @click="openQuestion(data)"   size="small" />
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
    <SaveExam
      v-if="isSaveDialogVisible"
      v-model:is-dialog-visible="isSaveDialogVisible"
      @update:is-dialog-visible="onClose"
      :id="editId"
    />


    <SaveQuestion
      v-if="isQuestionDialogVisible"
      v-model:is-dialog-visible="isQuestionDialogVisible"
      @update:is-dialog-visible="onClose"
      :id="examId"
    />

    <DeleteDialog
      v-if="isDeleteConfirmDialogVisible"
      v-model:is-dialog-visible="isDeleteConfirmDialogVisible"
      @confirm="onDelete"
    />
  </section>
</template>

<style lang="scss"></style>
