import './App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Analytics } from '@vercel/analytics/react'

const projects = [
  {
    title: 'Expenses Tracker',
    badge: 'Featured Project',
    description:
      'A Flask-based personal finance web application with login, transaction management, category tracking, and dashboard summaries for reviewing income and expenses.',
    highlights: ['Authentication', 'Transaction CRUD', 'Dashboard Summary'],
    tags: ['Python', 'Flask', 'SQLite', 'HTML', 'CSS', 'Render'],
    liveLink: 'https://expenses-tracker-ffgb.onrender.com/login',
    githubLink: 'https://github.com/masliza2703/expenses-tracker',
  },
  {
    title: 'Online Booking System',
    description:
      'A web-based application built with custom PHP MVC architecture as part of my Information Systems Engineering coursework. The system uses MySQL for data management and follows separation of concerns across Model, View, and Controller layers.',
    tags: ['PHP (MVC)', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Hostinger'],
    githubLink: 'https://github.com/masliza2703/online-booking-system',
  },
]

function SectionHeader({ title, subtitle }) {
  return (
    <div className="section-header">
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  )
}

function ProjectCard({ project, featured = false }) {
  return (
    <article className={`card project-card ${featured ? 'project-card-featured' : ''}`}>
      <div className="project-card-top">
        {project.badge && <span className="project-badge">{project.badge}</span>}
        <h3>{project.title}</h3>
      </div>
      <p>{project.description}</p>
      {project.highlights && (
        <div className="project-highlights">
          {project.highlights.map((highlight) => (
            <span key={highlight}>{highlight}</span>
          ))}
        </div>
      )}
      <div className="tags">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      {(project.liveLink || project.githubLink) && (
        <div className="project-actions">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
              className="card-link"
            >
              Live Demo -&gt;
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noreferrer"
              className="card-link"
            >
              GitHub -&gt;
            </a>
          )}
        </div>
      )}
    </article>
  )
}

