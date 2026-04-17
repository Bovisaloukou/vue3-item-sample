import axios, { type AxiosInstance } from 'axios'

const baseURL: string = import.meta.env.VITE_API_BASE_URL ?? 'https://api.example.com'

export const apiClient: AxiosInstance = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})
