// ─── Portfolio Data Types ────────────────────────────────────────────

export interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
}

export interface Skill {
  name: string;
  percent: number;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: ProjectCategory;
  categoryLabel: string;
  github: string;
  liveUrl?: string;
}

export type ProjectCategory = "web" | "webapp" | "mobileapp" | "encryption";

export interface ContactInfo {
  icon: string;
  label: string;
  value: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface FilterButton {
  value: string;
  label: string;
}
