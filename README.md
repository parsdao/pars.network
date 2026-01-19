# Pars Network - Braided Sovereignty Architecture

**Tagline:** Private coordination, public legitimacy.

## Overview

Pars is a privacy-preserving coordination layer that enables censorship-resilient, offline-tolerant communication with verifiable governance. The architecture uses a three-ribbon "braided sovereignty" model where content stays private off-chain while the chain verifies commitments and authorizes outcomes.

## Architecture Layers

### 1. Edge Layer (CivicOS Clients)
Local-first devices that never expose plaintext to the network.

**Components:**
- Encrypted local store
- Key management (PQ/hybrid cryptography)
- Offline queue with deterministic message IDs

**Differentiator:** Offline-first: local queue + deterministic IDs

### 2. Mesh Layer (sessiond Swarms)
Decentralized relay network with no trusted servers.

**Components:**
- Store-and-forward messaging (TTL-based)
- Relay/rendezvous services
- Encrypted state sync (CRDT-based)

**Differentiator:** Swarms: committee replication, no trusted server, encrypted CRDT

### 3. Finality Layer (Pars Chain)
Blockchain verification and governance without content disclosure.

**Components:**
- **ThresholdVM**: Threshold attestations, equivocation detection
- **PlatformVM Session**: Deterministic session lifecycle
- **EVM Policy/Exec**: Governance, treasury, policy, public receipts
- **Receipt Ledger**: Immutable audit trail

**Differentiator:** Proof-gated actions: threshold domains, receipts anchored to finality

## Cross-Layer Flows

### Flow 1: Encrypted Communications (Edge ↔ Mesh)
**Properties:** PQ/hybrid encrypted, store-and-forward, offline-tolerant
**Rule:** This flow never touches Finality.

### Flow 2: State Anchors (Mesh → Finality)
Periodic Merkle root anchors: `H(MembershipRoot || DocRoot || Epoch)`

### Flow 3: Attestation Braid (Mesh → ThresholdVM → EVM)
1. Swarm → ThresholdVM: Request attestation `(domain, msgHash)`
2. ThresholdVM → EVM: Threshold signature attestation

**Key Property:** Verifiable authorization without disclosure

### Flow 4: Receipts (Finality → Edge)
Public receipts, governance outcomes, and audit trails returned to clients.

## Security Properties

| Property | Mechanism |
|----------|-----------|
| Censorship-resilient | Distributed routing + store/forward + no single point |
| Intermittent-connectivity tolerant | Queue + retry + TTL |
| Privacy-preserving | E2E encryption + minimal metadata |
| Verifiable governance | Attestations + receipts |

## Core Invariant

> Content stays private off-chain; chain verifies commitments + authorizes outcomes.

## Quick Reference

### Ribbon Titles
- **Edge:** CivicOS Edge (Clients)
- **Mesh:** CivicOS Mesh (sessiond Swarms)
- **Finality:** Pars Finality (Verification + Governance)

### Flow Labels
1. **Encrypted Payloads (Edge ↔ Mesh):** PQ/hybrid encrypted, store-and-forward, offline tolerant
2. **State Anchors (Mesh → Finality):** Merkle roots: membership/doc/ops (periodic)
3. **Attestations (Mesh → ThresholdVM → EVM):** ThresholdSign(domain, msgHash)
4. **Receipts (EVM → Edge):** Public receipts / audit trails / governance outcomes

## Related Projects

- [pars](https://github.com/parsdao/pars) - EVM precompiles for PQ crypto, ZK, FHE, threshold signatures
- [session](https://github.com/parsdao/session) - Session protocol implementation
- [civicos](https://github.com/parsdao/civicos) - Privacy-preserving civic coordination platform
