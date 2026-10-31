import Reveal from './Reveal'
import { informacoesPessoais as info } from '../data/dados'

export default function Contato() {
  return (
    <section id="contato" className="contato">
      <Reveal>
        <h2>Contato</h2>
      </Reveal>

      <Reveal delay={0.2}>
        <p>Vamos conversar?</p>
      </Reveal>

      <Reveal delay={0.4}>
        <div className="contato-links">
          <a href={`mailto:${info.email}`}>{info.email}</a>
          <a href={info.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={info.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </Reveal>
    </section>
  )
}