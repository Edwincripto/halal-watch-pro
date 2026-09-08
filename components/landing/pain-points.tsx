import { Banknote, EyeOff, UserX } from 'lucide-react'

import { Section, SectionHeader } from '@/components/landing/section'
import { Stagger, StaggerItem } from '@/components/landing/reveal'

const pains = [
  {
    icon: Banknote,
    title: 'Теряете на кассе?',
    text: 'Продажи «мимо кассы» и отменённые чеки съедают до 15% дневной выручки — и вы об этом не узнаёте.',
    metric: 'до 15%',
    metricLabel: 'выручки уходит незаметно',
  },
  {
    icon: UserX,
    title: 'Сотрудники воруют?',
    text: 'Друзья «за счёт заведения», лишние порции, недовес. Камера без ИИ этого не покажет — некому смотреть 12 часов записи.',
    metric: '5+',
    metricLabel: '«левых» продаж в день на точку',
  },
  {
    icon: EyeOff,
    title: 'Нет контроля?',
    text: 'Вы не можете быть на каждой точке. Управляющий отчитывается на словах, а цифры сходятся только на бумаге.',
    metric: '0',
    metricLabel: 'объективных данных без ИИ',
  },
]

export function PainPoints() {
  return (
    <Section id="pain">
      <SectionHeader
        eyebrow="Боль бизнеса"
        title="Мы считаем каждую продажу и ловим нарушения"
        description="ИИ смотрит записи вместо вас — круглосуточно, без усталости и «своих людей»."
      />
      <Stagger as="ul" className="grid gap-4 sm:grid-cols-3">
        {pains.map((pain) => (
          <StaggerItem
            as="li"
            key={pain.title}
            className="glass group relative flex flex-col gap-6 rounded-3xl p-7 transition-colors hover:border-primary/30"
          >
            <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
              <pain.icon className="size-5" aria-hidden />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold tracking-tight">{pain.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{pain.text}</p>
            </div>
            <div className="mt-auto border-t border-white/8 pt-5">
              <p className="text-3xl font-semibold tabular-nums tracking-tight text-primary">{pain.metric}</p>
              <p className="mt-1 text-xs text-muted-foreground">{pain.metricLabel}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  )
}
