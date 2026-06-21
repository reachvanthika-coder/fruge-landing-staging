import {
  INDIA_MAP_COLORS,
  INDIA_MAP_VIEWBOX,
  stateFill,
  stateStroke,
  stateStrokeWidth,
} from "@/lib/india-map/regions";
import { cn } from "@/lib/cn";
import indiaMap from "@svg-maps/india";

type IndiaSupplyMapProps = {
  className?: string;
};

export function IndiaSupplyMap({ className }: IndiaSupplyMapProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[var(--radius-card)] border border-charcoal/10 bg-cream p-4 shadow-[var(--shadow-card)] sm:p-6",
        className,
      )}
    >
      <svg
        viewBox={indiaMap.viewBox ?? INDIA_MAP_VIEWBOX}
        className="h-auto w-full"
        role="img"
        aria-label="Map of India highlighting Goa headquarters and active dealer states in Western and South India"
      >
        <g aria-hidden="true">
          {indiaMap.locations.map((location) => (
            <path
              key={location.id}
              id={location.id}
              data-state={location.name}
              d={location.path}
              fill={stateFill(location.id)}
              stroke={stateStroke(location.id)}
              strokeWidth={stateStrokeWidth(location.id)}
              strokeLinejoin="round"
            />
          ))}
        </g>
      </svg>

      <ul
        className="mt-4 flex flex-wrap gap-x-5 gap-y-2 font-body text-xs text-charcoal/70"
        aria-hidden="true"
      >
        <li className="flex items-center gap-2">
          <span
            className="h-3 w-3 rounded-sm border border-[#2d7a4f]/40"
            style={{ backgroundColor: INDIA_MAP_COLORS.hub }}
          />
          Goa — HQ
        </li>
        <li className="flex items-center gap-2">
          <span
            className="h-3 w-3 rounded-sm border border-[#2d7a4f]/40"
            style={{ backgroundColor: INDIA_MAP_COLORS.dealer }}
          />
          Active dealer states
        </li>
      </ul>
    </div>
  );
}
