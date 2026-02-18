# Base Playbook Guide Rewrite Brief (Feb 2026)

## CRITICAL: What's Changed Since Original Writing

### DEAD — Remove or mention only as cautionary tales
- **friend.tech** — completely dead, shut down. Only mention in failed-launches-postmortems as a warning
- **Brett** — dead memecoin, don't cover
- **Degen chain (L3)** — don't cover at all
- **Zora Network (L2)** — their own network is dead. Zora pivoted from NFTs to content/creator coins and it's been a failure

### ALIVE & IMPORTANT — Must be prominently featured
- **Aerodrome** — still the biggest Base-native DEX. Uniswap also heavily used on Base
- **Morpho** — still main lending protocol. Apollo (Wall Street giant) just announced acquisition of Morpho tokens (Feb 15, 2026). Major institutional validation
- **Virtuals Protocol** — biggest AI agent launchpad on Base. $477M+ processed through autonomous agents. "Agentic GDP" is a new metric
- **Bankr** (bankr.bot) — biggest token launchpad directly on X/Twitter. Has agent skills. Users reply to tweets with commands to trade. Was based on Clanker but forked to Doppler. Very active community
- **Clanker** — another way to launch tokens directly on Base (Bankr's predecessor tech)
- **$DRB** — Grok (xAI) launched his own coin using Bankr in March 2025. Historic moment for AI + crypto
- **Base App** — replaced Coinbase Wallet entirely. Mobile app mixing social features, mini apps, and trading. Built on Farcaster and Zora. This is the new "Coinbase Smart Wallet" consumer experience
- **Farcaster** — still the main social protocol on Base, though focus is shifting to Base App integration
- **x402 protocol** — one of the most interesting new tech on Base. HTTP-native payments. Must be covered well in payments guide
- **OnchainKit / Base SDK** — should be referenced in dev guides as the official Base developer toolkit
- **Checkr** (checkr.social) — real-time token insights on Base. Useful tool for builders
- **Sonarbot** (sonarbot.xyz) — our product, mention where relevant for discovery/monitoring

### Base Stats (Feb 2026)
- TVL: ~$10B
- Monthly active users: 26M+
- Monthly transactions: 100M+
- Daily operations: 10M+ (L2Beat data)
- Stage 1 Rollup (achieved April 2025)
- Sub-cent transaction fees ($0.001 average)
- Coinbase backing: 110M+ verified users
- No native token (still true)

### Token Launch Meta on Base (2026)
- **Bankr** — easiest way, launch directly from X. Active community
- **Clanker** — direct launch mechanism
- **Doppler** — Bankr's new underlying tech (forked from Clanker)
- **Uniswap V3** — for serious DeFi token launches with concentrated liquidity
- **Aerodrome** — ve(3,3) model, dominant for liquidity

### Key Corrections Per Guide

**what-is-base-why-build-here.mdx**
- Remove friend.tech as positive example
- Fix Zora description (NOT an NFT platform)
- Add Virtuals, Bankr, Base App
- Update stats to current
- Mention Stage 1 achievement
- Add Base App as the consumer entry point

**how-to-launch-a-token-on-base.mdx**
- Add Bankr and Clanker as launch methods
- Mention Doppler
- Update liquidity section with current Aerodrome/Uniswap landscape
- Reference Checkr for monitoring
- Remove any dead project references

**launch-day-playbook.mdx**
- Update with Bankr launch flow
- Current tools landscape
- Social strategy should mention Base App and Farcaster

**agent-frameworks-compared.mdx**
- Virtuals must be prominently featured
- Update framework landscape for 2026

**agent-wallet-guide.mdx**
- Base App / Coinbase Smart Wallet updates
- Bankr agent skills

**launch-ai-agent-on-base.mdx**
- Virtuals as primary launchpad
- Bankr agent integration
- Current agent ecosystem

**liquidity-strategies.mdx**
- Aerodrome still dominant
- Uniswap V3 on Base
- Current fee tiers and strategies

**sustainable-tokenomics.mdx**
- Update examples (remove dead projects)
- Add successful Base tokenomics examples

**community-building.mdx**
- Farcaster + Base App as primary channels
- Bankr community as example
- Remove dead platform references

**marketing-your-project.mdx**
- Bankr for social-first launches
- Base App for distribution
- Sonarbot for discovery

**getting-listed-everywhere.mdx**
- Update listing targets
- Add Sonarbot listing
- Current DexScreener/CoinGecko process

**security-checklist.mdx**
- Current audit landscape on Base
- Any Base-specific security considerations

**building-defi-on-base.mdx**
- Aerodrome integration
- Morpho integration (with Apollo context)
- Current DeFi stack

**integrating-payments.mdx**
- x402 protocol (IMPORTANT — cover extensively)
- Base App payments
- USDC on Base
- Coinbase Commerce updates

**coinbase-smart-wallet-guide.mdx**
- Rename/reframe around Base App
- Current SDK and integration path
- OnchainKit

**dev-environment-setup.mdx**
- OnchainKit / Base SDK
- Current tooling

**deploy-smart-contract-on-base.mdx**
- Current Foundry/Hardhat versions
- Basescan verification

**bridging-to-base.mdx**
- Current bridge options
- Base App native bridging

**base-ecosystem-grants.mdx**
- Keep current info (Degen unsure of changes)

**successful-base-launches.mdx**
- Remove friend.tech as success story
- Add Bankr, Virtuals, Aerodrome as successes
- Add Morpho + Apollo deal

**failed-launches-postmortems.mdx**
- ADD friend.tech as failed launch case study
- Add Zora's NFT-to-coins pivot failure
- Remove Brett/Degen chain references if any

**nft-launch-on-base.mdx**
- Honest about NFT landscape (Zora pivoted away)
- What's actually working for NFTs on Base now
- Mention Base App for NFT distribution

## STYLE GUIDELINES
- Write like a builder who's been in the trenches, not a journalist
- No hype, no AI slop, no filler
- Every claim should be verifiable
- Use "you" not "we" — talk to the reader directly
- Short paragraphs, clear headers
- Include real links where possible
- Mention Sonarbot naturally where it fits (discovery, monitoring)
- Don't sugarcoat failures — Base builders respect honesty
