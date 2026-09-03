import './Skills.css'

const skillGroups = [
  {
    title: 'AI & Generative AI',
    priority: true,
    color: '#8b5cf6',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
    skills: ['LLMs', 'Generative AI', 'RAG', 'AI Agents', 'Agentic Workflows', 'Prompt Engineering', 'LangChain', 'LangGraph'],
  },
  {
    title: 'AI / Machine Learning',
    priority: true,
    color: '#3b82f6',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    skills: ['Python', 'Machine Learning', 'Deep Learning', 'Computer Vision', 'NLP', 'PyTorch', 'TensorFlow', 'YOLO', 'OpenCV'],
  },
  {
    title: 'AI Engineering',
    priority: true,
    color: '#06b6d4',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
    skills: ['FastAPI', 'REST APIs', 'Vector Databases', 'API Integration', 'Backend Architecture', 'AI Application Development'],
  },
  {
    title: 'Software Engineering',
    color: '#10b981',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    skills: ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'SQL', 'Git'],
  },
  {
    title: 'Data & Analytics',
    color: '#f59e0b',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
    skills: ['Power BI', 'Tableau', 'DAX', 'Data Modeling', 'Data Analysis'],
  },
]

export default function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="container">
        <div className="reveal">
          <span className="section-label">Technical Stack</span>
          <h2 className="section-title">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle" style={{ marginTop: '0.5rem' }}>
            Organized by domain — AI-first.
          </p>
        </div>

        <div className="skills__grid">
          {skillGroups.map((group, i) => (
            <div
              key={group.title}
              className={`skills__group card reveal reveal-delay-${(i % 3) + 1} ${group.priority ? 'skills__group--priority' : ''}`}
              style={{ '--group-color': group.color }}
            >
              <div className="skills__group-header">
                <div className="skills__group-icon" style={{ color: group.color }}>
                  {group.icon}
                </div>
                <h3 className="skills__group-title">{group.title}</h3>
                {group.priority && (
                  <span className="skills__priority-badge">Core</span>
                )}
              </div>
              <div className="skills__pills">
                {group.skills.map((skill) => (
                  <span key={skill} className="skills__pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
