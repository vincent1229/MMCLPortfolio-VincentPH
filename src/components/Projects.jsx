import React from 'react'

export default function Projects() {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "Designed and developed a responsive portfolio website to showcase my projects and skills. Deployed on Vercel for fast and global accessibility.",
      tech: ["HTML", "CSS", "JavaScript", "Responsive Design", "Vercel"]
    },
    {
      title: "AINA: A Personalized Health Recommendation System",
      description: "Deep learning system for height and weight estimation through image processing, paired with personalized health recommendations using Large Language Models.",
      tech: ["Python", "Deep Learning", "LLM", "Image Processing", "Computer Vision", "OpenCV"]
    },
    {
      title: "NutriTrack Mobile App",
      description: "A mobile application for tracking dietary intake, nutritional content, and key health parameters like sugar and sodium levels.",
      tech: ["Xamarin", "Mobile Development", "Database", "Health Tech"]
    },
    {
      title: "Coin and Bills Detection Tool",
      description: "An educational tool using computer vision to detect coins and bills, designed to promote financial literacy through technological learning.",
      tech: ["Python", "OpenCV", "Computer Vision", "Educational Tech"]
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