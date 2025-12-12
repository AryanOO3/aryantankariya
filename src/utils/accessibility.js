// Accessibility utilities and audit helpers

export const checkImageAlt = () => {
  const images = document.querySelectorAll('img')
  const imagesWithoutAlt = Array.from(images).filter(img => !img.alt || img.alt.trim() === '')
  
  if (imagesWithoutAlt.length > 0) {
    console.warn('Images without alt text found:', imagesWithoutAlt)
  }
  
  return imagesWithoutAlt.length === 0
}

export const checkHeadingStructure = () => {
  const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6')
  const headingLevels = Array.from(headings).map(h => parseInt(h.tagName.charAt(1)))
  
  let isValid = true
  let previousLevel = 0
  
  headingLevels.forEach((level, index) => {
    if (index === 0 && level !== 1) {
      console.warn('Page should start with h1')
      isValid = false
    }
    
    if (level > previousLevel + 1) {
      console.warn(`Heading level jumps from h${previousLevel} to h${level}`)
      isValid = false
    }
    
    previousLevel = level
  })
  
  return isValid
}

// Run basic accessibility audit
export const runAccessibilityAudit = () => {
  console.log('Running accessibility audit...')
  
  const results = {
    imageAlt: checkImageAlt(),
    headingStructure: checkHeadingStructure()
  }
  
  const passed = Object.values(results).every(result => result)
  
  console.log('Accessibility audit results:', results)
  console.log(passed ? '✅ All checks passed' : '❌ Some issues found')
  
  return results
}