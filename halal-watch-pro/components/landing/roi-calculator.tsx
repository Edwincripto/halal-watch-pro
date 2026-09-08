'use client'

import { useId, useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'

const PLAN_PRICE = 599
const LEAK_RATE = 0.08

const formatAzn = (value: number) => `${Math.round(value).toLocaleString('ru-RU')} AZN`

export function RoiCalculator() {
  const [dailyRevenue, setDailyRevenue] = useState(900)
  const [points, setPoints] = useState(1)
  const revenueId = useId()
  const pointsId = useId()

  const monthlyRevenue = dailyRevenue * 30 * points
  const recovered = monthlyRevenue * LEAK_RATE
  const cost = PLAN_PRICE * points
  const net = recovered - cost
  const roi = cost > 0 ? (net / cost) * 100 : 0

  return (
    <div id="roi" className="glass scroll-mt-28 grid gap-10 rounded-3xl p-8 lg:grid-cols-[1fr_auto] lg:p-10">
      <div className="flex flex-col gap-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Калькулятор ROI</p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">Сколько вы вернёте за месяц</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Средняя утечка в фастфуде без контроля — 8% выручки. Считаем консервативно.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <Label htmlFor={revenueId}>Выручка точки в день</Label>
              <span className="text-sm font-semibold tabular-nums">{formatAzn(dailyRevenue)}</span>
            </div>
            <input
              id={revenueId}
              type="range"
              min={200}
              max={5000}
              step={50}
              value={dailyRevenue}
              onChange={(event) => setDailyRevenue(Number(event.target.value))}
              className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-primary"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <Label htmlFor={pointsId}>Количество точек</Label>
              <span className="text-sm font-semibold tabular-nums">{points}</span>
            </div>
            <input
              id={pointsId}
              type="range"
              min={1}
              max={20}
              step={1}
              value={points}
              onChange={(event) => setPoints(Number(event.target.value))}
              className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-primary"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between gap-8 rounded-2xl border border-primary/30 bg-primary/8 p-7 lg:w-80">
        <dl className="flex flex-col gap-5">
          <div>
            <dt className="text-xs text-muted-foreground">Возвращённая выручка / мес</dt>
            <dd className="mt-1 text-4xl font-semibold tabular-nums tracking-tight text-primary">
              +{formatAzn(recovered)}
            </dd>
          </div>
          <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-5">
            <div>
              <dt className="text-xs text-muted-foreground">Тариф «Бизнес»</dt>
              <dd className="mt-1 text-lg font-semibold tabular-nums">{formatAzn(cost)}</dd>
            </div>
            <div>
              <dt className="text-xs text-muted-foreground">ROI</dt>
              <dd className="mt-1 text-lg font-semibold tabular-nums">{Math.round(roi)}%</dd>
            </div>
          </div>
          <div className="border-t border-white/10 pt-5">
            <dt className="text-xs text-muted-foreground">Чистая выгода / мес</dt>
            <dd className="mt-1 text-2xl font-semibold tabular-nums tracking-tight">{formatAzn(net)}</dd>
          </div>
        </dl>
        <Button render={<Link href="#demo" />}
            nativeButton={false} className="h-11 w-full rounded-full font-semibold hover:bg-primary/90">
          Проверить на своей точке
          <ArrowRight data-icon="inline-end" />
        </Button>
      </div>
    </div>
  )
}
