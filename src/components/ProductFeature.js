import Link from 'next/link';
import React from 'react';

const HoneyProductFeature = () => {
  // Array of honey product details
  const products = [
    {
      image: 'https://images.pexels.com/photos/12059214/pexels-photo-12059214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      name: 'Pure Wildflower Honey',
      description: 'Sourced from wildflowers, this honey is rich in flavor and packed with natural goodness.',
      features: ['100% natural', 'Rich in antioxidants', 'Unprocessed and raw'],
      link: '#',
    },
    {
      image: 'https://images.pexels.com/photos/18231108/pexels-photo-18231108/free-photo-of-jars-of-honey-on-ground.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      name: 'Organic Manuka Honey',
      description: 'Known for its medicinal properties, this Manuka honey is perfect for boosting immunity.',
      features: ['UMF certified', 'Antibacterial properties', 'Supports digestive health'],
      link: '#',
    },
    {
      image: 'https://images.pexels.com/photos/16432462/pexels-photo-16432462/free-photo-of-honey-flowing-through-spoon.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      name: 'Golden Clover Honey',
      description: 'A light and sweet honey with a delicate floral aroma, perfect for everyday use.',
      features: ['Mild flavor', 'Great for baking', 'Smooth texture'],
      link: '#',
    },
    {
      image: 'https://images.pexels.com/photos/10235109/pexels-photo-10235109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      name: 'Creamed Honey',
      description: 'Smooth and spreadable, this creamed honey is a delightful addition to your breakfast table.',
      features: ['Velvety texture', 'Perfect for toast', 'Naturally crystallized'],
      link: '#',
    },
    {
      image: 'https://images.pexels.com/photos/15201474/pexels-photo-15201474/free-photo-of-honey-dipper-over-honey-jar.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      name: 'Buckwheat Honey',
      description: 'Dark and robust, this honey is rich in minerals and has a unique, molasses-like flavor.',
      features: ['High in iron', 'Distinctive flavor', 'Ideal for marinades'],
      link: '#',
    },
    {
      image: 'https://images.pexels.com/photos/11164379/pexels-photo-11164379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      name: 'Lavender Honey',
      description: 'Infused with the essence of lavender, this honey is both aromatic and soothing.',
      features: ['Calming aroma', 'Perfect for teas', 'Floral and sweet'],
      link: '#',
    },
    {
      image: 'https://images.pexels.com/photos/7473575/pexels-photo-7473575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      name: 'Acacia Honey',
      description: 'Light and clear, this honey is known for its mild taste and slow crystallization.',
      features: ['Low glycemic index', 'Great for sweetening drinks', 'Long shelf life'],
      link: '#',
    },
    {
      image: 'https://images.pexels.com/photos/10925937/pexels-photo-10925937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      name: 'Orange Blossom Honey',
      description: 'A citrusy honey with a refreshing flavor, perfect for desserts and beverages.',
      features: ['Zesty flavor', 'Pairs well with tea', 'Rich in vitamins'],
      link: '#',
    },
  ];

  return (
    <section className="bg-amber-50 py-6 px-4">
      <p className="text-center text-3xl font-bold">Explore Our Honey Collection</p>
      <p className="text-md mb-4 text-center">Pure, Natural, and Delicious</p>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Product Image */}
            <img src={product.image} alt={product.name} className="w-full h-72 object-cover p-5" />
            <div className="p-6">
              {/* Product Title */}
              <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
              {/* Product Description */}
              <p className="text-gray-600 mt-2">{product.description}</p>

              {/* Product Features List */}
              <ul className="mt-4 space-y-2 text-gray-700">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M6 10a4 4 0 1 1 8 0 4 4 0 0 1-8 0zM2 10a8 8 0 1 0 16 0 8 8 0 0 0-16 0z" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Call to Action Button */}
              <Link href={product.link} className="inline-block mt-4 bg-amber-500 text-white py-3 px-6 rounded-lg hover:bg-amber-600 transition-colors duration-300">
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HoneyProductFeature;