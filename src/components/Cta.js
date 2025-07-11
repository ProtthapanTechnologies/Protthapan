import React from 'react';
import { Link } from 'react-router-dom';

const Cta = () => {
    return ( 
        <div className="w-full flex items-center justify-center bg-black text-sky-500 cta animate-fadeInUp min-h-[30vh]">
            <div className="mx-8 w-full text-center lg:text-left py-16 px-4 md:px-12 flex flex-col lg:flex-row lg:justify-between items-center animate-fadeInUp">
                <div className="w-full flex flex-col lg:flex-row lg:justify-around items-center">
                    <div className="mb-4 animate-fadeInUp">
                        <p className="text-2xl md:text-4xl font-extrabold mb-4">Are you ready to innovate?</p>
                        <p className="text-lg md:text-2xl text-sky-300">
                            Get in touch and let us build something amazing <span className="font-black">together!</span>
                        </p>
                    </div>
                    <div className="w-full lg:w-72 pt-6 lg:mx-12 animate-scaleIn">
                        <Link 
                            to="/contact" 
                            className="bg-gradient-to-r from-sky-400 to-sky-600 hover:from-sky-500 hover:to-sky-700 text-black font-bold justify-center text-center rounded-lg px-10 py-3 flex items-center group shadow-xl transition-all duration-300 animate-scaleIn"
                        >
                            Send a message
                            <svg 
                                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 20 20" 
                                fill="currentColor"
                            >
                                <path 
                                    fillRule="evenodd" 
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cta;