export const INDIA_MAP_VIEWBOX = "0 0 612 696";

/** Kundaim IDC — headquarters */
export const INDIA_HUB_STATE_ID = "ga";

/** Active dealer states (Western + South India) */
export const INDIA_DEALER_STATE_IDS = new Set([
  "mh", // Maharashtra
  "gj", // Gujarat
  "ka", // Karnataka
  "kl", // Kerala
  "tn", // Tamil Nadu
]);

/** Map fill colours — aligned with Frugel palette */
export const INDIA_MAP_COLORS = {
  default: "#F5E6D3",
  hub: "#F0C4C4",
  dealer: "#9ED4B0",
  stroke: "#8B5E2A",
  dealerStroke: "#2d7a4f",
} as const;

export function stateFill(stateId: string): string {
  if (stateId === INDIA_HUB_STATE_ID) return INDIA_MAP_COLORS.hub;
  if (INDIA_DEALER_STATE_IDS.has(stateId)) return INDIA_MAP_COLORS.dealer;
  return INDIA_MAP_COLORS.default;
}

export function stateStroke(stateId: string): string {
  if (INDIA_DEALER_STATE_IDS.has(stateId) || stateId === INDIA_HUB_STATE_ID) {
    return INDIA_MAP_COLORS.dealerStroke;
  }
  return INDIA_MAP_COLORS.stroke;
}

export function stateStrokeWidth(stateId: string): number {
  if (INDIA_DEALER_STATE_IDS.has(stateId) || stateId === INDIA_HUB_STATE_ID) {
    return 1;
  }
  return 0.6;
}
