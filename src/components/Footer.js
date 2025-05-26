import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer max-w-full mx-auto px-4 sm:px-6 bg-black border-t border-gray-700 py-30">

                    {/* Top area: Blocks */}
                    <div className="grid sm:grid-cols-12 gap-5 py-8 md:py-12 border-t border-gray-700 lg:ml-11">

                        {/* 1st block */}
                        <div className="col-span-12 lg:col-span-4">
                            <div className="box-border border-b-4 border-sky-500 p-8 bg-gray-800 text-sky-500 text-center rounded-lg xl:w-80 mx-auto">
                                <h3 className="font-bold text-4xl mb-4">Protthapan</h3>
                            </div>
                        </div>

                        {/* 2nd block */}
                        <div className="col-span-6 md:col-span-6 lg:col-span-1 ml-7 mx-auto">
                            <h6 className="text-sky-500 text-xl font-bold mb-4">PAGES</h6>
                            <ul className="text-md">
                                <li className="mb-2">
                                    <HashLink to="#" className="text-sky-500 hover:text-gray-300 hover:tracking-wider transition duration-250 ease-in-out">About</HashLink>
                                </li>
                                <li className="mb-2">
                                    <HashLink to="#" className="text-sky-500 hover:text-gray-300 hover:tracking-wider transition duration-250 ease-in-out">Services</HashLink>
                                </li>
                                <li className="mb-2">
                                    <HashLink to="#" className="text-sky-500 hover:text-gray-300 hover:tracking-wider transition duration-250 ease-in-out">Contact</HashLink>
                                </li>
                            </ul>
                        </div>

                        {/* 3rd block */}
                        <div className="col-span-6 md:col-span-6 lg:col-span-4 mx-auto">
                            <h6 className="text-sky-500 text-xl font-bold mb-4">OUR SERVICES</h6>
                            <ul className="text-md">
                                <li className="mb-2">
                                    <Link to="#" className="text-sky-500 hover:text-gray-300 hover:tracking-wider transition duration-250 ease-in-out">Drone Data Processing & Analytics</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="#" className="text-sky-500 hover:text-gray-300 hover:tracking-wider transition duration-250 ease-in-out">AI-Powered Drone Solutions</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="#" className="text-sky-500 hover:text-gray-300 hover:tracking-wider transition duration-250 ease-in-out">Defense Robotics & SDR-Based Solutions</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="#" className="text-sky-500 hover:text-gray-300 hover:tracking-wider transition duration-250 ease-in-out">Type Certification & Compliances</Link>
                                </li>
                            </ul>
                        </div>

                        {/* 4th block */}
                        <div className="col-span-12 text-center mx-auto lg:col-span-3 font-bold uppercase text-sky-500">
                            <div className="text-xl mb-6">
                                Social Media Links.
                            </div>

                            <div className="text-md font-medium mb-6">
                                Follow us on social media.
                            </div>

                            <div className="mx-auto text-center mt-2">
                                <ul className="flex justify-center mb-4 md:mb-0">
                                    <a href="https://www.linkedin.com/in/protthapan-6202042bb/" target="_blank" rel="noreferrer" className="rounded-full flex justify-center bg-gray-800 h-8 text-sky-500 w-8 mx-1 text-center pt-1 hover:bg-sky-500 hover:text-black transition duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='fill-current font-black hover:animate-pulse'><circle cx="4.983" cy="5.009" r="2.188"></circle><path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path></svg>
                                    </a>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center md:justify-between justify-center mx-auto px-4">
                        <div className="w-full md:w-4/12 px-4 mx-auto text-center py-2">
                        </div>
                    </div>

                </div>
            </footer>
        </>
    )
}

export default Footer;
