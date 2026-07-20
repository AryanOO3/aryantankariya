import { useEffect, useState, useRef, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'

export default function DesignModal({ design, onClose }) {
  const isVideo = design.type === 'video'
  const [zoom, setZoom] = useState(1)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const dragStart = useRef(null)
  const lastOffset = useRef({ x: 0, y: 0 })
  const lastPinchDist = useRef(null)
  const MIN_ZOOM = 1
  const MAX_ZOOM = 4

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const clampOffset = useCallback((x, y, z) => {
    const max = (z - 1) * 200
    return { x: Math.max(-max, Math.min(max, x)), y: Math.max(-max, Math.min(max, y)) }
  }, [])

  // ── Mouse zoom / drag ────────────────────────────────────────────────────
  const handleWheel = (e) => {
    if (isVideo) return
    e.preventDefault()
    setZoom(prev => {
      const next = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, prev - e.deltaY * 0.001))
      if (next === MIN_ZOOM) setOffset({ x: 0, y: 0 })
      else setOffset(o => clampOffset(o.x, o.y, next))
      return next
    })
  }

  const handleMouseDown = (e) => {
    if (isVideo || zoom <= 1) return
    setIsDragging(true)
    dragStart.current = { x: e.clientX, y: e.clientY }
    lastOffset.current = offset
  }

  const handleMouseMove = (e) => {
    if (!isDragging || !dragStart.current) return
    const dx = e.clientX - dragStart.current.x
    const dy = e.clientY - dragStart.current.y
    setOffset(clampOffset(lastOffset.current.x + dx, lastOffset.current.y + dy, zoom))
  }

  const handleMouseUp = () => { setIsDragging(false); dragStart.current = null }

  const handleDoubleClick = () => {
    if (isVideo) return
    if (zoom > 1) { setZoom(1); setOffset({ x: 0, y: 0 }) }
    else setZoom(2.5)
  }

  // ── Touch pinch-to-zoom + drag ───────────────────────────────────────────
  const handleTouchStart = (e) => {
    if (isVideo) return
    if (e.touches.length === 2) {
      const dx = e.touches[0].clientX - e.touches[1].clientX
      const dy = e.touches[0].clientY - e.touches[1].clientY
      lastPinchDist.current = Math.hypot(dx, dy)
    } else if (e.touches.length === 1 && zoom > 1) {
      dragStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
      lastOffset.current = offset
    }
  }

  const handleTouchMove = (e) => {
    if (isVideo) return
    e.preventDefault()
    if (e.touches.length === 2 && lastPinchDist.current !== null) {
      const dx = e.touches[0].clientX - e.touches[1].clientX
      const dy = e.touches[0].clientY - e.touches[1].clientY
      const dist = Math.hypot(dx, dy)
      const delta = dist - lastPinchDist.current
      lastPinchDist.current = dist
      setZoom(prev => {
        const next = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, prev + delta * 0.01))
        if (next === MIN_ZOOM) setOffset({ x: 0, y: 0 })
        return next
      })
    } else if (e.touches.length === 1 && dragStart.current && zoom > 1) {
      const dx = e.touches[0].clientX - dragStart.current.x
      const dy = e.touches[0].clientY - dragStart.current.y
      setOffset(clampOffset(lastOffset.current.x + dx, lastOffset.current.y + dy, zoom))
    }
  }

  const handleTouchEnd = () => {
    lastPinchDist.current = null
    dragStart.current = null
  }

  const modal = (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex items-center justify-center p-2 sm:p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-black/75 backdrop-blur-md" />

        <motion.div
          className="relative z-10 w-full max-w-4xl glass-card rounded-2xl sm:rounded-3xl shadow-2xl"
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: 'spring', stiffness: 320, damping: 32 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-white/10">
            <div className="flex items-center gap-2 min-w-0">
              <div className="min-w-0">
                <h3 className="text-sm sm:text-lg font-bold text-black dark:text-white font-display truncate">{design.title}</h3>
                <span className="text-xs px-2 py-0.5 glass-subtle rounded-full text-primary-400 border border-primary-500/30">
                  {design.category}
                </span>
              </div>
              {isVideo && (
                <span className="flex-shrink-0 text-xs px-2 py-0.5 bg-pink-500/20 rounded-full text-pink-400 border border-pink-500/30">
                  Video
                </span>
              )}
            </div>

            <div className="flex items-center gap-2 flex-shrink-0 ml-2">
              {!isVideo && (
                <div className="hidden sm:flex items-center gap-1.5 glass-subtle rounded-xl px-3 py-1.5 border border-white/10">
                  <button
                    onClick={() => { const n = Math.max(MIN_ZOOM, zoom - 0.5); setZoom(n); if (n === 1) setOffset({ x: 0, y: 0 }) }}
                    className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors text-lg leading-none w-5 text-center"
                    aria-label="Zoom out"
                  >−</button>
                  <span className="text-xs text-black/70 dark:text-white/70 w-9 text-center">{Math.round(zoom * 100)}%</span>
                  <button
                    onClick={() => setZoom(p => Math.min(MAX_ZOOM, p + 0.5))}
                    className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors text-lg leading-none w-5 text-center"
                    aria-label="Zoom in"
                  >+</button>
                </div>
              )}
              <button
                onClick={onClose}
                className="w-8 h-8 flex items-center justify-center glass-subtle rounded-full border border-white/10 text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors"
                aria-label="Close"
              >✕</button>
            </div>
          </div>

          {/* Media */}
          <div
            className="relative bg-black/30"
            style={{
              height: 'min(55vh, 480px)',
              overflow: 'hidden',
              cursor: isVideo ? 'default' : zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'zoom-in',
              touchAction: isVideo ? 'auto' : 'none',
            }}
            onWheel={handleWheel}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onDoubleClick={handleDoubleClick}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {isVideo ? (
              <video
                src={design.video}
                className="w-full h-full object-contain"
                style={{ display: 'block' }}
                autoPlay
                muted
                loop
                playsInline
                controls
              />
            ) : (
              <>
                <img
                  src={design.image}
                  alt={design.title}
                  className="select-none"
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    maxWidth: '100%',
                    maxHeight: '100%',
                    width: 'auto',
                    height: 'auto',
                    transform: `translate(-50%, -50%) scale(${zoom}) translate(${offset.x / zoom}px, ${offset.y / zoom}px)`,
                    transition: isDragging ? 'none' : 'transform 0.15s ease',
                  }}
                  draggable={false}
                />
                {zoom === 1 && (
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 glass-subtle rounded-full text-xs text-white/50 border border-white/10 pointer-events-none whitespace-nowrap">
                    <span className="hidden sm:inline">Scroll or double-click to zoom</span>
                    <span className="sm:hidden">Pinch or double-tap to zoom</span>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Footer */}
          <div className="px-4 sm:px-6 py-3 sm:py-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
            <p className="text-black/70 dark:text-white/70 text-xs sm:text-sm flex-1 leading-relaxed">
              {design.description || `${design.category} design work`}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {design.tools.map(tool => (
                <span key={tool} className="px-2.5 py-0.5 glass-subtle text-primary-400 text-xs rounded-full border border-primary-500/30">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )

  return createPortal(modal, document.body)
}
