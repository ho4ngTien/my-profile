import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, BriefcaseBusiness, Mail, Menu, X } from 'lucide-react'
import { navigationItems } from '../constants'

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/ho4ngTien', icon: GitHubMark },
  { label: 'Email', href: 'mailto:maichilanoob@gmail.com', icon: Mail },
  { label: 'Portfolio', href: '#hero', icon: ArrowUpRight },
]

function GitHubMark() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.48v-1.67c-2.78.62-3.36-1.39-3.36-1.39-.46-1.2-1.11-1.52-1.11-1.52-.91-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.64-1.38-2.22-.26-4.55-1.15-4.55-5.11 0-1.13.39-2.06 1.03-2.79-.1-.26-.45-1.32.1-2.75 0 0 .84-.28 2.75 1.06A9.22 9.22 0 0 1 12 6.87c.85 0 1.71.12 2.5.35 1.9-1.34 2.74-1.06 2.74-1.06.56 1.43.21 2.49.1 2.75.64.73 1.03 1.66 1.03 2.79 0 3.97-2.34 4.85-4.57 5.1.36.32.68.93.68 1.88v2.78c0 .27.18.59.69.49A10.03 10.03 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
    </svg>
  )
}

const navVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { staggerChildren: 0.06 } },
}

const itemVariants = {
  hidden: { opacity: 0, x: -8 },
  visible: { opacity: 1, x: 0 },
}

