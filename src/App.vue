<script setup lang="ts">
import { onMounted } from 'vue'
import { useItem } from './composables/useItem'

const { item, loading, error, fetchItem } = useItem()

onMounted(() => {
  void fetchItem(1)
})
</script>

<template>
  <main class="min-h-screen bg-slate-50 flex items-center justify-center p-6">
    <section class="w-full max-w-md">
      <header class="mb-6">
        <h1 class="text-xl font-semibold text-slate-800">Vue 3 + TypeScript sample</h1>
        <p class="text-sm text-slate-500 mt-1">Typed composable + axios</p>
      </header>

      <div v-if="loading" class="flex items-center gap-3 text-slate-600">
        <span class="inline-block h-4 w-4 animate-spin rounded-full border-2 border-slate-300 border-t-slate-700"></span>
        <span class="text-sm">Loading item…</span>
      </div>

      <div
        v-else-if="error"
        class="rounded-md border border-red-200 bg-red-50 p-4 text-sm text-red-800"
      >
        {{ error }}
      </div>

      <pre
        v-else-if="item"
        class="bg-white border border-slate-200 rounded-md p-4 text-xs text-slate-700 overflow-auto"
      >{{ item }}</pre>
    </section>
  </main>
</template>
