import { useState } from 'react'
import { trainingItems } from '../data/training'

function isDirectImageUrl(url) {
  if (!url) return false

  return /\.(png|jpe?g|webp|gif|svg)(\?.*)?$/i.test(url) || url.includes('postimg.cc')
}

function Training() {
  const hasItems = trainingItems.length > 0
  const [activeCertificate, setActiveCertificate] = useState(null)

  return (
    <section className="section-card" id="training">
      <div className="section-head">
        <p>Learning Journey</p>
        <h2>Training</h2>
        {/* <p className="section-sub">This section is ready for your training programs, workshops, internships, or bootcamps.</p> */}
      </div>

      {hasItems ? (
        <div className="info-grid">
          {trainingItems.map((item, index) => {
            const source = item.certificateUrl || item.image || ''
            const hasImagePreview = isDirectImageUrl(source)

            return (
              <article key={item.title || item.organization || index} className="info-card">
              <p className="info-card-kicker">{item.type || 'Training'}</p>
              <h3>{item.title}</h3>
              <p className="sub">{item.organization || item.provider}</p>
              {item.duration ? <p className="info-card-meta">{item.duration}</p> : null}
              {(item.issueDate || item.certificateNo) ? (
                <div className="info-card-cert-meta">
                  {item.issueDate ? <p><strong>Issued:</strong> {item.issueDate}</p> : null}
                  {item.certificateNo ? <p><strong>Certificate No:</strong> {item.certificateNo}</p> : null}
                </div>
              ) : null}
              {item.description ? <p className="info-card-copy">{item.description}</p> : null}
              {item.learnings?.length ? (
                <ul className="info-card-list">
                  {item.learnings.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              ) : null}
              {source ? (
                <button
                  className="mini-btn info-card-btn"
                  type="button"
                  onClick={() => setActiveCertificate({ ...item, source, hasImagePreview })}
                >
                  View Certificate
                </button>
              ) : null}
            </article>
            )
          })}
        </div>
      ) : (
        <div className="empty-panel">
          <h3>Training details will go here</h3>
          <p>Add your training data later and this section will populate automatically.</p>
        </div>
      )}

      {activeCertificate ? (
        <div className="cert-modal-backdrop" onClick={() => setActiveCertificate(null)} role="presentation">
          <div className="cert-modal" onClick={(event) => event.stopPropagation()} role="dialog" aria-modal="true" aria-label={activeCertificate.title}>
            <button className="cert-modal-close" type="button" onClick={() => setActiveCertificate(null)}>
              Close
            </button>
            <div className="cert-modal-body">
              {activeCertificate.hasImagePreview ? (
                <img
                  src={activeCertificate.source}
                  alt={`${activeCertificate.title} full certificate`}
                  className="cert-modal-image"
                />
              ) : (
                <div className="cert-modal-fallback">
                  <p>Preview is not available for this certificate link.</p>
                  <a className="mini-btn" href={activeCertificate.source} target="_blank" rel="noreferrer">
                    Open Certificate Link
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

export default Training
