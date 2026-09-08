import { Clock, MapPin, ShieldCheck } from 'lucide-react'

import { Section } from '@/components/landing/section'
import { Reveal } from '@/components/landing/reveal'
import { LeadForm } from '@/components/landing/lead-form'

const perks = [
  { icon: Clock, text: 'Ответ менеджера за 30 минут' },
  { icon: MapPin, text: 'Выезд инженера по Баку — бесплатно' },
  { icon: ShieldCheck, text: 'Данные хранятся в Азербайджане' },
]

export function Cta() {
  return (
    <Section id="demo" className="scroll-mt-10">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/8 bg-gradient-to-br from-white/[0.04] to-transparent">
        <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
        <div className="grid gap-12 p-8 sm:p-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:p-16">
          <Reveal className="flex flex-col gap-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Бесплатное демо</span>
              <h2 className="mt-4 text-balance text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">
                Заказать бесплатный аудит и демо
              </h2>
              <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                Установим камеры на вашей точке на 7 дней. Через неделю покажем реальные расхождения с кассой — в цифрах
                и с видео.
              </p>
            </div>
            <ul className="flex flex-col gap-3">
              {perks.map((perk) => (
                <li key={perk.text} className="flex items-center gap-3 text-sm text-foreground/85">
                  <perk.icon className="size-4 text-primary" aria-hidden />
                  {perk.text}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1} className="glass rounded-3xl p-6 sm:p-8">
            <LeadForm />
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
