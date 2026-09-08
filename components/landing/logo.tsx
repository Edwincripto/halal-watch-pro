import Link from 'next/link'

import { cn } from '@/lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn('flex items-center gap-2.5', className)} aria-label="HALAL WATCH PRO — на главную">
      <span className="relative flex size-8 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/40">
        <span className="size-2.5 rounded-full bg-primary shadow-[0_0_12px_2px_rgb(0_209_255/0.7)]" />
        <span className="absolute inset-0 rounded-lg border border-primary/20" />
      </span>
      <span className="text-sm font-semibold tracking-[0.18em]">
        HALAL WATCH <span className="text-primary">PRO</span>
      </span>
    </Link>
  )
}
