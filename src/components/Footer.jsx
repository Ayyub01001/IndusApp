// Footer.jsx
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#002f6c] text-white py-10 mt-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & About */}
          <div className="text-center sm:text-left">
            <img src="/logo.png" alt="Indus Logo" className="h-12 mx-auto sm:mx-0 mb-4" />
            <p className="text-sm leading-relaxed max-w-xs mx-auto sm:mx-0">
              Indus Maritime Pvt. Ltd. — Your trusted partner in cargo, logistics,
              and international trade solutions since 2000...
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/services" className="hover:underline">Services</a></li>
              <li><a href="/gallery" className="hover:underline">Gallery</a></li>
              <li><a href="/contact" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-3">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>Freight Forwarding</li>
              <li>Custom Clearance</li>
              <li>Warehousing</li>
              <li>International Shipping</li>
            </ul>
          </div>

          {/* Contact + Social */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
            <p className="text-sm">📧 info@indusmaritime.com</p>
            <p className="text-sm">📞 +91 98765 43210</p>

            <div className="flex justify-center sm:justify-start space-x-5 mt-5">
              <a href="#" className="text-white hover:text-gray-300"><FaFacebook size={20} /></a>
              <a href="#" className="text-white hover:text-gray-300"><FaInstagram size={20} /></a>
              <a href="#" className="text-white hover:text-gray-300"><FaLinkedin size={20} /></a>
              <a href="#" className="text-white hover:text-gray-300"><FaTwitter size={20} /></a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-500 mt-10 pt-4 text-center text-xs sm:text-sm">
          © {new Date().getFullYear()} Indus Maritime Pvt. Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
