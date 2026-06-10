import { skillGroups, technologies } from '../data'
import { BadgeGrid } from './BadgeGrid'
import { SectionHeading } from './SectionHeading'

export function SkillsSection() {
  return (
    <section id="skills" className="border-t border-white/5 px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skills"
          title="Kỹ năng"
          description="Bố cục được đẩy lên theo phong cách template: một cột nội dung chính, một cột nhấn mạnh thông tin và chứng chỉ."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.6fr_0.8fr]">
          <div className="space-y-6">
            {skillGroups.map((group) => (
              <div key={group.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-7">
                <div className="flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{group.title}</h3>
                    <p className="mt-2 text-sm text-slate-300">{group.subtitle}</p>
                  </div>
                  <span className="text-xs uppercase tracking-[0.26em] text-slate-500">Proficiency</span>
                </div>

                <div className="mt-6 space-y-5">
                  {group.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium text-slate-200">{skill.name}</span>
                        <span className="text-slate-400">{skill.value}%</span>
                      </div>
                      <div className="mt-2 h-2 rounded-full bg-white/10">
                        <div className="h-2 rounded-full bg-gradient-to-r from-red-500 via-rose-500 to-orange-400" style={{ width: `${skill.value}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(56,189,248,0.12),rgba(255,255,255,0.03))] p-7">
              <p className="text-xs uppercase tracking-[0.28em] text-red-300">Years of Experience</p>
              <div className="mt-4 flex items-end gap-3">
                <span className="text-6xl font-black text-white">8</span>
                <span className="pb-1 text-sm text-slate-300">Years</span>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-300">Dedicated to polished interfaces, fast iteration and practical problem solving.</p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7">
              <h4 className="text-lg font-semibold text-white">Primary Technologies</h4>
              <div className="mt-5">
                <BadgeGrid items={technologies} />
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7">
              <h4 className="text-lg font-semibold text-white">Recent Achievements</h4>
              <div className="mt-5 space-y-4 text-sm text-slate-300">
                <div className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-red-300" />Built a reusable portfolio architecture</div>
                <div className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-red-300" />Developed several full-stack academic projects</div>
                <div className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-red-300" />Kept interfaces responsive across form factors</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}