"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface AnimatedLetterProps {
  children: React.ReactNode;
  className?: string;
}

export default function AnimatedLetter({ children, className = "" }: AnimatedLetterProps) {
  const text = typeof children === "string" ? children : "";
  const chars = text.split("");
  const totalChars = chars.length;
  
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  return (
    <p ref={ref} className={`flex flex-wrap ${className}`}>
      {chars.map((char, i) => {
        const charProgress = i / totalChars;
        const start = Math.max(0, charProgress - 0.1);
        const end = Math.min(1, charProgress + 0.05);
        
        // Disable hook linting because this is safely iterating
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);
        
        return (
          <motion.span key={i} style={{ opacity }} className={char === " " ? "mr-[0.25em]" : ""}>
            {char}
          </motion.span>
        );
      })}
    </p>
  );
}
