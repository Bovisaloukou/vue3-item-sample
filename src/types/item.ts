export type ItemStatus = 'in_stock' | 'reserved' | 'sold' | 'repair'

export interface Item {
  id: number
  brand: string
  spn: string
  serial_number: string
  status: ItemStatus
}
