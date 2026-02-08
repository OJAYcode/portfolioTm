"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { PROJECTS, FILTER_BUTTONS } from "@/data/portfolio";
import type { Project } from "@/types";

function PortfolioCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <div
      className="portfolio-card portfolio-card-animated"
      data-category={project.category}
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div className="portfolio-card-image">
        <Image
          src={project.image}
          alt={project.title}
          width={400}
          height={220}
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
        <div className="portfolio-card-overlay">
          <div className="portfolio-card-links">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="fab fa-github" />
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live Demo"
              >
                <i className="fas fa-external-link-alt" />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="portfolio-card-body">
        <span className="portfolio-card-tag">{project.categoryLabel}</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </div>
  );
}

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilter = useCallback((category: string) => {
    setActiveFilter(category);
  }, []);

  const filteredProjects =
    activeFilter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio">
      <div className="container">
        <div className="section-header reveal">
          <h2>My Portfolio</h2>
          <p>Selected projects I&apos;m proud of</p>
          <div className="section-line" />
        </div>

        <div className="portfolio-filters reveal">
          {FILTER_BUTTONS.map((btn) => (
            <button
              key={btn.value}
              className={`filter-btn ${activeFilter === btn.value ? "active" : ""}`}
              data-filter={btn.value}
              onClick={() => handleFilter(btn.value)}
            >
              {btn.label}
            </button>
          ))}
        </div>

        <div className="portfolio-grid reveal">
          {filteredProjects.map((project, i) => (
            <PortfolioCard
              key={`${activeFilter}-${project.id}`}
              project={project}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
