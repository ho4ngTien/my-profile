export function Header() {
  return (
    <header className="border-b border-slate-700 bg-slate-950/90 backdrop-blur-md sticky top-0 z-30 xl:hidden">
      <nav className="max-w-full mx-auto px-4 sm:px-6 py-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-xl font-bold text-white">Hoàng Tiến</div>
        <ul className="flex flex-wrap gap-3 text-slate-300 items-center text-sm overflow-x-auto">
          <li>
            <a href="#hero" className="hover:text-white transition whitespace-nowrap">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-white transition whitespace-nowrap">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-white transition whitespace-nowrap">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-white transition whitespace-nowrap">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-white transition whitespace-nowrap">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

