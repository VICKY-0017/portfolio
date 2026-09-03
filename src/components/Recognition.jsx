import './Recognition.css'

const awards = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7"/>
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
      </svg>
    ),
    title: 'Dr. Kalam Young Achiever Award',
    year: '2024',
    desc: 'Recognized for developing an AI-powered environmental conservation solution selected as the Best Idea & Prototype at the state level.',
    image: '/kalam_awrd.jpg',
    link: '/KALAM_AWARDS_2024.pdf',
    tags: ['State Level', 'AI Innovation', 'Environmental Tech'],
    color: '#f59e0b',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    title: 'Best Innovator Award',
    year: '2025',
    desc: 'Recognized for innovation in Artificial Intelligence, Computer Vision, Generative AI, and Machine Learning, with a focus on technology-driven environmental impact.',
    image: '/stdnt_innovation_awrd.jpg',
    link: '/student_innovation_award.pdf',
    tags: ['AI Innovation', 'Computer Vision', 'GenAI'],
    color: '#8b5cf6',
  },
]

const badges = [
  {
    platform: 'HackerRank',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c1.285 0 9.75 4.886 10.392 6 .645 1.115.645 11.885 0 13-.642 1.114-9.107 6-10.392 6-1.284 0-9.75-4.886-10.393-6-.644-1.115-.644-11.885 0-13C2.25 4.886 10.715 0 12 0zm2.295 6.799c-.141-.501-.502-.535-.654-.416-.115.093-.292.416-.35.586-.182.517-.698 2.228-1.17 3.773l-.099.323-1.038-1.758c-.286-.486-.594-.524-.855-.306-.21.178-.338.462-.455.775l-.039.106-1.12 3.773c-.181.612-.193 1.259.042 1.435.235.175.557-.041.765-.47l.056-.125 1.02-3.443.985 1.668c.282.476.594.518.842.293.193-.176.302-.441.41-.736l.036-.104 1.11-3.773c.181-.611.193-1.258-.042-1.434z"/>
      </svg>
    ),
    stat: '3 Gold Badges',
    detail: 'Python · SQL · Problem Solving',
    sub: '100+ challenges completed',
    link: 'https://www.hackerrank.com/profile/t_r_vigneshbabu1',
    color: '#10b981',
    image: '/hackerank_batches.jpg',
  },
  {
    platform: 'LeetCode',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0z"/>
      </svg>
    ),
    stat: 'Pandas Badge',
    detail: 'Data Manipulation Expert',
    sub: '50+ solutions',
    link: 'https://leetcode.com/u/vicky_3110/',
    color: '#f59e0b',
    image: '/pandas.jpg',
  },
]

export default function Recognition() {
  return (
    <section className="section recognition" id="recognition">
      <div className="container">
        <div className="reveal">
          <span className="section-label">Recognition</span>
          <h2 className="section-title">
            Awards & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="section-subtitle">
            Honored at state and university levels for high-impact artificial intelligence systems.
          </p>
        </div>

        {/* Awards */}
        <div className="rec__awards">
          {awards.map((award, i) => (
            <div key={award.title} className={`rec__award card reveal reveal-delay-${i + 1}`} style={{ '--award-color': award.color }}>
              <div className="rec__award-left">
                <span className="rec__award-year-tag">{award.year}</span>
                <img src={award.image} alt={award.title} className="rec__award-img" loading="lazy" />
              </div>
              <div className="rec__award-right">
                <div className="rec__award-icon-box" style={{ color: award.color }}>
                  {award.icon}
                </div>
                <h3 className="rec__award-title">{award.title}</h3>
                <p className="rec__award-desc">{award.desc}</p>
                <div className="rec__award-tags">
                  {award.tags.map((t) => (
                    <span key={t} className="tag tag--amber">{t}</span>
                  ))}
                </div>
                <a href={award.link} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                  View Official Certificate
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Badges Heading */}
        <div className="rec__badges-heading reveal">
          <h3>Competitive Programming & Badges</h3>
          <div className="exp__earlier-line" style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
        </div>

        {/* Badges Grid */}
        <div className="rec__badges">
          {badges.map((badge, i) => (
            <a
              key={badge.platform}
              href={badge.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`rec__badge card reveal reveal-delay-${i + 1}`}
              style={{ '--badge-color': badge.color }}
            >
              <div className="rec__badge-top">
                <div className="rec__badge-header-left">
                  <div className="rec__badge-icon" style={{ color: badge.color }}>
                    {badge.icon}
                  </div>
                  <div className="rec__badge-platform">{badge.platform}</div>
                </div>
                <div className="rec__badge-link-arrow">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M17 7H7M17 7V17"/>
                  </svg>
                </div>
              </div>

              {/* High-contrast container for badge image */}
              <div className="rec__badge-visual-box">
                <img src={badge.image} alt={`${badge.platform} badge`} className="rec__badge-img" loading="lazy" />
              </div>

              <div>
                <div className="rec__badge-stat">{badge.stat}</div>
                <div className="rec__badge-detail">{badge.detail}</div>
                <div className="rec__badge-sub">{badge.sub}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
