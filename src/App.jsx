import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { AnimatePresence } from 'framer-motion'
import Layout from './components/Layout'

// Lazy load pages
const Home = lazy(() => import('./pages/Home'))
const Projects = lazy(() => import('./pages/Projects'))
const ProjectPage = lazy(() => import('./pages/ProjectPage'))
const Resume = lazy(() => import('./pages/Resume'))
const ResumePrint = lazy(() => import('./pages/ResumePrint'))

// Loading component
const LoadingSpinner = lazy(() => import('./components/LoadingSpinner'))

const PageLoader = () => (
  <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
    <Suspense fallback={<div className="w-8 h-8 bg-blue-600 rounded-full opacity-50" />}>
      <LoadingSpinner size="lg" />
    </Suspense>
    <div className="text-gray-600">Loading...</div>
  </div>
)

function AnimatedRoutes() {
  const location = useLocation()
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:slug" element={<ProjectPage />} />
          <Route path="resume" element={<Resume />} />
        </Route>
        <Route path="/resume/print" element={<ResumePrint />} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <Router>
      <Suspense fallback={<PageLoader />}>
        <AnimatedRoutes />
      </Suspense>
    </Router>
  )
}

export default App