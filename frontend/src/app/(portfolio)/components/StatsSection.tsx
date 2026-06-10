import { achievementCards, statsCards } from '../data'
import { SectionHeading } from './SectionHeading'

export function StatsSection() {
  return (
    <section id="stats" className="border-t border-white/5 bg-white/[0.03] px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Stats"
          title="Một vài con số"
          description="Khối này giữ tinh thần của template gốc, nhưng được đổi theo nội dung portfolio cá nhân."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {statsCards.map((item) => (
            <div key={item.label} className="rounded-[1.8rem] border border-white/10 bg-slate-950/80 p-8 text-center">
              <p className="text-5xl font-black text-white">{item.value}</p>
              <p className="mt-4 text-sm uppercase tracking-[0.22em] text-slate-400">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {achievementCards.map((item) => (
            <div key={item.title} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}