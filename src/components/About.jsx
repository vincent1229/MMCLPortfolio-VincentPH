import React from 'react'
import vincentImage from '../../vincentimage.png'

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-display font-bold text-center mb-12 animate-fade-in">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-lg shadow-lg p-8 flex flex-col md:flex-row items-center gap-8 animate-slide-up hover:scale-[1.02] transition-transform ease-in-out duration-300">
            <img
              src={vincentImage}
              alt="Vincent Nueva España profile"
              className="w-40 h-40 rounded-full object-cover border-4 border-primary shadow-md mb-6 md:mb-0 aspect-square max-w-full h-auto"
              loading="lazy"
            />
            <div className="text-left">
              <p className="mb-4 text-lg">
                <span className="font-bold">Medical Research & Data Scientist.</span> I am a Computer Science student and software developer with a strong passion for medical research, and data analysis.  My expertise lies in building intelligent systems and integrating large language models into practical applications particularly web-based platforms that enhance user experience, automate tasks, and support data-driven healthcare research.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}