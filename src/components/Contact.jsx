import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <h2>Let's Work Together</h2>
      <div className="contact-content">
        <p>
          I'm always open to discussing new opportunities, interesting projects, 
          or just having a conversation about technology and data. Let's connect!
        </p>
        <div className="contact-links">
          <a href="mailto:vincent@example.com" className="contact-link">
            Send Email
          </a>
          <a href="https://www.linkedin.com/in/vincent-luis-nueva-espa%C3%B1a-955085325" target="_blank" rel="noopener noreferrer" className="contact-link">
            LinkedIn
          </a>
          <a href="https://github.com/vincentph" target="_blank" rel="noopener noreferrer" className="contact-link">
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}