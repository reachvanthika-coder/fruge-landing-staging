import {
  PLACEHOLDER_PACKSHOT_IMAGE,
  resolveCatalogImage,
} from "@/lib/catalog/resolve-image";
import { cn } from "@/lib/cn";
import Image from "next/image";

export type CatalogImageVariant = "cover" | "packshot";

type CatalogProductImageProps = {
  imageUrl: string | null | undefined;
  alt: string;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  priority?: boolean;
  showPendingBadge?: boolean;
  /** `packshot` — transparent PNG on section bg; `cover` — rectangular photos */
  variant?: CatalogImageVariant;
};

export function CatalogProductImage({
  imageUrl,
  alt,
  className,
  imageClassName,
  sizes = "(max-width: 768px) 100vw, 400px",
  priority = false,
  showPendingBadge = true,
  variant = "cover",
}: CatalogProductImageProps) {
  const resolved = resolveCatalogImage(imageUrl);
  const isPackshot = variant === "packshot";
  const src =
    resolved.isPlaceholder && isPackshot
      ? PLACEHOLDER_PACKSHOT_IMAGE
      : resolved.src;
  const pendingLabel = isPackshot
    ? "Pack shot pending — add URL in CSV"
    : "Photo pending — add URL in CSV";

  return (
    <div
      className={cn(
        "relative",
        isPackshot ? "flex h-full w-full items-center justify-center" : "overflow-hidden",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className={cn(
          isPackshot
            ? "object-contain object-bottom p-2 drop-shadow-[0_18px_28px_rgba(26,18,10,0.14)] sm:p-4"
            : "object-cover",
          imageClassName,
        )}
        sizes={sizes}
        priority={priority}
      />
      {resolved.isPlaceholder && showPendingBadge && (
        <p
          className={cn(
            "absolute font-body text-xs text-charcoal/50",
            isPackshot
              ? "inset-x-0 bottom-0 text-center"
              : "inset-x-0 bottom-0 bg-charcoal/75 px-3 py-2 text-center font-medium text-cream",
          )}
          aria-hidden="true"
        >
          {pendingLabel}
        </p>
      )}
    </div>
  );
}
