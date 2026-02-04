"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ScanLine, ClipboardList, Flame } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: ScanLine,
    title: "Scan it",
    description: "Point your camera at any gym equipment. AI identifies it instantly.",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Get your routine",
    description: "Receive personalized workouts tailored to your goals and equipment.",
  },
  {
    number: "03",
    icon: Flame,
    title: "Crush it & Track it",
    description: "Complete your workout, track progress, and break your limits.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 lg:py-40 bg-background relative overflow-hidden">
      <div className="container px-6 md:px-12 lg:px-20 relative z-10">
        {/* Section label */}
        <motion.div
          className="flex items-center gap-4 mb-12"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="w-16 h-px bg-primary" />
          <span className="text-xs text-primary font-semibold uppercase tracking-[0.2em]">
            How It Works
          </span>
        </motion.div>

        {/* Main headline */}
        <div className="max-w-4xl mb-20">
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] font-display"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            3 steps to finding
            <br />
            <span className="text-gradient">your fitness.</span>
          </motion.h2>
        </div>

        {/* Mobile: Vertical timeline */}
        <div className="flex flex-col gap-6 lg:hidden relative">
          {/* Connecting line */}
          <div className="absolute left-6 top-8 bottom-8 w-px bg-border" />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="group p-6 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all duration-300 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:glow-red-sm transition-all duration-300 relative z-10">
                  <step.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">Step {step.number}</span>
                  <h3 className="text-xl font-bold text-foreground mt-1 font-display">{step.title}</h3>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop: Phone with floating cards */}
        <div className="hidden lg:flex relative items-center justify-center gap-20">
          {/* Left steps */}
          <div className="flex flex-col gap-8 w-1/3">
            <motion.div
              className="group p-6 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all duration-300"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ x: 10 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:glow-red-sm transition-all duration-300">
                  <ScanLine className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">Step 01</span>
                  <h3 className="text-xl font-bold text-foreground mt-1 font-display">{steps[0].title}</h3>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{steps[0].description}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="group p-6 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all duration-300 ml-8"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ x: 10 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:glow-red-sm transition-all duration-300">
                  <ClipboardList className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">Step 02</span>
                  <h3 className="text-xl font-bold text-foreground mt-1 font-display">{steps[1].title}</h3>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{steps[1].description}</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Center - Phone Mockup */}
          <motion.div
            className="relative w-1/3 flex justify-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
          >
            <motion.div
              className="relative w-[280px]"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Phone frame */}
              <div className="relative bg-gradient-to-br from-muted to-muted/50 rounded-[3rem] p-3 border border-border shadow-2xl">
                <div className="bg-card rounded-[2.5rem] overflow-hidden aspect-[9/19] flex items-center justify-center">
                  <div className="text-center space-y-6 p-6">
                    <Image
                      src="/fyyndfit-logo.png"
                      alt="FyyndFit App"
                      width={120}
                      height={120}
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
              <div className="absolute inset-0 bg-primary/15 blur-3xl rounded-full transform scale-75 -z-10" />
            </motion.div>
          </motion.div>

          {/* Right step */}
          <div className="flex flex-col justify-center w-1/3">
            <motion.div
              className="group p-6 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all duration-300"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ x: -10 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:glow-red-sm transition-all duration-300">
                  <Flame className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">Step 03</span>
                  <h3 className="text-xl font-bold text-foreground mt-1 font-display">{steps[2].title}</h3>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{steps[2].description}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
