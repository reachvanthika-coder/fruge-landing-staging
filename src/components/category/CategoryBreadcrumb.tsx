import { cn } from "@/lib/cn";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

type CategoryBreadcrumbProps = {
  categoryTitle: string;
  className?: string;
  light?: boolean;
};

export function CategoryBreadcrumb({
  categoryTitle,
  className,
  light,
}: CategoryBreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("flex flex-wrap items-center gap-2 font-body text-sm", className)}
    >
      <Link
        href="/"
        className={cn(
          "inline-flex min-h-10 items-center gap-1 transition-colors",
          light ? "text-cream/70 hover:text-cream" : "text-charcoal/60 hover:text-red-drip",
        )}
      >
        <ChevronLeft className="h-4 w-4 shrink-0" aria-hidden="true" />
        Home
      </Link>
      <span className={light ? "text-cream/40" : "text-charcoal/30"} aria-hidden="true">
        /
      </span>
      <Link
        href="/products"
        className={cn(
          "min-h-10 inline-flex items-center transition-colors",
          light ? "text-cream/70 hover:text-cream" : "text-charcoal/60 hover:text-red-drip",
        )}
      >
        Products
      </Link>
      <span className={light ? "text-cream/40" : "text-charcoal/30"} aria-hidden="true">
        /
      </span>
      <span
        className={cn(
          "font-medium",
          light ? "text-cream" : "text-charcoal",
        )}
        aria-current="page"
      >
        {categoryTitle}
      </span>
    </nav>
  );
}
