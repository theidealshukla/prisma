"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { MeshGradient } from "@paper-design/shaders-react";
import WordsPullUp from "../animations/WordsPullUp";
import Navigation from "./Navigation";
import { useRef } from "react";
import { useParallax } from "../animations/useParallax";

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);
  useParallax(bgRef, 0.5);

  return (
    <section className="relative h-screen p-4 md:p-6 bg-black overflow-hidden">
      <div className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden bg-surface">
        
        <div ref={bgRef} className="absolute inset-0 w-full h-[120%] -top-[10%]">
          {/* Shader Background — Layer 1: colour mesh */}
          <MeshGradient
            className="absolute inset-0 w-full h-full"
            colors={["#000000", "#06b6d4", "#0891b2", "#164e63", "#f97316"]}
            speed={0.3}
            backgroundColor="#000000"
          />

          {/* Shader Background — Layer 2: wireframe overlay */}
          <MeshGradient
            className="absolute inset-0 w-full h-full opacity-40"
            colors={["#000000", "#ffffff", "#06b6d4", "#f97316"]}
            speed={0.2}
            backgroundColor="transparent"
          />
        </div>

        {/* Overlays */}
        <div className="absolute inset-0 noise-overlay opacity-50 mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70 pointer-events-none" />

        {/* Navigation positioned relative to this container */}
        <Navigation />

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            
            {/* Left: Giant Heading */}
            <div className="md:col-span-8">
              <WordsPullUp
                text="Prisma"
                showAsterisk={true}
                className="text-[#E1E0CC] font-medium leading-[0.85] tracking-[-0.07em] text-[26vw] sm:text-[24vw] md:text-[22vw] lg:text-[20vw] xl:text-[19vw] 2xl:text-[20vw]"
              />
            </div>

            {/* Right: Description & CTA */}
            <div className="md:col-span-4 flex flex-col items-start md:items-end md:text-right gap-6 md:pb-8">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-primary/70 text-xs sm:text-sm md:text-base leading-[1.2] max-w-sm text-left md:text-right"
              >
                Prisma is an elite software engineering studio. We craft bespoke websites, high-performance mobile applications, and scalable custom software for brands that refuse to compromise on digital excellence.
              </motion.p>
              
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="group flex items-center bg-primary rounded-full pl-6 pr-1 py-1 gap-4 hover:gap-6 transition-all duration-300"
              >
                <span className="text-black font-medium text-sm sm:text-base whitespace-nowrap">
                  Initiate a project
                </span>
                <div className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <ArrowRight className="text-[#E1E0CC] w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </motion.button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
