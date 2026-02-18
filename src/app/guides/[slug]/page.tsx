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

      <div className="pt-16">
        <ArticleHeader frontmatter={guide.frontmatter} />

        <div className="max-w-content mx-auto px-4 sm:px-6 pb-20">
          <div className="flex gap-12">
            {/* Main content */}
            <article className="min-w-0 flex-1 max-w-reading">
              <MDXContent source={guide.content} />
            </article>

            {/* Sidebar TOC */}
            <aside className="hidden xl:block w-64 flex-shrink-0">
              <TableOfContents content={guide.content} />
            </aside>
          </div>

          {/* Mobile TOC (shows above content on mobile) */}
          <div className="xl:hidden mt-8">
            <TableOfContents content={guide.content} />
          </div>

          {/* Next guide suggestion */}
          {nextGuide && nextGuide.slug !== slug && (
            <div className="mt-16 pt-12 border-t border-dark-700">
              <p className="text-xs font-medium text-dark-400 uppercase tracking-wider mb-4">Next guide</p>
              <Link
                href={`/guides/${nextGuide.slug}`}
                className="group block rounded-xl bg-dark-800 border border-dark-600 hover-glow p-6 max-w-lg"
              >
                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium ${nextColors.bg} ${nextColors.text} ${nextColors.border} border mb-3`}>
                  <span>{nextColors.icon}</span>
                  {nextGuide.frontmatter.category}
                </span>
                <h3 className="font-display font-semibold text-lg text-dark-100 group-hover:text-base-blue-light transition-colors mb-2">
                  {nextGuide.frontmatter.title}
                </h3>
                <div className="flex items-center gap-2 text-sm font-medium text-base-blue group-hover:text-base-blue-light transition-colors">
                  Read guide
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" className="transform group-hover:translate-x-1 transition-transform">
                    <path d="M1 7h12M8 2l5 5-5 5" />
                  </svg>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
