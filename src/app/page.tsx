const stats = [
  { value: '<400ms', label: 'Block Time' },
  { value: '494949', label: 'Chain ID' },
  { value: 'PQ', label: 'Post-Quantum' },
  { value: '∞', label: 'Mesh Nodes' },
]

const identityFeatures = [
  {
    title: 'did:pars',
    desc: 'W3C-compliant DIDs on Pars Network',
    icon: '🆔',
    link: 'https://pars.id',
  },
  {
    title: 'Coercion Resistant',
    desc: 'Duress passwords reveal decoy identity',
    icon: '🛡️',
    link: 'https://pars.id',
  },
  {
    title: 'Self-Sovereign',
    desc: 'No central authority, you control your keys',
    icon: '🔐',
    link: 'https://pars.id',
  },
  {
    title: 'Anonymous Recovery',
    desc: 'Social recovery without revealing identity',
    icon: '🔄',
    link: 'https://pars.id',
  },
]

const sessionFeatures = [
  {
    title: 'Post-Quantum',
    desc: 'ML-KEM-1024 + ML-DSA-87 encryption (NIST Level 5). Cannot be disabled.',
    icon: '🔐',
    specs: ['FIPS 204/205', 'Mandatory PQ', 'Forward Secrecy'],
  },
  {
    title: 'Coercion Resistant',
    desc: 'Duress codes, dead man switch, panic wipe. Plausible deniability built-in.',
    icon: '🛡️',
    specs: ['Duress Passwords', 'Hidden Volumes', 'Panic Wipe'],
  },
  {
    title: 'Onion Routing',
    desc: 'Multi-hop encrypted routing through mesh network. No central servers.',
    icon: '🧅',
    specs: ['3-Hop Default', 'Circuit Relay', 'DHT Discovery'],
  },
]

const meshFeatures = [
  {
    title: 'Mobile Embedded Node',
    desc: 'Every user is a node. DHT-based peer discovery. No central servers required.',
    features: ['Bluetooth Mesh', 'WiFi Direct', 'USB Sneakernet', 'Starlink Ready'],
  },
  {
    title: 'Offline Operation',
    desc: 'CRDT/DAG state syncs when reconnected. No data loss, no conflicts.',
    features: ['DAG Consensus', 'CRDT Merge', 'Causal Ordering', 'Eventual Consistency'],
  },
]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-4 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-radial-gold" />

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 mb-8">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-white/70">Chain ID: 494949 — Live on Mainnet</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance">
            <span className="text-gradient-gold">PARS</span>{' '}
            <span className="text-white">NETWORK</span>
          </h1>

          <p className="text-xl sm:text-2xl text-white/60 mb-4 max-w-3xl mx-auto">
            Braided Sovereignty
          </p>

          <p className="text-lg text-white/50 mb-12 max-w-2xl mx-auto text-balance">
            Session-based private communications with post-quantum security
            and coercion resistance. Built for the Persian diaspora.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a href="https://pars.id" className="btn-primary">
              Mint pars.id Identity
            </a>
            <a href="https://docs.pars.network/node" className="btn-secondary">
              Run a Node
            </a>
            <a href="https://bridge.pars.network" className="btn-secondary">
              Bridge Assets
            </a>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {stats.map((stat, i) => (
              <div key={i} className="card">
                <div className="text-2xl font-bold text-gold">{stat.value}</div>
                <div className="text-sm text-white/50">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Identity Section */}
      <section id="identity" className="section border-t border-white/5">
        <div className="container-narrow">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-gradient-gold">pars.id</span> — Sovereign Identity
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Decentralized identifiers with coercion resistance. Your identity, your control.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {identityFeatures.map((item, i) => (
              <a
                key={i}
                href={item.link}
                className="card card-hover group"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-gold transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/50 text-sm">{item.desc}</p>
              </a>
            ))}
          </div>

          {/* DID Format */}
          <div className="mt-12 card max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold mb-4">DID Format</h3>
            <div className="font-mono text-sm space-y-2">
              <div>
                <span className="text-gold">did:pars:</span>
                <span className="text-white/70">0x1234...abcd</span>
              </div>
              <div>
                <span className="text-gold">did:pars:</span>
                <span className="text-white/70">ali.pars</span>
                <span className="text-white/40"> (human-readable)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Session Protocol Section */}
      <section id="session" className="section bg-gradient-to-b from-transparent via-gold/5 to-transparent">
        <div className="container-narrow">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Session Protocol</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Private permissionless messaging with onion routing and post-quantum encryption.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {sessionFeatures.map((feature, i) => (
              <div key={i} className="card">
                <div className="text-5xl mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-white/60 mb-4">{feature.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {feature.specs.map((spec, j) => (
                    <span key={j} className="badge">{spec}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mesh Network Section */}
      <section id="mesh" className="section border-t border-white/5">
        <div className="container-narrow">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Immortal Mesh Network</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              As long as one Persian lives with the network running, it continues forever.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {meshFeatures.map((item, i) => (
              <div key={i} className="card">
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/60 mb-6">{item.desc}</p>
                <div className="grid grid-cols-2 gap-3">
                  {item.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm">
                      <span className="text-gold">✓</span>
                      <span className="text-white/70">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Network Info */}
      <section className="section bg-gradient-to-t from-gold/5 to-transparent">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Network Configuration</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card">
              <h3 className="text-lg font-semibold mb-4 text-gold">Mainnet</h3>
              <div className="space-y-3 font-mono text-sm">
                <div className="flex justify-between">
                  <span className="text-white/50">Chain ID</span>
                  <span>494949</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/50">RPC</span>
                  <span>rpc.pars.network</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/50">Symbol</span>
                  <span>PARS</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/50">Explorer</span>
                  <span>explore.pars.network</span>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold mb-4 text-pink-400">Sparkle Pony (Alternate)</h3>
              <div className="space-y-3 font-mono text-sm">
                <div className="flex justify-between">
                  <span className="text-white/50">Chain ID</span>
                  <span>494949</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/50">RPC</span>
                  <span>rpc.sparklepony.xyz</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/50">Symbol</span>
                  <span>SPC</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/50">Explorer</span>
                  <span>explore.sparklepony.xyz</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Join the Network
          </h2>
          <p className="text-white/60 mb-8 max-w-2xl mx-auto text-balance">
            Build wealth. Fund public goods. Protect privacy. The empire fell. The people scattered. The code endures.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://pars.id" className="btn-primary">
              Mint Your Identity
            </a>
            <a href="https://discord.gg/pars" className="btn-secondary">
              Join Discord
            </a>
            <a href="https://github.com/pars-network" className="btn-secondary">
              GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
