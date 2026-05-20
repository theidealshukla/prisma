# IoT Consulting Company — Website Layout Prompt

> **Reference Site Crawled:** [futuredesks.com](https://www.futuredesks.com)
> **Goal:** Build a similar website for an IoT consulting company that offers website development and mobile app development services.
> **Tech Stack Recommendation:** Next.js 14, Tailwind CSS, Framer Motion, Supabase (for contact form leads)

---

## SITE-WIDE PATTERNS (From FutureDesks Analysis)

### Navigation Structure (Dual Navbar)
FutureDesks uses a **split dual navbar**:
- **Top utility bar** (thin strip above main nav): Social media icons (Instagram, WhatsApp), and quick-access links to the two main service categories.
- **Main navbar**: Logo centered, About Us and Contact Us on the right.
- **Mobile nav**: Collapses into a hamburger with all links.

**Adapt for IoT Company:**
```
Top bar: LinkedIn icon | Twitter/X icon | WhatsApp CTA ("Talk to an Expert")
Main nav: [Logo - Left] ... [Services] [Case Studies] [About Us] [Contact Us - CTA Button]
Mobile: Hamburger menu with all links
```

### Marquee / Ticker Strip
FutureDesks uses **two animated horizontal ticker strips** between sections — one scrolling left, one scrolling right — with logos/icons/text repeated for infinite scroll effect. Use this pattern to build social proof or tech stack display.

**Adapt for IoT Company:**
- Strip 1 (scroll left): IoT tech logos — AWS IoT, Azure IoT Hub, Raspberry Pi, Arduino, MQTT, Node-RED, InfluxDB, Grafana, Zigbee, LoRaWAN
- Strip 2 (scroll right): Industry keywords — Smart Manufacturing · Smart Agriculture · Fleet Tracking · Asset Monitoring · Predictive Maintenance · Industrial Automation

### Footer Structure
4-column footer:
1. **Brand column**: Logo + tagline + newsletter email subscribe input
2. **Links column**: Home, Services, Case Studies, About Us, Contact
3. **More Resources**: Blogs, Terms & Conditions, Privacy Policy, Refund/Cancellation Policy
4. **Contact column**: Email address + phone numbers
Bottom bar: © Company Name + "Made with ❤️ in India" or similar

---

## PAGE 1: HOME PAGE

### Section 1.1 — Hero Section
**FutureDesks pattern:** Full-width hero image with large headline, two CTA buttons, and a social proof tag ("Trusted by 1.3L+ Audience") below the buttons.

**IoT Company Adaptation:**
```
LAYOUT: Full viewport height. Dark background (deep navy or near-black) with animated IoT circuit/mesh background (SVG or canvas particle network).

HEADLINE (H1, large bold):
  "Connect. Automate. Scale."
  [subline] "End-to-end IoT consulting — from device firmware to cloud dashboards and mobile apps."

CTA BUTTONS (side by side):
  [Explore Our Services]  [Book a Free Consultation]

SOCIAL PROOF TAG (below buttons):
  "Trusted by 50+ businesses across 8 industries"

BACKGROUND VISUAL:
  Animated SVG network of connected nodes (representing IoT devices) with subtle pulse animations.
```

---

### Section 1.2 — Dual Ticker Strip (Tech/Industry Marquee)
See Site-wide patterns above.

---

### Section 1.3 — Features / Services Overview
**FutureDesks pattern:** Tag label ("Features") above heading, then 2-column grid of feature cards, each with an image, title, and short description. Also includes an embedded YouTube video below.

**IoT Company Adaptation:**
```
TAG: "What We Do"
HEADING: "End-to-End Solutions for the Connected World"

SERVICE CARDS (2x2 or 2x3 grid):
  Card 1: IoT Consulting & Architecture
    - Icon/Image: Circuit board or network diagram
    - Desc: "We design scalable IoT architectures — from sensor selection to cloud integration."

  Card 2: Custom Website Development
    - Icon/Image: Browser/laptop mockup
    - Desc: "Pixel-perfect, conversion-focused websites built with Next.js and modern tooling."

  Card 3: Mobile App Development
    - Icon/Image: Smartphone with dashboard
    - Desc: "Cross-platform IoT mobile apps with real-time data visualization and device control."

  Card 4: IoT Dashboard & Analytics
    - Icon/Image: Charts/graphs on screen
    - Desc: "Custom Grafana/custom dashboards that turn raw device data into business decisions."

  Card 5: Firmware & Embedded Development
    - Icon/Image: Microcontroller
    - Desc: "Firmware development for ESP32, Raspberry Pi, Arduino, and industrial PLCs."

  Card 6: Cloud & Infrastructure
    - Icon/Image: Cloud with connections
    - Desc: "MQTT brokers, AWS/Azure IoT Hub setup, and serverless pipelines for your fleet."

BELOW CARDS:
  Embedded explainer video (YouTube) — e.g. "How Our IoT Process Works" demo reel.
```

---

### Section 1.4 — Social Proof / Community Count
**FutureDesks pattern:** "Trusted by 130k+ People" heading with an Instagram reel carousel (carousel with left/right arrows, showing 4-6 reel embeds side by side with scroll).

**IoT Company Adaptation:**
```
TAG: "Client Stories"
HEADING: "Trusted by 50+ Businesses"

Instead of Instagram reels, use:
OPTION A: Stat counter row
  [50+ Projects Delivered] | [8 Industries Served] | [15+ Countries Reached] | [99.9% Uptime SLA]

OPTION B: Featured media/press logos strip if applicable

OPTION C: Case study preview cards (3 cards, each linking to a full case study)
  - "Smart Farm Monitoring – Nagpur" (Agriculture IoT)
  - "Factory Asset Tracker – Indore" (Industrial IoT)
  - "Hotel Energy Management – Bhopal" (Hospitality IoT)
```

---

### Section 1.5 — Portfolio / Work Showcase
**FutureDesks pattern:** Labeled "Social Presence / Turning Visions Into Digital Reality". Horizontal scrollable card carousel. Each card has a project image, title, and short description. "View All" button at bottom.

**IoT Company Adaptation:**
```
TAG: "Our Work"
HEADING: "Turning IoT Ideas Into Working Products"

PROJECT CARDS (horizontal scroll or 3-column grid, with tab filter: All | Websites | Mobile Apps | IoT Systems):

  Project 1: Smart Agriculture Dashboard
    - Image: Farming sensor dashboard screenshot
    - Desc: "Real-time soil moisture, temperature & irrigation control for a Nagpur farm collective."
    - Link: [View Case Study]

  Project 2: Fleet Management App
    - Image: Mobile app mockup with map
    - Desc: "GPS tracking + fuel monitoring mobile app for a logistics company's 200-vehicle fleet."
    - Link: [View Case Study]

  Project 3: Factory OEE Dashboard
    - Image: Industrial dashboard
    - Desc: "OEE tracking dashboard with downtime alerts and predictive maintenance for a Pune plant."
    - Link: [View Case Study]

  Project 4: Hotel Energy Monitor
    - Image: Energy management UI
    - Desc: "IoT-based HVAC and energy monitoring system reducing hotel electricity bills by 30%."
    - Link: [View Case Study]

  Project 5: Clinic Queue Manager
    - Image: Tablet kiosk interface
    - Desc: "Touchscreen patient queue and vitals collection system for a chain of clinics."
    - Link: [View Case Study]

[View All Projects →] button below
```

---

### Section 1.6 — Moving Developer/Tech Strip (Decorative)
**FutureDesks pattern:** A horizontally scrolling image strip (appears to be a "Developer" text graphic or icons). Used as a visual separator between sections.

**IoT Company Adaptation:**
```
Scrolling strip of IoT-related tech words or icons:
"IoT · Web Dev · Mobile Apps · Cloud · Firmware · MQTT · React Native · Next.js · AWS IoT · Flutter · Embedded · Dashboards · Automation · Real-Time · Edge Computing"

Style: Monospaced or techy font, subtle background, auto-scroll left.
```

---

### Section 1.7 — Client Testimonials
**FutureDesks pattern:** "Client Testimonials / Happy Clients Testimonials" — loaded dynamically. Likely a carousel of cards with client photo, name, company, and review text.

**IoT Company Adaptation:**
```
TAG: "Client Testimonials"
HEADING: "What Our Clients Say"

TESTIMONIAL CARDS (carousel, 3 visible at a time on desktop, 1 on mobile):

  Card 1:
    Photo: [Client headshot]
    Name: Ramesh Agarwal
    Company: AgroSense Farms, Nagpur
    Stars: ★★★★★
    Quote: "The IoT dashboard they built transformed how we monitor 200 acres. Real-time alerts saved our last kharif crop from overwatering."

  Card 2:
    Photo: [Client headshot]
    Name: Priya Menon
    Company: FleetWise Logistics, Pune
    Stars: ★★★★★
    Quote: "Our fleet tracking app was delivered in 6 weeks — on time and bug-free. The team understood logistics deeply, not just tech."

  Card 3:
    Photo: [Client headshot]
    Name: Sanjay Mehta
    Company: Comfort Stay Hotels, Bhopal
    Stars: ★★★★★
    Quote: "Energy bills dropped 28% in 3 months after they installed the smart HVAC monitoring. Best ROI decision we made this year."

  Card 4:
    Photo: [Client headshot]
    Name: Kavita Sharma
    Company: HealthFirst Clinics, Indore
    Stars: ★★★★★
    Quote: "The patient queue app runs 7 hours a day with zero crashes. Our receptionist's job got 10x easier overnight."

Navigation: Left/right arrows + dot indicators
```

---

### Section 1.8 — Team Section
**FutureDesks pattern:** "Our Team / Team Behind Wonders" — auto-scrolling horizontal loop of team member cards. Each card has a photo, name, and role. The strip loops infinitely (duplicated for seamless animation).

**IoT Company Adaptation:**
```
TAG: "Our Team"
HEADING: "The People Behind the Products"

TEAM CARDS (infinite horizontal scroll loop):
  - [Founder] — IoT Architect & CEO
  - [Co-founder] — Full Stack Developer
  - [CTO] — Embedded Systems Lead
  - [Mobile Lead] — React Native / Flutter Developer
  - [Frontend Developer] — Next.js Specialist
  - [UI/UX Designer] — Figma & Product Design
  - [Cloud Engineer] — AWS / Azure IoT
  - [Sales Head] — Client Relations

Each card: Photo + Name + Role
Animation: Auto-scroll, loop seamlessly
```

---

### Section 1.9 — FAQ Section
**FutureDesks pattern:** "Frequently Asked Questions" — accordion-style expandable items. 5 questions listed, click to expand.

**IoT Company Adaptation:**
```
HEADING: "Frequently Asked Questions"

Q1: How long does it take to develop an IoT solution end-to-end?
A: Depends on scope. A basic monitoring dashboard takes 4–6 weeks. A full custom IoT product with firmware, mobile app, and cloud backend typically takes 3–5 months.

Q2: Do you provide hardware (sensors, devices) or only software?
A: We are a software-first IoT consultancy. We help you select the right hardware and integrate it. We have vendor partnerships for common hardware procurement.

Q3: Which cloud platforms do you work with?
A: AWS IoT Core, Azure IoT Hub, and Google Cloud IoT. We can also set up self-hosted MQTT brokers on your infrastructure.

Q4: Do you provide post-launch maintenance and support?
A: Yes. We offer SLA-based maintenance plans. Our standard plan includes 99.9% uptime monitoring, monthly updates, and priority support.

Q5: Can you build both the website and the mobile app for our IoT product?
A: Absolutely — it's one of our core strengths. We deliver the full digital stack: landing page, web dashboard, and iOS/Android app, all integrated with your IoT backend.

Q6: What industries do you specialize in?
A: Agriculture, manufacturing, logistics/fleet, hospitality, healthcare, and retail. We've delivered solutions in all these verticals.

Style: Accordion (click to expand), clean minimal styling, border between items.
```

---

## PAGE 2: SERVICES PAGE

### Structure:
```
Hero Section:
  H1: "Services Built for the Connected World"
  Subtext: "From consulting to code to cloud — we handle every layer of your IoT stack."
  Background: Same animated circuit/network pattern as homepage

Ticker Strip (same as site-wide)

Services Grid (detailed cards):
  6 service cards, each with:
  - Icon (SVG)
  - Title
  - 3-4 bullet points of what's included
  - "Learn More" link or expand-on-click

  Services:
  1. IoT Strategy & Architecture Consulting
  2. Custom Website Development
  3. Mobile App Development (iOS & Android)
  4. Firmware & Embedded Development
  5. Cloud Integration & DevOps
  6. IoT Dashboard & Data Visualization

Process Section:
  "How We Work" — numbered horizontal step flow
  Step 1: Discovery & Scoping
  Step 2: Architecture Design
  Step 3: Development Sprints
  Step 4: Testing & QA
  Step 5: Deployment & Handover
  Step 6: Ongoing Support

CTA Banner:
  "Have a project in mind? Let's talk."
  [Book Free Consultation →]

FAQ (same as homepage, service-specific questions)
```

---

## PAGE 3: CASE STUDIES / PROJECTS PAGE

### Structure (mirrors FutureDesks /customized page):
```
Hero:
  H1: "Our Top Projects"
  Subtext: "Real solutions. Real results. Built for real businesses."

Tab Filter:
  [All] [IoT Systems] [Web Development] [Mobile Apps]

Project Cards (full-width alternating layout — image on left, content on right):
  Each card contains:
  - Project image/mockup
  - Project Name
  - Client industry tag (e.g., "Agriculture IoT")
  - 4 bullet points (key features/outcomes)
  - [View Case Study →] button

Projects Listed:
  1. Smart Farm Monitoring System (Nagpur)
  2. Fleet GPS Tracking App (Pune)
  3. Factory OEE Dashboard (Industrial IoT)
  4. Hotel Energy Management System
  5. Clinic Queue & Patient Vitals System
  6. E-commerce Website (local retail)
  7. IoT-based Cold Chain Monitoring
  8. Smart Irrigation Controller App

"View All" button / pagination at bottom

FAQ Section (same pattern)
```

---

## PAGE 4: ABOUT US PAGE

### Structure (mirrors FutureDesks /about-us):
```
Hero:
  H1: "About Us"
  Subtext: "From idea to IoT — we design, develop, and deploy solutions that scale."

Ticker Strip

About Content Block:
  H2: "Building the Connected Future"
  2-column layout:
    Left: Long-form brand story text
      "At [Company Name], we believe IoT isn't just about devices — it's about giving businesses real-time intelligence to make better decisions..."
    Right: Founding year, office location, global clients served (stat blocks)

"Who We Are" Sub-section:
  Mission, Vision, and Values in 3 card blocks

Social Proof / Stats Strip:
  [50+ Projects] | [8 Industries] | [3 Countries] | [5 Years of Experience]

Instagram / Social Section (optional — reels or LinkedIn post embeds)

Team Section (same infinite scroll carousel as homepage)

FAQ Section
```

---

## PAGE 5: CONTACT PAGE

### Structure (mirrors FutureDesks /contact):
```
Hero:
  H1: "Contact Us"
  Subtext: "Have a project in mind? We'd love to hear about it."

Ticker Strip

Two-column contact section:
  Left column — Contact Info:
    - Office address (city, state)
    - Email: team@yourcompany.com
    - Phone: +91 XXXXX XXXXX
    - WhatsApp CTA button
    - Working hours: Mon–Sat, 10am–7pm IST

  Right column — Contact Form:
    Fields:
    - Name (text input)
    - Email (email input)
    - Phone (tel input)
    - Company / Business Name (text input)
    - Service Interested In (dropdown: IoT Consulting / Website / Mobile App / Other)
    - Message (textarea)
    - [Send Message] button (primary CTA)

    Form behavior: On submit, save to Supabase leads table + send email notification via Resend/Nodemailer.

Map embed (optional): Google Maps showing office location

FAQ section
```

---

## GLOBAL DESIGN SYSTEM

### Color Palette
```
Primary Background: #0A0F1E (deep navy, near-black)
Secondary Background: #111827 (slightly lighter navy for cards)
Accent Color: #00D4FF (electric cyan — IoT/tech feel)
Secondary Accent: #7C3AED (violet for hover states or tags)
Text Primary: #F9FAFB (near white)
Text Secondary: #9CA3AF (muted gray)
Border: #1F2937 (subtle dark border)
CTA Button: Cyan (#00D4FF) with dark text or gradient (cyan to violet)
```

### Typography
```
Display / Headings: "Space Grotesk" or "Syne" — geometric, techy
Body Text: "Inter" or "DM Sans" — clean, readable
Monospace accents (for code snippets or tech labels): "JetBrains Mono"
```

### Animation Patterns (from FutureDesks)
```
1. Horizontal ticker strips (infinite scroll) — CSS animation, duplicate content for seamless loop
2. Team member carousel — infinite horizontal auto-scroll
3. Project card hover: lift + shadow + slight scale (transform: translateY(-4px) scale(1.01))
4. Hero section: fade-in + slide-up on load
5. Section reveal: elements animate in as user scrolls (Intersection Observer or Framer Motion)
6. Accordion FAQ: smooth max-height transition on open/close
7. Stat counters: count-up animation when scrolled into view
```

### Component Patterns
```
Section structure (every section):
  - Small tag/label above heading (e.g., "Our Work", "Features") — styled as pill or mono text
  - H2 heading (large, bold)
  - Content (cards/carousel/grid)
  - Optional CTA at bottom

Cards:
  - Dark background (#111827)
  - 1px border (#1F2937)
  - 12-16px border-radius
  - Hover: border color shifts to accent (#00D4FF), subtle glow

CTA Buttons:
  - Primary: Filled cyan bg, dark text, border-radius 8px
  - Secondary: Outlined, white text, cyan border
  - Hover: Scale up 2-3%, brightness shift
```

---

## SITE MAP

```
/                   → Home
/services           → Services (detailed)
/case-studies       → All Projects / Portfolio
/about-us           → About Us + Team
/contact            → Contact + Form
/blogs              → Blog listing (optional, future phase)
/privacy            → Privacy Policy
/terms              → Terms & Conditions
```

---

## CONTENT NOTES FOR IoT COMPANY

- **USP to emphasize throughout:** "We don't just build apps — we understand IoT architecture, so your software is built around how your devices actually work."
- **Social proof hook:** Real case studies with measurable outcomes (% cost savings, uptime, time saved).
- **Trust signals:** Tech logos used (AWS, Azure, MQTT, etc.), client logos, testimonials with full name + company.
- **Lead capture:** WhatsApp CTA in nav top bar is high-converting for Indian SMB market — keep it.
- **Localization:** Mention Indian cities served (Bhopal, Indore, Nagpur, Pune) alongside global reach to build trust with local clients.

---

*Layout prompt crawled and adapted from futuredesks.com | Generated for IoT Consulting Company website project*