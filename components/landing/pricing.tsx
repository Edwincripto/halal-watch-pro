import { Check } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Section, SectionHeader } from '@/components/landing/section'
import { Stagger, StaggerItem } from '@/components/landing/reveal'
import { cn } from '@/lib/utils'

const plans = [
  {
    name: 'Старт',
    price: '299',
    prefix: '',
    description: 'Для одной точки, чтобы увидеть первые расхождения.',
    features: ['2 камеры', 'Хранение 7 дней', 'Базовые отчёты в Telegram'],
    cta: 'Начать с демо',
    featured: false,
  },
  {
    name: 'Бизнес',
    price: '599',
    prefix: '',
    description: 'Полная ИИ-аналитика для донерной или ресторана.',
    features: ['5 камер', 'Хранение 30 дней', 'ИИ-аналитика: SKU, анти-воровство, персонал', 'Сверка с кассой'],
    cta: 'Получить демо 7 дней',
    featured: true,
  },
  {
    name: 'Корпоратив',
    price: '1200',
    prefix: 'От',
    description: 'Сети, склады и логистика с интеграциями.',
    features: ['10+ камер', 'API для 1С и вашей CRM', 'Выделенный сервер в Баку', 'Персональный менеджер'],
    cta: 'Обсудить проект',
    featured: false,
  },
]

export function Pricing() {
  return (
    <Section id="pricing">
      <SectionHeader
        eyebrow="Тарифы"
        title="Окупается в первый месяц"
        description="Одна пойманная «левая» продажа в день окупает тариф «Бизнес» за 3 недели."
      />
      <Stagger as="ul" className="grid items-stretch gap-4 lg:grid-cols-3">
        {plans.map((plan) => (
          <StaggerItem
            as="li"
            key={plan.name}
            className={cn(
              'relative flex flex-col gap-8 rounded-3xl p-8',
              plan.featured
                ? 'glow-accent border border-primary/40 bg-gradient-to-b from-primary/12 to-transparent lg:-my-4 lg:py-12'
                : 'glass',
            )}
          >
            {plan.featured ? (
              <span className="absolute top-0 right-8 -translate-y-1/2 rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground">
                Хит
              </span>
            ) : null}
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">{plan.name}</h3>
              <p className="flex items-baseline gap-1.5">
                {plan.prefix ? <span className="text-lg text-muted-foreground">{plan.prefix}</span> : null}
                <span className="text-5xl font-semibold tabular-nums tracking-tight">{plan.price}</span>
                <span className="text-muted-foreground">AZN/мес</span>
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">{plan.description}</p>
            </div>
            <ul className="flex flex-col gap-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button
              render={<Link href="#demo" />}
            nativeButton={false}
              variant={plan.featured ? 'default' : 'outline'}
              className={cn(
                'mt-auto h-12 w-full rounded-full text-sm font-semibold',
                plan.featured ? 'hover:bg-primary/90' : 'border-white/15 bg-transparent hover:bg-white/10',
              )}
            >
              {plan.cta}
            </Button>
          </StaggerItem>
        ))}
      </Stagger>
      <p className="mt-10 text-center text-xs text-muted-foreground">
        Оборудование в рассрочку 0%. Цены указаны без НДС. Монтаж и настройка входят в стоимость.
      </p>
    </Section>
  )
}
