import { useRef } from 'react'
import { profile } from '../data.js'
import Photo from './Photo.jsx'

const orbit = ['React', 'Node.js', 'AWS', 'Express', 'SQL', 'JS']

export default function Hero({ onContact }) {
  const stage = useRef(null)

  // the photo leans towards the mouse for the 3d look
  const onMove = (e) => {
    const el = stage.current
    if (!el) return
    const x = e.clientX / window.innerWidth - 0.5
    const y = e.clientY / window.innerHeight - 0.5
    el.style.transform = `rotateY(${x * 18}deg) rotateX(${-y * 18}deg)`
  }

  return (
    <section id="top" className="hero" onMouseMove={onMove}>
      <div className="hero-text reveal">
        <p className="eyebrow">Hey, I'm {profile.name}. <span className="wave">👋</span></p>
        <p className="role">{profile.role}</p>
        <h1>
          Turning ideas into fast, reliable web apps with <span className="grad">Full Stack Engineering</span>
        </h1>
        <p className="intro">{profile.intro}</p>
        <div className="hero-actions">
          <button className="btn btn-primary" onClick={onContact}>Get In Touch</button>
          <a href="#projects" className="btn btn-ghost">View Projects</a>
        </div>
      </div>

      <div className="hero-visual reveal">
        <div className="stage" ref={stage}>
          <div className="ring ring-1" />
          <div className="ring ring-2" />
          <div className="photo-wrap">
            <Photo className="hero-photo" />
          </div>
          {orbit.map((t, i) => (
            <span key={t} className="orbit-chip" style={{ '--i': i, '--n': orbit.length }}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
