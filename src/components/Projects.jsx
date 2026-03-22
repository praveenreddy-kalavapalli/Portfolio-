import { useState } from 'react'
import { projects } from '../data/projects'

function ProjectDemo({ lines }) {
  return (
    <div className="market-demo">
      <div className="market-demo-label">// MARKETMIND - LIVE DEMO SIMULATION</div>
      {lines.map((line) => (
        <div
          key={line.text}
          className={`market-demo-line ${line.tone}`}
          style={{ animationDelay: `${line.delay}s` }}
        >
          {line.text}
        </div>
      ))}
    </div>
  )
}

function MarketMindDetails({ project }) {
  return (
    <>
      <section>
        <h3 className="project-modal-section-title">Live Pipeline Demo</h3>
        <ProjectDemo lines={project.demoLines} />
      </section>

      <section>
        <h3 className="project-modal-section-title">About the Project</h3>
        <p className="project-modal-copy">{project.about}</p>
      </section>

      <section>
        <h3 className="project-modal-section-title">LangGraph Pipeline</h3>
        <div className="project-pipeline-list">
          {project.pipeline.map((step, index) => (
            <div key={step.node} className="project-pipeline-item">
              <div className="project-pipeline-node">
                {String(index + 1).padStart(2, '0')} {step.node}
              </div>
              <div className="project-pipeline-desc">{step.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="project-modal-section-title">Key Features</h3>
        <div className="project-feature-grid">
          {project.features.map((feature) => (
            <article key={feature.title} className="project-feature-card">
              <div className="project-feature-icon">{feature.icon}</div>
              <h4>{feature.title}</h4>
              <p>{feature.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h3 className="project-modal-section-title">Tech Stack</h3>
        <div className="project-stack-list">
          {project.techStack.map((group) => (
            <div key={group.category} className="project-stack-row">
              <div className="project-stack-label">{group.category}</div>
              <div className="project-stack-items">
                {group.items.map((item) => (
                  <span key={item} className="project-stack-chip">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="project-market-panel">
        <h3 className="project-modal-section-title">Supported Markets</h3>
        <div className="project-market-grid">
          {project.supportedMarkets.map((market) => (
            <div key={market.label} className="project-market-card">
              <div className="project-market-symbol">{market.symbol}</div>
              <h4>{market.label}</h4>
              <p>{market.examples}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

function FlashSaleDetails({ project }) {
  return (
    <>
      <section>
        <h3 className="project-modal-section-title">About the Project</h3>
        <p className="project-modal-copy">{project.about}</p>
      </section>

      <section>
        <h3 className="project-modal-section-title">3 Locking Strategies</h3>
        <div className="project-strategy-list">
          {project.strategies.map((strategy) => (
            <article key={strategy.name} className={`project-strategy-card ${strategy.tone}`}>
              <div className="project-strategy-head">
                <h4>{strategy.name}</h4>
                <span>{strategy.status}</span>
              </div>
              <p>{strategy.desc}</p>
              <pre>{strategy.code}</pre>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h3 className="project-modal-section-title">Performance Comparison</h3>
        <div className="project-performance-list">
          {project.performance.map((item) => (
            <div key={item.label} className="project-performance-card">
              <div className="project-performance-head">
                <strong>{item.label}</strong>
                <span>{item.rps}</span>
                <span>{item.latency}</span>
                <span className={`project-performance-state ${item.tone}`}>{item.state}</span>
              </div>
              <div className="project-performance-bar">
                <div
                  className={`project-performance-fill ${item.tone}`}
                  style={{ width: `${item.bar}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="project-modal-section-title">Key Features</h3>
        <div className="project-feature-grid">
          {project.features.map((feature) => (
            <article key={feature.title} className="project-feature-card">
              <div className="project-feature-icon">{feature.icon}</div>
              <h4>{feature.title}</h4>
              <p>{feature.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h3 className="project-modal-section-title">Tech Stack</h3>
        <div className="project-stack-list">
          {project.techStack.map((group) => (
            <div key={group.category} className="project-stack-row">
              <div className="project-stack-label">{group.category}</div>
              <div className="project-stack-items">
                {group.items.map((item) => (
                  <span key={item} className="project-stack-chip">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

function BankingDetails({ project }) {
  return (
    <>
      <section>
        <h3 className="project-modal-section-title">About the Project</h3>
        <p className="project-modal-copy">{project.about}</p>
      </section>

      <section>
        <h3 className="project-modal-section-title">User Flow</h3>
        <div className="project-pages-list">
          {project.pages.map((page, index) => (
            <div key={page.name} className="project-page-item">
              <div className="project-page-index">{String(index + 1).padStart(2, '0')}</div>
              <div className={`project-page-name ${page.tone}`}>{page.name}</div>
              <div className="project-page-path">{page.path}</div>
              <div className="project-page-desc">{page.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="project-modal-section-title">Key Features</h3>
        <div className="project-feature-grid">
          {project.features.map((feature) => (
            <article key={feature.title} className="project-feature-card">
              <div className="project-feature-icon">{feature.icon}</div>
              <h4>{feature.title}</h4>
              <p>{feature.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="project-validation-panel">
        <h3 className="project-modal-section-title">Built-in Validations</h3>
        <div className="project-validation-grid">
          {project.validations.map((item) => (
            <div key={item} className="project-validation-item">
              <span className="project-validation-mark">+</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="project-modal-section-title">Tech Stack</h3>
        <div className="project-stack-list">
          {project.techStack.map((group) => (
            <div key={group.category} className="project-stack-row">
              <div className="project-stack-label">{group.category}</div>
              <div className="project-stack-items">
                {group.items.map((item) => (
                  <span key={item} className="project-stack-chip">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

function ProjectModal({ project, onClose }) {
  const kicker = project.detailType === 'flashsale'
    ? '// GO - REDIS - POSTGRESQL - HIGH CONCURRENCY'
    : project.detailType === 'banking'
    ? '// REACT - TAILWIND - CONTEXT API - MULTI-BANK'
    : '// AI - RAG - FINANCIAL RESEARCH AGENT'

  const subtitle = project.detailType === 'flashsale'
    ? 'High-concurrency race condition demo with 2000 users, 100 items, and 3 locking strategies.'
    : project.detailType === 'banking'
    ? 'Digital banking frontend with multi-account access, PIN security, live charts, and transaction management.'
    : 'AI-powered financial research assistant with RAG, LangGraph, and Gemini 2.5 Flash.'

  return (
    <div className="project-modal-backdrop" onClick={onClose}>
      <div className="project-modal" onClick={(event) => event.stopPropagation()}>
        <div className="project-modal-head">
          <div>
            <p className="project-modal-kicker">{kicker}</p>
            <h2>{project.title}</h2>
            <p className="project-modal-subtitle">{subtitle}</p>
            <div className="project-modal-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="project-modal-tag">{tag}</span>
              ))}
            </div>
          </div>
          <button className="project-modal-close" type="button" onClick={onClose}>x</button>
        </div>

        <div className="project-modal-body">
          {project.detailType === 'flashsale' ? (
            <FlashSaleDetails project={project} />
          ) : project.detailType === 'banking' ? (
            <BankingDetails project={project} />
          ) : (
            <MarketMindDetails project={project} />
          )}

          <div className="project-modal-actions">
            <a href={project.repoUrl} target="_blank" rel="noreferrer" className="mini-btn project-link-btn">
              View on GitHub
            </a>
            <button className="project-modal-back-btn" type="button" onClick={onClose}>
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section className="section-card" id="projects">
      <div className="section-head">
        <h2>Projects</h2>
        <p className="section-sub">Selected projects blending full-stack engineering, algorithms, and AI/ML.</p>
      </div>

      <div className="project-grid cards-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className={`project-card ${project.featured ? 'project-card-featured' : ''}`}
          >
            <div className={`project-thumb ${project.featured ? 'project-thumb-featured' : ''}`}>
              {project.imageSrc ? (
                <img
                  src={project.imageSrc}
                  alt={`${project.title} preview`}
                  className={`project-thumb-image ${project.featured ? 'project-thumb-image-featured' : ''}`}
                />
              ) : project.featured ? (
                <div className="project-thumb-featured-copy">
                  <div className="project-thumb-badge">PROJECT</div>
                  <div className="project-thumb-title">{project.title}</div>
                </div>
              ) : (
                'Add Interface Screenshot'
              )}
            </div>
            <h3>{project.title}</h3>
            <p className="sub">{project.subtitle}</p>
            <p className="project-desc">{project.description}</p>
            <div className="tag-row">
              {project.tags.map((tag) => (
                <span key={tag} className="project-tag">{tag}</span>
              ))}
            </div>
            <div className="project-actions">
              {project.featured ? (
                <button className="mini-btn project-action-btn" type="button" onClick={() => setSelectedProject(project)}>
                  More Details
                </button>
              ) : null}
              {project.repoUrl ? (
                <a
                  className="mini-btn project-link-btn project-action-btn"
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  View on GitHub
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>

      {selectedProject ? (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      ) : null}
    </section>
  )
}

export default Projects
