import { useEffect, useRef } from 'react'
import { useTheme } from '../contexts/ThemeContext'

// Only active on non-touch (desktop) devices — no-op on mobile
export default function InteractiveBackground() {
  const { isDark } = useTheme()
  const followerRef = useRef(null)
  const isTouchDevice = useRef(typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches)

  useEffect(() => {
    if (isTouchDevice.current) return
    const move = (e) => {
      if (!followerRef.current) return
      followerRef.current.style.transform = `translate(${e.clientX - 192}px, ${e.clientY - 192}px)`
    }
    window.addEventListener('mousemove', move, { passive: true })
    return () => window.removeEventListener('mousemove', move)
  }, [])

  if (isTouchDevice.current) return null

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
    </div>
  )
}
