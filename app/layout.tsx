import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'HALAL WATCH PRO — ИИ-видеонаблюдение для бизнеса в Азербайджане',
  description:
    'Онлайн-контроль донерных, ресторанов и складов 24/7. ИИ считает продажи, ловит воровство и присылает отчёты в Telegram. Облако в Азербайджане. Бесплатное демо 7 дней.',
  generator: 'v0.app',
  keywords: [
    'видеонаблюдение Баку',
    'ИИ аналитика',
    'контроль кассы',
    'видеонаблюдение для ресторана',
    'видеонаблюдение для склада',
    'HALAL WATCH PRO',
  ],
  openGraph: {
    title: 'HALAL WATCH PRO — Увеличьте выручку на 30%',
    description:
      'Остановите воровство с ИИ-видеонаблюдением. Отчёты в Telegram. Облако в Азербайджане.',
    locale: 'ru_RU',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0A0A0A',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${inter.variable} dark`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
