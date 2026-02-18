import Link from 'next/link'
import type { Guide } from '../../lib/types'
import { getCategoryColor } from '../../lib/types'

export function GuideCard({ guide }: { guide: Guide }) {
  const colors = getCategoryColor(guide.frontmatter.category)

  return (
    <Link
      href={`/guides/${guide.slug}`}
      className="group block rounded-xl bg-dark-800 border border-dark-600 hover-glow overflow-hidden"
    >
      {/* Category gradient bar */}
      <div className={`h-1 bg-gradient-to-r ${colors.gradient}`} />

      <div className="p-5 space-y-3">
        {/* Category & read time */}
        <div className="flex items-center justify-between">
          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium ${colors.bg} ${colors.text} ${colors.border} border`}>
            <span>{colors.icon}</span>
            {guide.frontmatter.category}
          </span>
          <span className="text-xs text-dark-300 font-mono">
            {guide.readTime}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display font-semibold text-dark-100 group-hover:text-base-blue-light transition-colors leading-snug">
          {guide.frontmatter.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-dark-300 leading-relaxed line-clamp-2">
          {guide.frontmatter.description}
        </p>

        {/* Read arrow */}
        <div className="flex items-center gap-2 text-xs font-medium text-base-blue group-hover:text-base-blue-light transition-colors pt-1">
          Read guide
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" className="transform group-hover:translate-x-1 transition-transform">
            <path d="M1 7h12M8 2l5 5-5 5" />
          </svg>
        </div>
      </div>
    </Link>
  )
}
