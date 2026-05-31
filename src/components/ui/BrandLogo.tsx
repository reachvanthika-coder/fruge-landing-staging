import { getAsset } from "@/lib/assets";
import { cn } from "@/lib/cn";
import Image from "next/image";
import Link from "next/link";
import { AssetPlaceholder } from "@/components/ui/AssetPlaceholder";

type LogoBackground = "dark" | "light";

type BrandLogoProps = {
  /**
   * Section background behind the logo.
   * - `dark` → white logo (`/user_logo/furgel-logo-white-version.png`)
   * - `light` → red logo (`/user_logo/furgel-logo-red-version.png`)
   */
  on?: LogoBackground;
  /** Override asset id (prefer `on` for theme-aware usage) */
  assetId?: "brand-logo-primary" | "brand-logo-light";
  className?: string;
  href?: string;
  priority?: boolean;
};

function resolveAssetId(
  on: LogoBackground | undefined,
  assetId: BrandLogoProps["assetId"],
): NonNullable<BrandLogoProps["assetId"]> {
  if (assetId) return assetId;
  if (on === "dark") return "brand-logo-light";
  if (on === "light") return "brand-logo-primary";
  return "brand-logo-primary";
}

export function BrandLogo({
  on,
  assetId,
  className,
  href = "#hero",
  priority = false,
}: BrandLogoProps) {
  const resolvedId = resolveAssetId(on, assetId);
  const asset = getAsset(resolvedId);

  const content = asset?.path ? (
    <Image
      src={asset.path}
      alt={asset.alt ?? "Frugel — Taste Meets Soul"}
      width={160}
      height={64}
      priority={priority}
      className={cn("h-10 w-auto object-contain sm:h-12", className)}
    />
  ) : (
    <AssetPlaceholder
      assetId={asset?.id ?? resolvedId}
      label={asset?.label ?? "Frugel logo"}
      aspectRatio="240/64"
      variant="image"
      className={cn("!aspect-auto h-10 w-36 !p-2 sm:h-12", className)}
    />
  );

  return (
    <Link
      href={href}
      className="inline-flex shrink-0 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal-deep"
      aria-label="Frugel — back to top"
    >
      {content}
    </Link>
  );
}
