import Heading from './Heading.jsx'
import TiltCard from './TiltCard.jsx'
import Logo from './Logo.jsx'
import { experience } from '../data.js'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <Heading>Highlights of my <span className="grad">Experience</span> so far...</Heading>
      <div className="timeline">
        {experience.map((job) => (
          <div key={job.company + job.role} className="timeline-row reveal">
            <span className="timeline-dot" />
            <TiltCard className="xp-card" max={5}>
              <div className="xp-head">
                <Logo item={job} />
                <div>
                  <h3>{job.role}</h3>
                  <p className="muted">{job.company} • {job.location}</p>
                </div>
                <span className="pill">{job.period}</span>
              </div>
              {job.summary && <p className="xp-summary">{job.summary}</p>}
              <ul className="dot-list">
                {job.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
              {job.tags && (
                <ul className="tags small-tags">
                  {job.tags.map((t) => <li key={t}>{t}</li>)}
                </ul>
              )}
            </TiltCard>
          </div>
        ))}
      </div>
    </section>
  )
}
