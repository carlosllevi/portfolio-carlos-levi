import Navbar from './components/NavBar'
import ScrollProgress from './components/ScrollProgress'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Conhecimentos from './components/Conhecimentos'
import Projetos from './components/Projetos'
import Contato from './components/Contato'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Conhecimentos />
        <Projetos />
        <Contato />
      </main>
      <Footer />
    </>
  )
}

export default App