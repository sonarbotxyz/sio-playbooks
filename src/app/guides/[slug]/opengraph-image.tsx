import { ImageResponse } from 'next/og'
import fs from 'fs'
import path from 'path'
import { getGuideBySlug } from '../../../../lib/guides'

export const runtime = 'nodejs'
export const alt = 'Base Playbook Guide'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const categoryColors: Record<string, string> = {
  'Getting Started': '#10B981',
  'Token Launch': '#F59E0B',
  'Development': '#0052FF',
  'DeFi': '#8B5CF6',
  'AI Agents': '#06B6D4',
  'NFTs & Creators': '#EC4899',
  'Security': '#EF4444',
  'Growth': '#F59E0B',
  'Strategy': '#64748B',
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  let title = 'Base Playbook Guide'
  let category = 'Guide'
  let readTime = ''

  try {
    const guide = getGuideBySlug(slug)
    title = guide.frontmatter.title
    category = guide.frontmatter.category
    readTime = guide.readTime
  } catch {
    // fallback
  }

  let logoBase64 = ''
  try {
    const logoData = fs.readFileSync(path.join(process.cwd(), 'public', 'logo.png'))
    logoBase64 = `data:image/png;base64,${logoData.toString('base64')}`
  } catch {
    // fallback without logo
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
        }}
      >
        {/* Grid pattern */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'linear-gradient(rgba(0,82,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,82,255,0.04) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
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
            {readTime && <span style={{ color: '#6B7280' }}>· {readTime}</span>}
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
            {logoBase64 && (
              <img src={logoBase64} width={36} height={36} style={{ borderRadius: 8 }} />
            )}
            <span style={{ fontSize: '22px', fontWeight: 700, color: '#F0F1F3' }}>
              Base <span style={{ color: '#0052FF' }}>Playbook</span>
            </span>
          </div>
          <span style={{ fontSize: '16px', color: '#6B7280' }}>baseplaybook.xyz</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
