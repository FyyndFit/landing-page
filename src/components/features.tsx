"use client"

import { motion } from "framer-motion"
import { Camera, Dumbbell, Flame, BarChart3, Brain } from "lucide-react"

const features = [
  {
    icon: Camera,
    label: "Core",
    title: "Equipment Scanner",
    description: "Point your camera at any gym machine. Our AI identifies it instantly and teaches you proper form.",
  },
  {
    icon: Brain,
    label: "AI",
    title: "Smart Workout Creator",
    description: "Tell us your goals. AI builds a personalized routine tailored to your level and equipment.",
  },
  {
    icon: Dumbbell,
    label: "Learn",
    title: "Workout Tutorials",
    description: "Step-by-step video guidance on every exercise. Master proper technique from day one.",
  },
  {
    icon: Flame,
    label: "Track",
    title: "Calorie Tracking",
    description: "Automatically track calories burned per session. Know your energy output precisely.",
  },
  {
    icon: BarChart3,
    label: "Grow",
    title: "Progress Analytics",
    description: "Visualize your journey. Workouts, streaks, personal records - all in one dashboard.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-32 lg:py-40 bg-secondary relative">
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
            Features
          </span>
        </motion.div>

        {/* Main headline */}
        <div className="max-w-4xl mb-16 lg:mb-24">
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] mb-8 font-display"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Your AI training partner.
            <br />
            <span className="text-gradient">Always ready.</span>
          </motion.h2>

          <motion.p
            className="text-xl text-muted-foreground max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Everything you need to train with confidence, all in one app.
          </motion.p>
        </div>

        {/* Featured - Top two large cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-6 lg:mb-8">
          {features.slice(0, 2).map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group relative p-10 lg:p-12 rounded-3xl bg-muted border border-border hover:border-primary/30 transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + index * 0.08 }}
              whileHover={{ y: -4 }}
            >
              {/* Subtle hover glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-10">
                  <span className="text-xs font-semibold text-primary uppercase tracking-[0.15em]">
                    {feature.label}
                  </span>
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-all duration-300">
                    <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                </div>

                <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-display">
                  {feature.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed text-lg max-w-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom three smaller cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {features.slice(2).map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group relative p-8 lg:p-10 rounded-3xl bg-muted border border-border hover:border-primary/30 transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.08 }}
              whileHover={{ y: -4 }}
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <span className="text-xs font-semibold text-primary uppercase tracking-[0.15em]">
                  {feature.label}
                </span>

                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mt-5 mb-6 group-hover:bg-primary transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 font-display">
                  {feature.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
