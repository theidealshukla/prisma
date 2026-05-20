"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background bg-grain pt-20">
      {/* Morphing SVG Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-[10%] left-[20%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-primary rounded-full mix-blend-screen filter blur-[100px] animate-pulse-slow" />
        <div className="absolute top-[20%] right-[10%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-gold/10 rounded-[40%] filter blur-[80px] animate-morph" />
        <div className="absolute bottom-[-10%] left-[30%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] bg-secondary rounded-full mix-blend-screen filter blur-[120px] animate-float" />
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 inline-flex items-center gap-3 px-5 py-2 rounded-full glass-panel-light"
          >
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-12 md:text-14 tracking-[0.2em] uppercase text-ink-muted">Premium Digital Agency</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-56 md:text-88 lg:text-120 leading-[0.9] tracking-tight text-ink mb-8 max-w-5xl"
          >
            Digital <span className="italic text-ink-muted">elegance</span><br />
            for modern <span className="text-gradient-gold">brands.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-18 md:text-24 text-ink-muted mb-12 max-w-2xl font-light"
          >
            We craft award-winning experiences that blur the line between art and technology, driving unparalleled growth for luxury and premium brands.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-6 items-center"
          >
            <a
              href="#work"
              className="group relative px-8 py-4 bg-ink text-background rounded-full font-sans text-16 uppercase tracking-widest overflow-hidden shadow-[0_0_20px_rgba(250,250,249,0.2)] hover:shadow-[0_0_30px_rgba(250,250,249,0.4)] transition-all duration-500"
            >
              <div className="absolute inset-0 w-full h-full bg-gold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
              <span className="relative flex items-center gap-3 font-medium">
                View Showcase <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            
            <a
              href="#about"
              className="group px-8 py-4 rounded-full font-sans text-16 uppercase tracking-widest text-ink hover:text-gold transition-colors duration-300 flex items-center gap-3"
            >
              <span className="w-10 h-[1px] bg-ink-muted group-hover:bg-gold transition-colors duration-300" />
              Our Studio
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-ink-muted"
      >
        <span className="text-12 uppercase tracking-widest [writing-mode:vertical-lr] rotate-180">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-ink-muted/50 to-transparent" />
      </motion.div>
    </section>
  );
}
