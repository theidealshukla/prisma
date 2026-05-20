"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface TextSegment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: TextSegment[];
  className?: string;
}

export default function WordsPullUpMultiStyle({ segments, className = "" }: WordsPullUpMultiStyleProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  
  let globalWordIndex = 0;

  return (
    <div ref={ref} className={`inline-flex flex-wrap justify-center ${className}`}>
      {segments.map((segment, segIdx) => {
        const words = segment.text.split(" ");
        return (
          <span key={segIdx} className={`inline-flex flex-wrap ${segment.className || ""}`}>
            {words.map((word, wordIdx) => {
              const delay = globalWordIndex * 0.08;
              globalWordIndex++;
              return (
                <motion.span
                  key={`${segIdx}-${wordIdx}`}
                  className="mr-[0.25em] inline-block"
                  initial={{ y: 20, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                  transition={{
                    duration: 0.8,
                    delay,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {word}
                </motion.span>
              );
            })}
          </span>
        );
      })}
    </div>
  );
}
