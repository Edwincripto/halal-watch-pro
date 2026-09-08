import { HardDrive, ListChecks, Plug, ScanLine, ShieldAlert, Users } from 'lucide-react'

import { Section, SectionHeader } from '@/components/landing/section'
import { Stagger, StaggerItem } from '@/components/landing/reveal'

const features = [
  {
    icon: ListChecks,
    title: 'Учёт ассортимента',
    text: 'ИИ распознаёт каждую позицию на прилавке и считает продажи по SKU без участия кассира.',
  },
  {
    icon: ShieldAlert,
    title: 'Анти-воровство',
    text: 'Сверка видео с кассой: отмены чеков, «своим бесплатно», недовес — алерт в Telegram за секунды.',
  },
  {
    icon: ScanLine,
    title: 'Распознавание номеров',
    text: 'Фиксируем въезд и выезд транспорта, время погрузки и принадлежность машины.',
  },
  {
    icon: Users,
    title: 'Контроль сотрудников',
    text: 'Опоздания, телефон на кассе, курение, конфликты — объективная статистика по каждому.',
  },
  {
    icon: HardDrive,
    title: 'Хранение 30 дней',
    text: 'Архив видео и событий в облаке в Баку. Поиск по событию, а не перемотка часами.',
  },
  {
    icon: Plug,
    title: 'API для 1С',
    text: 'Данные о продажах и расхождениях автоматически попадают в вашу учётную систему.',
  },
]

export function Features() {
  return (
    <Section id="features">
      <SectionHeader
        eyebrow="Фишки ИИ"
        title="Не просто камеры. Аналитик, который никогда не спит"
      />
      <Stagger as="ul" className="grid gap-px overflow-hidden rounded-3xl border border-white/8 bg-white/8 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <StaggerItem
            as="li"
            key={feature.title}
            className="group flex flex-col gap-5 bg-background p-8 transition-colors hover:bg-white/[0.03]"
          >
            <feature.icon className="size-6 text-primary transition-transform group-hover:-translate-y-0.5" aria-hidden />
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold tracking-tight">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{feature.text}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  )
}
