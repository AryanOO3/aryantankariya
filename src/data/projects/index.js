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
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution built with React and Node.js",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    image: "/api/placeholder/400/250",
    screenshots: ["/api/placeholder/800/500", "/api/placeholder/800/500"],
    github: "https://github.com/yourusername/ecommerce",
    demo: "https://your-ecommerce-demo.com",
    featured: true,
    role: "Full-Stack Developer",
    responsibilities: ["Frontend development with React", "Backend API design", "Database architecture", "Payment integration"],
    metrics: ["50% faster load times", "99.9% uptime", "500+ active users"]
  },
  {
    id: 3,
    slug: "task-management",
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    image: "/api/placeholder/400/250",
    screenshots: ["/api/placeholder/800/500", "/api/placeholder/800/500"],
    github: "https://github.com/yourusername/task-app",
    demo: "https://your-task-app.com",
    featured: true,
    role: "Frontend Developer",
    responsibilities: ["Real-time collaboration features", "Responsive UI design", "Firebase integration"],
    metrics: ["Real-time sync", "Mobile-first design", "100+ teams using"]
  },
  {
    id: 4,
    slug: "weather-dashboard",
    title: "Weather Dashboard",
    description: "A responsive weather dashboard with location-based forecasts",
    technologies: ["JavaScript", "API Integration", "Chart.js"],
    image: "/api/placeholder/400/250",
    screenshots: ["/api/placeholder/800/500"],
    github: "https://github.com/yourusername/weather-app",
    demo: "https://your-weather-app.com",
    featured: false,
    role: "Frontend Developer",
    responsibilities: ["Weather API integration", "Data visualization", "Responsive design"],
    metrics: ["5-day forecasts", "Location-based", "Interactive charts"]
  }
]

export const projects = [...completedProjects, ...wipProjects]

export const getProjectBySlug = (slug) => {
  return projects.find(project => project.slug === slug)
}