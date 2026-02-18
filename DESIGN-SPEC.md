# Base Playbook — Design Specification v2

## Design Philosophy
This is not a blog. This is THE reference platform for building on Base. 
Every pixel must communicate: "This content is worth your time."

Think Binance Academy, not Medium. Think textbook, not blog post.

## Brand
- Primary: Base Blue #0052FF
- Dark: #0A0B0D
- Surface: #F8F9FB (warm light gray, not pure white)
- Accent warm: #FF6B35 (for CTAs that need to pop against blue)
- Success: #00C48C
- Text: #1A1A2E (softer than pure black)
- Text secondary: #6B7280

## What Makes It Feel Premium

### 1. Article Cover Images
Every guide needs a generated cover/hero image area. For v1, use a styled gradient header per category with an icon/illustration. NOT a plain white page with a title.

### 2. Key Takeaways Box
Top of every article — a highlighted box saying "What you'll learn:" with 3-4 bullet points extracted from the guide content. This signals VALUE before reading.

### 3. Visual Section Breaks  
Between major sections in guides: subtle dividers with category-colored accents, step numbers for how-to guides, callout boxes for important tips/warnings.

### 4. Rich Guide Cards (Homepage)
Not boring rectangles. Each card should have:
- A colored header strip or gradient based on category
- Category badge
- Title (bold, readable)
- One-line description
- Read time + difficulty
- Hover: subtle lift + shadow + blue accent appears

### 5. Homepage That Sells
- Hero: Bold statement + search bar or category quick-links
- "Popular Guides" section with LARGE featured cards (not a grid)
- Category sections with horizontal scroll or organized rows
- Social proof: "22 in-depth guides" "Trusted by Base builders"
- Sponsor section: clean, professional, shows value

### 6. Guide Reading Experience
- Full-width colored header per guide (category gradient + title overlay)
- Key Takeaways box immediately after header
- Breadcrumb: Home > Guides > Category > This Guide
- Content area: 720px max, beautiful typography
- Sidebar: sticky TOC with active highlighting
- Between sections: visual breathing room
- Code blocks: dark theme, copy button, language label
- Blockquotes: styled as "Pro Tips" with icon
- Tables: zebra striped, responsive
- End of article: "Next Guide" card + "Share this guide" + related guides

### 7. Typography That Commands Respect
- Headlines: Strong, bold, tight letter-spacing
- Body: Highly readable serif or sans, 18px base, 1.8 line height
- Code: Monospace with good contrast
- The fonts should feel EDITORIAL — like reading a well-designed magazine

### 8. Sponsored Tool Integration
Inside guides: "Recommended Tool" boxes that look native but clearly labeled
- Tool logo/icon area
- Name + one-line description
- "Featured" badge
- CTA button
- Blends with content but stands out enough to notice

### 9. Mobile First
- Single column, large touch targets
- Collapsible TOC
- Full-width cards
- Readable without zooming
- Fast loading (static generation)

## Component Architecture

### Header
- Logo: "Base Playbook" wordmark with blue accent
- Nav: Guides, Categories, Promote
- Mobile: hamburger menu
- Subtle blur background on scroll

### GuideCard (two variants)
- Featured: large, horizontal, with colored gradient header
- Standard: vertical card with category stripe at top

### ArticleHeader
- Full-width section with category-specific gradient background
- Title, description overlaid
- Meta: read time, difficulty, last updated, category badge

### KeyTakeaways
- Highlighted box with blue-left-border or subtle blue background
- "What you'll learn" heading
- 3-5 bullet points
- Appears right after ArticleHeader

### ProTip / Warning / Note
- Callout boxes within content
- Icon + colored left border
- Pro Tip = blue, Warning = orange, Note = gray

### SponsoredTool
- Subtle gradient background
- "Featured Tool" badge
- Tool name, description, link
- Looks premium, not like an ad

### TableOfContents
- Desktop: sticky right sidebar
- Mobile: collapsible accordion at top of article
- Active section highlighting
- Smooth scroll on click

### CategoryFilter
- Horizontal scrollable pills
- Active state with fill color
- "All" default selected
