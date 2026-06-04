const projects = [
  {
    title: 'Flood Rescue Coordination & Relief Management',
    type: 'Hệ thống Fullstack',
    description: 'Hệ thống quản lý, điều phối cứu hộ và phân phối cứu trợ thiên tai lũ lụt giúp kết nối tình nguyện viên và nạn nhân kịp thời.',
    tech: ['Java', 'HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/longtq2501/Flood-Rescue-Coordination-and-Relief-Management-System',
  },
  {
    title: 'Edu - Student Management System',
    type: 'Hệ thống Web / Fullstack',
    status: 'In Progress',
    description: 'Hệ thống quản lý thông tin trường học toàn diện tích hợp phân hệ LMS học tập trực tuyến, quản lý lớp học, giảng viên và điểm số.',
    tech: ['Java', 'Spring Boot', 'MySQL'],
    githubUrl: 'https://github.com/ho4ngTien/Edu',
  },
  {
    title: 'Personal Portfolio Landing Page',
    type: 'Ứng dụng Frontend',
    description: 'Trang landing page cá nhân hiện đại được thiết kế theo cấu trúc app-router/feature trực quan, tối ưu hóa responsive và hiệu năng.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    githubUrl: 'https://github.com/ho4ngTien/my-profile',
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="border-t border-slate-800 bg-slate-950/90 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.24em] text-sky-400">Projects</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">Dự án tiêu biểu</h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            Những sản phẩm thực tế tôi đã xây dựng và tham gia phát triển nhằm thể hiện tư duy thiết kế hệ thống và lập trình sạch.
          </p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="flex flex-col justify-between rounded-3xl border border-slate-700 bg-slate-900/90 p-6 shadow-xl shadow-black/20 hover:border-slate-500 transition duration-300">
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-sky-400">{project.type}</span>
                  {project.status && (
                    <span className="inline-flex items-center gap-1 rounded-md bg-amber-500/10 px-2 py-0.5 text-[10px] font-medium text-amber-500 border border-amber-500/20">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                      {project.status === 'In Progress' ? 'Đang phát triển' : project.status}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-white tracking-tight leading-snug min-h-[3.5rem]">{project.title}</h3>
                <p className="mt-3 text-sm text-slate-300 leading-relaxed">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="rounded-full bg-slate-800 px-2.5 py-0.5 text-xs font-medium text-sky-400 border border-slate-700/50">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800/80">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-sky-400 hover:text-sky-300 transition"
                >
                  Xem trên GitHub
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" stroke="D0 0" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

