import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { conhecimentos } from '../data/dados'
import { fadeUp, stagger } from '../animations'

export default function Conhecimentos() {
  return (
    <section id="conhecimentos">
      <Reveal>
        <h2>Conhecimentos</h2>
      </Reveal>

      <motion.ul
        className="skills-grid"
        variants={stagger(0.08)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {conhecimentos.map((c) => (
          <motion.li
            key={c.nome}
            variants={fadeUp}
            whileHover={{ y: -6, scale: 1.05 }}
          >
            <i className={c.icone}></i>
            <span>{c.nome}</span>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  )
}