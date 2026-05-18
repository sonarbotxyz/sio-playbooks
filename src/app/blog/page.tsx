import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '../../../lib/blog'

export const metadata: Metadata = {
  title: 'Blog — Sujets corrigés et révisions BTS SIO',
  description:
    'Corrigés officiels des sujets BTS SIO (U7 SLAM, U7 SISR, maths, CEJM), méthodes de révision, conseils par les profs.',
  openGraph: {
    title: 'Blog BTS SIO | Reussir mon BTS SIO',
    description:
      'Corrigés officiels des sujets BTS SIO et conseils de révision.',
  },
  alternates: {
    canonical: '/blog',
  },
}

function fmtDate(iso?: string): string {
  if (!iso) return '--'
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return iso
  const day = String(d.getDate()).padStart(2, '0')
  const mon = d.toLocaleString('en-US', { month: 'short' }).toUpperCase()
  const year = String(d.getFullYear()).slice(2)
  return `${day}-${mon}-${year}`
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="mx-auto max-w-content px-4 py-10 sm:px-6 sm:py-14">
      <header className="mb-12">
        <div className="mb-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-stone-500">
          <span className="inline-block h-[6px] w-[6px] bg-amber" />
          Blog · {posts.length} {posts.length === 1 ? 'article' : 'articles'}
        </div>
        <h1 className="max-w-3xl text-[36px] font-semibold leading-[0.95] tracking-tight text-white md:text-[64px]">
          Sujets corrigés &amp; révisions.
        </h1>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-stone-400 md:text-base">
          Corrigés officiels des derniers sujets BTS SIO, méthodes de révision,
          erreurs à éviter le jour J.
        </p>
      </header>

      {posts.length === 0 ? (
        <div className="border border-stone-800 bg-stone-900/30 p-8 text-sm text-stone-400">
          [ STATUS · 204 — PAS ENCORE D&apos;ARTICLE ]
        </div>
      ) : (
        <ul className="space-y-4">
          {posts.map(post => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block border border-stone-800 bg-stone-900/30 p-5 transition hover:border-amber hover:bg-stone-950"
              >
                <div className="mb-3 flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-stone-500">
                  {post.frontmatter.category && (
                    <span className="border border-stone-700 px-2 py-0.5 text-stone-200 group-hover:border-amber group-hover:text-amber">
                      {post.frontmatter.category}
                    </span>
                  )}
                  <span className="tabular-nums">
                    {fmtDate(post.frontmatter.publishedAt)}
                  </span>
                  <span>· {post.frontmatter.readTime}</span>
                </div>
                <h2 className="text-lg font-semibold leading-snug text-stone-100 group-hover:text-amber md:text-xl">
                  <span className="mr-2 text-stone-600 group-hover:text-amber">
                    &gt;
                  </span>
                  {post.frontmatter.title}
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-stone-400">
                  {post.frontmatter.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
