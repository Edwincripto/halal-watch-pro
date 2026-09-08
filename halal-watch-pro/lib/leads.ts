export const BUSINESS_TYPES = ['Донерная', 'Ресторан', 'Склад', 'Другое'] as const
export type BusinessType = (typeof BUSINESS_TYPES)[number]

export type LeadField = 'name' | 'phone' | 'whatsapp' | 'business' | 'consent'

export type LeadFormState = {
  status: 'idle' | 'success' | 'error'
  message?: string
  errors?: Partial<Record<LeadField, string>>
}
