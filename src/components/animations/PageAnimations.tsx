"use client";

import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Homepage scroll + load animations.
 * Respects prefers-reduced-motion via gsap.matchMedia().
 */
export function PageAnimations() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set("[data-gsap], [data-animate]", {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        clearProps: "transform,opacity",
      });
    });

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        /* ── Hero load timeline ── */
        const heroTl = gsap.timeline({ defaults: { ease: "power2.out" } });

        heroTl
          .from("[data-gsap='hero-products']", {
            scale: 1.08,
            opacity: 0,
            duration: 1.4,
          })
          .from(
            "[data-gsap='hero-logo-drip']",
            { y: -24, opacity: 0, duration: 0.7 },
            0.2,
          )
          .from(
            "[data-gsap='hero-script']",
            { opacity: 0, duration: 1.1, ease: "power1.inOut" },
            0.9,
          )
          .from(
            "[data-gsap='hero-headline'] span",
            { y: 36, opacity: 0, stagger: 0.1, duration: 0.75 },
            1.2,
          )
          .from(
            "[data-gsap='hero-body']",
            { y: 18, opacity: 0, duration: 0.65 },
            "-=0.35",
          )
          .from(
            "[data-gsap='hero-ctas'] > *",
            { y: 22, opacity: 0, stagger: 0.14, duration: 0.55 },
            "-=0.25",
          )
          .from(
            "[data-gsap='hero-trust']",
            { opacity: 0, duration: 0.5 },
            "-=0.15",
          )
          .from(
            "[data-gsap='hero-scroll-indicator']",
            { opacity: 0, y: -8, duration: 0.5 },
            "-=0.1",
          );

        gsap.to("[data-gsap='hero-products']", {
          y: -10,
          duration: 3.5,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
          delay: 1.5,
        });

        /* ── Section headlines (stagger lines) ── */
        gsap.utils
          .toArray<HTMLElement>("[data-gsap$='-headline']")
          .forEach((el) => {
            const targets =
              el.querySelectorAll(":scope > span, :scope > .block").length > 0
                ? el.querySelectorAll(":scope > span, :scope > .block")
                : [el];

            gsap.from(targets, {
              y: 44,
              opacity: 0,
              duration: 0.85,
              stagger: 0.12,
              ease: "power2.out",
              scrollTrigger: {
                trigger: el,
                start: "top 82%",
                toggleActions: "play none none reverse",
              },
            });
          });

        /* ── Eyebrows ── */
        gsap.utils
          .toArray<HTMLElement>("[data-gsap$='-eyebrow'], .section-eyebrow")
          .forEach((el) => {
            gsap.from(el, {
              x: -24,
              opacity: 0,
              duration: 0.6,
              scrollTrigger: {
                trigger: el,
                start: "top 88%",
                toggleActions: "play none none reverse",
              },
            });
          });

        /* ── Stagger card / grid reveals ── */
        const staggerGroups: Array<{ trigger: string; child: string }> = [
          { trigger: "[data-gsap='why-partner-grid']", child: "> *" },
          { trigger: "[data-gsap='founders-credentials']", child: "> *" },
          { trigger: "[data-gsap='problem-callouts']", child: "> *" },
          { trigger: "[data-gsap='dealer-counters']", child: "> *" },
          { trigger: "[data-gsap='footer-columns']", child: "> *" },
        ];

        staggerGroups.forEach(({ trigger, child }) => {
          const container = document.querySelector(trigger);
          if (!container) return;

          gsap.from(`${trigger} ${child}`, {
            y: 32,
            opacity: 0,
            duration: 0.75,
            stagger: 0.11,
            ease: "back.out(1.4)",
            scrollTrigger: {
              trigger: container,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          });
        });

        /* ── Body copy blocks ── */
        gsap.utils
          .toArray<HTMLElement>("[data-gsap$='-body']")
          .forEach((el) => {
            gsap.from(el.children.length ? el.children : el, {
              y: 28,
              opacity: 0,
              duration: 0.65,
              stagger: 0.12,
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            });
          });

        /* ── Scale-in for images / placeholders ── */
        gsap.utils.toArray<HTMLElement>("[data-animate='scale-in']").forEach((el) => {
          gsap.from(el, {
            scale: 0.9,
            opacity: 0,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          });
        });

        /* ── Origin pull quote ── */
        const pullQuote = document.querySelector("[data-gsap='origin-pull-quote']");
        if (pullQuote) {
          gsap.from(pullQuote, {
            scale: 0.92,
            opacity: 0,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: pullQuote,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          });
        }

        /* ── Panel wipe (origin) ── */
        gsap.utils
          .toArray<HTMLElement>("[data-animate='panel-reveal']")
          .forEach((el, i) => {
            gsap.from(el, {
              clipPath: i % 2 === 0 ? "inset(0 100% 0 0)" : "inset(0 0 0 100%)",
              opacity: 0.6,
              duration: 1,
              ease: "power2.inOut",
              scrollTrigger: {
                trigger: el,
                start: "top 82%",
                toggleActions: "play none none reverse",
              },
            });
          });

        /* ── Enquiry form + sidebar ── */
        const form = document.querySelector("[data-gsap='enquiry-form']");
        if (form) {
          gsap.from("[data-gsap='enquiry-form'] > *", {
            x: -28,
            opacity: 0,
            stagger: 0.07,
            duration: 0.55,
            scrollTrigger: {
              trigger: form,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          });
        }

        const contact = document.querySelector("[data-gsap='enquiry-contact']");
        if (contact) {
          gsap.from(contact, {
            x: 32,
            opacity: 0,
            duration: 0.7,
            scrollTrigger: {
              trigger: contact,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          });
        }

        /* ── Footer tagline ── */
        const footerTagline = document.querySelector("[data-gsap='footer-tagline']");
        if (footerTagline) {
          gsap.from("[data-gsap='footer-tagline'] p", {
            y: 32,
            opacity: 0,
            stagger: 0.14,
            duration: 0.8,
            scrollTrigger: {
              trigger: footerTagline,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          });
        }

        gsap.from("[data-gsap='footer-script-closer']", {
          opacity: 0,
          y: 12,
          duration: 0.8,
          delay: 0.3,
          scrollTrigger: {
            trigger: "[data-gsap='footer-script-closer']",
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        });

        /* ── Section waves slide up on enter ── */
        gsap.utils.toArray<HTMLElement>("[data-gsap='section-wave']").forEach((wave) => {
          gsap.from(wave, {
            opacity: 0.85,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: wave,
              start: "top 99%",
              toggleActions: "play none none reverse",
            },
          });
        });

        /* ── CTAs fade up ── */
        gsap.utils
          .toArray<HTMLElement>("[data-gsap$='-cta'], [data-gsap$='-ctas']")
          .forEach((el) => {
            gsap.from(el.children.length ? el.children : el, {
              y: 20,
              opacity: 0,
              stagger: 0.12,
              duration: 0.55,
              scrollTrigger: {
                trigger: el,
                start: "top 90%",
                toggleActions: "play none none reverse",
              },
            });
          });

        /* ── Transition / italic lines ── */
        gsap.utils
          .toArray<HTMLElement>("[data-gsap$='-transition']")
          .forEach((el) => {
            gsap.from(el, {
              opacity: 0,
              y: 16,
              duration: 0.7,
              scrollTrigger: {
                trigger: el,
                start: "top 88%",
                toggleActions: "play none none reverse",
              },
            });
          });
      });

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  return null;
}
