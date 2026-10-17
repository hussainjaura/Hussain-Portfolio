import { useRef } from 'react'

// tilts the card in 3d towards the mouse
export default function useTilt(max = 10) {
  const ref = useRef(null)

  const onMouseMove = (e) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    el.style.transform = `perspective(900px) rotateX(${-y * max}deg) rotateY(${x * max}deg) translateY(-4px)`
    el.style.setProperty('--mx', `${(x + 0.5) * 100}%`)
    el.style.setProperty('--my', `${(y + 0.5) * 100}%`)
  }
  const onMouseLeave = () => {
    if (ref.current) ref.current.style.transform = ''
  }

  return { ref, onMouseMove, onMouseLeave }
}
