import './FourCIKI.css'

const focusCards = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
    title: 'Agentic AI',
    status: 'Multi-Agent',
    desc: 'Intelligent systems that reason through tasks, use tools, retrieve information, and execute multi-step workflows.',
    color: '#8b5cf6',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    title: 'Generative AI',
    status: 'Context-Aware',
    desc: 'LLM-powered applications that understand context, generate content, and interact naturally with users and business data.',
    color: '#3b82f6',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: 'AI Automation',
    status: 'Autonomous',
    desc: 'Intelligent workflows that reduce repetitive manual operations and support faster decision-making.',
    color: '#06b6d4',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: 'AI Products',
    status: 'Production',
    desc: 'AI-native applications designed around real users, real problems, and measurable outcomes.',
    color: '#10b981',
  },
]

export default function FourCIKI() {
  return (
    <section className="section fourciki" id="4ciki">
      {/* Background */}
      <div className="fourciki__bg" aria-hidden="true" />
      <div className="fourciki__glow" aria-hidden="true" />
      <div className="fourciki__glow fourciki__glow--secondary" aria-hidden="true" />

      <div className="container">
        <div className="fourciki__header reveal">
          <div className="fourciki__header-left">
            <div className="fourciki__brand-tag">
              <div className="fourciki__logo-ring">
                <img src="/4ciki.png" alt="4CIKI Logo" className="fourciki__logo-img" />
              </div>
              <span className="section-label fourciki__section-label">
                <span className="fourciki__label-pulse" />
                Product Initiative
              </span>
            </div>

            <div className="fourciki__title-row">
              <div>
                <h2 className="section-title fourciki__title">4CIKI</h2>
                <p className="fourciki__tagline">
                  AI products. Intelligent systems. Real-world impact.
                </p>
              </div>
              <div className="fourciki__identity-badge">
                <span className="fourciki__badge-dot" />
                <span>Founder / Builder</span>
              </div>
            </div>

            <p className="fourciki__desc">
              4CIKI is an AI-focused product initiative exploring the next generation of intelligent products
              and agentic systems. I use 4CIKI to experiment with AI-native products, agentic workflows,
              intelligent automation, and AI-powered solutions designed around real-world problems.
            </p>
          </div>

          {/* 3D Holographic AI Innovation Core Graphic */}
          <div className="fourciki__3d-core" aria-hidden="true">
            <div className="fourciki__cube-wrapper">
              <div className="fourciki__cube">
                <div className="fourciki__cube-face fourciki__cube-face--front" />
                <div className="fourciki__cube-face fourciki__cube-face--back" />
                <div className="fourciki__cube-face fourciki__cube-face--right" />
                <div className="fourciki__cube-face fourciki__cube-face--left" />
                <div className="fourciki__cube-face fourciki__cube-face--top" />
                <div className="fourciki__cube-face fourciki__cube-face--bottom" />
                <div className="fourciki__cube-core" />
              </div>
              <div className="fourciki__core-orbit fourciki__core-orbit--1" />
              <div className="fourciki__core-orbit fourciki__core-orbit--2" />
            </div>
            <div className="fourciki__core-status">
              <span className="fourciki__core-status-dot" />
              <span>4CIKI Neural Engine Active</span>
            </div>
          </div>
        </div>

        {/* Focus cards */}
        <div className="fourciki__cards">
          {focusCards.map((card, i) => (
            <div
              key={card.title}
              className={`fourciki__card card reveal reveal-delay-${i + 1}`}
              style={{ '--card-color': card.color }}
            >
              <div className="fourciki__card-top">
                <div className="fourciki__card-icon" style={{ color: card.color }}>
                  {card.icon}
                </div>
                <span className="fourciki__card-status" style={{ color: card.color, borderColor: `${card.color}33`, background: `${card.color}12` }}>
                  {card.status}
                </span>
              </div>
              <h3 className="fourciki__card-title">{card.title}</h3>
              <p className="fourciki__card-desc">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Manifesto */}
        <div className="fourciki__manifesto card reveal">
          <div className="fourciki__manifesto-inner">
            <svg className="fourciki__quote-icon" width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
            <blockquote className="fourciki__quote">
              Don't build AI because it's possible.
              <br />
              <span className="gradient-text">Build it because it solves something.</span>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
