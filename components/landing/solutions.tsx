import { Check, Package, Sandwich, UtensilsCrossed } from 'lucide-react'

import { Section, SectionHeader } from '@/components/landing/section'
import { Reveal } from '@/components/landing/reveal'

const skuRows = [
  { name: 'Донер в лаваше', count: 47 },
  { name: 'Донер в хлебе', count: 23 },
  { name: 'Кола', count: 31 },
  { name: 'Айран', count: 19 },
]

function DonerReport() {
  return (
    <div className="glass flex flex-col gap-4 rounded-2xl p-5 font-mono text-xs">
      <div className="flex items-center justify-between text-muted-foreground">
        <span>Отчёт · 23:00</span>
        <span className="flex items-center gap-1.5 text-primary">
          <span className="size-1.5 rounded-full bg-primary" /> Telegram
        </span>
      </div>
      <ul className="flex flex-col gap-2">
        {skuRows.map((row) => (
          <li key={row.name} className="flex items-center justify-between">
            <span className="text-foreground/80">{row.name}</span>
            <span className="tabular-nums text-foreground">{row.count}</span>
          </li>
        ))}
      </ul>
      <div className="border-t border-white/10 pt-3">
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Продано на</span>
          <span className="text-base font-semibold tabular-nums text-foreground">840 AZN</span>
        </div>
        <div className="mt-1.5 flex items-center justify-between">
          <span className="text-muted-foreground">Расхождение с кассой</span>
          <span className="rounded-md bg-red-500/15 px-2 py-0.5 font-semibold tabular-nums text-red-400">−2 донера</span>
        </div>
      </div>
    </div>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-foreground/80">
          <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function Solutions() {
  return (
    <Section id="solutions">
      <SectionHeader
        eyebrow="Решения для бизнеса"
        title="Один ИИ — три сценария, где деньги утекают чаще всего"
        description="Модели обучены на реальных объектах в Баку: донерные, рестораны, склады."
      />

      <div className="grid gap-4 lg:grid-cols-3 lg:grid-rows-[auto_auto]">
        <Reveal
          as="article"
          className="glass relative flex flex-col gap-8 overflow-hidden rounded-3xl p-8 lg:col-span-2 lg:flex-row lg:items-start lg:p-10"
        >
          <div className="pointer-events-none absolute -top-24 -right-24 size-64 rounded-full bg-primary/15 blur-3xl" />
          <div className="flex flex-1 flex-col gap-6">
            <div className="flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
              <Sandwich className="size-6" aria-hidden />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Сценарий 01</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">Для донерных и фастфуда</h3>
            </div>
            <BulletList
              items={[
                'Считаем SKU: 47 донеров в лаваше, 23 в хлебе, 31 кола, 19 айран',
                'Ловим продажи «мимо кассы». Сверяем ИИ с данными из кассы',
                'Отчёт в 23:00: Продано на 840 AZN. Расхождение: −2 донера',
              ]}
            />
          </div>
          <div className="w-full lg:w-72 lg:shrink-0">
            <DonerReport />
          </div>
        </Reveal>

        <Reveal as="article" delay={0.1} className="glass flex flex-col gap-6 rounded-3xl p-8">
          <div className="flex size-12 items-center justify-center rounded-2xl bg-white/5 text-foreground ring-1 ring-white/10">
            <UtensilsCrossed className="size-6" aria-hidden />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Сценарий 02</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight">Для ресторанов</h3>
          </div>
          <BulletList
            items={[
              'Контроль кассы, чистоты зала, скорости обслуживания',
              'Детекция конфликтов и курения персонала',
            ]}
          />
        </Reveal>

        <Reveal as="article" delay={0.15} className="glass flex flex-col gap-6 rounded-3xl p-8 lg:col-span-3 lg:flex-row lg:items-center lg:gap-12 lg:p-10">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white/5 text-foreground ring-1 ring-white/10">
            <Package className="size-6" aria-hidden />
          </div>
          <div className="lg:w-72 lg:shrink-0">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Сценарий 03</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight">Для складов и логистики</h3>
          </div>
          <div className="grid flex-1 gap-3 sm:grid-cols-2">
            <BulletList items={['Учёт товара, контроль погрузки, простоев техники']} />
            <BulletList items={['Контроль водителей и сохранности груза']} />
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
