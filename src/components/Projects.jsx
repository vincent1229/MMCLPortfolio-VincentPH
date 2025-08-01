import { motion } from 'framer-motion'

const projects = [
  {
    name: 'Data Analysis Portfolio',
    description: 'Collection of data analysis projects using Python, Pandas, and visualization tools.',
    tech: ['Python', 'Pandas', 'Matplotlib', 'Jupyter'],
    github: '#',
    demo: '#',
  },
  {
    name: 'Web Development Projects',
    description: 'Modern web applications built with React and TailwindCSS.',
    tech: ['React', 'TailwindCSS', 'Node.js', 'MongoDB'],
    github: '#',
    demo: '#',
  },
  {
    name: 'Machine Learning Experiments',
    description: 'Various ML models and experiments for data prediction and classification.',
    tech: ['Python', 'Scikit-learn', 'TensorFlow', 'Jupyter'],
    github: '#',
    demo: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section bg-slate-50">
      <div className="container-wide">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Projects</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            A selection of projects that showcase my skills in data analysis, web development,
            and machine learning.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              className="card p-6 flex flex-col items-start justify-between"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="relative w-full">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  {project.name}
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {project.description}
                </p>
              </div>
              
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="mt-8 flex items-center gap-x-4">
                <a
                  href={project.github}
                  className="btn btn-outline !px-3 !py-1.5 text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code
                </a>
                <a
                  href={project.demo}
                  className="btn btn-primary !px-3 !py-1.5 text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
