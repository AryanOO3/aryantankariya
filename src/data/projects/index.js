export const completedProjects = [
  {
    id: 1,
    slug: "eventsphere",
    title: "EventSphere",
    description: "A comprehensive event management system with role-based access, secure authentication, and automated RSVP workflow with QR-based attendance validation.",
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "QR Code", "JWT"],
    image: "/EventSphere.png",
    screenshots: ["/EventSphere.png"],
    github: "https://github.com/AryanOO3/EventSphere",
    demo: "https://eventsphere003.netlify.app",
    featured: true,
    role: "Full-Stack Developer",
    responsibilities: ["Full-stack development", "Database design and architecture", "Authentication and authorization system", "QR code generation and validation", "Real-time attendance tracking", "Role-based access control implementation"],
    metrics: ["End-to-end event management", "Real-time attendance validation", "Multi-role user system", "Automated RSVP workflow"]
  }
]

export const wipProjects = [
  {
    id: 2,
    slug: "weather",
    title: "Weather Dashboard",
    description: "A responsive, real-time weather dashboard with live rain radar and satellite maps. No API key required — works instantly out of the box.",
    technologies: ["HTML", "CSS", "JavaScript", "Leaflet.js", "Chart.js", "Open-Meteo API", "RainViewer API"],
    image: "/Weather-logo.jpg",
    screenshots: [],
    github: "https://github.com/AryanOO3/Weather",
    demo: "https://aryanoo3.github.io/Weather",
    featured: true,
    role: "Frontend Developer",
    responsibilities: [
      "Integrated Open-Meteo API for real-time weather, hourly and 5-day forecast data",
      "Built interactive rain radar and satellite map with time scrubber using Leaflet.js and RainViewer",
      "Designed 48-hour temperature trend chart using Chart.js",
      "Implemented browser geolocation with localStorage persistence to skip repeated prompts",
      "Built fully responsive layout supporting mobile, tablet and desktop"
    ],
    metrics: ["No API key needed", "Real-time radar", "5-day forecast", "Mobile-friendly", "Hosted on GitHub Pages"]
  }
]

export const projects = [...completedProjects, ...wipProjects]

export const getProjectBySlug = (slug) => {
  return projects.find(project => project.slug === slug)
}