import { cn } from "@/lib/cn";
import type { ReasonCard as ReasonCardType } from "@/lib/constants/reasons";

type ReasonCardProps = {
  card: ReasonCardType;
  className?: string;
};

export function ReasonCard({ card, className }: ReasonCardProps) {
  const Icon = card.icon;

  return (
    <article
      className={cn(
        "group rounded-[var(--radius-card)] border border-warm-grey border-l-[3px] border-l-transparent bg-cream p-6 transition-all duration-200",
        "hover:-translate-y-1.5 hover:shadow-[var(--shadow-card)]",
        card.accentColor,
        className,
      )}
      data-gsap="reason-card"
    >
      <span
        className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-brand-red-muted text-red-drip"
        aria-hidden="true"
      >
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="mb-2 font-display text-xl font-bold text-charcoal">
        {card.title}
      </h3>
      <p className="font-body text-sm leading-relaxed text-text-muted sm:text-base">
        {card.description}
      </p>
    </article>
  );
}
