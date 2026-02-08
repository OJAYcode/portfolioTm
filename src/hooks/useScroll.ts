"use client";

import { useState, useEffect, useCallback, useRef } from "react";

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      setProgress(scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0);
    };

    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return progress;
}

export function useNavScroll() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Highlight active section
      const sections = document.querySelectorAll<HTMLElement>("section");
      let current = "hero";
      sections.forEach((sec) => {
        if (window.scrollY >= sec.offsetTop - 200) {
          current = sec.id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { scrolled, activeSection };
}

export function useCounter(
  target: number,
  suffix: string,
  shouldAnimate: boolean,
) {
  const [value, setValue] = useState("0");
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!shouldAnimate || hasAnimated.current) return;
    hasAnimated.current = true;

    const duration = 2000;
    const startTime = performance.now();

    const update = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(target * eased) + suffix);
      if (progress < 1) requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
  }, [target, suffix, shouldAnimate]);

  return value;
}

export function useInView(threshold: number = 0.3) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(el);
        }
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isInView };
}
