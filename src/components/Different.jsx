import Heading from './Heading.jsx'
import Photo from './Photo.jsx'
import { different } from '../data.js'

export default function Different() {
  return (
    <section id="about" className="section">
      <Heading>What makes me <span className="grad">different?</span></Heading>
      <div className="diff">
        <div className="diff-text reveal">
          {different.map((p, i) => <p key={i}>{p}</p>)}
        </div>
        <div className="diff-visual reveal">
          <div className="code-window glass">
            <div className="code-bar"><i /><i /><i /> <span>hussain.js</span></div>
            <pre>
{`const hussain = {
  role: 'full stack engineer',
  stack: ['react', 'node', 'express', 'aws'],
  loves: 'shipping real stuff',
  openToWork: true,
}`}
            </pre>
          </div>
          <Photo className="diff-photo" />
        </div>
      </div>
    </section>
  )
}
