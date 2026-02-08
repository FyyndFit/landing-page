"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const legalLinks = [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Use" },
  ]

  const supportLinks = [
    { href: "https://support.fyyndfit.com", label: "Contact Us", external: true },
    { href: "https://support.fyyndfit.com", label: "Delete Account", external: true },
  ]

  return (
    <footer className="relative py-20 lg:py-24 bg-background border-t border-border/50 texture-bg overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container px-6 md:px-12 lg:px-20 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.a
              href="/"
              className="inline-flex items-center gap-3 mb-6 group"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="relative">
                <Image
                  src="/fyyndfit-icon.png"
                  alt="FyyndFit"
                  width={48}
                  height={48}
                  className="rounded-xl"
                  loading="lazy"
                  quality={90}
                />
                <div className="absolute inset-0 bg-primary/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <span className="font-bold text-2xl text-foreground font-display">
                FyyndFit
              </span>
            </motion.a>

            <p className="text-muted-foreground text-base leading-relaxed max-w-md mb-6">
              Find your fitness with AI-powered workouts. Scan equipment, learn form, and track your progress.
            </p>

            {/* App Store Link */}
            <motion.a
              href="https://apps.apple.com/ca/app/fyyndfit/id6747248203"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 group"
              whileHover={{ x: 4 }}
            >
              <span>Download on the App Store</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-foreground text-base mb-4 font-display">
              Legal
            </h3>
            <nav className="flex flex-col gap-3">
              {legalLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm group flex items-center gap-2"
                  whileHover={{ x: 4 }}
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.a>
              ))}
            </nav>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold text-foreground text-base mb-4 font-display">
              Support
            </h3>
            <nav className="flex flex-col gap-3">
              {supportLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm group flex items-center gap-2"
                  whileHover={{ x: 4 }}
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.a>
              ))}
            </nav>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-sm text-muted-foreground">
            <p>&copy; {currentYear} FyyndFit.</p>
            <span className="hidden md:inline">•</span>
            <p className="text-foreground/60">Find your fitness.</p>
          </div>

          {/* Additional Info */}
          <div className="flex items-center gap-4 text-xs text-muted-foreground/70">
            <span>Made with</span>
            <span className="text-primary">♥</span>
            <span>for fitness enthusiasts</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
