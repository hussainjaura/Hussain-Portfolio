import Heading from './Heading.jsx'
import TiltCard from './TiltCard.jsx'
import Logo from './Logo.jsx'
import { education } from '../data.js'

export default function Education() {
  return (
    <section id="education" className="section">
      <Heading>Highlights of my <span className="grad">Education...</span></Heading>
      <div className="edu-grid">
        {education.map((e) => (
          <TiltCard key={e.school} className="edu-card reveal" max={6}>
            <Logo item={e} big />
            <div>
              <h3>{e.degree}</h3>
              <p className="accent">{e.school}</p>
              <p className="muted small">{e.period} • {e.location}</p>
              <p className="edu-note">{e.note}</p>
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  )
}
