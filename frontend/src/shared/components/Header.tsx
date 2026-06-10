export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/90 backdrop-blur-md xl:hidden">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <div>
          <p className="text-[11px] uppercase tracking-[0.32em] text-red-400">Portfolio</p>
          <h1 className="mt-1 text-lg font-semibold tracking-tight text-white">Hoàng Tiến</h1>
        </div>
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-red-400/30 hover:bg-red-500/10 hover:text-white"
        >
          Contact
        </a>
      </div>
    </header>
  )
}

