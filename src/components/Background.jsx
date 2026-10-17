import { useEffect, useRef } from 'react'

// floating dots that join up with lines, they drift away from the mouse a bit:
export default function Background() {
  const canvas = useRef(null)

  useEffect(() => {
    // grab the canvas and set up the mouse and dots:
    const c = canvas.current
    const ctx = c.getContext('2d')
    const mouse = { x: -999, y: -999 }
    let dots = []
    let raf

    // make the canvas full screen and make some random dots:
    const resize = () => {
      c.width = window.innerWidth
      c.height = window.innerHeight
      const count = Math.min(90, Math.floor((c.width * c.height) / 16000))
      dots = Array.from({ length: count }, () => ({
        // random position, speed and size for each dot:
        x: Math.random() * c.width,
        y: Math.random() * c.height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 0.6,
      }))
    }

    // clear the screen then move every dot a little bit:
    const draw = () => {
      ctx.clearRect(0, 0, c.width, c.height)
      for (const d of dots) {
        d.x += d.vx
        d.y += d.vy
        // bounce off the edges of the screen:
        if (d.x < 0 || d.x > c.width) d.vx *= -1
        if (d.y < 0 || d.y > c.height) d.vy *= -1
        // push the dot away if the mouse is close:
        const dx = d.x - mouse.x
        const dy = d.y - mouse.y
        const dist = Math.hypot(dx, dy)
        if (dist < 120) {
          d.x += dx / dist
          d.y += dy / dist
        }
        // draw the dot itself:
        ctx.beginPath()
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(167, 139, 250, 0.7)'
        ctx.fill()
      }
      // draw lines between dots that are close to each other:
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const a = dots[i]
          const b = dots[j]
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < 130) {
            // closer dots get a stronger line:
            ctx.strokeStyle = `rgba(129, 140, 248, ${0.18 * (1 - d / 130)})`
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }
      // keep drawing every frame:
      raf = requestAnimationFrame(draw)
    }

    // save where the mouse is:
    const onMove = (e) => { mouse.x = e.clientX; mouse.y = e.clientY }
    resize()
    draw()
    // listen for resize and mouse moves, remove them when done:
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMove)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <div className="bg" aria-hidden="true">
      {/* the canvas with the dots plus the blurry colour blobs behind: */}
      <canvas ref={canvas} />
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />
      <div className="grid-overlay" />
    </div>
  )
}
