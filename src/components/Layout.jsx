import { Outlet, Link, useLocation } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'
import ThemeToggle from './ThemeToggle'

export default function Layout() {
  const location = useLocation()
  const { isDark } = useTheme()

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true
    if (path !== '/' && location.pathname.startsWith(path)) return true
    return false
  }

  return (
    <div className="min-h-screen transition-all duration-700 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-dark-950 dark:via-dark-900 dark:to-primary-950 text-gray-900 dark:text-white relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary-500/10 to-accent-500/10 dark:from-primary-500/20 dark:to-accent-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-accent-500/8 to-secondary-500/8 dark:from-accent-500/15 dark:to-secondary-500/15 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-gradient-to-br from-primary-400/6 to-purple-400/6 dark:from-primary-400/12 dark:to-purple-400/12 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-gradient-to-tl from-pink-400/4 to-blue-400/4 dark:from-pink-400/8 dark:to-blue-400/8 rounded-full blur-2xl animate-bounce-gentle" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-32 h-32 bg-gradient-to-tr from-green-400/5 to-cyan-400/5 dark:from-green-400/10 dark:to-cyan-400/10 rounded-full blur-xl animate-pulse-glow" style={{animationDelay: '3s'}}></div>
      </div>
      
      {/* Skip to main content link */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-600 text-white px-4 py-2 rounded-lg z-50 backdrop-blur-sm"
      >
        Skip to main content
      </a>
      
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/20 dark:border-white/10 shadow-lg shadow-black/5" role="navigation" aria-label="Main navigation">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link 
                to="/" 
                className="text-2xl font-bold text-gradient hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-transparent rounded-lg px-3 py-2 shimmer-effect"
                aria-label="Portfolio home"
              >
                Portfolio
              </Link>
            </div>
            <div className="flex items-center space-x-2" role="menubar">
              <Link 
                to="/" 
                className={`relative px-5 py-2.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent btn-glow ${
                  isActive('/') 
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-glow hover:shadow-glow-lg' 
                    : 'text-black dark:text-blue-300 hover:text-blue-800 dark:hover:text-white glass hover:glass-strong'
                }`}
                role="menuitem"
                aria-current={isActive('/') ? 'page' : undefined}
              >
                Home
              </Link>
              <Link 
                to="/projects" 
                className={`relative px-5 py-2.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent btn-glow ${
                  isActive('/projects') 
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-glow hover:shadow-glow-lg' 
                    : 'text-black dark:text-blue-300 hover:text-blue-800 dark:hover:text-white glass hover:glass-strong'
                }`}
                role="menuitem"
                aria-current={isActive('/projects') ? 'page' : undefined}
              >
                Projects
              </Link>
              <Link 
                to="/resume" 
                className={`relative px-5 py-2.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent btn-glow ${
                  isActive('/resume') 
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-glow hover:shadow-glow-lg' 
                    : 'text-black dark:text-blue-300 hover:text-blue-800 dark:hover:text-white glass hover:glass-strong'
                }`}
                role="menuitem"
                aria-current={isActive('/resume') ? 'page' : undefined}
              >
                Resume
              </Link>
            </div>
          </div>
        </div>
      </nav>
      
      <main id="main-content" role="main" className="pt-20">
        <Outlet />
      </main>
      
      {/* Floating Theme Toggle */}
      <div className="fixed bottom-6 right-6 z-50">
        <ThemeToggle />
      </div>
      
      <footer className="relative glass border-t border-white/20 dark:border-white/10 mt-20 shadow-lg shadow-black/5" role="contentinfo">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="flex justify-center items-center space-x-6 mb-8">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary-500 to-accent-500"></div>
              <div className="w-3 h-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full animate-pulse-glow shadow-glow"></div>
              <div className="w-16 h-px bg-gradient-to-l from-transparent via-accent-500 to-primary-500"></div>
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