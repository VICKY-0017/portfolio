import './Contact.css'

const contactLinks = [
  {
    label: 'Email',
    value: 't.r.vigneshbabu3110@gmail.com',
    href: 'mailto:t.r.vigneshbabu3110@gmail.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    color: '#3b82f6',
  },
  {
    label: 'LinkedIn',
    value: 'vignesh-babu-t-r-880880250',
    href: 'https://www.linkedin.com/in/vignesh-babu-t-r-880880250/',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    color: '#0077b5',
  },
  {
    label: 'GitHub',
    value: 'VICKY-0017',
    href: 'https://github.com/VICKY-0017',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    color: '#ffffff',
  },
]

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      {/* Background elements */}
      <div className="contact__glow" aria-hidden="true" />
      <div className="contact__grid" aria-hidden="true" />

      <div className="container contact__container">
        <div className="contact__content">
          <div className="reveal">
            <span className="section-label" style={{ color: '#60a5fa' }}>
              <span style={{ background: '#60a5fa', height: '1px', width: '20px', display: 'inline-block', marginRight: '0.5rem' }} />
              Contact
            </span>

            <h2 className="section-title contact__title">
              Let's build something <span className="gradient-text">intelligent.</span>
            </h2>

            <p className="contact__desc">
              Whether you're building an AI product, exploring agentic workflows, solving an enterprise
              problem, or looking for someone to turn an AI idea into a working system — let's talk.
            </p>
          </div>

          {/* Contact links */}
          <div className="contact__links">
            {contactLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`contact__link card reveal reveal-delay-${i + 1}`}
                style={{ '--link-color': link.color }}
              >
                <div className="contact__link-icon" style={{ color: link.color }}>
                  {link.icon}
                </div>
                <div className="contact__link-info">
                  <div className="contact__link-label">{link.label}</div>
                  <div className="contact__link-value">{link.value}</div>
                </div>
                <div className="contact__link-arrow">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </a>
            ))}
          </div>

          {/* Primary CTA */}
          <div className="contact__cta reveal">
            <a
              href="mailto:t.r.vigneshbabu3110@gmail.com"
              className="btn btn-primary contact__cta-btn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              Send me an Email
            </a>
            <a
              href="https://www.linkedin.com/in/vignesh-babu-t-r-880880250/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>

        {/* Right executive profile card */}
        <div className="contact__panel reveal">
          <div className="contact__panel-inner card">
            <div className="contact__photo-wrapper">
              <div className="contact__photo-glow" />
              <img
                src="/img5.jpeg"
                alt="Vignesh Babu T R"
                className="contact__photo"
                loading="lazy"
              />
            </div>

            <div className="contact__panel-info">
              <div className="contact__panel-name">Vignesh Babu T R</div>
              <div className="contact__panel-role">
                <span className="contact__role-company">AI Engineer @ Kaar Technologies</span>
                <span className="contact__role-sep">·</span>
                <span className="contact__role-sub">Building 4CIKI</span>
              </div>
              <div className="contact__panel-status">
                <span className="contact__status-dot" />
                Available for AI Engineering Roles
              </div>
            </div>

            <div className="contact__panel-quote">
              <svg className="contact__quote-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
              <p>Building practical, production-grade AI systems that solve real problems — one intelligent application at a time.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
