import { ImageResponse } from 'next/og'
import fs from 'fs'
import path from 'path'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  const logoData = fs.readFileSync(path.join(process.cwd(), 'public', 'logo.png'))
  const base64 = logoData.toString('base64')
  const dataUrl = `data:image/png;base64,${base64}`

  return new ImageResponse(
    (
      <div style={{ width: 32, height: 32, display: 'flex' }}>
        <img src={dataUrl} width={32} height={32} style={{ borderRadius: 6 }} />
      </div>
    ),
    { ...size }
  )
}
