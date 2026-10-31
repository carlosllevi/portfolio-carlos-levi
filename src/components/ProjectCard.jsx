import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export default function ProjectCard({ projeto, variants }) {
  const ref = useRef(null)

  // Posição do mouse dentro do card (valores de -0.5 a 0.5)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const xSuave = useSpring(x, { stiffness: 150, damping: 15 })
  const ySuave = useSpring(y, { stiffness: 150, damping: 15 })

  const rotateX = useTransform(ySuave, [-0.5, 0.5], ['8deg', '-8deg'])
  const rotateY = useTransform(xSuave, [-0.5, 0.5], ['-8deg', '8deg'])

  const aoMover = (e) => {
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const aoSair = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.article
      ref={ref}
      className="project-card"
      variants={variants}
      onMouseMove={aoMover}
      onMouseLeave={aoSair}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
    >
      <img src={projeto.imagem} alt={projeto.alt} />
      <h3>{projeto.titulo}</h3>
      <p>{projeto.descricao}</p>
      <div className="tags">
        {projeto.tecnologias.map((tec) => (
          <span key={tec}>{tec}</span>
        ))}
      </div>
    </motion.article>
  )
}