import { NextResponse } from 'next/server'
import { BUSINESS_TYPES, type BusinessType } from '@/lib/leads'
import { sendLeadToTelegram } from '@/lib/notify-lead'

const PHONE_RE = /^\+?[0-9\s()-]{9,20}$/

function clean(value: unknown, max = 120) {
  return typeof value === 'string' ? value.trim().slice(0, max) : ''
}

export async function POST(req: Request) {
  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON' }, { status: 400 })
  }

  const name = clean(body.name, 80)
  const phone = clean(body.phone, 30)
  const whatsapp = clean(body.whatsapp, 30)
  const business = clean(body.business, 20)

  if (name.length < 2 || !PHONE_RE.test(phone) || !BUSINESS_TYPES.includes(business as BusinessType)) {
    return NextResponse.json({ ok: false, error: 'Validation failed' }, { status: 400 })
  }
  if (whatsapp && !PHONE_RE.test(whatsapp)) {
    return NextResponse.json({ ok: false, error: 'Validation failed' }, { status: 400 })
  }

  const result = await sendLeadToTelegram({ name, phone, whatsapp: whatsapp || null, business })

  if (!result.ok) {
    return NextResponse.json({ ok: false, error: result.reason }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
