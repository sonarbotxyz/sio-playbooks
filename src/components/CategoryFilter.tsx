'use client'

import { useState } from 'react'
import type { Guide } from '../../lib/types'
import { getCategoryColor, CATEGORY_ORDER } from '../../lib/types'
import { GuideCard } from './GuideCard'

export function CategoryFilter({ guides, categories }: { guides: Guide[]; categories: string[] }) {
  const [active, setActive] = useState<string | null>(null)

  const sortedCategories = [...categories].sort((a, b) => {
    const ai = CATEGORY_ORDER.indexOf(a)
    const bi = CATEGORY_ORDER.indexOf(b)
    return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi)
  })

  const filtered = active ? guides.filter(g => g.frontmatter.category === active) : guides

  return (
    <div>
      {/* Filter pills */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActive(null)}
          className={`category-pill px-4 py-2 rounded-lg text-sm font-medium border transition-all ${
            !active
              ? 'active bg-base-blue/15 border-base-blue text-base-blue-light'
              : 'bg-dark-800 border-dark-600 text-dark-300 hover:text-dark-100'
          }`}
        >
          All
        </button>
        {sortedCategories.map(cat => {
          const colors = getCategoryColor(cat)
          return (
            <button
              key={cat}
              onClick={() => setActive(active === cat ? null : cat)}
              className={`category-pill px-4 py-2 rounded-lg text-sm font-medium border transition-all flex items-center gap-1.5 ${
                active === cat
                  ? `active ${colors.bg} ${colors.border} ${colors.text}`
                  : 'bg-dark-800 border-dark-600 text-dark-300 hover:text-dark-100'
              }`}
            >
              <span className="text-xs">{colors.icon}</span>
              {cat}
            </button>
          )
        })}
      </div>

      {/* Guide grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map(guide => (
          <GuideCard key={guide.slug} guide={guide} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12">
          <p className="text-dark-300 text-sm">No guides in this category yet.</p>
        </div>
      )}
    </div>
  )
}
