import { motion } from 'framer-motion'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

export default function Contact() {
  return (
    <section id="contact" className="section bg-slate-50">
      <div className="container-wide">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2">
          <motion.div
            className="lg:pt-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-xl lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Get in Touch
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                I'm always open to new opportunities and collaborations. Whether you have a question
                or just want to say hi, feel free to reach out!
              </p>
              <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <EnvelopeIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                  </dt>
                  <dd>
                    <a className="hover:text-gray-900" href="mailto:your-email@example.com">
                      your-email@example.com
                    </a>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Telephone</span>
                    <PhoneIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                  </dt>
                  <dd>
                    <a className="hover:text-gray-900" href="tel:+1234567890">
                      +1 (234) 567-890
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </motion.div>
          
          <motion.div
            className="card p-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form className="mx-auto max-w-xl">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="first-name" className="form-label">
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="form-input"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="last-name" className="form-label">
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="form-input"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="form-input"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      className="form-input"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <button type="submit" className="btn btn-primary w-full">
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
