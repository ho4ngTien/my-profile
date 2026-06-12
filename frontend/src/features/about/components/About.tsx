import { motion } from 'framer-motion'
import { Award, GraduationCap, Sparkles } from 'lucide-react'
import { aboutCards, educationItems, experienceItems } from '../../../shared/constants/portfolio'

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
}

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
}

export function About() {
  return (
    <motion.section id="about" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, ease: 'easeOut' }} className="border-t border-[var(--border)] bg-[rgba(15,23,42,0.72)]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.32em] text-[var(--accent)]">About</p>
          <h2 className="mt-4 text-[clamp(2.25rem,5vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-white">A short story about how I build</h2>
          <p className="mt-5 text-lg leading-8 text-[var(--muted)]">I’m a computer science student focused on frontend craft, responsive interfaces, and clear product storytelling. The portfolio is designed to feel approachable while still looking polished and professional.</p>
        </div>

        <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mt-12 grid gap-6 lg:grid-cols-3">
          {aboutCards.map((card) => (
            <motion.article key={card.title} variants={item} whileHover={{ y: -6 }} className="rounded-[2rem] border border-[var(--border)] bg-[linear-gradient(180deg,rgba(30,41,59,0.68),rgba(15,23,42,0.78))] p-6 shadow-[0_20px_50px_rgba(15,23,42,0.16)] backdrop-blur-xl">
              <Sparkles className="h-5 w-5 text-[var(--accent)]" />
              <h3 className="mt-5 text-2xl font-semibold text-white">{card.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{card.description}</p>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.article variants={item} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="rounded-[2rem] border border-[var(--border)] bg-white/5 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.16)] backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <Award className="h-5 w-5 text-[var(--accent)]" />
              <h3 className="text-2xl font-semibold text-white">Experience snapshot</h3>
            </div>
            <div className="mt-6 space-y-4">
              {experienceItems.map((item) => (
                <div key={`${item.year}-${item.title}`} className="rounded-[1.35rem] border border-[var(--border)] bg-[rgba(15,23,42,0.65)] p-4">
                  <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">{item.year}</p>
                  <h4 className="mt-3 text-lg font-semibold text-white">{item.title}</h4>
                  <p className="mt-1 text-sm text-[var(--muted)]">{item.company}</p>
                  <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.article>

          <motion.article variants={item} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="rounded-[2rem] border border-[var(--border)] bg-[linear-gradient(180deg,rgba(34,211,238,0.08),rgba(15,23,42,0.76))] p-6 shadow-[0_20px_50px_rgba(15,23,42,0.16)] backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <GraduationCap className="h-5 w-5 text-[var(--accent)]" />
              <h3 className="text-2xl font-semibold text-white">Education</h3>
            </div>

            <div className="mt-6 space-y-4">
              {educationItems.map((item) => (
                <div key={`${item.year}-${item.degree}`} className="rounded-[1.35rem] border border-[var(--border)] bg-white/5 p-4">
                  {item.badge ? <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">{item.badge}</p> : null}
                  <h4 className="mt-3 text-lg font-semibold text-white">{item.degree}</h4>
                  <p className="mt-1 text-sm text-[var(--muted)]">{item.institution}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.25em] text-[var(--muted)]">{item.year}</p>
                  <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.article>
        </div>
      </div>
    </motion.section>
  )
}