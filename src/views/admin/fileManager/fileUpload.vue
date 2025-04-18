<script setup lang="ts">
/* =======================
 * Page Metadata
 * ======================= */

/* =======================
 * Components & Utilities
 * ======================= */
import { FileType } from "@/models/admin/fileType.model";
import FileManagerApp from "@/pages/admin/files/manager.vue";
import draggable from "vuedraggable";

/* =======================
 * GraphQL
 * ======================= */

/* =======================
 * Interfaces
 * ======================= */
interface Props {
  allowedFileTypes: FileType[];
  allowMultiSelection: boolean;
  files: string | string[] | null | undefined;
  label: string;
}

/* =======================
 * Props & Emits
 * ======================= */
const props = withDefaults(defineProps<Props>(), {
  allowedFileTypes: () => [],
  allowMultiSelection: false,
  files: "",
  label: "Documents",
});

const emit = defineEmits<{
  (e: "update:files", value: string | string[]): void;
}>();

/* =======================
 * Provides
 * ======================= */

/* =======================
 * Refs & Reactive State
 * ======================= */
const isDialogVisible = ref(false);
const fileRef = ref<any>(null);
const hostUrl = import.meta.env.VITE_FILE_BASE_URL;
const files = ref<any>("");

/* =======================
 * GraphQL Mutations
 * ======================= */

/* =======================
 * Methods
 * ======================= */
const uploadFiles = () => {
  isDialogVisible.value = false;
  const selectedFiles = fileRef.value?.getSelectedFiles();

  // On multiple files, avoid duplicates and add only new files
  if (props.allowMultiSelection) {
    const newFiles = selectedFiles.filter(
      (file: string) => !files.value.includes(file)
    );
    files.value = [...files.value, ...newFiles];
  } else {
    files.value = selectedFiles[0] ? selectedFiles[0] : files.value;
  }
  emit("update:files", files.value);
};

const getUrl = (file: string) => {
  const ext = file.split(".").pop();
  return ext && ["png", "jpg", "jpeg"].includes(ext) ? hostUrl + file : "";
};

const getFileName = (file: string) => file.split("/").pop() || "";

const removeFile = (index: number) => {
  if (Array.isArray(files.value)) {
    files.value.splice(index, 1);
  } else {
    files.value = "";
  }
  emit("update:files", files.value);
};

/* =======================
 * Watchers
 * ======================= */
watch(
  () => props.files,
  (newFiles) => {
    files.value = newFiles; // Sync internal files when prop changes
  },
  { immediate: true }
);

/* =======================
 * Computed Properties
 * ======================= */

/* =======================
 * Exposes
 * ======================= */
</script>

<template>
  <div>
    <VLabel
      class="mb-1 text-body-2 text-wrap text-bold"
      style="color: #2f2b3de6"
    >
      {{ props.label }}
    </VLabel>
    <div
      class="border image-wrap pa-1 rounded  position-relative"
      style="min-height: 40px"
    >
      <div v-if="Array.isArray(files)">
        <draggable v-model="files" item-key="i" class=" d-flex flex-wrap gap-2">
          <template #item="{ element, i }">
            <div class="drag-item">
              <VChip :prepend-avatar="getUrl(element)" class="ma-1">
                <a
                  class="text-secondary"
                  :href="getUrl(element)"
                  target="_blank"
                >
                  {{ getFileName(element) }}
                </a>
                <VIcon
                  size="16"
                  class="ms-2"
                  end
                  icon="tabler-x"
                  color="error"
                  @click="removeFile(i)"
                />
              </VChip>
            </div>
          </template>
        </draggable>
        <!-- <VChip
          v-for="(file, i) in files"
          :key="i"
          class="ma-1"
          :prepend-avatar="getUrl(file)"
        >
          <a class="text-secondary" :href="getUrl(file)" target="_blank">
            {{ getFileName(file) }}
          </a>

          <VIcon
            size="16"
            class="ms-2"
            end
            icon="tabler-x"
            color="error"
            @click="removeFile(i)"
          />
        </VChip> -->
      </div>
      <div v-else-if="files">
        <VChip :prepend-avatar="getUrl(files)">
          <a class="text-secondary" :href="getUrl(files)" target="_blank">
            {{ getFileName(files) }}
          </a>
          <VIcon
            size="16"
            class="ms-2"
            end
            icon="tabler-x"
            color="error"
            @click="removeFile(0)"
          />
        </VChip>
      </div>
      <VBtn
        @click="isDialogVisible = true"
        class="position-absolute right-0 top-0"
        icon="tabler-file-upload"
        variant="text"
        color="primary"
      />
    </div>
  </div>
  <VDialog
    v-model="isDialogVisible"
    fullscreen
    transition="dialog-bottom-transition"
  >
    <VCard>
      <div>
        <VToolbar color="primary">
          <VBtn icon variant="plain" @click="isDialogVisible = false">
            <VIcon color="white" icon="tabler-x" />
          </VBtn>

          <VToolbarTitle>File Manager </VToolbarTitle>

          <VSpacer />
          <VToolbarItems>
            <VBtn @click="uploadFiles">
              <VIcon start icon="tabler-file-download" />
              Save
            </VBtn>
          </VToolbarItems>
        </VToolbar>
      </div>
      <VDivider />
      <div>
        <FileManagerApp
          ref="fileRef"
          :allowedFileTypes="props.allowedFileTypes"
          :enablePersistence="false"
          :allowMultiSelection="props.allowMultiSelection"
        >
        </FileManagerApp>
      </div>
    </VCard>
  </VDialog>
</template>

<style lang="scss">
.image-wrap .v-chip a {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100px; /* Adjust to your preferred width */

  display: inline-block;
  vertical-align: middle;
}
</style>
