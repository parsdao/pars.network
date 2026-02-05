import type { Metadata, Viewport } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Pars Network - Persian Sovereignty',
    template: '%s | Pars Network',
  },
  description: 'Sovereign Layer 1 blockchain with post-quantum cryptography, private communications, and DeFi infrastructure for the global Parsi community.',
  keywords: ['Pars', 'blockchain', 'Layer 1', 'L1', 'post-quantum', 'ML-KEM', 'ML-DSA', 'DeFi', 'privacy', 'Parsi', 'Persian', 'Lux'],
  authors: [{ name: 'Pars Network' }],
  icons: {
    icon: '/assets/logo.png',
    apple: '/assets/logo.png',
  },
  openGraph: {
    title: 'Pars Network',
    description: 'Persian Sovereignty - Sovereign L1 with Post-Quantum Security',
    type: 'website',
    locale: 'en_US',
    url: 'https://pars.network',
    siteName: 'Pars Network',
    images: ['/assets/logo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pars Network',
    description: 'Persian Sovereignty - Sovereign L1 with Post-Quantum Security',
    creator: '@parsnetwork',
    images: ['/assets/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#E6B800',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-background text-foreground antialiased">
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  )
}
