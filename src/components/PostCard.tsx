import Link from 'next/link'
import type { BlogPost } from '../../lib/blog'

function fmtDate(iso?: string): string {
  if (!iso) return ''
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return iso
  const day = String(d.getDate()).padStart(2, '0')
  const mon = d.toLocaleString('en-US', { month: 'short' }).toUpperCase()
  const year = String(d.getFullYear()).slice(2)
  return `${day}-${mon}-${year}`
}

export function PostCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block border border-stone-800 bg-stone-900/30 p-5 transition hover:border-amber hover:bg-stone-950"
    >
      <div className="flex items-center justify-between gap-3 mb-3">
        {post.frontmatter.category && (
          <span className="inline-flex items-center gap-1.5 border border-stone-700 px-2 py-0.5 text-[10px] uppercase tracking-[0.2em] text-stone-400 group-hover:border-amber group-hover:text-amber transition">
            {post.frontmatter.category}
          </span>
        )}
        <span className="text-[10px] uppercase tracking-wider text-stone-600 tabular-nums">
          {post.readTime}
        </span>
      </div>

      <h3 className="text-[15px] font-semibold leading-snug text-stone-100 group-hover:text-amber transition">
        <span className="mr-2 text-stone-600 group-hover:text-amber transition">&gt;</span>
        {post.frontmatter.title}
      </h3>

      <p className="mt-2 text-[12px] leading-relaxed text-stone-500 line-clamp-2">
        {post.frontmatter.description}
      </p>

      <div className="mt-4 flex items-center justify-between gap-2 text-[10px] uppercase tracking-[0.2em] text-stone-500 group-hover:text-amber transition">
        <span>Lire l&apos;article →</span>
        {post.frontmatter.publishedAt && (
          <span className="tabular-nums text-stone-600">
            {fmtDate(post.frontmatter.publishedAt)}
          </span>
        )}
      </div>
    </Link>
  )
}
