import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../contexts/ThemeContext'

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-14 h-14 rounded-full glass-strong shadow-2xl hover:shadow-primary-500/25 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 overflow-hidden group glass-hover"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {/* Enhanced background gradient with glass effect */}
      <motion.div
        className="absolute inset-1 rounded-full bg-gradient-to-br from-yellow-400/80 via-orange-500/80 to-pink-500/80 backdrop-blur-sm"
        animate={{
          opacity: isDark ? 0 : 1,
          scale: isDark ? 0.8 : 1,
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
      
      <motion.div
        className="absolute inset-1 rounded-full bg-gradient-to-br from-indigo-900/80 via-purple-900/80 to-gray-900/80 backdrop-blur-sm"
        animate={{
          opacity: isDark ? 1 : 0,
          scale: isDark ? 1 : 0.8,
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
      
      {/* Stars for dark mode */}
      {isDark && (
        <>
          <motion.div
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{ top: '20%', left: '25%' }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0 }}
          />
          <motion.div
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{ top: '30%', right: '20%' }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />
          <motion.div
            className="absolute w-0.5 h-0.5 bg-white rounded-full"
            style={{ bottom: '25%', left: '30%' }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          />
        </>
      )}
      
      <AnimatePresence mode="wait">
        {!isDark ? (
          <motion.div
            key="sun"
            className="absolute inset-0 flex items-center justify-center"
            initial={{ x: -50, rotate: -180, opacity: 0 }}
            animate={{ x: 0, rotate: 0, opacity: 1 }}
            exit={{ x: 50, rotate: 180, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="relative w-6 h-6">
              {/* Sun rays - behind */}
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-0.5 h-2 bg-yellow-400 rounded-full z-0"
                  style={{
                    top: '-5px',
                    left: '50%',
                    transformOrigin: '50% 17px',
                    transform: `translateX(-50%) rotate(${i * 45}deg)`,
                  }}
                />
              ))}
              {/* Sun center - in front with glass effect */}
              <div className="relative z-10 w-6 h-6 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full shadow-lg backdrop-blur-sm border border-yellow-200/30" />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            className="absolute inset-0 flex items-center justify-center"
            initial={{ x: 50, rotate: 180, opacity: 0 }}
            animate={{ x: 0, rotate: 0, opacity: 1 }}
            exit={{ x: -50, rotate: -180, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="relative w-6 h-6">
              <div className="w-6 h-6 bg-gray-200 rounded-full shadow-lg" />
              <div className="absolute top-0.5 right-0.5 w-4 h-4 bg-gray-300 rounded-full" />
              <div className="absolute top-1.5 right-1.5 w-0.5 h-0.5 bg-gray-400 rounded-full" />
              <div className="absolute bottom-1.5 left-1.5 w-0.5 h-0.5 bg-gray-400 rounded-full" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Enhanced ripple effect */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-white/30"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Glass shimmer effect */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
        animate={{
          x: ['-100%', '100%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </motion.button>
  )
}