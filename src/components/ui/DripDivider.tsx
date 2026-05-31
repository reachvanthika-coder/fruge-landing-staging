import { cn } from "@/lib/cn";

type DripDividerProps = {
  className?: string;
  variant?: "subtle" | "footer";
};

export function DripDivider({ className, variant = "subtle" }: DripDividerProps) {
  return (
    <div
      className={cn("flex justify-center", className)}
      aria-hidden="true"
      data-gsap="drip-divider"
    >
      <svg
        viewBox="0 0 120 48"
        className={cn(
          variant === "footer" ? "h-24 w-48 opacity-20" : "h-8 w-20 opacity-40",
          "text-red-drip",
        )}
        fill="currentColor"
      >
        <path d="M60 4 C45 4 35 14 35 26 C35 32 38 38 42 42 C44 44 46 46 48 48 C50 46 52 44 54 42 C58 38 61 32 61 26 C61 14 75 4 60 4 Z" />
        <ellipse cx="48" cy="46" rx="3" ry="5" opacity="0.6" />
        <ellipse cx="54" cy="44" rx="2" ry="4" opacity="0.5" />
        <ellipse cx="60" cy="47" rx="2.5" ry="5" opacity="0.7" />
      </svg>
    </div>
  );
}
