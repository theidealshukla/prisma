"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-background pt-32 pb-10 overflow-hidden border-t border-ink/5">
      {/* Background glow for footer */}
      <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[80vw] h-[50vw] max-h-[600px] bg-gold/5 rounded-[50%] filter blur-[150px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        <div className="flex flex-col items-center text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-12 md:text-14 tracking-[0.2em] uppercase text-ink-muted">Available for new projects</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-56 md:text-88 lg:text-[120px] leading-[0.85] tracking-tight text-ink mb-12"
          >
            Let's build<br />
            <span className="italic text-ink-muted">something</span> <span className="text-gradient-gold">extraordinary.</span>
          </motion.h2>

          <motion.a
            href="mailto:hello@axionstudio.com"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="group relative inline-flex items-center justify-center w-40 h-40 md:w-48 md:h-48 rounded-full bg-surface-light text-ink hover:text-background transition-colors duration-500 overflow-hidden shadow-glass"
          >
            <div className="absolute inset-0 bg-gold transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] rounded-full" />
            <span className="relative z-10 font-sans text-16 uppercase tracking-widest flex items-center gap-2">
              Start Project <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform duration-500" />
            </span>
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-6 pt-16 border-t border-ink/10">
          <div className="md:col-span-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-gold-dark flex items-center justify-center text-ink font-display italic text-18 shadow-glow mb-6">
                A
              </div>
              <p className="text-16 text-ink-muted max-w-sm font-light">
                Elevating brands through premium digital experiences, sophisticated design, and scalable architecture.
              </p>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-12 tracking-widest uppercase text-ink mb-6">Sitemap</h4>
            <nav className="flex flex-col gap-4">
              {['Home', 'Services', 'Work', 'Studio'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-16 text-ink-muted hover:text-gold transition-colors inline-block w-fit group">
                  {item}
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-[1px] bg-gold" />
                </a>
              ))}
            </nav>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-12 tracking-widest uppercase text-ink mb-6">Socials</h4>
            <nav className="flex flex-col gap-4">
              {['Twitter', 'LinkedIn', 'Instagram', 'Dribbble'].map((item) => (
                <a key={item} href="#" className="text-16 text-ink-muted hover:text-gold transition-colors inline-block w-fit group">
                  {item}
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-[1px] bg-gold" />
                </a>
              ))}
            </nav>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-12 tracking-widest uppercase text-ink mb-6">Contact</h4>
            <address className="not-italic flex flex-col gap-4 text-16 text-ink-muted">
              <p>120 Studio Row<br />New York, NY 10012</p>
              <a href="mailto:hello@axionstudio.com" className="hover:text-gold transition-colors group w-fit">
                hello@axionstudio.com
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-[1px] bg-gold" />
              </a>
              <a href="tel:+12125550199" className="hover:text-gold transition-colors group w-fit">
                +1 (212) 555-0199
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-[1px] bg-gold" />
              </a>
            </address>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-ink/10 flex flex-col md:flex-row justify-between items-center gap-4 text-14 text-ink-muted/50">
          <p>&copy; {new Date().getFullYear()} Axion Studio. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-ink transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-ink transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
