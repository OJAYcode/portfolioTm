"use client";

import { useState, useEffect } from "react";

export default function Preloader() {
  const [loaded, setLoaded] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loaded) {
      const timer = setTimeout(() => setRemoved(true), 800);
      return () => clearTimeout(timer);
    }
  }, [loaded]);

  if (removed) return null;

  return (
    <div className={`preloader ${loaded ? "loaded" : ""}`}>
      <div className="preloader-spinner" />
    </div>
  );
}
