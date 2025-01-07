import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Footer Column 1: Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-teal-400">Home</a></li>
              <li><a href="/about" className="hover:text-teal-400">About Us</a></li>
              <li><a href="/services" className="hover:text-teal-400">Services</a></li>
              <li><a href="/contact" className="hover:text-teal-400">Contact</a></li>
            </ul>
          </div>

          {/* Footer Column 2: Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>Phone: +1 234 567 890</li>
              <li>Email: info@cleaningservice.com</li>
              <li>Address: 123 Clean St, Suite 400, City, Country</li>
            </ul>
          </div>

          {/* Footer Column 3: Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-teal-400">
                <i className="fab fa-facebook-f text-2xl"></i>
              </a>
              <a href="#" className="hover:text-teal-400">
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a href="#" className="hover:text-teal-400">
                <i className="fab fa-instagram text-2xl"></i>
              </a>
              <a href="#" className="hover:text-teal-400">
                <i className="fab fa-linkedin-in text-2xl"></i>
              </a>
            </div>
          </div>

          {/* Footer Column 4: Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">Sign up for our newsletter and get the latest cleaning tips and offers!</p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 w-full rounded-md bg-gray-700 text-white focus:outline-none"
              />
              <button className="px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700"  style={{ backgroundColor: '#005f73' }}>
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom: Copyright */}
        <div className="text-center text-gray-400 mt-12">
          <p>&copy; {new Date().getFullYear()} Cleaning Service. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
