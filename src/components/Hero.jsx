import { motion } from 'framer-motion'
import { informacoesPessoais as info } from '../data/dados'
import { fadeUp, stagger } from '../animations'

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <motion.div
        className="hero-foto-wrapper"
        initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.img
          src={info.foto}
          alt={`Foto de ${info.nome}`}
          className="hero-foto"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      <motion.div
        className="hero-texto"
        variants={stagger(0.15)}
        initial="hidden"
        animate="visible"
      >
        <motion.p className="hero-saudacao" variants={fadeUp}>
          Olá, eu sou
        </motion.p>
        <motion.h1 variants={fadeUp}>{info.nome}</motion.h1>
        <motion.p className="hero-cargo" variants={fadeUp}>
          {info.cargo}
        </motion.p>
        <motion.a
          href="#contato"
          className="hero-botao"
          variants={fadeUp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Fale comigo
        </motion.a>
      </motion.div>
    </section>
  )
}