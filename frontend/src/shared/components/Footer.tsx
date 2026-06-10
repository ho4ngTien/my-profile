export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/90 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-center text-slate-400 sm:px-6 lg:flex-row lg:text-left">
        <p className="text-sm">&copy; 2026 Hoàng Tiến. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="https://github.com/ho4ngTien" target="_blank" rel="noreferrer" className="transition hover:text-red-300">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="transition hover:text-red-300">LinkedIn</a>
          <a href="#hero" className="transition hover:text-red-300">Back to top</a>
        </div>
      </div>
    </footer>
  )
}
