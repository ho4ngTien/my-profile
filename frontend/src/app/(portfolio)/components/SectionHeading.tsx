type SectionHeadingProps = {
  eyebrow: string
  title: string
  description: string
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-xs uppercase tracking-[0.38em] text-red-400">{eyebrow}</p>
      <h2 className="mt-4 font-[Raleway] text-4xl font-extrabold tracking-tight text-white sm:text-5xl">{title}</h2>
      <p className="mt-4 text-lg leading-8 text-slate-300">{description}</p>
    </div>
  )
}