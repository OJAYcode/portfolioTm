"use client";

import { useEffect, useRef } from "react";

export function useScrollReveal() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.classList.add("revealed");

            // Stagger children
            if (el.dataset.stagger) {
              const children =
                el.querySelectorAll<HTMLElement>(".reveal-child");
              children.forEach((child, i) => {
                child.style.transitionDelay = `${i * 0.1}s`;
                child.classList.add("revealed");
              });
            }

            observerRef.current?.unobserve(el);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" },
    );

    const elements = document.querySelectorAll<HTMLElement>(".reveal");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);
}
