"use client";

import { useState, useCallback } from "react";
import { CONTACT_INFO } from "@/data/portfolio";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const values = Object.fromEntries(data.entries());
    console.log("Form submission:", values);
    setSubmitted(true);
  }, []);

  return (
    <section id="contact">
      <div className="container">
        <div className="section-header reveal">
          <h2>Get In Touch</h2>
          <p>Have a project in mind? Let&apos;s work together.</p>
          <div className="section-line" />
        </div>

        <div className="contact-content">
          <div className="contact-info reveal reveal-left">
            <h3>Let&apos;s Talk</h3>
            <p>
              Feel free to contact me for any project, collaboration, or just to
              say hi! I&apos;m always open to discussing new projects, creative
              ideas, or opportunities to be part of your vision.
            </p>
            <ul className="contact-details">
              {CONTACT_INFO.map((info) => (
                <li key={info.label}>
                  <div className="contact-icon">
                    <i className={info.icon} />
                  </div>
                  <div>
                    <h4>{info.label}</h4>
                    <p>{info.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="contact-form reveal reveal-right">
            {!submitted ? (
              <form id="contactForm" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    className="form-control"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    className="form-control"
                    placeholder="Your Message"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-secondary magnetic">
                  <i className="fas fa-paper-plane" /> Send Message
                </button>
              </form>
            ) : (
              <div className="success-message reveal revealed">
                <div className="success-icon">
                  <i className="fas fa-check-circle" />
                </div>
                <h3>Message Sent!</h3>
                <p>
                  Thank you for reaching out. I&apos;ll get back to you soon!
                </p>
                <button
                  className="btn magnetic"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
