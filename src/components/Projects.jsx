import React from 'react'

export default function Projects() {
  const projects = [
    {
      title: "Data Analysis Dashboard",
      description: "Interactive dashboard built with Python and Streamlit for visualizing business metrics and KPIs. Features real-time data updates and customizable charts.",
      tech: ["Python", "Streamlit", "Pandas", "Plotly", "PostgreSQL"],
      link: "#"
    },
    {
      title: "E-commerce Website",
      description: "Full-stack e-commerce platform with React frontend and Node.js backend, featuring user authentication, payment integration, and inventory management.",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      link: "#"
    },
    {
      title: "Machine Learning Model",
      description: "Predictive model for customer churn analysis using scikit-learn with 94% accuracy on test data. Includes data preprocessing and feature engineering.",
      tech: ["Python", "Scikit-learn", "Jupyter", "Matplotlib", "Pandas"],
      link: "#"
    },
    {
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website built with React and Vite. Features smooth animations, mobile-first design, and optimized performance.",
      tech: ["React", "Vite", "CSS3", "JavaScript", "Responsive Design"],
      link: "#"
    }
  ]

  return (
    <section id="projects" className="section">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              {project.title.split(' ')[0]}
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="tag">{tech}</span>
                ))}
              </div>
              <a href={project.link} className="project-link">
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}