// Entrada de elementos: fade + slide para cima
export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

// Efeito stagger: cada filho entra com um pequeno atraso
export const stagger = (intervalo = 0.15) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: intervalo, delayChildren: 0.1 },
  },
})