import React from 'react';
import { Link } from 'react-router-dom';
import img from '../images/Screenshot 2025-05-07 155511.png';
import img2 from '../images/Screenshot 2025-05-07 160622.png';
import img1 from '../images/Screenshot 2025-05-07 162109.png';
import img3 from '../images/Screenshot 2025-05-07 161112.png';

const Portfolio = () => {
    const products = [
        {
            title: 'Rover',
            img: img,
            desc: 'Introducing the SurveilRover 4X: Your Ultimate All-Terrain Surveillance Companion!',
        },
        {
            title: 'Hexacopter',
            img: img1,
            desc: 'Revolutionizing aerial defense and surveillance with advanced hexacopter technology. Up to 40 minutes of flight time for patrol, monitoring, and tactical operations.',
        },
        {
            title: 'Drone-building workshops',
            img: img2,
            desc: 'Empowering individuals and organizations with hands-on training in drone technology. Practical experience in assembling, programming, and flying drones.',
        },
        {
            title: 'Quadcopter',
            img: img3,
            desc: 'Redefining aerial defense and surveillance with state-of-the-art quadcopter technology. Up to 40 minutes of flight time for patrol, surveillance, and tactical deployments.',
        },
    ];
    return (
        <div className="my-4 py-16 bg-gray-50 text-gray-800" id='portfolio'>
            <h2 className="text-center text-4xl font-extrabold uppercase mb-4 animate-fadeInUp">Products</h2>
            <div className='flex justify-center mb-12'>
                <div className='w-24 border-b-4 border-blue-600'></div>
            </div>
            <div className="px-4 animate-fadeInUp">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {products.map((product, idx) => (
                        <div key={product.title} className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center animate-fadeInUp" style={{ animationDelay: `${0.1 * idx}s` }}>
                            <img alt={product.title} className="rounded-t-2xl w-full h-48 object-cover" src={product.img} />
                            <div className="p-6 flex flex-col items-center text-center">
                                <h4 className="font-bold text-m mb-2">{product.title}</h4>
                                <p className="text-xs font-medium text-gray-600 mb-4 flex-grow">{product.desc}</p>
                                <Link to="/get-demo" className="mt-auto inline-block bg-blue-600 text-white font-bold px-6 py-2 rounded-full shadow-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 group">
                                    Schedule Demo
                                    <svg className="w-4 h-4 ml-2 inline-block group-hover:translate-x-1 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Portfolio;