import type { Metadata } from 'next'
import { getAllPosts } from '../../../lib/blog'
import { PostCard } from '@/components/PostCard'

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

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="mx-auto max-w-content px-4 py-10 sm:px-6 sm:py-14">
      <header className="mb-10">
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
        <div className="border border-stone-800 bg-stone-900/30 px-6 py-12 text-center">
          <p className="text-sm text-stone-500">
            Aucun article pour l&apos;instant.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {posts.map(post => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  )
}
