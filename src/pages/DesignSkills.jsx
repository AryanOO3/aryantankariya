import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { designTools, designSkillAreas } from '../data/designs'
import PageTransition from '../components/PageTransition'
import InteractiveBackground from '../components/InteractiveBackground'

const levelColor = {
  Advanced: 'from-green-400 to-emerald-400',
  Proficient: 'from-blue-400 to-cyan-400',
  Intermediate: 'from-yellow-400 to-orange-400',
}

const levelWidth = {
  Advanced: '90%',
  Proficient: '75%',
  Intermediate: '55%',
}

export default function DesignSkills() {
  return (
    <PageTransition>
      <InteractiveBackground />
      <div className="min-h-screen py-20 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 glass-subtle rounded-full blur-3xl opacity-20" />
          <div className="absolute bottom-1/3 left-1/4 w-64 h-64 glass-subtle rounded-full blur-2xl opacity-25" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Back */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
            <div className="glass-subtle rounded-2xl p-2 inline-block">
              <Link to="/design" className="text-pink-400 hover:text-pink-300 px-4 py-2 inline-flex items-center group transition-colors duration-300">
                <svg className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Gallery
              </Link>
            </div>
          </motion.div>

          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-3xl p-6 sm:p-8 mb-12 text-center"
          >
            <h1 className="text-3xl sm:text-5xl font-bold mb-3 font-display">
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Design Skills & Tools
              </span>
            </h1>
            <p className="text-base sm:text-xl text-black/80 dark:text-white/80 max-w-2xl mx-auto font-body">
              An overview of the tools I work with and the design disciplines I practice.
            </p>
          </motion.div>

          {/* Tools */}
          <h2 className="text-xl sm:text-2xl font-bold mb-5 text-center">
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Tools I Use</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
            {designTools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.07 }}
                className="glass-card rounded-2xl p-5 sm:p-6 glass-hover"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br ${tool.color} flex items-center justify-center text-xl shadow-lg flex-shrink-0`}>
                    {tool.icon}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-black dark:text-white font-display truncate">{tool.name}</h3>
                    <p className="text-xs text-black/50 dark:text-white/50 truncate">{tool.category}</p>
                  </div>
                </div>

                <p className="text-sm text-black/70 dark:text-white/70 mb-4 font-body leading-relaxed">{tool.description}</p>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-black/50 dark:text-white/50">Proficiency</span>
                    <span className={`bg-gradient-to-r ${levelColor[tool.level]} bg-clip-text text-transparent font-semibold`}>
                      {tool.level}
                    </span>
                  </div>
                  <div className="h-1.5 glass-subtle rounded-full overflow-hidden border border-white/10">
                    <motion.div
                      className={`h-full rounded-full bg-gradient-to-r ${levelColor[tool.level]}`}
                      initial={{ width: 0 }}
                      animate={{ width: levelWidth[tool.level] }}
                      transition={{ duration: 0.8, delay: index * 0.07 + 0.3 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skill areas */}
          <h2 className="text-xl sm:text-2xl font-bold mb-5 text-center">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Skill Areas</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {designSkillAreas.map((area, index) => (
              <motion.div
                key={area.area}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className="glass-card rounded-2xl p-5 sm:p-6 glass-hover"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl sm:text-3xl">{area.icon}</span>
                  <h3 className="text-base sm:text-lg font-bold text-black dark:text-white font-display">{area.area}</h3>
                </div>
                <ul className="space-y-2">
                  {area.points.map((point, i) => (
                    <li key={i} className="flex items-start text-sm text-black/70 dark:text-white/70 font-body">
                      <span className="text-pink-400 mr-2 mt-0.5 flex-shrink-0">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
