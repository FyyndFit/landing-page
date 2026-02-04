import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Problem } from "@/components/problem"
import { Features } from "@/components/features"
import { HowItWorks } from "@/components/how-it-works"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { CursorReveal } from "@/components/cursor-reveal"

export default function Home() {
  return (
    <main className="min-h-screen">
      <CursorReveal />
      <Header />
      <Hero />
      <Problem />
      <Features />
      <HowItWorks />
      <CTA />
      <Footer />
    </main>
  )
}
