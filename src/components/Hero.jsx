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
          <a
            href="#projects"
            className="btn btn-primary transition-colors duration-200 ease-in-out shadow-md hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            View My Work
          </a>
          <Link
            to="/contact"
            className="btn btn-secondary transition-colors duration-200 ease-in-out shadow-md hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Get In Touch
          </Link>
          <a
            href="/CVResume.pdf"
            download
            className="btn btn-accent transition-colors duration-200 ease-in-out shadow-md hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  )
}