'use client'

import { useActionState, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { submitLead } from '@/app/actions/submit-lead'
import { BUSINESS_TYPES, type BusinessType, type LeadFormState } from '@/lib/leads'
import { cn } from '@/lib/utils'

const initialState: LeadFormState = { status: 'idle' }

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null
  return (
    <p id={id} role="alert" className="text-xs text-red-400">
      {message}
    </p>
  )
}

export function LeadForm() {
  const [state, formAction, pending] = useActionState(submitLead, initialState)
  const [business, setBusiness] = useState<BusinessType>('Донерная')
  const errors = state.errors ?? {}

  if (state.status === 'success') {
    return (
      <div className="flex flex-col items-center gap-4 py-10 text-center" role="status">
        <CheckCircle2 className="size-12 text-primary" aria-hidden />
        <h3 className="text-2xl font-semibold tracking-tight">Заявка отправлена</h3>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">{state.message}</p>
      </div>
    )
  }

  return (
    <form action={formAction} noValidate className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Имя</Label>
          <Input
            id="name"
            name="name"
            autoComplete="name"
            placeholder="Эльчин"
            required
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className="h-12 rounded-xl bg-white/[0.03]"
          />
          <FieldError id="name-error" message={errors.name} />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="phone">Телефон</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder="+994 50 000 00 00"
            required
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            className="h-12 rounded-xl bg-white/[0.03]"
          />
          <FieldError id="phone-error" message={errors.phone} />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="whatsapp">
          WhatsApp <span className="font-normal text-muted-foreground">(если отличается)</span>
        </Label>
        <Input
          id="whatsapp"
          name="whatsapp"
          type="tel"
          inputMode="tel"
          placeholder="+994 55 000 00 00"
          aria-invalid={Boolean(errors.whatsapp)}
          aria-describedby={errors.whatsapp ? 'whatsapp-error' : undefined}
          className="h-12 rounded-xl bg-white/[0.03]"
        />
        <FieldError id="whatsapp-error" message={errors.whatsapp} />
      </div>

      <fieldset className="flex flex-col gap-3">
        <legend className="text-sm font-medium">Сфера</legend>
        <input type="hidden" name="business" value={business} />
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4" role="radiogroup" aria-label="Сфера бизнеса">
          {BUSINESS_TYPES.map((type) => {
            const active = business === type
            return (
              <button
                key={type}
                type="button"
                role="radio"
                aria-checked={active}
                onClick={() => setBusiness(type)}
                className={cn(
                  'h-11 rounded-xl border text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50',
                  active
                    ? 'border-primary bg-primary/12 text-primary'
                    : 'border-white/10 bg-white/[0.03] text-muted-foreground hover:border-white/20 hover:text-foreground',
                )}
              >
                {type}
              </button>
            )
          })}
        </div>
        <FieldError id="business-error" message={errors.business} />
      </fieldset>

      <div className="flex flex-col gap-2">
        <Label className="flex items-start gap-3 text-sm font-normal leading-relaxed text-muted-foreground">
          <Checkbox name="consent" required aria-invalid={Boolean(errors.consent)} className="mt-0.5" />
          <span>
            Согласен на обработку данных согласно{' '}
            <Link href="/privacy" className="underline underline-offset-4 hover:text-foreground">
              политике конфиденциальности
            </Link>
          </span>
        </Label>
        <FieldError id="consent-error" message={errors.consent} />
      </div>

      <Button
        type="submit"
        disabled={pending}
        className="glow-accent mt-2 h-13 w-full rounded-full text-base font-semibold hover:bg-primary/90"
      >
        {pending ? <Loader2 className="size-5 animate-spin" aria-hidden /> : null}
        {pending ? 'Отправляем...' : 'Заказать бесплатный аудит и демо'}
        {!pending ? <ArrowRight data-icon="inline-end" className="size-5" /> : null}
      </Button>

      {state.status === 'error' && state.message ? (
        <p role="alert" className="text-center text-xs text-red-400">
          {state.message}
        </p>
      ) : null}
      <p className="text-center text-xs text-muted-foreground">Без предоплаты. Демо 7 дней на вашей точке.</p>
    </form>
  )
}
