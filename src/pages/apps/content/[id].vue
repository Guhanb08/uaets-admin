<script setup lang="ts">
/* =======================
 * Page Metadata
 * ======================= */

/* =======================
 * Components & Utilities
 * ======================= */

const route = useRoute();
const router = useRouter();

/* =======================
 * GraphQL
 * ======================= */
import { useAllActiveContentQuery, Content } from "@/generated/operations";
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
const fileHostUrl = import.meta.env.VITE_FILE_BASE_URL;
const editId = ref<string | undefined>(undefined);
const isSaveDialogVisible = ref(false);

const contents = computed(
  (): Content[] =>
    content?.value?.AllContent.filter(
      (x) => x.contentType == contentType.value.toUpperCase()
    ) || []
);



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
} = useAllActiveContentQuery();

/* =======================
 * Methods
 * ======================= */

const onEdit = (id: string) => {
  isSaveDialogVisible.value = true;
  editId.value = id;
};


const onClose = async () => {
  editId.value = undefined;
  await refetchContent();
};

/* =======================
 * Watchers
 * ======================= */

/* =======================
 * Computed Properties
 * ======================= */

const contentType = computed(() => {
  return (route.params as { id: string }).id;
});

/* =======================
 * Exposes
 * ======================= */
</script>
<template>
  <VCard title="Content Management" :class="{ 'opacity-20': isSaveDialogVisible }">
    <VCardText>
      <VRow>
        <VCol
          v-for="content in contents"
          :key="content.id"
          cols="12"
          sm="6"
          md="4"
        >
          <VCard>
            <VImg
              v-if="content?.image"
              :src="fileHostUrl + content.image"
              height="180px"
              cover
            />
            <VCardItem class="py-2 px-4">
              <VCardTitle class="d-flex justify-space-between align-center">
                <div class="text-truncate font-weight-medium text-primary">
                  {{ content.title }}
                 
                </div>
                <VBtn
                  icon="tabler-pencil-check"
                  variant="text"
                  color="primary"
                  @click="onEdit(content.id)"
                />
              </VCardTitle>
            </VCardItem>
          </VCard>
        </VCol>
       
      </VRow>
    </VCardText>
  </VCard>


  <SaveContentBuilder
      v-if="isSaveDialogVisible"
      v-model:is-dialog-visible="isSaveDialogVisible"
      @update:is-dialog-visible="onClose"
      :id="editId"
    />



</template>

<style lang="scss"></style>
