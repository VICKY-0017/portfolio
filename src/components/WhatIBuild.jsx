import './WhatIBuild.css'

const capabilities = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
    title: 'AI Agents',
    desc: 'Intelligent systems capable of reasoning through tasks, using tools, retrieving information, and executing multi-step workflows.',
    tags: ['LangGraph', 'ReAct', 'Tool Use', 'Planning'],
    color: '#8b5cf6',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
    title: 'RAG Systems',
    desc: 'Grounded AI systems that connect language models with private, structured, and domain-specific knowledge.',
    tags: ['Vector DBs', 'Embeddings', 'Context Retrieval', 'FastAPI'],
    color: '#3b82f6',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    title: 'Generative AI Apps',
    desc: 'LLM-powered applications for contextual understanding, content generation, intelligent interaction, and automation.',
    tags: ['LangChain', 'Prompt Engineering', 'OpenAI', 'Gemini'],
    color: '#06b6d4',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: 'AI Automation',
    desc: 'AI-powered workflows that automate repetitive processes and assist teams with complex operational tasks.',
    tags: ['Pipelines', 'APIs', 'Scheduling', 'Monitoring'],
    color: '#10b981',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
    title: 'AI-Powered Analytics',
    desc: 'Systems that transform raw business data into insights, anomaly detection, explanations, and decision support.',
    tags: ['Python', 'Power BI', 'Tableau', 'NLP Insights'],
    color: '#f59e0b',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: 'AI Products',
    desc: 'AI-native applications built around real user needs and practical business problems.',
    tags: ['Product Thinking', 'Full-Stack', 'React', 'FastAPI'],
    color: '#f43f5e',
  },
]

export default function WhatIBuild() {
  return (
    <section className="section whatibuild" id="what-i-build">
      <div className="container">
        <div className="reveal">
          <span className="section-label">Capabilities</span>
          <h2 className="section-title">
            What I <span className="gradient-text">Build</span>
          </h2>
          <p className="section-subtitle" style={{ marginTop: '0.5rem' }}>
            A snapshot of the systems and solutions I design, build, and ship.
          </p>
        </div>

        <div className="wib__grid">
          {capabilities.map((cap, i) => (
            <div
              key={cap.title}
              className={`wib__card card reveal reveal-delay-${(i % 3) + 1}`}
              style={{ '--cap-color': cap.color }}
            >
              <div className="wib__card-top">
                <div className="wib__icon" style={{ color: cap.color }}>
                  {cap.icon}
                </div>
                <h3 className="wib__title">{cap.title}</h3>
                <p className="wib__desc">{cap.desc}</p>
              </div>
              <div className="wib__tags">
                {cap.tags.map((tag) => (
                  <span key={tag} className="wib__tag" style={{ '--cap-color': cap.color }}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
