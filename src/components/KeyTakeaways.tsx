export function KeyTakeaways({ items }: { items: string[] }) {
  return (
    <div className="my-8 border border-stone-800 bg-stone-900/30 p-6">
      <p className="mb-4 text-[10px] uppercase tracking-[0.25em] text-amber-deep">
        [ Ce que tu vas apprendre ]
      </p>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-stone-200">
            <span className="mt-1 text-amber-deep tabular-nums">{String(i + 1).padStart(2, '0')}</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
