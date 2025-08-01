import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section id="home" className="hero min-h-screen flex flex-col justify-center items-center bg-background px-4">
      <div className="hero-content flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-primary drop-shadow-lg mb-4">
          Vincent Luis R. Nueva España
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-6">
          Medical Research & Data Scientist. I am a Computer Science student and software developer with a strong passion for medical research, and data analysis. My expertise lies in building intelligent systems and integrating large language models into practical applications particularly web-based platforms that enhance user experience, automate tasks, and support data-driven healthcare research..
        </p>
        <div className="cta-buttons flex gap-4">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <Link to="/contact" className="btn btn-secondary">Get In Touch</Link>
        </div>
      </div>
    </section>
  )
}