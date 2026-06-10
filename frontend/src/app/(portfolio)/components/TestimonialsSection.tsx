import { testimonials } from '../data'
import { SectionHeading } from './SectionHeading'

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="border-t border-white/5 px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Testimonials"
          title="Phản hồi"
          description="Các thẻ lời chứng thực tạo thêm chiều sâu thị giác, giống phần testimonial trong template tham chiếu."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <blockquote key={item.name} className="rounded-[2rem] border border-white/10 bg-white/5 p-7">
              <div className="flex items-center justify-between">
                <div className="flex gap-1 text-red-300">★★★★★</div>
                <div className="text-3xl leading-none text-white/30">❝</div>
              </div>
              <p className="mt-6 text-sm leading-8 text-slate-300">{item.quote}</p>
              <footer className="mt-8 border-t border-white/10 pt-5">
                <p className="font-semibold text-white">{item.name}</p>
                <p className="mt-1 text-sm text-slate-400">{item.role} · {item.company}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}