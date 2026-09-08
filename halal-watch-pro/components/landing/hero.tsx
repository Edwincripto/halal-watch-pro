'use client'

import { motion, type Variants } from 'framer-motion'
import { ArrowRight, Calculator } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

const stats = [
  { value: '+30%', label: 'к выручке' },
  { value: '24/7', label: 'ИИ-контроль' },
  { value: '7 дней', label: 'бесплатно' },
]

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

export function Hero() {
  return (
    <section className="relative isolate flex min-h-svh items-center overflow-hidden pt-28 pb-20 sm:pt-32">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-cctv.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="scale-105 object-cover blur-[6px] brightness-[0.55] saturate-[0.85]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgb(0_209_255/0.12),transparent_60%)]" />
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgb(255_255_255/0.4)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.4)_1px,transparent_1px)] [background-size:64px_64px]"
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="mx-auto flex w-full max-w-6xl flex-col items-center px-5 text-center sm:px-8"
      >
        <motion.div
          variants={item}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-primary" />
          </span>
          Облако в Азербайджане · Отчёты в Telegram
        </motion.div>

        <motion.h1
          variants={item}
          className="max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
        >
          Увеличьте выручку на <span className="text-primary">30%</span>. Остановите воровство с
          ИИ-видеонаблюдением
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-xl"
        >
          Онлайн контроль донерных, ресторанов и складов 24/7. Отчёты в Telegram. Облако в Азербайджане.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row">
          <Button
            render={<Link href="#demo" />}
            nativeButton={false}
            className="glow-accent h-13 w-full rounded-full px-7 text-base font-semibold hover:bg-primary/90 sm:w-auto"
          >
            Получить демо 7 дней
            <ArrowRight data-icon="inline-end" className="size-5" />
          </Button>
          <Button
            variant="outline"
            render={<Link href="#roi" />}
            nativeButton={false}
            className="h-13 w-full rounded-full border-white/15 bg-white/5 px-7 text-base font-medium backdrop-blur hover:bg-white/10 sm:w-auto"
          >
            <Calculator data-icon="inline-start" className="size-5" />
            Рассчитать ROI
          </Button>
        </motion.div>

        <motion.dl
          variants={item}
          className="mt-20 grid w-full max-w-2xl grid-cols-3 divide-x divide-white/10 border-y border-white/10 py-6"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1 px-2">
              <dt className="order-2 text-xs text-muted-foreground sm:text-sm">{stat.label}</dt>
              <dd className="order-1 text-2xl font-semibold tabular-nums tracking-tight sm:text-4xl">{stat.value}</dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>
    </section>
  )
}
