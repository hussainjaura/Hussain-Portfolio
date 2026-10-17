import { useEffect, useState } from 'react'
import { profile } from '../data.js'
import { GithubIcon, LinkedinIcon, YoutubeIcon, MailIcon, CloseIcon, ExternalIcon } from './Icons.jsx'

export default function ContactModal({ open, onClose }) {
  const [copied, setCopied] = useState(false)
  const [name, setName] = useState('')
  const [msg, setMsg] = useState('')
  const { socials, email } = profile

  // close on esc and stop the page scrolling behind
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email)
    } catch {
      window.prompt('Copy my email:', email)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // no backend so this just opens their mail app with it filled in
  const send = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Hello from ${name || 'your portfolio'}`)
    const body = encodeURIComponent(msg)
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
  }

  const links = [
    { label: 'LinkedIn', sub: 'Connect with me', href: socials.linkedin, icon: <LinkedinIcon /> },
    { label: 'GitHub', sub: '@hussainjaura', href: socials.github, icon: <GithubIcon /> },
    socials.youtube && { label: 'YouTube', sub: 'Watch my videos', href: socials.youtube, icon: <YoutubeIcon /> },
  ].filter(Boolean)

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal glass" role="dialog" aria-modal="true" aria-label="contact me" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="close"><CloseIcon /></button>

        <div className="modal-head">
          <span className="status-dot" /> <span className="muted small">Open to full stack roles · replies within a day</span>
          <h2>Let's <span className="grad">talk</span></h2>
        </div>

        <div className="email-box">
          <MailIcon />
          <span className="email-text">{email}</span>
          <button className={`copy-btn ${copied ? 'done' : ''}`} onClick={copy}>{copied ? 'Copied ✓' : 'Copy'}</button>
        </div>

        <div className="modal-links">
          {links.map((l) => (
            <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="modal-link">
              <span className="modal-link-icon">{l.icon}</span>
              <span>
                <strong>{l.label}</strong>
                <small className="muted">{l.sub}</small>
              </span>
              <ExternalIcon className="modal-link-arrow" />
            </a>
          ))}
        </div>

        <div className="divider"><span>or send a quick message</span></div>

        <form className="quick-form" onSubmit={send}>
          <input placeholder="Your name / company" value={name} onChange={(e) => setName(e.target.value)} />
          <textarea placeholder="Hi Hussain, we'd love to chat about..." rows={3} value={msg} onChange={(e) => setMsg(e.target.value)} required />
          <button className="btn btn-primary" type="submit"><MailIcon /> Send message</button>
        </form>
      </div>
    </div>
  )
}
