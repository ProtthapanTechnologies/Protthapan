import React from 'react';
import img from '../images/analysis.jpg'; 
import img2 from '../images/al-drone.jpg';
import img3 from '../images/sdr.png';
import img4 from '../images/certificate.jpg';

const Services = () => {
    return (
        <div id="services" className="bg-black py-16 text-sky-500 min-h-screen">
            <section data-aos="zoom-in-down">
                <div className="my-4 py-4">
                    <h2 className="text-center text-4xl font-extrabold uppercase mb-2 animate-fadeInUp">Services</h2>
                    <div className='flex justify-center mb-6'>
                        <div className='w-24 border-b-4 border-sky-500'></div>
                    </div>
                    <h2 className="mx-12 text-center text-xl lg:text-2xl font-semibold animate-fadeIn">
                        We are deeply committed to the growth and success of our clients.
                    </h2>
                </div>

                <div className="px-4 md:px-12 animate-fadeInUp">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
                        {[{
                            img, title: 'Drone Data Processing & Analytics', desc: `High-precision DEM (Digital Elevation Model) and DTM (Digital Terrain Model) generation. Orthomosaic mapping for geospatial and surveying applications. Advanced AI-powered analytics for aerial data interpretation. Solutions for surveying, mapping, and decision-making across industries.`
                        }, {
                            img: img2, title: 'AI-Powered Drone Solutions', desc: `Development of AI-driven automation for drone-based applications. Custom computer vision models for object detection, tracking, and analytics. AI-powered terrain analysis, object classification, and change detection.`
                        }, {
                            img: img3, title: 'Defense Robotics', desc: `Advanced RF-based communication systems for secure and long-range operations.`
                        }, {
                            img: img4, title: 'Type Certification & Compliances', desc: `Regulatory compliance & certification support for drone manufacturers. Assistance in obtaining DGCA-type certification for UAVs in India. Ensuring adherence to safety, security, and operational standards.`
                        }].map((service, idx) => (
                            <div key={service.title} className="bg-gray-800 rounded-2xl shadow-2xl overflow-hidden hover:scale-105 transition-transform duration-300 flex flex-col items-center animate-scaleIn" style={{ animationDelay: `${0.1 * idx}s` }}>
                                <img alt={service.title} className="rounded-t-2xl w-full h-40 object-cover animate-fadeIn" src={service.img} />
                                <div className="p-6 flex flex-col items-center">
                                    <h3 className="font-bold text-xl text-center mb-2 animate-fadeInUp">{service.title}</h3>
                                    <p className="text-md font-medium text-center animate-fadeIn" style={{ color: '#bae6fd' }}>{service.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services;