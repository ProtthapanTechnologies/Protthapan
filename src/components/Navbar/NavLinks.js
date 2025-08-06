import React from 'react';
import { HashLink } from 'react-router-hash-link';

const NavLinks = () => {
    const linkStyle = "px-4 py-2 font-semibold text-gray-600 hover:text-blue-600 rounded-md transition-all duration-300 transform hover:scale-105";
    const buttonStyle = "ml-4 px-6 py-2 font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300";

    return (
        <>
            <HashLink className={linkStyle} smooth to="/#about">About</HashLink>
            <HashLink className={linkStyle} smooth to="/gallery">Gallery</HashLink>
            <HashLink className={linkStyle} to="/news">News</HashLink>
            <HashLink className={linkStyle} to="/contact#contact">Contact Us</HashLink>
            <HashLink className={linkStyle} smooth to="/products">Products</HashLink>
            <HashLink className={buttonStyle} smooth to="/get-demo#demo">
                Schedule Demo
            </HashLink>
        </>
    );
};

export default NavLinks;
