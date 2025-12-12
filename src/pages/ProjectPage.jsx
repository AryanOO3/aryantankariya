import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getProjectBySlug } from '../data/projects'
import OptimizedImage from '../components/OptimizedImage'
import PageTransition from '../components/PageTransition'
import InteractiveBackground from '../components/InteractiveBackground'

export default function ProjectPage() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  if (!project) {
    return (
      <PageTransition>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white mb-6">Project not found</h1>
            <Link to="/projects" className="text-primary-400 hover:text-primary-300 inline-flex items-center group transition-colors duration-300">
              <svg className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Projects
            </Link>
          </div>
        </div>
      </PageTransition>
    )
  }

  return (
    <PageTransition>
      <InteractiveBackground />
      <div className="min-h-screen py-20 relative">
        {/* Background pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-primary-500/8 to-accent-500/8 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-gradient-to-br from-accent-500/8 to-secondary-500/8 rounded-full blur-2xl"></div>
          <div className="absolute top-2/3 left-1/2 w-32 h-32 bg-gradient-to-br from-secondary-500/8 to-primary-500/8 rounded-full blur-xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="glass-subtle rounded-2xl p-2 mb-8 inline-block"
              whileHover={{ scale: 1.02 }}
            >
              <Link to="/projects" className="text-primary-400 hover:text-primary-300 px-4 py-2 inline-flex items-center group transition-colors duration-300">
                <svg className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Projects
              </Link>
            </motion.div>
            
            <div className="glass-card rounded-3xl p-8 mb-12">
              <h1 className="text-5xl font-bold mb-6 font-display">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {project.title}
                </span>
              </h1>
              <p className="text-xl text-black/80 dark:text-white/80 mb-8 leading-relaxed font-body">{project.description}</p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                {project.technologies.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="px-4 py-2 glass-subtle text-primary-300 text-sm rounded-full border border-primary-500/30 glass-hover"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 glass-strong rounded-xl text-white glass-hover"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View Code
                </motion.a>
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </motion.a>
              </div>
            </div>


            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <motion.div 
                  className="glass-card rounded-3xl p-6 mb-12"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="relative">
                    <OptimizedImage
                      src={project.image}
                      alt={`${project.title} main screenshot`}
                      className="w-full rounded-2xl shadow-2xl shadow-primary-500/20"
                      sizes="(max-width: 1024px) 100vw, 66vw"
                      priority={true}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/20 to-transparent rounded-2xl"></div>
                  </div>
                </motion.div>
                
                {project.screenshots && project.screenshots.length > 0 && (
                  <div className="glass-card rounded-3xl p-8 mb-12">
                    <h3 className="text-2xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-display">Screenshots</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {project.screenshots.map((screenshot, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                          className="glass-subtle rounded-2xl p-4 glass-hover"
                        >
                          <OptimizedImage
                            src={screenshot}
                            alt={`${project.title} screenshot ${index + 1}`}
                            className="w-full rounded-xl shadow-lg"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <div className="space-y-8">
                <motion.div 
                  className="glass-card rounded-2xl p-6 glass-hover"
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-xl font-bold text-primary-400 mb-4 font-display">Role</h3>
                  <p className="text-black/80 dark:text-white/80 font-body">{project.role}</p>
                </motion.div>
                
                <motion.div 
                  className="glass-card rounded-2xl p-6 glass-hover"
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="text-xl font-bold text-primary-400 mb-4 font-display">Responsibilities</h3>
                  <ul className="space-y-3">
                    {project.responsibilities.map((responsibility, index) => (
                      <motion.li 
                        key={index} 
                        className="text-black/80 dark:text-white/80 flex items-start font-body"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                      >
                        <span className="text-primary-400 mr-3 mt-1">•</span>
                        {responsibility}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
                
                <motion.div 
                  className="glass-card rounded-2xl p-6 glass-hover"
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h3 className="text-xl font-bold text-accent-400 mb-4 font-display">Key Metrics</h3>
                  <ul className="space-y-3">
                    {project.metrics.map((metric, index) => (
                      <motion.li 
                        key={index} 
                        className="text-black/80 dark:text-white/80 flex items-start font-body"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                      >
                        <span className="text-accent-400 mr-3 mt-1">✓</span>
                        {metric}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  )
}