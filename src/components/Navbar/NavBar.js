import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import NavLinks from './NavLinks';
import img from '../../images/Black.-1-x-1.jpg';

const NavBar = () => {
    const [top, setTop] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const scrollHandler = () => {
            setTop(window.pageYOffset <= 20);
        };
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-30 transition duration-300 ease-in-out ${!top && 'bg-white backdrop-blur-sm shadow-lg'}`}>
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                {/* Logo */}
                <HashLink smooth to="/#hero" className="flex items-center animate-fadeIn">
                    <img alt="logo" className="w-10 h-10 rounded-full object-cover" src={img} />
                    <h1 className="ml-3 font-bold text-2xl text-gray-800">Protthapan</h1>
                </HashLink>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center">
                    <NavLinks />
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 hover:text-blue-600 focus:outline-none">
                        <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            {isOpen ? (
                                <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                            ) : (
                                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden bg-white shadow-md">
                    <div className="flex flex-col items-center space-y-4 py-4 animate-fadeIn">
                        <NavLinks />
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
