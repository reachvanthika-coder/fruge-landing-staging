"use client";

import {
  FlavorProductPreview,
  type ImageTransitionMode,
} from "@/components/catalog/FlavorProductPreview";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import {
  getFlavorStackImage,
  type FlavorSkuStackItem,
} from "@/lib/catalog/flavor-stack-items";
import { useMediaQuery } from "@/lib/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

const DESKTOP_BREAKPOINT = "(min-width: 800px)";

type FlavorSkuStackInteractorProps = {
  flavors: FlavorSkuStackItem[];
  initialFlavorId?: string;
  className?: string;
};

function findInitialFlavorIndex(
  flavors: FlavorSkuStackItem[],
  initialFlavorId?: string,
): number {
  if (initialFlavorId) {
    const byId = flavors.findIndex((f) => f.id === initialFlavorId);
    if (byId >= 0) return byId;
  }
  const featured = flavors.findIndex((f) => f.featured);
  return featured >= 0 ? featured : 0;
}

function TransitionToggle({
  mode,
  onChange,
}: {
  mode: ImageTransitionMode;
  onChange: (mode: ImageTransitionMode) => void;
}) {
  return (
    <div
      className="inline-flex rounded-full border border-charcoal/10 bg-white/50 p-0.5"
      role="group"
      aria-label="Image transition preview"
    >
      {(["static", "crossfade"] as const).map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onChange(option)}
          aria-pressed={mode === option}
          className={cn(
            "rounded-full px-3 py-1 font-body text-[11px] font-medium capitalize transition-colors",
            mode === option
              ? "bg-charcoal text-cream"
              : "text-charcoal/55 hover:text-charcoal",
          )}
        >
          {option === "crossfade" ? "Fade" : "Static"}
        </button>
      ))}
    </div>
  );
}

