import { ImageResponse } from 'next/og'
import fs from 'fs'
import path from 'path'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  const logoData = fs.readFileSync(path.join(process.cwd(), 'public', 'logo-dark.png'))
  const base64 = `data:image/png;base64,${logoData.toString('base64')}`

  return new ImageResponse(
    (
      <div style={{ width: 32, height: 32, display: 'flex' }}>
        <img src={base64} width={32} height={32} />
      </div>
    ),
    { ...size }
  )
}
