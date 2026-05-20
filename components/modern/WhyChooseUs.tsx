"use client";

import AnimatedLetter from "../animations/AnimatedLetter";
import WordsPullUpMultiStyle from "../animations/WordsPullUpMultiStyle";
import { Counter } from "../animations/Counter";
import { motion } from "framer-motion";

const stats = [
  { value: "120+", label: "Projects delivered" },
  { value: "8 yrs", label: "In the industry" },
  { value: "98%", label: "Client retention rate" },
  { value: "34", label: "Countries served" },
];

const reasons = [
  {
    number: "01",
    title: "We start with strategy, not syntax.",
    body: "Most agencies open a code editor on day one. We don't. Every engagement begins with a deep discovery phase — understanding your users, your market, and your exact business objective. Only then do we write a single line of code.",
  },
  {
    number: "02",
    title: "Full-stack ownership, zero hand-holding.",
    body: "From domain setup to database schema, deployment pipelines to design systems — we own every layer. You get one team, one point of contact, and one version of the truth. No subcontracting, no finger-pointing.",
  },
  {
    number: "03",
    title: "Built to scale, not to impress.",
    body: "We have seen beautiful apps collapse under their own weight the moment they get real traffic. Our architecture decisions are made with your year-three growth in mind, not just your launch-day demo.",
  },
];

export default function WhyChooseUs() {
  const headingSegments = [
    { text: "We are Prisma, ", className: "font-normal text-[#DEDBC8]" },
    {
      text: "digital craftsmen. ",
      className: "italic font-serif text-[#DEDBC8]",
    },
    {
      text: "We turn complex problems into elegant digital products.",
      className: "font-normal text-[#DEDBC8]",
    },
  ];

  return (
    <section id="why-us" className="bg-black py-24 px-4 sm:px-6 md:px-12">
      {/* Top card: headline + animated paragraph */}
      <div className="bg-[#101010] rounded-[2rem] p-10 md:p-20 max-w-6xl mx-auto flex flex-col items-center text-center mb-6">
        <span className="text-primary text-[10px] sm:text-xs uppercase tracking-widest mb-10">
          Why choose us
        </span>

        <WordsPullUpMultiStyle
          segments={headingSegments}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-4xl mx-auto leading-[1] sm:leading-[0.95] mb-14"
        />

        <div className="max-w-2xl text-[#DEDBC8]/80 text-sm md:text-base leading-relaxed">
          <AnimatedLetter>
            Over a decade, we have partnered with funded startups, scale-ups, and established enterprises across four continents. We don't just write code — we build the digital infrastructure that companies stake their future on. We are fiercely opinionated about quality, allergic to shortcuts, and obsessed with outcomes that actually move the needle for your business.
          </AnimatedLetter>
        </div>
      </div>

      {/* Stats row */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="bg-[#101010] rounded-2xl p-8 flex flex-col justify-between"
          >
            <Counter 
              value={stat.value} 
              className="text-4xl md:text-5xl font-medium text-[#E1E0CC] mb-2" 
            />
            <span className="text-gray-500 text-sm">{stat.label}</span>
          </motion.div>
        ))}
      </div>

      {/* Reasons grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-3">
        {reasons.map((reason, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className="bg-[#101010] rounded-2xl p-8 md:p-10 flex flex-col gap-4"
          >
            <span className="text-gray-600 font-serif italic text-sm">
              {reason.number}
            </span>
            <h3 className="text-[#E1E0CC] text-lg md:text-xl font-medium leading-snug">
              {reason.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">{reason.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
