import React from 'react'
import { FaUsers } from "react-icons/fa";
import Footer from '../components/Footer';
const Service = () => {
  return (
    <div className="flex flex-col min-h-screen">
    {/* About Section */}
    <section className="bg-gray-50 flex-1">
      <div className="container mx-auto px-6 lg:px-16 py-16 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left - Image */}
        <div>
          <img
            src="/team.jpg" // replace with your actual image path
            alt="Our Team"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right - Content */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Who We Are?</h2>
          <p className="text-gray-700 mb-6">
            We are a leading company dedicated to delivering innovative solutions.
            With years of experience, we have built a reputation for excellence and
            reliability in our industry.
          </p>

          <div className="flex items-center text-gray-700 mb-6">
            <FaUsers className="text-blue-600 text-xl mr-2" />
            Trusted by thousands of clients worldwide.
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md shadow-md">
            Learn More
          </button>
        </div>
      </div>
    </section>

    {/* Footer */}
    <Footer />\
    </div>
  )
}

export default Service
