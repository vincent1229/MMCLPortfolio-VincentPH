
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';

// Contact form component
function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${form.name || 'Portfolio Visitor'}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:vlnuevaespana@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <form className="vw-contact-form" onSubmit={handleSubmit} style={{ maxWidth: 500, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
      <label>
        Name
        <input type="text" name="name" value={form.name} onChange={handleChange} required className="vw-input" />
      </label>
      <label>
        Email
        <input type="email" name="email" value={form.email} onChange={handleChange} required className="vw-input" />
      </label>
      <label>
        Write your message here
        <textarea name="message" value={form.message} onChange={handleChange} required className="vw-input" rows={5} />
      </label>
      <button type="submit" className="vw-btn">Send Message</button>
    </form>
  );
}

// Sticky glassmorphic navigation bar
function Navbar() {
  return (
    <nav className="vw-navbar">
      <div className="vw-navbar-content">
        <span className="vw-navbar-logo">🦄 Vincent</span>
        <div className="vw-navbar-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
          <a href="#get-in-touch">Get in Touch</a>
        </div>
      </div>
    </nav>
  );
}

// Main App component
function App() {
  // Framer Motion variants for section reveal
  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
  };

  return (
    <div className="vaporwave-bg">
      <Navbar />
      {/* Hero Section */}
      <motion.section className="vw-hero" initial="hidden" animate="visible" variants={sectionVariants}>
        <div className="vw-hero-content">
          <div className="vw-hero-avatar floating">
            <span role="img" aria-label="avatar" className="vw-hero-avatar-emoji">🦄</span>
          </div>
          <h1 className="vw-hero-title glitch" data-text="Vincent">Vincent</h1>
          <p className="vw-hero-tagline">Computer Science & Data Analyst</p>
        </div>
        <div className="vw-hero-bg-anim"></div>
      </motion.section>

      {/* About Section */}
      <motion.section id="about" className="vw-section vw-about" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <div className="vw-about-content">
          <div className="vw-about-text" style={{ width: '100%' }}>
            <h2>About Me</h2>
            <p>
              I am a fourth-year Computer Science student at Mapúa Malayan Colleges Laguna and currently a practicum intern at STMicroelectronics Calamba under the New Product Introduction (NPI) department. My work involves hands-on experience in semiconductor operations, full-stack web development, SQL-based data automation, inventory and lot management, and system deployment such as the Electronic Inspection Checklist (EIC).
            </p>
            <p>
              With a strong passion for data science and intelligent systems, I co-developed AINA, an AI-powered assistant that integrates machine learning, natural language processing, and voice interfaces for real-world healthcare applications. I previously served as Treasurer of the Junior Philippine Computer Society (JPCS) – MCL Chapter and played for Warlocks, the official esports team of Mapúa MCL, where I developed both leadership and teamwork skills. I also graduated with High Honors during my senior high school years at Mapúa MCL.
            </p>
            <p>
              I am committed to transforming academic knowledge into impactful solutions that blend technology with human-centered design, and I continually strive to grow as a future data scientist and software engineer.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Achievements & Experience Section */}
      <motion.section className="vw-section vw-achievements-section" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <h2>Achievements & Experience</h2>
        <ul className="vw-achievements-list">
          {/* ...existing code... */}
          <li>
            <strong>OJT at STMicroelectronics Calamba (324 hours):</strong> Contributed to real-world projects in semiconductor operations and system automation under the New Product Introduction (NPI) department.
          </li>
          {/* ...existing code... */}
        </ul>
      </motion.section>

      {/* Contact Section */}
      <motion.section id="contact" className="vw-section vw-contact-section" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <h2>Contact</h2>
        <div className="vw-contact-list">
          <div className="vw-contact-item">
            <span role="img" aria-label="email">📧</span>
            <a href="mailto:vlnuevaespana@gmail.com">vlnuevaespana@gmail.com</a>
          </div>
          <div className="vw-contact-item">
            <span role="img" aria-label="linkedin">💼</span>
            <a href="https://www.linkedin.com/in/vincent-luis-nueva-espa%C3%B1a-955085325/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section id="projects" className="vw-section vw-projects-section" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <h2>Projects</h2>
        <div className="vw-projects-list">
          {/* ...existing code... */}
          <div className="vw-project-card">
            <img src="./assets/placeholder-vaporwave.svg" alt="AINA project" className="vw-project-img" />
            <div className="vw-project-info">
              <h3>AINA (AI Nutrition Assistant)</h3>
              <p>An AI-powered health assistant that provides nutrition advice, meal planning, and voice interaction. Integrates NLP, TTS, and ML for real-world healthcare support.</p>
              <div className="vw-project-tags">
                <span>Python</span><span>Flask</span><span>Scikit-learn</span><span>Voice Recognition</span><span>AI</span>
              </div>
            </div>
          </div>
          {/* ...existing code... */}
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section id="skills" className="vw-section vw-skills-section" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <h2>Skills</h2>
        <div className="vw-skills-categories">
          {/* ...existing code... */}
        </div>
      </motion.section>

      {/* Get in Touch Section */}
      <motion.section id="get-in-touch" className="vw-section vw-contact-section" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <h2>Get in Touch</h2>
        <ContactForm />
      </motion.section>
    </div>
  );
}

export default App;

