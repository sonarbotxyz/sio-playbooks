import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPostBySlug, getAllPostSlugs, getAllPosts } from '../../../../lib/blog'
import { MDXContent } from '@/components/MDXContent'
import { TableOfContents } from '@/components/TableOfContents'
import { ReadingProgress } from '@/components/ReadingProgress'

export const dynamicParams = false

export async function generateStaticParams() {
  return getAllPostSlugs().map(slug => ({ slug }))
}

function fmtDate(iso?: string): string {
  if (!iso) return ''
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return iso
  const day = String(d.getDate()).padStart(2, '0')
  const mon = d.toLocaleString('en-US', { month: 'short' }).toUpperCase()
  const year = String(d.getFullYear()).slice(2)
  return `${day}-${mon}-${year}`
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  try {
    const post = getPostBySlug(slug)
    return {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      openGraph: {
        title: post.frontmatter.title,
        description: post.frontmatter.description,
        type: 'article',
        url: `/blog/${slug}`,
        publishedTime: post.frontmatter.publishedAt,
      },
      twitter: {
        card: 'summary_large_image',
        title: post.frontmatter.title,
        description: post.frontmatter.description,
      },
      alternates: {
        canonical: `/blog/${slug}`,
      },
    }
  } catch {
    return {}
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  let post
  try {
    post = getPostBySlug(slug)
  } catch {
    notFound()
  }

  const all = getAllPosts()
  const idx = all.findIndex(p => p.slug === slug)
  const nextPost = idx >= 0 && idx < all.length - 1 ? all[idx + 1] : null

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.frontmatter.title,
    description: post.frontmatter.description,
    author: {
      '@type': 'Organization',
      name: 'Reussir mon BTS SIO',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Reussir mon BTS SIO',
    },
    url: `https://www.reussirmonbtssio.com/blog/${slug}`,
    datePublished: post.frontmatter.publishedAt,
    dateModified: post.frontmatter.publishedAt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.reussirmonbtssio.com/blog/${slug}`,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ReadingProgress />

      <div className="mx-auto max-w-content px-4 py-8 sm:px-6 sm:py-10">
        <header className="border-b border-stone-800 pb-10 pt-4">
          <div className="mb-5 flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-stone-500">
            {post.frontmatter.category && (
              <span className="inline-flex items-center gap-2 border border-stone-700 px-3 py-1 text-stone-200">
                {post.frontmatter.category}
              </span>
            )}
            {post.frontmatter.publishedAt && (
              <span className="tabular-nums">
                {fmtDate(post.frontmatter.publishedAt)}
              </span>
            )}
            <span>· {post.frontmatter.readTime}</span>
          </div>

          <h1 className="max-w-3xl text-[32px] font-semibold leading-[1.05] tracking-tight text-white md:text-[52px]">
            {post.frontmatter.title}
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-stone-400 md:text-base">
            {post.frontmatter.description}
          </p>
        </header>

        <div className="pb-16">
          <div className="flex gap-12 pt-10">
            <article className="min-w-0 flex-1 max-w-reading">
              <MDXContent source={post.content} />
            </article>

            <aside className="hidden xl:block w-64 flex-shrink-0">
              <TableOfContents content={post.content} />
            </aside>
          </div>

          <div className="xl:hidden mt-8">
            <TableOfContents content={post.content} />
          </div>

          {nextPost && (
            <div className="mt-16 border-t border-stone-800 pt-10">
              <p className="mb-4 text-[10px] uppercase tracking-[0.25em] text-amber-deep">
                [ Article suivant ]
              </p>
              <Link
                href={`/blog/${nextPost.slug}`}
                className="group block max-w-xl border border-stone-800 bg-stone-900/30 p-5 transition hover:border-amber hover:bg-stone-950"
              >
                {nextPost.frontmatter.category && (
                  <span className="mb-3 inline-flex items-center gap-2 border border-stone-700 px-2 py-0.5 text-[10px] uppercase tracking-[0.2em] text-stone-400 group-hover:border-amber group-hover:text-amber">
                    {nextPost.frontmatter.category}
                  </span>
                )}
                <h3 className="text-base font-semibold leading-snug text-stone-100 group-hover:text-amber transition">
                  <span className="mr-2 text-stone-600 group-hover:text-amber">&gt;</span>
                  {nextPost.frontmatter.title}
                </h3>
                <p className="mt-3 text-[10px] uppercase tracking-[0.2em] text-stone-500 group-hover:text-amber transition">
                  Lire l&apos;article →
                </p>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
