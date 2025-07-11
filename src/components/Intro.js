import React from 'react';
import img from '../images/WhatsApp Image 2025-02-03 at 15.41.17_76cc442a.jpg';
import { Link } from 'react-router-dom';

const Intro = () => {
    return (
        <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6 bg-black text-sky-500 animate-fadeInUp" id='about'>
            <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left items-center animate-fadeInUp">
                <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center animate-scaleIn">
                    <img alt="intro" className="rounded-2xl shadow-2xl w-full object-cover animate-fadeIn" src={img} />
                </div>
                <div className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8 animate-fadeInUp">
                    <h4 className="text-3xl font-extrabold mb-4 animate-fadeInUp">Protthapan Technologies is a cutting-edge robotics and UAV manufacturing company specializing in indigenous drone systems, UGVs, and USVs for defense and industrial applications</h4>
                    <p className='my-3 text-xl font-semibold text-sky-300 animate-fadeIn'>Our team is well vast in software development and is ready to help develop the applications of your choice.</p>
                    <p className='my-3 text-xl font-semibold text-sky-300 animate-fadeIn'>We take responsibility for building custom software solutions that cater to automation of your business processes and improve efficiency.</p>
                    <Link to="/contact" className="text-black bg-gradient-to-r from-sky-400 to-sky-600 hover:from-sky-500 hover:to-sky-700 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg font-bold shadow-xl rounded-2xl sm:w-auto sm:mb-0 group animate-scaleIn transition-all duration-300">
                        Contact us
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Intro;