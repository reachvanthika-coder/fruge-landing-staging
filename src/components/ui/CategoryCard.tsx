import { AssetPlaceholder } from "@/components/ui/AssetPlaceholder";
import { getAsset } from "@/lib/assets";
import { cn } from "@/lib/cn";
import type { CategoryCard as CategoryCardType } from "@/lib/constants/categories";

type CategoryCardProps = {
  card: CategoryCardType;
  className?: string;
  index?: number;
};

export function CategoryCard({ card, className, index = 0 }: CategoryCardProps) {
  const asset = getAsset(card.assetId);

  return (
    <article
      className={cn(
        "group relative flex min-w-[280px] flex-col overflow-hidden rounded-[var(--radius-card)] border-2 shadow-[var(--shadow-card)] transition-all duration-300",
        "hover:scale-[1.04] hover:shadow-[var(--shadow-product)] focus-within:scale-[1.04]",
        card.bgClass,
        card.borderClass,
        index % 2 === 1 && "lg:-mt-6",
        className,
      )}
      data-gsap="category-card"
    >
      <div className="p-4 pb-0">
        {asset ? (
          <div className="overflow-hidden rounded-xl">
            <AssetPlaceholder
              assetId={asset.id}
              label={asset.label}
              aspectRatio={asset.aspectRatio}
              variant={asset.variant}
              dimensions={asset.dimensions}
              className="transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-5 pt-4">
        <h3 className={cn("font-display text-2xl font-bold", card.colorClass)}>
          {card.title}
        </h3>
        <p className="mt-2 font-display text-lg italic text-charcoal/80">
          &ldquo;{card.tagline}&rdquo;
        </p>
        <p className="mt-4 font-body text-xs text-text-muted">{card.sizes}</p>

        {/* Drip accent on hover */}
        <div
          className="mt-4 h-1 w-0 rounded-full bg-red-drip transition-all duration-300 group-hover:w-12"
          aria-hidden="true"
        />
      </div>
    </article>
  );
}
