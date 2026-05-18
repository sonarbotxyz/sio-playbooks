'use client'

import { useState } from 'react'
import type { BlogPost } from '../../lib/blog'
import { getCategoryColor } from '../../lib/types'
import { PostCard } from './PostCard'

export function PostCategoryFilter({
  posts,
  categories,
}: {
  posts: BlogPost[]
  categories: string[]
}) {
  const [active, setActive] = useState<string | null>(null)
  const sortedCategories = categories

  const filtered = active
    ? posts.filter(p => p.frontmatter.category === active)
    : posts

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
        {filtered.map(post => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="border border-stone-800 bg-stone-900/30 px-6 py-12 text-center">
          <p className="text-sm text-stone-500">
            Aucun article dans cette catégorie.
          </p>
        </div>
      )}
    </div>
  )
}
