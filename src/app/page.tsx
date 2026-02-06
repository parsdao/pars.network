const stats = [
  { value: '<400ms', label: 'Block Time' },
  { value: '494949', label: 'Chain ID' },
  { value: 'NIST PQ', label: 'ML-KEM + ML-DSA' },
  { value: '100K+', label: 'TPS Capacity' },
]

const techFeatures = [
  {
    title: 'Sovereign L1',
    desc: 'Independent Layer 1 blockchain with full control over protocol upgrades, governance, and consensus. No central authority.',
    icon: '🏛️',
    specs: ['Sub-second Finality', 'EVM Compatible', 'Self-Governing'],
  },
  {
    title: 'Post-Quantum Security',
    desc: 'NIST-standardized ML-KEM-1024 and ML-DSA-87 cryptography. Cannot be disabled. Future-proof against quantum attacks.',
    icon: '🔐',
    specs: ['FIPS 203/204', 'Hybrid Signatures', 'Quantum-Safe Keys'],
  },
  {
    title: 'Native Precompiles',
    desc: 'High-performance operations at the EVM level. DEX, threshold signatures, FHE, and ZK proofs built into the chain.',
    icon: '⚡',
    specs: ['DEX @ 0x0400', 'FROST @ 0x0800', 'ZK @ 0x0900'],
  },
]

const identityFeatures = [
  {
    title: 'did:pars',
    desc: 'W3C-compliant DIDs on Pars Network',
    icon: '🆔',
  },
  {
    title: 'Coercion Resistant',
    desc: 'Duress passwords reveal decoy identity',
    icon: '🛡️',
  },
  {
    title: 'Self-Sovereign',
    desc: 'No central authority, you control your keys',
    icon: '🔑',
  },
  {
    title: 'Anonymous Recovery',
    desc: 'Social recovery without revealing identity',
    icon: '🔄',
  },
]

const sessionFeatures = [
  {
    title: 'Encrypted Messaging',
    desc: 'End-to-end encrypted communications with perfect forward secrecy. Messages stored on decentralized swarm nodes.',
    icon: '💬',
    specs: ['E2E Encrypted', 'Forward Secrecy', 'No Metadata'],
  },
  {
    title: 'Onion Routing',
    desc: 'Multi-hop encrypted routing through mesh network. 3-hop minimum. No central servers or single points of failure.',
    icon: '🧅',
    specs: ['3-Hop Routing', 'Circuit Relay', 'DHT Discovery'],
  },
  {
    title: 'Mobile Mesh',
    desc: 'Every device is a node. Works over Bluetooth, WiFi Direct, and internet. Functions during network disruptions.',
    icon: '📱',
    specs: ['P2P Mesh', 'Offline Capable', 'CRDT Sync'],
  },
]

