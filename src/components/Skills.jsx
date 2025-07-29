import React from 'react'
import {Code,Layers,Wrench,Database,GitBranch,BookOpen,} from "lucide-react"
const Skills = () => {
    const skills = {
        "Programming Languages": {
          icon: <Code className="w-6 h-6" />,
          items: ["JavaScript ES6+", "TypeScript", "Python"]
        },
        "Frontend Frameworks": {
          icon: <Layers className="w-6 h-6" />,
          items: ["React", "Flutter (learning)"]
        },
        "Backend Frameworks": {
          icon: <Wrench className="w-6 h-6" />,
          items: ["Node.js", "Express", "FastAPI", "Django REST Framework"]
        },
        "Databases": {
          icon: <Database className="w-6 h-6" />,
          items: ["PostgreSQL", "MySQL", "MongoDB"]
        },
        "Version Control & CI/CD": {
          icon: <GitBranch className="w-6 h-6" />,
          items: ["Git", "GitHub", "GitLab"]
        },
        "ORMs/ODMs": {
          icon: <Database className="w-6 h-6" />,
          items: ["SQL Alchemy", "Mongoose"]
        },
        "Learning": {
          icon: <BookOpen className="w-6 h-6" />,
          items: ["C++", "Dart"]
        }
      };


  return (
     
      <section id="skills" className="min-h-screen flex items-center py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-16 text-center">Skills</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, data]) => (
              <div key={category} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-gray-700">{data.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900">{category}</h3>
                </div>
                <div className="space-y-2">
                  {data.items.map((skill, index) => (
                    <div key={index} className="text-gray-600 py-1">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Skills