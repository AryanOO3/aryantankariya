import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { completedProjects, wipProjects } from '../data/projects'
import OptimizedImage from '../components/OptimizedImage'
import PageTransition from '../components/PageTransition'
import InteractiveBackground from '../components/InteractiveBackground'

export default function Projects() {
  return (
    <PageTransition>
      <InteractiveBackground />
      <div className="min-h-screen py-20 relative">
        {/* Background glass elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 glass-subtle rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-1/4 right-1/3 w-64 h-64 glass-subtle rounded-full blur-2xl opacity-30"></div>
          <div className="absolute top-2/3 right-1/4 w-48 h-48 glass-subtle rounded-full blur-xl opacity-25"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="glass-card rounded-3xl p-8 mx-auto max-w-4xl">
              <h1 className="text-5xl font-bold mb-6 font-display">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  My Projects
                </span>
              </h1>
              <p className="text-xl text-black/80 dark:text-white/80 max-w-2xl mx-auto font-body">
                A collection of projects that showcase my skills and passion for creating innovative solutions
              </p>
            </div>
          </motion.div>
          
          {/* Completed Projects */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
                Completed Projects
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
              {completedProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="group relative"
                >
                  <Link to={`/projects/${project.slug}`} aria-label={`View ${project.title} project details`} className="block">
                    <div className="relative glass-card rounded-3xl overflow-hidden glass-hover group-hover:border-primary-500/50">
                      <div className="relative overflow-hidden">
                        <OptimizedImage
                          src={project.image}
                          alt={`${project.title} project screenshot`}
                          className="w-full h-56 object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent"></div>
                      </div>
                      
                      <div className="p-6 space-y-4">
                        <h3 className="text-xl font-bold text-black dark:text-white mb-2 group-hover:text-primary-400 transition-colors duration-300 font-display">
                          {project.title}
                        </h3>
                        
                        <p className="text-black/80 dark:text-white/80 text-sm leading-relaxed">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 glass-subtle text-primary-300 text-xs rounded-full border border-primary-500/30"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span 
                              className="px-3 py-1 glass-subtle text-black/60 dark:text-white/60 text-xs rounded-full border border-white/30"
                            >
                              +{project.technologies.length - 3}
                            </span>
                          )}
                        </div>
                        
                        <div className="flex items-center justify-between pt-4 border-t border-white/10">
                          <div className="flex gap-4">
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors duration-300"
                            >
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                              </svg>
                            </a>
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary-400 hover:text-primary-300 transition-colors duration-300"
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                          </div>
                          
                          <span className="group/link flex items-center text-sm text-black/60 dark:text-white/60 hover:text-primary-400 transition-colors duration-300">
                            <span>Details</span>
                            <svg className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Work in Progress Projects */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
                Work in Progress
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
              {wipProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="group relative"
                >
                  <Link to={`/projects/${project.slug}`} aria-label={`View ${project.title} project details`} className="block">
                    <div className="relative glass-card rounded-3xl overflow-hidden glass-hover group-hover:border-primary-500/50">
                      <div className="relative overflow-hidden">
                        <OptimizedImage
                          src={project.image}
                          alt={`${project.title} project screenshot`}
                          className="w-full h-56 object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent"></div>
                      </div>
                    
                      <div className="p-6 space-y-4">
                        <h3 className="text-xl font-bold text-black dark:text-white mb-2 group-hover:text-primary-400 transition-colors duration-300 font-display">
                          {project.title}
                        </h3>
                        
                        <p className="text-black/80 dark:text-white/80 text-sm leading-relaxed">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 glass-subtle text-primary-300 text-xs rounded-full border border-primary-500/30"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span 
                              className="px-3 py-1 glass-subtle text-black/60 dark:text-white/60 text-xs rounded-full border border-white/30"
                            >
                              +{project.technologies.length - 3}
                            </span>
                          )}
                        </div>
                        
                        <div className="flex items-center justify-between pt-4 border-t border-white/10">
                          <div className="flex gap-4">
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors duration-300"
                            >
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                              </svg>
                            </a>
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary-400 hover:text-primary-300 transition-colors duration-300"
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                          </div>
                          
                          <span className="group/link flex items-center text-sm text-black/60 dark:text-white/60 hover:text-primary-400 transition-colors duration-300">
                            <span>Details</span>
                            <svg className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}