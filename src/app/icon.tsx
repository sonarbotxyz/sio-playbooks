import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0052FF 0%, #003ECB 100%)',
          borderRadius: 6,
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <span
          style={{
            fontSize: 14,
            fontWeight: 800,
            color: '#FFFFFF',
            letterSpacing: '-0.5px',
          }}
        >
          SIO
        </span>
      </div>
    ),
    { ...size }
  )
}
