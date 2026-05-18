import type { Metadata } from 'next'
import { getAllPosts, getAllCategories, BLOG_CATEGORY_ORDER } from '../../../lib/blog'
import { PostCategoryFilter } from '@/components/PostCategoryFilter'

export const metadata: Metadata = {
  title: 'Les coulisses du BTS SIO — corrigés, conseils, actu',
  description:
    "Corrigés officiels des sujets BTS SIO, conseils de profs, retours d'élèves et actualité de la formation. Tout ce que les manuels n'écrivent pas.",
  openGraph: {
    title: 'Les coulisses du BTS SIO | Reussir mon BTS SIO',
    description:
      "Corrigés, conseils profs, retours d'élèves et actualité du BTS SIO.",
  },
  alternates: {
    canonical: '/blog',
  },
}

export default function BlogPage() {
  const posts = getAllPosts()
  const categories = getAllCategories().sort((a, b) => {
    const ai = BLOG_CATEGORY_ORDER.indexOf(a)
    const bi = BLOG_CATEGORY_ORDER.indexOf(b)
    return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi)
  })

  return (
    <div className="mx-auto max-w-content px-4 py-10 sm:px-6 sm:py-14">
      <header className="mb-10">
        <div className="mb-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-stone-500">
          <span className="inline-block h-[6px] w-[6px] bg-amber" />
          Blog · {posts.length} {posts.length === 1 ? 'article' : 'articles'}
        </div>
        <h1 className="max-w-3xl text-[36px] font-semibold leading-[0.95] tracking-tight text-white md:text-[64px]">
          Les coulisses
          <br />
          du BTS SIO.
        </h1>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-stone-400 md:text-base">
          Corrigés, conseils profs, retours d&apos;élèves, actualité de la
          formation.
        </p>
      </header>

      <PostCategoryFilter posts={posts} categories={categories} />
    </div>
  )
}
