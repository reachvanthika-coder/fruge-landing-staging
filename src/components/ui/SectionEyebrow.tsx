import { cn } from "@/lib/cn";

type SectionEyebrowProps = {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
  script?: boolean;
};

export function SectionEyebrow({
  children,
  className,
  light,
  script,
}: SectionEyebrowProps) {
  if (script) {
    return (
      <p
        className={cn(
          "section-eyebrow mb-4 font-soul text-3xl sm:text-4xl",
          light ? "text-cream/90" : "text-red-drip",
          className,
        )}
      >
        {children}
      </p>
    );
  }

  return (
    <p
      className={cn(
        "section-eyebrow mb-4 font-body text-xs font-medium uppercase tracking-[0.12em]",
        light ? "text-red-drip/80" : "text-red-drip",
        className,
      )}
    >
      {children}
    </p>
  );
}
