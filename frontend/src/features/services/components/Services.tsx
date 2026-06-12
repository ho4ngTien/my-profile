import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { services } from '../../../shared/constants/portfolio'

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
}

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
}

export function Services() {
  return (
    <motion.section id="services" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, ease: 'easeOut' }} className="border-t border-[var(--border)] bg-[rgba(15,23,42,0.62)]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.32em] text-[var(--accent)]">Services</p>
          <h2 className="mt-4 text-[clamp(2.25rem,5vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-white">Services that support product pages, portfolios, and client work</h2>
          <p className="mt-5 text-lg leading-8 text-[var(--muted)]">The page stays lightweight while still presenting a credible range of work styles: landing pages, UI systems, and polished implementation support.</p>
        </div>

        <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.article key={service.title} variants={item} whileHover={{ y: -6 }} className="rounded-[2rem] border border-[var(--border)] bg-[linear-gradient(180deg,rgba(30,41,59,0.68),rgba(15,23,42,0.74))] p-6 shadow-[0_20px_50px_rgba(15,23,42,0.18)] backdrop-blur-xl">
              <div className="flex items-start justify-between gap-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--border)] bg-white/5 text-sm font-semibold text-[var(--accent)]">{String(index + 1).padStart(2, '0')}</div>
                <Sparkles className="h-5 w-5 text-[var(--accent)]" />
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-white">{service.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{service.description}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--accent)]">
                Explore detail
                <ArrowRight className="h-4 w-4" />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}