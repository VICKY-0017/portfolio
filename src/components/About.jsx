import { useEffect, useRef } from 'react'
import './About.css'

const stats = [
  { value: '1+', label: 'Year AI Engineering', color: '#3b82f6' },
  { value: '5+', label: 'AI/ML Projects', color: '#8b5cf6' },
  { value: '2', label: 'State-Level Awards', color: '#f59e0b' },
  { value: '4+', label: 'Certifications', color: '#10b981' },
]

const pillars = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    title: 'AI Engineering',
    subtitle: 'Production-oriented AI systems',
    color: '#3b82f6',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
    title: 'Generative AI',
    subtitle: 'LLMs · RAG · Agents',
    color: '#8b5cf6',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: 'AI Product Building',
    subtitle: '4CIKI',
    color: '#06b6d4',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    title: 'Full-Stack Engineering',
    subtitle: 'AI + Backend + Applications',
    color: '#10b981',
  },
]

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="about__bg-glow" aria-hidden="true" />
      <div className="about__bg-glow about__bg-glow--2" aria-hidden="true" />
      <div className="container">
        <div className="about__header reveal">
          <span className="section-label">About</span>
          <h2 className="section-title">
            Building AI systems that <span className="gradient-text">solve real problems.</span>
          </h2>
        </div>

        {/* Stats Row */}
        <div className="about__stats reveal">
          {stats.map((s) => (
            <div key={s.label} className="about__stat" style={{ '--stat-color': s.color }}>
              <div className="about__stat-value" style={{ color: s.color }}>{s.value}</div>
              <div className="about__stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="about__layout">
          {/* Text column */}
          <div className="about__text">
            <p className="about__para reveal reveal-delay-1">
              I'm an AI Engineer focused on building practical AI systems that move beyond
              experimentation and into real-world applications.
            </p>
            <p className="about__para reveal reveal-delay-2">
              At <strong>Kaar Technologies</strong>, I work on enterprise AI/ML and Generative AI solutions,
              working across LLMs, RAG, agentic architectures, LangChain, LangGraph, Python, FastAPI,
              vector databases, APIs, and intelligent automation.
            </p>
            <p className="about__para reveal reveal-delay-3">
              Alongside my professional work, I'm building <strong>4CIKI</strong>, an AI-focused product
              initiative where I explore AI-native products, agentic systems, intelligent automation,
              and practical applications of emerging AI technologies.
            </p>
            <p className="about__para reveal reveal-delay-4">
              My background spans Artificial Intelligence, Machine Learning, Computer Vision,
              Generative AI, Data Analytics, and Full-Stack Engineering — from understanding a
              problem and designing an AI architecture to building the backend, integrating models,
              and delivering a usable product.
            </p>
            <p className="about__para about__para--highlight reveal reveal-delay-5">
              I'm particularly interested in the intersection of{' '}
              <span className="about__keyword">Generative AI</span>,{' '}
              <span className="about__keyword">Agentic AI</span>,{' '}
              <span className="about__keyword">enterprise AI</span>,{' '}
              <span className="about__keyword">automation</span>, and{' '}
              <span className="about__keyword">product engineering</span>.
            </p>
          </div>

          {/* Pillar cards */}
          <div className="about__pillars">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className={`about__pillar reveal reveal-delay-${i + 1}`}
                style={{ '--pillar-color': p.color }}
              >
                <div className="about__pillar-icon" style={{ color: p.color }}>
                  {p.icon}
                </div>
                <div>
                  <div className="about__pillar-title">{p.title}</div>
                  <div className="about__pillar-sub">{p.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
