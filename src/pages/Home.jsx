import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { resumeData } from '../data/resume'
import PageTransition from '../components/PageTransition'
import CursorTrail from '../components/CursorTrail'

export default function Home() {
  const [showEmailModal, setShowEmailModal] = useState(false)
  const prefersReducedMotion = useReducedMotion()
  
  const animationProps = prefersReducedMotion 
    ? { initial: {}, animate: {}, transition: {} }
    : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 } }
  
  const delayedAnimationProps = prefersReducedMotion
    ? { initial: {}, animate: {}, transition: {} }
    : { initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.6, delay: 0.2 } }

  return (
    <PageTransition>
      <div className="relative min-h-screen flex items-center overflow-hidden">
        {/* Cursor with Trail */}
        <CursorTrail />
        
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute top-20 left-20 w-2 h-2 bg-primary-400/30 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 0 }}
          />
          <motion.div 
            className="absolute top-40 right-32 w-1 h-1 bg-accent-400/40 rounded-full"
            animate={{
              scale: [1, 2, 1],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          />
          <motion.div 
            className="absolute bottom-32 left-40 w-1.5 h-1.5 bg-primary-300/25 rounded-full"
            animate={{
              scale: [1, 1.8, 1],
              opacity: [0.25, 0.7, 0.25]
            }}
            transition={{ duration: 5, repeat: Infinity, delay: 2 }}
          />
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...animationProps} className="space-y-8">
              <div className="space-y-4">
                <motion.div 
                  className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-md rounded-2xl border border-blue-400/30 shadow-lg"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 25px rgba(59, 130, 246, 0.3)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.span 
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent text-sm font-bold flex items-center gap-2"
                  >
                    <motion.span
                      animate={{ 
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      👋
                    </motion.span>
                    Welcome to my portfolio
                  </motion.span>
                </motion.div>
                
                <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold leading-tight text-gray-900 dark:text-white">
                  Hi, I'm{' '}
                  <motion.span 
                    className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent inline-block"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {resumeData.personal.name}
                  </motion.span>
                </h1>
                
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg">
                  Full-stack developer crafting{' '}
                  <motion.span 
                    className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-semibold"
                    whileHover={{ scale: 1.05 }}
                  >
                    digital experiences
                  </motion.span>{' '}
                  that matter. Turning ideas into reality with code.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div 
                  whileHover={{ 
                    scale: 1.05,
                    rotateX: 5,
                    rotateY: 5
                  }} 
                  whileTap={{ scale: 0.95 }}
                  style={{ perspective: 1000 }}
                >
                  <Link
                    to="/projects"
                    className="group relative inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl font-semibold text-white shadow-glow hover:shadow-glow-lg transition-all duration-300 overflow-hidden btn-glow"
                  >
                    <motion.span 
                      className="relative z-10"
                      whileHover={{ x: 2 }}
                    >
                      View Projects
                    </motion.span>
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div
                      className="absolute top-0 left-0 w-full h-0.5 bg-white/30"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/resume"
                    className="group inline-flex items-center justify-center px-10 py-5 glass-strong border border-white/30 dark:border-white/20 rounded-2xl font-semibold text-gray-900 dark:text-white hover:glass transition-all duration-300 card-hover"
                  >
                    <span>View Resume</span>
                    <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div
              {...delayedAnimationProps}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <motion.div 
                  className="w-80 h-80 glass-strong rounded-full border border-white/20 flex items-center justify-center shadow-glow"
                  whileHover={{
                    scale: 1.1
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="w-64 h-64 bg-gradient-to-br from-primary-500 via-purple-500 to-accent-500 rounded-full shadow-glow-lg relative overflow-hidden"
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: "0 0 60px rgba(59, 130, 246, 0.5)"
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Profile Photo - replaces gradient */}
                    <img 
                      src="/profile-photo.jpg" 
                      alt="Profile" 
                      className="absolute inset-0 w-full h-full object-cover rounded-full z-20"
                      width="256"
                      height="256"
                      loading="eager"
                    />
                    
                    {/* Enhanced inner glow effect */}
                    <motion.div
                      className="absolute inset-4 bg-gradient-to-br from-white/30 via-white/10 to-transparent rounded-full"
                      animate={{
                        opacity: [0.4, 0.8, 0.4],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.div
                      className="absolute inset-8 bg-gradient-to-tl from-cyan-300/20 to-pink-300/20 rounded-full blur-sm"
                      animate={{
                        rotate: [0, -360]
                      }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    />
                  </motion.div>
                </motion.div>
                
                {/* Enhanced Floating elements with improved gradients */}
                <motion.div 
                  className="absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-br from-accent-400 via-pink-400 to-accent-600 rounded-full shadow-glow-accent"
                  animate={{ 
                    y: [-10, 10, -10],
                    rotate: [0, 180, 360]
                  }}
                  whileHover={{ scale: 1.4 }}
                  transition={{ 
                    y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 6, repeat: Infinity, ease: "linear" }
                  }}
                />
                <motion.div 
                  className="absolute -bottom-6 -left-6 w-8 h-8 bg-gradient-to-br from-primary-400 via-blue-400 to-primary-600 rounded-full shadow-glow"
                  animate={{ 
                    y: [10, -10, 10],
                    x: [-5, 5, -5]
                  }}
                  whileHover={{ scale: 1.5 }}
                  transition={{ 
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    x: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }}
                />
                <motion.div 
                  className="absolute top-1/2 -left-8 w-6 h-6 bg-gradient-to-br from-purple-400 via-indigo-400 to-pink-500 rounded-full shadow-glow"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div 
                  className="absolute top-1/4 -right-12 w-4 h-4 bg-gradient-to-br from-green-400 to-cyan-400 rounded-full shadow-glow"
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.3, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }}
                />
              </div>
            </motion.div>
          </div>
          
          {/* Contact Section */}
          <motion.section 
            {...animationProps}
            className="mt-32 text-center"
          >
            <motion.h2 
              className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Let's Connect
            </motion.h2>
            
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
              {[
                { href: `mailto:${resumeData.personal.email}`, label: 'Email', icon: '📧', isEmail: true },
                { href: resumeData.personal.linkedin, label: 'LinkedIn', icon: '💼', isEmail: false },
                { href: resumeData.personal.github, label: 'GitHub', icon: '🚀', isEmail: false }
              ].map((link, index) => (
                <motion.div
                  key={link.label}
                  onClick={() => link.isEmail ? setShowEmailModal(true) : window.open(link.href, '_blank')}
                  className="group flex flex-col items-center space-y-3 p-4 sm:p-6 rounded-2xl glass-strong border border-white/30 dark:border-white/20 hover:glass transition-all duration-300 card-hover shadow-glow cursor-pointer w-full sm:w-auto"
                  aria-label={`${link.label} contact`}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.span 
                    className="text-3xl"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {link.icon}
                  </motion.span>
                  <span className="text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300 font-semibold">{link.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
      
      {/* Email Modal */}
      {showEmailModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50" onClick={() => setShowEmailModal(false)}>
          <motion.div 
            className="glass-card rounded-3xl p-8 max-w-md mx-4 border border-white/20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-2xl font-bold text-black dark:text-white mb-4">Contact Me</h3>
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 mb-6">
                <p className="text-blue-600 dark:text-blue-400 font-mono text-lg">{resumeData.personal.email}</p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(resumeData.personal.email)
                    alert('Email copied to clipboard!')
                  }}
                  className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl transition-colors"
                >
                  Copy Email
                </button>
                <button
                  onClick={() => setShowEmailModal(false)}
                  className="flex-1 glass-strong border border-white/30 text-black dark:text-white px-4 py-2 rounded-xl hover:glass transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </PageTransition>
  )
}