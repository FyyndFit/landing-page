"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

const problems = [
  {
    number: "01",
    title: "Lost in the gym",
    description: "Machines you've never seen. Equipment you don't understand. Every session feels like starting over.",
  },
  {
    number: "02",
    title: "Generic programs fail",
    description: "Cookie-cutter workouts ignore your reality - your equipment, your space, your actual goals.",
  },
  {
    number: "03",
    title: "Form anxiety",
    description: "Bad form means wasted effort and injury risk. Without guidance, you're training blind.",
  },
]

export function Problem() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  // Smooth spring animations for parallax
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Parallax effects for different layers (creating depth)
  // Reduced movement ranges to prevent glitching
  const imageY = useTransform(smoothProgress, [0, 1], ["0%", "25%"])
  const imageScale = useTransform(smoothProgress, [0, 1], [1, 1.08])

  // Overlay parallax (moves slower than image)
  const overlayY = useTransform(smoothProgress, [0, 1], ["0%", "12%"])

  // Orbs parallax (moves even slower for depth)
  const orb1Y = useTransform(smoothProgress, [0, 1], ["0%", "8%"])
  const orb2Y = useTransform(smoothProgress, [0, 1], ["0%", "-8%"])

  return (
    <section ref={sectionRef} className="relative py-20 lg:py-40 overflow-hidden">
      {/* Background Image Container - Strong Parallax */}
      <motion.div
        className="absolute inset-0"
        style={{
          y: imageY,
          scale: imageScale,
          willChange: "transform",
          backfaceVisibility: "hidden"
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=75&w=1920&auto=format&fit=crop"
          alt="Gym equipment background"
          fill
          className="object-cover object-center grayscale"
          loading="lazy"
          quality={85}
          sizes="100vw"
          priority={false}
          style={{ filter: "grayscale(100%)" }}
        />
      </motion.div>

      {/* Base Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Gradient Overlays - Hero Style with Parallax */}
      <motion.div
        className="absolute inset-0"
        style={{
          y: overlayY,
          willChange: "transform",
          backfaceVisibility: "hidden"
        }}
      >
        {/* Primary gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary/10 to-transparent mix-blend-soft-light" />

        {/* Secondary gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/50" />

        {/* Radial gradient overlay */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] opacity-50" />
      </motion.div>

      {/* Texture/Grain Overlay */}
      <div
        className="absolute inset-0 opacity-[0.15] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "256px 256px",
        }}
      />

      {/* Vignette Effect */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/40"
        style={{
          background: "radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 100%)"
        }}
      />

      {/* Animated Gradient Orbs for Depth with Parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/15 rounded-full blur-[100px]"
          style={{
            y: orb1Y,
            willChange: "transform",
            backfaceVisibility: "hidden"
          }}
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[80px]"
          style={{
            y: orb2Y,
            willChange: "transform",
            backfaceVisibility: "hidden"
          }}
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

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
