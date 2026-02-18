// Launch configuration — controls which guides are visible

export const PUBLISHED_GUIDES: string[] | null = null

// Set to true to show all guides regardless of PUBLISHED_GUIDES
export const SHOW_ALL = true

export function isSlugPublished(slug: string): boolean {
  if (SHOW_ALL || !PUBLISHED_GUIDES) return true
  return PUBLISHED_GUIDES.includes(slug)
}
