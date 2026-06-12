import { motion } from 'framer-motion'
import { ArrowUpRight, Download, Sparkles } from 'lucide-react'
import { heroStats } from '../../../shared/constants/portfolio'

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
}

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden border-b border-[var(--border)] bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.22),transparent_34%),linear-gradient(180deg,rgba(2,6,23,0.98),rgba(15,23,42,0.98))]"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(34,211,238,0.08),transparent_35%,rgba(96,165,250,0.06))]" />

      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-4 py-28 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <motion.div variants={container} initial="hidden" animate="visible" className="max-w-3xl">
          <motion.p variants={item} className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
            <Sparkles className="h-3.5 w-3.5 text-[var(--accent)]" />
            Hoàng Tiến · Frontend Builder
          </motion.p>

          <motion.h1 variants={item} className="mt-6 text-[clamp(3rem,8vw,6.4rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-white">
            Premium portfolio experiences with a friendly, modern edge.
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
            I build clean, recruiter-friendly landing pages and product interfaces with React, TypeScript, Tailwind CSS, and Motion-first interactions.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-[var(--accent-hover)]">
              Let’s talk
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href="#projects" className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-[var(--accent)]/40 hover:bg-[var(--accent)]/10">
              View work
            </a>
            <a href="#resume" className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-[var(--accent)]/40 hover:bg-[var(--accent)]/10">
              Download CV
              <Download className="h-4 w-4" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div variants={container} initial="hidden" animate="visible" className="grid gap-4">
          {heroStats.map((stat) => (
            <motion.article
              key={stat.label}
              variants={item}
              whileHover={{ y: -6 }}
              className="rounded-[2rem] border border-[var(--border)] bg-[linear-gradient(180deg,rgba(30,41,59,0.7),rgba(15,23,42,0.78))] p-6 shadow-[0_20px_50px_rgba(15,23,42,0.16)] backdrop-blur-xl"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">{stat.label}</p>
              <div className="mt-4 flex items-end gap-3">
                <span className="text-5xl font-semibold tracking-tight text-white">{stat.value}</span>
                <span className="pb-1 text-sm text-[var(--muted)]">focus</span>
              </div>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{stat.description}</p>
            </motion.article>
          ))}

          <motion.div variants={item} className="rounded-[2rem] border border-[var(--border)] bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.14),rgba(15,23,42,0.7))] p-6 shadow-[0_20px_50px_rgba(15,23,42,0.16)] backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">Now building</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">A polished one-page portfolio with a fixed sidebar on desktop.</h2>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
              The goal is simple: make the story easy to scan, keep the interface premium, and ensure the layout stays responsive from mobile to widescreen.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}