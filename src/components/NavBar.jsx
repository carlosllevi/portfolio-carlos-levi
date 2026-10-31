import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const links = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre Mim', href: '#sobre-mim' },
  { label: 'Conhecimentos', href: '#conhecimentos' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Contato', href: '#contato' },
]

export default function Navbar() {
  const [rolou, setRolou] = useState(false)

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 50)
    aoRolar()
    window.addEventListener('scroll', aoRolar)
    return () => window.removeEventListener('scroll', aoRolar)
  }, [])

  return (
    <motion.nav
      className={`navbar ${rolou ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="navbar-inner">
        <span className="brand">Portfólio Carlos Levi</span>
        <ul>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  )
}