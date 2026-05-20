import { useEffect, useRef } from "react";
import gsap from "gsap";

export function WordReveal({
  text,
  className
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const words = ref.current.querySelectorAll("span.reveal-word");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%",
        end: "bottom 60%",
        scrub: true,
      },
    });

    tl.fromTo(
      words,
      { opacity: 0.2 },
      { opacity: 1, duration: 1, stagger: 0.1, ease: "none" }
    );

    return () => {
      tl.kill();
    };
  }, []);

  const wordsArray = text.split(" ");

  return (
    <p ref={ref} className={className}>
      {wordsArray.map((word, i) => (
        <span key={i} className="reveal-word inline-block mr-[0.25em]">
          {word}
        </span>
      ))}
    </p>
  );
}
