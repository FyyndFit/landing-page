"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-16 bg-background border-t border-border section-grayscale">
      <div className="container px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <motion.a
            href="/"
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src="/fyyndfit-icon.png"
              alt="FyyndFit"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span className="font-bold text-lg text-foreground font-display">
              FyyndFit
            </span>
          </motion.a>

          {/* Links */}
          <nav className="flex items-center gap-10 text-sm">
            <a
              href="/privacy"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Privacy
            </a>
            <a
              href="/terms"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Terms
            </a>
            <a
              href="/contact"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Contact
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} FyyndFit. Find your fitness.
          </p>
        </div>
      </div>
    </footer>
  )
}
