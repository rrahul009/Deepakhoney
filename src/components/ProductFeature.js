import Link from 'next/link';
import React from 'react';

const ProductFeature = () => {
  // Array of cleaning product details
  const products = [
    {
      image: 'https://images.apollo247.in/pub/media/catalog/product/A/P/APN0033_1-JULY23_1.jpg',
      name: 'Multi-Surface Disinfectant Spray',
      description: 'Powerful disinfectant spray that kills 99.9% of germs and viruses, safe for all surfaces.',
      features: ['Kills 99.9% of bacteria and viruses', 'For use on hard surfaces', 'Pleasant fragrance'],
      link: '#',
    },
    {
      image: 'https://wavex.in/cdn/shop/products/71Co0lCvGSL._SL1500.jpg?v=1621419714',
      name: 'All-Purpose Cleaner Gel',
      description: 'Gel-based cleaner for tackling tough stains on countertops, stovetops, and other surfaces.',
      features: ['Gel consistency for easy application', 'Tough on grease and grime', 'Safe for all kitchen surfaces'],
      link: '#',
    },
    {
      image: 'https://procarecleaner.com/cdn/shop/files/20413_015_NEW_Amazon.jpg?v=1686928561&width=1946',
      name: 'Floor Cleaner Concentrate',
      description: 'Concentrated floor cleaner that leaves floors sparkling clean and streak-free.',
      features: ['Concentrated formula', 'Streak-free shine', 'Safe for tile, wood, and laminate floors'],
      link: '#',
    },
    {
      image: 'https://media.istockphoto.com/id/1150282133/photo/cleaning-window-pane-with-detergent.jpg?s=612x612&w=0&k=20&c=BkzVas8qZ_VLxLDWpDAPbVSDRXgRFMxbI3_NHcamUfk=',
      name: 'Glass and Window Cleaner',
      description: 'Streak-free glass cleaner for windows, mirrors, and other glass surfaces.',
      features: ['Streak-free shine', 'Works on mirrors and glass', 'Non-toxic formula'],
      link: '#',
    },
    {
      image: 'https://t3.ftcdn.net/jpg/11/03/55/10/360_F_1103551011_078NysEwIweKVISMxNxua0qVZ7Ww6dps.jpg',
      name: 'Heavy Duty Degreaser',
      description: 'Tough degreaser for removing grease and oil from kitchen appliances and industrial equipment.',
      features: ['Cuts through grease and oil', 'Heavy-duty formula', 'Ideal for kitchen appliances'],
      link: '#',
    },
    {
      image: 'https://reviewed-com-res.cloudinary.com/image/fetch/s--n6XRyxeW--/b_white,c_limit,cs_srgb,f_auto,fl_progressive.strip_profile,g_center,q_auto,w_1200/https://reviewed-production.s3.amazonaws.com/1682000972474/Hero-20230410_EcofriendlyLaundryDetergentHeroV3_Renzi.PNG',
      name: 'Eco-Friendly Laundry Detergent',
      description: 'An environmentally friendly laundry detergent that works great on tough stains while being gentle on fabrics.',
      features: ['Biodegradable', 'No harsh chemicals', 'Ideal for sensitive skin'],
      link: '#',
    },
    {
      image: 'https://www.slickproductsusa.com/cdn/shop/files/SP-HDCD-Group.jpg?v=1683865420',
      name: 'Heavy Duty Cleaner and Degreaser',
      description: 'Ideal for industrial and kitchen use, removes stubborn grease, oil, and grime.',
      features: ['Removes grease and oil', 'Safe for industrial and kitchen  ', 'Fast-acting formula'],
      link: '#',
    },
    {
      image: 'https://m.media-amazon.com/images/I/61Ow7f2wcgL._AC_UF1000,1000_QL80_.jpg',
      name: 'Bathroom Mold and Mildew Remover',
      description: 'Powerful cleaner that eliminates mold, mildew, and soap scum from bathroom surfaces.',
      features: ['Kills mold and mildew', 'Cleans soap scum and stains', 'Safe for tiles and grout'],
      link: '#',
    },
  ];

  return (
    <section className="bg-gray-50 py-6 px-4">
      <p className="text-center text-3xl font-bold">Complete Range of Cleaning Solutions</p>
      <p className="text-md mb-4 text-center">Housekeeping Products & Accessories</p>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Product Image */}
            <img src={product.image} alt={product.name} className="w-full h-72 object-cover p-5" />
            <div className="p-6">
              {/* Product Title */}
              <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2> {/* Display Product Name */}
              {/* Product Description */}
              <p className="text-gray-600 mt-2">{product.description}</p>

              {/* Product Features List */}
              <ul className="mt-4 space-y-2 text-gray-700">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M6 10a4 4 0 1 1 8 0 4 4 0 0 1-8 0zM2 10a8 8 0 1 0 16 0 8 8 0 0 0-16 0z" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Call to Action Button */}
              <Link href={product.link} className="inline-block mt-4 bg-teal-500 text-white py-3 px-6 rounded-lg hover:bg-teal-600 transition-colors duration-300"   style={{ backgroundColor: '#005f73' }}>
                
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductFeature;
