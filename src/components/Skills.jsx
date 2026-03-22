import { useState } from 'react'
import { aiMlSkills, coreCsSkills, programmingSkills, softSkills, webToolsSkills } from '../data/skills'

function SkillIcon({ type, className = '' }) {
  const iconClass = `skill-item-icon ${className}`.trim()

  switch (type) {
    case 'python':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={iconClass}>
          <path fill="#3776AB" d="M11.9 2c-4.73 0-4.44 2.05-4.44 2.05l.01 2.12h4.52v.64H5.67S2 6.39 2 12.2c0 5.8 3.2 5.6 3.2 5.6h1.9v-2.67s-.1-3.2 3.14-3.2h5.4s3.03.05 3.03-2.93V4.98S19.14 2 14.35 2Zm-2.5 1.73a.82.82 0 1 1 0 1.64.82.82 0 0 1 0-1.64Z" />
          <path fill="#FFD43B" d="M12.1 22c4.73 0 4.44-2.05 4.44-2.05l-.01-2.12h-4.52v-.64h6.32S22 17.61 22 11.8c0-5.8-3.2-5.6-3.2-5.6h-1.9v2.67s.1 3.2-3.14 3.2h-5.4S5.33 12.02 5.33 15v4.02S4.86 22 9.65 22Zm2.5-1.73a.82.82 0 1 1 0-1.64.82.82 0 0 1 0 1.64Z" />
        </svg>
      )
    case 'cplusplus':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={iconClass}>
          <path fill="#00599C" d="m12 2 8.5 5v10L12 22l-8.5-5V7Z" />
          <path fill="#fff" d="M12.4 8.02a4.6 4.6 0 0 0-2.33.62 4.42 4.42 0 0 0-1.68 1.7 4.9 4.9 0 0 0 0 4.88 4.42 4.42 0 0 0 1.68 1.7 4.6 4.6 0 0 0 2.33.62 4.73 4.73 0 0 0 2.83-.94v-1.75a3.8 3.8 0 0 1-2.64 1.14 2.87 2.87 0 0 1-1.55-.44 3.07 3.07 0 0 1-1.1-1.18 3.47 3.47 0 0 1 0-3.38 3.07 3.07 0 0 1 1.1-1.18 2.87 2.87 0 0 1 1.55-.44 3.8 3.8 0 0 1 2.64 1.14V8.96a4.73 4.73 0 0 0-2.83-.94Zm4.02 3.32h.92v-.92h.91v.92h.92v.91h-.92v.92h-.91v-.92h-.92Zm3.12 0h.92v-.92h.91v.92h.92v.91h-.92v.92h-.91v-.92h-.92Z" />
        </svg>
      )
    case 'java':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={iconClass}>
          <path fill="#EA2D2E" d="M12.94 3.2c.74.72-.56 1.64-1.2 2.05-.64.4-.52.72.16 1.14 1.4.86 1.98 1.71 1.73 2.56-.42-1.04-3.12-1.35-3.12-3.3 0-1.1 1.15-1.74 2.43-2.45Z" />
          <path fill="#5382A1" d="M8.12 9.5c-1.55.9 1.03 1.72 2.57 1.94 2.25.31 3.39.27 5.85-.24.2.46-.2.9-.62 1.03-1.45.44-4.9.58-6.61.06-3.16-.94-1.84-2.84-1.2-2.8Zm-.96 3.74c-1.78 1.31 1.1 2.22 3.16 2.38 2.84.22 4.78-.13 6.78-.52.27.55-.29 1.07-.7 1.2-1.23.43-4.17.52-6.68.23-3.03-.35-4.84-1.42-2.56-3.29Z" />
          <path fill="#5382A1" d="M16.6 16.58c.74.43.16.84-.35.94-1 .2-4.2.26-7.62-.1-3.4-.37-4.4-1.2-3.12-1.82.35-.17.9-.31 1.46-.4-.63.46-1.03.87-.62 1.2.57.5 2.48.95 4.28 1.03 2.92.12 5.36-.15 6.4-.5.38-.13.5-.28-.43-.35Z" />
        </svg>
      )
    case 'c':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={iconClass}>
          <path fill="#A8B9CC" d="m12 2 8.5 5v10L12 22l-8.5-5V7Z" />
          <path fill="#fff" d="M13.46 8.08a4.87 4.87 0 0 0-2.47.66 4.55 4.55 0 0 0-1.74 1.77 5.04 5.04 0 0 0 0 4.98 4.55 4.55 0 0 0 1.74 1.77 4.87 4.87 0 0 0 2.47.66 5 5 0 0 0 2.94-.98v-1.8a3.94 3.94 0 0 1-2.74 1.18 3.05 3.05 0 0 1-1.61-.45 3.16 3.16 0 0 1-1.14-1.2 3.62 3.62 0 0 1 0-3.46A3.16 3.16 0 0 1 12.05 10a3.05 3.05 0 0 1 1.61-.45 3.94 3.94 0 0 1 2.74 1.18v-1.8a5 5 0 0 0-2.94-.97Z" />
        </svg>
      )
    case 'html':
      return <span className={`${iconClass} glyph-icon`}>H</span>
    case 'css':
      return <span className={`${iconClass} glyph-icon`}>C</span>
    case 'bootstrap':
      return <span className={`${iconClass} glyph-icon`}>B</span>
    case 'js':
      return <span className={`${iconClass} glyph-icon`}>JS</span>
    case 'react':
      return <span className={`${iconClass} glyph-icon`}>R</span>
    case 'git':
      return <span className={`${iconClass} glyph-icon`}>GIT</span>
    case 'github':
      return <span className={`${iconClass} glyph-icon`}>GH</span>
    case 'ml':
      return <span className={`${iconClass} glyph-icon`}>AI</span>
    case 'nlp':
      return <span className={`${iconClass} glyph-icon`}>NLP</span>
    case 'genai':
      return <span className={`${iconClass} glyph-icon`}>G</span>
    case 'scikit':
      return <span className={`${iconClass} glyph-icon`}>SK</span>
    case 'tensorflow':
      return <span className={`${iconClass} glyph-icon`}>TF</span>
    case 'pytorch':
      return <span className={`${iconClass} glyph-icon`}>PT</span>
    case 'numpy':
      return <span className={`${iconClass} glyph-icon`}>NP</span>
    case 'pandas':
      return <span className={`${iconClass} glyph-icon`}>PD</span>
    case 'opencv':
      return <span className={`${iconClass} glyph-icon`}>CV</span>
    case 'dsa':
      return <span className={`${iconClass} glyph-icon`}>DS</span>
    case 'oop':
      return <span className={`${iconClass} glyph-icon`}>OOP</span>
    case 'dbms':
      return <span className={`${iconClass} glyph-icon`}>DB</span>
    case 'os':
      return <span className={`${iconClass} glyph-icon`}>OS</span>
    case 'cn':
      return <span className={`${iconClass} glyph-icon`}>CN</span>
    case 'spark':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={iconClass}>
          <path fill="currentColor" d="m13.73 2-5.5 6.68 3.2-.8-1.4 3.2 5.47-6.62-3.25.72Z" />
          <path fill="currentColor" d="M12 12.8a4.5 4.5 0 1 1-4.49 4.5A4.5 4.5 0 0 1 12 12.8Zm0 2.15a2.35 2.35 0 1 0 0 4.7 2.35 2.35 0 0 0 0-4.7Z" />
        </svg>
      )
    case 'monitor':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={iconClass}>
          <rect x="4" y="5" width="16" height="11" rx="1.8" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <path d="M9 20h6M12 16v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      )
    case 'communication':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={iconClass}>
          <path d="M5 6.5A2.5 2.5 0 0 1 7.5 4h9A2.5 2.5 0 0 1 19 6.5v6A2.5 2.5 0 0 1 16.5 15H11l-3.8 3v-3H7.5A2.5 2.5 0 0 1 5 12.5Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
      )
    case 'leadership':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={iconClass}>
          <circle cx="12" cy="7" r="3" fill="currentColor" />
          <path d="M7 19a5 5 0 0 1 10 0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M5 12.5a2.5 2.5 0 0 0-2.5 2.5M19 12.5a2.5 2.5 0 0 1 2.5 2.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      )
    case 'teamwork':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={iconClass}>
          <circle cx="8" cy="9" r="2.4" fill="currentColor" />
          <circle cx="16" cy="9" r="2.4" fill="currentColor" />
          <circle cx="12" cy="7" r="2.6" fill="currentColor" />
          <path d="M4.5 18a3.5 3.5 0 0 1 7 0M12.5 18a3.5 3.5 0 0 1 7 0M7.8 18a4.2 4.2 0 0 1 8.4 0" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      )
    case 'problem-solving':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={iconClass}>
          <path d="M9 18h6M10 21h4M8.8 14.4A5.8 5.8 0 1 1 15.2 14.4c-.76.68-1.2 1.2-1.2 2.1h-4c0-.9-.44-1.42-1.2-2.1Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'time':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={iconClass}>
          <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <path d="M12 8v4l2.5 2.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'adaptability':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={iconClass}>
          <path d="M8 7H5V4M16 17h3v3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5.5 10a7 7 0 0 1 11.6-3.7L19 8M18.5 14a7 7 0 0 1-11.6 3.7L5 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    default:
      return <span className={`${iconClass} glyph-icon`}>{type?.slice(0, 2)?.toUpperCase()}</span>
  }
}

