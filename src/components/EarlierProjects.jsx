import './EarlierProjects.css'

const earlierProjects = [
  {
    title: 'Netflix Intelligence Dashboard',
    desc: 'Interactive analytics dashboard exploring content distribution, genres, trends, and catalog patterns to derive insights from Netflix data.',
    tech: ['Tableau', 'SQL', 'Data Analytics'],
    link: 'https://drive.google.com/file/d/1scOzoXBNIIgfbPela9EKuwt-YMvUkS5T/view',
    linkLabel: 'View Dashboard',
  },
  {
    title: 'Air Crash Analysis Dashboard',
    desc: 'Interactive Power BI analytics system examining global aviation accident patterns across fatalities, aircraft types, operators, and historical trends.',
    tech: ['Power BI', 'DAX', 'Data Modeling', 'Analytics'],
    link: 'https://drive.google.com/file/d/16b3ehZTI6VO4DXJvodygpSHSm67zBklS/view',
    linkLabel: 'View Dashboard',
  },
]

export default function EarlierProjects() {
  return (
    <section className="section earlier-projects" id="earlier-work">
      <div className="container">
        <div className="reveal">
          <span className="section-label">Historical Work</span>
          <h2 className="section-title">
            Earlier Engineering <span className="gradient-text">Work</span>
          </h2>
        </div>

        <div className="ep__grid">
          {earlierProjects.map((proj, i) => (
            <div key={proj.title} className={`ep__card card reveal reveal-delay-${i + 1}`}>
              <h3 className="ep__title">{proj.title}</h3>
              <p className="ep__desc">{proj.desc}</p>
              <div className="ep__tech">
                {proj.tech.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
              {proj.link && (
                <a href={proj.link} target="_blank" rel="noopener noreferrer" className="ep__link btn btn-ghost">
                  {proj.linkLabel}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
