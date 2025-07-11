import React from 'react';
import kws from '../images/clients/GUJARAT_GOV.jpg';
import geps from '../images/clients/NIRMA.png';
import protergia from '../images/clients/Indian_Army_Insignia_round.png';

const clientImage = {
    height: '10rem',
    width: 'auto',
    mixBlendMode: 'colorBurn',
};

const Clients = () => {
    return (
        <div className="mt-8 bg-black animate-fadeInUp min-h-[40vh]">
            <section>
                <div className="my-4 py-4">
                    <h2 className="my-2 text-center text-3xl text-sky-500 uppercase font-bold animate-fadeInUp">
                        Our Clients
                    </h2>
                    <div className="flex justify-center mb-4">
                        <div className="w-24 border-b-4 border-sky-500"></div>
                    </div>
                    <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-sky-500 animate-fadeIn">
                        Some of our clients.
                    </h2>
                </div>
                <div className="p-8 md:p-16 animate-fadeInUp">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 justify-items-center">
                        <div
                            style={clientImage}
                            className="overflow-hidden flex justify-center items-center transition-all ease-in-out opacity-70 hover:opacity-100 w-32 md:w-48 bg-gray-800 rounded-xl shadow-xl animate-scaleIn"
                        >
                            <img
                                src={kws}
                                alt="client"
                                className="object-contain w-full h-full"
                            />
                        </div>
                        <div
                            style={clientImage}
                            className="overflow-hidden flex justify-center items-center transition-all ease-in-out opacity-70 hover:opacity-100 w-32 md:w-48 bg-gray-800 rounded-xl shadow-xl animate-scaleIn"
                        >
                            <img
                                src={protergia}
                                alt="client"
                                className="object-contain w-full h-full"
                            />
                        </div>
                        <div
                            style={clientImage}
                            className="overflow-hidden flex justify-center items-center transition-all ease-in-out opacity-70 hover:opacity-100 w-32 md:w-48 bg-gray-800 rounded-xl shadow-xl animate-scaleIn"
                        >
                            <img
                                src={geps}
                                alt="client"
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