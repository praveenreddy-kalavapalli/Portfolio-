import { useState } from 'react'
import { certificates } from '../data/certificates'

function isDirectImageUrl(url) {
  if (!url) return false

  return /\.(png|jpe?g|webp|gif|svg)(\?.*)?$/i.test(url) || url.includes('postimg.cc')
}

function Certificates() {
  const [activeCertificate, setActiveCertificate] = useState(null)

  return (
    <section className="section-card" id="certificates">
      <div className="section-head">
        <h2>Certificates</h2>
      </div>

      <div className="cert-grid">
        {certificates.map((item) => {
          const source = item.image || item.Image || item.imageUrl || item.certificateUrl || item.link || ''
          const hasImagePreview = isDirectImageUrl(source)

          return (
            <article key={item.title} className="cert-card cert-card-clean">
              <div className="cert-thumb cert-thumb-clean">
                {hasImagePreview ? (
                  <img
                    src={source}
                    alt={`${item.title} certificate preview`}
                    className="cert-thumb-image"
                    loading="lazy"
                  />
                ) : (
                  <div className="cert-thumb-fallback">
                    <span>Certificate Link Added</span>
                  </div>
                )}
              </div>
              <h3>{item.title}</h3>
              <p className="sub">{item.issuer}</p>
              {source ? (
                <button className="mini-btn" type="button" onClick={() => setActiveCertificate({ ...item, source, hasImagePreview })}>
                  View Certificate
                </button>
              ) : (
                <button className="mini-btn" type="button">Add Certificate Link</button>
              )}
            </article>
          )
        })}
      </div>

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

export default Certificates
