import { ImageResponse } from 'next/og'

export const alt = 'Reussir mon BTS SIO — 39 playbooks pour zero impasse'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0A0B0D 0%, #111217 50%, #0A0B0D 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        }}
      >
        {/* Grid pattern */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'linear-gradient(rgba(0,82,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,82,255,0.05) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            display: 'flex',
          }}
        />
        {/* Top accent */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, #0052FF, #3B82F6, #0052FF)',
            display: 'flex',
          }}
        />
        {/* Logo badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 80,
            height: 80,
            background: 'linear-gradient(135deg, #0052FF 0%, #003ECB 100%)',
            borderRadius: 16,
            marginBottom: 32,
            fontSize: 32,
            fontWeight: 800,
            color: '#FFFFFF',
          }}
        >
          SIO
        </div>
        {/* Title */}
        <div
          style={{
            fontSize: 56,
            fontWeight: 800,
            color: '#F0F1F3',
            letterSpacing: '-0.03em',
            marginBottom: 16,
            display: 'flex',
          }}
        >
          Reussir mon{' '}
          <span style={{ color: '#0052FF', marginLeft: 16 }}>BTS SIO</span>
        </div>
        {/* Subtitle */}
        <div
          style={{
            fontSize: 26,
            color: '#8B8D98',
            fontWeight: 400,
            marginBottom: 48,
          }}
        >
          39 playbooks pour zero impasse le jour de l'examen
        </div>
        {/* Tags */}
        <div
          style={{
            display: 'flex',
            gap: 32,
            fontSize: 18,
            color: '#6B7280',
          }}
        >
          <span style={{ color: '#10B981' }}>SLAM</span>
          <span style={{ color: '#8B5CF6' }}>SISR</span>
          <span style={{ color: '#F59E0B' }}>Mathematiques</span>
          <span style={{ color: '#EF4444' }}>Droit</span>
          <span>Gratuit</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
