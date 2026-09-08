import { Section, SectionHeader } from '@/components/landing/section'
import { Reveal, Stagger, StaggerItem } from '@/components/landing/reveal'
import { RoiCalculator } from '@/components/landing/roi-calculator'

const cases = [
  {
    type: 'Донерная · Баку',
    metric: '+2200 AZN',
    metricLabel: 'к выручке в месяц',
    text: 'Нашли 5 «левых» продаж в день. Кассир отменял чеки после ухода клиента — ИИ сверил видео с кассой на второй день работы.',
  },
  {
    type: 'Склад · Сумгаит',
    metric: '−65%',
    metricLabel: 'недостач за 2 месяца',
    text: 'Контроль погрузки и распознавание номеров. Выяснили, что часть товара уезжала без накладных с «своими» водителями.',
  },
]

export function Cases() {
  return (
    <Section id="cases" className="border-y border-white/6 bg-white/[0.015]">
      <SectionHeader
        eyebrow="Кейсы"
        title="Цифры клиентов, а не обещания"
      />
      <Stagger as="ul" className="grid gap-4 md:grid-cols-2">
        {cases.map((item) => (
          <StaggerItem as="li" key={item.type} className="glass flex flex-col gap-8 rounded-3xl p-8 sm:p-10">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">{item.type}</span>
            <div>
              <p className="text-5xl font-semibold tabular-nums tracking-tight text-primary sm:text-6xl">{item.metric}</p>
              <p className="mt-2 text-sm text-muted-foreground">{item.metricLabel}</p>
            </div>
            <p className="text-pretty text-base leading-relaxed text-foreground/85">{item.text}</p>
          </StaggerItem>
        ))}
      </Stagger>
      <Reveal className="mt-6">
        <RoiCalculator />
      </Reveal>
    </Section>
  )
}
