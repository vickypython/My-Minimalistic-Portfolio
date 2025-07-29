import React from 'react'
import {ExternalLink,Github} from "lucide-react"
const Project = () => {
    const projects = [
        {
          id: 1,
          name: "E-Commerce Platform",
          description: "Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
          image: "Project Screenshot",
          github: "https://github.com/vickypython/Cart-item-.git",
          live: "https://cart-item-flame.vercel.app/"
        },
        {
          id: 2,
          name: "Note taking App",
          description: "A collaborative task management application built with React and Express. Real-time updates using Socket.io and MongoDB for data persistence.",
          image: "Project Screenshot",
          github: "https://github.com/vickypython/Note-taking-app.git",
          live: "https://note-taking-app-three-rosy.vercel.app/"
        },
        {
          id: 3,
          name: "Image Search",
          description: "Modern weather application with location-based forecasts. Built with React, TypeScript, and integrates with multiple weather APIs.",
          image: "Project Screenshot",
          github: "https://github.com/vickypython/image-search.git",
          live: "https://image-search-eight-liart.vercel.app/"
        },
        {
            id: 4,
            name: "Recipe Finder",
            description: "Modern weather application with location-based forecasts. Built with React, TypeScript, and integrates with multiple weather APIs.",
            image: "Project Screenshot",
            github: "https://github.com/vickypython/Recipe-finder-react.js.git",
            live: "https://recipe-finder-peach-phi.vercel.app/"
          },
          {
            id: 5,
            name: "Waste Skip Booking ",
            description: "Modern weather application with location-based forecasts. Built with React, TypeScript, and integrates with multiple weather APIs.",
            image: "Project Screenshot",
            github: "https://github.com/vickypython/waste-skip-booking.git",
            live: "#"
          },
          
      ];
    
      
  return (
    <section id="projects" className="min-h-screen flex items-center py-20 bg-gray-50">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-16 text-center">Projects</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
            <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-500">
              {project.image}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.name}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                <a
                  href={project.live}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-700 transition-colors duration-200"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live View
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Project