

import React, { useState } from 'react';
import './App.css';

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
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
        <input type="text" name="name" value={form.name} onChange={handleChange} required className="vw-input" style={{ width: '100%' }} />
      </label>
      <label>
        Email
        <input type="email" name="email" value={form.email} onChange={handleChange} required className="vw-input" style={{ width: '100%' }} />
      </label>
      <label>
        Write your message here:
        <textarea name="message" value={form.message} onChange={handleChange} required className="vw-input" rows={5} style={{ width: '100%' }} />
      </label>
      <button type="submit" className="vw-btn">Send Message</button>
    </form>
  );
}

const TABS = [
  { key: 'about', label: 'About' },
  { key: 'projects', label: 'Projects' },
  { key: 'skills', label: 'Skills' },
];

function App() {
  const [tab, setTab] = useState('about');
  return (
    <div className="dashboard-bg">
      <div className="dashboard-container">
        <div className="dashboard-header">
          <div className="dashboard-avatar">
            <img src="/assets/profile.jpg" alt="Vincent Nueva España" className="dashboard-avatar-img" />
          </div>
          <div className="dashboard-title-group">
            <h1 className="dashboard-title">Vincent</h1>
            <p className="dashboard-tagline">Computer Science & Data Analyst</p>
          </div>
        </div>
        <nav className="dashboard-tabs">
          {TABS.map((t) => (
            <button
              key={t.key}
              className={`dashboard-tab${tab === t.key ? ' active' : ''}`}
              onClick={() => setTab(t.key)}
              type="button"
            >
              {t.label}
            </button>
          ))}
        </nav>
        <div className="dashboard-content">
          {tab === 'about' && (
            <section>
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
              <h3>Achievements & Experience</h3>
              <ul className="vw-achievements-list">
                <li>
                  <strong>OJT at STMicroelectronics Calamba (324 hours):</strong> Contributed to real-world projects in semiconductor operations and system automation under the New Product Introduction (NPI) department.
                </li>
                <li>
                  <strong>Internal EIC System:</strong> Developed and deployed an Electronic Inspection Checklist for digital quality control in the NPI line.
                </li>
                <li>
                  <strong>Web-based SQL Automation:</strong> Built a secure platform for material tracking and query submission in semiconductor manufacturing.
                </li>
                <li>
                  <strong>Security & IRM:</strong> Participated in terminal password configuration and Information Rights Management setup for secure access and digital rights protocols.
                </li>
                <li>
                  <strong>Failure Analysis:</strong> Conducted hands-on inspections using Keyence VHX-7000 and Olympus MX51 equipment.
                </li>
                <li>
                  <strong>AINA AI System:</strong> Co-developed and documented an AI-powered system integrating ML, NLP, and voice interface for health guidance and automation.
                </li>
                <li>
                  <strong>Industry Seminars:</strong> Attended <em>Microsoft Season of AI Season of Agents (Season 4)</em> and <em>Modern Technologies: Shaping the Future of Software Development and IT Operations</em>.
                </li>
                <li>
                  <strong>Academic Honors:</strong> Graduated with High Honors from Mapúa Malayan Colleges Laguna (Senior High School).
                </li>
                <li>
                  <strong>Leadership:</strong> Treasurer, Junior Philippine Computer Society (JPCS) MCL Chapter.
                </li>
                <li>
                  <strong>Esports:</strong> Former player for the Warlocks, Mapúa MCL esports team, representing the school in competitive gaming events.
                </li>
              </ul>
            </section>
          )}
          {tab === 'projects' && (
            <section>
              <h2>Featured Projects</h2>
              <div className="projects-grid-blue">
                {/* Project 1 */}
                <div className="project-card-blue">
                  <img src="./assets/placeholder-vaporwave.svg" alt="AINA project" className="project-img-blue" />
                  <div className="project-info-blue">
                    <h3 className="project-name-blue">AINA (AI Nutrition Assistant)</h3>
                    <p className="project-desc-blue">An AI-powered health assistant that provides nutrition advice, meal planning, and voice interaction. Integrates NLP, TTS, and ML for real-world healthcare support.</p>
                    <div className="project-tags-blue">
                      <span>BMI</span><span>Computer Vision</span><span>Kiosk</span><span>Automation</span><span>AI</span>
                    </div>
                  </div>
                </div>
                {/* Project 2 */}
                <div className="project-card-blue">
                  <img src="./assets/placeholder-vaporwave.svg" alt="Nutritrack project" className="project-img-blue" />
                  <div className="project-info-blue">
                    <h3 className="project-name-blue">Nutritrack</h3>
                    <p className="project-desc-blue">A web-based system for automated BMI calculation, nutrition tracking, and SQL-powered data automation for health monitoring in organizations.</p>
                    <div className="project-tags-blue">
                      <span>Mobile Application</span><span>Health and Wellness</span><span>Automation</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
          {tab === 'skills' && (
            <section>
              <h2>Skills</h2>
              <div className="vw-skills-categories">
                <div className="vw-skill-category">
                  <h3>Programming Languages</h3>
                  <ul className="vw-skill-list">
                    <li><span role="img" aria-label="python">🐍</span> Python</li>
                    <li><span role="img" aria-label="csharp">#️⃣</span> C#</li>
                    <li><span role="img" aria-label="js">✨</span> JavaScript</li>
                    <li><span role="img" aria-label="html">🌐</span> HTML/CSS</li>
                    <li><span role="img" aria-label="sql">🗄️</span> SQL</li>
                  </ul>
                </div>
                <div className="vw-skill-category">
                  <h3>Frameworks & Tools</h3>
                  <ul className="vw-skill-list">
                    <li>.NET</li>
                    <li>Xamarin</li>
                    <li>Flask</li>
                    <li>LangChain</li>
                    <li>React (basic)</li>
                    <li>Vercel</li>
                    <li>VS Code</li>
                    <li>Git</li>
                  </ul>
                </div>
                <div className="vw-skill-category">
                  <h3>AI & Machine Learning</h3>
                  <ul className="vw-skill-list">
                    <li>Natural Language Processing</li>
                    <li>Scikit-learn (Random Forest, Classification Models)</li>
                    <li>Gemini API</li>
                    <li>Google Generative AI</li>
                    <li>Voice Recognition</li>
                    <li>TTS Systems</li>
                  </ul>
                </div>
                <div className="vw-skill-category">
                  <h3>Database Management</h3>
                  <ul className="vw-skill-list">
                    <li>MySQL</li>
                    <li>SQL Server</li>
                    <li>Azure Database Integration</li>
                  </ul>
                </div>
                <div className="vw-skill-category">
                  <h3>Software & Systems</h3>
                  <ul className="vw-skill-list">
                    <li>Power BI</li>
                    <li>Keyence VHX-7000</li>
                    <li>Olympus MX51</li>
                    <li>Windows Server (basic terminal admin)</li>
                    <li>Information Rights Management</li>
                  </ul>
                </div>
                <div className="vw-skill-category">
                  <h3>Project Experience</h3>
                  <ul className="vw-skill-list">
                    <li>Health-focused AI assistant (AINA)</li>
                    <li>Automated BMI Systems</li>
                    <li>Web-based SQL query automation</li>
                    <li>Internal checklists for manufacturing</li>
                  </ul>
                </div>
                <div className="vw-skill-category">
                  <h3>Soft Skills</h3>
                  <ul className="vw-skill-list">
                    <li>Technical Documentation</li>
                    <li>Problem Solving</li>
                    <li>Team Collaboration</li>
                    <li>Research Synthesis</li>
                    <li>System Analysis</li>
                    <li>Public Speaking</li>
                  </ul>
                </div>
              </div>
            </section>
          )}
        </div>
        <div className="dashboard-footer">
          <h3>Contact</h3>
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
          <h3 style={{ marginTop: '2rem' }}>Get in Touch</h3>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="vaporwave-bg">
      {/* Hero Section */}
      <RevealSection className="vw-hero" direction="up">
        <div className="vw-hero-content">
          <div className="vw-hero-avatar">
            <img src="/assets/profile.jpg" alt="Vincent Nueva España" className="vw-hero-avatar-img" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
          </div>
          <h1 className="vw-hero-title glitch" data-text="Vincent">Vincent</h1>
          <p className="vw-hero-tagline">Computer Science & Data Analyst</p>
          <div className="vw-hero-nav">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
            <a href="#get-in-touch">Get in Touch</a>
          </div>
        </div>
        <div className="vw-hero-bg-anim"></div>
      </RevealSection>

      {/* About Section */}
      <RevealSection id="about" className="vw-section vw-about" direction="right">
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
      </RevealSection>
      
      {/* Achievements & Experience Section */}
      <RevealSection className="vw-section vw-achievements-section" direction="left">
        <h2>Achievements & Experience</h2>
        <ul className="vw-achievements-list">
          <li>
            <strong>OJT at STMicroelectronics Calamba (324 hours):</strong> Contributed to real-world projects in semiconductor operations and system automation under the New Product Introduction (NPI) department.
          </li>
          <li>
            <strong>Internal EIC System:</strong> Developed and deployed an Electronic Inspection Checklist for digital quality control in the NPI line.
          </li>
          <li>
            <strong>Web-based SQL Automation:</strong> Built a secure platform for material tracking and query submission in semiconductor manufacturing.
          </li>
          <li>
            <strong>Security & IRM:</strong> Participated in terminal password configuration and Information Rights Management setup for secure access and digital rights protocols.
          </li>
          <li>
            <strong>Failure Analysis:</strong> Conducted hands-on inspections using Keyence VHX-7000 and Olympus MX51 equipment.
          </li>
          <li>
            <strong>AINA AI System:</strong> Co-developed and documented an AI-powered system integrating ML, NLP, and voice interface for health guidance and automation.
          </li>
          <li>
            <strong>Industry Seminars:</strong> Attended <em>Microsoft Season of AI Season of Agents (Season 4)</em> and <em>Modern Technologies: Shaping the Future of Software Development and IT Operations</em>.
          </li>
          <li>
            <strong>Academic Honors:</strong> Graduated with High Honors from Mapúa Malayan Colleges Laguna (Senior High School).
          </li>
          <li>
            <strong>Leadership:</strong> Treasurer, Junior Philippine Computer Society (JPCS) MCL Chapter.
          </li>
          <li>
            <strong>Esports:</strong> Former player for the Warlocks, Mapúa MCL esports team, representing the school in competitive gaming events.
          </li>
        </ul>
      </RevealSection>

      {/* Contact Section */}
      <RevealSection id="contact" className="vw-section vw-contact-section" direction="up">
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
      </RevealSection>

      {/* Projects Section - Modern Blue Themed Card Grid */}
      <RevealSection id="projects" className="projects-section-blue" direction="right">
        <h2 className="projects-title-blue">Featured Projects</h2>
        <div className="projects-grid-blue">
          {/* Project 1 */}
          <div className="project-card-blue">
            <img src="./assets/placeholder-vaporwave.svg" alt="AINA project" className="project-img-blue" />
            <div className="project-info-blue">
              <h3 className="project-name-blue">AINA (AI Nutrition Assistant)</h3>
              <p className="project-desc-blue">An AI-powered health assistant that provides nutrition advice, meal planning, and voice interaction. Integrates NLP, TTS, and ML for real-world healthcare support.</p>
              <div className="project-tags-blue">
                <span>BMI</span><span>Computer Vision</span><span>Kiosk</span><span>Automation</span><span>AI</span>
              </div>
            </div>
          </div>
          {/* Project 2 */}
          <div className="project-card-blue">
            <img src="./assets/placeholder-vaporwave.svg" alt="Nutritrack project" className="project-img-blue" />
            <div className="project-info-blue">
              <h3 className="project-name-blue">Nutritrack</h3>
              <p className="project-desc-blue">A web-based system for automated BMI calculation, nutrition tracking, and SQL-powered data automation for health monitoring in organizations.</p>
              <div className="project-tags-blue">
                <span>Mobile Application</span><span>Health and Wellness</span><span>Automation</span>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* Skills Section */}
      <RevealSection id="skills" className="vw-section vw-skills-section" direction="left">
        <h2>Skills</h2>
        <div className="vw-skills-categories">
          <div className="vw-skill-category">
            <h3>Programming Languages</h3>
            <ul className="vw-skill-list">
              <li><span role="img" aria-label="python">🐍</span> Python</li>
              <li><span role="img" aria-label="csharp">#️⃣</span> C#</li>
              <li><span role="img" aria-label="js">✨</span> JavaScript</li>
              <li><span role="img" aria-label="html">🌐</span> HTML/CSS</li>
              <li><span role="img" aria-label="sql">🗄️</span> SQL</li>
            </ul>
          </div>
          <div className="vw-skill-category">
            <h3>Frameworks & Tools</h3>
            <ul className="vw-skill-list">
              <li>.NET</li>
              <li>Xamarin</li>
              <li>Flask</li>
              <li>LangChain</li>
              <li>React (basic)</li>
              <li>Vercel</li>
              <li>VS Code</li>
              <li>Git</li>
            </ul>
          </div>
          <div className="vw-skill-category">
            <h3>AI & Machine Learning</h3>
            <ul className="vw-skill-list">
              <li>Natural Language Processing</li>
              <li>Scikit-learn (Random Forest, Classification Models)</li>
              <li>Gemini API</li>
              <li>Google Generative AI</li>
              <li>Voice Recognition</li>
              <li>TTS Systems</li>
            </ul>
          </div>
          <div className="vw-skill-category">
            <h3>Database Management</h3>
            <ul className="vw-skill-list">
              <li>MySQL</li>
              <li>SQL Server</li>
              <li>Azure Database Integration</li>
            </ul>
          </div>
          <div className="vw-skill-category">
            <h3>Software & Systems</h3>
            <ul className="vw-skill-list">
              <li>Power BI</li>
              <li>Keyence VHX-7000</li>
              <li>Olympus MX51</li>
              <li>Windows Server (basic terminal admin)</li>
              <li>Information Rights Management</li>
            </ul>
          </div>
          <div className="vw-skill-category">
            <h3>Project Experience</h3>
            <ul className="vw-skill-list">
              <li>Health-focused AI assistant (AINA)</li>
              <li>Automated BMI Systems</li>
              <li>Web-based SQL query automation</li>
              <li>Internal checklists for manufacturing</li>
            </ul>
          </div>
          <div className="vw-skill-category">
            <h3>Soft Skills</h3>
            <ul className="vw-skill-list">
              <li>Technical Documentation</li>
              <li>Problem Solving</li>
              <li>Team Collaboration</li>
              <li>Research Synthesis</li>
              <li>System Analysis</li>
              <li>Public Speaking</li>
            </ul>
          </div>
        </div>
      </RevealSection>

      {/* Get in Touch Section */}
      <RevealSection id="get-in-touch" className="vw-section vw-contact-section" direction="up">
        <h2>Get in Touch</h2>
        <ContactForm />
      </RevealSection>
    </div>
  );
}

export default App;

