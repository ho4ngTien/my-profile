type BadgeGridProps = {
  items: string[]
}

export function BadgeGrid({ items }: BadgeGridProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {items.map((item) => (
        <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-sm text-slate-200">
          {item}
        </span>
      ))}
    </div>
  )
}