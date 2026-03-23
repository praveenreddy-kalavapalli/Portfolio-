import { useState } from 'react'
import { achievements } from '../data/achievements'

function isDirectImageUrl(url) {
  if (!url) return false

  return /\.(png|jpe?g|webp|gif|svg)(\?.*)?$/i.test(url) || url.includes('postimg.cc')
}

function Achievements() {
  const hasAchievements = achievements.length > 0
  const [activeAchievement, setActiveAchievement] = useState(null)

  return (
    <section className="section-card" id="achievements">
      <div className="section-head">
        <p>Highlights</p>
        <h2>Achievements</h2>
        <p className="section-sub">A dedicated space for awards, recognitions, ranks, and milestone wins.</p>
      </div>

      {hasAchievements ? (
        <div className="achievement-grid">
          {achievements.map((item, index) => {
            const source = item.image || item.imageUrl || item.proofImage || ''
            const hasImagePreview = isDirectImageUrl(source)

            return (
            <article key={item.title || item || index} className="achievement-card">
              <div className="achievement-head">
                <div>
                  <p className="achievement-kicker">{item.platform || 'Achievement'}</p>
                  <h3 className="achievement-title">{item.title || item}</h3>
                  {item.handle ? <p className="achievement-handle">{item.handle}</p> : null}
                </div>
                <div className="achievement-badge" aria-hidden="true">{item.badge || 'SQL'}</div>
              </div>

              {item.tagline ? <p className="achievement-copy">{item.tagline}</p> : null}

              {item.highlights?.length ? (
                <ul className="achievement-list">
                  {item.highlights.map((point, pointIndex) => (
                    <li key={point} className="achievement-list-item">
                      <span className="achievement-list-index">0{pointIndex + 1}</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              ) : null}

              {item.link ? (
                <a className="mini-btn achievement-btn" href={item.link} target="_blank" rel="noreferrer">
                  View Full Profile
                </a>
              ) : null}

              {source ? (
                <button
                  className="mini-btn achievement-btn achievement-btn-secondary"
                  type="button"
                  onClick={() => setActiveAchievement({ ...item, source, hasImagePreview })}
                >
                  View
                </button>
              ) : null}
            </article>
            )
          })}
        </div>
      ) : (
        <div className="empty-panel">
          <h3>Achievements details will go here</h3>
          <p>Add your achievements later and this section will update without changing the page structure.</p>
        </div>
      )}

      {activeAchievement ? (
        <div className="cert-modal-backdrop" onClick={() => setActiveAchievement(null)} role="presentation">
          <div className="cert-modal" onClick={(event) => event.stopPropagation()} role="dialog" aria-modal="true" aria-label={activeAchievement.title}>
            <button className="cert-modal-close" type="button" onClick={() => setActiveAchievement(null)}>
              Close
            </button>
            <div className="cert-modal-body">
              {activeAchievement.hasImagePreview ? (
                <img
                  src={activeAchievement.source}
                  alt={`${activeAchievement.title} proof`}
                  className="cert-modal-image"
                />
              ) : (
                <div className="cert-modal-fallback">
                  <p>Preview is not available for this achievement link.</p>
                  <a className="mini-btn" href={activeAchievement.source} target="_blank" rel="noreferrer">
                    Open Image Link
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  )
}

export default Achievements
