import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="hero" className="relative isolate overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <motion.div 
          className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <motion.a 
              href="#about" 
              className="inline-flex space-x-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="rounded-full bg-blue-600/10 px-3 py-1 text-sm font-semibold leading-6 text-blue-600 ring-1 ring-inset ring-blue-600/10">
                Computer Science & Data Analyst
              </span>
            </motion.a>
          </div>
          
          <motion.div
            className="relative w-32 h-32 mx-auto my-8 lg:mx-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src="/vincentimage.png"
              alt="Vincent PH"
              className="rounded-full object-cover w-full h-full shadow-lg"
            />
          </motion.div>

          <motion.h1 
            className="mt-10 text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hi, I'm Vincent PH
          </motion.h1>
          
          <motion.p 
            className="mt-6 text-lg leading-8 text-slate-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            A passionate computer science student and data analyst focused on creating innovative solutions
            and analyzing complex data to drive meaningful insights.
          </motion.p>
          
          <motion.div 
            className="mt-10 flex items-center gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
