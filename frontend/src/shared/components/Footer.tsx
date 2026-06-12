export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[rgba(15,23,42,0.9)] py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-center text-[var(--muted)] sm:px-6 lg:flex-row lg:text-left">
        <p className="text-sm">&copy; 2026 Hoàng Tiến. Crafted for recruiters, clients, and collaborators.</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="https://github.com/ho4ngTien" target="_blank" rel="noreferrer" className="transition hover:text-white">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="transition hover:text-white">LinkedIn</a>
          <a href="#hero" className="transition hover:text-white">Back to top</a>
        </div>
      </div>
    </footer>
  )
}
