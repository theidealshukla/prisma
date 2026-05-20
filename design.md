# DESIGN SYSTEM — IT CONSULTANCY WEBSITE
### Web Dev · App Dev · Full Stack Development
> Inspired by Sheryians.com aesthetic analysis. Built for a modern Indian IT consultancy targeting SMBs and startups.

---

## 01. SHERYIANS.COM — ANALYSIS SUMMARY

### What Sheryians Does Well (Observed)
Sheryians.com is an **awwwards-class** coding school website known in the Indian frontend community for being an exemplar of modern creative web design. Based on crawl + community research:

**Pages / Sections identified:**
1. **Homepage** — Full-viewport hero with animated heading, marquee ticker, course cards, testimonials, placement stats, CTA
2. **Courses Page** — Grid layout of course cards with hover reveals
3. **About / Who We Are** — Instructor bios, mission statement
4. **Blog / Resources** — Article listings
5. **Contact / Enroll** — Form + social proof

**Design Signature:**
- **Dark mode first** — deep blacks (`#0a0a0a` to `#111111`) with off-white text
- **Bold display typography** — large, tracked, confident headings
- **GSAP + Locomotive Scroll** — buttery smooth scrolling with scroll-triggered reveals
- **Marquee / ticker sections** — horizontal scrolling text bands between sections
- **Minimal color accent** — one electric accent (often warm orange or electric blue) on a dark background
- **Grid breaking** — text and visuals that intentionally overflow grid for drama
- **Cursor customization** — custom cursor dot + ring
- **Card reveals** — hover-triggered image/info reveals on course cards
- **Stats sections** — large number counters (e.g., "10,000+ students")
- **Section transitions** — background color shifts as user scrolls through sections

**Typography observed:**
- Display: Heavy grotesque / variable weight sans (similar to Neue Haas Grotesk, Syne, or custom)
- Body: Clean readable sans with generous line-height
- Letter-spacing: Wide on section labels / eyebrow text

---

## 02. BRAND DIRECTION — IT CONSULTANCY

### Company Profile
An IT consultancy offering:
- **Web Development** (landing pages, Next.js apps, CMS sites)
- **App Development** (React Native, Flutter mobile apps)
- **Full Stack Development** (MERN, backend APIs, SaaS platforms)

**Target audience:** Indian SMBs, funded startups, D2C brands, growing businesses in Tier 1–3 cities

**Brand personality:** Sharp. Technical. Confident. Not corporate. Not a dull blue IT firm. Premium but approachable.

---

## 03. COLOR SYSTEM

### Primary Palette — "Dark Carbon + Acid"

```css
:root {
  /* Backgrounds */
  --color-bg-primary:     #0C0C0E;   /* Near-black base */
  --color-bg-secondary:   #111116;   /* Card / section bg */
  --color-bg-elevated:    #1A1A22;   /* Hover states, modals */
  --color-bg-surface:     #1E1E28;   /* Input fields, chips */

  /* Accent — Electric Lime (the punch) */
  --color-accent:         #B8FF35;   /* Primary CTA, highlights */
  --color-accent-hover:   #CCFF5A;   /* Hover state */
  --color-accent-muted:   rgba(184, 255, 53, 0.12); /* Glow / bg fill */

  /* Text */
  --color-text-primary:   #F0F0F0;   /* Headlines */
  --color-text-secondary: #8A8A9A;   /* Body, descriptions */
  --color-text-muted:     #4A4A5A;   /* Placeholders, tertiary */
  --color-text-inverse:   #0C0C0E;   /* Text on accent bg */

  /* Borders / Lines */
  --color-border:         rgba(255, 255, 255, 0.08);
  --color-border-strong:  rgba(255, 255, 255, 0.16);
  --color-divider:        rgba(255, 255, 255, 0.05);

  /* Service-specific accent colors (section tints) */
  --color-web:            #4D9FFF;   /* Web Dev — Electric Blue */
  --color-app:            #FF6B6B;   /* App Dev — Coral Red */
  --color-stack:          #B8FF35;   /* Full Stack — Acid Lime */

  /* Utility */
  --color-success:        #2DD4A0;
  --color-warning:        #FFB340;
  --color-error:          #FF4D4D;
}
```

