import type { AssetDefinition } from "@/lib/assets";
import { AssetPlaceholder } from "@/components/ui/AssetPlaceholder";
import { cn } from "@/lib/cn";
import Image from "next/image";

type SiteAssetProps = {
  asset: AssetDefinition;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
  /** Fill the parent container (hero backgrounds). Default uses aspect ratio box. */
  fill?: boolean;
  objectFit?: "cover" | "contain";
};

export function SiteAsset({
  asset,
  className,
  imageClassName,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 1200px",
  fill = false,
  objectFit = "cover",
}: SiteAssetProps) {
  const fitClass = objectFit === "contain" ? "object-contain" : "object-cover";
  const isSvgAsset =
    asset.variant === "svg" || asset.path?.toLowerCase().endsWith(".svg");

  if (asset.path) {
    if (isSvgAsset) {
      return (
        <div
          className={cn(
            "relative flex items-center justify-center overflow-hidden rounded-[var(--radius-card)]",
            className,
          )}
          style={fill ? undefined : { aspectRatio: asset.aspectRatio }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset.path}
            alt={asset.alt ?? asset.label}
            className={cn("h-full w-full", fitClass, imageClassName)}
          />
        </div>
      );
    }

    if (fill) {
      return (
        <Image
          src={asset.path}
          alt={asset.alt ?? asset.label}
          fill
          priority={priority}
          sizes={sizes}
          className={cn(fitClass, imageClassName, className)}
        />
      );
    }

    return (
      <div
        className={cn(
          "relative overflow-hidden rounded-[var(--radius-card)]",
          className,
        )}
        style={{ aspectRatio: asset.aspectRatio }}
      >
        <Image
          src={asset.path}
          alt={asset.alt ?? asset.label}
          fill
          priority={priority}
          sizes={sizes}
          className={cn(fitClass, imageClassName)}
        />
      </div>
    );
  }

  return (
    <AssetPlaceholder
      assetId={asset.id}
      label={asset.label}
      aspectRatio={asset.aspectRatio}
      variant={asset.variant}
      dimensions={asset.dimensions}
      className={className}
    />
  );
}
