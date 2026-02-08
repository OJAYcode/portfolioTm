"use client";

import Image from "next/image";
import { useTypedText } from "@/hooks";
import { SOCIAL_LINKS, TYPED_WORDS } from "@/data/portfolio";

export default function HeroSection() {
  const typedText = useTypedText(TYPED_WORDS);

  return (
    <section id="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <span className="pulse" />
              Available for Freelance
            </div>
            <h1>
              Hi, I&apos;m{" "}
              <span className="gradient-text">Oluwole Oluwole</span>
            </h1>
            <div className="typed-wrapper">
              I&apos;m a <span className="typed-text">{typedText}</span>
            </div>
            <p>
              I craft beautiful, high-performance websites and mobile
              applications with a security-first mindset. Let&apos;s transform
              your ideas into polished digital experiences.
            </p>
            <div className="hero-buttons">
              <a href="#portfolio" className="btn btn-primary magnetic">
                <i className="fas fa-briefcase" /> View Projects
              </a>
              <a href="#contact" className="btn btn-outline magnetic">
                <i className="fas fa-paper-plane" /> Contact Me
              </a>
            </div>
            <div className="social-icons">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target={link.url.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={link.name}
                >
                  <i className={link.icon} />
                </a>
              ))}
            </div>
          </div>

          <div className="hero-image reveal reveal-right">
            <div className="hero-image-wrapper">
              <Image
                src="/images/Me.svg"
                alt="Oluwole Oluwole"
                width={380}
                height={380}
                priority
              />
              <div className="hero-image-glow" />
              <div className="hero-float top-right">
                <i className="fas fa-code" /> 3+ Yrs Exp
              </div>
              <div className="hero-float bottom-left">
                <i className="fas fa-shield-halved" /> Security First
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
