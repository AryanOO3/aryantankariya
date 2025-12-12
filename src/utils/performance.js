// Performance monitoring utilities

export const measurePageLoad = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    const navigation = performance.getEntriesByType('navigation')[0]
    
    const metrics = {
      domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
      loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
      firstPaint: 0,
      firstContentfulPaint: 0
    }
    
    // Get paint metrics
    const paintEntries = performance.getEntriesByType('paint')
    paintEntries.forEach(entry => {
      if (entry.name === 'first-paint') {
        metrics.firstPaint = entry.startTime
      } else if (entry.name === 'first-contentful-paint') {
        metrics.firstContentfulPaint = entry.startTime
      }
    })
    
    console.log('Performance Metrics:', metrics)
    return metrics
  }
}

export const measureLCP = () => {
  if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      const lastEntry = entries[entries.length - 1]
      console.log('Largest Contentful Paint:', lastEntry.startTime)
    })
    
    observer.observe({ entryTypes: ['largest-contentful-paint'] })
  }
}

export const measureCLS = () => {
  if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
    let clsValue = 0
    
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!entry.hadRecentInput) {
          clsValue += entry.value
        }
      }
      console.log('Cumulative Layout Shift:', clsValue)
    })
    
    observer.observe({ entryTypes: ['layout-shift'] })
  }
}

// Initialize performance monitoring
export const initPerformanceMonitoring = () => {
  // Disabled to reduce console noise
  // if (process.env.NODE_ENV === 'development') {
  //   measurePageLoad()
  //   measureLCP()
  //   measureCLS()
  // }
}