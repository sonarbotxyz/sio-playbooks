import { ImageResponse } from 'next/og'
import { getGuideBySlug } from '../../../../lib/guides'

export const runtime = 'nodejs'
export const alt = 'Reussir mon BTS SIO — Playbook'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const categoryColors: Record<string, string> = {
  'Algorithmique': '#10B981',
  'Programmation': '#0052FF',
  'Web': '#06B6D4',
  'Bases de donnees': '#8B5CF6',
  'Cybersecurite': '#EF4444',
  'Reseaux': '#F59E0B',
  'Systemes': '#EC4899',
  'Mathematiques': '#F59E0B',
  'Droit': '#64748B',
  'Projet': '#10B981',
  'Infrastructure': '#8B5CF6',
}

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

  const accentColor = categoryColors[category] || '#0052FF'

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0A0B0D 0%, #111217 50%, #0A0B0D 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '60px 80px',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        }}
      >
        {/* Grid pattern */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'linear-gradient(rgba(0,82,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,82,255,0.04) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            display: 'flex',
          }}
        />
        {/* Accent glow */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: accentColor,
            display: 'flex',
          }}
        />
        {/* Top section */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Category badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '18px',
              fontWeight: 600,
              color: accentColor,
            }}
          >
            {category}
            {readTime && <span style={{ color: '#6B7280' }}> · {readTime}</span>}
          </div>
          {/* Title */}
          <div
            style={{
              fontSize: '52px',
              fontWeight: 800,
              color: '#F0F1F3',
              letterSpacing: '-0.03em',
              lineHeight: 1.15,
              maxWidth: '900px',
            }}
          >
            {title}
          </div>
        </div>
        {/* Bottom bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: 36,
                height: 36,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, #0052FF 0%, #003ECB 100%)',
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 800,
                color: '#FFFFFF',
              }}
            >
              SIO
            </div>
            <span style={{ fontSize: '22px', fontWeight: 700, color: '#F0F1F3' }}>
              Reussir mon <span style={{ color: '#0052FF' }}>BTS SIO</span>
            </span>
          </div>
          <span style={{ fontSize: '16px', color: '#6B7280' }}>reussirmonbtssio.com</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
