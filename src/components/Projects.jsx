import Heading from './Heading.jsx'
import TiltCard from './TiltCard.jsx'
import { projects, profile } from '../data.js'
import { GithubIcon, ExternalIcon } from './Icons.jsx'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <Heading>Some of my notable <span className="grad">Projects...</span></Heading>
      <div className="proj-grid">
        {projects.map((p) => (
          <TiltCard key={p.name} className="proj-card reveal" max={7}>
            <p className="proj-tag">{p.tag}</p>
            <h3>{p.name}</h3>
            <ul className="tags small-tags">
              {p.tech.map((t) => <li key={t}>{t}</li>)}
            </ul>
            <ul className="dot-list">
              {p.points.map((pt) => <li key={pt}>{pt}</li>)}
            </ul>
            <div className="proj-links">
              {p.repo && <a href={p.repo} target="_blank" rel="noreferrer"><GithubIcon /> Code</a>}
              {p.live && <a href={p.live} target="_blank" rel="noreferrer"><ExternalIcon /> Live demo</a>}
            </div>
          </TiltCard>
        ))}
      </div>
      <div className="center reveal">
        <a className="btn btn-ghost" href={profile.socials.github} target="_blank" rel="noreferrer">See everything on GitHub</a>
      </div>
    </section>
  )
}
