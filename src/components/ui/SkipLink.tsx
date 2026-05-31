import Link from "next/link";
import { cn } from "@/lib/cn";

export function SkipLink() {
  return (
    <Link
      href="#main-content"
      className={cn(
        "sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[1000]",
        "focus:rounded-[var(--radius-button)] focus:bg-brand-red focus:px-4 focus:py-2 focus:text-white",
      )}
    >
      Skip to main content
    </Link>
  );
}
