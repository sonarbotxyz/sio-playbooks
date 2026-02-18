# ADDITIONAL FACTS (supplement to REWRITE-BRIEF.md)

## Doppler (doppler.lol)
- Onchain protocol for launching tokens through **price discovery auctions**
- Creates bonding curves with configurable market cap ranges
- Teams like Zora, Paragraph, and Noice use Doppler
- Has an SDK: `@whetstone-research/doppler-sdk`
- Bankr uses Doppler under the hood for its token launches
- Supports multicurve auctions — multiple price curves defined by market cap ranges (USD)
- Config: supply curves, vesting schedules, inflation mechanics, governance, fees, treasury

## Bankr (bankr.bot)
- Launch tokens directly from X by tagging @bankr
- Uses Doppler tech under the hood
- Has agent skills (agents can interact with it)
- Very active community
- Grok (xAI) launched $DRB using Bankr in March 2025

## Clanker (@clanker_world on X)
- Competing X-based token launcher
- Deployed their own X agent to launch tokens
- Lower fees than Bankr
- Both Bankr and Clanker are actively competing

## Base App (replaced Coinbase Wallet)
- Live on App Store/Play Store, called "Base" 
- Mixes social features + mini apps + trading
- Built on Farcaster and Zora
- Has MiniKit SDK for building mini apps: `npx create-onchain --mini`
- Mini apps run within Farcaster frames
- Hooks: useMiniKit, useAddFrame, useAuthenticate, useComposeCast, etc.
- Cross-client compatible (Base App, Farcaster clients, others)
- Docs: https://docs.base.org/onchainkit/latest/components/minikit/overview
- Farcaster Frames mainly replaced by Base App mini apps

## x402 Protocol (github.com/coinbase/x402)
- Open standard for internet-native payments built on HTTP
- Uses HTTP 402 Payment Required status code
- Server adds 1 line of middleware, client wraps fetch — that's it
- Network/token/currency agnostic (crypto + fiat)
- SDKs: TypeScript, Python, Go
- Packages: @x402/core, @x402/fetch, @x402/express, @x402/next, @x402/paywall
- Any API endpoint can be paywalled with USDC
- Facilitator handles verification/execution — client/server don't deal with gas, RPC, etc.
- Growing ecosystem: x402.org/ecosystem
- THIS IS HUGE for the payments guide — cover it extensively with code examples

## BMX (bmx.trade)
- Perpetuals/derivatives DEX on Base
- Worth mentioning in DeFi guide alongside Aerodrome and Morpho

## Base Funding Pathways (docs.base.org/get-started/get-funded)
- **Builder Rewards Program** (builderscore.xyz): 2 ETH distributed weekly to active builders. No minimum project size.
- **Builder Grants**: 1-5 ETH retroactive grants for shipped projects. Apply at paragraph.com/@grants.base.eth
- **OP Retro Funding**: For public goods. Track impact on atlas.optimism.io
- **Base Batches** (basebatches.xyz): The founder track. Mentorship, resources, Coinbase Ventures intros. Recurring cohorts.

## Bridging
- Official Base Bridge (bridge.base.org)
- **Relay** — fast and popular
- **ChangeNow** (changenow.org) — also recommended
- Across still works too

## OnchainKit
- Official React component library from Coinbase for building on Base
- Includes MiniKit for Base App mini apps
- Actively maintained, widely used
- `npx create-onchain` scaffolds projects

## Key People / KOLs
- @mrdegenwolf — one of the best Base KOLs (this is Degen, our human)

## NFT Landscape
- Be honest: NFT meta has shifted away on Base
- Zora pivoted from NFTs to content coins (and that pivot is considered a failure)
- No major NFT activity worth hyping
- Content coins / social tokens are the new primitive

## Virtuals ACP (Agent Commerce Protocol)
- Live on app.virtuals.io/acp
- Agents can list services and transact with each other
- First agent marketplace — agents paying agents for services
- Growing ecosystem of agent-to-agent commerce
