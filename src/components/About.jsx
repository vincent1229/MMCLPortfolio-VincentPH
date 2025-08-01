import React from 'react'

export default function About() {
  return (
    <section id="about" className="section">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            Hello! I'm Vincent PH, a passionate computer science student and data analyst. 
            I specialize in creating efficient solutions for complex problems and deriving 
            meaningful insights from data.
          </p>
          <p>
            With a strong foundation in both programming and data analysis, I enjoy working 
            on projects that combine technical challenges with analytical thinking. My goal 
            is to use technology to make data more accessible and actionable.
          </p>
          <p>
            I'm constantly learning new technologies and methodologies to stay current 
            with industry trends and best practices. I believe in the power of clean code, 
            user-centered design, and data-driven decision making.
          </p>
        </div>
        <div className="about-image">
          <div className="profile-image">VP</div>
        </div>
      </div>
    </section>
  )
}