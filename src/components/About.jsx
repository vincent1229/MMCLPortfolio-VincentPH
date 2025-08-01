import React from 'react'

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-display font-bold text-center mb-12 animate-fade-in">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-lg shadow-lg p-8 flex flex-col md:flex-row items-center gap-8 animate-slide-up">
            <img
              src="/vincentimage.png"
              alt="Vincent Nueva España profile"
              className="w-40 h-40 rounded-full object-cover border-4 border-primary shadow-md mb-6 md:mb-0"
            />
            <div className="text-left">
              <p className="mb-4 text-lg">
                Hello! I'm <span className="font-bold">VINCENT LUIS R. NUEVA ESPAÑA</span>, a passionate computer science student and data analyst. I specialize in creating efficient solutions for complex problems and deriving meaningful insights from data.
              </p>
              <p className="mb-4 text-lg">
                With a strong foundation in both programming and data analysis, I enjoy working on projects that combine technical challenges with analytical thinking. My goal is to use technology to make data more accessible and actionable.
              </p>
              <p className="text-lg">
                I'm constantly learning new technologies and methodologies to stay current with industry trends and best practices. I believe in the power of clean code, user-centered design, and data-driven decision making.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}