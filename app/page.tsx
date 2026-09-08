import { Navbar } from '@/components/landing/navbar'
import { Hero } from '@/components/landing/hero'
import { PainPoints } from '@/components/landing/pain-points'
import { Solutions } from '@/components/landing/solutions'
import { HowItWorks } from '@/components/landing/how-it-works'
import { Features } from '@/components/landing/features'
import { Pricing } from '@/components/landing/pricing'
import { Cases } from '@/components/landing/cases'
import { Cta } from '@/components/landing/cta'
import { Footer } from '@/components/landing/footer'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <Solutions />
        <HowItWorks />
        <Features />
        <Pricing />
        <Cases />
        <Cta />
      </main>
      <Footer />
    </>
  )
}
