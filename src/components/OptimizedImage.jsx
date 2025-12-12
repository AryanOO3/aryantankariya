import { useState } from 'react'

export default function OptimizedImage({ 
  src, 
  alt, 
  className = '', 
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  priority = false,
  ...props 
}) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  // Generate srcset for different sizes
  const generateSrcSet = (baseSrc) => {
    if (baseSrc.includes('placeholder')) {
      return `${baseSrc}&w=320 320w, ${baseSrc}&w=640 640w, ${baseSrc}&w=1024 1024w, ${baseSrc}&w=1600 1600w`
    }
    // For real images, you'd generate different sizes
    return baseSrc
  }

  const handleLoad = () => setIsLoaded(true)
  const handleError = () => setHasError(true)

  if (hasError) {
    return (
      <div className={`bg-gray-200 flex items-center justify-center ${className}`}>
        <span className="text-gray-500 text-sm">Image not found</span>
      </div>
    )
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      <img
        src={src}
        srcSet={generateSrcSet(src)}
        sizes={sizes}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />
    </div>
  )
}