export function Sidebar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [activeId, setActiveId] = useState('hero')

  useEffect(() => {
    const sections = navigationItems
      .map((navItem: (typeof navigationItems)[number]) => document.getElementById(navItem.href.slice(1)))
      .filter((section): section is HTMLElement => Boolean(section))

    if (sections.length === 0) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0]

        if (visibleEntry?.target.id) {
          setActiveId(visibleEntry.target.id)
        }
      },
      { rootMargin: '-35% 0px -45% 0px', threshold: [0.1, 0.3, 0.5, 0.7] },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : ''

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileOpen(false)
      }
    }

    window.addEventListener('keydown', handleEscape)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleEscape)
    }
  }, [isMobileOpen])

  return (
    <>
      <button
        type="button"
        onClick={() => setIsMobileOpen((value) => !value)}
        className="fixed left-4 top-4 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] bg-[rgba(15,23,42,0.92)] text-[var(--text)] shadow-2xl shadow-black/35 backdrop-blur-xl xl:hidden"
        aria-label="Toggle navigation"
      >
        <Menu className="h-5 w-5" />
      </button>

      <AnimatePresence>
        {isMobileOpen ? (
          <>
            <button
              type="button"
              aria-label="Close navigation overlay"
              className="fixed inset-0 z-30 bg-black/60 backdrop-blur-[2px] xl:hidden"
              onClick={() => setIsMobileOpen(false)}
            />

            <motion.aside
              initial={{ x: -24, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -24, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 28 }}
              className="fixed inset-y-0 left-0 z-40 flex w-[min(88vw,18rem)] flex-col justify-between border-r border-[var(--border)] bg-[linear-gradient(180deg,rgba(15,23,42,0.98),rgba(30,41,59,0.96))] px-5 py-6 text-[var(--text)] shadow-[0_30px_90px_rgba(15,23,42,0.45)] backdrop-blur-2xl xl:w-[var(--sidebar-width)]"
            >
              <div className="space-y-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white/5 px-3 py-1 text-[0.7rem] uppercase tracking-[0.3em] text-[var(--muted)]">
                      <BriefcaseBusiness className="h-3.5 w-3.5 text-[var(--accent)]" />
                      Available
                    </div>
                    <a href="#hero" className="mt-4 block text-2xl font-semibold tracking-tight text-white">
                      Hoàng Tiến
                    </a>
                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">Frontend builder crafting premium, recruiter-friendly portfolio experiences.</p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsMobileOpen(false)}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-white/5 text-[var(--text)] transition hover:border-[var(--accent)]/40 hover:bg-[var(--accent)]/10 xl:hidden"
                    aria-label="Close navigation"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <motion.nav initial="hidden" animate="visible" variants={navVariants} className="space-y-2">
                  {navigationItems.map((item) => {
                    const isActive = activeId === item.href.slice(1)

                    return (
                      <motion.a
                        key={item.label}
                        href={item.href}
                        variants={itemVariants}
                        onClick={() => setIsMobileOpen(false)}
                        className={`group flex items-center justify-between rounded-2xl border px-4 py-3 text-sm transition ${isActive ? 'border-[var(--accent)]/40 bg-[var(--accent)]/10 text-white shadow-[0_10px_24px_rgba(34,211,238,0.08)]' : 'border-transparent bg-white/[0.03] text-[var(--muted)] hover:border-[var(--border)] hover:bg-white/[0.05] hover:text-white'}`}
                      >
                        <span className="font-medium">{item.label}</span>
                        <ArrowUpRight className="h-4 w-4 opacity-60 transition group-hover:opacity-100" />
                      </motion.a>
                    )
                  })}
                </motion.nav>
              </div>

              <div className="space-y-5 pt-6">
                <div className="grid grid-cols-3 gap-3">
                  {socialLinks.map((link) => {
                    const Icon = link.icon

                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                        className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-[var(--border)] bg-white/5 px-3 py-4 text-xs font-medium text-[var(--muted)] transition hover:border-[var(--accent)]/40 hover:bg-[var(--accent)]/10 hover:text-white"
                        aria-label={link.label}
                      >
                        <Icon className="h-4 w-4" />
                        {link.label}
                      </a>
                    )
                  })}
                </div>

                <p className="rounded-2xl border border-[var(--border)] bg-white/[0.03] px-4 py-4 text-xs leading-6 text-[var(--muted)]">
                  Open to internship opportunities, freelance builds, and product-focused front-end collaboration.
                </p>
              </div>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>

      <aside className="fixed inset-y-0 left-0 z-40 hidden w-[var(--sidebar-width)] flex-col justify-between border-r border-[var(--border)] bg-[linear-gradient(180deg,rgba(15,23,42,0.96),rgba(30,41,59,0.92))] px-6 py-7 text-[var(--text)] shadow-[0_24px_80px_rgba(15,23,42,0.4)] backdrop-blur-2xl xl:flex">
        <div className="space-y-7">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white/5 px-3 py-1 text-[0.7rem] uppercase tracking-[0.3em] text-[var(--muted)]">
              <BriefcaseBusiness className="h-3.5 w-3.5 text-[var(--accent)]" />
              Available
            </div>
            <a href="#hero" className="mt-5 block text-[1.6rem] font-semibold tracking-tight text-white transition hover:text-[var(--accent)]">
              Hoàng Tiến
            </a>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">Frontend builder crafting premium, recruiter-friendly portfolio experiences.</p>
          </div>

          <nav aria-label="Primary navigation" className="space-y-2">
            {navigationItems.map((item) => {
              const isActive = activeId === item.href.slice(1)

              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`group flex items-center justify-between rounded-2xl border px-4 py-3 text-sm transition ${isActive ? 'border-[var(--accent)]/40 bg-[var(--accent)]/10 text-white shadow-[0_10px_24px_rgba(34,211,238,0.08)]' : 'border-transparent bg-white/[0.03] text-[var(--muted)] hover:border-[var(--border)] hover:bg-white/[0.05] hover:text-white'}`}
                >
                  <span className="font-medium">{item.label}</span>
                  <ArrowUpRight className="h-4 w-4 opacity-60 transition group-hover:opacity-100" />
                </a>
              )
            })}
          </nav>
        </div>

        <div className="space-y-5 pt-6">
          <div className="grid grid-cols-3 gap-3">
            {socialLinks.map((link) => {
              const Icon = link.icon

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-[var(--border)] bg-white/5 px-3 py-4 text-xs font-medium text-[var(--muted)] transition hover:border-[var(--accent)]/40 hover:bg-[var(--accent)]/10 hover:text-white"
                  aria-label={link.label}
                >
                  <Icon className="h-4 w-4" />
                  {link.label}
                </a>
              )
            })}
          </div>

          <p className="rounded-2xl border border-[var(--border)] bg-white/[0.03] px-4 py-4 text-xs leading-6 text-[var(--muted)]">
            Open to internship opportunities, freelance builds, and product-focused front-end collaboration.
          </p>
        </div>
      </aside>
    </>
  )
}
