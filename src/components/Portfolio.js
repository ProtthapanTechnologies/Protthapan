import React from 'react';
import { Link } from 'react-router-dom';
import img from '../images/Screenshot 2025-05-07 155511.png';
import img2 from '../images/Screenshot 2025-05-07 160622.png';
import img1 from '../images/Screenshot 2025-05-07 162109.png';
import img3 from '../images/Screenshot 2025-05-07 161112.png';

const Portfolio = () => {
    return (
        <>
            <div className="my-4 py-4 bg-black text-sky-500" id='portfolio'>
                <h2 className="my-2 text-center text-3xl uppercase font-bold">Products</h2>
                <div className='flex justify-center'>
                    <div className='w-24 border-b-4 border-sky-500 mb-8'></div>
                </div>

                <div className="px-4" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">                            
                        <div className="bg-gray-800 transition-all ease-in-out duration-400 overflow-hidden text-sky-500 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-justify text-sm">
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Rover</h4>
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img} />
                                <p className="text-md font-medium leading-5 h-auto md:h-48">
                                    Introducing the SurveilRover 4X: Your Ultimate All-Terrain Surveillance Companion!
                                </p>
                                <div className="flex justify-center my-4">
                                    <Link to="/get-demo" className="text-black bg-sky-500 hover:bg-sky-400 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
                                        Schedule Demo
                                        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-800 transition-all ease-in-out duration-400 overflow-hidden text-sky-500 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-justify text-sm">
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Hexacopter</h4>
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img1} />
                                <p className="text-md font-medium leading-5 h-auto md:h-48">
                                    At Protthapan, we are revolutionizing aerial defense and surveillance with our advanced hexacopter technology. Designed for long-endurance missions, our hexacopters offer up to 40 minutes of flight time, making them ideal for patrol, monitoring, and tactical operations.
                                </p>
                                <div className="flex justify-center my-4">
                                    <Link to="/get-demo" className="text-black bg-sky-500 hover:bg-sky-400 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
                                        Schedule Demo
                                        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-800 transition-all ease-in-out duration-400 overflow-hidden text-sky-500 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-justify text-sm">
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Drone-building workshops</h4>
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img2} />
                                <p className="text-md font-medium leading-5 h-auto md:h-48">
                                    At Protthapan, we take pride in empowering individuals, defense personnel, and organizations with hands-on training in drone technology. Our expert-led drone-building workshops provide participants with practical experience in assembling, programming, and flying drones for various applications, including surveillance, reconnaissance, and industrial use.
                                </p>
                                <div className="flex justify-center my-4">
                                    <Link to="/get-demo" className="text-black bg-sky-500 hover:bg-sky-400 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
                                        Schedule Demo
                                        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-800 transition-all ease-in-out duration-400 overflow-hidden text-sky-500 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-justify text-sm">
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Quadcopter</h4>
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img3} />
                                <p className="text-md font-medium leading-5 h-auto md:h-48">
                                    At Protthapan, we are redefining aerial defense and surveillance with our state-of-the-art quadcopter technology. Built for long-duration missions, our quadcopters deliver up to 40 minutes of flight time, making them ideal for patrol, surveillance, and tactical deployments.
                                </p>
                                <div className="flex justify-center my-4">
                                    <Link to="/get-demo" className="text-black bg-sky-500 hover:bg-sky-400 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
                                        Schedule Demo
                                        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </Link>
                                </div>
                            </div>
                        </div>                    
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio;