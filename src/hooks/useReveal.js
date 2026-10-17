import { useEffect } from 'react'

// fades stuff in when it scrolls into veiw:
export default function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    // watches each section and checks when it comes on screen:
    const io = new IntersectionObserver(
      (entries) => entries.forEach((en) => {
        // once its on screen show it and stop watching it:
        if (en.isIntersecting) {
          en.target.classList.add('show')
          io.unobserve(en.target)
        }
      }),
      { threshold: 0.12 }
    )
    // start watching everything and clean up when we leave:
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}
