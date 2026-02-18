import { ImageResponse } from 'next/og'
import fs from 'fs'
import path from 'path'

export const alt = 'Base Playbook — The unfair advantage for builders on Base'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  const logoData = fs.readFileSync(path.join(process.cwd(), 'public', 'logo.png'))
  const logoBase64 = `data:image/png;base64,${logoData.toString('base64')}`

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
        }}
      >
        <img src={logoBase64} width={100} height={100} style={{ borderRadius: 16, marginBottom: 32 }} />
        <div
          style={{
            fontSize: '64px',
            fontWeight: 800,
            color: '#F0F1F3',
            letterSpacing: '-0.03em',
            marginBottom: '16px',
            display: 'flex',
          }}
        >
          Base <span style={{ color: '#0052FF', marginLeft: 16 }}>Playbook</span>
        </div>
        <div
          style={{
            fontSize: '28px',
            color: '#8B8D98',
            fontWeight: 400,
          }}
        >
          The unfair advantage for builders on Base
        </div>
        <div
          style={{
            display: 'flex',
            gap: '48px',
            marginTop: '48px',
            fontSize: '18px',
            color: '#6B7280',
          }}
        >
          <span>22 Guides</span>
          <span>Free Forever</span>
          <span>For Builders</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
