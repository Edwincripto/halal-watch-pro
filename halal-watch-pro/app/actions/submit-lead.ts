'use server'

import { BUSINESS_TYPES, type BusinessType, type LeadFormState } from '@/lib/leads'
import { sendLeadToTelegram } from '@/lib/notify-lead'

const PHONE_RE = /^\+?[0-9\s()-]{9,20}$/

function clean(value: FormDataEntryValue | null, max = 120) {
  return typeof value === 'string' ? value.trim().slice(0, max) : ''
}

export async function submitLead(_prev: LeadFormState, formData: FormData): Promise<LeadFormState> {
  const name = clean(formData.get('name'), 80)
  const phone = clean(formData.get('phone'), 30)
  const whatsapp = clean(formData.get('whatsapp'), 30)
  const business = clean(formData.get('business'), 20)
  const consent = formData.get('consent') === 'on'

  const errors: NonNullable<LeadFormState['errors']> = {}
  if (name.length < 2) errors.name = 'Укажите имя'
  if (!PHONE_RE.test(phone)) errors.phone = 'Введите корректный номер телефона'
  if (whatsapp && !PHONE_RE.test(whatsapp)) errors.whatsapp = 'Введите корректный номер WhatsApp'
  if (!BUSINESS_TYPES.includes(business as BusinessType)) errors.business = 'Выберите сферу бизнеса'
  if (!consent) errors.consent = 'Необходимо согласие на обработку данных'

  if (Object.keys(errors).length > 0) {
    return { status: 'error', message: 'Проверьте поля формы', errors }
  }

  const delivery = await sendLeadToTelegram({ name, phone, whatsapp: whatsapp || null, business })
  if (!delivery.ok && delivery.reason === 'telegram-error') {
    return {
      status: 'error',
      message: 'Не удалось отправить заявку. Напишите нам в WhatsApp или попробуйте ещё раз.',
    }
  }

  return {
    status: 'success',
    message: `${name}, заявка принята. Менеджер свяжется с вами в течение 30 минут в рабочее время.`,
  }
}
