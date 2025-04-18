<script setup lang="ts">
/* =======================
 * Page Metadata
 * ======================= */

/* =======================
 * Components & Utilities
 * ======================= */
 import type { CustomInputContent } from '@core/types'

/* =======================
 * GraphQL
 * ======================= */

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
 const selectedCheckbox = ref(['backup'])
 const checkboxContent: CustomInputContent[] = [
  {
    title: 'Backup',
    desc: 'Backup every file from your project.',
    value: 'backup',
    icon: { icon: 'tabler-server-2', size: '28' },
  },
  {
    title: 'Encrypt',
    desc: 'Translate your data to encrypted text.',
    value: 'encrypt',
    icon: { icon: 'tabler-ban', size: '28' },
  },
  {
    title: 'Site Lock',
    desc: 'Security tool to protect your website.',
    value: 'site-lock',
    icon: { icon: 'tabler-lock', size: '28' },
  },
]
/* =======================
 * Form State
 * ======================= */

/* =======================
 * GraphQL Mutations
 * ======================= */

/* =======================
 * Methods
 * ======================= */

/* =======================
 * Watchers
 * ======================= */

/* =======================
 * Computed Properties
 * ======================= */

/* =======================
 * Exposes
 * ======================= */
</script>

<template>
  <VCard title="Gallery" class="mb-6">
    <VCardText>
      <VRow>
        <VCol cols="12">
            <CustomCheckboxesWithIcon
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
        </VCol>
      </VRow>
    </VCardText>
  </VCard>
</template>

<style lang="scss"></style>
