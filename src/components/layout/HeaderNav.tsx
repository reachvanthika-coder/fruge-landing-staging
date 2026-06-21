"use client";

import { cn } from "@/lib/cn";
import {
  aboutNavItem,
  getHeaderProductNavItems,
  type HeaderProductNavItem,
} from "@/lib/constants/nav";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";

const productItems = getHeaderProductNavItems();

const navLinkClass =
  "rounded-lg px-4 py-2 font-body text-sm font-medium text-cream transition-colors hover:bg-cream/10 hover:text-cream";

type MobileHeaderMenuProps = {
  className?: string;
};

export function MobileHeaderMenu({ className }: MobileHeaderMenuProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerProductsOpen, setDrawerProductsOpen] = useState(false);
  const [portalReady, setPortalReady] = useState(false);
  const drawerId = useId();
  const drawerProductsId = useId();

  useEffect(() => {
    setPortalReady(true);
  }, []);

  useEffect(() => {
    if (!drawerOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeDrawer();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  function closeDrawer() {
    setDrawerOpen(false);
    setDrawerProductsOpen(false);
  }

  return (
    <>
      <button
        type="button"
        className={cn(
          "inline-flex items-center gap-2 rounded-lg px-2 py-2 font-body text-sm font-medium text-cream transition-colors hover:bg-cream/10 md:hidden",
          className,
        )}
        aria-expanded={drawerOpen}
        aria-controls={drawerId}
        onClick={() => setDrawerOpen((open) => !open)}
      >
        <Menu className="h-5 w-5" aria-hidden="true" />
        Menu
      </button>

      {portalReady
        ? createPortal(
            <MobileNavDrawer
              drawerId={drawerId}
              drawerProductsId={drawerProductsId}
              open={drawerOpen}
              drawerProductsOpen={drawerProductsOpen}
              onClose={closeDrawer}
              onToggleProducts={() =>
                setDrawerProductsOpen((open) => !open)
              }
            />,
            document.body,
          )
        : null}
    </>
  );
}

type HeaderNavProps = {
  className?: string;
};

export function HeaderNav({ className }: HeaderNavProps) {
  const [productsOpen, setProductsOpen] = useState(false);
  const productsMenuId = useId();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!productsOpen) return;

    function handlePointerDown(event: MouseEvent) {
      if (!navRef.current?.contains(event.target as Node)) {
        setProductsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setProductsOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [productsOpen]);

  function closeDesktopMenus() {
    setProductsOpen(false);
  }

  return (
    <nav
      ref={navRef}
      className={cn("hidden flex-1 items-center justify-center md:flex", className)}
      aria-label="Main"
    >
      <ul className="flex items-center gap-1">
        <li>
          <Link href={aboutNavItem.href} className={navLinkClass}>
            {aboutNavItem.label}
          </Link>
        </li>
        <li
          className="relative"
          onMouseEnter={() => setProductsOpen(true)}
          onMouseLeave={() => setProductsOpen(false)}
        >
          <button
            type="button"
            className={cn(navLinkClass, "inline-flex items-center gap-1")}
            aria-expanded={productsOpen}
            aria-controls={productsMenuId}
            onClick={() => setProductsOpen((open) => !open)}
          >
            Products
            <ChevronDown
              className={cn(
                "h-4 w-4 transition-transform duration-200",
                productsOpen && "rotate-180",
              )}
              aria-hidden="true"
            />
          </button>

          {productsOpen ? (
            <div
              id={productsMenuId}
              className="absolute left-1/2 top-full z-50 w-[min(92vw,56rem)] -translate-x-1/2 pt-3"
            >
              <ProductsMegaPanel
                items={productItems}
                onNavigate={closeDesktopMenus}
              />
            </div>
          ) : null}
        </li>
      </ul>
    </nav>
  );
}

function MobileNavDrawer({
  drawerId,
  drawerProductsId,
  open,
  drawerProductsOpen,
  onClose,
  onToggleProducts,
}: {
  drawerId: string;
  drawerProductsId: string;
  open: boolean;
  drawerProductsOpen: boolean;
  onClose: () => void;
  onToggleProducts: () => void;
}) {
  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-charcoal-deep/70 backdrop-blur-sm md:hidden"
            aria-label="Close menu"
            onClick={onClose}
          />

          <motion.aside
            id={drawerId}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-y-0 right-0 z-[70] flex w-[min(88vw,20rem)] flex-col border-l border-white/10 bg-charcoal-deep shadow-2xl md:hidden"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <p className="font-display text-lg font-semibold text-cream">
                Menu
              </p>
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-cream transition-colors hover:bg-cream/10"
                aria-label="Close menu"
                onClick={onClose}
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-5">
              <ul className="space-y-1">
                <li>
                  <Link
                    href={aboutNavItem.href}
                    className="block rounded-lg px-3 py-3 font-body text-base font-medium text-cream transition-colors hover:bg-cream/10"
                    onClick={onClose}
                  >
                    {aboutNavItem.label}
                  </Link>
                </li>
                <li>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between rounded-lg px-3 py-3 font-body text-base font-medium text-cream transition-colors hover:bg-cream/10"
                    aria-expanded={drawerProductsOpen}
                    aria-controls={drawerProductsId}
                    onClick={onToggleProducts}
                  >
                    Products
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform duration-200",
                        drawerProductsOpen && "rotate-180",
                      )}
                      aria-hidden="true"
                    />
                  </button>
                  {drawerProductsOpen ? (
                    <ul
                      id={drawerProductsId}
                      className="mt-1 space-y-0.5 border-l border-cream/15 pl-3"
                    >
                      {productItems.map((item) => (
                        <li key={item.id}>
                          <Link
                            href={item.href}
                            className="block rounded-lg px-3 py-2.5 font-body text-sm text-cream/85 transition-colors hover:bg-cream/10 hover:text-cream"
                            onClick={onClose}
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                      <li>
                        <Link
                          href="/products"
                          className="block rounded-lg px-3 py-2.5 font-body text-sm font-semibold text-red-drip transition-colors hover:text-red-drip/80"
                          onClick={onClose}
                        >
                          View all ranges
                        </Link>
                      </li>
                    </ul>
                  ) : null}
                </li>
              </ul>
            </div>
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );
}

function ProductsMegaPanel({
  items,
  onNavigate,
}: {
  items: HeaderProductNavItem[];
  onNavigate: () => void;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-charcoal/10 bg-cream shadow-[var(--shadow-product)]">
      <div className="grid gap-2 p-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className={cn(
              "group flex gap-3 rounded-xl border border-transparent p-3 transition-all hover:border-charcoal/10 hover:shadow-[var(--shadow-card)]",
              item.bgClass,
            )}
            onClick={onNavigate}
          >
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-white/50">
              <Image
                src={item.imageSrc}
                alt=""
                fill
                sizes="56px"
                className="object-cover"
              />
            </div>
            <div className="min-w-0 flex-1">
              <p
                className={cn(
                  "font-display text-base font-bold leading-tight",
                  item.colorClass,
                )}
              >
                {item.title}
              </p>
              <p className="mt-0.5 line-clamp-2 font-body text-xs leading-snug text-charcoal/70">
                {item.tagline}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <div className="border-t border-charcoal/10 bg-cream px-4 py-3 text-center">
        <Link
          href="/products"
          className="font-body text-sm font-semibold text-red-drip transition-colors hover:text-brand-red-dark"
          onClick={onNavigate}
        >
          View all ranges →
        </Link>
      </div>
    </div>
  );
}
