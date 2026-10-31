import { motion } from 'framer-motion'
import Reveal from './Reveal'
import ProjectCard from './ProjectCard'
import { projetos } from '../data/dados'
import { fadeUp, stagger } from '../animations'

export default function Projetos() {
  return (
    <section id="projetos">
      <Reveal>
        <h2>Projetos</h2>
      </Reveal>

      <motion.div
        className="projects-grid"
        variants={stagger(0.2)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projetos.map((projeto) => (
          <ProjectCard key={projeto.titulo} projeto={projeto} variants={fadeUp} />
        ))}
      </motion.div>
    </section>
  )
}