import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Logo } from '@/components/landing/logo'

const links = [
  { href: '#solutions', label: 'Решения' },
  { href: '#how', label: 'Как работает' },
  { href: '#pricing', label: 'Тарифы' },
  { href: '#cases', label: 'Кейсы' },
]

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-4 flex w-[calc(100%-2rem)] max-w-6xl items-center justify-between rounded-full border border-white/8 bg-background/70 px-4 py-2.5 backdrop-blur-xl sm:px-6">
        <Logo />
        <nav aria-label="Основная навигация" className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Button
          render={<Link href="#demo" />}
            nativeButton={false}
          className="h-9 rounded-full px-4 text-sm font-semibold hover:bg-primary/90"
        >
          Демо 7 дней
        </Button>
      </div>
    </header>
  )
}