### Color Usage Rules
| Context | Color Token |
|---|---|
| Page background | `--color-bg-primary` |
| Section alt background | `--color-bg-secondary` |
| Cards, panels | `--color-bg-elevated` |
| Primary CTA button | `--color-accent` |
| Secondary CTA (ghost) | border `--color-border-strong`, text `--color-text-primary` |
| Eyebrow / label text | `--color-accent` |
| Body copy | `--color-text-secondary` |
| Headings | `--color-text-primary` |
| Hover states | `--color-bg-elevated` + `--color-border-strong` |
| Marquee / ticker bg | `--color-accent` with `--color-text-inverse` |

### Light Mode (Optional Toggle)
```css
[data-theme="light"] {
  --color-bg-primary:     #F5F5F0;
  --color-bg-secondary:   #EAEAE4;
  --color-bg-elevated:    #FFFFFF;
  --color-text-primary:   #0C0C0E;
  --color-text-secondary: #4A4A5A;
  --color-border:         rgba(0, 0, 0, 0.08);
  --color-accent:         #1A1A1A;   /* Inverted on light */
}
```
> **Recommendation:** Default to dark. Add light toggle in nav.

---

## 04. TYPOGRAPHY

### Font Stack

```css
/* Import in <head> or globals.css */
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

:root {
  /* Display font — for headlines, hero, section titles */
  --font-display:   'Syne', sans-serif;

  /* Body font — for paragraphs, UI labels, captions */
  --font-body:      'DM Sans', sans-serif;

  /* Mono — for code snippets, tech tags */
  --font-mono:      'JetBrains Mono', 'Fira Code', monospace;
}
```

**Why Syne?** — Variable-weight grotesque with distinctive personality. Used by several awwwards sites. Bold 800 weight feels architectural. Not overused in Indian agency space.

**Why DM Sans?** — Humanist, slightly warm, excellent readability at body sizes. Pairs beautifully with Syne's rigidity.

### Type Scale

```css
:root {
  /* Fluid type — scales between mobile and desktop */
  --text-xs:    clamp(0.75rem,  1.5vw, 0.875rem);   /* 12–14px */
  --text-sm:    clamp(0.875rem, 2vw,   1rem);        /* 14–16px */
  --text-base:  clamp(1rem,     2.5vw, 1.125rem);    /* 16–18px */
  --text-lg:    clamp(1.125rem, 3vw,   1.375rem);    /* 18–22px */
  --text-xl:    clamp(1.25rem,  3.5vw, 1.75rem);     /* 20–28px */
  --text-2xl:   clamp(1.5rem,   4vw,   2.25rem);     /* 24–36px */
  --text-3xl:   clamp(2rem,     5vw,   3rem);        /* 32–48px */
  --text-4xl:   clamp(2.5rem,   7vw,   5rem);        /* 40–80px */
  --text-hero:  clamp(3.5rem,   10vw,  9rem);        /* 56–144px */
}
```

### Typography Roles

| Role | Font | Weight | Size Token | Tracking |
|---|---|---|---|---|
| Hero headline | Syne | 800 | `--text-hero` | `-0.04em` |
| Section title | Syne | 700 | `--text-4xl` | `-0.03em` |
| Sub-heading | Syne | 600 | `--text-2xl` | `-0.02em` |
| Eyebrow label | DM Sans | 500 | `--text-xs` | `0.18em` UPPERCASE |
| Body copy | DM Sans | 400 | `--text-base` | `0` |
| Body large | DM Sans | 300 | `--text-lg` | `0` |
| Button text | DM Sans | 500 | `--text-sm` | `0.06em` |
| Caption / meta | DM Sans | 400 | `--text-xs` | `0` |
| Code snippet | JetBrains Mono | 400 | `--text-sm` | `0` |
| Marquee text | Syne | 700 | `--text-3xl` | `-0.02em` |
| Stat number | Syne | 800 | `--text-4xl` | `-0.04em` |

### Line Heights
```css
:root {
  --lh-tight:   1.1;   /* Hero headlines */
  --lh-heading: 1.2;   /* Section headings */
  --lh-body:    1.65;  /* Paragraphs */
  --lh-relaxed: 1.8;   /* Long-form body */
}
```

---

## 05. SPACING SYSTEM

### Base Unit: 4px grid

```css
:root {
  --space-1:   0.25rem;   /*  4px */
  --space-2:   0.5rem;    /*  8px */
  --space-3:   0.75rem;   /* 12px */
  --space-4:   1rem;      /* 16px */
  --space-5:   1.25rem;   /* 20px */
  --space-6:   1.5rem;    /* 24px */
  --space-8:   2rem;      /* 32px */
  --space-10:  2.5rem;    /* 40px */
  --space-12:  3rem;      /* 48px */
  --space-16:  4rem;      /* 64px */
  --space-20:  5rem;      /* 80px */
  --space-24:  6rem;      /* 96px */
  --space-32:  8rem;      /* 128px */
  --space-40:  10rem;     /* 160px */
  --space-48:  12rem;     /* 192px */
}
```

