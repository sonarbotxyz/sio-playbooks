import type { MetadataRoute } from 'next'
import { getAllSlugs } from '../../lib/guides'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sio-slam.fr'
  const slugs = getAllSlugs()

  const guideUrls = slugs.map(slug => ({
    url: `${baseUrl}/guides/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/guides`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...guideUrls,
  ]
}
