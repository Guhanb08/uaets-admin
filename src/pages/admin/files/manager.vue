<script setup lang="ts">
/* =======================
 * Page Metadata
 * ======================= */
definePage({
  meta: {
    public: true,
  },
});

/* =======================
 * Components & Utilities
 * ======================= */
import { FileType } from "@/models/admin/fileType.model";
import {
  DetailsView,
  FileManagerComponent as EjsFilemanager,
  NavigationPane,
  Toolbar,
} from "@syncfusion/ej2-vue-filemanager";

/* =======================
 * GraphQL
 * ======================= */

/* =======================
 * Interfaces
 * ======================= */
interface Props {
  allowedFileTypes: FileType[];
  enablePersistence: boolean;
  allowMultiSelection: boolean;
}

/* =======================
 * Props & Emits
 * ======================= */
const props = withDefaults(defineProps<Props>(), {
  allowedFileTypes: () => [],
  enablePersistence: true,
  allowMultiSelection: true,
});

/* =======================
 * Provides
 * ======================= */
provide("filemanager", [DetailsView, NavigationPane, Toolbar]);

/* =======================
 * Refs & Reactive State
 * ======================= */
const hostUrl = import.meta.env.VITE_HOST_URL;
const ajaxSettings = {
  url: hostUrl,
  getImageUrl: hostUrl + "GetImage",
  uploadUrl: hostUrl + "Upload",
  downloadUrl: hostUrl + "Download",
};

const toolbarSettings = ref({
  items: [
    "Upload",
    "NewFolder",
    "SortBy",
    "Cut",
    "Copy",
    "Paste",
    "Delete",
    "Refresh",
    "Download",
    "Rename",
    "View",
    "Details",
  ],
});

const contextMenuSettings = ref({
  file: ["Cut", "Copy", "|", "Delete", "Download", "Rename", "|", "Details"],
  layout: [
    "SortBy",
    "View",
    "Refresh",
    "|",
    "Paste",
    "|",
    "NewFolder",
    "|",
    "Details",
    "|",
    "SelectAll",
  ],
  visible: true,
});

const view = ref("LargeIcons");
const fileManagerRef = ref<EjsFilemanager>();

/* =======================
 * GraphQL Mutations
 * ======================= */

/* =======================
 * Methods
 * ======================= */
const getSelectedFiles = () => {
  const files = fileManagerRef.value?.ej2Instances?.getSelectedFiles();
  if (!files) {
    return props.allowMultiSelection ? [] : "";
  }

  console.log("files", files);
  const onlyFiles = files.filter(
    (file: any) =>
      file.isFile &&
      props.allowedFileTypes.includes(file.type.split(".").pop().toLowerCase())
  );
  const fileUrls = onlyFiles.map(
    (file: any) => `${file.filterPath}${file.name}`
  );
  console.log("fileUrls", fileUrls);
  return fileUrls;
};

const onFileLoad = (args: any) => {
  if (!args.fileDetails.isFile || props.allowedFileTypes.length === 0) {
    return;
  }
  const fileExtension = args.fileDetails.name.split(".").pop().toLowerCase();
  if (!props.allowedFileTypes.includes(fileExtension)) {
    args.element.style.display = "none";
  }
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
defineExpose({
  getSelectedFiles,
});

/* =======================
 * Emits
 * ======================= */
</script>

<template>
  <div class="file-container">
    <ejs-filemanager
      ref="fileManagerRef"
      height="800px"
      id="overview_file"
      :ajaxSettings="ajaxSettings"
      :view="view"
      :toolbarSettings="toolbarSettings"
      :contextMenuSettings="contextMenuSettings"
      :allowDragAndDrop="true"
      @fileLoad="onFileLoad"
      :allowMultiSelection="props.allowMultiSelection"
      :enablePersistence="props.enablePersistence"
    >
    </ejs-filemanager>
  </div>
</template>

<style lang="scss"></style>
