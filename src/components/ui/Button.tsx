import { cn } from "@/lib/cn";
import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "default" | "sm" | "lg";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-red text-white hover:bg-brand-red-dark focus-visible:ring-brand-red",
  secondary:
    "border-2 border-brand-red bg-transparent text-brand-red hover:bg-brand-red-muted focus-visible:ring-brand-red",
  ghost:
    "bg-transparent text-charcoal hover:bg-warm-grey/60 focus-visible:ring-charcoal",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "min-h-10 px-4 py-2 text-sm",
  default: "min-h-11 px-6 py-2.5 text-base",
  lg: "min-h-12 px-8 py-3 text-base",
};

export function Button({
  variant = "primary",
  size = "default",
  className,
  href,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex cursor-pointer items-center justify-center rounded-[var(--radius-button)] font-body font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    variantStyles[variant],
    sizeStyles[size],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
