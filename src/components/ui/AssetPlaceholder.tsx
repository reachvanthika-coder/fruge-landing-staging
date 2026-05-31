import type { AssetVariant } from "@/lib/assets";
import { cn } from "@/lib/cn";
import { Film, ImageIcon, Shapes } from "lucide-react";

type AssetPlaceholderProps = {
  assetId: string;
  label: string;
  aspectRatio?: string;
  variant?: AssetVariant;
  className?: string;
  dimensions?: string;
};

const variantIcons: Record<AssetVariant, typeof ImageIcon> = {
  image: ImageIcon,
  video: Film,
  svg: Shapes,
};

export function AssetPlaceholder({
  assetId,
  label,
  aspectRatio = "16/9",
  variant = "image",
  className,
  dimensions,
}: AssetPlaceholderProps) {
  const Icon = variantIcons[variant];

  return (
    <div
      role="img"
      aria-label={`Placeholder: ${label}. Asset ID: ${assetId}`}
      className={cn(
        "relative flex w-full flex-col items-center justify-center gap-3 overflow-hidden rounded-[var(--radius-card)] border-2 border-dashed border-brand-red/25 bg-brand-red-muted/50 p-6 text-center",
        className,
      )}
      style={{ aspectRatio }}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <div className="space-y-1">
        <p className="font-body text-sm font-medium text-charcoal">{label}</p>
        <p className="font-mono text-xs text-text-muted">{assetId}</p>
        {dimensions && (
          <p className="text-xs text-text-muted">{dimensions}</p>
        )}
        <p className="text-xs uppercase tracking-wider text-brand-red/70">
          {variant} · {aspectRatio}
        </p>
      </div>
    </div>
  );
}
