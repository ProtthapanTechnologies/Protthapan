import React from 'react';
import img from '../images/WhatsApp Image 2025-02-03 at 15.41.17_76cc442a.jpg';
import { Link } from 'react-router-dom';

const Intro = () => {
    return (
        <div className="m-auto max-w-6xl p-2 md:p-12 bg-white text-gray-800" id='about'>
            <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left items-center animate-fadeInUp">
                <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center animate-fadeIn" style={{ animationDelay: '0.7s' }}>
                    <img alt="intro" className="rounded-xl shadow-xl object-cover" src={img} />
                </div>
                <div className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8 animate-fadeInUp">
                    <h4 className="text-xl font-extrabold text-gray-900 mb-4">Protthapan Technologies is a cutting-edge robotics and UAV manufacturing company specializing in indigenous drone systems, UGVs, and USVs for defense and industrial applications</h4>
                    <p className='my-3 text-l font-semibold text-gray-600'>Our team is well vast in software development and is ready to help develop the applications of your choice.</p>
                    <p className='my-3 text-l font-semibold text-gray-600'>We take responsibility for building custom software solutions that cater to automation of your business processes and improve efficiency.</p>
                    <Link to="/contact" className="inline-block bg-blue-600 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 group animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                        Contact us
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Intro;