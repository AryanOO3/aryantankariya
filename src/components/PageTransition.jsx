import { motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'

export default function PageTransition({ children, className = '' }) {
  const prefersReducedMotion = useReducedMotion()
  
  const pageVariants = prefersReducedMotion ? {} : {
    initial: { 
      opacity: 0, 
      scale: 0.95,
      rotateX: -10,
      y: 50
    },
    in: { 
      opacity: 1, 
      scale: 1,
      rotateX: 0,
      y: 0
    },
    out: { 
      opacity: 0, 
      scale: 1.05,
      rotateX: 10,
      y: -50
    }
  }
  
  const pageTransition = prefersReducedMotion ? {} : {
    type: 'spring',
    stiffness: 300,
    damping: 30,
    duration: 0.6
  }
  
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className={className}
      style={{ perspective: 1000 }}
    >
      {children}
    </motion.div>
  )
}