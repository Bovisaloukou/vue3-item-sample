import { ref, type Ref } from 'vue'
import axios from 'axios'
import { apiClient } from '../lib/axios'
import type { Item } from '../types/item'

export interface UseItemReturn {
  item: Ref<Item | null>
  loading: Ref<boolean>
  error: Ref<string | null>
  fetchItem: (id: number) => Promise<void>
}

export function useItem(): UseItemReturn {
  const item: Ref<Item | null> = ref(null)
  const loading: Ref<boolean> = ref(false)
  const error: Ref<string | null> = ref(null)

  async function fetchItem(id: number): Promise<void> {
    loading.value = true
    error.value = null

    try {
      const response = await apiClient.get<Item>(`/items/${id}`)
      item.value = response.data
      error.value = null
    } catch (err: unknown) {
      item.value = null

      if (axios.isAxiosError(err)) {
        if (err.response?.status === 404) {
          error.value = 'Item not found'
        } else if (!err.response) {
          error.value = 'Network error, please check your connection'
        } else {
          error.value = `Request failed with status ${err.response.status}`
        }
      } else {
        error.value = 'Unexpected error'
      }
    } finally {
      loading.value = false
    }
  }

  return { item, loading, error, fetchItem }
}
