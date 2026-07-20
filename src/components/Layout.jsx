import { useState, useEffect } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../contexts/ThemeContext'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { to: '/',        label: 'Home',     activeColor: 'from-blue-500 to-cyan-500',   ring: 'focus:ring-blue-500' },
  { to: '/projects',label: 'Projects', activeColor: 'from-blue-500 to-cyan-500',   ring: 'focus:ring-blue-500' },
  { to: '/resume',  label: 'Resume',   activeColor: 'from-blue-500 to-cyan-500',   ring: 'focus:ring-blue-500' },
  { to: '/design',  label: 'Design',   activeColor: 'from-pink-500 to-purple-500', ring: 'focus:ring-pink-500' },
]

export default function Layout() {
  const location = useLocation()
  const { isDark } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)

  // Close menu on route change
  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  // Close menu on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true
    if (path !== '/' && location.pathname.startsWith(path)) return true
    return false
  }

  return (
    <div className="min-h-screen transition-all duration-700 text-gray-900 dark:text-white relative">
      {/* Full-document background — covers entire scroll height, not just viewport */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-dark-950 dark:via-dark-900 dark:to-primary-950" />
      {/* Background blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary-500/10 to-accent-500/10 dark:from-primary-500/20 dark:to-accent-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-accent-500/8 to-secondary-500/8 dark:from-accent-500/15 dark:to-secondary-500/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-gradient-to-br from-primary-400/6 to-purple-400/6 dark:from-primary-400/12 dark:to-purple-400/12 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-gradient-to-tl from-pink-400/4 to-blue-400/4 dark:from-pink-400/8 dark:to-blue-400/8 rounded-full blur-2xl animate-bounce-gentle" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-32 h-32 bg-gradient-to-tr from-green-400/5 to-cyan-400/5 dark:from-green-400/10 dark:to-cyan-400/10 rounded-full blur-xl animate-pulse-glow" style={{ animationDelay: '3s' }} />
      </div>

      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-600 text-white px-4 py-2 rounded-lg z-50 backdrop-blur-sm">
        Skip to main content
      </a>

      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/20 dark:border-white/10 shadow-lg shadow-black/5" role="navigation" aria-label="Main navigation">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">

            {/* Logo */}
            <Link
              to="/"
              className="text-xl sm:text-2xl font-bold text-gradient hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-transparent rounded-lg px-2 py-1 shimmer-effect"
              aria-label="Portfolio home"
            >
              Portfolio
            </Link>

            {/* Desktop links */}
            <div className="hidden sm:flex items-center space-x-1 sm:space-x-2" role="menubar">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  role="menuitem"
                  aria-current={isActive(link.to) ? 'page' : undefined}
                  className={`relative px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 ${link.ring} focus:ring-offset-2 focus:ring-offset-transparent btn-glow text-sm sm:text-base ${
                    isActive(link.to)
                      ? `bg-gradient-to-r ${link.activeColor} text-white shadow-glow`
                      : 'text-black dark:text-blue-300 hover:text-blue-800 dark:hover:text-white glass hover:glass-strong'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile: theme toggle + hamburger */}
            <div className="flex sm:hidden items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setMenuOpen(o => !o)}
                className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 glass rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
              >
                <motion.span
                  className="block w-5 h-0.5 bg-current rounded-full origin-center"
                  animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="block w-5 h-0.5 bg-current rounded-full"
                  animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="block w-5 h-0.5 bg-current rounded-full origin-center"
                  animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.2 }}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="sm:hidden overflow-hidden border-t border-white/10"
            >
              <div className="px-4 py-3 flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={link.to}
                      className={`flex items-center px-4 py-3 rounded-2xl text-sm font-medium transition-all duration-300 ${
                        isActive(link.to)
                          ? `bg-gradient-to-r ${link.activeColor} text-white shadow-md`
                          : 'glass text-black dark:text-white/90 hover:glass-strong'
                      }`}
                    >
                      {link.label}
                      {isActive(link.to) && (
                        <span className="ml-auto w-1.5 h-1.5 rounded-full bg-white/80" />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main id="main-content" role="main" className="pt-16 sm:pt-20">
        <Outlet />
      </main>

      {/* Theme toggle — desktop only (mobile is in navbar) */}
      <div className="hidden sm:block fixed bottom-6 right-6 z-50">
        <ThemeToggle />
      </div>

      <footer className="relative glass border-t border-white/20 dark:border-white/10 mt-20 shadow-lg shadow-black/5" role="contentinfo">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="text-center">
            <div className="flex justify-center items-center space-x-6 mb-6">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary-500 to-accent-500" />
              <div className="w-3 h-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full animate-pulse-glow shadow-glow" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent via-accent-500 to-primary-500" />
            </div>
            <p className="text-black dark:text-blue-400 text-sm font-medium">
              © 2025 Aryan Tankariya. All rights reserved. | Full-Stack Developer
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
