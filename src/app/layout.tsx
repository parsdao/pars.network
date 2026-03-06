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
  keywords: ['Pars', 'blockchain', 'Layer 1', 'L1', 'post-quantum', 'ML-KEM', 'ML-DSA', 'DeFi', 'privacy', 'Parsi', 'Persian', 'sovereign', 'mesh network'],
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
      <head>
        {/* Hanzo Insights — behavioral analytics */}
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(t,e){var o,n,p,r;e.__SV||(window.ha=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="ha",u.people=u.people||[],u.toString=function(t){var e="ha";return"ha"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture captureException identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on getActiveMatchingSurveys getSurveys getNextSurveyStep onSessionId setPersonProperties".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.ha||[]);ha.init('phc_e16a2d5a8033442d87f090b24c606825',{api_host:'https://insights.hanzo.ai',person_profiles:'identified_only'});ha.register({app:'pars-network',org:'pars'})`,
          }}
        />
      </head>
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
