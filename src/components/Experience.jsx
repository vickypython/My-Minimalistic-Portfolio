import React from 'react'

const Experience = () => {
    const experiences = [
        {
          id: 1,
          title: "Senior Full Stack Developer",
          company: "Tech Solutions Inc.",
          date: "2023 - Present",
          description: "Led development of enterprise web applications using React, Node.js, and PostgreSQL. Mentored junior developers and implemented CI/CD pipelines."
        },
        {
          id: 2,
          title: "Full Stack Developer",
          company: "Digital Agency Co.",
          date: "2021 - 2023",
          description: "Developed and maintained multiple client websites and web applications. Worked with React, Express, and MongoDB to deliver scalable solutions."
        },
        {
          id: 3,
          title: "Frontend Developer",
          company: "StartUp Hub",
          date: "2020 - 2021",
          description: "Built responsive web interfaces using React and TypeScript. Collaborated with designers to implement pixel-perfect UI components."
        }
      ];
  return (
    <section id="experience" className="min-h-screen flex items-center py-20">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-16 text-center">Experience</h2>
      
      <div className="relative">
        {experiences.map((exp, index) => (
          <div key={exp.id} className="flex items-center mb-12 last:mb-0">
            <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 order-3'}`}>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{exp.title}</h3>
                <div className="text-gray-600 font-medium mb-2">{exp.company}</div>
                <div className="text-gray-500 text-sm mb-4">{exp.date}</div>
                <p className="text-gray-600 leading-relaxed">{exp.description}</p>
              </div>
            </div>
            
            <div className="w-4 h-4 bg-gray-900 rounded-full relative z-10 order-2"></div>
            <div className={`w-1/2 ${index % 2 === 0 ? 'order-3' : 'pr-8'}`}></div>
            
            {index < experiences.length - 1 && (
              <div className="absolute left-1/2 transform -translate-x-0.5 w-px h-24 bg-gray-300 mt-8"></div>
            )}
          </div>
        ))}
        
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-0.5 w-px h-full bg-gray-300 -z-10"></div>
      </div>
    </div>
  </section>
  )
}

export default Experience