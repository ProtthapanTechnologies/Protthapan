import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';

// Sample product data
const products = [
           {
    id: 'Gati',
    name: 'Gati',
    image: require('../images/gati_image.png'),
    short:" High Speed tactical drone",
    pdf: require('../images/gati.jpg'),
  },
       {
    id: 'Vajra',
    name: 'Vajra',
    image: require('../images/vajra.png'),

    short:"real-time day and night surveillance for tactical and security operations.",
    pdf: require('../images/Vajra – Watching Silently. Protecting Constantly..pdf'),
  },
  {
    id: 'rover',
    name: 'SurveilRover 4X',
    image: require('../images/Screenshot 2025-05-07 155511.png'),
    short: 'All-Terrain Surveillance Rover',
    // pdf: require('../images/sample-rover.pdf'), // Place PDF in images or public folder
  },
  {
    id: 'hexacopter',
    name: 'Hexacopter',
    image: require('../images/Screenshot 2025-05-07 162109.png'),
    short: 'Advanced Aerial Defense Drone',
    // pdf: require('../images/sample-hexacopter.pdf'),
  },
  {
    id: 'quadcopter',
    name: 'Quadcopter',
    image: require('../images/Screenshot 2025-05-07 161112.png'),
    short: 'State-of-the-art Quadcopter',
    // pdf: require('../images/sample-quadcopter.pdf'),
  },
  {
    id: 'workshop',
    name: 'Drone-building Workshop',
    image: require('../images/Screenshot 2025-05-07 160622.png'),
    short: 'Hands-on Drone Training',
    // pdf: require('../images/sample-workshop.pdf'),
  },
];

const Products = () => {
  const navigate = useNavigate();

  return (
    <>
      <NavBar />
      <div className="bg-gray-50 min-h-screen py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-extrabold text-gray-900 mb-2">Our Products</h1>
            <div className="flex justify-center mb-4">
              <div className="w-32 border-b-4 border-blue-600"></div>
            </div>
            <p className="text-lg text-gray-600">Explore our innovative robotics and drone solutions.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {products.map(product => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer group"
                onClick={() => navigate(`/products/${product.id}`)}
              >
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-bold text-xl text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.short}</p>
                  {/* <a
                    // href={product.pdf}
                    download
                    className="inline-block bg-blue-600 text-white font-semibold px-5 py-2 rounded-full shadow hover:bg-blue-700 transition-all duration-300"
                    onClick={e => e.stopPropagation()}
                  >
                    Download PDF        
                  </a> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;