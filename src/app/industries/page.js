import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const IndustriesWeServe = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Industries We Serve – Sweetening Success Across Sectors
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            At Deepraj Natural Honey, our products reach far beyond households. We proudly serve a variety of industries, offering high-quality, raw honey that meets the needs of different sectors. Whether you're in food production, healthcare, or cosmetics, our honey can enhance your products and provide a natural touch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Industry Card - Food & Beverage */}
          <div className="industry-card bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300">
            <img 
              src="https://img.freepik.com/free-photo/honey-falling-bread_23-2148132628.jpg?ga=GA1.1.988275924.1743597871&semt=ais_hybrid&w=740" 
              alt="Food & Beverage" 
              className="w-full h-80 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Food & Beverage</h2>
            <p className="text-lg text-gray-600 mb-4">
              Honey is a natural sweetener that’s used in countless food and beverage products. From beverages like tea and smoothies to gourmet desserts and snacks, our raw honey can enhance the taste and nutritional value of your products.
            </p>
            <a href="/food-beverage" className="text-yellow-600 font-semibold hover:underline">Learn More</a>
          </div>

          {/* Industry Card - Healthcare */}
          <div className="industry-card bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300">
            <img 
              src="https://img.freepik.com/free-photo/woman-making-hot-tea-with-honey_329181-20193.jpg?t=st=1743975074~exp=1743978674~hmac=7f8d3030906e5949c7305074e1b30fbdd400747d8d741b4cc6a7911c91b83875&w=2000" 
              alt="Healthcare" 
              className="w-full h-80 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Healthcare</h2>
            <p className="text-lg text-gray-600 mb-4">
              Raw honey is known for its healing properties. In the healthcare industry, it is used in natural remedies, skin treatments, and as a supplement for its antioxidant and antimicrobial benefits. Our honey provides the best solution for these applications.
            </p>
            <a href="/healthcare" className="text-yellow-600 font-semibold hover:underline">Learn More</a>
          </div>

          {/* Industry Card - Cosmetics & Skincare */}
          <div className="industry-card bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300">
            <img 
              src="https://img.freepik.com/free-photo/natural-skin-care-soap-serum-with-honey-honeycomb-laid-white-surface_1150-46827.jpg?t=st=1743975162~exp=1743978762~hmac=3d41099a7c14ecbe968092e117b711a58fe94f9da7e227fdbdf5bf7c5792124e&w=2000" 
              alt="Cosmetics & Skincare" 
              className="w-full h-80 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cosmetics & Skincare</h2>
            <p className="text-lg text-gray-600 mb-4">
              Honey is a popular ingredient in skincare and cosmetics due to its moisturizing, anti-inflammatory, and antioxidant properties. We provide pure, raw honey that can be incorporated into a wide range of beauty and personal care products.
            </p>
            <a href="/cosmetics" className="text-yellow-600 font-semibold hover:underline">Learn More</a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
          {/* Industry Card - Bakeries & Confectioneries */}
          <div className="industry-card bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300">
            <img 
              src="https://img.freepik.com/free-photo/high-angle-pastry-apples-assortment_23-2149707958.jpg?t=st=1743975224~exp=1743978824~hmac=4e958a05f0f095ddcac4688b449dd8bee316c61b7cbb95c0c7225e9186b88d47&w=826" 
              alt="Bakeries & Confectioneries" 
              className="w-full h-80 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Bakeries & Confectioneries</h2>
            <p className="text-lg text-gray-600 mb-4">
              For bakeries and confectioneries, honey serves as a natural sweetener that also adds moisture to cakes, bread, cookies, and more. Our raw honey enhances the taste and texture of your baked goods while adding natural health benefits.
            </p>
            <a href="/bakeries" className="text-yellow-600 font-semibold hover:underline">Learn More</a>
          </div>

          {/* Industry Card - Restaurants & Cafes */}
          <div className="industry-card bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300">
            <img 
              src="https://img.freepik.com/free-photo/jar-honey-mix-cocktail-chiffon-scarf_114579-2416.jpg?t=st=1743975262~exp=1743978862~hmac=9bb90a4397c119f6bee5b41767bdec63f909c426384f0105c2f7adc8edefe758&w=1060" 
              alt="Restaurants & Cafes" 
              className="w-full h-80 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Restaurants & Cafes</h2>
            <p className="text-lg text-gray-600 mb-4">
              Restaurants and cafes use honey as a natural alternative to sugar in beverages, dressings, and dishes. Our honey provides an all-natural, flavorful option that aligns with your healthy menu offerings.
            </p>
            <a href="/restaurants" className="text-yellow-600 font-semibold hover:underline">Learn More</a>
          </div>

          {/* Industry Card - Natural Health & Wellness */}
          <div className="industry-card bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300">
            <img 
              src="https://img.freepik.com/free-photo/homemade-bread-with-honey-ginger_23-2148371952.jpg?t=st=1743975312~exp=1743978912~hmac=a00c2762d5494e558abda058a9a3a3850d4dbc4ea1e3d5eb57529eedff789385&w=2000" 
              alt="Natural Health & Wellness" 
              className="w-full h-80 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Natural Health & Wellness</h2>
            <p className="text-lg text-gray-600 mb-4">
              Our raw honey is an excellent addition to any health and wellness product. Whether it’s for supplements, energy bars, or natural remedies, Deepraj Natural Honey provides the raw ingredients that support a healthy lifestyle.
            </p>
            <a href="/health-wellness" className="text-yellow-600 font-semibold hover:underline">Learn More</a>
          </div>
        </div>

        <div className="text-center mt-12">
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">Your Industry, Our Honey – Better Together</h3>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            At Deepraj, we take pride in serving diverse industries with our 100% pure, raw honey. Whatever your sector, our honey can enhance the flavor, health benefits, and sustainability of your products. We are committed to delivering quality that supports your business goals.
          </p>
          <a href="/contact" className="mt-6 inline-block px-6 py-3 bg-yellow-600 text-white font-semibold rounded-lg shadow-lg hover:bg-yellow-700 transition duration-300">
            Contact Us to Learn More
          </a>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndustriesWeServe;
