import React from 'react';
// You may need to install react-icons: npm install react-icons
import { FaChartBar, FaRobot, FaBrain, FaCertificate } from 'react-icons/fa';

const Services = () => {
    const services = [
        {
            icon: <FaChartBar className="w-12 h-12 text-blue-600 mb-4" />,
            title: 'Drone Data Processing & Analytics',
            desc: 'High-precision DEM (Digital Elevation Model) and DTM (Digital Terrain Model) generation. Orthomosaic mapping for geospatial and surveying applications. Advanced AI-powered analytics for aerial data interpretation.'
        },
        {
            icon: <FaBrain className="w-12 h-12 text-blue-600 mb-4" />,
            title: 'AI-Powered Drone Solutions',
            desc: 'Development of AI-driven automation for drone-based applications. Custom computer vision models for object detection, tracking, and analytics. AI-powered terrain analysis, object classification, and change detection.'
        },
        {
            icon: <FaRobot className="w-12 h-12 text-blue-600 mb-4" />,
            title: 'Defense Robotics',
            desc: 'Advanced RF-based communication systems for secure and long-range operations.'
        },
        {
            icon: <FaCertificate className="w-12 h-12 text-blue-600 mb-4" />,
            title: 'Type Certification & Compliances',
            desc: 'Regulatory compliance & certification support for drone manufacturers. Assistance in obtaining DGCA-type certification for UAVs in India. Ensuring adherence to safety, security, and operational standards.'
        }
    ];

    return (
        <div className="py-10 bg-white" id="services">
            <div className="container mx-auto px-0">
                <div className="text-center mb-16 animate-fadeInUp">
                    <h2 className="text-4xl font-extrabold text-gray-900 uppercase">Our Services</h2>
                    <p className="text-lg text-gray-500 mt-2">We offer a wide range of cutting-edge solutions.</p>
                    <div className='flex justify-center mt-4'>
                        <div className='w-24 border-b-4 border-blue-600'></div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 p-8 rounded-2xl shadow-lg text-center flex flex-col items-center transform hover:-translate-y-2 transition-transform duration-300 animate-fadeInUp h-full"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {service.icon}
                            <h3 className="text-md font-bold text-gray-900 mb-3">{service.title}</h3>
                            <p className="text-xs text-gray-600 leading-relaxed flex-grow">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;