function Skills() {
  const [activeTab, setActiveTab] = useState('technical')

  return (
    <section className="section-card" id="skills">
      <div className="section-head">
        <h2>Skills</h2>
        <p className="section-sub">Programming strength, AI/ML tools, and core CS foundations I actively use.</p>
      </div>

      <div className="skills-toggle" role="tablist" aria-label="Skills categories">
        <button
          type="button"
          className={`skills-toggle-btn ${activeTab === 'technical' ? 'active' : ''}`}
          onClick={() => setActiveTab('technical')}
        >
          Technical Skills
        </button>
        <button
          type="button"
          className={`skills-toggle-btn ${activeTab === 'soft' ? 'active' : ''}`}
          onClick={() => setActiveTab('soft')}
        >
          Soft Skills
        </button>
      </div>

      {activeTab === 'technical' ? (
        <div className="skills-tech-board">
          <div className="skills-showcase">
            <article className="skills-card programming-card">
              <p className="skills-card-label">PROGRAMMING</p>
              <div className="skills-pill-row programming-pill-row">
                {programmingSkills.map((skill) => (
                  <span key={skill.name} className="skill-pill programming-pill">
                    <SkillIcon type={skill.icon} className="pill-icon" />
                    {skill.name}
                  </span>
                ))}
              </div>
            </article>

            <article className="skills-card detail-card ai-card">
              <div className="stack-card-title-row">
                <p className="skills-card-label">AI &amp; MACHINE LEARNING</p>
                <span className="stack-card-count">({aiMlSkills.length} skills)</span>
              </div>
              <div className="skills-pill-row">
                {aiMlSkills.map((skill) => (
                  <span key={skill.name} className="skill-pill ai-pill">{skill.name}</span>
                ))}
              </div>
            </article>

            <article className="skills-card detail-card core-card">
              <p className="skills-card-label">CORE CS</p>
              <div className="skills-pill-row">
                {coreCsSkills.map((skill) => (
                  <span key={skill.name} className="skill-pill core-pill">{skill.name}</span>
                ))}
              </div>
            </article>

            <article className="skills-card detail-card web-card">
              <div className="stack-card-title-row">
                <p className="skills-card-label">WEB &amp; TOOLS</p>
                <span className="stack-card-count">({webToolsSkills.length} skills)</span>
              </div>
              <div className="skills-pill-row">
                {webToolsSkills.map((skill) => (
                  <span key={skill.name} className="skill-pill web-pill">
                    <SkillIcon type={skill.icon} className="pill-icon" />
                    {skill.name}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </div>
      ) : (
        <div className="soft-skills-panel">
          <p className="skills-card-label">SOFT SKILLS</p>
          <div className="skills-card-copy">
            <h3>Professional Strengths</h3>
            <p>{softSkills.length} skills</p>
          </div>
          <div className="soft-skills-grid">
            {softSkills.map((skill) => (
              <article key={skill.title} className="soft-skill-card">
                <div className="soft-skill-icon">
                  <SkillIcon type={skill.icon} />
                </div>
                <h4>{skill.title}</h4>
                <p>{skill.description}</p>
              </article>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}

export default Skills
