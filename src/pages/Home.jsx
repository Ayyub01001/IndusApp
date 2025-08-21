import React from "react";
import img from "../assets/img/imgg.jpg";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <div
        className="relative h-[400px] sm:h-[500px] bg-cover bg-center"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-3 leading-tight">
            Logistics Services
          </h1>
          <p className="text-white text-base sm:text-lg max-w-2xl">
            We provide end-to-end logistics solutions, ensuring smooth cargo
            movement with efficiency and reliability.
          </p>
          {/* Search Box */}
          <div className="mt-6 w-full max-w-md flex flex-col sm:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
            <input
              type="text"
              placeholder="Search services..."
              className="flex-1 px-4 py-2 outline-none text-gray-700"
            />
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto">
              🔍
            </button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-12 text-center max-w-6xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-4">
          🌐 About Indus Maritime Pvt. Ltd.
        </h2>
        <p className="text-gray-600 mb-8 text-sm sm:text-base">
          Indus Maritime Private Limited is a premier provider of{" "}
          <strong>cargo, logistics, and export import</strong> services,
          operating with excellence since <strong>2000</strong>. We ensure
          seamless{" "}
          <strong>
            freight forwarding, transport, warehousing, and customs clearance
          </strong>{" "}
          for businesses worldwide.
        </p>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {[
            [
              "📦",
              "20+ Years Experience",
              "A trusted name in logistics & shipping since 2000.",
            ],
            [
              "🚚",
              "Comprehensive Solutions",
              "From customs clearance to freight forwarding & warehousing.",
            ],
            [
              "🌍",
              "Global Reach",
              "Serving clients across Dubai, Noida, Gujarat & international markets.",
            ],
            [
              "👤",
              "Strong Leadership",
              "Led by Indus Maritime, ensuring industry-leading expertise.",
            ],
          ].map(([icon, title, text], i) => (
            <div key={i} className="bg-white shadow-md rounded-lg p-6">
              <div className="text-4xl mb-2">{icon}</div>
              <h3 className="font-semibold mb-1">{title}</h3>
              <p className="text-sm text-gray-500">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Services */}
      <section className="py-12 bg-gray-50">
        <h2 className="text-center text-2xl sm:text-3xl font-bold mb-10">
          OUR SERVICES
        </h2>
        <div className="max-w-6xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4">
          {[
            ["🚚", "Cargo & International Courier", "Reliable cargo handling and international courier services."],
            ["✈️", "Air & Sea Freight Services", "Flexible air and sea freight options tailored to your needs."],
            ["🛃", "Custom Clearance & Import/Export", "Expert customs clearance ensuring smooth shipments."],
            ["📦", "Specialized Services", "Handling un/seg and antique furniture shipping."],
            ["🚛", "Logistics & Freight Solutions", "End-to-end logistics management and freight solutions."],
            ["📜", "Export Import Code (EIC) Services", "Hassle-free EIC registration and consultation."],
            ["🏭", "Warehousing & Storage", "Secure modern facilities to optimize supply chains."],
            ["🏗️", "Project Cargo & Heavy Lifting", "Oversized and heavy cargo with precision care."],
            ["📦", "Breakbulk & LCL Cargo", "Flexible breakbulk and less-than-container load solutions."],
          ].map(([icon, title, text], i) => (
            <div key={i} className="bg-white shadow-md rounded-lg p-6">
              <div className="text-4xl mb-2">{icon}</div>
              <h3 className="font-semibold mb-1">{title}</h3>
              <p className="text-sm text-gray-500">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 text-center max-w-6xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Why Choose Us?</h2>
        <p className="text-gray-600 mb-8 text-sm sm:text-base">
          We bring expertise, efficiency, and reliability to international
          logistics.
        </p>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["✔️", "Decades of Experience", "Over 20 years in the logistics and shipping industry."],
            ["✔️", "Skilled Team", "Experienced professionals ensuring international standards."],
            ["✔️", "Reliable Service", "Professionals committed to quality service delivery."],
            ["✔️", "Comprehensive Coverage", "From customs clearance to freight tracking, we handle it all."],
          ].map(([icon, title, text], i) => (
            <div key={i} className="bg-white shadow-md rounded-lg p-6">
              <div className="text-2xl text-blue-600 mb-2">{icon}</div>
              <h3 className="font-semibold mb-1">{title}</h3>
              <p className="text-sm text-gray-500">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-gray-50 text-center px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-10">
          💬 What Our Clients Say
        </h2>
        <div className="max-w-6xl mx-auto grid gap-6 grid-cols-1 md:grid-cols-3">
          {[
            ["Michael Johnson", "International Trade Specialist", "Their expertise in international freight forwarding saved us significant time and cost. Fantastic team!"],
            ["Neha Gupta", "Export Manager", "From AD code registration to warehousing, their services are comprehensive and extremely professional."],
            ["David Wong", "Logistics Coordinator", "Handled our project cargo with precision and care. Great communication throughout the process."],
          ].map(([name, role, text], i) => (
            <div key={i} className="bg-white shadow-md rounded-lg p-6">
              <p className="text-gray-600 italic mb-4">"{text}"</p>
              <h4 className="font-semibold">{name}</h4>
              <p className="text-sm text-gray-500">{role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-12 bg-gray-900 text-white text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">
          Our Impact in Figures
        </h2>
        <div className="grid gap-6 grid-cols-2 sm:grid-cols-4 max-w-5xl mx-auto px-4">
          {[
            ["1500+", "Total Shipments"],
            ["500+", "Clients Served"],
            ["10+", "Years of Experience"],
            ["200+", "Global Partners"],
          ].map(([num, label], i) => (
            <div key={i}>
              <p className="text-2xl sm:text-3xl font-bold">{num}</p>
              <p className="text-sm">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
