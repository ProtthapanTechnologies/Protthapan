import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import heroImg from '../images/WhatsApp Image 2025-02-03 at 15.38.49_9761a00a.jpg';

const Hero = () => {
    return (
        <>
            <div className="hero bg-black text-sky-500 min-h-screen flex flex-col justify-between" id='hero'>
                <div>
                    <NavBar />
                </div>
                <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-4 md:px-12 py-16 animate-fadeInUp">
                    <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-6 animate-fadeInUp">
                        <h1 className="mb-2 md:text-5xl text-3xl font-extrabold tracking-tight animate-fadeInUp">
                            Who We Are?
                        </h1>
                        <p className="text-xl font-medium tracking-tight mb-2 text-sky-300 animate-fadeIn">
                            Our team is fueled by a shared vision: to engineer intelligent, reliable systems that push the boundaries of what unmanned technology can achieve.
                        </p>
                        <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-2xl shadow-xl bg-gradient-to-r from-sky-400 to-sky-600 text-black hover:from-sky-500 hover:to-sky-700 transition-all duration-300 animate-scaleIn group">
                            Learn more
                            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </Link>
                    </div>
                    <div className="flex justify-center lg:justify-end w-full lg:w-1/2 animate-scaleIn">
                        <img alt="hero" className="rounded-2xl shadow-2xl w-full max-w-md object-cover animate-fadeIn" src={heroImg} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;