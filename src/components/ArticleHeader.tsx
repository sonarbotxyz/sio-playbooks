import { getCategoryColor } from '../../lib/types'
import type { GuideFrontmatter } from '../../lib/types'

export function ArticleHeader({ frontmatter }: { frontmatter: GuideFrontmatter }) {
  const colors = getCategoryColor(frontmatter.category)

  return (
    <header className="border-b border-stone-800 pb-10 pt-4">
      <div className="mb-5 flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-stone-500">
        <span className="inline-flex items-center gap-2 border border-stone-700 px-3 py-1 text-stone-200">
          <span className="text-amber-deep font-semibold">{colors.icon}</span>
          {frontmatter.category}
        </span>
        {frontmatter.readTime && (
          <span className="text-stone-500 tabular-nums">~ {frontmatter.readTime}</span>
        )}
        {frontmatter.difficulty && (
          <span className="text-stone-500">· {frontmatter.difficulty}</span>
        )}
      </div>

      <h1 className="max-w-3xl text-[32px] font-semibold leading-[1.05] tracking-tight text-white md:text-[52px]">
        {frontmatter.title}
      </h1>

      <p className="mt-6 max-w-2xl text-sm leading-relaxed text-stone-400 md:text-base">
        {frontmatter.description}
      </p>
    </header>
  )
}
