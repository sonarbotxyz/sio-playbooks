import { ImageResponse } from 'next/og'

export const alt = 'Reussir mon BTS SIO — playbooks SLAM, SISR, maths et CEJM'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
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
          padding: '64px 80px',
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
          <span style={{ color: '#ffffff' }}>[REUSSIR MON BTS SIO]</span>
          <span style={{ color: '#9ca3af' }}>[ONLINE]</span>
        </div>

        {/* Title */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div
            style={{
              fontSize: 28,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: '#fbbf24',
              display: 'flex',
            }}
          >
            ▪ tout le programme · zéro impasse
          </div>
          <div
            style={{
              fontSize: 110,
              fontWeight: 600,
              color: '#ffffff',
              letterSpacing: '-0.02em',
              lineHeight: 0.95,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <span>Tout le programme,</span>
            <span>en playbook.</span>
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 22,
            color: '#a8a29e',
          }}
        >
          <span>SLAM · SISR · MATHS · CEJM</span>
          <span style={{ color: '#fbbf24' }}>reussirmonbtssio.com</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
