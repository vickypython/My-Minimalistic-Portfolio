import React from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Project from './components/Project'
import Experience from './components/Experience'
import Footer from './components/Footer'


const App = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Hero/>
      <About/>
      <Experience/>
      <Project/>
      <Skills/>
      <Contact/>
      <Footer/>
      </div>
  )
}

export default App