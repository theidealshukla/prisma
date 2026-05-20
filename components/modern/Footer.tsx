"use client";

import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

const footerLinks = {
  Services: [
    { label: "Web Platforms", href: "#services" },
    { label: "Mobile Applications", href: "#services" },
    { label: "Custom Software", href: "#services" },
    { label: "Full Setup & Infrastructure", href: "#services" },
  ],
  Company: [
    { label: "About Us", href: "#why-us" },
    { label: "Our Process", href: "#projects" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Careers", href: "#" },
  ],
  Connect: [
    { label: "LinkedIn", href: "#" },
    { label: "Twitter / X", href: "#" },
    { label: "GitHub", href: "#" },
    { label: "Dribbble", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-black text-[#DEDBC8] border-t border-white/5"
    >
      {/* CTA band */}
      <div className="px-4 sm:px-6 md:px-12 pt-24 pb-20 border-b border-white/10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <div>
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-500 mb-6 block">
              Ready to build?
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-[#E1E0CC] leading-[1]">
              Let's engineer<br />your digital<br />advantage.
            </h2>
          </div>
          <div className="flex flex-col gap-8">
            <p className="text-gray-400 text-base leading-relaxed max-w-md">
              Whether you have a fully scoped brief or just an idea on a napkin
              — we'd love to hear from you. Book a free 30-minute technical
              consultation and let's figure out the best path forward together.
            </p>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:hello@prisma.studio"
                className="group inline-flex items-center gap-4 bg-primary rounded-full pl-6 pr-1.5 py-1.5 w-fit hover:bg-[#E1E0CC] transition-colors"
              >
                <span className="text-black font-medium text-sm whitespace-nowrap">
                  Book a free consultation
                </span>
                <div className="bg-black rounded-full w-9 h-9 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ArrowRight className="text-[#E1E0CC] w-4 h-4" />
                </div>
              </a>
              <div className="flex flex-col gap-3 pt-2">
                <a
                  href="mailto:hello@prisma.studio"
                  className="flex items-center gap-3 text-gray-400 hover:text-[#E1E0CC] text-sm transition-colors"
                >
                  <Mail className="w-4 h-4 text-primary/50" />
                  hello@prisma.studio
                </a>
                <a
                  href="tel:+15550000000"
                  className="flex items-center gap-3 text-gray-400 hover:text-[#E1E0CC] text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 text-primary/50" />
                  +1 (555) 000-0000
                </a>
                <span className="flex items-center gap-3 text-gray-400 text-sm">
                  <MapPin className="w-4 h-4 text-primary/50" />
                  San Francisco · London · Remote-first
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Links grid */}
      <div className="px-4 sm:px-6 md:px-12 py-16">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="text-2xl font-medium text-[#E1E0CC] mb-4 tracking-tight">
              Prisma<span className="text-primary/60 text-sm align-super ml-0.5">*</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              A full-service IT consultancy building websites, mobile apps, and
              custom software for ambitious companies worldwide.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-[#E1E0CC] text-xs uppercase tracking-widest mb-5 font-medium">
                {heading}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-500 text-sm hover:text-[#E1E0CC] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="px-4 sm:px-6 md:px-12 pb-10 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-8 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} Prisma Studio Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#E1E0CC] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#E1E0CC] transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-[#E1E0CC] transition-colors">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
