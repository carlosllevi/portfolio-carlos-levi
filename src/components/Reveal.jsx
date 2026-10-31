import { motion } from 'framer-motion'

const deslocamentos = {
  up: { y: 60 },
  down: { y: -60 },
  left: { x: -60 },
  right: { x: 60 },
}

export default function Reveal({ children, direction = 'up', delay = 0, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...deslocamentos[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}