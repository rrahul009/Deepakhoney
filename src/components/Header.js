import React from 'react';

const Header = () => {
  return (
    <header className="bg-white text-black px-4 py-2">
      <div className="max-w-7xl mx-auto flex items-center justify-end space-x-8">
        {/* Header Info: Title and Description */}
        {/* <div className="text-center mb-4">
          <h1 className="text-2xl font-semibold text-teal-500 mb-2">Contact Us</h1>
          <p className="text-sm text-gray-600">Feel free to reach out to us anytime.</p>
        </div> */}

        {/* Contact Info: Email and Address */}
        <div className="flex space-x-8">
          {/* Email */}
          <p className="text-sm text-gray-800">
            <strong>Email:</strong>{' '}
            <a href="mailto:info@example.com" className="text-teal-500 hover:text-teal-600 transition-colors duration-300">
              info@example.com
            </a>
          </p>

          {/* Address */}
          <p className="text-sm text-gray-800">
            <strong>Address:</strong> 1234 Street Name, City, State, Country
          </p>
          <p className="text-sm text-gray-800">
            <strong>Phone:</strong> 123456789
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
