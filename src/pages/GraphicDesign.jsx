import { useState, useRef, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { designs, designCategories } from '../data/designs'
import { useTheme } from '../contexts/ThemeContext'
import PageTransition from '../components/PageTransition'
import DesignModal from '../components/DesignModal'

function DesignCard({ design, onClick, isDark }) {
  const [loaded, setLoaded] = useState(false)
  const [inView, setInView] = useState(false)
  const ref = useRef(null)

  const handleIntersect = useCallback(([entry], observer) => {
    if (entry.isIntersecting) { setInView(true); observer.disconnect() }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersect, { rootMargin: '150px' })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [handleIntersect])

  return (
    <div
      ref={ref}
      className="group relative glass-card rounded-3xl overflow-hidden cursor-pointer"
      style={{ transform: 'translateZ(0)' }}
      onClick={onClick}
    >
      {/* Fixed-height thumbnail — never shifts */}
      <div className="relative h-52 sm:h-56 bg-black/10 overflow-hidden">
        {/* Skeleton shimmer */}
        {!loaded && (
          <div className={`absolute inset-0 animate-pulse ${isDark ? 'bg-white/8' : 'bg-black/8'}`}>
            <div className={`absolute inset-0 bg-gradient-to-r ${isDark ? 'from-white/0 via-white/6 to-white/0' : 'from-black/0 via-black/5 to-black/0'} animate-shimmer`} />
          </div>
        )}

        {inView && (
          design.type === 'video' ? (
            <video
              src={design.video}
              className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
                loaded ? 'opacity-100' : 'opacity-0'
              }`}
              autoPlay muted loop playsInline preload="none"
              onCanPlay={() => setLoaded(true)}
            />
          ) : (
            <img
              src={design.image}
              alt={design.title}
              className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
                loaded ? 'opacity-100' : 'opacity-0'
              }`}
              loading="lazy"
              decoding="async"
              onLoad={() => setLoaded(true)}
            />
          )
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />

        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="glass-strong rounded-full p-3 border border-white/30">
            {design.type === 'video' ? (
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
            ) : (
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              </svg>
            )}
          </div>
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="px-2.5 py-1 glass-strong text-white text-xs rounded-full border border-white/20">{design.category}</span>
          {design.type === 'video' && (
            <span className="px-2.5 py-1 bg-pink-500/80 text-white text-xs rounded-full">Video</span>
          )}
        </div>
      </div>

      {/* Card footer */}
      <div className="p-4 sm:p-5">
        <h3 className="font-bold text-sm sm:text-base text-black dark:text-white group-hover:text-pink-400 transition-colors duration-300 font-display truncate">
          {design.title}
        </h3>
        <div className="flex flex-wrap gap-1.5 mt-2">
          {design.tools.map(tool => (
            <span key={tool} className="px-2 py-0.5 glass-subtle text-primary-400 text-xs rounded-full border border-primary-500/30">
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function GraphicDesign() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedDesign, setSelectedDesign] = useState(null)
  const { isDark } = useTheme()

  const filtered = activeCategory === 'All'
    ? designs
    : designs.filter(d => d.category === activeCategory)

  return (
    <PageTransition>
      <div className="min-h-screen py-20 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 glass-subtle rounded-full blur-3xl opacity-20" />
          <div className="absolute bottom-1/4 right-1/3 w-64 h-64 glass-subtle rounded-full blur-2xl opacity-30" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-10"
          >
            <div className="glass-card rounded-3xl p-6 sm:p-8 mx-auto max-w-4xl">
              <h1 className="text-4xl sm:text-5xl font-bold mb-3 font-display">
                <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Graphic Design
                </span>
              </h1>
              <p className="text-base sm:text-xl text-black/80 dark:text-white/80 max-w-2xl mx-auto font-body">
                A visual gallery of my design work across branding, social media, print, and UI/UX.
              </p>
              <Link
                to="/design/skills"
                className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl text-white text-sm font-semibold shadow-lg transition-all duration-300"
              >
                <span>View Tools & Skills</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </motion.div>

          {/* Category filter — scrollable on mobile */}
          <div className="mb-10">
            <div className="flex gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:justify-center sm:overflow-visible scrollbar-hide">
              {designCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 btn-glow ${
                    activeCategory === cat
                      ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg shadow-pink-500/25'
                      : 'glass glass-hover text-black dark:text-white/80 border border-white/20'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((design, index) => (
              <motion.div
                key={design.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.3, delay: Math.min((index % 3) * 0.06, 0.12) }}
              >
                <DesignCard design={design} onClick={() => setSelectedDesign(design)} isDark={isDark} />
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-black/50 dark:text-white/40">No designs in this category yet.</div>
          )}
        </div>
      </div>

      {selectedDesign && (
        <DesignModal design={selectedDesign} onClose={() => setSelectedDesign(null)} />
      )}
    </PageTransition>
  )
}
