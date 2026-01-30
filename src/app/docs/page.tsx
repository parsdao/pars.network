import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Documentation',
  description: 'Pars Network developer documentation - build on the sovereign L1 with post-quantum security.',
}

const quickStart = [
  {
    title: 'Add Network to Wallet',
    description: 'Configure MetaMask or any EVM wallet',
    code: `Network: Pars Network
Chain ID: 494949
RPC: https://rpc.pars.network
Symbol: PARS
Explorer: https://explore.pars.network`,
  },
  {
    title: 'Get Testnet PARS',
    description: 'Request testnet tokens from the faucet',
    code: `curl -X POST https://faucet.pars.network/request \\
  -H "Content-Type: application/json" \\
  -d '{"address": "0xYourAddress"}'`,
  },
  {
    title: 'Deploy a Contract',
    description: 'Use standard EVM tooling',
    code: `npx hardhat run scripts/deploy.ts --network pars`,
  },
]

const sections = [
  {
    title: 'Network',
    items: [
      { title: 'Chain Configuration', href: '#chain-config', desc: 'RPC endpoints, chain IDs, network params' },
      { title: 'Validators', href: '#validators', desc: 'Run a validator node, staking requirements' },
      { title: 'Explorer', href: 'https://explore.pars.network', desc: 'Block explorer and analytics', external: true },
    ],
  },
  {
    title: 'Development',
    items: [
      { title: 'Smart Contracts', href: '#contracts', desc: 'Deploy and interact with contracts' },
      { title: 'Precompiles', href: '#precompiles', desc: 'Native DEX, PQ crypto, threshold sigs' },
      { title: 'SDK', href: '#sdk', desc: 'JavaScript/TypeScript libraries' },
    ],
  },
  {
    title: 'Identity',
    items: [
      { title: 'did:pars', href: '#did', desc: 'Decentralized identifiers on Pars' },
      { title: 'Coercion Resistance', href: '#coercion', desc: 'Duress passwords and decoy identities' },
      { title: 'Recovery', href: '#recovery', desc: 'Social recovery without revealing identity' },
    ],
  },
  {
    title: 'Resources',
    items: [
      { title: 'GitHub', href: 'https://github.com/parsdao', desc: 'Source code and examples', external: true },
      { title: 'Discord', href: 'https://discord.gg/pars', desc: 'Developer community', external: true },
      { title: 'Blog', href: 'https://blog.pars.network', desc: 'Technical articles and updates', external: true },
    ],
  },
]

export default function DocsPage() {
  return (
    <div className="pt-12 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient-gold">Documentation</span>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto">
            Build on Pars Network — a sovereign L1 with post-quantum security,
            native precompiles, and sub-second finality.
          </p>
        </div>

        {/* Quick Start */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8">Quick Start</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {quickStart.map((item, i) => (
              <div key={i} className="card">
                <div className="text-sm text-gold mb-2">Step {i + 1}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-white/50 text-sm mb-4">{item.description}</p>
                <pre className="bg-black/50 rounded-lg p-4 text-xs text-white/70 overflow-x-auto">
                  <code>{item.code}</code>
                </pre>
              </div>
            ))}
          </div>
        </section>

        {/* Chain Configuration */}
        <section id="chain-config" className="mb-20">
          <h2 className="text-2xl font-bold mb-8">Chain Configuration</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-lg font-semibold mb-4 text-gold">Mainnet</h3>
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
                  <span className="text-gold">https://rpc.pars.network</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/50">WebSocket</span>
                  <span className="text-gold">wss://ws.pars.network</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/50">Symbol</span>
                  <span>PARS</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/50">Block Explorer</span>
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
                  <span className="text-gold">https://testnet-rpc.pars.network</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/50">WebSocket</span>
                  <span className="text-gold">wss://testnet-ws.pars.network</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/50">Symbol</span>
                  <span>PARS</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/50">Faucet</span>
                  <span>faucet.pars.network</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Precompiles */}
        <section id="precompiles" className="mb-20">
          <h2 className="text-2xl font-bold mb-8">Native Precompiles</h2>
          <p className="text-white/60 mb-6">
            Pars includes high-performance native precompiles for DeFi, cryptography, and identity.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-white/50 font-medium">Address</th>
                  <th className="text-left py-3 px-4 text-white/50 font-medium">Name</th>
                  <th className="text-left py-3 px-4 text-white/50 font-medium">Description</th>
                </tr>
              </thead>
              <tbody className="font-mono">
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-gold">0x0400</td>
                  <td className="py-3 px-4">PoolManager</td>
                  <td className="py-3 px-4 text-white/60">Uniswap v4-style DEX singleton</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-gold">0x0401</td>
                  <td className="py-3 px-4">SwapRouter</td>
                  <td className="py-3 px-4 text-white/60">Optimized swap routing</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-gold">0x0600</td>
                  <td className="py-3 px-4">ML-DSA</td>
                  <td className="py-3 px-4 text-white/60">NIST post-quantum signatures (FIPS 204)</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-gold">0x0603</td>
                  <td className="py-3 px-4">ML-KEM</td>
                  <td className="py-3 px-4 text-white/60">NIST post-quantum key encapsulation (FIPS 203)</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-gold">0x0800</td>
                  <td className="py-3 px-4">FROST</td>
                  <td className="py-3 px-4 text-white/60">Threshold Schnorr signatures</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-gold">0x0900</td>
                  <td className="py-3 px-4">ZK Verify</td>
                  <td className="py-3 px-4 text-white/60">Groth16/PLONK proof verification</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Validators */}
        <section id="validators" className="mb-20">
          <h2 className="text-2xl font-bold mb-8">Running a Validator</h2>
          <div className="card">
            <h3 className="text-lg font-semibold mb-4">Requirements</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div>
                <div className="text-2xl font-bold text-gold">15,000</div>
                <div className="text-sm text-white/50">PARS minimum stake</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gold">8-12%</div>
                <div className="text-sm text-white/50">Annual yield</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gold">2 weeks</div>
                <div className="text-sm text-white/50">Unbonding period</div>
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-4">Hardware</h3>
            <ul className="text-white/60 space-y-2 text-sm">
              <li>• 8+ CPU cores</li>
              <li>• 32GB RAM</li>
              <li>• 1TB NVMe SSD</li>
              <li>• 100 Mbps network</li>
            </ul>
            <div className="mt-6">
              <pre className="bg-black/50 rounded-lg p-4 text-xs text-white/70 overflow-x-auto">
                <code>{`# Install parsd
curl -sSL https://get.pars.network | bash

# Initialize node
parsd init --network mainnet

# Start validator
parsd start --validator`}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* Documentation Index */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8">Documentation</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sections.map((section) => (
              <div key={section.title}>
                <h3 className="text-sm font-semibold text-gold mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item.title}>
                      <a
                        href={item.href}
                        target={item.external ? '_blank' : undefined}
                        rel={item.external ? 'noopener noreferrer' : undefined}
                        className="block group"
                      >
                        <div className="text-sm font-medium text-white group-hover:text-gold transition-colors">
                          {item.title}
                          {item.external && <span className="text-white/30 ml-1">↗</span>}
                        </div>
                        <div className="text-xs text-white/40">{item.desc}</div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Need Help */}
        <section className="text-center">
          <div className="card max-w-2xl mx-auto">
            <h2 className="text-xl font-bold mb-4">Need Help?</h2>
            <p className="text-white/60 mb-6">
              Join our developer community for support and discussions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://discord.gg/pars" className="btn-primary">
                Join Discord
              </a>
              <a href="https://github.com/parsdao" className="btn-secondary">
                GitHub
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
