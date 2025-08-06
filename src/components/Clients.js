import React from 'react';
import kws from '../images/clients/GUJARAT_GOV.jpg';
import geps from '../images/clients/NIRMA.png';
import protergia from '../images/clients/Indian_Army_Insignia_round.png';
import rru from '../images/RRU.png';
import niti from "../images/NITI_Aayog_logo.svg.png"

const clientImage = {
    height: '10rem',
    width: 'auto',
};

const Clients = () => {
    return (
        <div className="py-16 bg-white animate-fadeInUp">
            <section>
                <div className="my-4 py-4">
                    <h2 className="my-2 text-center text-3xl text-gray-900 uppercase font-bold animate-fadeInUp">
                        Our Clients
                    </h2>
                    <div className="flex justify-center mb-4">
                        <div className="w-24 border-b-4 border-blue-600"></div>
                    </div>
                    <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-gray-600 animate-fadeIn">
                        Some of our clients.
                    </h2>
                </div>
                <div className="p-8 md:p-16 animate-fadeInUp">
                    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
                        <div
                            style={clientImage}
                            className="overflow-hidden p-4 flex justify-center items-center transition-all ease-in-out opacity-80 hover:opacity-100 transform hover:scale-110 duration-300 w-48 bg-gray-50 rounded-xl shadow-md animate-fadeInUp"
                        >
                            <img
                                src={kws}
                                alt="Gujarat Government"
                                className="object-contain w-full h-full"
                            />
                        </div>
                        <div
                            style={clientImage}
                            className="overflow-hidden p-4 flex justify-center items-center transition-all ease-in-out opacity-80 hover:opacity-100 transform hover:scale-110 duration-300 w-48 bg-gray-50 rounded-xl shadow-md animate-fadeInUp"
                            style={{ animationDelay: '0.2s' }}
                        >
                            <img
                                src={protergia}
                                alt="Indian Army"
                                className="object-contain w-full h-full"
                            />
                        </div>
                        <div
                            style={clientImage}
                            className="overflow-hidden p-4 flex justify-center items-center transition-all ease-in-out opacity-80 hover:opacity-100 transform hover:scale-110 duration-300 w-48 bg-gray-50 rounded-xl shadow-md animate-fadeInUp"
                            style={{ animationDelay: '0.4s' }}
                        >
                            <img
                                src={geps}
                                alt="Nirma University"
                                className="object-contain w-full h-full"
                            />
                        </div>
                        <div
                            style={clientImage}
                            className="overflow-hidden p-4 flex justify-center items-center transition-all ease-in-out opacity-80 hover:opacity-100 transform hover:scale-110 duration-300 w-48 bg-gray-50 rounded-xl shadow-md animate-fadeInUp"
                            style={{ animationDelay: '0.6s' }}
                        >
                            <img
                                src={niti}
                                alt="NITI Aayog"
                                className="object-contain w-full h-full"
                            />
                        </div>
                        <div
                            style={clientImage}
                            className="overflow-hidden p-4 flex justify-center items-center transition-all ease-in-out opacity-80 hover:opacity-100 transform hover:scale-110 duration-300 w-48 bg-gray-50 rounded-xl shadow-md animate-fadeInUp"
                            style={{ animationDelay: '0.8s' }}
                        >
                            <img
                                src={rru}
                                alt="RRU"
                                className="object-contain w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Clients;