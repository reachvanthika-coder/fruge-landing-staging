"use client";

import { CategoryFlavorExplorer } from "@/components/category/CategoryFlavorExplorer";
import { SectionWave } from "@/components/ui/SectionWave";
import type { ImageTransitionMode } from "@/components/catalog/FlavorProductPreview";
import type { FlavorSkuStackItem } from "@/lib/catalog/flavor-stack-items";
import { useCallback, useState } from "react";

const ENQUIRY_BG = "#1a120a";

type CategoryExplorerSectionProps = {
  flavors: FlavorSkuStackItem[];
  initialFlavorId?: string;
  imageTransitionMode?: ImageTransitionMode;
};

function getInitialBackground(
  flavors: FlavorSkuStackItem[],
  initialFlavorId?: string,
): string {
  const match = initialFlavorId
    ? flavors.find((f) => f.id === initialFlavorId)
    : undefined;
  return match?.backgroundColor ?? flavors[0]?.backgroundColor ?? "#F5E6D3";
}

export function CategoryExplorerSection({
  flavors,
  initialFlavorId,
  imageTransitionMode = "crossfade",
}: CategoryExplorerSectionProps) {
  const [waveFromColor, setWaveFromColor] = useState(() =>
    getInitialBackground(flavors, initialFlavorId),
  );

  const handleActiveFlavorChange = useCallback((flavor: FlavorSkuStackItem) => {
    setWaveFromColor(flavor.backgroundColor);
  }, []);

  return (
    <>
      <CategoryFlavorExplorer
        flavors={flavors}
        initialFlavorId={initialFlavorId}
        imageTransitionMode={imageTransitionMode}
        onActiveFlavorChange={handleActiveFlavorChange}
      />

      <SectionWave
        fromColor={waveFromColor}
        toColor={ENQUIRY_BG}
        variant={2}
        drips
        transitionFromColor
      />
    </>
  );
}
