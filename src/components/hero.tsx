"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function Hero() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitted(true)
    setIsLoading(false)
  }

  return (
    <section className="min-h-screen bg-hero-gradient relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10 px-6 md:px-12 lg:px-20 pt-32 pb-24 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center w-full">
          {/* Left: Text Content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-10"
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

            {/* CTA Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 h-14 px-5 bg-muted/50 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  />
                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    className="h-14 px-8 bg-primary text-primary-foreground font-semibold rounded-xl glow-red-sm hover:glow-red flex items-center justify-center gap-2 transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isLoading ? "Joining..." : (
                      <>
                        Get Early Access
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </motion.button>
                </form>
              ) : (
                <div className="bg-primary/10 border border-primary/20 rounded-xl p-5 max-w-md">
                  <p className="text-primary font-medium">
                    You&apos;re on the list! We&apos;ll notify you when FyyndFit launches.
                  </p>
                </div>
              )}
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex gap-12 mt-16 pt-10 border-t border-border/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div>
                <div className="text-3xl font-bold text-primary font-display">1000+</div>
                <div className="text-sm text-muted-foreground mt-1">Waitlist</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary font-display">500+</div>
                <div className="text-sm text-muted-foreground mt-1">Exercises</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary font-display">100%</div>
                <div className="text-sm text-muted-foreground mt-1">Free to Join</div>
              </div>
            </motion.div>
          </div>

          {/* Right: Visual */}
          <div className="relative h-[500px] lg:h-[650px] flex items-center justify-center">
            {/* App mockup placeholder */}
            <motion.div
              className="relative w-[280px] md:w-[320px]"
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
                  <div className="bg-card rounded-[2.5rem] overflow-hidden aspect-[9/19] flex items-center justify-center">
                    <div className="text-center space-y-6 p-8">
                      <Image
                        src="/fyyndfit-logo.png"
                        alt="FyyndFit App"
                        width={140}
                        height={140}
                        className="mx-auto rounded-2xl"
                      />
                      <div className="space-y-2">
                        <p className="text-muted-foreground text-sm font-medium">App Preview</p>
                        <p className="text-muted-foreground/60 text-xs">Coming Soon</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full transform scale-75 -z-10" />
              </motion.div>
            </motion.div>

            {/* Floating elements */}
            <motion.div
              className="absolute top-16 left-0 px-4 py-2.5 bg-card/80 backdrop-blur-sm rounded-xl border border-border shadow-lg"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <span className="text-sm text-foreground font-medium">Scan Equipment</span>
            </motion.div>

            <motion.div
              className="absolute top-40 right-0 px-4 py-2.5 bg-primary/20 backdrop-blur-sm rounded-xl border border-primary/30"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <span className="text-sm text-primary font-medium">AI Analyzing...</span>
            </motion.div>

            <motion.div
              className="absolute bottom-24 left-8 px-4 py-2.5 bg-card/80 backdrop-blur-sm rounded-xl border border-border shadow-lg"
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
