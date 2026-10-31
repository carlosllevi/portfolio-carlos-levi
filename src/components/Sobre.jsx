import Reveal from './Reveal'
import { sobreMim } from '../data/dados'

export default function Sobre() {
  return (
    <section id="sobre-mim" className="sobre">
      <Reveal>
        <h2>Sobre Mim</h2>
      </Reveal>

      {sobreMim.map((texto, i) => (
        <Reveal
          key={i}
          direction={i % 2 === 0 ? 'left' : 'right'}
          delay={i * 0.1}
        >
          <p>{texto}</p>
        </Reveal>
      ))}
    </section>
  )
}