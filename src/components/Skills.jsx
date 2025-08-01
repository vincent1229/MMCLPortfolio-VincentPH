export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "Java", "C++", "SQL", "R"]
    },
    {
      title: "Web Development",
      skills: ["React", "HTML/CSS", "Node.js", "Tailwind CSS", "Vite"]
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
    <section id="skills" className="section bg-white">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Skills & Technologies
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Here are the technologies and tools I work with
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
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