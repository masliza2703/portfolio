import './App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import { Analytics } from '@vercel/analytics/react'

function SectionHeader({ title, subtitle }) {
  return (
    <div className="section-header">
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
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

  fetch("https://api.countapi.xyz/hit/masliza-portfolio/visits?cache=" + Date.now())
    .then((res) => res.json())
    .then((data) => setViews(data.value))
}, [])
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 60,
    })
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
              I have hands-on experience developing a web application using PHP with MVC
              architecture and MySQL, focusing on clean system structure, CRUD operations,
              and basic authentication.
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
              <li>📌 Information Systems Engineering student</li>
              <li>💻 PHP MVC + MySQL web development</li>
              <li>📄 SRS & SDD documentation experience</li>
              <li>🧪 Manual testing & test case design</li>
              <li>⚛️ Learning React & modern frontend</li>
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
          <div className="skills-container">
            <div className="skill-box">
              <h3>Frontend Development</h3>
              <div className="tags">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>React</span>
              </div>
            </div>
            <div className="skill-box">
              <h3>Backend Development</h3>
              <div className="tags">
                <span>PHP (MVC Structure)</span>
                <span>MySQL</span>
                <span>CRUD Operations</span>
              </div>
            </div>
            <div className="skill-box">
              <h3>Software Engineering</h3>
              <div className="tags">
                <span>System Analysis</span>
                <span>SRS Documentation</span>
                <span>SDD Documentation</span>
                <span>UML / Flow Design</span>
              </div>
            </div>
            <div className="skill-box">
              <h3>Testing & QA</h3>
              <div className="tags">
                <span>Manual Testing</span>
                <span>Test Case Design</span>
                <span>Bug Reporting</span>
              </div>
            </div>
            <div className="skill-box">
              <h3>Tools & Workflow</h3>
              <div className="tags">
                <span>Git & GitHub</span>
                <span>VS Code</span>
                <span>Canva</span>
                <span>Figma</span>
              </div>
            </div>
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
              Maryam Khadijah Group Sdn. Bhd, Penang | Sept 2025 – Feb 2026
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
          <div className="card">
            <h3>Online Booking System</h3>
            <p>
              A web-based application built with custom PHP MVC architecture (no framework)
              as part of my Information Systems Engineering coursework. The system uses
              MySQL for data management and follows separation of concerns across Model,
              View, and Controller layers including CRUD operations and basic authentication.
            </p>
            <div className="tags">
              <span>PHP (MVC)</span>
              <span>MySQL</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>Hostinger</span>
            </div>
            <a
              href="https://github.com/masliza2703/online-booking-system"
              target="_blank"
              rel="noreferrer"
              className="card-link"
            >
              View on GitHub →
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="contact" data-aos="fade-up">
        <div className="section-inner">
          <SectionHeader
            title="Let's Connect"
            subtitle="Feel free to reach out — I'm open to opportunities and collaboration."
          />
          <div className="contact-list">
            <a href="https://wa.me/60105653789?text=Hi%20Masliza,%20I%20saw%20your%20portfolio" className="contact-item" target="_blank" rel="noreferrer">
              <span>📞</span>
              <div>
                <p className="label">Whatsapp</p>
                <p className="value">010-565 3789</p>
              </div>
            </a>
            <a href="mailto:maslizaaaa@gmail.com" className="contact-item">
              <span>📧</span>
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
              <span>💻</span>
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
              <span>💼</span>
              <div>
                <p className="label">LinkedIn</p>
                <p className="value">Masliza Ghazali</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Masliza. Built with React & Vite.</p>
        <p> Portfolio Views: {views}</p>
      </footer>
      <Analytics />
    </>
  )
}

export default App
