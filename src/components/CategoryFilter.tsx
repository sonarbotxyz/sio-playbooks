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
      <div className="mb-8 flex flex-wrap gap-2">
        <button
          onClick={() => setActive(null)}
          className={`border px-3 py-1.5 text-[11px] uppercase tracking-[0.2em] transition ${
            !active
              ? 'border-amber bg-stone-950 text-amber'
              : 'border-stone-700 bg-transparent text-stone-400 hover:border-amber hover:text-amber'
          }`}
        >
          Tous
        </button>
        {sortedCategories.map(cat => {
          const colors = getCategoryColor(cat)
          const isActive = active === cat
          return (
            <button
              key={cat}
              onClick={() => setActive(isActive ? null : cat)}
              className={`inline-flex items-center gap-2 border px-3 py-1.5 text-[11px] uppercase tracking-[0.2em] transition ${
                isActive
                  ? 'border-amber bg-stone-950 text-amber'
                  : 'border-stone-700 bg-transparent text-stone-400 hover:border-amber hover:text-amber'
              }`}
            >
              <span className="text-amber-deep">{colors.icon}</span>
              {cat}
            </button>
          )
        })}
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map(guide => (
          <GuideCard key={guide.slug} guide={guide} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="border border-stone-800 bg-stone-900/30 px-6 py-12 text-center">
          <p className="text-sm text-stone-500">Aucun playbook dans cette catégorie.</p>
        </div>
      )}
    </div>
  )
}
