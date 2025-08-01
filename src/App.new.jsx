import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './styles/theme.css'

function App() {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()
        document.querySelector(this.getAttribute('href'))?.scrollIntoView({
          behavior: 'smooth'
        })
      })
    })
  }, [])

  return (
    <div className="bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="bg-slate-900 text-white py-8">
        <div className="container-wide text-center">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} Vincent PH. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
