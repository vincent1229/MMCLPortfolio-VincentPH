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
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-display font-bold text-center mb-12 animate-fade-in">
          Featured Projects
        </h2>
        <div className="grid gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="bg-card rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-center gap-6 animate-slide-up hover:scale-[1.02] transition-transform ease-in-out duration-300">
              <div className="flex-shrink-0 w-24 h-24 bg-primary/10 rounded-lg flex items-center justify-center text-3xl font-bold text-primary shadow-md">
                {project.title.split(' ')[0]}
              </div>
              <div className="flex-1 text-left">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="mb-3 text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-semibold">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="inline-block mt-2 text-primary font-semibold hover:underline">
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}