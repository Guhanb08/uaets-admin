<script setup lang="ts">
/* =======================
 * Page Metadata
 * ======================= */

/* =======================
 * Components & Utilities
 * ======================= */
import {
  ColumnMenu,
  ContextMenu,
  DetailRow,
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
import { provide } from "vue";
import { toast } from "vue-sonner";

/* =======================
 * GraphQL
 * ======================= */
import {
  Status,
  useAllLearnerQuery,
  useDeleteUserMutation,
  User,
  useRepositionUserMutation,
  UserStatus,
  useUpdateUserMutation,
  useUpdateUserStatusMutation,
  useAllLearnerCourseQuery,
} from "@/generated/operations";
import { refresh } from "@syncfusion/ej2-vue-filemanager";

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
  DetailRow,
  Resize,
]);

/* =======================
 * Refs & Reactive State
 * ======================= */
 const childGridKey = ref(0);
const grid = ref<InstanceType<typeof EjsGrid> | null>(null);
const userId = ref<string | undefined>(undefined);

const selectOptions = {
  persistSelection: true,
  type: "Single",
};

const selectedRow = ref<User>();
const editId = ref<string | undefined>(undefined);
const isDeleteConfirmDialogVisible = ref(false);

const isSaveDialogVisible = ref(false);
const isCourseDialogVisible = ref(false);

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
    field: "id",
    headerText: "ID",
    isPrimaryKey: true,
    visible: false,
    width: 50,
  },

  {
    field: "courses",
    headerText: "Courses",
    width: 50,

    template: "courseIconTemplate",
  },
  {
    field: "name",
    headerText: "Name",
  },

  {
    field: "email",
    headerText: "Email",
    template: "emailTemplate",
  },
  {
    field: "mobile",
    headerText: "Mobile",
    template: "mobileTemplate",
  },

  {
    field: "profile.branch",
    headerText: "Branch",
  },

  {
    field: "profile.city",
    headerText: "City",
  },

  {
    field: "profile.language",
    headerText: "Language",
  },

  {
    field: "status",
    headerText: "Status",
    width: 50,
    template: "statusTemplate",
  },
  ...tableDefaultFields,
]);

const childGrid = ref<any>({
  dataSource: [],
  queryString: "userId",
  allowPaging: true,
  pageSettings: { pageSize: 6, pageCount: 5 },
  columns: [
    { field: "course.name", headerText: "Course Name" ,},
    { field: "progress", headerText: "Progress" },
    { field: "type", headerText: "Type" },
    { field: "status", headerText: "Status" },
    { field: "enrolledAt", headerText: "Enrolled At" , type:'date',  format :'dd/MM/yyyy' },
    { field: "expiryAt", headerText: "Expiry At"  , type:'date' , format :'dd/MM/yyyy'},
    { field: "completedAt", headerText: "Completed At"  , type:'date', format :'dd/MM/yyyy'},
  ],
   load: function () {
    this.parentDetails.parentKeyFieldValue = this.parentDetails.parentRowData['id'];
  } ,

  

});
/* =======================
 * Form State
 * ======================= */

/* =======================
 * GraphQL Mutations
 * ======================= */
const {
  result: learner,
  loading: learnerLoading,
  error: learnerError,
  refetch: refetchUser,
} = useAllLearnerQuery();

const {
  result: learnerCourse,
  loading: learnerCourseLoading,
  error: learnerCourseError,
  refetch: refetchLearnerCourse,
} = useAllLearnerCourseQuery();

const {
  mutate: deleteUser,
  loading: userDeleteLoading,
  error: userDeleteError,
} = useDeleteUserMutation();

const {
  mutate: repositionUser,
  loading: repositionUserFetching,
  error: repositionUserError,
} = useRepositionUserMutation();

const {
  mutate: updateUser,
  loading: updateUserLoading,
  error: updateUserError,
} = useUpdateUserMutation();

const {
  mutate: updateUserStatus,
  loading: updateUserStatusLoading,
  error: updateUserStatusError,
} = useUpdateUserStatusMutation();

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

  await deleteUser({ id: selectedRow.value.id });

  if (!userDeleteError.value) {
    toast.success("Learner deleted successfully");
  }
  await refetchUser();
};

const onClose = async () => {
  editId.value = undefined;
  await refetchLearnerCourse();
  await refetchUser();
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
  await repositionUser({
    fromIndex,
    toIndex,
  });
  await refetchUser();
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
  selectedRow.value = args.data as User;
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
const onStatusChange = async (user: User) => {
  const newStatus =
    user.status === UserStatus.Active ? UserStatus.Inactive : UserStatus.Active;
  await updateUserStatus({
    id: user.id,
    status: newStatus,
  });
  await refetchUser();
};

const openCourse = (user: User) => {
  userId.value = user.id;
  isCourseDialogVisible.value = true;
};
/* =======================
 * Watchers
 * ======================= */

watch(
  [learnerError, userDeleteError, repositionUserError, updateUserError],
  (errors) => {
    errors.forEach((error) => {
      if (error) {
        toast.error(error.message);
      }
    });
  }
);
// watch learnercourse and update to child grid data source

watch(
  learnerCourse,
  (data) => {
    if (data?.AllLearnerCourse) {
      childGrid.value.dataSource = [...data.AllLearnerCourse];
      nextTick(() => {
        grid.value.refresh();
      });
    }
  },
  { immediate: true }
);
/* =======================
 * Computed Properties
 * ======================= */
const learnerData = computed(() => {
  return learner?.value?.AllUser
});
/* =======================
 * Exposes
 * ======================= */
</script>

<template>
  <section>
    <VRow>
      <VCol cols="12">
        <VCard id="table-list" title="Learners">
          <VCardText>
            <VProgressLinear
              v-if="
                learnerLoading ||
                userDeleteLoading ||
                repositionUserFetching ||
                updateUserLoading
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
              v-if="!learnerCourseLoading"
              :dataSource="learnerData"
              :contextMenuItems="contextMenuItems"
              :childGrid="childGrid"
              :allowRowDragAndDrop="false"
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

              <template v-slot:emailTemplate="props">
                <a :href="'mailto:' + props.data.email">{{
                  props.data.email
                }}</a>
              </template>

              <template #courseIconTemplate="{ data }">
                <VBtn
                  icon="tabler-book"
                  variant="text"
                  color="error"
                  @click="openCourse(data)"
                  size="small"
                />
              </template>

              <template v-slot:mobileTemplate="props">
                <a :href="'tel:' + props.data.mobileCode">
                  {{ props.data.mobileCode }} {{ props.data.mobile }}</a
                >
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
    <SaveLearner
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

    <SaveLearnerCourse
      v-if="isCourseDialogVisible"
      v-model:is-dialog-visible="isCourseDialogVisible"
      @update:is-dialog-visible="onClose"
      :userId="userId"
    />
  </section>
</template>

<style lang="scss"></style>
