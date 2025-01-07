'use client'
import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false); // Close menu when an item is clicked

  return (
    <nav className="text-white shadow-md p-3" style={{ backgroundColor: '#005f73' }}>
      <div className="max-w-7xl mx-auto flex items-center justify-between md:justify-center">
        {/* Logo */}
        <div className="text-3xl font-semibold font-custom text-teal-400 flex-shrink-0">
          <img
            src="https://img.freepik.com/free-vector/gradient-carpet-cleaning-logo-design_23-2150713888.jpg" // Replace with your logo URL
            alt="Chemical Cleaners Logo"
            className="w-16 h-16 object-cover" // Optional: Set a fixed width and height for the logo
          />
          {/* <span className="ml-2 text-2xl font-bold text-white">Chemical Cleaners</span> */}
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-start justify-center flex-grow">
          <a
            href="#home"
            className="text-white hover:text-teal-300 transition-all duration-300 font-medium"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-white hover:text-teal-300 transition-all duration-300 font-medium"
          >
            About Us
          </a>
          <a
            href="#services"
            className="text-white hover:text-teal-300 transition-all duration-300 font-medium"
          >
            Services
          </a>
          <a
            href="#industries"
            className="text-white hover:text-teal-300 transition-all duration-300 font-medium"
          >
            Industries Served
          </a>
          <a
            href="#contact"
            className="text-white hover:text-teal-300 transition-all duration-300 font-medium"
          >
            Contact
          </a>
        </div>

        {/* Get a Quote Button - positioned to the right */}
        <a
          href="#quote"
          className="hidden md:block bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 ml-auto"
        >
          Get a Quote
        </a>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-teal-800 rounded-b-lg shadow-lg transition-all duration-300 ease-in-out`}
      >
        <a
          href="#home"
          className="block text-white hover:text-teal-300 py-4 px-6 transition-all duration-300 font-medium"
          onClick={closeMenu}
        >
          Home
        </a>
        <a
          href="#about"
          className="block text-white hover:text-teal-300 py-4 px-6 transition-all duration-300 font-medium"
          onClick={closeMenu}
        >
          About Us
        </a>
        <a
          href="#services"
          className="block text-white hover:text-teal-300 py-4 px-6 transition-all duration-300 font-medium"
          onClick={closeMenu}
        >
          Services
        </a>
        <a
          href="#industries"
          className="block text-white hover:text-teal-300 py-4 px-6 transition-all duration-300 font-medium"
          onClick={closeMenu}
        >
          Industries Served
        </a>
        <a
          href="#contact"
          className="block text-white hover:text-teal-300 py-4 px-6 transition-all duration-300 font-medium"
          onClick={closeMenu}
        >
          Contact
        </a>
        <a
          href="#quote"
          className="block text-white bg-teal-500 hover:bg-teal-600 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
          onClick={closeMenu}
        >
          Get a Quote
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
