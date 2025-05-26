import React from 'react';
import img from '../images/WhatsApp Image 2025-02-03 at 15.41.17_76cc442a.jpg';
import { Link } from 'react-router-dom';

const Intro = () => {
    return (
        <>
            <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6 bg-black text-sky-500" id='about'>

                <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="fade-up">
                    <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                        <img alt="card img" className="rounded-t float-right" src={img} />
                    </div>
                    <div className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8" data-aos="zoom-in" data-aos-delay="500">
                        
                        <h4 className="text-3xl font-bold"> Our Mission
                        </h4>
                        <div>
                            <p className='my-3 text-xl font-semibold'>To become a global leader in unmanned systems
 and AI-powered solutions, empowering defense
 and enterprise sectors with cutting-edge
 technology that enhances security, efficiency, and
 resilience.</p>
                        </div>
                        <h4 className="text-3xl font-bold"> Our Vision
                        </h4>
                        <div>
                            <p className='my-3 text-xl font-semibold'> To design and deliver cutting-edge unmanned systems
 and intelligent software through indigenous innovation
 and rigorous R&D, aligned with the Make in India
 initiative—empowering defense, surveillance, and
 industrial sectors with reliable, autonomous, and high
performance solutions.</p>
                        </div>
                        <Link to="/contact" className="text-black bg-sky-500 hover:bg-sky-400 inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 group">
                            Contact us
                            <svg className="w-4 h-4 ml-1 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Intro;