<script setup lang="ts">
import { useAllMonthlyLedgerQuery } from '@/generated/operations'

const currentYear = ref<string | null>(null)
const currentMonth = ref<number | null>(null)

const {
  result: ledgers,
  loading: ledgerLoading,
  error: ledgerError,
  refetch: refetchLedgers,
} = useAllMonthlyLedgerQuery()

const ledgersData = computed(() => ledgers.value?.MonthlyLedgerSummary ?? [])

const selectedYear = computed(() =>
  currentYear.value ?? ledgersData.value.at(-1)?.year ?? null
)

const selectedMonth = computed(() => {
  if (currentMonth.value) return currentMonth.value
  return ledgersData.value.find(l => l.year === selectedYear.value)?.months[0]?.month ?? null
})

const selectedData = computed(() => {
  const year = ledgersData.value.find(l => l.year === selectedYear.value)
  return year?.months.find(m => m.month === selectedMonth.value)?.data ?? null
})

const selectYearMonths = computed(() => {
  return ledgersData.value.find(l => l.year === selectedYear.value)?.months ?? []
})

/* watch(currentYear, () => {
  currentMonth.value = null
}) */

function incrementMonth() {
  const currentYearIndex = ledgersData.value.findIndex(l => l.year === selectedYear.value)
  const months = selectYearMonths.value.map(m => m.month)
  const idx = months.indexOf(selectedMonth.value!)

  if (idx < months.length - 1) {
    currentMonth.value = months[idx + 1]
  } else if (currentYearIndex < ledgersData.value.length - 1) {
    const nextYear = ledgersData.value[currentYearIndex + 1]
    currentYear.value = nextYear.year
    currentMonth.value = nextYear.months[0].month
  }
}

function decrementMonth() {
  const currentYearIndex = ledgersData.value.findIndex(l => l.year === selectedYear.value)
  const months = selectYearMonths.value.map(m => m.month)
  const idx = months.indexOf(selectedMonth.value!)

  if (idx > 0) {
    currentMonth.value = months[idx - 1]
  } else if (currentYearIndex > 0) {
    const prevYear = ledgersData.value[currentYearIndex - 1]
    currentYear.value = prevYear.year
    currentMonth.value = prevYear.months.at(-1)!.month
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeyDown)
})

function handleKeyDown(e: KeyboardEvent) {
  if (e.key === 'ArrowLeft') {
    decrementMonth()
  } else if (e.key === 'ArrowRight') {
    incrementMonth()
  }
}
const selectedMonthinTamil = computed(() => {
  const month = selectedMonth.value
  return month ? tamilMonths[month - 1] : ''
})

const tamilMonths = [
  'ஜனவரி',
  'பிப்ரவரி',
  'மார்ச்',
  'ஏப்ரல்',
  'மே',
  'ஜூன்',
  'ஜூலை',
  'ஆகஸ்ட்',
  'செப்டெம்பர்',
  'அக்டோபர்',
  'நவம்பர்',
  'டிசம்பர்',
]
</script>

<template>
  <div class="container">
    <!-- Year Tabs -->
    <div class="tabs">
      <button v-for="data in ledgersData" :key="data.year" :class="['tab', { active: selectedYear === data.year }]"
        @click="currentYear = data.year;
        currentMonth = null

          ">
        {{ data.year }}
      </button>
    </div>

    <!-- Title -->
    <div class="header">
      <h2 class="title">கணக்கு விபரம் - {{ selectedMonthinTamil }} {{ selectedYear }}</h2>
    </div>

    <!-- Ledger Table -->
    <div class="table-wrapper">
      <table class="ledger-table">
        <thead>
          <tr>
            <th class="col-no">இலக்கம்</th>
            <th class="col-desc">விபரம்</th>
            <th class="col-credit">வரவு</th>
            <th class="col-debit">செலவு</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01</td>
            <td class="bold">{{ selectedData?.previousEndDate }} கையிருப்பு</td>
            <td class="right highlight">{{ selectedData?.initialBalance.toFixed(2) }}</td>
            <td></td>
          </tr>
          <tr>
            <td>02</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>03</td>
            <td class="bold">மாத வரவு</td>
            <td class="right highlight">{{ selectedData?.credits.toFixed(2) }}</td>
            <td></td>
          </tr>
          <tr>
            <td>04</td>
            <td class="bold">மொத்தம்</td>
            <td class="right highlight">{{ selectedData?.balanceaftecredits.toFixed(2) }}</td>
            <td></td>
          </tr>
          <tr>
            <td>05</td>
            <td class="bold">செலவு</td>
            <td></td>
            <td class="right highlight">{{ selectedData?.debits.toFixed(2) }}</td>
          </tr>
          <tr>
            <td>06</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>07</td>
            <td class="bold">{{ selectedData?.endDate }} ல் கையிருப்பு</td>
            <td class="right highlight">{{ selectedData?.finalBalance.toFixed(2) }}</td>
            <td class="right highlight">{{ selectedData?.finalBalance.toFixed(2) }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Month Pagination -->
    <div class="footer-pagination">
      <button class="page" @click="decrementMonth">«</button>
      <span v-for="monthData in selectYearMonths" :key="monthData.month" class="page"
        :class="{ active: selectedMonth === monthData.month }" @click="currentMonth = monthData.month">
        {{ monthData.month }}
      </span>
      <button class="page" @click="incrementMonth">»</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  max-width: 1100px;
  margin: auto;
  font-family: 'Segoe UI', sans-serif;
}

.tabs {
  display: flex;
  gap: 10px;
  margin-bottom: 16px;
}

.tab {
  padding: 10px 20px;
  border: none;
  background-color: #f0f0f0;
  color: #333;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.tab:hover {
  background-color: #e0e0e0;
}

.tab.active {
  background-color: #d32f2f;
  color: white;
}

.header {
  margin-bottom: 16px;
}

.title {
  font-size: 20px;
  font-weight: 700;
  color: #333;
}

.table-wrapper {
  border: 1px solid #ccc;
  border-radius: 6px;
  background-color: white;
  overflow: hidden;
}

.ledger-table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
}

.ledger-table th,
.ledger-table td {
  border: 1px solid #ccc;
  padding: 12px 10px;
  font-size: 14px;
  vertical-align: middle;
  height: 48px;
  word-wrap: break-word;
}

thead {
  background-color: #d32f2f;
  color: white;
  text-align: left;
}

.bold {
  font-weight: 600;
}

.right {
  text-align: right;
}

.highlight {
  font-weight: bold;
  text-decoration: underline;
}

.col-no {
  width: 10%;
}

.col-desc {
  width: 50%;
}

.col-credit,
.col-debit {
  width: 20%;
}

.footer-pagination {
  margin-top: 24px;
  text-align: center;
}

.page {
  display: inline-block;
  margin: 4px;
  padding: 8px 14px;
  font-weight: 600;
  border-radius: 6px;
  background-color: #333;
  color: white;
  cursor: pointer;
}

.page.active {
  background-color: #d32f2f;
}
</style>
