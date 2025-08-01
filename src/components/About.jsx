import { motion } from 'framer-motion'

const stats = [
  { label: 'Programming Skills', value: 'Python, JavaScript, SQL' },
  { label: 'Data Analytics', value: 'Pandas, NumPy, Tableau' },
  { label: 'Web Development', value: 'React, TailwindCSS, Node.js' },
]

export default function About() {
  return (
    <section id="about" className="section bg-white">
      <div className="container-wide">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <motion.div 
            className="mx-auto max-w-2xl lg:mx-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Me</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Hello! I'm Vincent PH, a passionate computer science student and data analyst. 
              I specialize in creating efficient solutions for complex problems and deriving 
              meaningful insights from data.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              With a strong foundation in both programming and data analysis, I enjoy working 
              on projects that combine technical challenges with analytical thinking. My goal 
              is to use technology to make data more accessible and actionable.
            </p>
            <motion.div 
              className="mt-10 flex items-center gap-x-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <a href="#contact" className="btn btn-primary">
                Get in Touch
              </a>
              <a href="/resume.pdf" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                View Resume
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <dl className="grid grid-cols-1 gap-x-8 gap-y-12">
              {stats.map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  className="border-l-4 border-blue-600 pl-6"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                >
                  <dt className="text-sm font-semibold leading-6 text-gray-900">{stat.label}</dt>
                  <dd className="mt-2 text-2xl font-bold leading-8 tracking-tight text-blue-600">
                    {stat.value}
                  </dd>
                </motion.div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
