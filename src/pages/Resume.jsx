import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { resumeData } from '../data/resume'
import PageTransition from '../components/PageTransition'
import InteractiveBackground from '../components/InteractiveBackground'

export default function Resume() {
  const { personal, summary, experience, education, skills, projects } = resumeData

  return (
    <PageTransition>
      <InteractiveBackground />
      <div className="min-h-screen py-20 relative">
        {/* Background pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-gradient-to-br from-primary-500/8 to-accent-500/8 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-60 h-60 bg-gradient-to-br from-accent-500/8 to-secondary-500/8 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 right-1/3 w-40 h-40 bg-gradient-to-br from-secondary-500/8 to-primary-500/8 rounded-full blur-xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sticky TOC */}
        <div className="lg:w-64 lg:sticky lg:top-8 lg:self-start">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl">
            <h3 className="font-bold text-primary-400 mb-6">Contents</h3>
            <nav className="space-y-3">
              <a href="#contact" className="block text-sm text-black/80 dark:text-gray-300 hover:text-primary-400 transition-colors duration-300">Contact</a>
              <a href="#summary" className="block text-sm text-black/80 dark:text-gray-300 hover:text-primary-400 transition-colors duration-300">Summary</a>
              <a href="#experience" className="block text-sm text-black/80 dark:text-gray-300 hover:text-primary-400 transition-colors duration-300">Experience</a>
              <a href="#education" className="block text-sm text-black/80 dark:text-gray-300 hover:text-primary-400 transition-colors duration-300">Education</a>
              <a href="#skills" className="block text-sm text-black/80 dark:text-gray-300 hover:text-primary-400 transition-colors duration-300">Skills</a>
              <a href="#projects" className="block text-sm text-black/80 dark:text-gray-300 hover:text-primary-400 transition-colors duration-300">Projects</a>
            </nav>
            <div className="mt-8 space-y-3">
              <button
                onClick={() => window.open('/resume.pdf', '_blank')}
                className="block w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-center py-3 px-4 rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                Print View
              </button>
              <a
                href="/resume.pdf"
                download="Aryan_Tankariya_Resume.pdf"
                className="block w-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-center py-3 px-4 rounded-xl hover:bg-white/20 transition-all duration-300"
                onClick={(e) => {
                  fetch('/resume.pdf', { method: 'HEAD' })
                    .catch(() => {
                      e.preventDefault()
                      alert('Resume PDF not found. Please add resume.pdf to the public folder.')
                    })
                }}
              >
                Download PDF
              </a>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold mb-4 font-display">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {personal.name}
              </span>
            </h1>
            <p className="text-2xl text-black/80 dark:text-white/80 mb-12 font-body">{personal.title}</p>
          </motion.div>

          {/* Contact */}
          <section id="contact" className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-primary-400 mb-6 font-display">Contact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <p className="text-black/80 dark:text-gray-300">Email: <a href={`mailto:${personal.email}`} className="text-primary-400 hover:text-primary-300 transition-colors duration-300">{personal.email}</a></p>
                <p className="text-black/80 dark:text-gray-300">Phone: <span className="text-black dark:text-white">{personal.phone}</span></p>
                <p className="text-black/80 dark:text-gray-300">Location: <span className="text-black dark:text-white">{personal.location}</span></p>
              </div>
              <div className="space-y-3">
                <p className="text-black/80 dark:text-gray-300">Website: <a href={personal.website} className="text-primary-400 hover:text-primary-300 transition-colors duration-300">{personal.website}</a></p>
                <p className="text-black/80 dark:text-gray-300">LinkedIn: <a href={personal.linkedin} className="text-primary-400 hover:text-primary-300 transition-colors duration-300">Profile</a></p>
                <p className="text-black/80 dark:text-gray-300">GitHub: <a href={personal.github} className="text-primary-400 hover:text-primary-300 transition-colors duration-300">Profile</a></p>
              </div>
            </div>
          </section>

          {/* Summary */}
          <section id="summary" className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-primary-400 mb-6 font-display">Summary</h2>
            <p className="text-black/80 dark:text-white/80 leading-relaxed text-lg font-body">{summary}</p>
          </section>

          {/* Experience */}
          <section id="experience" className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-primary-400 mb-8 font-display">Experience</h2>
            <div className="space-y-8">
              {experience.map((job) => (
                <div key={job.id} className="border-l-4 border-primary-500/50 pl-6 bg-white/5 rounded-r-xl p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-black dark:text-white font-display">{job.position}</h3>
                      <p className="text-lg text-primary-400 font-body">{job.company}</p>
                    </div>
                    <div className="text-black/60 dark:text-gray-400 text-sm">
                      <p>{job.startDate} - {job.endDate}</p>
                      <p>{job.location}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {job.description.map((item, index) => (
                      <li key={index} className="text-black/80 dark:text-gray-300 flex items-start">
                        <span className="text-primary-400 mr-3 mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section id="education" className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-primary-400 mb-8 font-display">Education</h2>
            <div className="space-y-6">
              {education.map((edu) => (
                <div key={edu.id} className="border-l-4 border-accent-500/50 pl-6 bg-white/5 rounded-r-xl p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div>
                      <h3 className="text-xl font-bold text-black dark:text-white">{edu.degree}</h3>
                      <p className="text-lg text-accent-400">{edu.institution}</p>
                      {edu.gpa && <p className="text-black/80 dark:text-gray-300">GPA: {edu.gpa}</p>}
                    </div>
                    <div className="text-black/60 dark:text-gray-400 text-sm">
                      <p>{edu.startDate} - {edu.endDate}</p>
                      <p>{edu.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section id="skills" className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-primary-400 mb-8 font-display">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category}>
                  <h3 className="text-lg font-bold text-black dark:text-white mb-4">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-primary-500/20 text-primary-300 text-sm rounded-full border border-primary-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section id="projects" className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-primary-400 mb-8 font-display">Featured Projects</h2>
            <div className="space-y-6">
              {projects.map((project, index) => (
                <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-lg font-bold text-black dark:text-white mb-2">
                    <Link to={project.link} className="hover:text-primary-400 transition-colors duration-300">
                      {project.name}
                    </Link>
                  </h3>
                  <p className="text-black/80 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-accent-500/20 text-accent-300 text-xs rounded-full border border-accent-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
        </div>
      </div>
    </PageTransition>
  )
}