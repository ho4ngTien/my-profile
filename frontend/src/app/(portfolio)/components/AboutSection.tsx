import { aboutCards } from '../data'
import { SectionHeading } from './SectionHeading'

export function AboutSection() {
  return (
    <section id="about" className="border-t border-white/5 px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About"
          title="Giới thiệu"
          description="Tôi là Hoàng Tiến, tập trung vào frontend hiện đại, tư duy hệ thống và các sản phẩm web có độ hoàn thiện cao."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[340px_1fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
            <div className="aspect-[4/5] rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(56,189,248,0.2),rgba(2,6,23,0.92))] p-4">
              <div className="flex h-full flex-col justify-between rounded-[1.2rem] border border-white/10 bg-black/15 p-5">
                <div>
                  <div className="h-24 w-24 rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.4),rgba(255,255,255,0.08))]" />
                  <p className="mt-5 text-xs uppercase tracking-[0.28em] text-slate-400">Ho Chi Minh City</p>
                  <p className="mt-2 text-lg font-semibold text-white">Available for projects</p>
                </div>
                <div className="text-sm leading-6 text-slate-300">
                  <p>Frontend focus</p>
                  <p>React · TypeScript · Tailwind</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {aboutCards.map((item) => (
                <div key={item.title} className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6">
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-8">
              <p className="text-lg leading-8 text-slate-200">
                Tôi thích xây dựng giao diện có nhịp điệu rõ ràng, màu sắc có chủ đích và cấu trúc đủ gọn để người xem nắm thông tin ngay lập tức.
                Thiết kế tốt với tôi là thiết kế giúp sản phẩm dễ dùng hơn, không chỉ đẹp hơn.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {[
                ['7+', 'Years learning and building'],
                ['10+', 'Projects and experiments'],
                ['100%', 'Focus on clarity and polish'],
              ].map(([value, label]) => (
                <div key={label} className="rounded-[1.4rem] border border-white/10 bg-white/5 p-5">
                  <p className="text-3xl font-bold text-white">{value}</p>
                  <p className="mt-2 text-sm text-slate-300">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}