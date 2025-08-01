import React from 'react'

export default function Hero() {
  return (
    <section id="home" className="hero min-h-screen flex flex-col justify-center items-center bg-background px-4">
      <div className="hero-content flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-primary drop-shadow-lg mb-4">
          Vincent Luis R. Nueva España
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-6">
          Aspiring Data Scientist with experience in AI, mobile development, and system integration.
        </p>
        <div className="cta-buttons flex gap-4">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-secondary">Get In Touch</a>
        </div>
      </div>
    </section>
  )
}