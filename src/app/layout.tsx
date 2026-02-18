import type { Metadata } from 'next'
import { JetBrains_Mono, Outfit } from 'next/font/google'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import './globals.css'

const fontDisplay = Outfit({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700', '800'],
})

const fontBody = Outfit({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600'],
})

const fontMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  title: {
    default: 'BTS SIO — Ton arme secrete pour l\'examen',
    template: '%s | BTS SIO Playbooks',
  },
  description: 'SLAM, SISR, Maths, Droit — tout le programme BTS SIO en playbooks ultra-detailles avec exercices corriges. Gratuit.',
  openGraph: {
    type: 'website',
    siteName: 'BTS SIO SLAM',
    title: 'BTS SIO SLAM -- Le guide ultime',
    description: '14 playbooks couvrant l\'integralite du programme BTS SIO option SLAM. De l\'algorithmique au C# WinForms.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BTS SIO SLAM -- Le guide ultime',
    description: '14 playbooks pour reussir le BTS SIO option SLAM.',
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
    name: 'BTS SIO SLAM',
    description: '14 playbooks pour reussir le BTS SIO option SLAM.',
  }

  return (
    <html lang="fr" className={`${fontDisplay.variable} ${fontBody.variable} ${fontMono.variable}`}>
      <body className="font-body bg-dark-900 text-dark-100 min-h-screen flex flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
