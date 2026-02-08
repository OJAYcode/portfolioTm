"use client";

import { useState, useCallback } from "react";
import { useTheme, useNavScroll } from "@/hooks";
import { NAV_LINKS } from "@/data/portfolio";

export default function Navbar() {
  const { isDark, toggle } = useTheme();
  const { scrolled, activeSection } = useNavScroll();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        window.scrollTo({
          top: (target as HTMLElement).offsetTop - 80,
          behavior: "smooth",
        });
      }
      setMobileOpen(false);
    },
    [],
  );

  return (
    <nav id="navbar" className={scrolled ? "scrolled" : ""}>
      <div className="container nav-container">
        <a href="#" className="logo">
          Oluwole<span style={{ color: "var(--secondary)" }}>.</span>
        </a>

        <ul className={`nav-links ${mobileOpen ? "show" : ""}`}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={activeSection === link.href.slice(1) ? "active" : ""}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button
            className="theme-toggle"
            id="theme-toggle"
            aria-label="Toggle theme"
            onClick={toggle}
          >
            <i className={`fas ${isDark ? "fa-sun" : "fa-moon"}`} />
          </button>
          <button
            className="hamburger"
            id="hamburger"
            aria-label="Menu"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            <i className={`fas ${mobileOpen ? "fa-times" : "fa-bars"}`} />
          </button>
        </div>
      </div>
    </nav>
  );
}
