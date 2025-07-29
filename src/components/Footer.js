import React from 'react';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <footer className="bg-gray-50 text-gray-800 py-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    {/* About Section */}
                    <div className="animate-fadeInUp">
                        <h3 className="text-2xl font-bold text-gray-900">Protthapan</h3>
                        <p className="text-gray-600 mt-2">Engineering intelligent, reliable systems.</p>
                    </div>

                    {/* Quick Links */}
                    <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                        <h4 className="text-xl font-bold text-gray-900">Quick Links</h4>
                        <ul className="mt-4 space-y-2">
                            <li><HashLink smooth to="/#about" className="text-gray-600 hover:text-blue-600">About</HashLink></li>
                            <li><HashLink smooth to="/#services" className="text-gray-600 hover:text-blue-600">Services</HashLink></li>
                            <li><HashLink smooth to="/gallery" className="text-gray-600 hover:text-blue-600">Gallery</HashLink></li>
                            <li><HashLink smooth to="/contact#contact" className="text-gray-600 hover:text-blue-600">Contact</HashLink></li>
                        </ul>
                    </div>

                    {/* Follow Us */}
                    <div className="animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                        <h4 className="text-xl font-bold text-gray-900">Follow Us</h4>
                        <div className="flex justify-center md:justify-start space-x-4 mt-4">
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transform hover:scale-110">
                                <i className="fab fa-linkedin fa-2x"></i>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 transform hover:scale-110">
                                <i className="fab fa-twitter fa-2x"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="text-center text-gray-500 mt-12 border-t border-gray-200 pt-6">
                    <p>&copy; {new Date().getFullYear()} Protthapan. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
