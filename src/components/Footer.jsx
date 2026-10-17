// my info and the icons:
import { profile } from '../data.js'
import { GithubIcon, LinkedinIcon, YoutubeIcon, MailIcon, FileIcon } from './Icons.jsx'

export default function Footer({ onContact }) {
  // cv link only works once i add the pdf:
  const { socials } = profile
  const cvUrl = profile.cv ? `${import.meta.env.BASE_URL}${profile.cv}` : ''

  return (
    <footer id="contact" className="footer">
      {/* the big lets build something box: */}
      <div className="cta glass reveal">
        <h2>Let's build something <span className="grad">together</span></h2>
        <p className="muted">I'm open to full stack engineering roles. My inbox is always open, so feel free to reach out.</p>
        <div className="hero-actions center-row">
          <button className="btn btn-primary" onClick={onContact}><MailIcon /> Get In Touch</button>
          {/* show download cv if there is one, otherwise coming soon: */}
          {cvUrl
            ? <a className="btn btn-ghost" href={cvUrl} target="_blank" rel="noreferrer"><FileIcon /> Download CV</a>
            : <span className="btn btn-ghost disabled"><FileIcon /> CV coming soon</span>}
        </div>
      </div>
      {/* socials and copyright at the very bottom: */}
      <div className="footer-bottom">
        <div className="nav-socials">
          <a href={socials.linkedin} target="_blank" rel="noreferrer" aria-label="linkedin"><LinkedinIcon /></a>
          <a href={socials.github} target="_blank" rel="noreferrer" aria-label="github"><GithubIcon /></a>
          {socials.youtube && <a href={socials.youtube} target="_blank" rel="noreferrer" aria-label="youtube"><YoutubeIcon /></a>}
          <a href={`mailto:${profile.email}`} aria-label="email"><MailIcon /></a>
        </div>
        <p className="muted small">© Copyright {new Date().getFullYear()} | Created by {profile.fullName}</p>
      </div>
    </footer>
  )
}
