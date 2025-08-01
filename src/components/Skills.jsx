import { motion } from 'framer-motion'

const skills = [
  {
    category: 'Programming Languages',
    items: ['Python', 'JavaScript', 'SQL', 'Java'],
  },
  {
    category: 'Data Analysis',
    items: ['Pandas', 'NumPy', 'Matplotlib', 'Tableau', 'Excel'],
  },
  {
    category: 'Web Development',
    items: ['React', 'TailwindCSS', 'Node.js', 'HTML/CSS'],
  },
  {
    category: 'Machine Learning',
    items: ['Scikit-learn', 'TensorFlow', 'Jupyter Notebook'],
  },
  {
    category: 'Tools & Technologies',
    items: ['Git', 'VS Code', 'Docker', 'AWS'],
  },
  {
    category: 'Soft Skills',
    items: ['Problem Solving', 'Team Collaboration', 'Communication', 'Project Management'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section bg-white">
      <div className="container-wide">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Skills</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            My technical expertise spans across various domains, from programming and data analysis
            to web development and machine learning.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              className="card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className="skill-badge"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: groupIndex * 0.1 + skillIndex * 0.05,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
