<script setup lang="ts">
import { computed } from 'vue'
import type { Item, ItemStatus } from '../types/item'

const props = defineProps<{ item: Item }>()
const emit = defineEmits<{ select: [id: number] }>()

const statusClasses: Record<ItemStatus, string> = {
  in_stock: 'bg-green-100 text-green-800 ring-green-600/20',
  reserved: 'bg-yellow-100 text-yellow-800 ring-yellow-600/20',
  sold: 'bg-slate-100 text-slate-700 ring-slate-500/20',
  repair: 'bg-orange-100 text-orange-800 ring-orange-600/20',
}

const statusLabels: Record<ItemStatus, string> = {
  in_stock: 'In stock',
  reserved: 'Reserved',
  sold: 'Sold',
  repair: 'In repair',
}

const badgeClass = computed<string>(() => statusClasses[props.item.status])
const statusLabel = computed<string>(() => statusLabels[props.item.status])

function handleClick(): void {
  emit('select', props.item.id)
}
</script>

<template>
  <button
    type="button"
    class="w-full text-left bg-white border border-slate-200 rounded-lg p-5 shadow-sm hover:shadow-md hover:border-slate-300 transition"
    @click="handleClick"
  >
    <div class="flex items-start justify-between gap-4">
      <div class="min-w-0">
        <p class="text-xs uppercase tracking-wide text-slate-500">{{ item.brand }}</p>
        <h3 class="text-lg font-semibold text-slate-900 mt-1 truncate">{{ item.spn }}</h3>
        <p class="text-sm text-slate-600 mt-1 font-mono truncate">{{ item.serial_number }}</p>
      </div>
      <span
        class="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset whitespace-nowrap"
        :class="badgeClass"
      >
        {{ statusLabel }}
      </span>
    </div>
  </button>
</template>
