import { useState } from 'react'
import { profile } from '../data.js'

// shows my photo, falls back to my initials if the file isnt there yet
export default function Photo({ className = '', alt }) {
  const [broken, setBroken] = useState(false)
  if (broken) return <div className={`photo-fallback ${className}`}><span>HJ</span></div>
  return (
    <img
      className={className}
      src={`${import.meta.env.BASE_URL}${profile.photo}`}
      alt={alt || profile.fullName}
      onError={() => setBroken(true)}
    />
  )
}
