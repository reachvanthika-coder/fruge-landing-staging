"use client";

import { cn } from "@/lib/cn";
import { useEffect, useRef, useState } from "react";

type AnimatedCounterProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
  label: string;
};

export function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  duration = 2,
  className,
  label,
}: AnimatedCounterProps) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / (duration * 1000), 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(Math.ceil(eased * value));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  const formatted =
    value >= 1000 ? display.toLocaleString("en-IN") : String(display);

  return (
    <span
      ref={ref}
      className={cn("tabular-nums", className)}
      aria-live="polite"
      aria-label={`${prefix}${value.toLocaleString("en-IN")}${suffix} ${label}`}
    >
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
