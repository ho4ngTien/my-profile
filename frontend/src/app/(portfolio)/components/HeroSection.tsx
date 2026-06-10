import { heroStats } from '../data'

export function HeroSection() {
  return (
    <section id="hero" className="overflow-hidden px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.26em] text-red-400">Creative Designer &amp; Visual Storyteller</p>
          <h1 className="mt-5 font-[Raleway] text-5xl font-black leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Hoàng Tiến
            <span className="mt-2 block text-red-300">Portfolio</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300 sm:text-xl">
            Crafting meaningful digital experiences through thoughtful design, clean architecture and product-minded execution.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#portfolio" className="inline-flex items-center justify-center rounded-full bg-red-500 px-6 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-red-500/25 transition hover:bg-red-400">
              View My Work
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-base font-semibold text-white transition hover:border-red-400/30 hover:bg-red-500/10">
              Get In Touch
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {heroStats.map((item) => (
              <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <p className="text-3xl font-bold text-white">{item.value}</p>
                <p className="mt-2 text-sm text-slate-300">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -left-6 top-10 h-40 w-40 rounded-full bg-red-500/15 blur-3xl" />
          <div className="absolute -right-4 bottom-6 h-32 w-32 rounded-full bg-rose-500/10 blur-3xl" />

          <div className="relative rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(239,68,68,0.18),_transparent_42%),linear-gradient(180deg,_rgba(15,23,42,0.92),_rgba(2,6,23,0.98))] p-4 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
            <div className="overflow-hidden rounded-[1.7rem] border border-white/10 bg-slate-900/80 p-5">
              <div className="aspect-[4/5] rounded-[1.4rem] border border-white/10 bg-[linear-gradient(160deg,rgba(239,68,68,0.25),rgba(15,23,42,0.9)),radial-gradient(circle_at_top,rgba(244,114,182,0.2),transparent_38%)] p-5">
                <div className="flex h-full flex-col justify-between rounded-[1rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-300">
                    <span>Digital Portfolio</span>
                    <span>2026</span>
                  </div>
                  <div className="space-y-5">
                    <div className="inline-flex rounded-full border border-red-400/20 bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-200">
                      UI/UX Design
                    </div>
                    <div className="space-y-3">
                      <div className="h-3 w-4/5 rounded-full bg-white/20" />
                      <div className="h-3 w-3/5 rounded-full bg-white/15" />
                      <div className="h-3 w-2/3 rounded-full bg-white/15" />
                    </div>
                  </div>
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-sm text-slate-300">Selected focus</p>
                      <p className="mt-1 text-2xl font-semibold text-white">Product clarity</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-right text-xs text-slate-300">
                      <p className="text-white">React + TS</p>
                      <p className="mt-1">Responsive by design</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 -left-3 hidden rounded-2xl border border-white/10 bg-slate-950/95 px-4 py-3 shadow-2xl shadow-black/40 sm:flex sm:items-center sm:gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/15 text-red-300">UI</span>
                <div>
                  <p className="text-sm font-medium text-white">UI/UX Design</p>
                  <p className="text-xs text-slate-400">System-first visual language</p>
                </div>
              </div>

              <div className="absolute -right-2 top-8 hidden rounded-2xl border border-white/10 bg-slate-950/95 px-4 py-3 shadow-2xl shadow-black/40 sm:flex sm:items-center sm:gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500/15 text-rose-200">WD</span>
                <div>
                  <p className="text-sm font-medium text-white">Web Development</p>
                  <p className="text-xs text-slate-400">Fast and maintainable</p>
                </div>
              </div>

              <div className="absolute -right-4 bottom-24 hidden rounded-2xl border border-white/10 bg-slate-950/95 px-4 py-3 shadow-2xl shadow-black/40 sm:flex sm:items-center sm:gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/15 text-red-200">PH</span>
                <div>
                  <p className="text-sm font-medium text-white">Brand polish</p>
                  <p className="text-xs text-slate-400">Strong visual rhythm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}