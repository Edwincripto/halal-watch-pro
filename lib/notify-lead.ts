import 'server-only'

export type LeadPayload = {
  name: string
  phone: string
  whatsapp?: string | null
  business: string
}

function escapeHtml(value: string) {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

export async function sendLeadToTelegram(lead: LeadPayload) {
  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (!token || !chatId) {
    console.warn('[lead] TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID are not set, skipping Telegram delivery')
    return { ok: false as const, reason: 'not-configured' as const }
  }

  const text = [
    '<b>НОВАЯ ЗАЯВКА HALAL WATCH</b>',
    `Имя: ${escapeHtml(lead.name)}`,
    `Телефон: ${escapeHtml(lead.phone)}`,
    `WhatsApp: ${escapeHtml(lead.whatsapp || '—')}`,
    `Сфера: ${escapeHtml(lead.business)}`,
  ].join('\n')

  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text, parse_mode: 'HTML' }),
  })

  if (!res.ok) {
    console.error('[lead] Telegram sendMessage failed', res.status, await res.text())
    return { ok: false as const, reason: 'telegram-error' as const }
  }

  return { ok: true as const }
}

// Email delivery via Resend is plugged in here once the integration is connected.
