import React from 'react'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Vincent PH</h1>
        <p className="subtitle">Computer Science Student & Data Analyst</p>
        <p className="description">
          Passionate about creating innovative solutions and deriving meaningful insights from data. 
          I specialize in web development, data analysis, and problem-solving.
        </p>
        <div className="cta-buttons">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-secondary">Get In Touch</a>
        </div>
      </div>
    </section>
  )
}