import { useEffect, useState } from 'react'

const menuItems = [
  { label: 'Home', href: '#hero', icon: '⌂' },
  { label: 'About', href: '#about', icon: '◌' },
  { label: 'Stats', href: '#stats', icon: '✦' },
  { label: 'Skills', href: '#skills', icon: '▣' },
  { label: 'Resume', href: '#resume', icon: '▭' },
  { label: 'Portfolio', href: '#portfolio', icon: '◫' },
  { label: 'Services', href: '#services', icon: '⚙' },
  { label: 'Testimonials', href: '#testimonials', icon: '❝' },
  { label: 'Contact', href: '#contact', icon: '✉' },
]

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/ho4ngTien', value: 'GH' },
  { label: 'LinkedIn', href: 'https://linkedin.com', value: 'in' },
  { label: 'Instagram', href: 'https://instagram.com', value: 'IG' },
  { label: 'X', href: 'https://x.com', value: 'X' },
]

export function Sidebar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)

  useEffect(() => {
    document.documentElement.style.setProperty('--sidebar-width', isCollapsed ? '5rem' : '16rem')

    return () => {
      document.documentElement.style.setProperty('--sidebar-width', '16rem')
    }
  }, [isCollapsed])

  const sidebarWidthClass = isCollapsed ? 'w-20 px-3' : 'w-64 px-4'

  return (
    <>
      <button
        type="button"
        onClick={() => setIsMobileOpen((value) => !value)}
        className="fixed right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-950/95 text-white shadow-2xl shadow-black/30 backdrop-blur xl:hidden"
        aria-label="Toggle navigation"
      >
        <span className="text-base">☰</span>
      </button>

      {isMobileOpen && (
        <button
          type="button"
          aria-label="Close navigation overlay"
          className="fixed inset-0 z-30 bg-black/60 xl:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-40 flex flex-col justify-between border-r border-white/10 bg-[linear-gradient(180deg,#050505_0%,#0a0708_55%,#050505_100%)] py-5 text-white shadow-[0_0_80px_rgba(0,0,0,0.9)] backdrop-blur-xl transition-[width,transform,padding] duration-300 ${sidebarWidthClass} ${isMobileOpen ? 'translate-x-0' : '-translate-x-full xl:translate-x-0'}`}
      >
        <div className="mb-3 flex items-center justify-end">
          <button
            type="button"
            onClick={() => setIsCollapsed((value) => !value)}
            className="hidden h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm text-slate-200 transition hover:border-red-400/30 hover:bg-red-500/10 hover:text-red-200 xl:flex"
            aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {isCollapsed ? '›' : '‹'}
          </button>
        </div>

        <div className="space-y-6">
          <div className={`space-y-4 text-center ${isCollapsed ? 'xl:text-center' : ''}`}>
            <div className={`mx-auto flex items-center justify-center rounded-[1.6rem] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(239,68,68,0.35),_rgba(15,23,42,0.12)_55%),linear-gradient(145deg,_rgba(255,255,255,0.14),_rgba(15,23,42,0.8))] p-1.5 shadow-2xl shadow-red-500/10 ${isCollapsed ? 'h-14 w-14' : 'h-24 w-24'}`}>
              <div className={`flex h-full w-full items-center justify-center rounded-[1.25rem] border border-white/10 bg-slate-900/75 font-bold tracking-[0.18em] text-red-300 ${isCollapsed ? 'text-sm' : 'text-2xl'}`}>
                HT
              </div>
            </div>

            {!isCollapsed && (
              <div>
                <a href="#hero" className="text-xl font-semibold tracking-tight text-white transition hover:text-red-300">
                  Hoàng Tiến
                </a>
                <p className="mt-1.5 text-xs text-slate-400">Full-stack Developer · UI-minded builder</p>
              </div>
            )}
          </div>

          <nav id="navmenu" className="navmenu">
            <ul className={`space-y-1 text-sm ${isCollapsed ? 'xl:flex xl:flex-col xl:items-center' : ''}`}>
              {menuItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setIsMobileOpen(false)}
                    className={`group flex items-center rounded-2xl border border-transparent py-2.5 text-slate-300 transition hover:border-white/10 hover:bg-white/5 hover:text-white ${isCollapsed ? 'justify-center gap-0 px-0 xl:w-11' : 'gap-2.5 px-3'}`}
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-xs text-slate-200 transition group-hover:border-red-400/20 group-hover:bg-red-500/10 group-hover:text-red-200">
                      {item.icon}
                    </span>
                    {!isCollapsed && <span className="font-medium">{item.label}</span>}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="space-y-4 pt-4">
          <div className={`items-center justify-center gap-2 ${isCollapsed ? 'hidden xl:flex' : 'flex'}`}>
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[10px] font-semibold text-slate-200 transition hover:border-red-400/30 hover:bg-red-500/10 hover:text-red-200"
                aria-label={link.label}
              >
                {link.value}
              </a>
            ))}
          </div>

          {!isCollapsed && (
            <p className="border-t border-white/10 pt-4 text-center text-[11px] leading-5 text-slate-500">
              Crafted with React, TypeScript and Tailwind.
            </p>
          )}
        </div>
      </aside>
    </>
  )
}
