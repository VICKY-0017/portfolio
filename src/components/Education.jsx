import './Education.css'

const certifications = [
  {
    title: 'Machine Learning Specialization',
    issuer: 'Stanford University & DeepLearning.AI',
    year: '2024',
    logo: (
      <img
        src="/stanford_emblem.png"
        alt="Stanford University"
        className="edu__cert-logo-img edu__cert-logo-img--stanford"
      />
    ),
    link: '/Machine_learning certificate.pdf',
    color: '#e11d48',
    org: 'Stanford',
  },
  {
    title: 'Google Data Analytics Professional Certificate',
    issuer: 'Google Career Certificates',
    year: '2024',
    logo: (
      <svg width="24" height="24" viewBox="0 0 24 24">
        <path fill="#EA4335" d="M12 5c1.6 0 3 .6 4.1 1.6l3.1-3.1C17.3 1.7 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.3l3.7 2.9C6.5 7.4 9 5 12 5z"/>
        <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.7-.2-2.3H12v4.6h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.9z"/>
        <path fill="#FBBC05" d="M5.6 14.8c-.2-.7-.4-1.5-.4-2.8s.2-2.1.4-2.8L1.9 6.3C.7 8.7 0 10.3 0 12s.7 3.3 1.9 5.7l3.7-2.9z"/>
        <path fill="#34A853" d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2.4-6.4-5.2L1.9 16c1.8 3.7 5.6 7 10.1 7z"/>
      </svg>
    ),
    link: '/Google data analytics professional certificate.pdf',
    color: '#4285f4',
    org: 'Google',
  },
  {
    title: 'Python for Data Science',
    issuer: 'IBM Cognitive Class',
    year: '2023',
    logo: (
      <img
        src="/ibm_logo.png"
        alt="IBM"
        className="edu__cert-logo-img edu__cert-logo-img--ibm"
      />
    ),
    link: '/Python_101_Data_Science.png',
    color: '#0f62fe',
    org: 'IBM',
  },
  {
    title: 'Full-Stack Development Bootcamp',
    issuer: 'Udemy — MERN Stack',
    year: '2024',
    logo: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 4.5v7.5a7.5 7.5 0 0 0 15 0V4.5"/>
        <polygon points="12 17 8 21 16 21 12 17" fill="#ec4899"/>
      </svg>
    ),
    link: '/Full-stack_Web_devolopment_certificate.pdf',
    color: '#ec4899',
    org: 'Udemy',
  },
]

const timeline = [
  { year: '2023', text: 'Data Science · ML · Web Development Internships' },
  { year: '2024', text: 'Computer Vision + Dr. Kalam Young Achiever Award' },
  { year: '2025', text: 'Full-Stack Development · Best Student Innovator Award' },
  { year: 'Now', text: 'AI Engineer @ Kaar Technologies · Building 4CIKI', highlight: true, current: true },
]

export default function Education() {
  return (
    <section className="section education" id="education">
      <div className="container">
        {/* Header */}
        <div className="edu__header reveal">
          <span className="section-label">Education & Certifications</span>
          <h2 className="section-title">
            Academic Background & <span className="gradient-text">Credentials</span>
          </h2>
          <p className="section-subtitle">
            Formal engineering foundation paired with continuous specialization from world-leading institutions.
          </p>
        </div>

        {/* Top Split: Degree Card & Career Timeline */}
        <div className="edu__layout">
          {/* Degree Card */}
          <div className="edu__degree card reveal reveal-delay-1">
            <div className="edu__degree-accent" />
            <div className="edu__degree-body">
              <div className="edu__degree-top">
                <div className="edu__degree-badge">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                  </svg>
                  <span>Bachelor of Engineering</span>
                </div>
                <div className="edu__degree-cgpa-pill">
                  <span className="edu__degree-cgpa-num">7.95</span>
                  <span className="edu__degree-cgpa-tag">CGPA</span>
                </div>
              </div>

              <h3 className="edu__degree-major">Computer Science and Engineering</h3>
              <p className="edu__degree-institution">Velammal College of Engineering and Technology</p>
              
              <div className="edu__degree-highlights">
                <span className="tag">Algorithms & DS</span>
                <span className="tag">Operating Systems</span>
                <span className="tag">AI & Machine Learning</span>
                <span className="tag">Computer Networks</span>
              </div>
            </div>
          </div>

          {/* Career Timeline */}
          <div className="edu__timeline card reveal reveal-delay-2">
            <div className="edu__timeline-header">
              <span className="edu__timeline-title">Career Milestones</span>
              <span className="edu__timeline-sub">2023 — Present</span>
            </div>
            <div className="edu__timeline-list">
              {timeline.map((item) => (
                <div key={item.year} className={`edu__tl-item ${item.highlight ? 'edu__tl-item--highlight' : ''} ${item.current ? 'edu__tl-item--current' : ''}`}>
                  <div className="edu__tl-dot" />
                  <div className="edu__tl-content">
                    <span className="edu__tl-year">{item.year}</span>
                    <span className="edu__tl-text">{item.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="edu__certs-section">
          <div className="edu__certs-heading reveal">
            <div>
              <h3 className="edu__certs-title">Industry Certifications</h3>
              <p className="edu__certs-desc">Verified credentials from Stanford, Google, IBM, and top global platforms.</p>
            </div>
            <div className="edu__certs-line" />
          </div>

          <div className="edu__certs-grid">
            {certifications.map((cert, i) => (
              <a
                key={cert.title}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`edu__cert card reveal reveal-delay-${(i % 4) + 1}`}
                style={{ '--cert-color': cert.color }}
              >
                <div className="edu__cert-top">
                  <div className="edu__cert-logo-box">
                    {cert.logo}
                  </div>
                  <span className="edu__cert-org-tag" style={{ color: cert.color }}>
                    {cert.org}
                  </span>
                  <div className="edu__cert-arrow">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7M17 7H7M17 7V17"/>
                    </svg>
                  </div>
                </div>

                <div className="edu__cert-main">
                  <h4 className="edu__cert-name">{cert.title}</h4>
                  <p className="edu__cert-issuer">{cert.issuer}</p>
                </div>

                <div className="edu__cert-footer">
                  <span className="edu__cert-year">{cert.year}</span>
                  <span className="edu__cert-verify">View Certificate</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
