import Heading from './Heading.jsx'
import TiltCard from './TiltCard.jsx'
import { certificates } from '../data.js'

export default function Certificates() {
  return (
    <section id="certificates" className="section">
      <Heading>Certificates earned <span className="grad">so far...</span></Heading>
      <div className="cert-grid">
        {certificates.map((c) => (
          <TiltCard key={c.name} className="cert-card reveal" max={6}>
            <div className="logo-badge">{c.logo}</div>
            <div>
              <h3>{c.name}</h3>
              <p className="accent small">{c.issuer} • Issued {c.date}</p>
              <p className="muted small">{c.skills}</p>
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  )
}
