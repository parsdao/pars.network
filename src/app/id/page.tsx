'use client'

import { useState } from 'react'

export default function ParsIdentityPage() {
  const [handle, setHandle] = useState('')
  const [isConnected, setIsConnected] = useState(false)

  const stakeRequired = handle.length === 0 ? 0 :
    handle.length === 1 ? 100000 :
    handle.length === 2 ? 10000 :
    handle.length === 3 ? 1000 :
    handle.length === 4 ? 100 : 10

  return (
    <div className="pt-12 pb-20 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Claim Your <span className="text-gradient-gold">pars.id</span>
          </h1>
          <p className="text-white/60">
            Sovereign identity on Pars Network with coercion resistance
          </p>
        </div>

        {/* Wallet Connection */}
        <div className="mb-8 text-center">
          <button
            onClick={() => setIsConnected(!isConnected)}
            className={isConnected ? 'btn-secondary' : 'btn-primary'}
          >
            {isConnected ? '0x1234...abcd' : 'Connect Wallet'}
          </button>
        </div>

        {/* Identity Form */}
        <div className="card">
          <div className="mb-6">
            <label className="block text-sm text-white/50 mb-2">Choose your handle</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gold font-mono">@</span>
              <input
                type="text"
                value={handle}
                onChange={(e) => setHandle(e.target.value.toLowerCase().replace(/[^a-z0-9]/g, ''))}
                placeholder="yourname"
                className="w-full pl-8 pr-20 py-4 bg-black/50 border border-white/20 rounded-xl text-white placeholder-white/30 focus:border-gold focus:outline-none font-mono text-lg transition-colors"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 font-mono">.pars</span>
            </div>
          </div>

          {/* Preview */}
          {handle && (
            <div className="mb-6 p-4 bg-black/30 rounded-xl">
              <div className="text-sm text-white/50 mb-2">Your Identity</div>
              <div className="font-mono">
                <div className="text-lg text-white">@{handle}.pars</div>
                <div className="text-sm text-gold">did:pars:0x...</div>
              </div>
            </div>
          )}

          {/* Stake Info */}
          <div className="mb-6 p-4 bg-gold/10 rounded-xl border border-gold/20">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-sm text-white/50">Stake Required</div>
                <div className="text-2xl font-bold text-gold">
                  {stakeRequired.toLocaleString()} PARS
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-white/50">{handle.length || '?'} characters</div>
                <div className="text-xs text-white/30">
                  {handle.length <= 1 ? 'Ultra Premium' :
                   handle.length === 2 ? 'Super Premium' :
                   handle.length === 3 ? 'Premium' :
                   handle.length === 4 ? 'Standard' : 'Basic'}
                </div>
              </div>
            </div>
          </div>

          {/* Security Features */}
          <div className="mb-6 grid grid-cols-3 gap-3">
            {[
              { icon: '🔐', label: 'Post-Quantum' },
              { icon: '🛡️', label: 'Coercion Resistant' },
              { icon: '🧅', label: 'Onion Routing' },
            ].map((feature, i) => (
              <div key={i} className="p-3 bg-black/30 rounded-lg text-center">
                <div className="text-xl mb-1">{feature.icon}</div>
                <div className="text-xs text-white/50">{feature.label}</div>
              </div>
            ))}
          </div>

          {/* Mint Button */}
          <button
            disabled={!isConnected || !handle}
            className="w-full py-4 bg-gold text-black font-bold rounded-xl hover:bg-gold-light transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {!isConnected ? 'Connect Wallet to Continue' :
             !handle ? 'Enter a Handle' :
             `Mint @${handle}.pars`}
          </button>

          {/* Info */}
          <div className="mt-6 text-center text-xs text-white/30">
            Stake is returned when you release your identity
          </div>
        </div>

        {/* DID Methods */}
        <div className="mt-12">
          <h2 className="text-xl font-bold mb-6 text-center">All DID Methods</h2>
          <div className="grid grid-cols-2 gap-4">
            {[
              { method: 'did:pars', network: 'Pars Network', color: 'text-gold', link: '/id' },
              { method: 'did:ai', network: 'Hanzo Network', color: 'text-cyan-400', link: 'https://hanzo.id' },
              { method: 'did:lux', network: 'Lux Network', color: 'text-amber-500', link: 'https://lux.id' },
              { method: 'did:zoo', network: 'Zoo Network', color: 'text-purple-400', link: 'https://zoo.id' },
            ].map((did, i) => (
              <a
                key={i}
                href={did.link}
                className="card card-hover"
              >
                <div className={`font-mono text-lg ${did.color}`}>{did.method}</div>
                <div className="text-sm text-white/50">{did.network}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
