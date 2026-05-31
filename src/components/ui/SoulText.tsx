import { cn } from "@/lib/cn";

type SoulTextProps = {
  children: React.ReactNode;
  className?: string;
  as?: "p" | "span" | "h2";
  light?: boolean;
};

export function SoulText({ children, className, as: Tag = "p", light }: SoulTextProps) {
  return (
    <Tag
      className={cn(
        "font-soul text-3xl leading-none sm:text-4xl lg:text-5xl",
        light ? "text-cream/90" : "text-red-drip",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
