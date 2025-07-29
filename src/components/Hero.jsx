import React, { useState } from "react";
import {Menu,X} from 'lucide-react'
const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div>
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-gray-900">Your Name</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {[
                "Home",
                "About",
                "Experience",
                "Projects",
                "Skills",
                "Contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
                {[
                  "Home",
                  "About",
                  "Experience",
                  "Projects",
                  "Skills",
                  "Contact",
                ].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block px-3 py-2 text-gray-600 hover:text-gray-900 font-medium w-full text-left"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 pt-16"
      >
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-light text-gray-900 mb-6 leading-tight">
            Full Stack Developer
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Creating elegant solutions with modern web technologies. Passionate
            about clean code and exceptional user experiences.
          </p>
          <button
            onClick={() => scrollToSection("projects")}
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-md font-medium hover:bg-gray-700 transition-colors duration-200"
          >
            View My Work
          </button>
        </div>
      </section>
    </div>
  );
};

export default Hero;
