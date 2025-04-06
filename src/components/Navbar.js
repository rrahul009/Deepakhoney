'use client'
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false); // Close menu when an item is clicked

  return (
    <nav className="text-white shadow-md p-3" style={{ backgroundColor: '#005f73' }}>
      <div className="max-w-7xl mx-auto flex items-center justify-between md:justify-center">
        {/* Logo */}
      <Link href="/">
      <div className="text-3xl font-semibold font-custom text-teal-400 flex-shrink-0">
          <img
            src="https://seeklogo.com/images/C/creative-honey-logo-DF1AD5F440-seeklogo.com.png" // Replace with your logo URL
            alt="Chemical Cleaners Logo"
            className="w-16 h-16 object-cover" // Optional: Set a fixed width and height for the logo
          />
          {/* <span className="ml-2 text-2xl font-bold text-white">Chemical Cleaners</span> */}
        </div>
      </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-start justify-center flex-grow">
          <Link
            href="/"
            className="text-white hover:text-teal-300 transition-all duration-300 font-medium"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-white hover:text-teal-300 transition-all duration-300 font-medium"
          >
            About Us
          </Link>
          <Link
            href="/service"
            className="text-white hover:text-teal-300 transition-all duration-300 font-medium"
          >
            Services
          </Link>
          <Link
            href="/industries"
            className="text-white hover:text-teal-300 transition-all duration-300 font-medium"
          >
            Industries Served
          </Link>
          <a
            href="#contact"
            className="text-white hover:text-teal-300 transition-all duration-300 font-medium"
          >
            Contact
          </a>
        </div>

        {/* Get a Quote Button - positioned to the right */}
        <button
            type="submit"
            className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-md shadow-md hover:bg-teal-700 transition duration-300 transform hover:scale-105"
            style={{ backgroundColor: '#005f73' }}
          >
            CONTACT US
          </button>

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
        <Link
          href="/"
          className="block text-white hover:text-teal-300 py-4 px-6 transition-all duration-300 font-medium"
          onClick={closeMenu}
        >
          Home
        </Link>
        <a
          href="/about"
          className="block text-white hover:text-teal-300 py-4 px-6 transition-all duration-300 font-medium"
          onClick={closeMenu}
        >
          About Us
        </a>
        <Link
          href="/service"
          className="block text-white hover:text-teal-300 py-4 px-6 transition-all duration-300 font-medium"
          onClick={closeMenu}
        >
          Services
        </Link>
        <Link
          href="/industries"
          className="block text-white hover:text-teal-300 py-4 px-6 transition-all duration-300 font-medium"
          onClick={closeMenu}
        >
          Industries Served
        </Link>
        <Link
          href="/contact"
          className="block text-white hover:text-teal-300 py-4 px-6 transition-all duration-300 font-medium"
          onClick={closeMenu}
        >
          Contact
        </Link>
        <a
          href="#quote"
          className="block text-white bg-teal-500 hover:bg-teal-600 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
          onClick={closeMenu}
        > 
        Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
