import { trainingItems } from '../data/training'

function Training() {
  const hasItems = trainingItems.length > 0

  return (
    <section className="section-card" id="training">
      <div className="section-head">
        <p>Learning Journey</p>
        <h2>Training</h2>
        <p className="section-sub">This section is ready for your training programs, workshops, internships, or bootcamps.</p>
      </div>

      {hasItems ? (
        <div className="info-grid">
          {trainingItems.map((item, index) => (
            <article key={item.title || item.organization || index} className="info-card">
              <p className="info-card-kicker">{item.type || 'Training'}</p>
              <h3>{item.title}</h3>
              <p className="sub">{item.organization || item.provider}</p>
              {item.duration ? <p className="info-card-meta">{item.duration}</p> : null}
              {item.description ? <p className="info-card-copy">{item.description}</p> : null}
            </article>
          ))}
        </div>
      ) : (
        <div className="empty-panel">
          <h3>Training details will go here</h3>
          <p>Add your training data later and this section will populate automatically.</p>
        </div>
      )}
    </section>
  )
}

export default Training
