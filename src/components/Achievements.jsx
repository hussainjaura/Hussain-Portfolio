import Heading from './Heading.jsx'
import TiltCard from './TiltCard.jsx'
import Logo from './Logo.jsx'
import { achievements } from '../data.js'

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <Heading>Some of my <span className="grad">Achievements...</span></Heading>
      <div className="ach-grid">
        {achievements.map((a) => (
          <TiltCard key={a.title} className="ach-card reveal">
            <Logo item={a} big />
            <h3>{a.title}</h3>
            <p className="muted">{a.desc}</p>
          </TiltCard>
        ))}
      </div>
    </section>
  )
}
