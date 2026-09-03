import './Projects.css'

const aiProjects = [
  {
    label: 'Generative AI',
    title: 'Cold Email Generator',
    problem: 'Sales teams waste time writing repetitive outreach emails that lack personalization.',
    built: 'A GenAI application that analyzes website context and generates personalized outreach messages using prompt engineering and LLM-based generation.',
    tech: ['Python', 'LangChain', 'OpenAI API', 'NLP', 'Flask'],
    github: 'https://github.com/VICKY-0017/Email_generator-GenAI-',
    color: '#3b82f6',
    gradient: 'linear-gradient(135deg, rgba(37,99,235,0.15) 0%, rgba(59,130,246,0.05) 100%)',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
  {
    label: 'Computer Vision AI',
    title: 'Suspicious Activity Detection',
    problem: 'Manual video surveillance is slow, error-prone, and unable to scale across multiple feeds.',
    built: 'A real-time computer vision system for detecting and tracking suspicious activities in surveillance footage using object detection, multi-object tracking, and automated event reporting.',
    tech: ['PyTorch', 'YOLO', 'Deep SORT', 'OpenCV', 'Python'],
    demo: 'https://aistudio.dci.in/',
    color: '#8b5cf6',
    gradient: 'linear-gradient(135deg, rgba(109,40,217,0.15) 0%, rgba(139,92,246,0.05) 100%)',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
  },
  {
    label: 'AI + Full-Stack',
    title: 'Earthiest — AI Environmental Platform',
    problem: 'Traditional environmental campaigns lack engagement mechanics and verifiable participation.',
    built: 'A gamified environmental platform with Gemini-powered image verification that validates tree plantation activities and enables reward-driven community participation.',
    tech: ['React', 'Node.js', 'MongoDB', 'Gemini API', 'JWT'],
    demo: 'https://wyldlyf-orginal.onrender.com/',
    color: '#10b981',
    gradient: 'linear-gradient(135deg, rgba(5,150,105,0.15) 0%, rgba(16,185,129,0.05) 100%)',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
]

export default function Projects() {
  return (
    <section className="section projects" id="ai-work">
      <div className="container">
        <div className="reveal">
          <span className="section-label">Selected AI Work</span>
          <h2 className="section-title">
            AI systems I've <span className="gradient-text">built.</span>
          </h2>
          <p className="section-subtitle" style={{ marginTop: '0.5rem' }}>
            Real projects demonstrating AI engineering, Generative AI, and full-stack capability.
          </p>
        </div>

        <div className="proj__list">
          {aiProjects.map((proj, i) => (
            <article
              key={proj.title}
              className={`proj__item reveal reveal-delay-${i + 1}`}
              style={{ '--proj-color': proj.color, '--proj-gradient': proj.gradient }}
            >
              {/* Gradient top header bar */}
              <div className="proj__header">
                <div className="proj__header-left">
                  <div className="proj__header-icon" style={{ color: proj.color, background: `rgba(255,255,255,0.06)` }}>
                    {proj.icon}
                  </div>
                  <div>
                    <span className="proj__label">{proj.label}</span>
                    <h3 className="proj__title">{proj.title}</h3>
                  </div>
                </div>
                <div className="proj__links">
                  {proj.github && (
                    <a href={proj.github} target="_blank" rel="noopener noreferrer" className="proj__link">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                      GitHub
                    </a>
                  )}
                  {proj.demo && (
                    <a href={proj.demo} target="_blank" rel="noopener noreferrer" className="proj__link">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>

              {/* Body */}
              <div className="proj__body">
                <div className="proj__detail">
                  <div className="proj__detail-row">
                    <span className="proj__detail-key">Problem</span>
                    <p className="proj__detail-val">{proj.problem}</p>
                  </div>
                  <div className="proj__detail-row">
                    <span className="proj__detail-key">What I Built</span>
                    <p className="proj__detail-val">{proj.built}</p>
                  </div>
                </div>

                <div className="proj__tech">
                  {proj.tech.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
