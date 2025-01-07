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
        {/* <title>Why Choose Us | Your Company Name</title> */}
        <meta name="description" content="Learn why you should choose us for your cleaning and chemical needs." />
      </Head>

      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-20">
          {/* <Image
            src="/images/logo.png"
            alt="Your Company Logo"
            width={200}
            height={100}
            className="mx-auto mb-6"
          /> */}
          <h1 className="text-5xl font-extrabold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-400">
            Why Choose Us?
          </h1>
          {/* <p className="text-xl mt-4 text-gray-700 max-w-3xl mx-auto">
            Discover the core values and top reasons why [Your Company Name] stands out in the world of cleaning and chemical solutions.
          </p> */}
        </div>

        {/* Key Benefits Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {/* Top-Quality Products */}
          <div
            className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out transform ${hoveredCard === 0 ? 'scale-105' : 'scale-100'} hover:shadow-xl`}
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src="https://media.licdn.com/dms/image/v2/D4E12AQGCmaI3dz8dQQ/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1697191130963?e=1741219200&v=beta&t=wHnit66sNUJZimO5qRirGBqPi3DH0R8lpB5n0SSWXJQ"
              alt="Top-Quality Products"
              width={400}
              height={250}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">Top-Quality Products</h3>
              <p className="mt-2 text-gray-600">
                We use only the highest quality eco-friendly products that ensure effective cleaning while being safe for your environment.
              </p>
            </div>
          </div>

          {/* Experienced Professionals */}
          <div
            className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out transform ${hoveredCard === 1 ? 'scale-105' : 'scale-100'} hover:shadow-xl`}
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src="https://agricocleaningservices.co.uk/wp-content/uploads/2024/02/Agrico-Cleaning-Services-1-1.jpeg"
              alt="Experienced Professionals"
              width={400}
              height={250}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">Experienced Professionals</h3>
              <p className="mt-2 text-gray-600">
                Our team is highly trained, experienced, and passionate about delivering exceptional cleaning results every time.
              </p>
            </div>
          </div>

          {/* Custom Solutions */}
          <div
            className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out transform ${hoveredCard === 2 ? 'scale-105' : 'scale-100'} hover:shadow-xl`}
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src="https://trinityharpercleaning.co.uk/wp-content/uploads/2022/06/Services-Office-Cleaner-2-SMALL.jpg"
              alt="Custom Solutions"
              width={400}
              height={250}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">Tailored Solutions</h3>
              <p className="mt-2 text-gray-600">
                We offer personalized cleaning solutions to fit your unique needs, whether residential or commercial.
              </p>
            </div>
          </div>

          {/* Eco-Friendly Practices */}
          <div
            className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out transform ${hoveredCard === 3 ? 'scale-105' : 'scale-100'} hover:shadow-xl`}
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src="https://etimg.etb2bimg.com/photo/95217315.cms"
              alt="Eco-Friendly Practices"
              width={400}
              height={250}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">Eco-Friendly Practices</h3>
              <p className="mt-2 text-gray-600">
                We are committed to sustainability, using eco-friendly products and practices that reduce our environmental footprint.
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
              src="https://ouicleandmv.com/wp-content/uploads/2021/09/shutterstock_1939394551.jpg"
              alt="Affordable Pricing"
              width={400}
              height={250}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">Affordable Pricing</h3>
              <p className="mt-2 text-gray-600">
                Quality cleaning doesn't have to break the bank. Our rates are competitive with no hidden fees.
              </p>
            </div>
          </div>

          {/* Timely Service */}
          <div
            className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out transform ${hoveredCard === 5 ? 'scale-105' : 'scale-100'} hover:shadow-xl`}
            onMouseEnter={() => handleMouseEnter(5)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src="https://thumbs.dreamstime.com/b/punctuality-concept-businesswoman-businessman-looking-50330901.jpg"
              alt="Reliable Service"
              width={400}
              height={250}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">On-Time Service</h3>
              <p className="mt-2 text-gray-600">
                We value your time. Our team ensures that we are always punctual and efficient, respecting your schedule.
              </p>
            </div>
          </div>

          {/* Licensed & Insured */}
          {/* <div
            className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out transform ${hoveredCard === 6 ? 'scale-105' : 'scale-100'} hover:shadow-xl`}
            onMouseEnter={() => handleMouseEnter(6)}
            onMouseLeave={handleMouseLeave}
          >
            <Image
              src="/images/licensed-insured.jpg"
              alt="Licensed & Insured"
              width={400}
              height={250}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">Licensed & Insured</h3>
              <p className="mt-2 text-gray-600">
                Our business is fully licensed and insured, offering you peace of mind that your property is in good hands.
              </p>
            </div>
          </div> */}

          {/* Proven Track Record */}
          {/* <div
            className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out transform ${hoveredCard === 7 ? 'scale-105' : 'scale-100'} hover:shadow-xl`}
            onMouseEnter={() => handleMouseEnter(7)}
            onMouseLeave={handleMouseLeave}
          >
            <Image
              src="/images/proven-track-record.jpg"
              alt="Proven Track Record"
              width={400}
              height={250}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">Proven Results</h3>
              <p className="mt-2 text-gray-600">
                We have built a reputation for consistent, high-quality service that our clients can always rely on.
              </p>
            </div>
          </div> */}
        </div>

        {/* Call to Action Section */}
        <footer className="text-center mt-16">
          <h2 className="text-3xl font-semibold text-gray-800">Ready for a Cleaner, Healthier Space?</h2>
          <p className="mt-4 text-xl text-gray-600">Let's make a difference together! Contact us today for more information.</p>

          <div className="mt-6">
            <a
              href="tel:[Your Contact Number]"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-200 ease-in-out"
            >
              Call Now
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
