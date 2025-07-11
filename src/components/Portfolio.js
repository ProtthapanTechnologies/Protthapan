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
        <div className="my-4 py-12 bg-black text-sky-500 min-h-screen" id='portfolio'>
            <h2 className="text-center text-4xl font-extrabold uppercase mb-8 animate-fadeInUp">Products</h2>
            <div className='flex justify-center mb-8'>
                <div className='w-24 border-b-4 border-sky-500'></div>
            </div>
            <div className="px-4 animate-fadeInUp">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {products.map((product, idx) => (
                        <div key={product.title} className="bg-gray-800 rounded-2xl shadow-2xl overflow-hidden hover:scale-105 transition-transform duration-300 flex flex-col items-center animate-scaleIn" style={{ animationDelay: `${0.1 * idx}s` }}>
                            <img alt={product.title} className="rounded-t-2xl w-full h-40 object-cover animate-fadeIn" src={product.img} />
                            <div className="p-6 flex flex-col items-center">
                                <h4 className="font-bold text-xl text-center mb-2 animate-fadeInUp">{product.title}</h4>
                                <p className="text-md font-medium text-center animate-fadeIn" style={{ color: '#bae6fd' }}>{product.desc}</p>
                                <Link to="/get-demo" className="mt-4 inline-flex items-center justify-center px-6 py-2 text-base font-bold rounded-xl shadow bg-gradient-to-r from-sky-400 to-sky-600 text-black hover:from-sky-500 hover:to-sky-700 transition-all duration-300 animate-scaleIn group">
                                    Schedule Demo
                                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
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