const defiFeatures = [
  {
    title: 'Native DEX',
    desc: 'Uniswap v4-style AMM as native precompile. Sub-millisecond swaps, flash accounting, custom hooks.',
    specs: ['443K swaps/sec', '2.3μs latency', 'Flash Loans'],
  },
  {
    title: 'Self-Repaying Loans',
    desc: 'Borrow against your crypto. Yield automatically pays down debt. No liquidation risk on stable collateral.',
    specs: ['90% LTV', 'Auto-Repay', 'No Liquidation'],
  },
  {
    title: 'Cross-Chain Bridge',
    desc: 'MPC-secured bridge to Ethereum, Arbitrum, and other chains. Threshold signatures with 2/3 BFT security.',
    specs: ['MPC Secured', 'Multi-Chain', '2/3 Threshold'],
  },
]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-16 pb-20 px-4 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-radial-gold" />

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 mb-8">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-white/70">Chain ID: 494949 — Mainnet Live</span>
          </div>

          {/* Hero Logo */}
          <div className="mb-8">
            <img
              src="/assets/logo.png"
              alt="Pars Network - Persian 8-Pointed Star"
              className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 mx-auto animate-float drop-shadow-2xl"
            />
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance">
            <span className="text-gradient-blue">Pars</span>{' '}
            <span className="text-white">Network</span>
          </h1>

          <p className="text-xl sm:text-2xl text-white/60 mb-4 max-w-3xl mx-auto">
            Unstoppable Networks for The People
          </p>

          <p className="text-lg text-white/50 mb-12 max-w-3xl mx-auto text-balance">
            The cryptography-based blockchain and networking stack for building local and wide-area networks
            with readily available hardware. A tool for building thousands of networks—networks without
            kill-switches, surveillance, censorship and control.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a href="/docs" className="btn-primary">
              Start Building
            </a>
            <a href="https://explore.pars.network" className="btn-secondary">
              Explorer
            </a>
            <a href="https://github.com/parsdao" className="btn-secondary">
              GitHub
            </a>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {stats.map((stat, i) => (
              <div key={i} className="card">
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-white/50">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="section border-t border-white/5">
        <div className="container-narrow">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Networks for <span className="text-gradient-blue">Human Beings</span>
            </h2>
            <p className="text-white/60 max-w-3xl mx-auto text-balance">
              Pars Network is not one network. It is a tool for building thousands of networks.
              Networks that can freely interoperate, associate and disassociate with each other.
              Networks without hierarchical or bureaucratic structures to control or manage them.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            <div className="card">
              <h3 className="text-xl font-bold mb-4 text-gradient-blue">For Communities</h3>
              <p className="text-white/60">
                Create applications that respect and empower the autonomy and sovereignty of communities
                and individuals. Secure digital communication that cannot be subjected to outside control,
                manipulation or censorship.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold mb-4 text-gradient-blue">At Any Scale</h3>
              <p className="text-white/60">
                Build both small and potentially planetary-scale networks, ensuring individuals
                and communities full sovereignty over their own network segments. Works even
                in adverse conditions with very high latency and extremely low bandwidth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="section border-t border-white/5">
        <div className="container-narrow">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-gradient-blue">Sovereign</span> Technology
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Post-quantum cryptography, AI-native blockchain, and privacy-first design.
              Every component built for coercion resistance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {techFeatures.map((feature, i) => (
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

      {/* Identity Section */}
      <section id="identity" className="section bg-gradient-to-b from-transparent via-blue/5 to-transparent">
        <div className="container-narrow">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-gradient-blue">pars.id</span> — Sovereign Identity
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Decentralized identifiers with coercion resistance.
              Your identity cannot be revoked, censored, or compromised under duress.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {identityFeatures.map((item, i) => (
              <a
                key={i}
                href="https://pars.id"
                className="card card-hover group"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue transition-colors">
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
                <span className="text-blue">did:pars:</span>
                <span className="text-white/70">0x1234...abcd</span>
                <span className="text-white/40 ml-2">(address)</span>
              </div>
              <div>
                <span className="text-blue">did:pars:</span>
                <span className="text-white/70">ali.pars</span>
                <span className="text-white/40 ml-2">(human-readable)</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-white/10">
              <a href="https://pars.id" className="text-white hover:text-white/80 transition-colors text-sm font-medium">
                Claim your pars.id →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Cryptographic Guarantees */}
      <section className="section border-t border-white/5">
        <div className="container-narrow">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Cryptographic <span className="text-gradient-blue">Guarantees</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Fundamental properties enforced by mathematics, not policy. These cannot be disabled.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="card">
              <div className="text-2xl mb-3">🔒</div>
              <h3 className="font-bold mb-2">No Source Addresses</h3>
              <p className="text-white/50 text-sm">No packets include information about origin address, place, machine or person.</p>
            </div>
            <div className="card">
              <div className="text-2xl mb-3">🌐</div>
              <h3 className="font-bold mb-2">No Central Control</h3>
              <p className="text-white/50 text-sm">Anyone can allocate addresses when they need them. No permission required.</p>
            </div>
            <div className="card">
              <div className="text-2xl mb-3">⚡</div>
              <h3 className="font-bold mb-2">Instant Reachability</h3>
              <p className="text-white/50 text-sm">New addresses become globally reachable in seconds to minutes.</p>
            </div>
            <div className="card">
              <div className="text-2xl mb-3">🔑</div>
              <h3 className="font-bold mb-2">Portable Addresses</h3>
              <p className="text-white/50 text-sm">Addresses are self-sovereign and can be moved anywhere while remaining reachable.</p>
            </div>
            <div className="card">
              <div className="text-2xl mb-3">🛡️</div>
              <h3 className="font-bold mb-2">Encryption by Default</h3>
              <p className="text-white/50 text-sm">All communication uses strong modern encryption. Cannot establish unencrypted links.</p>
            </div>
            <div className="card">
              <div className="text-2xl mb-3">⏩</div>
              <h3 className="font-bold mb-2">Forward Secrecy</h3>
              <p className="text-white/50 text-sm">All encryption keys are ephemeral. Compromising keys reveals nothing past.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Session Protocol Section */}
      <section id="session" className="section border-t border-white/5">
        <div className="container-narrow">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Private Communications</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              End-to-end encrypted messaging with onion routing.
              No servers, no metadata, no compromise.
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

          {/* App Download */}
          <div className="mt-12 text-center">
            <p className="text-white/50 mb-4">Available on all platforms</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://apps.apple.com/app/pars" className="btn-secondary">
                iOS App
              </a>
              <a href="https://play.google.com/store/apps/details?id=network.pars" className="btn-secondary">
                Android
              </a>
              <a href="https://github.com/parsdao/pars-desktop/releases" className="btn-secondary">
                Desktop
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* DeFi Section */}
      <section id="defi" className="section bg-gradient-to-b from-transparent via-blue/5 to-transparent">
        <div className="container-narrow">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">DeFi Infrastructure</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Native financial primitives built into the chain.
              Trade, lend, and bridge with institutional-grade performance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {defiFeatures.map((feature, i) => (
              <div key={i} className="card">
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

      {/* Network Configuration */}
      <section className="section border-t border-white/5">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Network Configuration</h2>
            <p className="text-white/60">Add Pars Network to your wallet</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card">
              <h3 className="text-lg font-semibold mb-4 text-white">Mainnet</h3>
              <div className="space-y-3 font-mono text-sm">
                <div className="flex justify-between">
                  <span className="text-white/50">Network Name</span>
                  <span>Pars Network</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/50">Chain ID</span>
                  <span>494949</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/50">RPC URL</span>
                  <span>https://rpc.pars.network</span>
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
              <h3 className="text-lg font-semibold mb-4 text-white/70">Testnet</h3>
              <div className="space-y-3 font-mono text-sm">
                <div className="flex justify-between">
                  <span className="text-white/50">Network Name</span>
                  <span>Pars Testnet</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/50">Chain ID</span>
                  <span>494950</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/50">RPC URL</span>
                  <span>https://testnet.pars.network</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/50">Symbol</span>
                  <span>PARS</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/50">Explorer</span>
                  <span>testnet.explore.pars.network</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Validators Section */}
      <section id="validators" className="section bg-gradient-to-t from-gold/5 to-transparent">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Run a Validator</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Secure the network and earn rewards. Minimum stake: 15,000 PARS.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="card text-center">
              <div className="text-3xl font-bold text-white mb-2">15K</div>
              <div className="text-sm text-white/50 mb-4">PARS Minimum Stake</div>
              <div className="text-xs text-white/30">Standard Validator</div>
            </div>
            <div className="card text-center">
              <div className="text-3xl font-bold text-white mb-2">8-12%</div>
              <div className="text-sm text-white/50 mb-4">Annual Yield</div>
              <div className="text-xs text-white/30">Varies with stake</div>
            </div>
            <div className="card text-center">
              <div className="text-3xl font-bold text-white mb-2">2 weeks</div>
              <div className="text-sm text-white/50 mb-4">Unbonding Period</div>
              <div className="text-xs text-white/30">No slashing risk</div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a href="/docs/validators" className="btn-primary">
              Validator Documentation
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Build Your Sovereign Network
          </h2>
          <p className="text-white/60 mb-8 max-w-2xl mx-auto text-balance">
            Operate your own communication networks. Cover vast areas with independent,
            interconnectable and autonomous networks. Unstoppable networks for the people.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://pars.id" className="btn-primary">
              Claim Your Identity
            </a>
            <a href="https://discord.gg/pars" className="btn-secondary">
              Join Discord
            </a>
            <a href="https://github.com/parsdao" className="btn-secondary">
              GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
