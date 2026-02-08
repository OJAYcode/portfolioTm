import { SOCIAL_LINKS, NAV_LINKS } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <a href="#" className="logo">
              Oluwole<span style={{ color: "var(--secondary)" }}>.</span>
            </a>
            <p>
              Crafting digital experiences with code, creativity, and security
              in mind.
            </p>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li>
                <a href="#">Web Development</a>
              </li>
              <li>
                <a href="#">Mobile Apps</a>
              </li>
              <li>
                <a href="#">UI/UX Design</a>
              </li>
              <li>
                <a href="#">Security Consulting</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Oluwole Oluwole. All Rights Reserved.</p>
          <div className="footer-social">
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
      </div>
    </footer>
  );
}
