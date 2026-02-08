"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function Hero() {

  return (
    <section className="min-h-screen bg-hero-gradient relative overflow-hidden section-grayscale">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-primary/10 rounded-full blur-[80px] sm:blur-[100px] lg:blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[200px] sm:w-[300px] md:w-[350px] lg:w-[400px] h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px] bg-primary/5 rounded-full blur-[60px] sm:blur-[80px] lg:blur-[100px]" />
      </div>

      {/* Mobile: MacroFactor-style centered layout */}
      <div className="lg:hidden container relative z-10 px-4 sm:px-6 pt-20 sm:pt-24 pb-16 sm:pb-20 min-h-screen flex flex-col items-center justify-center">
        <div className="flex flex-col items-center text-center w-full max-w-4xl mx-auto mb-12 sm:mb-16">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 sm:mb-8 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs sm:text-sm font-medium text-primary">AI-Powered Fitness</span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl text-foreground leading-[1.1] mb-4 sm:mb-6 font-display"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Find Your
            <br />
            <span className="text-gradient">Fitness.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-4 sm:mb-6 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Scan. Learn. Train smarter.
          </motion.p>

          <motion.p
            className="text-base sm:text-lg text-muted-foreground/70 mb-8 sm:mb-10 max-w-md mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            FyyndFit uses AI to turn any gym equipment into your personal trainer.
            Perfect for beginners. No more guessing.
          </motion.p>

          {/* Download CTA Button - Large and Prominent */}
          <motion.a
            href="#community"
            className="h-14 sm:h-16 px-10 sm:px-12 bg-primary text-primary-foreground font-semibold text-base sm:text-lg rounded-full glow-red-sm hover:glow-red flex items-center justify-center gap-3 transition-all duration-300 relative z-20 mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Download the App
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.a>
        </div>

        {/* App Preview - Positioned Below Button */}
        <motion.div
          className="relative w-full flex items-center justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 100 }}
        >
          <div className="relative w-[280px] sm:w-[320px] md:w-[360px]">
            <motion.div
              className="relative"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Phone frame */}
              <div className="relative bg-gradient-to-br from-muted to-muted/50 rounded-[3rem] p-3 border border-border shadow-2xl">
                <div className="bg-card rounded-[2.5rem] overflow-hidden aspect-[9/19] relative">
                  <Image
                    src="/IMG_9474.PNG"
                    alt="FyyndFit App Preview"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/15 blur-3xl rounded-full transform scale-75 -z-10" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Desktop: Original side-by-side layout */}
      <div className="hidden lg:flex container relative z-10 px-6 md:px-12 lg:px-20 pt-32 pb-24 min-h-screen items-center">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center w-full">
          {/* Left: Text Content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-10 texture-card relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">AI-Powered Fitness</span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.05] mb-8 font-display"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Find Your
              <br />
              <span className="text-gradient">Fitness.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="text-xl md:text-2xl text-muted-foreground mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Scan. Learn. Train smarter.
            </motion.p>

            <motion.p
              className="text-lg text-muted-foreground/70 mb-12 max-w-md leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              FyyndFit uses AI to turn any gym equipment into your personal trainer.
              Perfect for beginners. No more guessing.
            </motion.p>

            {/* Download CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 max-w-md"
            >
              <motion.a
                href="#community"
                className="h-14 px-8 bg-primary text-primary-foreground font-semibold rounded-xl glow-red-sm hover:glow-red flex items-center justify-center gap-2 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Download the App
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </div>

          {/* Right: Visual */}
          <div className="relative h-[650px] flex items-center justify-center">
            {/* App mockup */}
            <motion.div
              className="relative w-[320px]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 100 }}
            >
              <motion.div
                className="relative"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Phone frame */}
                <div className="relative bg-gradient-to-br from-muted to-muted/50 rounded-[3rem] p-3 border border-border shadow-2xl">
                  <div className="bg-card rounded-[2.5rem] overflow-hidden aspect-[9/19] relative">
                    <Image
                      src="/IMG_9474.PNG"
                      alt="FyyndFit App Preview"
                      fill
                      className="object-cover object-top"
                      priority
                      sizes="(max-width: 768px) 280px, (max-width: 1024px) 300px, 320px"
                      quality={85}
                    />
                  </div>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full transform scale-75 -z-10" />
              </motion.div>
            </motion.div>

            {/* Floating elements */}
            <motion.div
              className="absolute top-16 left-0 px-4 py-2.5 bg-card/80 backdrop-blur-sm rounded-xl border border-border shadow-lg texture-card"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <span className="text-sm text-foreground font-medium">Scan Equipment</span>
            </motion.div>

            <motion.div
              className="absolute top-40 right-0 px-4 py-2.5 bg-primary/20 backdrop-blur-sm rounded-xl border border-primary/30 texture-card"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <span className="text-sm text-primary font-medium">AI Analyzing...</span>
            </motion.div>

            <motion.div
              className="absolute bottom-24 left-8 px-4 py-2.5 bg-card/80 backdrop-blur-sm rounded-xl border border-border shadow-lg texture-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              <span className="text-sm text-foreground font-medium">Track Progress</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
