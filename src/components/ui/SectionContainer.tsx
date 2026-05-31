import { cn } from "@/lib/cn";

type SectionContainerProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  as?: "section" | "footer" | "header";
  maxWidth?: "narrow" | "default" | "wide" | "full";
};

const maxWidthStyles = {
  narrow: "max-w-[860px]",
  default: "max-w-6xl",
  wide: "max-w-7xl",
  full: "max-w-none",
};

export function SectionContainer({
  id,
  children,
  className,
  innerClassName,
  as: Tag = "section",
  maxWidth = "default",
}: SectionContainerProps) {
  return (
    <Tag id={id} className={cn("w-full", className)}>
      <div
        className={cn(
          "mx-auto w-full px-5 sm:px-6 lg:px-8",
          maxWidthStyles[maxWidth],
          innerClassName,
        )}
      >
        {children}
      </div>
    </Tag>
  );
}
