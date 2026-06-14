"use client";

import { FlavorSkuStackInteractor } from "@/components/ui/flavor-sku-stack-interactor";
import type { ImageTransitionMode } from "@/components/catalog/FlavorProductPreview";
import type { FlavorSkuStackItem } from "@/lib/catalog/flavor-stack-items";

type CategoryFlavorExplorerProps = {
  flavors: FlavorSkuStackItem[];
  initialFlavorId?: string;
  imageTransitionMode?: ImageTransitionMode;
  showTransitionToggle?: boolean;
  onActiveFlavorChange?: (flavor: FlavorSkuStackItem) => void;
};

export function CategoryFlavorExplorer({
  flavors,
  initialFlavorId,
  imageTransitionMode = "crossfade",
  showTransitionToggle = false,
  onActiveFlavorChange,
}: CategoryFlavorExplorerProps) {
  return (
    <FlavorSkuStackInteractor
      flavors={flavors}
      initialFlavorId={initialFlavorId}
      imageTransitionMode={imageTransitionMode}
      showTransitionToggle={showTransitionToggle}
      onActiveFlavorChange={onActiveFlavorChange}
    />
  );
}
