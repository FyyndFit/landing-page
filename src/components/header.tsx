"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ThemeToggle } from "./theme-toggle"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50 texture-card relative">
      <div className="container px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 3 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Image
                src="/fyyndfit-icon.png"
                alt="FyyndFit"
                width={40}
                height={40}
                className="rounded-xl"
              />
            </motion.div>
            <span className="text-xl font-bold text-foreground tracking-tight font-display">
              FyyndFit
            </span>
          </a>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <motion.a
              href="#waitlist"
              className="hidden sm:inline-flex items-center justify-center h-11 px-6 bg-primary text-primary-foreground text-sm font-semibold rounded-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Early Access
            </motion.a>
          </div>
        </div>
      </div>
    </header>
  )
}
