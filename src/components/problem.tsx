"use client"

import { motion } from "framer-motion"

const problems = [
  {
    number: "01",
    title: "Lost in the gym",
    description: "Machines you've never seen. Equipment you don't understand. Every session feels like starting over.",
  },
  {
    number: "02",
    title: "Generic programs fail",
    description: "Cookie-cutter workouts ignore your reality—your equipment, your space, your actual goals.",
  },
  {
    number: "03",
    title: "Form anxiety",
    description: "Bad form means wasted effort and injury risk. Without guidance, you're training blind.",
  },
]

export function Problem() {
  return (
    <section className="relative py-20 lg:py-40 overflow-hidden">
      {/* Gym Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop')`,
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/80" />

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
            The Problem
          </span>
        </motion.div>

        {/* Main headline */}
        <div className="max-w-4xl mb-20">
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-8 font-display"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Stop wasting time.
            <br />
            <span className="text-white/60">Start training smart.</span>
          </motion.h2>

          <motion.p
            className="text-xl text-white/70 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Most beginners leave gains on the table because they don&apos;t know
            how to use what&apos;s in front of them.
          </motion.p>
        </div>

        {/* Problem cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.number}
              className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-all duration-500"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Number badge */}
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                <span className="text-xl font-bold text-primary">{index + 1}</span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3 font-display">
                {problem.title}
              </h3>
              <p className="text-white/60 leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
