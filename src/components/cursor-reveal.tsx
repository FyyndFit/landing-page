"use client"

import { useEffect, useRef, useCallback } from "react"

export function CursorReveal() {
  const overlayRef = useRef<HTMLDivElement>(null)

  const energize = useCallback(() => {
    if (!overlayRef.current) return
    overlayRef.current.style.opacity = "0"
  }, [])

  const drain = useCallback(() => {
    if (!overlayRef.current) return
    overlayRef.current.style.opacity = "1"
  }, [])

  useEffect(() => {
    // If the mouse is already on the page when component mounts,
    // the first mousemove will energize (mouseenter won't re-fire)
    window.addEventListener("mousemove", energize, { once: true })
    document.documentElement.addEventListener("mouseenter", energize)
    document.documentElement.addEventListener("mouseleave", drain)

    return () => {
      window.removeEventListener("mousemove", energize)
      document.documentElement.removeEventListener("mouseenter", energize)
      document.documentElement.removeEventListener("mouseleave", drain)
    }
  }, [energize, drain])

  return (
    <>
      {/* Grain texture for rustic feel */}
      <div
        className="grain-overlay pointer-events-none fixed inset-0 z-[190] opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "256px 256px",
        }}
      />

      {/* Grayscale overlay — fades away when the user's mouse is on the page */}
      <div
        ref={overlayRef}
        className="cursor-reveal-overlay pointer-events-none fixed inset-0 z-[200]"
        style={{
          backdropFilter: "grayscale(100%) sepia(10%) brightness(0.95)",
          WebkitBackdropFilter: "grayscale(100%) sepia(10%) brightness(0.95)",
          opacity: 1,
          transition: "opacity 1.2s ease",
        }}
      />
    </>
  )
}
