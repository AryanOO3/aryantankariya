import { useEffect, useRef } from 'react'
import { useTheme } from '../contexts/ThemeContext'

export default function InteractiveBackground() {
  const { isDark } = useTheme()
  const followerRef = useRef(null)

  useEffect(() => {
    const move = (e) => {
      if (!followerRef.current) return
      followerRef.current.style.transform = `translate(${e.clientX - 192}px, ${e.clientY - 192}px)`
    }
    window.addEventListener('mousemove', move, { passive: true })
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div
        ref={followerRef}
        className={`absolute w-96 h-96 rounded-full blur-3xl will-change-transform ${
          isDark
            ? 'bg-gradient-to-br from-blue-500/5 to-purple-500/5'
            : 'bg-gradient-to-br from-blue-200/20 to-white/30'
        }`}
        style={{ top: 0, left: 0 }}
      />
      {isDark ? (
        <>
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white/60 rounded-full animate-pulse" />
          <div className="absolute top-1/3 right-1/3 w-0.5 h-0.5 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-white/50 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-2/3 right-1/4 w-0.5 h-0.5 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '3s' }} />
          <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-white/45 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-1/3 right-1/6 w-0.5 h-0.5 bg-white/35 rounded-full animate-pulse" style={{ animationDelay: '2.5s' }} />
        </>
      ) : (
        <>
          <div className="absolute top-1/4 left-1/4 w-16 h-8 bg-white/40 rounded-full blur-sm" />
          <div className="absolute top-1/4 left-1/4 w-12 h-6 bg-white/30 rounded-full blur-sm translate-x-4 -translate-y-1" />
          <div className="absolute top-1/3 right-1/3 w-20 h-10 bg-white/35 rounded-full blur-sm" />
          <div className="absolute bottom-1/4 left-1/3 w-14 h-7 bg-white/45 rounded-full blur-sm" />
          <div className="absolute top-2/3 right-1/4 w-18 h-9 bg-white/30 rounded-full blur-sm" />
        </>
      )}
    </div>
  )
}
