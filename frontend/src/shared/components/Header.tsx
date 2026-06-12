export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-[var(--border)] bg-[rgba(15,23,42,0.82)] backdrop-blur-xl xl:hidden">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <div>
          <p className="text-[0.7rem] uppercase tracking-[0.36em] text-[var(--accent)]">Portfolio</p>
          <h1 className="mt-1 text-[clamp(1rem,2vw,1.15rem)] font-semibold tracking-tight text-[var(--text)]">Hoàng Tiến</h1>
        </div>
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-white/5 px-4 py-2 text-sm font-medium text-[var(--text)] transition hover:border-[var(--accent)]/40 hover:bg-[var(--accent)]/10 hover:text-white"
        >
          Let&apos;s talk
        </a>
      </div>
    </header>
  )
}