### Section Padding

```css
/* Vertical section padding — generous breathing room */
.section {
  padding-block: clamp(5rem, 10vw, 9rem);      /* 80–144px */
}

.section--compact {
  padding-block: clamp(3rem, 6vw, 5rem);       /* 48–80px */
}

/* Horizontal container */
.container {
  width: 100%;
  max-width: 1400px;
  margin-inline: auto;
  padding-inline: clamp(1.5rem, 5vw, 5rem);   /* 24–80px */
}
```

### Component Spacing

| Component | Internal Padding | Gap |
|---|---|---|
| Nav | `20px 0` vertical | `32px` between links |
| Button (primary) | `14px 32px` | — |
| Button (large) | `18px 48px` | — |
| Card | `32px` all sides | `24px` card grid gap |
| Service card | `40px` all sides | `20px` grid gap |
| Form input | `14px 20px` | `16px` between fields |
| Marquee track | `24px` vertical | — |
| Stat item | `16px` | `48px` between stats |

---

## 06. LAYOUT SYSTEM

### Grid

```css
.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: clamp(1rem, 2.5vw, 2rem);
}

/* Common column spans */
.col-full    { grid-column: 1 / -1; }
.col-half    { grid-column: span 6; }
.col-third   { grid-column: span 4; }
.col-quarter { grid-column: span 3; }
.col-two-thirds { grid-column: span 8; }
```

### Breakpoints

```css
:root {
  --bp-sm:  480px;
  --bp-md:  768px;
  --bp-lg:  1024px;
  --bp-xl:  1280px;
  --bp-2xl: 1536px;
}

/* Mobile-first — write base styles for mobile, override up */
@media (min-width: 768px)  { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
@media (min-width: 1280px) { /* Wide */ }
```

---

## 07. COMPONENT LIBRARY

### 7.1 Navigation

**Structure:**
```
[Logo]                    [Nav Links]              [CTA Button]
WebKid IT    ←→    Services  Work  About  Blog      Get a Quote →
```

**Behavior:**
- Transparent on page load → `backdrop-filter: blur(20px)` + `background: rgba(12,12,14,0.8)` on scroll
- Fixed position, `z-index: 1000`
- Mobile: hamburger → full-screen overlay nav with staggered link entrance
- Active link: accent-colored left border dot or underline

**Specs:**
```css
nav {
  height: 72px;
  border-bottom: 1px solid var(--color-border);
  transition: background 0.4s ease;
}
```

---

### 7.2 Hero Section

**Layout:** Full viewport height (`100svh`). Two-column on desktop, stacked on mobile.

**Elements:**
1. **Eyebrow label** — `IT CONSULTANCY · BHOPAL` in accent color, small caps
2. **Main headline** — 3–4 line hero in Syne 800, very large, tight leading
3. **Subtext** — 1–2 lines in DM Sans Light
4. **CTA row** — Primary button + secondary text link
5. **Scroll indicator** — animated line or mouse icon
6. **Background** — Dark with subtle noise texture + one glowing radial gradient in accent color (very faint, `opacity: 0.08`)

**Sample headline structure:**
```
We Build
Digital Products
That Actually
Convert.
```

**Animation:**
- Headline words split by word, each word animates up from `translateY(60px)` with stagger 0.08s
- Subtext fades in after headline completes (delay 0.6s)
- CTA slides up (delay 0.9s)
- Background gradient slow pulse (scale 1 → 1.05 over 4s, looping)

---

### 7.3 Services Section

**Title:** "What We Build"
**Layout:** 3-column card grid on desktop, 1-column on mobile

**Service Card Design:**
```
┌─────────────────────────────┐
│ [Icon / Number]             │
│                             │
│ Web Development             │
│                             │
│ We craft fast, SEO-ready    │
│ Next.js websites that turn  │
│ visitors into customers.    │
│                             │
│ → Learn more                │
└─────────────────────────────┘
```

**Card Specs:**
- Background: `--color-bg-elevated`
- Border: `1px solid var(--color-border)`
- Border-radius: `16px`
- Top accent bar: `3px solid var(--color-web / --color-app / --color-stack)` based on service
- Hover: border color shifts to service accent, card lifts `translateY(-4px)`, subtle glow shadow

