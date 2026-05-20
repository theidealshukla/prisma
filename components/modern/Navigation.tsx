"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Why Us", href: "#why-us" },
    { name: "Services", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 left-0 right-0 z-50 flex justify-end md:justify-center px-4 md:px-0 pointer-events-none"
      >
        {/* Desktop Navigation */}
        <div className="hidden md:flex pointer-events-auto bg-black rounded-b-2xl md:rounded-b-3xl px-8 py-2 items-center gap-12 lg:gap-14 shadow-[0_10px_30px_rgba(0,0,0,0.5)] border-b border-white/5">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm text-[#E1E0CC]/80 hover:text-[#E1E0CC] transition-colors">
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex justify-end w-full pt-4 pr-2 pointer-events-none">
          <button 
            onClick={() => setIsOpen(true)}
            className="pointer-events-auto text-[#E1E0CC] p-3 flex items-center justify-center z-50 transition-transform active:scale-95"
            aria-label="Open Menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl flex flex-col justify-center items-center px-6"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 bg-white/10 text-[#E1E0CC] p-3 rounded-full flex items-center justify-center transition-transform active:scale-95"
              aria-label="Close Menu"
            >
              <X size={24} />
            </button>
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link 
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className="text-4xl font-medium text-[#E1E0CC] hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
