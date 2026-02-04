"use client"

import { motion } from "framer-motion"
import { Camera, Dumbbell, Flame, BarChart3, Brain } from "lucide-react"

const features = [
  {
    icon: Camera,
    label: "Core Feature",
    title: "Equipment Scanner",
    description: "Point your camera at any gym equipment. Our AI identifies it instantly and shows you exactly how to use it with proper form.",
  },
  {
    icon: Dumbbell,
    label: "Learn",
    title: "Workout Tutorials",
    description: "Access beginner-friendly video tutorials with step-by-step guidance. Learn proper technique and avoid common mistakes.",
  },
  {
    icon: Brain,
    label: "AI-Powered",
    title: "Smart Workout Creator",
    description: "Tell us your goals and available equipment. Our AI builds personalized workout plans tailored just for you.",
  },
  {
    icon: Flame,
    label: "Track",
    title: "Calorie Tracking",
    description: "Automatically track calories burned during each workout. Monitor your daily energy expenditure with precision.",
  },
  {
    icon: BarChart3,
    label: "Measure",
    title: "Progress Analytics",
    description: "Visualize your fitness journey with detailed stats on workouts completed, calories burned, and personal records.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-32 lg:py-40 bg-secondary">
      <div className="container px-6 md:px-12 lg:px-20">
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
        <div className="max-w-4xl mb-24">
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
            FyyndFit bridges the gap between equipment and expertise.
            Everything you need to train with confidence.
          </motion.p>
        </div>

        {/* Features grid - Modern bento-style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className={`group relative p-8 lg:p-10 rounded-3xl bg-background border border-border hover:border-primary/30 transition-all duration-500 ${
                index === 0 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + index * 0.08 }}
              whileHover={{ y: -8 }}
            >
              {/* Subtle glow on hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Label */}
                <span className="text-xs font-semibold text-primary uppercase tracking-[0.15em]">
                  {feature.label}
                </span>

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center mt-6 mb-8 group-hover:bg-primary group-hover:glow-red-sm transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-foreground mb-4 font-display">
                  {feature.title}
                </h3>

                {/* Description */}
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
