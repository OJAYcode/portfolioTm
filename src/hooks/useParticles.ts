"use client";

import { useEffect, useRef, useCallback } from "react";
import type { Particle } from "@/types";

export function useParticles(
  canvasRef: React.RefObject<HTMLCanvasElement | null>,
) {
  const particles = useRef<Particle[]>([]);
  const mouse = useRef({ x: -999, y: -999 });
  const animationId = useRef<number>(0);

  const initParticles = useCallback((canvas: HTMLCanvasElement) => {
    const count = Math.floor((canvas.width * canvas.height) / 12000);
    particles.current = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 0.5,
      speedX: (Math.random() - 0.5) * 0.6,
      speedY: (Math.random() - 0.5) * 0.6,
      opacity: Math.random() * 0.5 + 0.1,
      color: Math.random() > 0.5 ? "108, 99, 255" : "245, 0, 87",
    }));
  }, []);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.current.forEach((p) => {
      p.x += p.speedX;
      p.y += p.speedY;

      if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
      if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

      // Mouse repulsion
      const dx = mouse.current.x - p.x;
      const dy = mouse.current.y - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        p.x -= dx * 0.02;
        p.y -= dy * 0.02;
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.color}, ${p.opacity})`;
      ctx.fill();
    });

    // Draw connections
    for (let i = 0; i < particles.current.length; i++) {
      for (let j = i + 1; j < particles.current.length; j++) {
        const dx = particles.current[i].x - particles.current[j].x;
        const dy = particles.current[i].y - particles.current[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(108, 99, 255, ${0.08 * (1 - dist / 100)})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(particles.current[i].x, particles.current[i].y);
          ctx.lineTo(particles.current[j].x, particles.current[j].y);
          ctx.stroke();
        }
      }
    }

    animationId.current = requestAnimationFrame(animate);
  }, [canvasRef]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles(canvas);
    };

    const handleMouse = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouse);
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
      cancelAnimationFrame(animationId.current);
    };
  }, [canvasRef, initParticles, animate]);
}
