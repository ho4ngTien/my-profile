import { projects } from '../data'
import { SectionHeading } from './SectionHeading'

export function PortfolioSection() {
  return (
    <section id="portfolio" className="border-t border-white/5 px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Portfolio"
          title="Dự án tiêu biểu"
          description="Các card giữ cảm giác giống mẫu: overlay, khối nội dung rõ ràng và nhấn mạnh từng dự án riêng lẻ."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((item) => (
            <article key={item.title} className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
              <div className="relative aspect-[16/10] bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.25),transparent_44%),linear-gradient(135deg,rgba(15,23,42,0.96),rgba(2,6,23,1))] p-6">
                <div className="flex h-full items-end justify-between">
                  <div className="max-w-[70%] rounded-[1.5rem] border border-white/10 bg-black/20 p-5 backdrop-blur-sm">
                    <p className="text-xs uppercase tracking-[0.3em] text-red-300">{item.category}</p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">{item.title}</h3>
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-slate-200">{item.year}</div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm leading-7 text-slate-300">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}