function App() {
  const [views, setViews] = useState(0)

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 60,
    })

    fetch(`https://api.countapi.xyz/hit/masliza-portfolio/visits?cache=${Date.now()}`)
      .then((res) => res.json())
      .then((data) => setViews(data.value))
      .catch(() => setViews(0))
  }, [])

  return (
    <>
      <nav className="navbar">
        <h2>Masliza</h2>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" data-aos="fade-up">
        <div className="hero-left">
          <span className="hero-badge">Portfolio 2026</span>
          <h1>Hi, I'm Masliza</h1>
          <p className="hero-role">Information Systems Engineering Student</p>
          <p className="subtitle">
            I am an Information Systems Engineering student with a focus on web development. I am seeking opportunities to apply my knowledge in a real working environment.
          </p>
          <div className="buttons">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>
        </div>
        <div className="hero-right">
          <div className="image-frame">
            <img src="/profile1.jpeg" alt="Masliza profile" />
          </div>
        </div>
      </section>

      <section className="section" id="about" data-aos="fade-up">
        <div className="section-inner">
          <SectionHeader
            title="About Me"
            subtitle="A brief overview of my background and what I bring to the table."
          />
          <div className="about-content">
            <p>
              I am an Information Systems Engineering student with a strong interest in
              web development and software engineering. I enjoy building functional and
              structured systems that solve real problems.
            </p>
            <p>
              I have hands-on experience developing web applications using PHP with MVC
              architecture, Python Flask, and database-driven workflows, focusing on clean
              system structure, CRUD operations, and basic authentication.
            </p>
            <p>
              I am also familiar with software development documentation such as SRS
              (Software Requirement Specification), SDD (Software Design Document), and
              manual testing including test case design and bug reporting.
            </p>
            <p>
              Currently, I am expanding my skills in modern frontend development using
              React and improving my UI/UX design understanding.
            </p>
            <ul className="about-list">
              <li>Information Systems Engineering student</li>
              <li>PHP MVC, Python Flask, and database-driven web development</li>
              <li>SRS & SDD documentation experience</li>
              <li>Manual testing & test case design</li>
              <li>Learning React & modern frontend</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section" id="skills" data-aos="fade-up">
        <div className="section-inner">
          <SectionHeader
            title="Skills"
            subtitle="Technologies and practices I work with across the development lifecycle."
          />
          <div className="skills-panel">
            <p><strong>Programming Languages:</strong> PHP, Python, Java, C++</p>
            <p><strong>Framework / Architecture:</strong> MVC, Flask</p>
            <p><strong>Frontend Development:</strong> HTML, CSS, JavaScript, React (Vite)</p>
            <p><strong>Database:</strong> MySQL, MariaDB, MongoDB, SQLite</p>
            <p><strong>Tools:</strong> Visual Studio Code, NetBeans, Arduino IDE, RapidMiner, GitHub, Render, Hostinger, Vercel</p>
            <p><strong>Productivity &amp; Design Tools:</strong> Microsoft Excel, Word, PowerPoint, Figma, Draw.io, StarUML</p>
            <p><strong>Testing &amp; Documentation:</strong> Test Case Design, Manual Testing, UAT, SRS, SDD, STD</p>
          </div>
        </div>
      </section>

      <section className="section" data-aos="fade-up" id="experience">
        <div className="section-inner">
          <SectionHeader
            title="Experience"
            subtitle="Professional experience and hands-on industry exposure."
          />
          <div className="card">
            <h3>IT Intern</h3>
            <p className="meta">
              Maryam Khadijah Group Sdn. Bhd, Penang | Sept 2025 - Feb 2026
            </p>
            <ul className="exp-list">
              <li>
                Managed and maintained e-commerce platform data including product listings
                and inventory records to ensure data accuracy and consistency.
              </li>
              <li>
                Performed data analysis on Return on Ad Spend (ROAS) using Microsoft Excel
                to support marketing performance evaluation.
              </li>
              <li>
                Generated monthly sales and profitability reports for business
                decision-making.
              </li>
              <li>
                Assisted in troubleshooting basic system and data-related issues.
              </li>
              <li>
                Ensured proper documentation of data updates and operational processes.
              </li>
            </ul>

            <motion.div className="tags exp-tags">
              <span>Excel Data Analysis</span>
              <span>ROAS Reporting</span>
              <span>Data Management</span>
              <span>System Troubleshooting</span>
              <span>Documentation</span>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section" id="projects" data-aos="fade-up">
        <div className="section-inner">
          <SectionHeader
            title="Projects"
            subtitle="Selected work that reflects my learning and technical growth."
          />
          <div className="projects-grid">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} featured={index === 0} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="contact" data-aos="fade-up">
        <div className="section-inner">
          <SectionHeader
            title="Let's Connect"
            subtitle="Feel free to reach out - I'm open to opportunities and collaboration."
          />
          <div className="contact-list">
            <a href="https://wa.me/60105653789?text=Hi%20Masliza,%20I%20saw%20your%20portfolio" className="contact-item" target="_blank" rel="noreferrer">
              <span>WA</span>
              <div>
                <p className="label">Whatsapp</p>
                <p className="value">010-565 3789</p>
              </div>
            </a>
            <a href="mailto:maslizaaaa@gmail.com" className="contact-item">
              <span>@</span>
              <div>
                <p className="label">Email</p>
                <p className="value">maslizaaaa@gmail.com</p>
              </div>
            </a>
            <a
              href="https://github.com/masliza2703"
              target="_blank"
              rel="noreferrer"
              className="contact-item"
            >
              <span>GH</span>
              <div>
                <p className="label">GitHub</p>
                <p className="value">github.com/masliza2703</p>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/masliza-g-131511312"
              target="_blank"
              rel="noreferrer"
              className="contact-item"
            >
              <span>IN</span>
              <div>
                <p className="label">LinkedIn</p>
                <p className="value">Masliza Ghazali</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>(c) {new Date().getFullYear()} Masliza. Built with React & Vite.</p>
        {views > 0 && <p className="footer-views">{views} portfolio visits</p>}
      </footer>
      <Analytics />
    </>
  )
}

export default App
