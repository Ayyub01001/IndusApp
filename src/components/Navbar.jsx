// Navbar.jsx
import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaCheckCircle, FaBars, FaTimes } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import logo from "../assets/img/logo.png"
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `block pb-1 transition-colors duration-200 hover:text-[#002f6c] ${
      isActive ? "border-b-2 border-[#002f6c] text-[#002f6c]" : "text-black"
    }`;

  return (
    <header>
      {/* Top Contact Bar */}
      <div className="bg-[#1f3b89] text-white text-xs sm:text-sm flex flex-wrap justify-between items-center px-4 sm:px-6 py-2">
        <div className="flex flex-wrap items-center gap-2 sm:gap-4">
          <span className="flex items-center">
            <FaPhoneAlt className="mr-1" /> +91 9354739557
          </span>
          <span className="flex items-center">
            <FaEnvelope className="mr-1" /> Sales@indusmaritime.in
          </span>
          <span className="flex items-center hidden lg:flex">
            <FaCheckCircle className="mr-1" /> Gst No. 07AAHCI9098J1ZU
          </span>
          <span className="flex items-center hidden xl:flex">
            <FaCheckCircle className="mr-1" /> UDYAM-DL-09-0030539
          </span>
        </div>
        <div className="flex items-center space-x-3 mt-2 sm:mt-0">
          <a href="#" className="hover:text-gray-300"><FaFacebookF /></a>
          <a href="#" className="hover:text-gray-300"><FaInstagram /></a>
          <a href="#" className="hover:text-gray-300"><FaLinkedinIn /></a>
          <a href="#" className="hover:text-gray-300"><FaTwitter /></a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="flex justify-between items-center px-4 sm:px-10 py-3 bg-white border-b border-gray-200">
        {/* Logo */}
        <NavLink to="/">    <div className="flex items-center">
          
      <img 
  src={logo} 
  alt="Indus Maritime Logo" 
  className="h-10 sm:h-12 mr-3 object-contain cursor-pointer"
/>

          <div className="leading-tight">
            <h2 className="text-base sm:text-lg font-bold">INDUS</h2>
            <p className="text-[10px] sm:text-xs">MARITIME PRIVATE LIMITED</p>
          </div>
        </div></NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 lg:gap-8 items-center text-base lg:text-lg font-semibold">
          <li><NavLink to="/" end className={navLinkClass}>Home</NavLink></li>
          <li><NavLink to="/about" className={navLinkClass}>About Us</NavLink></li>
          <li><NavLink to="/services" className={navLinkClass}>Services</NavLink></li>
          <li><NavLink to="/gallery" className={navLinkClass}>Gallery</NavLink></li>
          <li><NavLink to="/video" className={navLinkClass}>Video</NavLink></li>
          <li><NavLink to="/contact" className={navLinkClass}>Contact Us</NavLink></li>
          <li><NavLink to="/certificate" className={navLinkClass}>Our Certificate</NavLink></li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-4 py-4 space-y-3 text-base font-semibold">
          <NavLink to="/" end className={navLinkClass} onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/about" className={navLinkClass} onClick={() => setMenuOpen(false)}>About Us</NavLink>
          <NavLink to="/services" className={navLinkClass} onClick={() => setMenuOpen(false)}>Services</NavLink>
          <NavLink to="/gallery" className={navLinkClass} onClick={() => setMenuOpen(false)}>Gallery</NavLink>
          <NavLink to="/video" className={navLinkClass} onClick={() => setMenuOpen(false)}>Video</NavLink>
          <NavLink to="/contact" className={navLinkClass} onClick={() => setMenuOpen(false)}>Contact Us</NavLink>
          <NavLink to="/certificate" className={navLinkClass} onClick={() => setMenuOpen(false)}>Our Certificate</NavLink>
        </div>
      )}
    </header>
  );
}
