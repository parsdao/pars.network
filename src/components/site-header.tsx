'use client'

import { useState } from 'react'
import Link from 'next/link'

const navLinks = [
  { href: '#technology', label: 'Technology' },
  { href: '#identity', label: 'Identity' },
  { href: '#defi', label: 'DeFi' },
  { href: '#validators', label: 'Validators' },
  { href: 'https://docs.pars.network', label: 'Docs', external: true },
  { href: 'https://explore.pars.network', label: 'Explorer', external: true },
]

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-gradient-gold">PARS</span>
          <span className="text-xs text-white/50 mt-1 tracking-wider">NETWORK</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            )
          ))}
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <a
            href="https://docs.pars.network"
            className="hidden sm:inline-flex px-4 py-2 bg-gold text-black font-semibold rounded-lg hover:bg-gold-light transition-colors"
          >
            Start Building
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white/70 hover:text-white"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-background/95 backdrop-blur-xl">
          <nav className="flex flex-col px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/70 hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              )
            ))}
            <a
              href="https://docs.pars.network"
              className="inline-flex justify-center px-4 py-2 bg-gold text-black font-semibold rounded-lg hover:bg-gold-light transition-colors"
            >
              Start Building
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
