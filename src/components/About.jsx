export default function About() {
  return (
    <section id="about" className="section bg-gray-50">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <div className="mx-auto max-w-2xl lg:mx-0">
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
            <div className="mt-10 flex items-center gap-x-6">
              <a href="#contact" className="btn-primary">
                Let's Connect
              </a>
              <a href="#projects" className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600">
                View Projects <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="mx-auto max-w-2xl lg:mx-0">
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900">Education</h3>
                <p className="text-gray-600">Computer Science Student</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900">Focus Areas</h3>
                <p className="text-gray-600">Data Analysis, Web Development, Problem Solving</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900">Interests</h3>
                <p className="text-gray-600">Machine Learning, Data Visualization, Software Engineering</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}