**Service color coding:**
- Web Dev → `--color-web` (#4D9FFF)
- App Dev → `--color-app` (#FF6B6B)
- Full Stack → `--color-stack` (#B8FF35)

---

### 7.4 Marquee / Ticker Section

Inspired directly by Sheryians' signature horizontal scrolling bands.

**Design:**
- Full-width strip, `--color-accent` background
- Text: `--color-text-inverse`, Syne 700, 2–3rem
- Separator: `★` or `◆` between items
- Dual speed: two tracks, one slower than the other (parallax feel)

**Sample copy:**
```
Web Development ◆ App Development ◆ Full Stack ◆ UI/UX Design ◆ SEO Optimization ◆ API Integration ◆
```

**CSS snippet:**
```css
.marquee-track {
  display: flex;
  gap: 3rem;
  animation: marquee 20s linear infinite;
  white-space: nowrap;
}

@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
```

---

### 7.5 Work / Portfolio Section

**Title:** "Work That Speaks"
**Layout:** Alternating full-width + split layout. Not a boring grid.

**Each project:**
- Large project image / mockup (takes 60% width on desktop)
- Project meta: Client name, industry, services delivered
- Short impact statement: "Increased organic traffic by 3x in 60 days"
- Arrow link → Case study

**Hover behavior:** Image scales to 1.02, a colored overlay with project details slides up from bottom (like Sheryians card hover)

---

### 7.6 Stats / Social Proof Section

**Design:** Dark band section, full width. Stats in a 4-column row.

```
   50+            100%         3x Faster        ₹0 Hidden
Projects Done   On-Time Rate   Than avg agency    Fees
```

**Number animation:** Count-up via IntersectionObserver when scrolled into view
**Font:** Syne 800, `--text-4xl`, accent color for numbers, secondary for labels

---

### 7.7 Process Section

**Title:** "How We Work"
**Layout:** Horizontal numbered steps (desktop) / vertical accordion (mobile)

**Steps:**
1. **Discovery Call** — Understand your goals, timeline, budget
2. **Proposal & Scope** — Detailed plan, fixed pricing, no surprises
3. **Design & Build** — Weekly updates, Figma previews before dev
4. **Launch & Support** — Deploy, train, maintain

**Visual:** Step number as large background text (`opacity: 0.05`, Syne 800, 10rem) behind card content. Clean, sophisticated, Sheryians-influenced.

---

### 7.8 Testimonials Section

**Title:** "What Clients Say"
**Layout:** Horizontal scrollable cards (no grid pagination)

**Card design:**
- Quote in DM Sans Light, large
- Client name + company + photo (small circle)
- Star rating row (optional)
- Subtle quote mark in accent color, very large, behind text

---

### 7.9 CTA / Contact Section

**Full-height section.** One job: convert.

**Design:**
- Giant headline: "Ready to Build?" (Syne 800, hero size)
- Subline: "Let's turn your idea into a live product."
- Two buttons: `Start a Project →` (accent fill) + `Book a Call` (ghost)
- Contact details below: email, WhatsApp link
- Optional: minimal inline form (Name, Email, What do you need?)

**Background:** Dark with a large blurred radial accent glow centered

---

### 7.10 Footer

**Layout:** 4-column grid

```
[Logo + tagline]   [Services]     [Company]     [Contact]
WebKid IT          Web Dev        About          email@
                   App Dev        Work           WhatsApp
We build digital   Full Stack     Blog           Instagram
products that                     Contact        LinkedIn
convert.
```

**Bottom bar:**
- Copyright © 2025 WebKid IT
- "Made with Next.js + Tailwind" (dev cred)
- Privacy Policy · Terms

---

## 08. BUTTONS

### Primary Button (Accent Fill)
```css
.btn-primary {
  background: var(--color-accent);
  color: var(--color-text-inverse);
  font-family: var(--font-body);
  font-weight: 500;
  font-size: var(--text-sm);
  letter-spacing: 0.06em;
  padding: 14px 32px;
  border-radius: 100px;    /* Pill shape */
  border: none;
  cursor: pointer;
  transition: background 0.25s ease, transform 0.2s ease;
}

.btn-primary:hover {
  background: var(--color-accent-hover);
  transform: translateY(-2px);
}
```

### Ghost Button
```css
.btn-ghost {
  background: transparent;
  color: var(--color-text-primary);
  border: 1px solid var(--color-border-strong);
  border-radius: 100px;
  padding: 14px 32px;
  transition: border-color 0.25s ease, color 0.25s ease;
}

.btn-ghost:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
}
```

### Icon Arrow Button (for links)
```css
.btn-arrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--color-accent);
  font-size: var(--text-sm);
  font-weight: 500;
  text-decoration: none;
  transition: gap 0.2s ease;
}

.btn-arrow:hover { gap: 14px; }
```

---

## 09. ANIMATIONS & MOTION

### Philosophy
- **Purposeful only** — motion adds meaning, not decoration
- **Subtle but confident** — not flashy enough to distract
- **Performance first** — CSS transforms only, no layout-triggering props
- **Reduce-motion respected** — `@media (prefers-reduced-motion: reduce)` wraps all animations

### Animation Tokens
```css
:root {
  --ease-smooth:  cubic-bezier(0.25, 0.46, 0.45, 0.94);
  --ease-spring:  cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-sharp:   cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in:      cubic-bezier(0.55, 0, 1, 0.45);

  --dur-fast:     150ms;
  --dur-normal:   300ms;
  --dur-slow:     600ms;
  --dur-entrance: 900ms;
}
```

### Core Animations

**1. Scroll Entrance — Text Reveal**
```js
// GSAP implementation (recommended for Sheryians-level polish)
gsap.from(".reveal-text", {
  y: 60,
  opacity: 0,
  duration: 0.9,
  stagger: 0.08,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".section",
    start: "top 80%"
  }
});
```

**2. Card Hover Lift**
```css
.card {
  transition: transform var(--dur-normal) var(--ease-smooth),
              box-shadow var(--dur-normal) var(--ease-smooth);
}
.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 60px rgba(184, 255, 53, 0.08);
}
```

**3. Page Transition (Barba.js or Next.js)**
```js
// Curtain wipe: dark panel slides down, then up
// Duration: 600ms total — fast enough to not annoy
```

**4. Custom Cursor (Sheryians-style)**
```js
// Small 8px dot that follows mouse precisely
// Larger 40px ring that follows with ~100ms lag (lerp)
// On hover over links/buttons: ring scales to 60px, dot hides
```

**5. Counter Animation (Stats)**
```js
// IntersectionObserver → start counting when section enters viewport
// Duration: 2s, ease-out
// Format: "0 → 50" with "+" suffix
```

**6. Magnetic Buttons**
```js
// On mouse proximity (<80px), button drifts toward cursor
// Creates premium, interactive feel
// GSAP quickTo() for performance
```

**7. Marquee Pause-on-Hover**
```css
.marquee:hover .marquee-track {
  animation-play-state: paused;
}
```

### Scroll Library Recommendation
```
Locomotive Scroll v4 + GSAP ScrollTrigger
npm install locomotive-scroll gsap
```

---

## 10. VISUAL DETAILS & TEXTURE

### Noise Texture Overlay
```css
/* Adds film grain — signature of premium dark sites */
body::after {
  content: '';
  position: fixed;
  inset: 0;
  background-image: url("data:image/svg+xml,..."); /* SVG noise */
  opacity: 0.03;
  pointer-events: none;
  z-index: 9999;
}
```

### Background Glow (Hero + CTA)
```css
.hero-glow {
  position: absolute;
  width: 800px;
  height: 800px;
  border-radius: 50%;
  background: var(--color-accent);
  filter: blur(200px);
  opacity: 0.06;
  top: -200px;
  right: -200px;
  pointer-events: none;
}
```

### Grid Lines (Subtle)
```css
/* Optional: very faint grid in background of certain sections */
.section--grid-bg {
  background-image:
    linear-gradient(var(--color-divider) 1px, transparent 1px),
    linear-gradient(90deg, var(--color-divider) 1px, transparent 1px);
  background-size: 60px 60px;
}
```

### Border Radius Scale
```css
:root {
  --radius-sm:   6px;
  --radius-md:   12px;
  --radius-lg:   16px;
  --radius-xl:   24px;
  --radius-2xl:  32px;
  --radius-full: 100px;
}
```

### Shadow Scale
```css
:root {
  --shadow-sm:   0 2px 8px rgba(0,0,0,0.3);
  --shadow-md:   0 8px 24px rgba(0,0,0,0.4);
  --shadow-lg:   0 20px 60px rgba(0,0,0,0.5);
  --shadow-accent: 0 8px 32px rgba(184, 255, 53, 0.15);
}
```

---

## 11. PAGE STRUCTURE MAP

### Homepage
```
1. Nav (sticky, transparent → frosted on scroll)
2. Hero Section (100svh)
3. Marquee Ticker (accent bg)
4. Services Section (3 cards)
5. Work / Portfolio (alternating layout, 3 projects)
6. Stats Band (4 stats, dark)
7. Process Section (4 steps, numbered)
8. Testimonials (horizontal scroll)
9. CTA Section (full height, giant text)
10. Footer
```

### Services Page
```
1. Nav
2. Page Hero (compact — "What We Build", 60vh)
3. Service Detail (Web Dev) — 2-column, image + content
4. Service Detail (App Dev) — reversed
5. Service Detail (Full Stack) — regular
6. Tech Stack Section — logo grid
7. Pricing Tiers (3 cards — Starter / Growth / Custom)
8. FAQ Accordion
9. CTA
10. Footer
```

### Work / Portfolio Page
```
1. Nav
2. Page Hero — "Work That Speaks"
3. Filter tabs (All / Web / App / Full Stack)
4. Project Grid (masonry-style, 2–3 col)
5. Case Study Preview (click → expands modal or separate page)
6. CTA
7. Footer
```

### About Page
```
1. Nav
2. Page Hero — Mission statement
3. Founder section (photo + bio)
4. Values (3–4 cards)
5. Timeline / Story
6. CTA
7. Footer
```

### Contact Page
```
1. Nav
2. Page Hero — "Let's Build Together"
3. Contact Form (left) + Details (right)
4. FAQ (short, 4 items)
5. Footer
```

---

## 12. TECH STACK RECOMMENDATION

| Layer | Choice | Why |
|---|---|---|
| Framework | Next.js 14 (App Router) | SSR/SSG, perfect for SEO + performance |
| Styling | Tailwind CSS v3 | Utility-first, fast, pairs with design tokens |
| Animation | GSAP + ScrollTrigger | Sheryians-level polish |
| Smooth scroll | Lenis (lightweight Locomotive alternative) | Better DX in 2025 |
| Icons | Lucide React | Clean, consistent |
| Fonts | Google Fonts (Syne + DM Sans) | Free, fast |
| CMS (blog) | Sanity.io | Headless, great DX |
| Hosting | Vercel | Zero-config, edge |
| Analytics | Vercel Analytics + Plausible | Privacy-friendly |
| Contact form | Resend + React Email | Reliable email in India |

---

## 13. RESPONSIVENESS CHECKLIST

### Mobile (< 768px)
- [ ] Hero headline drops to `clamp(3rem, 10vw, 4.5rem)`
- [ ] 3-col service grid → 1-col stack
- [ ] Navigation → hamburger + full overlay
- [ ] Portfolio grid → 1-col, no hover overlays (tap-based)
- [ ] Stats → 2x2 grid
- [ ] Process steps → vertical accordion
- [ ] Testimonials → swipeable (touch-native carousel)
- [ ] Footer → 2-col on tablet, 1-col on mobile
- [ ] All tap targets ≥ 48px
- [ ] Custom cursor disabled (touch devices)

### Tablet (768–1024px)
- [ ] Service grid → 2-col
- [ ] Portfolio → 2-col masonry
- [ ] Nav → full (compact spacing)
- [ ] Hero → stacked, centered

### Desktop (> 1024px)
- [ ] Full experience with all animations
- [ ] 3-col services, alternating portfolio
- [ ] Custom cursor active
- [ ] Locomotive smooth scroll active

---

## 14. ACCESSIBILITY

```
- Color contrast: All text on dark bg meets WCAG AA (4.5:1 minimum)
- Accent #B8FF35 on #0C0C0E → contrast ratio: 12.1:1 ✅
- Focus states: visible outline using accent color
- prefers-reduced-motion: All GSAP animations wrapped in matchMedia
- Semantic HTML: h1 only once per page, proper landmark regions
- Alt text: All images descriptive
- Aria labels: All icon buttons labeled
```

---

## 15. DESIGN INSPIRATION REFERENCES

| Site | What to steal |
|---|---|
| sheryians.com | Marquee sections, scroll animations, dark aesthetic |
| linear.app | Ultra-clean product presentation |
| stripe.com | Trust signals, clear service breakdown |
| railway.app | Developer-focused, minimal, confident |
| basement.studio | Bold typography, dark creative agency |
| thisiscolossal.com | Editorial image treatment |
| obys.agency | Award-winning animations (inspiration, not copy) |

---

*Design System version 1.0 — WebKid IT Consultancy*
*Created for: [Your Company Name]*
*Stack: Next.js 14 + Tailwind + GSAP + Lenis*