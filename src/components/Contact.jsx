import React, { useState } from "react";
import {Mail} from "lucide-react"
const Contact = () => {
  const [formData, setFormData] = useState({ email: "", message: "" });

  const handleSubmit = () => {
    if (!formData.email || !formData.message) {
      alert("Please fill in all fields");
      return;
    }
    console.log("Form submitted:", formData);
    // Handle form submission here
    alert("Message sent successfully!");
    setFormData({ email: "", message: "" });
  };
  return (
  
  <section id="contact" className="min-h-screen flex items-center py-20 bg-gray-50">
  <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
    <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-16 text-center">Get In Touch</h2>
    
    <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
      <div className="mb-6">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
          placeholder="your.email@example.com"
        />
      </div>
      
      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message
        </label>
        <textarea
          id="message"
          rows="6"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent resize-none"
          placeholder="Tell me about your project or just say hello..."
        ></textarea>
      </div>
      
      <button
        onClick={handleSubmit}
        className="w-full bg-gray-900 text-white py-3 px-6 rounded-md font-medium hover:bg-gray-700 transition-colors duration-200 flex items-center justify-center gap-2"
      >
        <Mail className="w-4 h-4" />
        Send Message
      </button>
    </div>
  </div>
</section>
);
};

export default Contact;
