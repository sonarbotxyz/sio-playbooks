import { getCategoryColor } from '../../lib/types'
import type { GuideFrontmatter } from '../../lib/types'

export function ArticleHeader({ frontmatter }: { frontmatter: GuideFrontmatter }) {
  const colors = getCategoryColor(frontmatter.category)

  return (
    <header className="relative py-16 sm:py-20">
      {/* Background gradient accent */}
      <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-[0.04]`} />
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/80 to-transparent" />

      <div className="relative max-w-content mx-auto px-4 sm:px-6">
        {/* Category pill */}
        <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold ${colors.bg} ${colors.text} ${colors.border} border mb-6`}>
          <span>{colors.icon}</span>
          {frontmatter.category}
        </span>

        {/* Title */}
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] text-dark-100 leading-[1.12] tracking-tight mb-5">
          {frontmatter.title}
        </h1>

        {/* Description */}
        <p className="text-lg text-dark-200 leading-relaxed mb-6 max-w-[600px]">
          {frontmatter.description}
        </p>

        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-dark-300">
          {frontmatter.readTime && (
            <span className="flex items-center gap-1.5 font-mono text-xs">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="7" cy="7" r="5.5" />
                <path d="M7 4v3.5l2.5 1.5" />
              </svg>
              {frontmatter.readTime}
            </span>
          )}
          {frontmatter.difficulty && (
            <span className="flex items-center gap-1.5 font-mono text-xs">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 10V8M7 10V5M11 10V3" />
              </svg>
              {frontmatter.difficulty}
            </span>
          )}
        </div>
      </div>
    </header>
  )
}
