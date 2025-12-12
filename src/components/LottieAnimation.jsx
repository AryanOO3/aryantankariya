import { lazy, Suspense } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'

// Lazy load Lottie to reduce initial bundle size
const Lottie = lazy(() => import('lottie-react'))

export default function LottieAnimation({ animationData, className = '', fallback = null }) {
  const prefersReducedMotion = useReducedMotion()
  
  // Don't load animation if user prefers reduced motion
  if (prefersReducedMotion) {
    return fallback || <div className={className} />
  }
  
  return (
    <Suspense fallback={fallback || <div className={className} />}>
      <Lottie
        animationData={animationData}
        className={className}
        loop={true}
        autoplay={true}
      />
    </Suspense>
  )
}