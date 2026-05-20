# WebKid IT - Digital Consultancy Website

A stunning, modern landing page built for an IT consultancy company offering web development, app development, and full-stack solutions.

## 🎨 Design System

- **Color Theme**: Dark mode (#0C0C0E) with electric lime accent (#B8FF35)
- **Typography**: Syne (display) + DM Sans (body)
- **Inspired by**: Sheryians.com (design) + FutureDex.com (structure)

## 📋 Features

✅ **Navigation** - Sticky header with mobile menu  
✅ **Hero Section** - Full viewport with animated headline split  
✅ **Marquee Ticker** - Auto-scrolling tech stack showcase  
✅ **Services** - 3 service cards with color-coded borders  
✅ **Portfolio** - Alternating project showcase layout  
✅ **Stats** - Counter animations for impressive numbers  
✅ **Testimonials** - Carousel with client reviews  
✅ **FAQ** - Expandable accordion section  
✅ **CTA Section** - Conversion-focused call-to-action  
✅ **Footer** - Complete footer with links and social  

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at **http://localhost:3000**

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Navigation.tsx      # Header navigation
│   ├── Hero.tsx            # Hero section
│   ├── Marquee.tsx         # Scrolling marquee
│   ├── Services.tsx        # Services grid
│   ├── Work.tsx            # Portfolio section
│   ├── Stats.tsx           # Statistics counters
│   ├── Testimonials.tsx    # Client testimonials
│   ├── FAQ.tsx             # FAQ accordion
│   ├── CTA.tsx             # Call-to-action section
│   └── Footer.tsx          # Footer
├── tailwind.config.ts      # Tailwind configuration
├── next.config.ts          # Next.js configuration
└── package.json            # Project dependencies
```

## 🎯 Key Customizations

### Brand Name
Currently shows "WebKid" - replace in:
- `components/Navigation.tsx` line 10
- `components/Footer.tsx` line 13

### Company Details
Update contact info in `components/Footer.tsx`:
- Email: `hello@webkid.io`
- Phone: `+91 98765 43210`
- Location: `Bhopal, India`

### Services
Edit `components/Services.tsx` to customize the 3 main services

### Projects
Edit `components/Work.tsx` to showcase your portfolio

### Testimonials
Add real client testimonials in `components/Testimonials.tsx`

### FAQ
Update frequently asked questions in `components/FAQ.tsx`

## 🎨 Color Customization

All colors are defined in `tailwind.config.ts` in the `extend.colors` section:

```ts
colors: {
  "accent": "#B8FF35",           // Primary CTA color
  "color-web": "#4D9FFF",        // Web dev service
  "color-app": "#FF6B6B",        // App dev service
  "color-stack": "#B8FF35",      // Full stack service
}
```

## 📱 Responsive Design

- Mobile-first approach
- Fully responsive (375px - 1440px+)
- Touch-friendly buttons (48px min tap target)
- Mobile hamburger menu

## ♿ Accessibility

- WCAG AA contrast compliance
- Keyboard navigation support
- Focus states on all interactive elements
- `prefers-reduced-motion` support
- Semantic HTML structure

## 🔧 Tech Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS 3
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Syne, DM Sans)
- **Language**: TypeScript

## 📊 Performance

- No heavy animations (respects performance)
- Optimized images
- Lazy loading support
- CSS transforms only
- ~40KB gzipped

## 📝 License

Private project for WebKid IT

## 🤝 Support

For customizations or questions, reach out to the development team.

---

**Ready to go live?** Update the environment variables and deploy to Vercel, Netlify, or your preferred host.
