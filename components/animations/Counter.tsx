import { useEffect, useRef } from "react";
import gsap from "gsap";

export function Counter({
  value,
  className
}: {
  value: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current || !numberRef.current) return;

    // Extract numbers and non-numbers
    const numMatch = value.match(/\d+/);
    if (!numMatch) return;

    const endValue = parseInt(numMatch[0], 10);
    const obj = { val: 0 };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: "top 85%",
      },
    });

    tl.to(obj, {
      val: endValue,
      duration: 2,
      ease: "power3.out",
      onUpdate: () => {
        if (numberRef.current) {
          numberRef.current.innerText = Math.floor(obj.val).toString();
        }
      },
    });

    return () => {
      tl.kill();
    };
  }, [value]);

  const numMatch = value.match(/\d+/);
  if (!numMatch) return <span className={className}>{value}</span>;

  const prefix = value.substring(0, numMatch.index);
  const suffix = value.substring(numMatch.index! + numMatch[0].length);

  return (
    <span ref={ref} className={className}>
      {prefix}
      <span ref={numberRef}>0</span>
      {suffix}
    </span>
  );
}
