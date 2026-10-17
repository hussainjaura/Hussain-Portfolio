import useTilt from '../hooks/useTilt.js'

// card that tilts when u hover it, used all over the site:
export default function TiltCard({ className = '', children, max }) {
  const tilt = useTilt(max)
  return (
    <div className={`tilt glass ${className}`} {...tilt}>
      {/* the shine that follows the mouse: */}
      <div className="shine" />
      {children}
    </div>
  )
}
