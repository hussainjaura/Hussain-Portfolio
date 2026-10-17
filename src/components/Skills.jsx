// the bits this section needs:
import Heading from './Heading.jsx'
import TiltCard from './TiltCard.jsx'
import { skills } from '../data.js'

// skills section with numberd cards:
export default function Skills() {
  return (
    <section id="skills" className="section">
      <Heading>Things I'm <span className="grad">great at...</span></Heading>
      <div className="skills-grid">
        {/* big number, title then all the skills as little tags: */}
        {skills.map((s, i) => (
          <TiltCard key={s.title} className="skill-card reveal">
            <span className="big-num">0{i + 1}</span>
            <h3>{s.title}</h3>
            <ul className="tags">
              {s.items.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </TiltCard>
        ))}
      </div>
    </section>
  )
}
