import { resolveCatalogImage } from "@/lib/catalog/resolve-image";
import { cn } from "@/lib/cn";
import Image from "next/image";

type CatalogProductImageProps = {
  imageUrl: string | null | undefined;
  alt: string;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  priority?: boolean;
  showPendingBadge?: boolean;
};

export function CatalogProductImage({
  imageUrl,
  alt,
  className,
  imageClassName,
  sizes = "(max-width: 768px) 100vw, 400px",
  priority = false,
  showPendingBadge = true,
}: CatalogProductImageProps) {
  const { src, isPlaceholder } = resolveCatalogImage(imageUrl);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        className={cn("object-cover", imageClassName)}
        sizes={sizes}
        priority={priority}
      />
      {isPlaceholder && showPendingBadge && (
        <div
          className="absolute inset-x-0 bottom-0 bg-charcoal/75 px-3 py-2 text-center font-body text-xs font-medium text-cream"
          aria-hidden="true"
        >
          Photo pending — add URL in CSV
        </div>
      )}
    </div>
  );
}
