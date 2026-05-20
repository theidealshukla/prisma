"use client";

import { motion, useInView } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { useRef } from "react";
import WordsPullUpMultiStyle from "../animations/WordsPullUpMultiStyle";

export default function RecentProjects() {
  const headerSegments = [
    { text: "Real problems. ", className: "text-[#DEDBC8]" },
    { text: "Real solutions. Real results.", className: "text-gray-500" },
  ];

  return (
    <section id="projects" className="relative bg-black py-24 px-4 sm:px-6 md:px-12">
      <div className="absolute inset-0 bg-noise opacity-[0.15] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <span className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-500 mb-6 block">
            What we build
          </span>
          <WordsPullUpMultiStyle
            segments={headerSegments}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal justify-start max-w-3xl"
          />
          <p className="text-gray-500 text-sm md:text-base mt-6 max-w-lg leading-relaxed">
            Across websites, mobile apps, and custom software — here is what our
            end-to-end delivery looks like in practice.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:h-[500px]">
          {/* Card 1: Video showcase */}
          <CardWrapper delay={0} className="lg:col-span-1 rounded-2xl overflow-hidden relative group">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[10px] uppercase tracking-widest text-primary/60 mb-2 block">
                Web Platform
              </span>
              <h3 className="text-[#E1E0CC] text-xl font-medium leading-snug">
                Bespoke digital flagships.
              </h3>
              <p className="text-gray-400 text-xs mt-2">
                Custom-built for performance & conversions.
              </p>
            </div>
          </CardWrapper>

          {/* Card 2: Mobile */}
          <CardWrapper delay={0.15}>
            <FeatureCard
              number="01"
              title="Mobile Applications."
              icon="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=128&q=85"
              description="We build iOS and Android apps that feel native — because performance and feel aren't optional."
              items={[
                "React Native (iOS & Android)",
                "Gesture-driven interactions",
                "Offline-first architecture",
                "Push notifications & analytics",
              ]}
            />
          </CardWrapper>

          {/* Card 3: Custom Software */}
          <CardWrapper delay={0.3}>
            <FeatureCard
              number="02"
              title="Custom Software."
              icon="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=128&q=85"
              description="When off-the-shelf tools slow you down, we engineer software built around your exact processes."
              items={[
                "Internal tools & dashboards",
                "Business workflow automation",
                "CRM & ERP integrations",
              ]}
            />
          </CardWrapper>

          {/* Card 4: Full Setup */}
          <CardWrapper delay={0.45}>
            <FeatureCard
              number="03"
              title="Full Technical Setup."
              icon="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=128&q=85"
              description="From DNS and SSL to cloud hosting and CI/CD pipelines — we handle every layer of your infrastructure."
              items={[
                "Cloud setup (AWS / GCP)",
                "Domain, DNS & SSL",
                "CI/CD & automated deploys",
              ]}
            />
          </CardWrapper>
        </div>
      </div>
    </section>
  );
}

function CardWrapper({
  children,
  delay,
  className = "",
}: {
  children: React.ReactNode;
  delay: number;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`h-full min-h-[340px] ${className}`}
    >
      {children}
    </motion.div>
  );
}

function FeatureCard({
  number,
  title,
  icon,
  description,
  items,
}: {
  number: string;
  title: string;
  icon: string;
  description: string;
  items: string[];
}) {
  return (
    <div className="bg-[#111] border border-white/5 rounded-2xl p-6 md:p-8 h-full flex flex-col group hover:border-white/10 transition-colors">
      <div className="mb-6 flex items-start justify-between">
        <img
          src={icon}
          alt=""
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-black/50 p-2 object-contain"
        />
        <span className="text-gray-600 text-xs font-serif italic">({number})</span>
      </div>

      <h3 className="text-lg sm:text-xl text-[#E1E0CC] font-medium mb-3 group-hover:text-white transition-colors">
        {title}
      </h3>

      <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-6 flex-grow">
        {description}
      </p>

      <ul className="space-y-2.5 mb-8">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-400">
            <Check className="w-4 h-4 text-primary shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <a
        href="#services"
        className="flex items-center text-primary text-xs sm:text-sm font-medium hover:text-white transition-colors group/link mt-auto"
      >
        Explore this service
        <ArrowRight className="w-4 h-4 ml-2 -rotate-45 transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
      </a>
    </div>
  );
}
