import React from 'react'
import { Code, Globe, BarChart2, Settings } from 'lucide-react'

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6 text-primary inline-block mr-2" />,
      skills: ["Python", "JavaScript", "Java", "C++", "SQL", "R"]
    },
    {
      title: "Web Development",
      icon: <Globe className="w-6 h-6 text-primary inline-block mr-2" />,
      skills: ["React", "HTML/CSS", "Node.js", "Tailwind CSS", "Vite", "Express.js"]
    },
    {
      title: "Data Analysis",
      icon: <BarChart2 className="w-6 h-6 text-primary inline-block mr-2" />,
      skills: ["Pandas", "NumPy", "Matplotlib", "Excel", "Tableau", "Power BI"]
    },
    {
      title: "Tools & Technologies",
      icon: <Settings className="w-6 h-6 text-primary inline-block mr-2" />,
      skills: ["Git", "VS Code", "Jupyter", "Docker", "AWS", "Linux"]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-display font-bold text-center mb-12 animate-fade-in">Skills & Technologies</h2>
        <div className="grid gap-8 max-w-4xl mx-auto md:grid-cols-2 lg:grid-cols-2">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-card rounded-lg shadow-lg p-6 animate-slide-up hover:scale-[1.02] transition-transform ease-in-out duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 hover:shadow-xl flex flex-col items-start"
              tabIndex={0}
            >
              <h3 className="text-2xl font-bold mb-4 flex items-center">{category.icon}{category.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="px-3 py-1 bg-primary/10 text-primary rounded text-sm font-semibold shadow-sm hover:bg-primary/20 transition-colors duration-200"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}