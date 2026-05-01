import Link from 'next/link'
import type { Guide } from '../../lib/types'
import { getCategoryColor } from '../../lib/types'

export function GuideCard({ guide }: { guide: Guide }) {
  const colors = getCategoryColor(guide.frontmatter.category)

  return (
    <Link
      href={`/guides/${guide.slug}`}
      className="group block border border-stone-800 bg-stone-900/30 p-5 transition hover:border-amber hover:bg-stone-950"
    >
      <div className="flex items-center justify-between gap-3 mb-3">
        <span className="inline-flex items-center gap-1.5 border border-stone-700 px-2 py-0.5 text-[10px] uppercase tracking-[0.2em] text-stone-400 group-hover:border-amber group-hover:text-amber transition">
          <span className="font-semibold">{colors.icon}</span>
          {guide.frontmatter.category}
        </span>
        <span className="text-[10px] uppercase tracking-wider text-stone-600 tabular-nums">
          {guide.readTime}
        </span>
      </div>

      <h3 className="text-[15px] font-semibold leading-snug text-stone-100 group-hover:text-amber transition">
        <span className="mr-2 text-stone-600 group-hover:text-amber transition">&gt;</span>
        {guide.frontmatter.title}
      </h3>

      <p className="mt-2 text-[12px] leading-relaxed text-stone-500 line-clamp-2">
        {guide.frontmatter.description}
      </p>

      <div className="mt-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-stone-500 group-hover:text-amber transition">
        Lire le playbook →
      </div>
    </Link>
  )
}
