import { cn } from "@/lib/cn";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

type DataCalloutCardProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  className?: string;
  light?: boolean;
};

export function DataCalloutCard({
  value,
  prefix,
  suffix,
  label,
  className,
  light,
}: DataCalloutCardProps) {
  return (
    <figure
      className={cn(
        "rounded-[var(--radius-card)] border p-6 shadow-[var(--shadow-card)] transition-shadow duration-200 hover:shadow-[var(--shadow-card-hover)]",
        light
          ? "border-white/10 bg-white/5"
          : "border-brand-red/10 bg-warm-white",
        className,
      )}
    >
      <p
        className={cn(
          "font-display text-4xl font-semibold sm:text-5xl",
          light ? "text-brand-red-light" : "text-brand-red",
        )}
      >
        <AnimatedCounter
          value={value}
          prefix={prefix}
          suffix={suffix}
          label={label}
        />
      </p>
      <figcaption
        className={cn(
          "mt-3 font-body text-sm leading-relaxed sm:text-base",
          light ? "text-white/75" : "text-text-muted",
        )}
      >
        {label}
      </figcaption>
    </figure>
  );
}
