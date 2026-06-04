const skillCategories = [
  {
    title: 'Backend Development',
    skills: ['Java', 'Spring Boot', 'Microservices', 'MySQL', 'RESTful APIs', 'Spring Data JPA', 'MVC Architecture'],
  },
  {
    title: 'Frontend Development',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'JavaScript (ES6+)', 'Responsive Web Design'],
  },
  {
    title: 'Công cụ & Quy trình',
    skills: ['Git & GitHub', 'Postman', 'Maven', 'ESLint', 'Command Line'],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="border-t border-slate-800 bg-slate-900 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.24em] text-sky-400">Skills</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">Kỹ năng chuyên môn</h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            Các công nghệ và công cụ tôi sử dụng thường xuyên trong việc xây dựng và phát triển phần mềm.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div key={category.title} className="rounded-3xl border border-slate-700 bg-slate-950/90 p-8 shadow-xl shadow-black/20 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight border-b border-slate-800 pb-3">{category.title}</h3>
                <div className="mt-6 flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <span key={skill} className="rounded-full bg-slate-900 border border-slate-800 px-3.5 py-1.5 text-sm font-semibold text-slate-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

