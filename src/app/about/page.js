import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const AboutUs = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to <strong className="text-yellow-600">Deepraj Natural Honey</strong> – where purity meets tradition.
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            At Deepraj, we are passionate about bringing you honey in its most natural form. Our journey began with a simple belief: that nature offers everything we need for health, wellness, and vitality. That’s why we source our honey directly from trusted local beekeepers who follow ethical and sustainable practices, ensuring that every drop you taste is as pure as nature intended.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="text-lg text-gray-600 leading-relaxed">
            <p>
              Our honey is <strong className="font-semibold">100% raw, unprocessed, and free from additives or preservatives</strong>. We don’t heat, filter, or dilute our honey – allowing it to retain its natural enzymes, antioxidants, and health-boosting properties. Each batch is carefully harvested from wild forests and rural hives, delivering not only exceptional taste but also the full spectrum of nature’s goodness.
            </p>
            <p className="mt-4">
              <strong className="font-semibold text-yellow-600">Experience the golden taste of nature – experience Deepraj.</strong>
            </p>
          </div>
          <img 
            src="https://media.istockphoto.com/id/564591068/photo/honeybee.jpg?s=612x612&w=0&k=20&c=777x4oY4tlGeuka0uKltIaMq-w6SLc0DGBECR_fu3eo=" 
            alt="Honeycomb and bees" 
            className="rounded-lg shadow-lg object-cover h-full w-full" 
          />
        </div>

        <h3 className="text-3xl font-semibold text-center text-gray-800 mb-8">Our Mission</h3>
        <p className="text-lg text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto">
          At Deepraj, we are committed to promoting a healthier lifestyle by offering pure, raw honey that is as close to nature as possible. Our mission is not only to provide a product but to create a movement – one that educates people on the benefits of natural, unprocessed food. We aim to empower our customers to make better food choices while supporting local beekeepers and their sustainable practices.
        </p>

        <h3 className="text-3xl font-semibold text-center text-gray-800 mb-8">Why Choose Deepraj Natural Honey?</h3>
        <ul className="space-y-6 max-w-2xl mx-auto text-lg text-gray-600">
          <li className="flex items-start space-x-4">
            <span className="text-yellow-600 text-2xl">✔</span>
            <p><strong className="font-semibold">Pure & Natural</strong> – Straight from the hive to your home.</p>
          </li>
          <li className="flex items-start space-x-4">
            <span className="text-yellow-600 text-2xl">✔</span>
            <p><strong className="font-semibold">No Chemicals or Preservatives</strong> – Just real, raw honey.</p>
          </li>
          <li className="flex items-start space-x-4">
            <span className="text-yellow-600 text-2xl">✔</span>
            <p><strong className="font-semibold">Ethically Sourced</strong> – Supporting local beekeepers and sustainable practices.</p>
          </li>
          <li className="flex items-start space-x-4">
            <span className="text-yellow-600 text-2xl">✔</span>
            <p><strong className="font-semibold">Rich in Nutrients</strong> – Full of natural enzymes, vitamins, and antioxidants.</p>
          </li>
          <li className="flex items-start space-x-4">
            <span className="text-yellow-600 text-2xl">✔</span>
            <p><strong className="font-semibold">Versatile Use</strong> – Ideal for health, skincare, and natural sweetening.</p>
          </li>
          <li className="flex items-start space-x-4">
            <span className="text-yellow-600 text-2xl">✔</span>
            <p><strong className="font-semibold">Support Local Communities</strong> – Strengthening local economies by working directly with beekeepers.</p>
          </li>
        </ul>

        <h3 className="text-3xl font-semibold text-center text-gray-800 mb-8">Our Values</h3>
        <div className="space-y-6 max-w-2xl mx-auto text-lg text-gray-600">
          <p><strong className="font-semibold">Integrity:</strong> We are honest in our dealings with customers and beekeepers alike, ensuring transparency in every aspect of our business.</p>
          <p><strong className="font-semibold">Health:</strong> Your health and well-being are at the heart of everything we do. We aim to provide products that are not only delicious but also promote a healthier lifestyle.</p>
          <p><strong className="font-semibold">Sustainability:</strong> By working with local beekeepers and focusing on sustainable practices, we are committed to protecting the environment for future generations.</p>
          <p><strong className="font-semibold">Community:</strong> We believe in supporting local communities by partnering with beekeepers who care about the land and the animals they tend to, ensuring fair wages and promoting ethical practices.</p>
        </div>

        <h3 className="text-3xl font-semibold text-center text-gray-800 mb-8">Our Impact</h3>
        <p className="text-lg text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto">
          Deepraj Natural Honey is more than just a product – it’s a movement towards a more sustainable and healthier future. By purchasing our honey, you are not only getting a top-quality product but also supporting a network of small-scale, ethical beekeepers.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Our impact extends beyond the hive: we actively contribute to the education of our consumers about the benefits of raw, natural honey and the importance of protecting the honeybees that make it possible. We also fund local projects aimed at preserving the biodiversity of the regions where we source our honey.
        </p>

        <h3 className="text-3xl font-semibold text-center text-gray-800 mb-8">Versatile Use for Your Wellness</h3>
        <ul className="space-y-6 max-w-2xl mx-auto text-lg text-gray-600">
          <li className="flex items-start space-x-4">
            <span className="text-yellow-600 text-2xl">✔</span>
            <p><strong className="font-semibold">Natural Sweetener:</strong> A healthy, natural alternative to sugar in your drinks and baked goods.</p>
          </li>
          <li className="flex items-start space-x-4">
            <span className="text-yellow-600 text-2xl">✔</span>
            <p><strong className="font-semibold">Skincare:</strong> Honey’s natural antimicrobial properties make it ideal for soothing and moisturizing the skin. Apply it as a face mask or as a treatment for dry skin.</p>
          </li>
          <li className="flex items-start space-x-4">
            <span className="text-yellow-600 text-2xl">✔</span>
            <p><strong className="font-semibold">Energy Booster:</strong> A spoonful of honey before or after exercise can provide a natural energy boost and aid in muscle recovery.</p>
          </li>
          <li className="flex items-start space-x-4">
            <span className="text-yellow-600 text-2xl">✔</span>
            <p><strong className="font-semibold">Immune Support:</strong> Raw honey contains antioxidants and antibacterial properties that can help boost your immune system naturally.</p>
          </li>
        </ul>

        <div className="text-center mt-12">
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">Experience the Golden Taste of Nature – Experience Deepraj.</h3>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Join us in savoring the sweetness of nature’s bounty, and make a conscious choice for your health and the planet. At Deepraj, we are dedicated to bringing you honey that is as pure, natural, and nourishing as it can be.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mt-4">
            Thank you for choosing Deepraj Natural Honey. We look forward to being a part of your journey to wellness.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AboutUs;
