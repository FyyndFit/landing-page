"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"

export function ScrollReveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <div
      ref={ref}
      className={`section-reveal ${isInView ? "revealed" : ""}`}
    >
      {children}
    </div>
  )
}
