// src/pages/About.jsx
import React from "react";
import Footer from "../components/Footer";
import abimg from "../assets/img/abimg.jpg"

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-50 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Who We Are?
            </h2>
            <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
              We are dedicated to delivering quality products and services to our
              clients, empowering communities, and making a positive impact
              through innovation and dedication.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={abimg}
              alt="About us"
              className="rounded-lg shadow-lg w-full max-w-md md:max-w-full"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "10+", label: "Years in Service" },
            { number: "500+", label: "Projects Completed" },
            { number: "300+", label: "Happy Clients" },
            { number: "50+", label: "Awards Won" },
          ].map((stat, i) => (
            <div key={i}>
              <p className="text-3xl sm:text-4xl font-bold text-blue-600">
                {stat.number}
              </p>
              <p className="text-gray-600 text-sm sm:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              To be the leading provider in our industry, setting benchmarks in
              quality, innovation, and sustainability.
            </p>
          </div>
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              To consistently deliver top-notch solutions, exceed customer
              expectations, and contribute positively to the community and
              environment.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="bg-gray-50 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
            Leadership Team
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((member) => (
              <div
                key={member}
                className="bg-white p-6 rounded-xl shadow text-center"
              >
                <img
                  src={`/images/team${member}.jpg`}
                  alt={`Team member ${member}`}
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h4 className="text-lg font-semibold">John Doe</h4>
                <p className="text-gray-500 text-sm">CEO</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
            Why Choose Us
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality Service",
                desc: "We deliver unmatched quality in every project.",
              },
              {
                title: "Expert Team",
                desc: "Our professionals are experienced and skilled.",
              },
              {
                title: "Customer Focus",
                desc: "We prioritize our clients' needs above all else.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 sm:p-8 rounded-xl shadow text-center"
              >
                <h4 className="text-lg sm:text-xl font-semibold mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm sm:text-base">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info Strip */}
      <section className="bg-blue-600 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center text-white">
          <h3 className="text-xl sm:text-2xl font-semibold">
            Let’s Work Together
          </h3>
          <p className="mt-2 text-sm sm:text-base">
            Contact us today and start your project with us.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
