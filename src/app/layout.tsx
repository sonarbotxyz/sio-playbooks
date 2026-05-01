import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Scanlines } from '@/components/Scanlines'
import './globals.css'

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Reussir mon BTS SIO — Playbooks SLAM, SISR, Maths et Droit',
    template: '%s | Reussir mon BTS SIO',
  },
  description: 'SLAM, SISR, Maths, Droit — tout le programme BTS SIO en playbooks ultra-detailles avec exercices corriges. 39 playbooks gratuits pour zero impasse le jour de l\'examen.',
  metadataBase: new URL('https://www.reussirmonbtssio.com'),
  openGraph: {
    type: 'website',
    siteName: 'Reussir mon BTS SIO',
    title: 'Reussir mon BTS SIO — 39 playbooks pour zero impasse',
    description: '39 playbooks couvrant l\'integralite du programme BTS SIO : SLAM, SISR, Mathematiques et Droit du numerique. Exercices corriges, schemas, zero blabla.',
    url: 'https://www.reussirmonbtssio.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reussir mon BTS SIO — 39 playbooks gratuits',
    description: 'SLAM, SISR, Maths, Droit — tout le BTS SIO en playbooks ultra-detailles. Gratuit.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Reussir mon BTS SIO',
    url: 'https://www.reussirmonbtssio.com',
    description: '39 playbooks couvrant l\'integralite du programme BTS SIO : SLAM, SISR, Mathematiques et Droit du numerique.',
  }

  return (
    <html lang="fr" className={`${mono.variable} h-full`}>
      <body className="min-h-full antialiased flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Scanlines />
        <Header />
        <main className="relative z-[2] flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
