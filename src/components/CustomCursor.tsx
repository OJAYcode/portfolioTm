"use client";

import { useCustomCursor } from "@/hooks";

export default function CustomCursor() {
  const { dotRef, outlineRef } = useCustomCursor();

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={outlineRef} className="cursor-outline" />
    </>
  );
}
