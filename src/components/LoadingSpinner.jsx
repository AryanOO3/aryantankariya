import { motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'

export default function LoadingSpinner({ size = 'md' }) {
  const prefersReducedMotion = useReducedMotion()
  
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }
  
  if (prefersReducedMotion) {
    return (
      <div className={`${sizeClasses[size]} glass-strong rounded-full opacity-50 border border-primary-400/50`} />
    )
  }
  
  return (
    <div className="relative">
      {/* Glass background */}
      <div className={`${sizeClasses[size]} glass-strong rounded-full absolute inset-0`} />
      
      {/* Spinning border */}
      <motion.div
        className={`${sizeClasses[size]} border-2 border-transparent border-t-primary-400 border-r-accent-400 rounded-full relative z-10`}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
      
      {/* Inner glow */}
      <motion.div
        className={`${sizeClasses[size]} absolute inset-0 rounded-full bg-gradient-to-r from-primary-400/20 to-accent-400/20 blur-sm`}
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
    </div>
  )
}