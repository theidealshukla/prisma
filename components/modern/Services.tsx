"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe, Smartphone, Code2, ServerCog } from "lucide-react";
import WordsPullUp from "../animations/WordsPullUp";

const services = [
  {
    icon: Globe,
    number: "01",
    title: "Web Platforms",
    tagline: "Your website is your most powerful salesperson. We make sure it closes.",
    description:
      "We design and build high-performance websites that go far beyond a digital brochure. Every project is architected for speed (sub-2s load times), optimised for search engines from day one, and designed to convert visitors into paying customers. Whether you need a marketing site, a SaaS product, an e-commerce platform, or a full web application — we build it right.",
    deliverables: [
      "UX research & wireframing",
      "Custom responsive UI design",
      "React / Next.js development",
      "CMS integration (Sanity, Contentful)",
      "SEO technical foundation",
      "Performance & Core Web Vitals audit",
    ],
  },
  {
    icon: Smartphone,
    number: "02",
    title: "Mobile Applications",
    tagline: "Apps people actually want to open. Engineered for iOS and Android.",
    description:
      "We build native-quality mobile experiences using React Native and Expo — giving you a single codebase that performs beautifully on both iOS and Android without the double engineering cost. From fintech dashboards to consumer social apps, we understand that a mobile product lives or dies by the feel of its interactions. We sweat every gesture, animation, and micro-interaction.",
    deliverables: [
      "iOS & Android (React Native)",
      "Offline-first architecture",
      "Push notifications & deep linking",
      "App Store & Play Store submission",
      "OTA updates & crash monitoring",
      "Backend API integration",
    ],
  },
  {
    icon: Code2,
    number: "03",
    title: "Custom Software",
    tagline: "When no existing tool fits your process, we build the one that does.",
    description:
      "Off-the-shelf software is built for the average business. If your workflows, data models, or user needs are unique — and they almost always are — generic SaaS solutions create more friction than they solve. We scope, architect, and deliver custom internal tools, automation platforms, client portals, and operational systems tailored exactly to how your team works.",
    deliverables: [
      "Requirements mapping & scoping",
      "Backend API & database design",
      "Admin dashboards & portals",
      "Workflow automation & integrations",
      "Role-based access & permissions",
      "Ongoing support & iteration",
    ],
  },
  {
    icon: ServerCog,
    number: "04",
    title: "Full Setup & Infrastructure",
    tagline: "From concept to production. We own every layer so you don't have to.",
    description:
      "Most clients come to us with an idea and leave with a running, monitored, production-grade system. We handle the full technical stack: domain and DNS setup, cloud infrastructure on AWS or GCP, containerisation with Docker, CI/CD pipelines, database provisioning, SSL, backups, and 24/7 uptime monitoring. You focus on your business. We keep the lights on.",
    deliverables: [
      "Cloud setup (AWS / GCP / Azure)",
      "Docker & containerisation",
      "CI/CD pipeline automation",
      "Database provisioning & backups",
      "Domain, DNS & SSL management",
      "Monitoring & alerting (24/7)",
    ],
  },
];

import { useRef, useEffect } from "react";
import gsap from "gsap";

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = service.icon;

  useEffect(() => {
    if (!cardRef.current) return;
    
    gsap.fromTo(
      cardRef.current,
      {
        clipPath: "inset(100% 0% 0% 0% round 16px)",
        y: 50,
      },
      {
        clipPath: "inset(0% 0% 0% 0% round 16px)",
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
        }
      }
    );
  }, []);

  return (
    <div
      ref={cardRef}
      className="group bg-[#0a0a0a] hover:bg-[#111] border border-white/5 hover:border-white/10 p-8 md:p-12 transition-colors duration-500 will-change-transform"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        {/* Left */}
        <div className="lg:col-span-5">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#1a1a1a] flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
              <Icon className="w-5 h-5 text-primary" />
            </div>
            <span className="text-gray-600 text-xs font-serif italic">
              {service.number}
            </span>
          </div>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#E1E0CC] mb-3 group-hover:text-white transition-colors">
            {service.title}
          </h3>
          <p className="text-primary/60 text-sm md:text-base italic mb-6">
            {service.tagline}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#E1E0CC] transition-colors"
          >
            Discuss this service
            <ArrowRight className="w-4 h-4 -rotate-45" />
          </a>
        </div>

        {/* Right */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          <p className="text-gray-400 text-sm md:text-base leading-[1.8]">
            {service.description}
          </p>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-gray-600 mb-4">
              What's included
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
              {service.deliverables.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-sm text-gray-400"
                >
                  <span className="w-1 h-1 rounded-full bg-primary/50 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      className="bg-black py-24 px-4 sm:px-6 md:px-12 text-[#DEDBC8]"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20 border-b border-white/10 pb-16">
          <div>
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-500 mb-6 block">
              What we do
            </span>
            <WordsPullUp
              text="Our Capabilities"
              className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight"
            />
          </div>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-sm md:text-right">
            Three core services. Delivered end-to-end. No third parties, no
            contractors — just our team, your product.
          </p>
        </div>

        {/* Service cards */}
        <div className="space-y-3">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
