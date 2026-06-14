"use client";

import { isPlaceholderSrc } from "@/lib/catalog/resolve-image";
import { cn } from "@/lib/cn";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export type ImageTransitionMode = "static" | "crossfade";

type PreviewLayers = {
  current: string;
  previous: string | null;
  visible: boolean;
};

const packshotImageClass =
  "object-contain object-bottom p-4 packshot-preview-shadow sm:p-6";

type FlavorProductPreviewProps = {
  src: string;
  alt: string;
  mode: ImageTransitionMode;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

export function FlavorProductPreview({
  src,
  alt,
  mode,
  className,
  sizes = "(max-width: 768px) 100vw, 480px",
  priority = false,
}: FlavorProductPreviewProps) {
  const [layers, setLayers] = useState<PreviewLayers>({
    current: src,
    previous: null,
    visible: true,
  });
  const latestSrcRef = useRef(src);

  useEffect(() => {
    latestSrcRef.current = src;

    if (mode === "static") {
      setLayers({ current: src, previous: null, visible: true });
      return;
    }

    setLayers((prev) => {
      if (prev.current === src) {
        return prev.visible ? prev : { ...prev, visible: true };
      }
      return { current: src, previous: prev.current, visible: false };
    });

    const frame = requestAnimationFrame(() => {
      if (latestSrcRef.current !== src) return;
      setLayers((prev) =>
        prev.current === src ? { ...prev, visible: true } : prev,
      );
    });

    const timer = window.setTimeout(() => {
      if (latestSrcRef.current !== src) return;
      setLayers((prev) =>
        prev.current === src ? { ...prev, previous: null } : prev,
      );
    }, 320);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(timer);
    };
  }, [src, mode]);

  return (
    <div
      className={cn(
        "relative aspect-square w-full rounded-[var(--radius-card)] bg-white/70 shadow-[var(--shadow-product)] ring-1 ring-charcoal/10",
        className,
      )}
    >
      <div
        aria-hidden
        className="packshot-ground pointer-events-none absolute bottom-[10%] left-1/2 z-0 h-5 w-[48%] -translate-x-1/2 blur-[2px] sm:h-6 sm:w-[42%]"
      />

      <div className="packshot-float relative z-10 h-full w-full">
        {layers.previous ? (
          <Image
            src={layers.previous}
            alt=""
            aria-hidden
            fill
            className={cn(
              packshotImageClass,
              "transition-opacity duration-300",
              layers.visible ? "opacity-0" : "opacity-100",
            )}
            sizes={sizes}
          />
        ) : null}
        <Image
          src={layers.current}
          alt={alt}
          fill
          priority={priority}
          className={cn(
            packshotImageClass,
            isPlaceholderSrc(layers.current) && "opacity-90",
            mode === "crossfade" && "transition-opacity duration-300",
            layers.previous && !layers.visible ? "opacity-0" : "opacity-100",
          )}
          sizes={sizes}
        />
      </div>

      {isPlaceholderSrc(layers.current) ? (
        <p
          className="absolute inset-x-0 bottom-3 z-20 text-center font-body text-[11px] text-charcoal/50"
          aria-hidden="true"
        >
          Pack shot pending — add URL in CSV
        </p>
      ) : null}
    </div>
  );
}
