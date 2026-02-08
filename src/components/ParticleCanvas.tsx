"use client";

import { useRef } from "react";
import { useParticles } from "@/hooks";

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useParticles(canvasRef);

  return <canvas ref={canvasRef} id="particle-canvas" />;
}
