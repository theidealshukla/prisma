"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Navigation() {
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="absolute top-0 left-0 right-0 z-50 flex justify-center pointer-events-none"
    >
      <div className="pointer-events-auto bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8 flex items-center gap-3 sm:gap-6 md:gap-12 lg:gap-14 shadow-[0_10px_30px_rgba(0,0,0,0.5)] border-b border-white/5">
        <Link href="#projects" className="text-[10px] sm:text-xs md:text-sm text-[#E1E0CC]/80 hover:text-[#E1E0CC] transition-colors">
          Projects
        </Link>
        <Link href="#why-us" className="text-[10px] sm:text-xs md:text-sm text-[#E1E0CC]/80 hover:text-[#E1E0CC] transition-colors">
          Why Us
        </Link>
        <Link href="#services" className="text-[10px] sm:text-xs md:text-sm text-[#E1E0CC]/80 hover:text-[#E1E0CC] transition-colors">
          Services
        </Link>
        <Link href="#testimonials" className="text-[10px] sm:text-xs md:text-sm text-[#E1E0CC]/80 hover:text-[#E1E0CC] transition-colors">
          Testimonials
        </Link>
        <Link href="#contact" className="text-[10px] sm:text-xs md:text-sm text-[#E1E0CC]/80 hover:text-[#E1E0CC] transition-colors">
          Contact
        </Link>
      </div>
    </motion.header>
  );
}
