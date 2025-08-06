import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';

// Same product data as Products.js (ideally, move to a shared file)
const products = [{
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
    desc:" Vajra is a high-endurance, foldable drone designed for real-time day and night surveillance in tactical and security operations.",
    // pdf: require('../images/sample-rover.pdf'),
  },
  {
    id: 'rover',
    name: 'SurveilRover 4X',
    image: require('../images/Screenshot 2025-05-07 155511.png'),
    desc: 'Introducing the SurveilRover 4X: Your Ultimate All-Terrain Surveillance Companion! Designed for defense and industrial applications.',
    // pdf: require('../images/sample-rover.pdf'),
  },
  {
    id: 'hexacopter',
    name: 'Hexacopter',
    image: require('../images/Screenshot 2025-05-07 162109.png'),
    desc: 'Revolutionizing aerial defense and surveillance with advanced hexacopter technology. Up to 40 minutes of flight time for patrol, monitoring, and tactical operations.',
    // pdf: require('../images/sample-hexacopter.pdf'),
  },
  {
    id: 'quadcopter',
    name: 'Quadcopter',
    image: require('../images/Screenshot 2025-05-07 161112.png'),
    desc: 'Redefining aerial defense and surveillance with state-of-the-art quadcopter technology. Up to 40 minutes of flight time for patrol, surveillance, and tactical deployments.',
    // pdf: require('../images/sample-quadcopter.pdf'),
  },
  {
    id: 'workshop',
    name: 'Drone-building Workshop',
    image: require('../images/Screenshot 2025-05-07 160622.png'),
    desc: 'Empowering individuals and organizations with hands-on training in drone technology. Practical experience in assembling, programming, and flying drones.',
    // pdf: require('../images/sample-workshop.pdf'),
  },
];

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <>
        <NavBar />
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Product Not Found</h2>
            <button onClick={() => navigate('/products')} className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-blue-700 transition-all duration-300">
              Back to Products
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <NavBar />
      <div className="bg-gray-50 min-h-screen py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
            <img src={product.image} alt={product.name} className="rounded-2xl shadow-xl w-full max-w-md object-cover" />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{product.name}</h1>
            <p className="text-lg text-gray-700 mb-6">{product.desc}</p>
            <a
              href={product.pdf}
              download
              className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-blue-700 transition-all duration-300 mb-4"
            >
              Download Product PDF
            </a>
            <br />
            <button
              onClick={() => navigate('/products')}
              className="inline-flex items-center bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-semibold shadow hover:bg-blue-200 transition-all duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Back to Products
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;