import { resumeData } from '../data/resume'

export default function ResumePrint() {
  const { personal, summary, experience, education, skills, projects } = resumeData

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 bg-white print:p-0 print:max-w-none">
      {/* Header */}
      <header className="text-center mb-8 print:mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{personal.name}</h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-4">{personal.title}</p>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600">
          <span>{personal.email}</span>
          <span>{personal.phone}</span>
          <span>{personal.location}</span>
          <span>{personal.website}</span>
        </div>
      </header>

      {/* Summary */}
      <section className="mb-6">
        <h2 className="text-lg font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">SUMMARY</h2>
        <p className="text-gray-700 text-sm leading-relaxed">{summary}</p>
      </section>

      {/* Experience */}
      <section className="mb-6">
        <h2 className="text-lg font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">EXPERIENCE</h2>
        <div className="space-y-4">
          {experience.map((job) => (
            <div key={job.id}>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1 gap-1 sm:gap-0">
                <div>
                  <h3 className="font-semibold text-gray-900">{job.position}</h3>
                  <p className="text-gray-700">{job.company}, {job.location}</p>
                </div>
                <p className="text-xs sm:text-sm text-gray-600">{job.startDate} - {job.endDate}</p>
              </div>
              <ul className="text-sm text-gray-700 space-y-1 ml-4">
                {job.description.map((item, index) => (
                  <li key={index} className="list-disc">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-6">
        <h2 className="text-lg font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">EDUCATION</h2>
        <div className="space-y-3">
          {education.map((edu) => (
            <div key={edu.id} className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-0">
              <div>
                <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                <p className="text-gray-700">{edu.institution}, {edu.location}</p>
                {edu.gpa && <p className="text-sm text-gray-600">GPA: {edu.gpa}</p>}
              </div>
              <p className="text-xs sm:text-sm text-gray-600">{edu.startDate} - {edu.endDate}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mb-6">
        <h2 className="text-lg font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">SKILLS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category}>
              <h3 className="font-semibold text-gray-900 mb-1">{category}:</h3>
              <p className="text-sm text-gray-700">{skillList.join(', ')}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="mb-6">
        <h2 className="text-lg font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">PROJECTS</h2>
        <div className="space-y-3">
          {projects.map((project, index) => (
            <div key={index}>
              <h3 className="font-semibold text-gray-900">{project.name}</h3>
              <p className="text-sm text-gray-700 mb-1">{project.description}</p>
              <p className="text-xs text-gray-600">Technologies: {project.technologies.join(', ')}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Print Controls */}
      <div className="print:hidden mt-8 text-center">
        <button
          onClick={() => window.print()}
          className="bg-blue-600 text-white px-4 sm:px-6 py-2 rounded hover:bg-blue-700 transition-colors mb-2 sm:mb-0 sm:mr-4 text-sm sm:text-base"
        >
          Print Resume
        </button>
        <button
          onClick={() => window.history.back()}
          className="bg-gray-600 text-white px-4 sm:px-6 py-2 rounded hover:bg-gray-700 transition-colors text-sm sm:text-base"
        >
          Back to Resume
        </button>
      </div>
    </div>
  )
}