import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" sticky top-0 z-50 shadow-md p-4 md:p-6 bg-black">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="font-bold text-3xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600"><a href='https://www.linkedin.com/in/abderrezzak-maireche/' target='_blank'>Abderrezzak DEV</a></div>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 lg:space-x-12 items-center text-xl lg:text-2xl">
          <li><a href="#" className="hover:text-blue-500 transition duration-300">Home</a></li>
          <li><a href="#" className="hover:text-blue-500 transition duration-300">About</a></li>
          <li><a href="#" className="hover:text-blue-500 transition duration-300">Portfolio</a></li>
          <li>
            <a href="#" className="hover:bg-blue-600 hover:text-white transition duration-300 border-2 border-blue-500 px-4 py-2 lg:px-8 lg:py-3 rounded-full">
              Let's talk
            </a>
          </li>
        </ul>
        
        {/* Mobile menu button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-3xl focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}>
        <ul className="flex flex-col space-y-4 mt-4 text-xl p-4 border-t">
          <li><a href="#" className="block hover:text-blue-500 py-2" onClick={toggleMenu}>Home</a></li>
          <li><a href="#" className="block hover:text-blue-500 py-2" onClick={toggleMenu}>About</a></li>
          <li><a href="#" className="block hover:text-blue-500 py-2" onClick={toggleMenu}>Portfolio</a></li>
          <li>
            <a 
              href="#" 
              className="block text-center hover:bg-blue-600 hover:text-white transition duration-300 border-2 border-blue-500 px-4 py-2 rounded-full"
              onClick={toggleMenu}
            >
              Let's talk
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;