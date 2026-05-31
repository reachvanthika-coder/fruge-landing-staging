"use client";

import { FocusRail } from "@/components/ui/focus-rail";
import { getCategoryFocusRailItems } from "@/lib/constants/categories";

export function ProductRiverRail() {
  return (
    <FocusRail
      items={getCategoryFocusRailItems()}
      loop
      autoPlay={false}
      className="rounded-2xl ring-1 ring-charcoal/10"
    />
  );
}
