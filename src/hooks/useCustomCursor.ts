"use client";

import { useEffect, useRef, useCallback } from "react";

export function useCustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);
  const curPos = useRef({ x: 0, y: 0 });
  const aimPos = useRef({ x: 0, y: 0 });
  const raf = useRef<number>(0);

  const render = useCallback(() => {
    curPos.current.x += (aimPos.current.x - curPos.current.x) * 0.15;
    curPos.current.y += (aimPos.current.y - curPos.current.y) * 0.15;

    if (outlineRef.current) {
      outlineRef.current.style.left = `${curPos.current.x}px`;
      outlineRef.current.style.top = `${curPos.current.y}px`;
    }

    raf.current = requestAnimationFrame(render);
  }, []);

  useEffect(() => {
    // Skip on touch devices
    if ("ontouchstart" in window) return;

    const handleMouseMove = (e: MouseEvent) => {
      aimPos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };

    const addHover = () => {
      dotRef.current?.classList.add("cursor-hover");
      outlineRef.current?.classList.add("cursor-hover");
    };

    const removeHover = () => {
      dotRef.current?.classList.remove("cursor-hover");
      outlineRef.current?.classList.remove("cursor-hover");
    };

    document.addEventListener("mousemove", handleMouseMove);

    const interactiveElements = document.querySelectorAll<HTMLElement>(
      "a, button, .portfolio-card, .skill-card",
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    render();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
      cancelAnimationFrame(raf.current);
    };
  }, [render]);

  return { dotRef, outlineRef };
}
