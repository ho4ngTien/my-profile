import { motion } from 'framer-motion'
import { BadgeCheck, Layers3 } from 'lucide-react'
import { skillGroups, technologies } from '../../../shared/constants/portfolio'

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
}

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
}

export function Skills() {
  return (
    <motion.section id="skills" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, ease: 'easeOut' }} className="border-t border-[var(--border)] bg-[rgba(15,23,42,0.68)]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.32em] text-[var(--accent)]">Skills</p>
          <h2 className="mt-4 text-[clamp(2.25rem,5vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-white">A practical mix of frontend, architecture, and delivery skills</h2>
          <p className="mt-5 text-lg leading-8 text-[var(--muted)]">The portfolio focuses on capabilities that matter in real projects: component design, responsive delivery, and clean implementation.</p>
        </div>

        <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mt-12 grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <motion.article key={group.title} variants={item} whileHover={{ y: -6 }} className="rounded-[2rem] border border-[var(--border)] bg-[linear-gradient(180deg,rgba(30,41,59,0.68),rgba(15,23,42,0.78))] p-6 shadow-[0_20px_50px_rgba(15,23,42,0.16)] backdrop-blur-xl">
              <Layers3 className="h-5 w-5 text-[var(--accent)]" />
              <p className="mt-4 text-xs uppercase tracking-[0.3em] text-[var(--accent)]">{group.subtitle}</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">{group.title}</h3>

              <div className="mt-6 space-y-3">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="rounded-[1.2rem] border border-[var(--border)] bg-white/5 p-4 transition hover:border-[var(--accent)]/30 hover:bg-[var(--accent)]/10">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-sm font-medium text-white">{skill.name}</span>
                      <BadgeCheck className="h-4 w-4 text-[var(--accent)]" />
                    </div>
                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full rounded-full bg-[linear-gradient(90deg,var(--accent),var(--accent-hover))]" style={{ width: `${skill.value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-10 rounded-[2rem] border border-[var(--border)] bg-white/5 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.16)] backdrop-blur-xl">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">Technology badges</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {technologies.map((technology) => (
              <span key={technology} className="rounded-full border border-[var(--border)] bg-white/5 px-4 py-2 text-sm font-medium text-white">
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}