import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/theme.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './components/About'
import Projects from './components/Projects'
import Certifications from './pages/Certifications'
import Practicum from './components/Practicum'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <div className="bg-white min-h-screen">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/practicum" element={<Practicum />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App