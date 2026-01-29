import type { Metadata, Viewport } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Pars Network - Braided Sovereignty',
    template: '%s | Pars Network',
  },
  description: 'Session-based private communications with post-quantum security and coercion resistance for the Persian diaspora.',
  keywords: ['Pars', 'blockchain', 'privacy', 'post-quantum', 'session', 'mesh network', 'coercion resistant', 'Persian', 'diaspora'],
  authors: [{ name: 'Pars Network' }],
  openGraph: {
    title: 'Pars Network',
    description: 'Braided Sovereignty - Private, Post-Quantum, Unstoppable',
    type: 'website',
    locale: 'en_US',
    url: 'https://pars.network',
    siteName: 'Pars Network',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pars Network',
    description: 'Braided Sovereignty - Private, Post-Quantum, Unstoppable',
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
