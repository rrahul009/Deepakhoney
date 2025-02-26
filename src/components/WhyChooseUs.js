'use client'

import Head from 'next/head';
import Image from 'next/image'; // Import Image component for optimized images
import { useState } from 'react';

export default function WhyChooseUs() {
  const [hoveredCard, setHoveredCard] = useState(null);

  // Handling hover state for card animations
  const handleMouseEnter = (index) => setHoveredCard(index);
  const handleMouseLeave = () => setHoveredCard(null);

  return (
    <>
      <Head>
        {/* <title>Why Choose Us | Your Honey Brand</title> */}
        <meta name="description" content="Learn why you should choose us for the finest honey products." />
      </Head>

      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-20">
          {/* <Image
            src="/images/logo.png"
            alt="Your Honey Brand Logo"
            width={200}
            height={100}
            className="mx-auto mb-6"
          /> */}
          <h1 className="text-5xl font-extrabold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-orange-400">
            Why Choose Us?
          </h1>
          {/* <p className="text-xl mt-4 text-gray-700 max-w-3xl mx-auto">
            Discover the core values and top reasons why [Your Honey Brand] stands out in the world of natural honey.
          </p> */}
        </div>

        {/* Key Benefits Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {/* Pure & Natural Honey */}
          <div
            className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out transform ${hoveredCard === 0 ? 'scale-105' : 'scale-100'} hover:shadow-xl`}
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src="https://images.pexels.com/photos/8845105/pexels-photo-8845105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Pure & Natural Honey"
              width={400}
              height={250}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">Pure & Natural Honey</h3>
              <p className="mt-2 text-gray-600">
                Our honey is 100% pure, unprocessed, and free from additives, ensuring you get the best nature has to offer.
              </p>
            </div>
          </div>

          {/* Sustainably Sourced */}
          <div
            className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out transform ${hoveredCard === 1 ? 'scale-105' : 'scale-100'} hover:shadow-xl`}
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src="https://images.pexels.com/photos/6588618/pexels-photo-6588618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Sustainably Sourced"
              width={400}
              height={250}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">Sustainably Sourced</h3>
              <p className="mt-2 text-gray-600">
                We are committed to sustainable beekeeping practices that protect the environment and support local communities.
              </p>
            </div>
          </div>

          {/* Wide Variety */}
          <div
            className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out transform ${hoveredCard === 2 ? 'scale-105' : 'scale-100'} hover:shadow-xl`}
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src="https://images.pexels.com/photos/5865194/pexels-photo-5865194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Wide Variety"
              width={400}
              height={250}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">Wide Variety</h3>
              <p className="mt-2 text-gray-600">
                From wildflower to Manuka, we offer a diverse range of honey to suit every taste and need.
              </p>
            </div>
          </div>

          {/* Health Benefits */}
          <div
            className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out transform ${hoveredCard === 3 ? 'scale-105' : 'scale-100'} hover:shadow-xl`}
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src="https://images.pexels.com/photos/6072378/pexels-photo-6072378.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Health Benefits"
              width={400}
              height={250}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">Health Benefits</h3>
              <p className="mt-2 text-gray-600">
                Our honey is rich in antioxidants, vitamins, and minerals, making it a natural choice for boosting your health.
              </p>
            </div>
          </div>

          {/* Affordable Pricing */}
          <div
            className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out transform ${hoveredCard === 4 ? 'scale-105' : 'scale-100'} hover:shadow-xl`}
            onMouseEnter={() => handleMouseEnter(4)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src="https://images.pexels.com/photos/5430782/pexels-photo-5430782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Affordable Pricing"
              width={400}
              height={250}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">Affordable Pricing</h3>
              <p className="mt-2 text-gray-600">
                Enjoy premium-quality honey at competitive prices, with no compromise on quality.
              </p>
            </div>
          </div>

          {/* Fast Delivery */}
          <div
            className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out transform ${hoveredCard === 5 ? 'scale-105' : 'scale-100'} hover:shadow-xl`}
            onMouseEnter={() => handleMouseEnter(5)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src="https://images.pexels.com/photos/8140790/pexels-photo-8140790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Fast Delivery"
              width={400}
              height={250}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">Fast Delivery</h3>
              <p className="mt-2 text-gray-600">
                We ensure timely delivery of your favorite honey products, straight to your doorstep.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <footer className="text-center mt-16">
          <h2 className="text-3xl font-semibold text-gray-800">Ready to Taste the Difference?</h2>
          <p className="mt-4 text-xl text-gray-600">Experience the finest honey nature has to offer. Order now!</p>

          <div className="mt-6">
            <a
              href="tel:[Your Contact Number]"
              className="inline-block bg-amber-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-amber-700 transition-all duration-200 ease-in-out"
            >
              Order Now
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}