import { useEffect, useState } from 'react'
import { profile } from '../data.js'
import { GithubIcon, LinkedinIcon, YoutubeIcon, MenuIcon, CloseIcon } from './Icons.jsx'

const links = ['Experience', 'Skills', 'Education', 'Projects', 'Certificates']

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { socials } = profile
  const cvUrl = profile.cv ? `${import.meta.env.BASE_URL}${profile.cv}` : '#contact'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-inner">
        <div className="nav-socials">
          <a href={socials.linkedin} target="_blank" rel="noreferrer" aria-label="linkedin"><LinkedinIcon /></a>
          <a href={socials.github} target="_blank" rel="noreferrer" aria-label="github"><GithubIcon /></a>
          {socials.youtube && <a href={socials.youtube} target="_blank" rel="noreferrer" aria-label="youtube"><YoutubeIcon /></a>}
        </div>
        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}>{l}</a>
          ))}
          <a className="btn btn-glow" href={cvUrl} target={profile.cv ? '_blank' : undefined} rel="noreferrer" onClick={() => setOpen(false)}>
            Resume
          </a>
        </nav>
        <button className="menu-btn" aria-label="toggle menu" onClick={() => setOpen(!open)}>
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </header>
  )
}
