import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function useParallax(
  ref: React.RefObject<HTMLElement | null>,
  speed: number = 1
) {
  useEffect(() => {
    if (!ref.current) return;

    const yVal = speed * 100;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    tl.fromTo(
      ref.current,
      { y: -yVal },
      { y: yVal, ease: "none" }
    );

    return () => {
      tl.kill();
    };
  }, [ref, speed]);
}
