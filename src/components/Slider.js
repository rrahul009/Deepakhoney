'use client';

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

const Slider = () => {
  return (
    <div >
      <Carousel
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={3000}
        showIndicators={false}
      // autoPlay
      >



        {/* Slide 1 */}
        <div className="relative">
  {/* Container for the whole section */}
  <div className="flex items-center justify-between max-w-7xl mx-auto py-16 px-6 md:px-12">
    {/* Left Side: Text and Form */}
    <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
      <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight mb-12 animate__animated animate__fadeIn animate__delay-1s">
        Pure & Natural Honey
      </h1>
      <p className="text-lg text-gray-950 mt-6 leading-relaxed animate__animated animate__fadeIn animate__delay-1.5s">
        Discover the finest, 100% pure honey sourced from the most pristine environments. Our honey is unprocessed, raw, and packed with natural goodness.
      </p>
      <p>"Experience the Sweetness of Nature – Pure Honey for a Healthier You!"</p>

      {/* Form Section */}
      <div className="mb-3 animate__animated animate__fadeIn animate__delay-2s">
        <label htmlFor="email" className="block text-white text-lg font-semibold">
          Stay Updated with Our Products
        </label>
        <div className="flex items-center justify-start space-x-4">
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full px-6 py-3 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-md shadow-md hover:bg-teal-700 transition duration-300 transform hover:scale-105"
            style={{ backgroundColor: '#005f73' }}
          >
            Contact
          </button>
        </div>
      </div>

      <div className="text-center md:text-left">
        <button
          className="px-8 py-4 bg-green-600 text-white font-semibold rounded-lg shadow-lg hover:bg-green-700 transition duration-300 transform hover:scale-105"
          style={{ backgroundColor: '#005f73' }}
        >
          Order Now
        </button>
      </div>
    </div>

    {/* Right Side: Image */}
    <div className="w-full md:w-1/2 relative overflow-hidden transform hover:scale-105 transition duration-300 lg:ml-10 hidden md:block">
      <img
        src="https://images.pexels.com/photos/33260/honey-sweet-syrup-organic.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Honey"
        className="w-full h-auto object-cover object-center"
      />
    </div>
  </div>
</div>

 
        {/* Slide 2 */}
        <div className="relative ">
      {/* Container for the whole section */}
      <div className="flex items-center justify-between max-w-7xl mx-auto py-16 px-6 md:px-12">
        {/* Left Side: Text and Form */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl  font-bold text-black leading-tight mb-6 animate__animated animate__fadeIn animate__delay-1s">
            Housekeeping & Cleaning Made Easy
          </h1>
          <p className="text-lg text-gray-950 mb-3 leading-relaxed animate__animated animate__fadeIn animate__delay-1.5s">
            We offer professional and reliable housekeeping cleaning services for your home and office. Let us do the hard work while you focus on what matters most.
          </p>
          <p>"Transform Your Space with Expert Cleaning – Where Cleanliness Meets Perfection!"</p>

          {/* Form Section */}
          <div className="mb-3 space-y-4 animate__animated animate__fadeIn animate__delay-2s">
            <label htmlFor="email" className="block text-white text-lg font-semibold">
              Stay Updated with Our Services
            </label>
            <div className="flex items-center justify-start space-x-4">
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-6 py-3 border-2  rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
          <button
                    type="submit"
                    className="px-6 py-3 bg-amber-600 text-white font-semibold rounded-md shadow-md hover:bg-amber-700 transition duration-300 transform hover:scale-105"
                    style={{ backgroundColor: '#d97706' }}
                  >
                    Subscribe
                  </button>
            </div>
          </div>

       
              <div className="text-center md:text-left">
                <button
                  className="px-8 py-4 bg-amber-600 text-white font-semibold rounded-lg shadow-lg hover:bg-amber-700 transition duration-300 transform hover:scale-105"
                  style={{ backgroundColor: '#d97706' }}
                >
                  Order Now
                </button>
              </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full md:w-1/2 relative overflow-hidden  transform hover:scale-105 transition duration-300 lg:ml-10">
          <img
            src="https://5.imimg.com/data5/SELLER/Default/2023/10/353184550/GX/ZY/NN/12410061/housekeeping-materials-supplier.jpg"
            alt="Cleaning Products"
            className="w-full h-auto object-cover object-center "
          />
        </div>
      </div>
    </div>
 

        {/* Slide 3 */}
        <div className="relative ">
      {/* Container for the whole section */}
      <div className="flex items-center justify-between max-w-7xl mx-auto py-16 px-6 md:px-12">
        {/* Left Side: Text and Form */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl  font-bold text-black leading-tight mb-6 animate__animated animate__fadeIn animate__delay-1s">
            Housekeeping & Cleaning Made Easy
          </h1>
          <p className="text-lg text-gray-950 mb-3 leading-relaxed animate__animated animate__fadeIn animate__delay-1.5s">
            We offer professional and reliable housekeeping cleaning services for your home and office. Let us do the hard work while you focus on what matters most.
          </p>
          <p>"Transform Your Space with Expert Cleaning – Where Cleanliness Meets Perfection!"</p>

          {/* Form Section */}
          <div className="mb-3 space-y-4 animate__animated animate__fadeIn animate__delay-2s">
            <label htmlFor="email" className="block text-white text-lg font-semibold">
              Stay Updated with Our Services
            </label>
            <div className="flex items-center justify-start space-x-4">
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-6 py-3 border-2  rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-md shadow-md hover:bg-teal-700 transition duration-300 transform hover:scale-105"
                style={{ backgroundColor: '#005f73' }}
              >
                Subscribe
              </button>
            </div>
          </div>

          <div className="text-center md:text-left">
            <button
              className="px-8 py-4 bg-green-600 text-white font-semibold rounded-lg shadow-lg hover:bg-green-700 transition duration-300 transform hover:scale-105"
              style={{ backgroundColor: '#005f73' }}
            >
            Contact 
            </button>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full md:w-1/2 relative overflow-hidden  transform hover:scale-105 transition duration-300 lg:ml-10">
          <img
            src="https://5.imimg.com/data5/SELLER/Default/2023/10/353184550/GX/ZY/NN/12410061/housekeeping-materials-supplier.jpg"
            alt="Cleaning Products"
            className="w-full h-auto object-cover object-center "
          />
        </div>
      </div>
    </div>
 
      </Carousel>
    </div>
  );
};

export default Slider;
