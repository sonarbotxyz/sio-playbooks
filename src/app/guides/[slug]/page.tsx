import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getGuideBySlug, getAllSlugs, getAllGuides } from '../../../../lib/guides'
import { isSlugPublished } from '../../../../lib/launch-config'
import { ArticleHeader } from '@/components/ArticleHeader'
import { MDXContent } from '@/components/MDXContent'
import { TableOfContents } from '@/components/TableOfContents'
import { ReadingProgress } from '@/components/ReadingProgress'
import { ComingSoon } from '@/components/ComingSoon'
import { getCategoryColor } from '../../../../lib/types'

export const dynamicParams = true

export async function generateStaticParams() {
  return getAllSlugs().map(slug => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  if (!isSlugPublished(slug)) {
    return {
      title: 'Coming Soon',
      robots: { index: false, follow: false },
    }
  }
  try {
    const guide = getGuideBySlug(slug)
    return {
      title: guide.frontmatter.title,
      description: guide.frontmatter.description,
      openGraph: {
        title: guide.frontmatter.title,
        description: guide.frontmatter.description,
        type: 'article',
        url: `/guides/${slug}`,
      },
      twitter: {
        card: 'summary_large_image',
        title: guide.frontmatter.title,
        description: guide.frontmatter.description,
      },
      alternates: {
        canonical: `/guides/${slug}`,
      },
    }
  } catch {
    return {}
  }
}

function getNextGuide(currentSlug: string) {
  const allGuides = getAllGuides()
  const currentIndex = allGuides.findIndex(g => g.slug === currentSlug)
  if (currentIndex === -1 || currentIndex >= allGuides.length - 1) {
    return allGuides[0] // wrap around
  }
  return allGuides[currentIndex + 1]
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  // Check if guide exists but is unpublished → show Coming Soon
  if (!isSlugPublished(slug)) {
    // Try to get the title for a nicer message
    let title = slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
    try {
      const fs = await import('fs')
      const path = await import('path')
      const matter = await import('gray-matter')
      const filePath = path.default.join(process.cwd(), 'guides', `${slug}.mdx`)
      const content = fs.default.readFileSync(filePath, 'utf8')
      const { data } = matter.default(content)
      if (data.title) title = data.title
    } catch { /* file doesn't exist → 404 */ }

    // If the MDX file doesn't exist at all, 404
    try {
      const fs = await import('fs')
      const path = await import('path')
      fs.default.accessSync(path.default.join(process.cwd(), 'guides', `${slug}.mdx`))
    } catch {
      notFound()
    }

    return <ComingSoon title={title} />
  }

  let guide
  try {
    guide = getGuideBySlug(slug)
  } catch {
    notFound()
  }

  const nextGuide = getNextGuide(slug)
  const nextColors = getCategoryColor(nextGuide.frontmatter.category)

  // JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.frontmatter.title,
    description: guide.frontmatter.description,
    author: {
      '@type': 'Organization',
      name: guide.frontmatter.author || 'Base Playbook',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Base Playbook',
    },
    url: `https://baseplaybook.xyz/guides/${slug}`,
    datePublished: guide.frontmatter.date || guide.frontmatter.lastUpdated || '2026-02-15',
    dateModified: guide.frontmatter.lastUpdated || guide.frontmatter.date || '2026-02-15',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://baseplaybook.xyz/guides/${slug}`,
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
        <ArticleHeader frontmatter={guide.frontmatter} />

        <div className="pb-16">
          <div className="flex gap-12 pt-10">
            <article className="min-w-0 flex-1 max-w-reading">
              <MDXContent source={guide.content} />
            </article>

            <aside className="hidden xl:block w-64 flex-shrink-0">
              <TableOfContents content={guide.content} />
            </aside>
          </div>

          <div className="xl:hidden mt-8">
            <TableOfContents content={guide.content} />
          </div>

          {nextGuide && nextGuide.slug !== slug && (
            <div className="mt-16 border-t border-stone-800 pt-10">
              <p className="mb-4 text-[10px] uppercase tracking-[0.25em] text-amber-deep">
                [ Playbook suivant ]
              </p>
              <Link
                href={`/guides/${nextGuide.slug}`}
                className="group block max-w-xl border border-stone-800 bg-stone-900/30 p-5 transition hover:border-amber hover:bg-stone-950"
              >
                <span className="mb-3 inline-flex items-center gap-2 border border-stone-700 px-2 py-0.5 text-[10px] uppercase tracking-[0.2em] text-stone-400 group-hover:border-amber group-hover:text-amber">
                  <span className="text-amber-deep font-semibold">{nextColors.icon}</span>
                  {nextGuide.frontmatter.category}
                </span>
                <h3 className="text-base font-semibold leading-snug text-stone-100 group-hover:text-amber transition">
                  <span className="mr-2 text-stone-600 group-hover:text-amber">&gt;</span>
                  {nextGuide.frontmatter.title}
                </h3>
                <p className="mt-3 text-[10px] uppercase tracking-[0.2em] text-stone-500 group-hover:text-amber transition">
                  Lire le playbook →
                </p>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
