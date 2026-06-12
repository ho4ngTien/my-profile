import { useState } from 'react'
import { motion } from 'framer-motion'
import { Copy, Mail, MessageSquareText, Send } from 'lucide-react'

const contactLinks = [
  { label: 'Email', value: 'maichilanoob@gmail.com', href: 'mailto:maichilanoob@gmail.com', icon: Mail },
  { label: 'GitHub', value: 'github.com/ho4ngTien', href: 'https://github.com/ho4ngTien', icon: GitHubMark },
  { label: 'LinkedIn', value: 'Hoàng Tiến', href: 'https://linkedin.com', icon: LinkedInMark },
]

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
}

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
}

function GitHubMark() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.48v-1.67c-2.78.62-3.36-1.39-3.36-1.39-.46-1.2-1.11-1.52-1.11-1.52-.91-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.64-1.38-2.22-.26-4.55-1.15-4.55-5.11 0-1.13.39-2.06 1.03-2.79-.1-.26-.45-1.32.1-2.75 0 0 .84-.28 2.75 1.06A9.22 9.22 0 0 1 12 6.87c.85 0 1.71.12 2.5.35 1.9-1.34 2.74-1.06 2.74-1.06.56 1.43.21 2.49.1 2.75.64.73 1.03 1.66 1.03 2.79 0 3.97-2.34 4.85-4.57 5.1.36.32.68.93.68 1.88v2.78c0 .27.18.59.69.49A10.03 10.03 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
    </svg>
  )
}

function LinkedInMark() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  )
}

export function Contact() {
  const [copied, setCopied] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = String(formData.get('name') ?? '').trim()
    const email = String(formData.get('email') ?? '').trim()
    const message = String(formData.get('message') ?? '').trim()

    const subject = encodeURIComponent(`Portfolio inquiry from ${name || 'a visitor'}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)

    window.location.href = `mailto:maichilanoob@gmail.com?subject=${subject}&body=${body}`
  }

  const handleCopy = async () => {
    await navigator.clipboard.writeText('maichilanoob@gmail.com')
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <motion.section id="contact" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, ease: 'easeOut' }} className="border-t border-[var(--border)] bg-[rgba(15,23,42,0.72)]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.32em] text-[var(--accent)]">Contact</p>
          <h2 className="mt-4 text-[clamp(2.25rem,5vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-white">Open for internships, freelance builds, and collaboration</h2>
          <p className="mt-5 text-lg leading-8 text-[var(--muted)]">If you want to talk about a project, internship, or front-end implementation, here are the fastest ways to reach me.</p>
        </div>

        <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div variants={item} className="space-y-4">
            {contactLinks.map((link) => {
              const Icon = link.icon

              return (
                <a key={link.label} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noreferrer' : undefined} className="group flex items-center gap-4 rounded-[1.6rem] border border-[var(--border)] bg-[rgba(30,41,59,0.55)] p-4 shadow-[0_20px_50px_rgba(15,23,42,0.14)] backdrop-blur-xl transition hover:border-[var(--accent)]/30 hover:bg-[var(--accent)]/10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--border)] bg-white/5 text-[var(--accent)] transition group-hover:bg-[var(--accent)] group-hover:text-slate-950">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">{link.label}</p>
                    <p className="mt-2 truncate text-lg font-semibold text-white">{link.value}</p>
                  </div>
                </a>
              )
            })}

            <div className="rounded-[1.6rem] border border-[var(--border)] bg-[linear-gradient(135deg,rgba(34,211,238,0.12),rgba(15,23,42,0.5))] p-5 shadow-[0_20px_50px_rgba(15,23,42,0.14)] backdrop-blur-xl">
              <p className="text-sm leading-7 text-white">I usually reply quickly with context, scope, and the next step. If you already have a brief or wireframe, send it over.</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <button type="button" onClick={handleCopy} className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-[var(--accent)]/40 hover:bg-white/10">
                  <Copy className="h-4 w-4" />
                  {copied ? 'Copied email' : 'Copy email'}
                </button>
                <a href="#hero" className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-[var(--accent-hover)]">
                  Back to top
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div variants={item} className="rounded-[2rem] border border-[var(--border)] bg-[rgba(30,41,59,0.55)] p-6 shadow-[0_20px_50px_rgba(15,23,42,0.18)] backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <MessageSquareText className="h-5 w-5 text-[var(--accent)]" />
              <h3 className="text-2xl font-semibold text-white">Send a message</h3>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2 text-sm text-[var(--muted)]">
                  <span>Name</span>
                  <input name="name" type="text" placeholder="Your name" className="w-full rounded-2xl border border-[var(--border)] bg-[rgba(15,23,42,0.65)] px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-[var(--accent)]/50 focus:ring-2 focus:ring-[var(--accent)]/20" />
                </label>
                <label className="space-y-2 text-sm text-[var(--muted)]">
                  <span>Email</span>
                  <input name="email" type="email" placeholder="you@example.com" className="w-full rounded-2xl border border-[var(--border)] bg-[rgba(15,23,42,0.65)] px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-[var(--accent)]/50 focus:ring-2 focus:ring-[var(--accent)]/20" />
                </label>
              </div>

              <label className="block space-y-2 text-sm text-[var(--muted)]">
                <span>Message</span>
                <textarea name="message" rows={6} placeholder="Tell me about the role, project, or timeline..." className="w-full resize-none rounded-2xl border border-[var(--border)] bg-[rgba(15,23,42,0.65)] px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-[var(--accent)]/50 focus:ring-2 focus:ring-[var(--accent)]/20" />
              </label>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[var(--accent-hover)]">
                  <Send className="h-4 w-4" />
                  Send via email
                </button>
                <p className="text-sm text-[var(--muted)]">Or email me directly at maichilanoob@gmail.com</p>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}