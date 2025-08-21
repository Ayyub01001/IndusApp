// Gallery.jsx
import React from "react";
import Footer from "../components/Footer";

export default function Gallery() {
  const images = [
    "/gallery1.jpg",
    "/gallery2.jpg",
    "/gallery3.jpg",
    "/gallery4.jpg",
    "/gallery5.jpg",
    "/gallery6.jpg",
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Gallery Section */}
      <section className="bg-gray-50 flex-1 py-16 px-6 lg:px-16">
        <h2 className="text-3xl font-bold text-center mb-10">Our Gallery</h2>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {images.map((src, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={src} alt={`Gallery ${index + 1}`} className="w-full h-60 object-cover" />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold">Let's Work Together</h3>
          <p className="text-gray-600 mt-2">
            Get in touch with us today for reliable logistics solutions.
          </p>
          <button className="mt-5 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md shadow-md">
            Contact Us
          </button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
