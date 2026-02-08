"use client";

import Image from "next/image";
import { useInView, useCounter } from "@/hooks";
import { STATS } from "@/data/portfolio";

function StatItem({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const { ref, isInView } = useInView(0.5);
  const display = useCounter(value, suffix, isInView);

  return (
    <div ref={ref} className="stat-item reveal-child">
      <div className="counter">{display}</div>
      <p>{label}</p>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-image reveal reveal-left">
            <Image
              src="/images/Me.svg"
              alt="About Oluwole"
              width={400}
              height={400}
            />
            <div className="about-image-decoration" />
          </div>

          <div className="about-text reveal reveal-right">
            <h2>About Me</h2>
            <p>
              I&apos;m a passionate web and mobile app developer with expertise
              in creating secure and functional websites and cross-platform
              mobile apps. With a strong foundation in front-end technologies
              and a growing knowledge of cybersecurity practices, I bring a
              unique perspective to every project.
            </p>
            <p>
              My background combines creative web design, mobile app development
              (React Native), and security-focused implementation. I specialize
              in developing responsive websites and performant mobile
              applications that incorporate secure coding practices.
            </p>

            <div className="about-info-grid">
              {[
                {
                  icon: "fas fa-user",
                  label: "Name",
                  value: "Oluwole Oluwole",
                },
                {
                  icon: "fas fa-envelope",
                  label: "Email",
                  value: "oluwoleoluwole82@gmail.com",
                },
                {
                  icon: "fas fa-location-dot",
                  label: "Location",
                  value: "Lagos, Nigeria",
                },
                {
                  icon: "fas fa-circle-check",
                  label: "Freelance",
                  value: "Available",
                },
              ].map((item) => (
                <div key={item.label} className="about-info-item">
                  <i className={item.icon} />
                  <div>
                    <span className="label">{item.label}</span>
                    <div className="value">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <a href="#" className="btn btn-primary magnetic">
              <i className="fas fa-download" /> Download CV
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="stats-strip reveal" data-stagger>
          {STATS.map((stat) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
