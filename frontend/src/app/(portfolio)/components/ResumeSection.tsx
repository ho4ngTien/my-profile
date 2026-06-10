import { certifications, educationItems, experienceItems } from '../data'
import { SectionHeading } from './SectionHeading'

export function ResumeSection() {
  return (
    <section id="resume" className="border-t border-white/5 bg-white/[0.03] px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Resume"
          title="Kinh nghiệm & học vấn"
          description="Tổ chức theo hai cột như template, nhưng nội dung phù hợp hồ sơ của bạn hơn là nội dung mẫu."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8">
            <h3 className="text-2xl font-semibold text-white">Professional Experience</h3>
            <div className="mt-8 space-y-8">
              {experienceItems.map((item) => (
                <div key={item.title} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
                  <p className="text-xs uppercase tracking-[0.28em] text-red-300">{item.year}</p>
                  <h4 className="mt-3 text-xl font-semibold text-white">{item.title}</h4>
                  <p className="mt-1 text-sm text-slate-400">{item.company}</p>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8">
            <h3 className="text-2xl font-semibold text-white">Education & Qualifications</h3>
            <div className="mt-8 space-y-6">
              {educationItems.map((item) => (
                <div key={item.degree} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
                  <p className="text-xs uppercase tracking-[0.28em] text-red-300">{item.year}</p>
                  <h4 className="mt-3 text-xl font-semibold text-white">{item.degree}</h4>
                  <p className="mt-1 text-sm text-slate-400">{item.institution}</p>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{item.description}</p>
                  {item.badge ? (
                    <div className="mt-4 inline-flex rounded-full border border-red-300/20 bg-red-500/10 px-3 py-1 text-xs font-medium text-red-200">
                      {item.badge}
                    </div>
                  ) : null}
                </div>
              ))}

              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
                <h4 className="text-lg font-semibold text-white">Professional Certifications</h4>
                <div className="mt-4 space-y-3">
                  {certifications.map((item) => (
                    <div key={item.name} className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-slate-300">
                      <p className="font-medium text-white">{item.name}</p>
                      <p className="mt-1 text-slate-400">{item.provider}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}