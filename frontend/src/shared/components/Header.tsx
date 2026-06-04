export function Header() {
  return (
    <header className="border-b border-slate-700 bg-slate-950/90 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="text-2xl font-bold text-white">Hoàng Tiến</div>
        <ul className="flex flex-wrap gap-4 text-slate-300 items-center">
          <li>
            <a href="#hero" className="hover:text-white transition">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-white transition">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-white transition">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-white transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

