import type { Metadata, Viewport } from 'next'
import { GeistMono } from 'geist/font/mono'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Pars Network — Sovereign L1',
    template: '%s | Pars Network',
  },
  description: 'Sovereign Layer 1 blockchain with post-quantum cryptography, private communications, and DeFi infrastructure.',
  keywords: ['Pars', 'blockchain', 'Layer 1', 'L1', 'post-quantum', 'ML-KEM', 'ML-DSA', 'DeFi', 'privacy', 'EVM', 'Lux'],
  authors: [{ name: 'Pars Network' }],
  openGraph: {
    title: 'Pars Network',
    description: 'Sovereign L1 with Post-Quantum Security',
    type: 'website',
    locale: 'en_US',
    url: 'https://pars.network',
    siteName: 'Pars Network',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pars Network',
    description: 'Sovereign L1 with Post-Quantum Security',
    creator: '@parsnetwork',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0b1215',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${GeistMono.variable}`}>
      <body className="min-h-screen text-foreground antialiased font-mono">
        <div className="desktop-window">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  )
}
