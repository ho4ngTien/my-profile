export function HeroSection() {
  return (
    <section id="hero" className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_30%),linear-gradient(to_bottom,_#020617_0%,_#0f172a_100%)]">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center gap-10 px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.24em] text-sky-400">Hoàng Tiến · Web Developer Intern</p>
          <h1 className="mt-6 text-5xl font-bold tracking-tight text-white sm:text-6xl">
            Kiến tạo trải nghiệm Web hiện đại & hiệu quả.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Tôi là sinh viên ngành Công nghệ thông tin tại Đại học Giao thông vận tải TP.HCM. Định hướng phát triển ứng dụng Web toàn diện với thế mạnh về React, TypeScript và Java / Spring Boot (Microservices).
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-sky-500/30 transition hover:bg-sky-400">
            Liên hệ
          </a>
          <a href="#projects" className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900 px-6 py-3 text-base font-semibold text-white transition hover:border-slate-500">
            Xem dự án
          </a>
          <a href="#" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-6 py-3 text-base font-semibold text-white transition hover:border-slate-500">
            Tải CV
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  )
}
