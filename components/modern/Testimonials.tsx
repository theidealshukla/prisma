"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Prisma took our fragmented internal systems and unified them into a single, beautifully executed custom platform. What used to take our ops team three hours now takes seven minutes. The ROI was evident within the first month.",
    author: "Sarah Jenkins",
    role: "COO, Meridian Logistics",
    initials: "SJ",
  },
  {
    quote:
      "We came to Prisma with a napkin sketch and left with a live, production-ready mobile app six weeks later. The team understood our users better than most agencies understand their own product. Exceptional work.",
    author: "Ravi Mehta",
    role: "Founder & CEO, Finlo",
    initials: "RM",
  },
  {
    quote:
      "Most developers build what you ask for. Prisma builds what you need. They pushed back on two of our requirements on day one, explained why, and proposed better solutions. That intellectual honesty is rare and incredibly valuable.",
    author: "Clara Hoffmann",
    role: "VP Engineering, Nuvex GmbH",
    initials: "CH",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-[#050505] py-28 px-4 sm:px-6 md:px-12"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="mb-16 border-b border-white/10 pb-12">
          <span className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-500 mb-4 block">
            Client testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#E1E0CC]">
            Don't take our word for it.
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#101010] border border-white/5 rounded-2xl p-8 flex flex-col justify-between gap-8 hover:border-white/10 transition-colors"
            >
              <div>
                <Quote className="w-6 h-6 text-primary/40 mb-6" />
                <p className="text-[#E1E0CC]/80 text-sm md:text-base leading-[1.8] font-serif italic">
                  "{t.quote}"
                </p>
              </div>
              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-[#1c1c1c] border border-white/10 flex items-center justify-center text-primary text-xs font-medium shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="text-[#E1E0CC] text-sm font-medium">{t.author}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Large pull quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="bg-[#101010] rounded-[2rem] p-12 md:p-20 text-center"
        >
          <p className="font-serif italic text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#E1E0CC] leading-[1.2] max-w-4xl mx-auto">
            "Working with Prisma is what working with a world-class engineering
            team should feel like — proactive, transparent, and obsessively
            detail-oriented at every stage."
          </p>
          <div className="mt-10 flex flex-col items-center gap-1">
            <span className="text-primary font-medium text-sm">
              Daniel Ortiz
            </span>
            <span className="text-gray-500 text-xs">
              CTO, Luminate Health Tech
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
