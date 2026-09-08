import { Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react'
import Link from 'next/link'

import { Logo } from '@/components/landing/logo'

const contacts = [
  { icon: MapPin, label: 'Баку, ул. Низами 12, офис 4', href: 'https://maps.google.com/?q=Baku' },
  { icon: Phone, label: '+994 12 000 00 00', href: 'tel:+994120000000' },
  { icon: Mail, label: 'hello@halalwatch.pro', href: 'mailto:hello@halalwatch.pro' },
]

const messengers = [
  { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/994500000000' },
  { icon: Send, label: 'Telegram', href: 'https://t.me/halalwatchpro' },
]

const navigation = [
  { href: '#solutions', label: 'Решения' },
  { href: '#how', label: 'Как работает' },
  { href: '#pricing', label: 'Тарифы' },
  { href: '#cases', label: 'Кейсы' },
  { href: '#demo', label: 'Демо' },
]

export function Footer() {
  return (
    <footer className="border-t border-white/6">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="flex flex-col gap-5">
          <Logo />
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            ИИ-видеонаблюдение для донерных, ресторанов и складов. Облако и сервера в Азербайджане.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Навигация</h3>
          <ul className="flex flex-col gap-2.5">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-foreground/80 transition-colors hover:text-foreground">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Контакты</h3>
          <ul className="flex flex-col gap-2.5">
            {contacts.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="flex items-start gap-2.5 text-sm text-foreground/80 transition-colors hover:text-foreground"
                >
                  <item.icon className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Мессенджеры</h3>
          <ul className="flex flex-col gap-2.5">
            {messengers.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full border border-white/10 px-4 py-2 text-sm text-foreground/80 transition-colors hover:border-primary/40 hover:text-foreground"
                >
                  <item.icon className="size-4 text-primary" aria-hidden />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/6">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} HALAL WATCH PRO. Все права защищены.</p>
          <Link href="/privacy" className="transition-colors hover:text-foreground">
            Политика конфиденциальности
          </Link>
        </div>
      </div>
    </footer>
  )
}
