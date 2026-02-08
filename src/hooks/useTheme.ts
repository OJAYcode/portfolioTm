"use client";

import { useState, useEffect, useCallback } from "react";

export function useTheme() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setIsDark(true);
      document.body.classList.add("dark-theme");
    }
  }, []);

  const toggle = useCallback(() => {
    setIsDark((prev) => {
      const next = !prev;
      document.body.classList.toggle("dark-theme", next);
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  }, []);

  return { isDark, toggle };
}
