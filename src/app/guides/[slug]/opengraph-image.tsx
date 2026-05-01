import { ImageResponse } from 'next/og'
import { getGuideBySlug } from '../../../../lib/guides'

export const runtime = 'nodejs'
export const alt = 'Reussir mon BTS SIO — Playbook'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  let title = 'Playbook BTS SIO'
  let category = 'Playbook'
  let readTime = ''

  try {
    const guide = getGuideBySlug(slug)
    title = guide.frontmatter.title
    category = guide.frontmatter.category
    readTime = guide.readTime
  } catch {
    // fallback
  }

  return new ImageResponse(
    (
      <div
        style={{
          background: '#0a0a0a',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '60px 80px',
          fontFamily: 'monospace',
          position: 'relative',
          color: '#e7e5e4',
        }}
      >
        {/* Scanlines */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'repeating-linear-gradient(to bottom, transparent 0, transparent 3px, rgba(255,255,255,0.04) 3px, rgba(255,255,255,0.04) 4px)',
            display: 'flex',
          }}
        />
        {/* Top bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <span style={{ color: '#ffffff' }}>[SIO PLAYBOOKS]</span>
          <span style={{ color: '#9ca3af' }}>[ONLINE]</span>
        </div>

        {/* Body */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              fontSize: 22,
              color: '#fbbf24',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
            }}
          >
            <span style={{ border: '1px solid #44403c', padding: '6px 14px' }}>
              {category}
            </span>
            {readTime && <span style={{ color: '#a8a29e' }}>~ {readTime}</span>}
          </div>
          <div
            style={{
              fontSize: 64,
              fontWeight: 600,
              color: '#ffffff',
              letterSpacing: '-0.01em',
              lineHeight: 1.05,
              maxWidth: 1000,
              display: 'flex',
            }}
          >
            {title}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 20,
            color: '#a8a29e',
          }}
        >
          <span>&gt; lire le playbook</span>
          <span style={{ color: '#fbbf24' }}>reussirmonbtssio.com</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
