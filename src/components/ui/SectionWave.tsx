import type { CSSProperties } from "react";
import { cn } from "@/lib/cn";

/**
 * Section background colours — must match @theme tokens in globals.css exactly.
 * Used for seamless wave transitions (from → to).
 */
export const WAVE_FILLS = {
  dark: "#1a120a",
  cream: "#fdf6ec",
  sand: "#e8d5b0",
  forest: "#1c2b1a",
  warmGrey: "#e8e4dc",
} as const;

export type WaveFill = keyof typeof WAVE_FILLS;

export type SectionTransition = {
  from: WaveFill;
  to: WaveFill;
  variant?: 0 | 1 | 2;
  drips?: boolean;
};

/** All section-to-section transitions on the homepage */
export const SECTION_TRANSITIONS: SectionTransition[] = [
  { from: "dark", to: "cream", variant: 0, drips: true },       // Hero → Product River
  { from: "cream", to: "sand", variant: 1, drips: true },       // Product → Origin
  { from: "sand", to: "forest", variant: 2, drips: true },      // Origin → Problem
  { from: "forest", to: "dark", variant: 0, drips: true },     // Problem → Innovation
  { from: "dark", to: "cream", variant: 1, drips: true },        // Innovation → Founders
  // Founders → Why Partner: both cream — no wave
  { from: "cream", to: "warmGrey", variant: 0, drips: true },  // Why Partner → Dealer
  { from: "warmGrey", to: "dark", variant: 1, drips: true },   // Dealer → Enquiry
  // Enquiry → Footer: both dark — no wave
];

const WAVE_PATHS = [
  "M0,48 C180,96 360,16 540,64 C720,112 900,32 1080,72 C1260,112 1380,56 1440,80 L1440,120 L0,120 Z",
  "M0,72 C200,24 400,96 600,48 C800,0 1000,88 1200,56 C1320,40 1380,64 1440,72 L1440,120 L0,120 Z",
  "M0,56 C160,104 320,8 480,64 C640,120 880,24 1080,80 C1200,104 1320,48 1440,64 L1440,120 L0,120 Z",
] as const;

type SectionWaveProps = {
  variant?: 0 | 1 | 2;
  drips?: boolean;
  className?: string;
} & (
  | (SectionTransition & { fromColor?: never; toColor?: never })
  | { fromColor: string; toColor: string; from?: never; to?: never }
);

/**
 * Seamless section divider: top half matches outgoing section (`from`),
 * wave curve fills with incoming section colour (`to`).
 * Overlaps adjacent sections by 1px to prevent body-background bleed.
 * Pass `fromColor` / `toColor` for category or flavor-specific hex transitions.
 */
export function SectionWave(props: SectionWaveProps) {
  const { variant = 0, drips = true, className } = props;

  const fromColor =
    "fromColor" in props && props.fromColor
      ? props.fromColor
      : WAVE_FILLS[props.from!];
  const toColor =
    "toColor" in props && props.toColor
      ? props.toColor
      : WAVE_FILLS[props.to!];
  const path = WAVE_PATHS[variant];

  if (fromColor.toLowerCase() === toColor.toLowerCase()) return null;

  return (
    <div
      className={cn(
        "section-wave-divider relative z-[1] -mt-px -mb-px block leading-[0]",
        className,
      )}
      aria-hidden="true"
      data-gsap="section-wave"
      style={
        {
          "--wave-from": fromColor,
          "--wave-to": toColor,
        } as CSSProperties
      }
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="block h-12 w-full md:h-20 lg:h-24"
        role="presentation"
      >
        {/* Outgoing section colour fills the full canvas (visible above the wave crest) */}
        <rect width="1440" height="120" fill={fromColor} />
        {/* Incoming section colour fills below the wave curve */}
        <path d={path} fill={toColor} className="section-wave-path" />
        {drips && (
          <g fill={toColor} opacity="0.85">
            <ellipse cx="540" cy="108" rx="4" ry="7" />
            <ellipse cx="820" cy="112" rx="3" ry="6" />
            <ellipse cx="1080" cy="110" rx="5" ry="8" />
          </g>
        )}
      </svg>
    </div>
  );
}
