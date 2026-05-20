"use client";

import { motion } from "framer-motion";
import { Sparkles, Layers, Target } from "lucide-react";

const features = [
  {
    title: "Strategic Design",
    description: "We don't just make things look pretty. We engineer visual systems that solve complex business challenges and drive measurable growth.",
    icon: Target,
  },
  {
    title: "Immersive Experiences",
    description: "Utilizing bleeding-edge web technologies, we craft fluid, cinematic interactions that captivate users and elevate brand perception.",
    icon: Sparkles,
  },
  {
    title: "Scalable Architecture",
    description: "Beneath the beautiful exterior lies robust, future-proof code designed to scale seamlessly with your ambitious business goals.",
    icon: Layers,
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-32 bg-surface overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-display text-48 md:text-72 leading-tight text-ink mb-8">
              The <span className="italic text-ink-muted">Intersection</span><br />
              of Art & Logic.
            </h2>
            <p className="text-18 md:text-20 text-ink-muted font-light mb-10 max-w-xl">
              Axion Studio is a boutique digital agency dedicated to the craft of premium web experiences. We believe that true digital luxury is born when flawless aesthetics meet relentless performance.
            </p>
            
            <div className="flex gap-12">
              <div>
                <span className="block font-display text-48 text-gold mb-2">12+</span>
                <span className="text-12 uppercase tracking-widest text-ink-muted">Awwwards</span>
              </div>
              <div>
                <span className="block font-display text-48 text-gold mb-2">85</span>
                <span className="text-12 uppercase tracking-widest text-ink-muted">Global Clients</span>
              </div>
            </div>
          </motion.div>

          <div className="relative">
            <div className="flex flex-col gap-6">
              {features.map((feature, idx) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="glass-panel p-8 md:p-10 rounded-2xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full filter blur-[40px] group-hover:bg-gold/20 transition-colors duration-500" />
                  
                  <feature.icon className="w-8 h-8 text-gold mb-6 stroke-[1.5]" />
                  <h3 className="font-display text-24 text-ink mb-3">{feature.title}</h3>
                  <p className="text-16 text-ink-muted leading-relaxed font-light relative z-10">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
