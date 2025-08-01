import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  // For scrollspy on homepage
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    if (location.pathname === '/') {
      const handleScroll = () => {
        const sections = ['home', 'about', 'projects', 'certifications', 'practicum', 'contact']
        let found = 'home'
        for (const id of sections) {
          const el = document.getElementById(id)
          if (el) {
            const rect = el.getBoundingClientRect()
            if (rect.top <= 80 && rect.bottom > 80) {
              found = id
              break
            }
          }
        }
        setActiveSection(found)
      }
      window.addEventListener('scroll', handleScroll)
      handleScroll()
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [location.pathname])

  const isActive = (path, section) => {
    if (location.pathname === '/') {
      return activeSection === section ? 'text-primary font-semibold underline underline-offset-8' : ''
    }
    return location.pathname === path ? 'text-primary font-semibold underline underline-offset-8' : ''
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm z-50 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold font-display">
            Vincent PH
          </Link>

          <ul className="hidden md:flex items-center space-x-8">
            <li>
              <Link to="/" className={`hover:text-primary transition-colors ${isActive('/', 'home')}`}>Home</Link>
            </li>
            <li>
              <Link to="/about" className={`hover:text-primary transition-colors ${isActive('/about', 'about')}`}>About</Link>
            </li>
            <li>
              <Link to="/projects" className={`hover:text-primary transition-colors ${isActive('/projects', 'projects')}`}>Projects</Link>
            </li>
            <li>
              <Link to="/certifications" className={`hover:text-primary transition-colors ${isActive('/certifications', 'certifications')}`}>Certifications</Link>
            </li>
            <li>
              <Link to="/practicum" className={`hover:text-primary transition-colors ${isActive('/practicum', 'practicum')}`}>Practicum</Link>
            </li>
            <li>
              <Link to="/contact" className={`hover:text-primary transition-colors ${isActive('/contact', 'contact')}`}>Contact</Link>
            </li>
          </ul>

          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-x-0 top-16 bg-background border-b border-border transition-transform duration-200 ease-in-out ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="container mx-auto px-4 py-4 space-y-4">
          <Link to="/" className={`block hover:text-primary transition-colors ${isActive('/', 'home')}`} onClick={closeMenu}>Home</Link>
          <Link to="/about" className={`block hover:text-primary transition-colors ${isActive('/about', 'about')}`} onClick={closeMenu}>About</Link>
          <Link to="/projects" className={`block hover:text-primary transition-colors ${isActive('/projects', 'projects')}`} onClick={closeMenu}>Projects</Link>
          <Link to="/certifications" className={`block hover:text-primary transition-colors ${isActive('/certifications', 'certifications')}`} onClick={closeMenu}>Certifications</Link>
          <Link to="/practicum" className={`block hover:text-primary transition-colors ${isActive('/practicum', 'practicum')}`} onClick={closeMenu}>Practicum</Link>
          <Link to="/contact" className={`block hover:text-primary transition-colors ${isActive('/contact', 'contact')}`} onClick={closeMenu}>Contact</Link>
        </div>
      </div>
    </nav>
  )
}