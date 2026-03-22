import { achievements } from '../data/achievements'

function Achievements() {
  const hasAchievements = achievements.length > 0

  return (
    <section className="section-card" id="achievements">
      <div className="section-head">
        <p>Highlights</p>
        <h2>Achievements</h2>
        <p className="section-sub">A dedicated space for awards, recognitions, ranks, and milestone wins.</p>
      </div>

      {hasAchievements ? (
        <ul className="plain-list">
          {achievements.map((item, index) => <li key={item.title || item || index}>{item.title || item}</li>)}
        </ul>
      ) : (
        <div className="empty-panel">
          <h3>Achievements details will go here</h3>
          <p>Add your achievements later and this section will update without changing the page structure.</p>
        </div>
      )}
    </section>
  )
}

export default Achievements
