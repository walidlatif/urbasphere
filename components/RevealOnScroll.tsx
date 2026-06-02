"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function RevealOnScroll() {
  const pathname = usePathname();

  useEffect(() => {
    let observer: IntersectionObserver | undefined;
    let frame = 0;

    frame = window.requestAnimationFrame(() => {
      const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
      if (!elements.length) return;

      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) {
        elements.forEach((element) => element.classList.add("is-visible"));
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            observer?.unobserve(entry.target);
          });
        },
        {
          threshold: 0.12,
          rootMargin: "0px 0px -50px 0px"
        }
      );

      elements.forEach((element) => {
        if (element.classList.contains("is-visible")) return;
        observer?.observe(element);
      });
    });

    return () => {
      window.cancelAnimationFrame(frame);
      observer?.disconnect();
    };
  }, [pathname]);

  return null;
}
