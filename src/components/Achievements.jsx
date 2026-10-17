import Heading from './Heading.jsx'
import TiltCard from './TiltCard.jsx'
import { achievements } from '../data.js'

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <Heading>Some of my <span className="grad">Achievements...</span></Heading>
      <div className="ach-grid">
        {achievements.map((a) => (
          <TiltCard key={a.title} className="ach-card reveal">
            <span className="ach-icon">{a.icon}</span>
            <h3>{a.title}</h3>
            <p className="muted">{a.desc}</p>
          </TiltCard>
        ))}
      </div>
    </section>
  )
}
