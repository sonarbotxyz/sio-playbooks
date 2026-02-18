export function KeyTakeaways({ items }: { items: string[] }) {
  return (
    <div className="rounded-xl bg-dark-800 border border-base-blue/20 p-6 my-8 glow-blue">
      <h3 className="font-display font-bold text-base-blue-light text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-base-blue">
          <path d="M8 1l2 5h5l-4 3.5 1.5 5L8 11.5 3.5 14.5 5 9.5 1 6h5z" />
        </svg>
        Key Takeaways
      </h3>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-dark-100">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-base-blue flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
