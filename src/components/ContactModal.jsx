// react hooks, my info and the icons:
import { useEffect, useState } from 'react'
import { profile } from '../data.js'
import { GithubIcon, LinkedinIcon, YoutubeIcon, MailIcon, CloseIcon, ExternalIcon } from './Icons.jsx'

export default function ContactModal({ open, onClose }) {
  // state for the copy button and the message form:
  const [copied, setCopied] = useState(false)
  const [name, setName] = useState('')
  const [from, setFrom] = useState('')
  const [msg, setMsg] = useState('')
  const [status, setStatus] = useState('idle')
  const { socials, email } = profile

  // close on esc and stop the page scrolling behind:
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

  // copys my email, shows copied for 2 seconds:
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email)
    } catch {
      window.prompt('Copy my email:', email)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // no backend so formsubmit emails it to me:
  const send = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      // send the name, email and message as json:
      const res = await fetch(`https://formsubmit.co/ajax/${email}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name, email: from, message: msg, _subject: `Portfolio message from ${name || 'someone'}`, _template: 'table' }),
      })
      // if it worked clear the boxes and show message sent:
      if (!res.ok) throw new Error('send failed')
      setName('')
      setFrom('')
      setMsg('')
      setStatus('sent')
    } catch {
      setStatus('error')
    }
    // put the button back to normal after 4 seconds:
    setTimeout(() => setStatus('idle'), 4000)
  }

  // text on the send button changes depending what happend:
  const label = { idle: 'Send message', sending: 'Sending...', sent: 'Message sent ✓', error: "Couldn't send, try email above" }[status]

  // my social links, youtube only shows if i add the link:
  const links = [
    { label: 'LinkedIn', sub: 'Connect with me', href: socials.linkedin, icon: <LinkedinIcon /> },
    { label: 'GitHub', sub: '@hussainjaura', href: socials.github, icon: <GithubIcon /> },
    socials.youtube && { label: 'YouTube', sub: 'Watch my videos', href: socials.youtube, icon: <YoutubeIcon /> },
  ].filter(Boolean)

  return (
    // dark background, clicking it closes the popup:
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal glass" role="dialog" aria-modal="true" aria-label="contact me" onClick={(e) => e.stopPropagation()}>
        {/* the x button and the top bit with the green dot: */}
        <button className="modal-close" onClick={onClose} aria-label="close"><CloseIcon /></button>

        <div className="modal-head">
          <span className="status-dot" /> <span className="muted small">Open to full stack roles · replies within a day</span>
          <h2>Let's <span className="grad">talk</span></h2>
        </div>

        {/* my email with a copy button: */}
        <div className="email-box">
          <MailIcon />
          <span className="email-text">{email}</span>
          <button className={`copy-btn ${copied ? 'done' : ''}`} onClick={copy}>{copied ? 'Copied ✓' : 'Copy'}</button>
        </div>

        {/* linkedin and github cards: */}
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

        {/* the little form so people can message me: */}
        <div className="divider"><span>or send a quick message</span></div>

        <form className="quick-form" onSubmit={send}>
          <input placeholder="Your name / company" value={name} onChange={(e) => setName(e.target.value)} required />
          <input type="email" placeholder="Your email" value={from} onChange={(e) => setFrom(e.target.value)} required />
          <textarea placeholder="Hi Hussain, we'd love to chat about..." rows={3} value={msg} onChange={(e) => setMsg(e.target.value)} required />
          {/* send button, cant click it again while its sending: */}
          <button className={`btn btn-primary send-btn ${status}`} type="submit" disabled={status === 'sending'}>
            {status === 'idle' && <MailIcon />} {label}
          </button>
        </form>
      </div>
    </div>
  )
}
