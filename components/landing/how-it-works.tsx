import { BrainCircuit, Camera, CloudUpload, Send } from 'lucide-react'

import { Section, SectionHeader } from '@/components/landing/section'
import { Stagger, StaggerItem } from '@/components/landing/reveal'

const steps = [
  {
    icon: Camera,
    title: 'Устанавливаем IP-камеры',
    text: 'Наша команда монтирует камеры за 1 день. Оборудование — в рассрочку 0%.',
  },
  {
    icon: CloudUpload,
    title: 'Видео в защищённое облако',
    text: 'Шифрованный поток на серверы в Азербайджане. Данные не покидают страну.',
  },
  {
    icon: BrainCircuit,
    title: 'ИИ анализирует 24/7',
    text: 'Нейросеть считает продажи, распознаёт нарушения и сверяет с кассой.',
  },
  {
    icon: Send,
    title: 'Отчёты и алерты в Telegram',
    text: 'Вечерний отчёт в 23:00 и мгновенные уведомления о критичных событиях.',
  },
]

export function HowItWorks() {
  return (
    <Section id="how" className="border-y border-white/6 bg-white/[0.015]">
      <SectionHeader
        eyebrow="Как это работает"
        title="Запуск за 48 часов. Без своего IT-отдела"
        description="Мы берём на себя монтаж, облако и настройку ИИ. Вы получаете первый отчёт уже на второй день."
      />
      <Stagger as="ol" className="relative grid gap-8 md:grid-cols-4 md:gap-6">
        <div
          aria-hidden
          className="absolute top-6 left-0 hidden h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent md:block"
        />
        {steps.map((step, index) => (
          <StaggerItem as="li" key={step.title} className="relative flex gap-5 md:flex-col md:gap-6">
            <div className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-2xl border border-primary/30 bg-background text-primary shadow-[0_0_30px_-8px_rgb(0_209_255/0.5)]">
              <step.icon className="size-5" aria-hidden />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold tabular-nums tracking-[0.2em] text-muted-foreground">
                ШАГ 0{index + 1}
              </span>
              <h3 className="text-lg font-semibold tracking-tight">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{step.text}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  )
}
