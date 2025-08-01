import React from 'react'

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "Java", "C++", "SQL", "R"]
    },
    {
      title: "Web Development",
      skills: ["React", "HTML/CSS", "Node.js", "Tailwind CSS", "Vite", "Express.js"]
    },
    {
      title: "Data Analysis",
      skills: ["Pandas", "NumPy", "Matplotlib", "Excel", "Tableau", "Power BI"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "VS Code", "Jupyter", "Docker", "AWS", "Linux"]
    }
  ]

  return (
    <section id="skills" className="section skills">
      <h2>Skills & Technologies</h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3>{category.title}</h3>
            <ul className="skill-list">
              {category.skills.map((skill, skillIndex) => (
                <li key={skillIndex}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}