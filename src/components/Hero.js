import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './Navbar/NavBar';
import heroImg from '../images/WhatsApp Image 2025-02-03 at 15.38.49_9761a00a.jpg';

const Hero = () => {
    return (
        <div className="hero bg-gray-50 min-h-screen flex flex-col" id="hero">
            <NavBar />
            <div className="container mx-auto flex-grow flex items-center px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-4 animate-fadeInUp">
                            Who We Are?
                        </h1>
                        <p className="text-lg text-gray-600 mb-8 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                            Our team is fueled by a shared vision: to push the boundaries of what unmanned technology can achieve through innovative engineering.
                        </p>
                        <div className="animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                            <Link to="/contact" className="inline-block bg-blue-600 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300">
                                Learn More
                            </Link>
                        </div>
                    </div>
                    <div className="animate-fadeIn" style={{ animationDelay: '0.3s' }}>
                        <img src={heroImg} alt="Hero" className="rounded-2xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-300" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;