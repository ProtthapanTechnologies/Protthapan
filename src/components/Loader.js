import React from 'react';
import logo from '../images/Black.-1-x-1.jpg';

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="relative">
        <img 
          src={logo} 
          alt="Loading..." 
          className="w-24 h-24 rounded-full animate-spin" 
          style={{ animationDuration: '2s' }} 
        />
        <p className="absolute top-full left-1/2 -translate-x-1/2 mt-4 text-lg font-semibold text-gray-300">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default Loader;