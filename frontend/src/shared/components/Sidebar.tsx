import { useState } from 'react'

export function Sidebar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const toggleMobile = () => {
    setIsMobileOpen(!isMobileOpen)
  }

  const menuItems = [
    { label: 'Home', href: '#hero', icon: '🏠' },
    { label: 'About', href: '#about', icon: '👤' },
    { label: 'Skills', href: '#skills', icon: '⚡' },
    { label: 'Projects', href: '#projects', icon: '🖼️' },
    { label: 'Contact', href: '#contact', icon: '✉️' },
  ]

  const socialLinks = [
    { icon: '𝕏', href: '#', label: 'Twitter' },
    { icon: 'f', href: '#', label: 'Facebook' },
    { icon: '📷', href: '#', label: 'Instagram' },
    { icon: 'in', href: '#', label: 'LinkedIn' },
  ]

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={toggleMobile}
        className="fixed top-4 right-4 z-50 xl:hidden w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition"
      >
        ☰
      </button>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 xl:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed left-0 top-0 bottom-0 w-80 bg-slate-950 text-white p-6 overflow-y-auto
          transition-transform duration-300 ease-in-out z-40
          xl:translate-x-0
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full xl:translate-x-0'}
          border-r border-slate-700
        `}
      >
        {/* Profile Section */}
        <div className="mb-8 text-center">
          {/* Profile Image */}
          <div className="mb-6 flex justify-center">
            <img
              src="https://via.placeholder.com/120"
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-blue-600 object-cover"
            />
          </div>

          {/* Name */}
          <h1 className="text-2xl font-bold text-white mb-2">Hoàng Tiến</h1>
          <p className="text-slate-400">Developer & Designer</p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-3 mb-8">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="w-9 h-9 rounded-full bg-slate-800 text-slate-300 hover:bg-blue-600 hover:text-white flex items-center justify-center transition text-sm"
              title={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Navigation Menu */}
        <nav className="space-y-2 mb-8">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition group"
            >
              <span className="text-lg">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </a>
          ))}
        </nav>

        {/* Divider */}
        <div className="border-t border-slate-700 pt-6">
          <p className="text-xs text-slate-500 text-center">
            © 2024 Hoàng Tiến. All rights reserved.
          </p>
        </div>
      </aside>

      {/* Main Content Wrapper - Add margin-left on desktop */}
      <div className="xl:ml-80" />
    </>
  )
}
