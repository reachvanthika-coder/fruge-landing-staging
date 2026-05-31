import { cn } from "@/lib/cn";
import type { LucideIcon } from "lucide-react";

type IconBadgeProps = {
  icon: LucideIcon;
  label: string;
  className?: string;
};

export function IconBadge({ icon: Icon, label, className }: IconBadgeProps) {
  return (
    <div
      className={cn(
        "flex items-start gap-3 rounded-[var(--radius-card)] border border-brand-red/10 bg-warm-white p-4",
        className,
      )}
    >
      <span
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-red-muted text-brand-red"
        aria-hidden="true"
      >
        <Icon className="h-5 w-5" />
      </span>
      <p className="font-body text-sm leading-relaxed text-charcoal sm:text-base">
        {label}
      </p>
    </div>
  );
}
