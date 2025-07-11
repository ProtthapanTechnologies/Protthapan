import React, { useState, useEffect } from 'react';
import NavLinks from '../Navbar/NavLinks';
import { HashLink } from 'react-router-hash-link';
import img from '../../images/Black.-1-x-1.jpg';

const NavBar = () => {
    const [top, setTop] = useState(!window.scrollY);
    const [isOpen, setisOpen] = React.useState(false);

    function handleClick() {
        setisOpen(!isOpen);
    }

    useEffect(() => {
        const scrollHandler = () => {
            window.pageYOffset > 10 ? setTop(false) : setTop(true);
        };
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, [top]);

    return (
        <nav className={`fixed top-0 w-full z-30 transition duration-300 ease-in-out mb-16 animate-fadeInUp font-sans text-[17px] tracking-tight ${!top ? 'bg-gray-900/90 shadow-lg backdrop-blur' : 'bg-transparent'}`}>
            <div className="flex flex-row justify-between items-center py-2 px-4 md:px-12 animate-fadeInUp">
                <div className="flex flex-row justify-center items-center text-center font-extrabold animate-scaleIn">
                    <img alt="logo" className="w-12 h-12 rounded-full object-cover mr-4 shadow-lg animate-fadeIn" src={img} />
                    <HashLink smooth to="/#hero">
                        <h1 className="font-extrabold text-3xl md:text-4xl text-sky-500 tracking-tight leading-tight">Protthapan</h1>
                    </HashLink>
                </div>
                <div className="group flex flex-col items-center">
                    <button className="p-2 rounded-lg lg:hidden text-sky-500 focus:outline-none animate-scaleIn" onClick={handleClick} aria-label="Open Menu">
                        <svg className="h-7 w-7 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                            ) : (
                                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z" />
                            )}
                        </svg>
                    </button>
                    <div className="hidden space-x-6 lg:inline-block p-5 animate-fadeInUp font-medium">
                        <NavLinks />
                    </div>
                    <div
                        className={`fixed transition-transform duration-300 ease-in-out flex justify-center left-0 w-full h-auto rounded-md p-24 bg-gray-900/95 lg:hidden shadow-xl top-14 ${isOpen ? 'block animate-fadeInUp' : 'hidden'}`}
                    >
                        <div className="flex flex-col space-y-6 animate-fadeInUp font-medium">
                            <NavLinks />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