export function FlavorSkuStackInteractor({
  flavors,
  initialFlavorId,
  className,
}: FlavorSkuStackInteractorProps) {
  const isDesktop = useMediaQuery(DESKTOP_BREAKPOINT);
  const carouselOrientation = isDesktop ? "vertical" : "horizontal";

  const initialFlavorIndex = findInitialFlavorIndex(flavors, initialFlavorId);
  const initialFlavor = flavors[initialFlavorIndex] ?? flavors[0];

  const [activeFlavorIndex, setActiveFlavorIndex] = useState(initialFlavorIndex);
  const [activeSkuIndex, setActiveSkuIndex] = useState(
    initialFlavor?.defaultSkuIndex ?? 0,
  );
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [imageTransitionMode, setImageTransitionMode] =
    useState<ImageTransitionMode>("crossfade");
  const isCarouselScrollingRef = useRef(false);
  const scrollSettleTimerRef = useRef<number | null>(null);

  const activeFlavor = flavors[activeFlavorIndex] ?? flavors[0];
  const activeSku = activeFlavor?.skus[activeSkuIndex] ?? activeFlavor?.skus[0];
  const displayImage = activeFlavor
    ? getFlavorStackImage(activeFlavor, activeSkuIndex)
    : "";

  useEffect(() => {
    if (!carouselApi) return;
    carouselApi.scrollTo(activeFlavorIndex, true);
    // Sync position when carousel remounts (orientation change at 800px).
    // eslint-disable-next-line react-hooks/exhaustive-deps -- not on every hover
  }, [carouselApi, carouselOrientation]);

  useEffect(() => {
    if (!carouselApi) return;

    const markScrolling = () => {
      isCarouselScrollingRef.current = true;
      if (scrollSettleTimerRef.current !== null) {
        window.clearTimeout(scrollSettleTimerRef.current);
      }
      scrollSettleTimerRef.current = window.setTimeout(() => {
        isCarouselScrollingRef.current = false;
      }, 120);
    };

    const markSettled = () => {
      if (scrollSettleTimerRef.current !== null) {
        window.clearTimeout(scrollSettleTimerRef.current);
        scrollSettleTimerRef.current = null;
      }
      isCarouselScrollingRef.current = false;
    };

    carouselApi.on("scroll", markScrolling);
    carouselApi.on("settle", markSettled);

    return () => {
      carouselApi.off("scroll", markScrolling);
      carouselApi.off("settle", markSettled);
      if (scrollSettleTimerRef.current !== null) {
        window.clearTimeout(scrollSettleTimerRef.current);
      }
    };
  }, [carouselApi]);

  const selectFlavor = (index: number, scrollIntoView = true) => {
    const flavor = flavors[index];
    if (!flavor || index === activeFlavorIndex) return;

    setActiveFlavorIndex(index);
    setActiveSkuIndex(flavor.defaultSkuIndex);

    if (scrollIntoView) {
      carouselApi?.scrollTo(index);
    }
  };

  const previewFlavor = (index: number) => {
    if (!isDesktop || isCarouselScrollingRef.current) return;
    selectFlavor(index, false);
  };

  const selectSku = (skuIndex: number) => {
    if (!activeFlavor) return;
    setActiveSkuIndex(skuIndex);
  };

  if (!activeFlavor) return null;

  return (
    <section
      className={cn(
        "grain-overlay transition-[background-color] duration-500 ease-out",
        className,
      )}
      style={{ backgroundColor: activeFlavor.backgroundColor }}
      aria-label="Flavour explorer"
    >
      <div
        className={cn(
          "mx-auto flex w-full max-w-7xl flex-col gap-8 overflow-hidden p-6",
          "min-[800px]:min-h-[calc(100vh-4rem)] min-[800px]:flex-row min-[800px]:gap-10 min-[800px]:p-12 lg:gap-14 lg:p-16",
        )}
      >
        <div className="z-20 flex w-full flex-col min-[800px]:w-[42%] lg:w-[38%]">
          <div className="mb-4 flex items-end justify-between gap-4">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-charcoal/50">
              {isDesktop ? "Browse flavours" : "Tap a flavour"}
            </p>
            <p className="shrink-0 font-body text-xs tabular-nums text-charcoal/45">
              {String(activeFlavorIndex + 1).padStart(2, "0")} /{" "}
              {String(flavors.length).padStart(2, "0")}
            </p>
          </div>

          <nav aria-label="Glaze gel flavours" className="relative w-full">
            <Carousel
              key={carouselOrientation}
              orientation={carouselOrientation}
              opts={{ align: "start", containScroll: "trimSnaps" }}
              setApi={setCarouselApi}
              className={cn(
                "w-full",
                isDesktop ? "px-1 pt-11 pb-11" : "px-8 py-2",
              )}
            >
              <CarouselContent
                className={cn(
                  isDesktop
                    ? "-mt-2 h-[min(26rem,48vh)] sm:h-[min(28rem,52vh)]"
                    : "-ml-2 h-auto",
                )}
              >
                {flavors.map((flavor, index) => (
                  <CarouselItem
                    key={flavor.id}
                    className={cn(
                      isDesktop ? "basis-1/3 pt-2" : "basis-[82%] pl-2",
                    )}
                  >
                    <button
                      type="button"
                      onMouseEnter={
                        isDesktop ? () => previewFlavor(index) : undefined
                      }
                      onFocus={() => {
                        if (isDesktop) {
                          previewFlavor(index);
                          return;
                        }
                        selectFlavor(index, false);
                      }}
                      onClick={() => selectFlavor(index)}
                      className={cn(
                        "group h-full w-full cursor-pointer rounded-[var(--radius-card)] text-left transition-colors",
                        isDesktop ? "px-2 py-1" : "min-h-[5.5rem] px-3 py-3",
                        activeFlavorIndex === index
                          ? "bg-white/45"
                          : "hover:bg-white/30",
                      )}
                      aria-current={activeFlavorIndex === index ? "true" : undefined}
                    >
                      <div
                        className={cn(
                          "flex h-full items-start",
                          isDesktop ? "gap-3 min-[800px]:gap-4" : "gap-2.5",
                        )}
                      >
                        <span
                          className={cn(
                            "mt-0.5 shrink-0 font-display font-bold transition-all duration-500",
                            isDesktop ? "text-lg min-[800px]:text-xl" : "text-base",
                            activeFlavorIndex === index
                              ? "scale-110 text-terracotta"
                              : "text-charcoal/30",
                          )}
                        >
                          {flavor.num}
                        </span>

                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <h2
                              className={cn(
                                "font-display font-bold uppercase leading-[0.9] tracking-tighter transition-all duration-700",
                                isDesktop
                                  ? "text-xl sm:text-2xl min-[800px]:text-3xl lg:text-4xl"
                                  : "text-lg sm:text-xl",
                                activeFlavorIndex === index
                                  ? "translate-x-0.5 text-charcoal opacity-100 min-[800px]:translate-x-2"
                                  : "translate-x-0 text-charcoal/35 opacity-50",
                              )}
                            >
                              {flavor.line1}
                              {flavor.line2 ? (
                                <>
                                  <br />
                                  {flavor.line2}
                                </>
                              ) : null}
                            </h2>
                            {flavor.featured ? (
                              <span className="rounded-full border border-glaze-caramel/40 bg-white/50 px-2 py-0.5 font-body text-[10px] font-semibold uppercase tracking-wider text-glaze-caramel">
                                Signature
                              </span>
                            ) : null}
                          </div>

                          {flavor.tagline && isDesktop ? (
                            <p
                              className={cn(
                                "mt-1 line-clamp-2 max-w-md font-soul text-base transition-opacity duration-500 min-[800px]:text-lg",
                                activeFlavorIndex === index
                                  ? "text-charcoal/70 opacity-100"
                                  : "opacity-0",
                              )}
                            >
                              {flavor.tagline}
                            </p>
                          ) : null}
                        </div>
                      </div>
                    </button>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious
                className={
                  isDesktop
                    ? undefined
                    : "top-1/2 -left-1 size-8 -translate-y-1/2"
                }
              />
              <CarouselNext
                className={
                  isDesktop
                    ? undefined
                    : "top-1/2 -right-1 size-8 -translate-y-1/2"
                }
              />
            </Carousel>
          </nav>
        </div>

        <div className="relative flex w-full flex-col min-[800px]:w-[58%] lg:w-[62%]">
          <div className="mb-4 flex flex-wrap items-center justify-end gap-3">
            <p className="font-body text-[11px] text-charcoal/40">Preview</p>
            <TransitionToggle
              mode={imageTransitionMode}
              onChange={setImageTransitionMode}
            />
          </div>

          <div className="relative mx-auto w-full max-w-sm min-[800px]:max-w-md lg:max-w-lg">
            <FlavorProductPreview
              src={displayImage}
              alt={`${activeFlavor.name}${activeSku ? `, ${activeSku.sizeLabel}` : ""}`}
              mode={imageTransitionMode}
              priority
            />
          </div>

          <div className="relative z-20 mx-auto mt-6 w-full max-w-md text-center min-[800px]:mt-8 lg:max-w-lg">
            <h3 className="font-display text-2xl font-bold text-charcoal min-[800px]:text-3xl">
              {activeFlavor.name}
            </h3>
            {activeFlavor.tagline ? (
              <p className="mt-2 font-soul text-xl text-charcoal/75">
                {activeFlavor.tagline}
              </p>
            ) : null}
            {activeFlavor.description ? (
              <p className="mt-3 font-body text-sm leading-relaxed text-charcoal/70">
                {activeFlavor.description}
              </p>
            ) : null}

            <div className="mt-6">
              <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.16em] text-charcoal/45">
                Pack size
              </p>
              <div
                className="flex flex-wrap justify-center gap-2"
                role="group"
                aria-label={`Pack sizes for ${activeFlavor.name}`}
              >
                {activeFlavor.skus.map((sku, index) => (
                  <button
                    key={sku.id}
                    type="button"
                    onClick={() => selectSku(index)}
                    className={cn(
                      "min-h-10 rounded-[var(--radius-button)] border px-4 py-2 font-body text-sm font-medium transition-colors",
                      activeSkuIndex === index
                        ? "border-glaze-caramel bg-white/80 text-charcoal shadow-sm"
                        : "border-charcoal/15 bg-white/50 text-charcoal/60 hover:border-charcoal/30 hover:bg-white/70 hover:text-charcoal",
                      !sku.hasImage && activeSkuIndex === index
                        ? "ring-1 ring-charcoal/10 ring-offset-1"
                        : null,
                    )}
                    aria-pressed={activeSkuIndex === index}
                  >
                    {sku.sizeLabel}
                  </button>
                ))}
              </div>
              {activeSku && !activeSku.hasImage ? (
                <p className="mt-3 font-body text-xs text-charcoal/50">
                  Pack shot coming soon — showing flavour reference image.
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
