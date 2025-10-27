import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Equipment from './components/Equipment'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="site">
      <Header />
      <Hero />
      <main className="max-w-7xl mx-auto px-4">
        <Services />
        <Equipment />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App


