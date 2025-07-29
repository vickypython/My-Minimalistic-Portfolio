import React from 'react'

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center py-20 bg-gray-50">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8">About Me</h2>
          <div className="space-y-6 text-lg text-gray-600">
            <p>
              I'm a passionate full-stack developer with expertise in modern web technologies. 
              I love creating efficient, scalable solutions that solve real-world problems.
            </p>
            <p>
              With experience in both frontend and backend development, I enjoy working on 
              projects that challenge me to learn new technologies and improve existing systems.
            </p>
            <p>
              When I'm not coding, you can find me exploring new frameworks, contributing to 
              open source projects, or sharing knowledge with the developer community.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Your Photo Here</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  )
}

export default About