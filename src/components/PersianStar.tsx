'use client'

import { useEffect, useRef } from 'react'

/**
 * Persian 8-Pointed Star (Khatam/Shamseh)
 *
 * A recursive fractal implementation of the traditional Persian star motif.
 * Used in mosques, palaces, and tilework across Persia for millennia.
 */

interface PersianStarProps {
  size?: number
  depth?: number
  className?: string
  animated?: boolean
}

export function PersianStarLogo({ size = 100, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      viewBox="-120 -120 240 240"
      width={size}
      height={size}
      className={className}
      aria-label="Pars Network Logo"
    >
      <defs>
        <linearGradient id="star-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f5d06f" />
          <stop offset="50%" stopColor="#caa24a" />
          <stop offset="100%" stopColor="#f3dc8f" />
        </linearGradient>
        <linearGradient id="star-blue" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#003355" />
          <stop offset="50%" stopColor="#00abff" />
          <stop offset="100%" stopColor="#66d0ff" />
        </linearGradient>
        <filter id="star-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Outer 8-pointed star */}
      <g filter="url(#star-glow)">
        <path
          d="M0,-100 L30,-60 L100,-40 L60,0 L100,40 L30,60 L0,100 L-30,60 L-100,40 L-60,0 L-100,-40 L-30,-60 Z"
          fill="none"
          stroke="url(#star-gold)"
          strokeWidth="4"
          strokeLinejoin="round"
        />
      </g>

      {/* Inner star with blue fill */}
      <path
        d="M0,-70 L22,-42 L70,-28 L42,0 L70,28 L22,42 L0,70 L-22,42 L-70,28 L-42,0 L-70,-28 L-22,-42 Z"
        fill="url(#star-blue)"
        stroke="url(#star-gold)"
        strokeWidth="3"
        strokeLinejoin="round"
      />

      {/* Recursive inner star */}
      <path
        d="M0,-45 L14,-27 L45,-18 L27,0 L45,18 L14,27 L0,45 L-14,27 L-45,18 L-27,0 L-45,-18 L-14,-27 Z"
        fill="none"
        stroke="url(#star-gold)"
        strokeWidth="2"
        strokeLinejoin="round"
        opacity="0.8"
      />

      {/* Interlaced circles */}
      <g fill="none" stroke="#eaf7ff" strokeWidth="1.5" opacity="0.6">
        <circle r="55" />
        <circle r="35" />
      </g>

      {/* Center rosette */}
      <circle r="8" fill="url(#star-gold)" />
      <path
        d="M0,-20 L6,-6 L20,0 L6,6 L0,20 L-6,6 L-20,0 L-6,-6 Z"
        fill="#002a47"
        stroke="url(#star-gold)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function PersianStarBackground({ className = '' }: { className?: string }) {
  const bgRef = useRef<HTMLDivElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const bg = bgRef.current
    const svg = svgRef.current
    if (!bg || !svg) return

    let targetX = 0, targetY = 0, curX = 0, curY = 0
    let animationId: number

    const onMove = (clientX: number, clientY: number) => {
      const rect = bg.getBoundingClientRect()
      const nx = (clientX - (rect.left + rect.width / 2)) / (rect.width / 2)
      const ny = (clientY - (rect.top + rect.height / 2)) / (rect.height / 2)
      targetX = Math.max(-1, Math.min(1, nx))
      targetY = Math.max(-1, Math.min(1, ny))
    }

    const handleMouseMove = (e: MouseEvent) => onMove(e.clientX, e.clientY)
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) onMove(e.touches[0].clientX, e.touches[0].clientY)
    }

    const tick = () => {
      curX += (targetX - curX) * 0.06
      curY += (targetY - curY) * 0.06

      const rotY = curX * 8
      const rotX = -curY * 8
      const panX = curX * 15
      const panY = curY * 15

      svg.style.transform = `translate(${panX}px, ${panY}px) rotateX(${rotX}deg) rotateY(${rotY}deg)`

      animationId = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('touchmove', handleTouchMove, { passive: true })
    tick()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('touchmove', handleTouchMove)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div
      ref={bgRef}
      className={`fixed inset-0 overflow-hidden pointer-events-none ${className}`}
      style={{ perspective: '900px' }}
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 1200px 800px at 50% 45%, #001a2e 0%, #05060a 60%, #020308 100%)'
        }}
      />

      <svg
        ref={svgRef}
        viewBox="-600 -600 1200 1200"
        className="absolute"
        style={{
          inset: '-12vmax',
          width: 'calc(100% + 24vmax)',
          height: 'calc(100% + 24vmax)',
          transformStyle: 'preserve-3d',
          filter: 'drop-shadow(0 30px 60px rgba(0,0,0,.45))',
        }}
        aria-hidden="true"
      >
        <defs>
          <filter id="bg-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="2.2" result="b" />
            <feColorMatrix
              in="b"
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.8 0"
              result="g"
            />
            <feMerge>
              <feMergeNode in="g" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <linearGradient id="bg-gold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#f5d06f" />
            <stop offset="0.55" stopColor="#caa24a" />
            <stop offset="1" stopColor="#f3dc8f" />
          </linearGradient>

          <linearGradient id="bg-blue" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor="#003355" />
            <stop offset="0.55" stopColor="#00abff" />
            <stop offset="1" stopColor="#66d0ff" />
          </linearGradient>

          {/* 8-pointed star motif */}
          <symbol id="motif" viewBox="-220 -220 440 440">
            <g fill="none" stroke="url(#bg-gold)" strokeWidth="10" strokeLinejoin="round">
              <path d="M0,-210 L60,-120 L210,-60 L120,0 L210,60 L60,120 L0,210 L-60,120 L-210,60 L-120,0 L-210,-60 L-60,-120 Z" />
            </g>
            <g filter="url(#bg-glow)">
              <path
                d="M0,-150 L45,-85 L150,-45 L85,0 L150,45 L45,85 L0,150 L-45,85 L-150,45 L-85,0 L-150,-45 L-45,-85 Z"
                fill="url(#bg-blue)"
                stroke="url(#bg-gold)"
                strokeWidth="8"
                strokeLinejoin="round"
              />
            </g>
            <g fill="none" stroke="#eaf7ff" strokeWidth="6" opacity="0.85" strokeLinecap="round">
              <circle r="110" />
              <circle r="85" opacity="0.7" />
            </g>
            <g>
              <circle r="14" fill="url(#bg-gold)" />
              <path
                d="M0,-38 L12,-12 L38,0 L12,12 L0,38 L-12,12 L-38,0 L-12,-12 Z"
                fill="#002a47"
                stroke="url(#bg-gold)"
                strokeWidth="4"
                strokeLinejoin="round"
              />
            </g>
          </symbol>
        </defs>

        {/* Layer 1: distant field */}
        <g opacity="0.25" filter="url(#bg-glow)">
          <use href="#motif" x="-420" y="-420" />
          <use href="#motif" x="0" y="-420" />
          <use href="#motif" x="420" y="-420" />
          <use href="#motif" x="-420" y="0" />
          <use href="#motif" x="420" y="0" />
          <use href="#motif" x="-420" y="420" />
          <use href="#motif" x="0" y="420" />
          <use href="#motif" x="420" y="420" />
        </g>

        {/* Layer 2: mid */}
        <g opacity="0.4" filter="url(#bg-glow)">
          <use href="#motif" transform="scale(1.5) rotate(22)" opacity="0.5" />
        </g>

        {/* Layer 3: center focus */}
        <g opacity="0.85">
          <use href="#motif" transform="scale(2.2)" />
        </g>

        {/* Layer 4: highlight */}
        <g opacity="0.2">
          <use href="#motif" transform="scale(2.8) rotate(11)" />
        </g>
      </svg>

      {/* Grain overlay */}
      <div
        className="absolute inset-[-20%] opacity-[0.08] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='.28'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  )
}

export default PersianStarLogo
