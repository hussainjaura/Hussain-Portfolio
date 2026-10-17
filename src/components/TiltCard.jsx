import useTilt from '../hooks/useTilt.js'

export default function TiltCard({ className = '', children, max }) {
  const tilt = useTilt(max)
  return (
    <div className={`tilt glass ${className}`} {...tilt}>
      <div className="shine" />
      {children}
    </div>
  )
}
