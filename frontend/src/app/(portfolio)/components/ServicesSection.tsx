import { services } from '../data'
import { SectionHeading } from './SectionHeading'

export function ServicesSection() {
  return (
    <section id="services" className="border-t border-white/5 bg-white/[0.03] px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Services"
          title="Dịch vụ"
          description="Một lưới card 2x2 như mẫu, nhưng nội dung được chỉnh để khớp với hướng nghề nghiệp của bạn."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((item, index) => (
            <div key={item.title} className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-7">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10 text-xl font-semibold text-red-200">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-400">Focused deliverables</p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-7 text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}