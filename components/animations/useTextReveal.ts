import { useEffect } from "react";
import gsap from "gsap";

export function useTextReveal(
  ref: React.RefObject<HTMLElement | null>,
  delay: number = 0
) {
  useEffect(() => {
    if (!ref.current) return;

    // A simple character-by-character reveal by splitting text
    // Note: for production a robust library like SplitText is better,
    // but we can implement a basic manual split for this effect.

    const element = ref.current;
    const text = element.innerText;
    element.innerHTML = "";

    const chars = text.split("").map((char) => {
      if (char === " ") return "&nbsp;";
      return `<span class="inline-block opacity-0 translate-y-4 filter blur-[4px]">${char}</span>`;
    });

    element.innerHTML = chars.join("");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
      },
    });

    tl.to(element.querySelectorAll("span"), {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 0.8,
      stagger: 0.02,
      ease: "power3.out",
      delay: delay,
    });

    return () => {
      tl.kill();
      // restore original text
      element.innerHTML = text;
    };
  }, [ref, delay]);
}
