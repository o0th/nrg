import Nav from '../components/nav'
import Hero from '../components/hero'
import About from '../components/about'
import Footer from '../components/footer'

const navHeight = `16`

export default function index() {
  return (
    <main>
      <Hero navHeight={navHeight} />
      <Nav navHeight={navHeight} />
      <About />
      <Footer />
    </main>
  )
}
