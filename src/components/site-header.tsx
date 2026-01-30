'use client'

import { useState } from 'react'

const navLinks = [
  { href: '#specs', label: 'Specs' },
  { href: '#technology', label: 'Technology' },
  { href: '#identity', label: 'Identity' },
  { href: '#session', label: 'Session' },
  { href: '#defi', label: 'DeFi' },
  { href: '#network', label: 'Network' },
]

const externalLinks = [
  { href: 'https://docs.pars.network', label: 'Docs' },
  { href: 'https://explore.pars.network', label: 'Explorer' },
]

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="flex-shrink-0">
      {/* ═══ Window Title Bar ═══ */}
      <div className="win-titlebar-main">
        <div className="flex items-center gap-2">
          {/* Window icon */}
          <span className="win-start-icon">P</span>
          <span className="win-title-text">Pars Network</span>
        </div>

        <div className="flex items-center gap-0">
          <span className="win-control-btn" title="Minimize">&ndash;</span>
          <span className="win-control-btn" title="Maximize">&square;</span>
          <span className="win-control-btn" title="Close">&times;</span>
        </div>
      </div>

      {/* ═══ Menu Bar ═══ */}
      <div className="win-menubar">
        {/* Desktop nav */}
        <div className="hidden md:contents">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <div className="win-menubar-divider" />
          {externalLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile: toggle button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden"
        >
          {mobileOpen ? '[-] Close' : '[+] Menu'}
        </button>

        {/* Right side: chain status */}
        <div className="ml-auto flex items-center gap-1.5 pr-1 text-[11px] text-foreground/30">
          <span className="led led-green" />
          <span className="hidden sm:inline">Chain</span>
          494949
        </div>
      </div>

      {/* ═══ Mobile dropdown ═══ */}
      {mobileOpen && (
        <div className="md:hidden win-menubar flex-wrap !gap-0">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="win-menubar-divider" />
          {externalLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
