import { BadgeGrid } from './BadgeGrid'
import { SectionHeading } from './SectionHeading'

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-white/5 bg-white/[0.03] px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Contact"
          title="Liên hệ"
          description="Khung cuối cùng giữ tinh thần template với phần thông tin liên lạc rõ ràng và form giả lập sạch sẽ."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            {[
              ['Email', 'maichilanoob@gmail.com'],
              ['GitHub', 'github.com/ho4ngTien'],
              ['Location', 'Ho Chi Minh City, Vietnam'],
            ].map(([label, value]) => (
              <div key={label} className="rounded-[1.6rem] border border-white/10 bg-slate-950/80 p-6">
                <p className="text-xs uppercase tracking-[0.26em] text-red-300">{label}</p>
                <p className="mt-3 text-lg font-medium text-white">{value}</p>
              </div>
            ))}

            <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6">
              <p className="text-sm leading-7 text-slate-300">
                Bạn có thể dùng phần này để bắt đầu một dự án, hỏi thêm về kỹ năng hoặc trao đổi cơ hội thực tập / cộng tác.
              </p>
              <div className="mt-5">
                <BadgeGrid items={['X', 'f', 'ig', 'in']} />
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8">
            <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
              <h3 className="text-2xl font-semibold text-white">Send a message</h3>
              <span className="text-xs uppercase tracking-[0.26em] text-slate-500">Open for work</span>
            </div>

            <form className="mt-7 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="space-y-2 text-sm text-slate-300">
                  <span>Full Name</span>
                  <input className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-red-400/40 focus:bg-white/8" placeholder="Your name" />
                </label>
                <label className="space-y-2 text-sm text-slate-300">
                  <span>Email Address</span>
                  <input className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-red-400/40 focus:bg-white/8" placeholder="you@example.com" />
                </label>
              </div>

              <label className="space-y-2 text-sm text-slate-300">
                <span>Subject</span>
                <input className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-red-400/40 focus:bg-white/8" placeholder="Project discussion" />
              </label>

              <label className="space-y-2 text-sm text-slate-300">
                <span>Message</span>
                <textarea rows={6} className="w-full rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-red-400/40 focus:bg-white/8" placeholder="Tell me about your project..." />
              </label>

              <button type="button" className="inline-flex items-center gap-2 rounded-full bg-red-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-red-400">
                Send Message
                <span>→</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}