import './Experience.css'

const kaarTechTags = [
  'Python', 'LLMs', 'Generative AI', 'RAG', 'LangChain',
  'LangGraph', 'FastAPI', 'Vector Databases', 'REST APIs', 'Agentic AI'
]

const earlierExperience = [
  {
    role: 'AI Product Engineer / Freelance Full-Stack Developer',
    company: 'Simbli AI (Product Development Service to DCI)',
    logo: '/simbli_badge.png',
    period: 'Jan 2025 – May 2025',
    summary: 'Built Simbli AI as an end-to-end AI product development service for DCI. Architected intelligent AI pipelines, full-stack product interfaces, and automated workflows while leading and mentoring junior engineers in building production systems.',
    tags: ['Simbli AI', 'AI Product Dev', 'DCI', 'Generative AI', 'Full-Stack AI', 'Team Mentorship'],
  },
  {
    role: 'AI Club Contributor & Freelance Team Lead',
    company: 'College AI Club & Junior Team Freelancing',
    period: '2024 – 2025',
    summary: 'Actively contributed to the college AI Club, teaching AI concepts and mentoring juniors to build real-world AI products. Collaborated and led a team of junior engineers to freelance and deliver production AI solutions to clients.',
    tags: ['AI Club Leadership', 'AI Product Mentorship', 'Team Freelance', 'GenAI Products'],
  },
  {
    role: 'Freelance Full-Stack Developer',
    company: 'Immersive Digital Solutions',
    period: 'Jan 2025 – May 2025',
    summary: 'Built a comprehensive MERN-stack e-learning platform with AI chatbot integration, student/admin portals, interactive quizzes, and audio content management.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'AI Chatbot'],
  },
  {
    role: 'Computer Vision Developer',
    company: 'DCI, Madurai',
    period: 'Jan 2024 – Mar 2024',
    summary: 'Developed a real-time suspicious activity detection system using YOLO, Deep SORT, and OpenCV. Built a GUI interface with automated reporting.',
    tags: ['PyTorch', 'YOLO', 'OpenCV', 'Deep SORT'],
  },
  {
    role: 'Web Development Intern',
    company: 'The Sparks Foundation',
    period: 'Nov 2023 – Dec 2023',
    summary: 'Built a secure MERN-stack banking system with transaction management, JWT authentication, and real-time fund transfer capabilities.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'JWT Auth'],
  },
  {
    role: 'Machine Learning Intern',
    company: 'NullClass Technology',
    period: 'Sep 2023 – Oct 2023',
    summary: 'Developed ML models for pedestrian detection, voice recognition, and child detection using deep learning and transfer learning techniques.',
    tags: ['PyTorch', 'TensorFlow', 'OpenCV', 'YOLO', 'Deep Learning'],
  },
  {
    role: 'Data Science Intern',
    company: 'Exposys DataLabs',
    period: 'Jul 2023 – Aug 2023',
    summary: 'Implemented customer clustering algorithms for retail analysis and built predictive models for business decision support.',
    tags: ['Python', 'Machine Learning', 'Clustering', 'Data Analysis'],
  },
]

export default function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="container">
        <div className="reveal">
          <span className="section-label">Experience</span>
          <h2 className="section-title">
            Where I've <span className="gradient-text">built things.</span>
          </h2>
        </div>

        {/* Primary: Kaar Technologies - Executive AI Engineer Card */}
        <div className="exp__primary card reveal reveal-delay-1">
          <div className="exp__primary-accent-bar" />
          
          <div className="exp__primary-inner">
            {/* Header with high-visibility logo badge and role info */}
            <div className="exp__primary-header">
              <div className="exp__primary-header-left">
                <div className="exp__logo-badge">
                  <img
                    src="/kaartech_badge.png"
                    alt="Kaar Technologies"
                    className="exp__logo-badge-img"
                  />
                </div>
                <div className="exp__primary-title-group">
                  <div className="exp__role-row">
                    <h3 className="exp__role">AI Engineer</h3>
                    <span className="exp__badge">
                      <span className="exp__badge-dot" />
                      Current Role
                    </span>
                  </div>
                  <div className="exp__company-meta">
                    <span className="exp__company">Kaar Technologies</span>
                    <span className="exp__meta-sep">·</span>
                    <span className="exp__period">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                      </svg>
                      2025 – Present
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Body */}
            <div className="exp__primary-body">
              <p className="exp__desc">
                Building enterprise-grade AI/ML and Generative AI solutions for real-world business use cases.
                Working across Python, LLMs, RAG, LangChain, LangGraph, FastAPI, vector databases, APIs,
                and agentic AI architectures to design intelligent workflows and AI-powered applications.
              </p>
              <p className="exp__desc">
                Translating business requirements into AI solution architectures, developing proof-of-concepts
                and production-oriented systems, and integrating AI capabilities into enterprise workflows.
              </p>
              <p className="exp__desc">
                Focus areas include Generative AI, Agentic AI, Retrieval-Augmented Generation, intelligent
                automation, AI APIs, and enterprise AI applications.
              </p>

              <div className="exp__tags">
                {kaarTechTags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Timeline separator */}
        <div className="exp__earlier-heading reveal">
          <h3>Earlier Experience</h3>
          <div className="exp__earlier-line" />
        </div>

        {/* Earlier experience list */}
        <div className="exp__list">
          {earlierExperience.map((item, i) => (
            <div key={item.role + item.company} className={`exp__item card reveal reveal-delay-${(i % 4) + 1}`}>
              <div className="exp__item-header">
                <div className="exp__item-title-group">
                  {item.logo && (
                    <div className="exp__item-logo-badge">
                      <img src={item.logo} alt={item.company} className="exp__item-logo-img" />
                    </div>
                  )}
                  <div>
                    <div className="exp__item-role">{item.role}</div>
                    <div className="exp__item-company">{item.company}</div>
                  </div>
                </div>
                <div className="exp__item-period">{item.period}</div>
              </div>
              <p className="exp__item-summary">{item.summary}</p>
              <div className="exp__tags">
                {item.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
