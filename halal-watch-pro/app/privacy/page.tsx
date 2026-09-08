import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

import { Logo } from '@/components/landing/logo'

export const metadata: Metadata = {
  title: 'Политика конфиденциальности — HALAL WATCH PRO',
  description: 'Как HALAL WATCH PRO обрабатывает и защищает персональные данные клиентов.',
}

const sections = [
  {
    title: '1. Какие данные мы собираем',
    text: 'Имя, номер телефона, номер WhatsApp и сфера бизнеса, которые вы указываете в форме заявки на демо. Технические данные о посещении сайта собираются анонимно для аналитики.',
  },
  {
    title: '2. Зачем мы их используем',
    text: 'Чтобы связаться с вами по заявке, организовать бесплатный аудит и демо-период, а также сообщать об условиях обслуживания. Мы не передаём данные третьим лицам в маркетинговых целях.',
  },
  {
    title: '3. Где хранятся данные',
    text: 'Персональные данные клиентов и видеоархив хранятся на серверах, расположенных в Азербайджанской Республике, с шифрованием при передаче и хранении.',
  },
  {
    title: '4. Срок хранения',
    text: 'Данные заявки хранятся до завершения переговоров или в течение 12 месяцев. Видеоархив — согласно тарифу (7 или 30 дней), после чего удаляется автоматически.',
  },
  {
    title: '5. Ваши права',
    text: 'Вы можете запросить копию, исправление или удаление своих данных, написав на hello@halalwatch.pro. Мы ответим в течение 10 рабочих дней.',
  },
]

export default function PrivacyPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
      <div className="mb-12 flex items-center justify-between">
        <Logo />
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" aria-hidden />
          На главную
        </Link>
      </div>
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Политика конфиденциальности</h1>
      <p className="mt-3 text-sm text-muted-foreground">Обновлено: сентябрь 2026</p>
      <div className="mt-12 flex flex-col gap-10">
        {sections.map((section) => (
          <section key={section.title} className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold tracking-tight">{section.title}</h2>
            <p className="text-pretty leading-relaxed text-muted-foreground">{section.text}</p>
          </section>
        ))}
      </div>
    </main>
  )
}
