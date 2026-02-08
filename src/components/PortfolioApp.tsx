"use client";

import { useScrollReveal } from "@/hooks";
import {
  Preloader,
  ParticleCanvas,
  CustomCursor,
  ScrollProgress,
  Navbar,
} from "@/components";
import {
  HeroSection,
  AboutSection,
  SkillsSection,
  PortfolioSection,
  ContactSection,
  Footer,
} from "@/components/sections";

export default function PortfolioApp() {
  useScrollReveal();

  return (
    <>
      <Preloader />
      <CustomCursor />
      <ScrollProgress />
      <ParticleCanvas />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
