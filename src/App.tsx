import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Equipment from './components/Equipment'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function HomePage() {
  return (
    <>
      <Hero />
      <main className="max-w-7xl mx-auto px-4">
        <Services />
        <Equipment />
        <About />
        <Contact />
      </main>
    </>
  )
}

function App() {
  return (
    <div className="site">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/equipment" element={<Equipment />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App


