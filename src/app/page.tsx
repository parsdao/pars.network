function WinPanel({ title, children, className = '' }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`win-panel ${className}`}>
      <div className="win-titlebar">
        <span className="win-titlebar-text">{title}</span>
        <div className="win-titlebar-controls">
          <span className="win-titlebar-btn">&ndash;</span>
          <span className="win-titlebar-btn">&square;</span>
          <span className="win-titlebar-btn">&times;</span>
        </div>
      </div>
      <div className="p-4">
        {children}
      </div>
    </div>
  )
}

function SpecRow({ label, value, gold = false }: { label: string; value: string; gold?: boolean }) {
  return (
    <div className="spec-row">
      <span className="spec-key">{label}</span>
      <span className={gold ? 'spec-val-gold' : 'spec-val'}>{value}</span>
    </div>
  )
}

export default function Home() {
  return (
    <>
      {/* ═══ Hero ═══ */}
      <section className="pt-16 pb-8 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 tracking-tight">
              <span className="text-gold">PARS</span>{' '}
              <span className="text-foreground">NETWORK</span>
            </h1>
            <div className="flex flex-wrap items-center gap-2 text-[13px] text-foreground/40">
              <span className="inline-flex items-center gap-1.5">
                <span className="led led-green" />
                Mainnet Live
              </span>
              <span className="text-foreground/15">|</span>
              <span>Sovereign L1</span>
              <span className="text-foreground/15">|</span>
              <span>Post-Quantum</span>
              <span className="text-foreground/15">|</span>
              <span>EVM Compatible</span>
            </div>
          </div>

          <p className="text-foreground/50 text-sm max-w-2xl mb-6">
            A sovereign Layer 1 blockchain built on Lux consensus with NIST post-quantum
            cryptography, private communications, and native DeFi infrastructure.
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            <a href="https://docs.pars.network" className="win-btn-primary">
              Documentation
            </a>
            <a href="https://explore.pars.network" className="win-btn">
              Explorer
            </a>
            <a href="https://bridge.pars.network" className="win-btn">
              Bridge
            </a>
            <a href="https://github.com/pars-network" className="win-btn">
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* ═══ System Specs ═══ */}
      <section id="specs" className="section">
        <div className="container-narrow">
          <WinPanel title="System Properties">
            <div className="grid sm:grid-cols-2 gap-px bg-[#1e1e23]">
              <div className="bg-[#16161b]">
                <SpecRow label="Chain ID" value="494949" gold />
                <SpecRow label="Block Time" value="<400ms" />
                <SpecRow label="Finality" value="Sub-second" />
                <SpecRow label="TPS Capacity" value="100,000+" />
              </div>
              <div className="bg-[#16161b]">
                <SpecRow label="Consensus" value="Lux (DAG-based)" />
                <SpecRow label="VM" value="EVM Compatible" />
                <SpecRow label="Key Encapsulation" value="ML-KEM-1024" gold />
                <SpecRow label="Digital Signatures" value="ML-DSA-87" gold />
              </div>
            </div>
          </WinPanel>
        </div>
      </section>

      {/* ═══ Technology ═══ */}
      <section id="technology" className="section">
        <div className="container-narrow">
          <div className="grid md:grid-cols-3 gap-4">
            <WinPanel title="Sovereign L1">
              <p className="text-foreground/50 text-[13px] mb-3">
                Independent Layer 1 on Lux consensus. Full control over protocol upgrades and governance.
              </p>
              <div className="win-panel-inset p-0">
                <SpecRow label="Consensus" value="Lux" />
                <SpecRow label="Finality" value="Sub-second" />
                <SpecRow label="Compatibility" value="EVM" />
              </div>
            </WinPanel>

            <WinPanel title="Post-Quantum Security">
              <p className="text-foreground/50 text-[13px] mb-3">
                NIST-standardized ML-KEM-1024 and ML-DSA-87. Cannot be disabled. Future-proof against quantum attacks.
              </p>
              <div className="win-panel-inset p-0">
                <SpecRow label="Standard" value="FIPS 203/204" gold />
                <SpecRow label="Signatures" value="Hybrid ML-DSA" />
                <SpecRow label="Key Exchange" value="ML-KEM-1024" />
              </div>
            </WinPanel>

            <WinPanel title="Native Precompiles">
              <p className="text-foreground/50 text-[13px] mb-3">
                High-performance operations at the EVM level. DEX, threshold sigs, and ZK proofs built into the chain.
              </p>
              <div className="win-panel-inset p-0">
                <SpecRow label="DEX" value="0x0400" gold />
                <SpecRow label="FROST" value="0x0800" gold />
                <SpecRow label="ZK Proofs" value="0x0900" gold />
              </div>
            </WinPanel>
          </div>
        </div>
      </section>

      {/* ═══ Identity ═══ */}
      <section id="identity" className="section">
        <div className="container-narrow">
          <WinPanel title="pars.id — Sovereign Identity">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-foreground/50 text-[13px] mb-4">
                  W3C-compliant decentralized identifiers with coercion resistance.
                  Your identity cannot be revoked, censored, or compromised under duress.
                </p>

                <div className="win-panel-inset p-0 mb-4">
                  <SpecRow label="did:pars" value="W3C DID" />
                  <SpecRow label="Coercion" value="Duress passwords → decoy identity" />
                  <SpecRow label="Control" value="Self-sovereign, no central authority" />
                  <SpecRow label="Recovery" value="Anonymous social recovery" />
                </div>

                <a href="https://docs.pars.network/identity" className="win-btn-primary text-[12px]">
                  Claim pars.id
                </a>
              </div>

              <div>
                <div className="text-[12px] text-foreground/40 mb-2">DID Format</div>
                <div className="win-panel-inset p-3">
                  <div className="mb-2">
                    <span className="text-gold">did:pars:</span>
                    <span className="text-foreground/60">0x1234...abcd</span>
                    <span className="text-foreground/25 ml-2">(address)</span>
                  </div>
                  <div>
                    <span className="text-gold">did:pars:</span>
                    <span className="text-foreground/60">ali.pars</span>
                    <span className="text-foreground/25 ml-2">(human-readable)</span>
                  </div>
                </div>

                <div className="text-[12px] text-foreground/40 mt-4 mb-2">Stake Requirements</div>
                <div className="win-panel-inset p-0">
                  <SpecRow label="1 char" value="100,000 PARS" />
                  <SpecRow label="2 chars" value="10,000 PARS" />
                  <SpecRow label="3 chars" value="1,000 PARS" />
                  <SpecRow label="4 chars" value="100 PARS" />
                  <SpecRow label="5+ chars" value="10 PARS" />
                </div>
              </div>
            </div>
          </WinPanel>
        </div>
      </section>

      {/* ═══ Session Protocol ═══ */}
      <section id="session" className="section">
        <div className="container-narrow">
          <div className="grid md:grid-cols-3 gap-4">
            <WinPanel title="Encrypted Messaging">
              <p className="text-foreground/50 text-[13px] mb-3">
                E2E encrypted communications with perfect forward secrecy. Stored on decentralized swarm nodes.
              </p>
              <div className="win-panel-inset p-0">
                <SpecRow label="Encryption" value="E2E" />
                <SpecRow label="Forward Secrecy" value="Yes" />
                <SpecRow label="Metadata" value="None" />
              </div>
            </WinPanel>

            <WinPanel title="Onion Routing">
              <p className="text-foreground/50 text-[13px] mb-3">
                Multi-hop encrypted routing through mesh network. No central servers or single points of failure.
              </p>
              <div className="win-panel-inset p-0">
                <SpecRow label="Hops" value="3 minimum" />
                <SpecRow label="Relay" value="Circuit-based" />
                <SpecRow label="Discovery" value="DHT" />
              </div>
            </WinPanel>

            <WinPanel title="Mobile Mesh">
              <p className="text-foreground/50 text-[13px] mb-3">
                Every device is a node. Works over Bluetooth, WiFi Direct, and internet. Functions during disruptions.
              </p>
              <div className="win-panel-inset p-0">
                <SpecRow label="Topology" value="P2P Mesh" />
                <SpecRow label="Offline" value="Supported" />
                <SpecRow label="Sync" value="CRDT" />
              </div>
            </WinPanel>
          </div>
        </div>
      </section>

      {/* ═══ DeFi ═══ */}
      <section id="defi" className="section">
        <div className="container-narrow">
          <div className="grid md:grid-cols-3 gap-4">
            <WinPanel title="Native DEX">
              <p className="text-foreground/50 text-[13px] mb-3">
                Uniswap v4-style AMM as native precompile. Sub-millisecond swaps, flash accounting, custom hooks.
              </p>
              <div className="win-panel-inset p-0">
                <SpecRow label="Throughput" value="443K swaps/sec" gold />
                <SpecRow label="Latency" value="2.3&micro;s" />
                <SpecRow label="Flash Loans" value="Supported" />
              </div>
            </WinPanel>

            <WinPanel title="Self-Repaying Loans">
              <p className="text-foreground/50 text-[13px] mb-3">
                Borrow against crypto. Yield automatically pays down debt. No liquidation risk on stable collateral.
              </p>
              <div className="win-panel-inset p-0">
                <SpecRow label="LTV" value="90%" />
                <SpecRow label="Repayment" value="Auto (yield)" />
                <SpecRow label="Liquidation" value="None" />
              </div>
            </WinPanel>

            <WinPanel title="Cross-Chain Bridge">
              <p className="text-foreground/50 text-[13px] mb-3">
                MPC-secured bridge to Ethereum, Arbitrum, and Lux ecosystem. Threshold signatures with 2/3 BFT.
              </p>
              <div className="win-panel-inset p-0">
                <SpecRow label="Security" value="MPC" />
                <SpecRow label="Chains" value="ETH, ARB, LUX" />
                <SpecRow label="Threshold" value="2/3 BFT" />
              </div>
            </WinPanel>
          </div>
        </div>
      </section>

      {/* ═══ Network Configuration ═══ */}
      <section id="network" className="section">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-4">
            <WinPanel title="Mainnet Configuration">
              <div className="win-panel-inset p-0">
                <SpecRow label="Network Name" value="Pars Network" />
                <SpecRow label="Chain ID" value="494949" gold />
                <SpecRow label="RPC URL" value="https://rpc.pars.network" />
                <SpecRow label="Symbol" value="PARS" gold />
                <SpecRow label="Explorer" value="explore.pars.network" />
              </div>
            </WinPanel>

            <WinPanel title="Testnet Configuration">
              <div className="win-panel-inset p-0">
                <SpecRow label="Network Name" value="Pars Testnet" />
                <SpecRow label="Chain ID" value="494950" />
                <SpecRow label="RPC URL" value="https://testnet.pars.network" />
                <SpecRow label="Symbol" value="PARS" />
                <SpecRow label="Explorer" value="testnet.explore.pars.network" />
              </div>
            </WinPanel>
          </div>
        </div>
      </section>

      {/* ═══ Validators ═══ */}
      <section id="validators" className="section">
        <div className="container-narrow">
          <WinPanel title="Validator Program">
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="win-panel-inset p-3 text-center">
                <div className="text-xl font-bold text-gold">15K</div>
                <div className="text-[12px] text-foreground/40">PARS Min. Stake</div>
              </div>
              <div className="win-panel-inset p-3 text-center">
                <div className="text-xl font-bold text-gold">8-12%</div>
                <div className="text-[12px] text-foreground/40">Annual Yield</div>
              </div>
              <div className="win-panel-inset p-3 text-center">
                <div className="text-xl font-bold text-gold">2 weeks</div>
                <div className="text-[12px] text-foreground/40">Unbonding Period</div>
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <a href="https://docs.pars.network/validators" className="win-btn-primary text-[12px]">
                Run a Validator
              </a>
              <a href="https://docs.pars.network/node" className="win-btn text-[12px]">
                Node Setup Guide
              </a>
            </div>
          </WinPanel>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="section pb-16">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-foreground/40 text-sm mb-4">
            Build wealth. Protect privacy. Preserve culture.<br />
            <span className="text-foreground/25">The empire fell. The people scattered. The network endures.</span>
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <a href="https://docs.pars.network" className="win-btn-primary">
              Get Started
            </a>
            <a href="https://discord.gg/pars" className="win-btn">
              Discord
            </a>
            <a href="https://github.com/pars-network" className="win-btn">
              GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
