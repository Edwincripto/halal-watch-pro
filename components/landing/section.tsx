import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'
import { Reveal } from '@/components/landing/reveal'

type SectionProps = {
  id?: string
  children: ReactNode
  className?: string
}

export function Section({ id, children, className }: SectionProps) {
  return (
    <section id={id} className={cn('relative py-24 sm:py-32', className)}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">{children}</div>
    </section>
  )
}

type SectionHeaderProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeader({ eyebrow, title, description, align = 'center' }: SectionHeaderProps) {
  return (
    <Reveal
      className={cn(
        'mb-14 flex max-w-3xl flex-col gap-4 sm:mb-20',
        align === 'center' ? 'mx-auto items-center text-center' : 'items-start text-left',
      )}
    >
      {eyebrow ? (
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</span>
      ) : null}
      <h2 className="text-balance text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">{description}</p>
      ) : null}
    </Reveal>
  )
}
