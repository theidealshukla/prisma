"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Aether AI",
    category: "Brand Identity & Digital Platform",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
    year: "2024",
  },
  {
    title: "Lumina Edge",
    category: "E-Commerce Experience",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2564&auto=format&fit=crop",
    year: "2023",
  },
  {
    title: "Vortex Fin",
    category: "Fintech Mobile Application",
    image: "https://images.unsplash.com/photo-1633424160273-049889da3b27?q=80&w=2564&auto=format&fit=crop",
    year: "2023",
  },
];

export default function CaseStudies() {
  return (
    <section id="work" className="py-32 bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row justify-between items-end mb-20"
        >
          <div>
            <span className="text-12 uppercase tracking-widest text-gold mb-4 block">Selected Works</span>
            <h2 className="font-display text-48 md:text-72 leading-none text-ink">
              Featured <span className="italic text-ink-muted">Showcase.</span>
            </h2>
          </div>
          <a href="#" className="mt-8 md:mt-0 text-14 uppercase tracking-widest text-ink border-b border-ink/30 pb-1 hover:border-gold hover:text-gold transition-colors inline-flex items-center gap-2">
            View All Projects <ArrowUpRight size={16} />
          </a>
        </motion.div>

        <div className="flex flex-col gap-12 md:gap-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.1 }}
              className={`group relative flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-8 md:gap-16 items-center`}
            >
              {/* Image Container with Parallax-like Reveal */}
              <div className="w-full md:w-[60%] relative overflow-hidden rounded-xl aspect-[4/3] bg-surface">
                <div className="absolute inset-0 bg-ink/10 group-hover:bg-transparent transition-colors duration-700 z-10 mix-blend-multiply" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-1000 ease-[0.16,1,0.3,1] grayscale-[30%] group-hover:grayscale-0"
                />
                
                {/* Floating View Button */}
                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="w-24 h-24 rounded-full glass-panel-light flex items-center justify-center text-ink shadow-glass backdrop-blur-md transform translate-y-8 group-hover:translate-y-0 transition-all duration-700 ease-[0.16,1,0.3,1]">
                    <span className="text-12 uppercase tracking-widest font-medium">View</span>
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="w-full md:w-[40%] flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-14 text-gold font-display italic">{project.year}</span>
                  <span className="w-12 h-[1px] bg-ink-muted/30" />
                  <span className="text-12 uppercase tracking-widest text-ink-muted">{project.category}</span>
                </div>
                <h3 className="font-display text-40 md:text-56 text-ink mb-6 group-hover:text-gold transition-colors duration-500">
                  {project.title}
                </h3>
                <a href="#" className="inline-flex items-center gap-3 text-16 text-ink-muted hover:text-ink transition-colors">
                  Explore Case Study <ArrowUpRight size={18} className="text-gold" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
