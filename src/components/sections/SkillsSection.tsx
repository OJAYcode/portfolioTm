"use client";

import { useInView } from "@/hooks";
import { SKILLS } from "@/data/portfolio";

function SkillCard({
  name,
  percent,
  description,
  animate,
}: {
  name: string;
  percent: number;
  description: string;
  animate: boolean;
}) {
  const circumference = 2 * Math.PI * 54;
  const offset = animate
    ? circumference - (percent / 100) * circumference
    : circumference;

  return (
    <div className="skill-card reveal-child">
      <div className="skill-circle">
        <svg viewBox="0 0 120 120">
          <circle className="skill-circle-bg" cx="60" cy="60" r="54" />
          <circle
            className="skill-circle-progress"
            cx="60"
            cy="60"
            r="54"
            style={{ strokeDashoffset: offset }}
          />
        </svg>
        <span className="skill-percent">{percent}%</span>
      </div>
      <h4>{name}</h4>
      <p>{description}</p>
    </div>
  );
}

export default function SkillsSection() {
  const { ref, isInView } = useInView(0.3);

  return (
    <section id="skills" ref={ref}>
      <div className="container">
        <div className="section-header reveal">
          <h2>My Skills</h2>
          <p>Technologies and tools I work with</p>
          <div className="section-line" />
        </div>

        {/* Hidden SVG gradient for skill circles */}
        <svg width="0" height="0" style={{ position: "absolute" }}>
          <defs>
            <linearGradient
              id="skill-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#6c63ff" />
              <stop offset="100%" stopColor="#f50057" />
            </linearGradient>
          </defs>
        </svg>

        <div className="skills-grid reveal" data-stagger>
          {SKILLS.map((skill) => (
            <SkillCard
              key={skill.name}
              name={skill.name}
              percent={skill.percent}
              description={skill.description}
              animate={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
