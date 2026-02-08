"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-background/80 backdrop-blur-md border-b border-border/30"
        : "bg-transparent"
      }`}>
      <div className="container px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 sm:gap-3 group">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 3 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Image
                src="/fyyndfit-icon.png"
                alt="FyyndFit"
                width={32}
                height={32}
                className="sm:w-10 sm:h-10 rounded-xl"
                priority
                quality={90}
              />
            </motion.div>
            <span className="text-lg sm:text-xl font-bold text-foreground tracking-tight font-display">
              FyyndFit
            </span>
          </a>

          {/* Right side - CTA button visible on all screens */}
          <motion.a
            href="#community"
            className="inline-flex items-center justify-center h-10 sm:h-11 px-4 sm:px-6 bg-primary text-primary-foreground text-xs sm:text-sm font-semibold rounded-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Download
          </motion.a>
        </div>
      </div>
    </header>
  )
}
