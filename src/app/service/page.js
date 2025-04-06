import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const Services = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Our <span className="text-yellow-600">Services</span> – Bringing You the Best of Nature
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            At Deepraj, we offer a range of services designed to bring you closer to nature's finest products. Our services are aimed at not only providing high-quality, raw honey but also supporting your wellness and lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          <div className="service-card bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Raw Honey Delivery</h2>
            <p className="text-lg text-gray-600 mb-4">
              Enjoy the convenience of having 100% pure, raw honey delivered straight to your doorstep. Our honey is packed with natural enzymes and antioxidants, ensuring you receive the freshest and healthiest honey possible.
            </p>
            <a href="/order" className="text-yellow-600 font-semibold hover:underline">Order Now</a>
          </div>

          <div className="service-card bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Honey Subscription</h2>
            <p className="text-lg text-gray-600 mb-4">
              Never run out of your favorite honey! With our honey subscription service, you can receive regular deliveries of raw honey directly to your home, ensuring you always have nature’s sweetness on hand.
            </p>
            <a href="/subscription" className="text-yellow-600 font-semibold hover:underline">Subscribe Now</a>
          </div>

          <div className="service-card bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Bulk Orders & Wholesale</h2>
            <p className="text-lg text-gray-600 mb-4">
              We cater to businesses, retailers, and large events with our bulk orders. Enjoy great discounts on wholesale purchases of our premium raw honey. Perfect for gifts, events, or reselling.
            </p>
            <a href="/bulk-orders" className="text-yellow-600 font-semibold hover:underline">Learn More</a>
          </div>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-3xl font-semibold text-gray-800 mb-8">Why Choose Our Services?</h3>
          <ul className="max-w-3xl mx-auto space-y-6 text-lg text-gray-600">
            <li className="flex items-start space-x-4">
              <span className="text-yellow-600 text-2xl">✔</span>
              <p><strong className="font-semibold">Fresh & High-Quality Honey</strong> – Every drop is pure, unprocessed, and packed with nutrients.</p>
            </li>
            <li className="flex items-start space-x-4">
              <span className="text-yellow-600 text-2xl">✔</span>
              <p><strong className="font-semibold">Convenient Delivery</strong> – Direct to your door, with flexible delivery options.</p>
            </li>
            <li className="flex items-start space-x-4">
              <span className="text-yellow-600 text-2xl">✔</span>
              <p><strong className="font-semibold">Customizable Orders</strong> – Choose the quantity and frequency that suits your needs.</p>
            </li>
            <li className="flex items-start space-x-4">
              <span className="text-yellow-600 text-2xl">✔</span>
              <p><strong className="font-semibold">Ethically Sourced</strong> – Supporting local beekeepers and sustainable farming practices.</p>
            </li>
          </ul>
        </div>

        <div className="text-center mt-12">
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">Join the Sweet Revolution!</h3>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            With Deepraj’s services, you're not just buying honey – you're supporting sustainable practices and enjoying a product that’s as fresh and pure as nature intended.
          </p>
          <a href="/contact" className="mt-6 inline-block px-6 py-3 bg-yellow-600 text-white font-semibold rounded-lg shadow-lg hover:bg-yellow-700 transition duration-300">Contact Us</a>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Services;
