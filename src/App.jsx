import { useState } from 'react'
import Background from './components/Background.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Experience from './components/Experience.jsx'
import Skills from './components/Skills.jsx'
import Education from './components/Education.jsx'
import Different from './components/Different.jsx'
import Achievements from './components/Achievements.jsx'
import Projects from './components/Projects.jsx'
import Certificates from './components/Certificates.jsx'
import Footer from './components/Footer.jsx'
import ContactModal from './components/ContactModal.jsx'
import useReveal from './hooks/useReveal.js'

function App() {
  const [contactOpen, setContactOpen] = useState(false)
  const openContact = () => setContactOpen(true)
  useReveal()

  return (
    <>
      <Background />
      <Nav />
      <main>
        <Hero onContact={openContact} />
        <Experience />
        <Skills />
        <Education />
        <Different />
        <Achievements />
        <Projects />
        <Certificates />
      </main>
      <Footer onContact={openContact} />
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  )
}

export default App
