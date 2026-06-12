import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Layers3, MonitorSmartphone } from 'lucide-react'
import { projects } from '../../../shared/constants/portfolio'

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
}

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
}

type ProjectFilter = 'All' | string
type Project = (typeof projects)[number]

function GitHubMark() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.48v-1.67c-2.78.62-3.36-1.39-3.36-1.39-.46-1.2-1.11-1.52-1.11-1.52-.91-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.64-1.38-2.22-.26-4.55-1.15-4.55-5.11 0-1.13.39-2.06 1.03-2.79-.1-.26-.45-1.32.1-2.75 0 0 .84-.28 2.75 1.06A9.22 9.22 0 0 1 12 6.87c.85 0 1.71.12 2.5.35 1.9-1.34 2.74-1.06 2.74-1.06.56 1.43.21 2.49.1 2.75.64.73 1.03 1.66 1.03 2.79 0 3.97-2.34 4.85-4.57 5.1.36.32.68.93.68 1.88v2.78c0 .27.18.59.69.49A10.03 10.03 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
    </svg>
  )
}

export function Projects() {
  const filters = useMemo<ProjectFilter[]>(() => ['All', ...new Set(projects.map((project: Project) => project.category))], [])
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('All')

  const filteredProjects = activeFilter === 'All' ? projects : projects.filter((project: Project) => project.category === activeFilter)

  return (
    <motion.section id="projects" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, ease: 'easeOut' }} className="border-t border-[var(--border)] bg-[rgba(15,23,42,0.5)]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.32em] text-[var(--accent)]">Projects</p>
          <h2 className="mt-4 text-[clamp(2.25rem,5vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-white">Selected projects that show range and polish</h2>
          <p className="mt-5 text-lg leading-8 text-[var(--muted)]">A filterable set of work that highlights frontend delivery, full-stack thinking, and presentation quality.</p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {filters.map((filter) => {
            const isActive = filter === activeFilter
            return (
              <button key={filter} type="button" onClick={() => setActiveFilter(filter)} className={`rounded-full border px-4 py-2 text-sm font-medium transition ${isActive ? 'border-[var(--accent)]/40 bg-[var(--accent)]/10 text-white' : 'border-[var(--border)] bg-white/5 text-[var(--muted)] hover:border-[var(--accent)]/30 hover:bg-white/10 hover:text-white'}`}>
                {filter}
              </button>
            )
          })}
        </div>

        <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mt-10 grid gap-6 lg:grid-cols-2">
          {filteredProjects.map((project: Project, index: number) => (
            <motion.article key={project.title} variants={item} whileHover={{ y: -8 }} transition={{ duration: 0.25 }} className="group overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[linear-gradient(180deg,rgba(30,41,59,0.7),rgba(15,23,42,0.82))] shadow-[0_20px_50px_rgba(15,23,42,0.18)] backdrop-blur-xl">
              <div className="relative aspect-[16/10] overflow-hidden border-b border-[var(--border)] bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_38%),linear-gradient(135deg,rgba(15,23,42,0.94),rgba(30,41,59,0.8))] p-5">
                <div className="absolute inset-x-0 top-0 flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/80" />
                </div>

                <div className="mt-10 grid h-full gap-4 sm:grid-cols-[1.15fr_0.85fr]">
                  <div className="rounded-[1.5rem] border border-[var(--border)] bg-[rgba(15,23,42,0.72)] p-4 shadow-[0_20px_40px_rgba(15,23,42,0.22)]">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">{project.category}</p>
                        <h3 className="mt-3 text-[clamp(1.4rem,2vw,2rem)] font-semibold leading-tight text-white">{project.title}</h3>
                      </div>
                      <span className="rounded-full border border-[var(--border)] bg-white/5 px-3 py-1 text-xs text-[var(--muted)]">{project.year}</span>
                    </div>

                    <div className="mt-6 space-y-3 rounded-[1.25rem] border border-[var(--border)] bg-white/5 p-4">
                      <div className="h-2.5 w-24 rounded-full bg-[var(--accent)]/25" />
                      <div className="h-2.5 w-3/4 rounded-full bg-white/10" />
                      <div className="h-2.5 w-2/3 rounded-full bg-white/10" />
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <div className="rounded-[1.5rem] border border-[var(--border)] bg-white/5 p-4">
                      <MonitorSmartphone className="h-5 w-5 text-[var(--accent)]" />
                      <p className="mt-4 text-sm leading-7 text-[var(--muted)]">Premium preview artwork that feels like a product screenshot without adding weight to the page.</p>
                    </div>
                    <div className="rounded-[1.5rem] border border-[var(--border)] bg-[rgba(34,211,238,0.08)] p-4">
                      <Layers3 className="h-5 w-5 text-[var(--accent)]" />
                      <p className="mt-4 text-sm leading-7 text-white">{index === 0 ? 'Live demo available on the current portfolio site.' : 'Selected for clarity, structure, and polished execution.'}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm leading-7 text-[var(--muted)]">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech?.map((tech) => (
                    <span key={tech} className="rounded-full border border-[var(--border)] bg-white/5 px-3 py-1.5 text-xs font-medium text-[var(--text)]">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-[var(--accent)]/40 hover:bg-[var(--accent)]/10">
                    <GitHubMark />
                    GitHub
                  </a>
                  {project.liveUrl ? (
                    <a href={project.liveUrl} className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-[var(--accent-hover)]">
                      Live Demo
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  ) : null}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}