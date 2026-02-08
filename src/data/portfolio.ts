import {
  type Skill,
  type Project,
  type ContactInfo,
  type Stat,
  type SocialLink,
  type NavLink,
  type FilterButton,
} from "@/types";

// ─── Navigation ─────────────────────────────────────────────────────

export const NAV_LINKS: NavLink[] = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

// ─── Social Links ───────────────────────────────────────────────────

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "LinkedIn", url: "https://linkedin.com", icon: "fab fa-linkedin-in" },
  { name: "GitHub", url: "https://github.com/OJAYcode", icon: "fab fa-github" },
  { name: "Twitter", url: "https://twitter.com", icon: "fab fa-x-twitter" },
  {
    name: "Email",
    url: "mailto:oluwoleoluwole82@gmail.com",
    icon: "fas fa-envelope",
  },
];

// ─── Typed Text Roles ───────────────────────────────────────────────

export const TYPED_WORDS: string[] = [
  "Web Developer",
  "Mobile App Developer",
  "React Native Engineer",
  "Cybersecurity Enthusiast",
];

// ─── Stats ──────────────────────────────────────────────────────────

export const STATS: Stat[] = [
  { value: 25, suffix: "+", label: "Projects Completed" },
  { value: 10, suffix: "+", label: "Happy Clients" },
  { value: 3, suffix: "+", label: "Years Experience" },
];

// ─── Skills ─────────────────────────────────────────────────────────

export const SKILLS: Skill[] = [
  { name: "Tailwind", percent: 95, description: "Utility-first CSS" },
  { name: "JavaScript", percent: 90, description: "ES6+ & Modern JS" },
  { name: "TypeScript", percent: 80, description: "Type-safe Development" },
  { name: "React Native", percent: 75, description: "Mobile Development" },
  {
    name: "Responsive Design",
    percent: 98,
    description: "Mobile-first Layouts",
  },
  { name: "Git / GitHub", percent: 70, description: "Version Control" },
  { name: "PHP", percent: 70, description: "Server-side Logic" },
  {
    name: "Cybersecurity",
    percent: 50,
    description: "Encryption & Protection",
  },
];

// ─── Projects ───────────────────────────────────────────────────────

export const PROJECTS: Project[] = [
  {
    id: "hoardings",
    title: "Hoardings",
    description:
      "A marketplace platform where media owners can sell their media spaces (like lamp posts, billboards etc) and advertisers can buy.",
    image: "/images/hoardings.png",
    category: "webapp",
    categoryLabel: "Web App",
    github: "https://github.com/hoardings-africa/hoardings",
  },
  {
    id: "certificate-website",
    title: "Certificate Website",
    description:
      "A university certificate issuing website with secure document management.",
    image: "/images/img1.jpeg",
    category: "web",
    categoryLabel: "Web Design",
    github: "https://github.com/OJAYcode/project-certification",
  },
  {
    id: "omies-closet",
    title: "Omie's Closet",
    description:
      "E-commerce app with WhatsApp integration. Built with React, TypeScript, and Firebase.",
    image: "/images/omie's closet dashboard.png",
    category: "web",
    categoryLabel: "Web Design",
    github: "https://github.com/OJAYcode/Omie-s-Closet",
    liveUrl: "https://omie-s-closet.vercel.app",
  },
  {
    id: "guess-game",
    title: "Guess Game",
    description:
      "An interactive web game built with JavaScript featuring score tracking.",
    image: "/images/snip1.PNG",
    category: "web",
    categoryLabel: "Web Design",
    github: "https://github.com/OJAYcode/guess-game",
  },
  {
    id: "nestshare",
    title: "NestShare",
    description:
      "Financial management app for budgets, savings goals, and thrift groups. Built with C# & Tailwind.",
    image: "/images/nestshare-dashboard.jpg",
    category: "webapp",
    categoryLabel: "Web App",
    github: "https://github.com/OJAYcode/NestShare",
    liveUrl: "https://nest-share.vercel.app",
  },
  {
    id: "calsync",
    title: "CalSync",
    description:
      "Calendar sync app for organizations with React frontend and Python backend.",
    image: "/images/calsync.png",
    category: "webapp",
    categoryLabel: "Web App",
    github: "https://github.com/OJAYcode/CalSync",
    liveUrl: "https://cal-sync-pied.vercel.app",
  },
  {
    id: "scoreline",
    title: "Scoreline",
    description:
      "React Native app for live football fixtures, match updates, and scores in real-time.",
    image: "/images/scorelinepic.jpg",
    category: "mobileapp",
    categoryLabel: "Mobile App",
    github: "https://github.com/OJAYcode/scoreline",
  },
  {
    id: "mongodb-csfle",
    title: "MongoDB CSFLE",
    description:
      "Client-Side Field Level Encryption implementation for a student app.",
    image: "/images/encImage.jpg",
    category: "encryption",
    categoryLabel: "Encryption",
    github: "https://github.com/OJAYcode/university-app",
  },
];

// ─── Filter Buttons ─────────────────────────────────────────────────

export const FILTER_BUTTONS: FilterButton[] = [
  { value: "all", label: "All" },
  { value: "web", label: "Web Design" },
  { value: "webapp", label: "Web App" },
  { value: "mobileapp", label: "Mobile App" },
  { value: "encryption", label: "Encryption" },
];

// ─── Contact Info ───────────────────────────────────────────────────

export const CONTACT_INFO: ContactInfo[] = [
  { icon: "fas fa-location-dot", label: "Location", value: "Lagos, Nigeria" },
  {
    icon: "fas fa-envelope",
    label: "Email",
    value: "oluwoleoluwole82@gmail.com",
  },
  { icon: "fas fa-phone", label: "Phone", value: "+234 70151 20076" },
];
