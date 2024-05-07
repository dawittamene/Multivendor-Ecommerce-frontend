import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <h1 className="text-white">Logo</h1>
          </div>
          <div className="hidden lg:block">
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="text-white hover:text-gray-300">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-white hover:text-gray-300">About</Link>
              </li>
              <li>
                <Link to="/services" className="text-white hover:text-gray-300">Services</Link>
              </li>
              <li>
                <Link to="/contact" className="text-white hover:text-gray-300">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="lg:hidden">
            <button
              onClick={toggleNavbar}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden">
          <ul className="px-2 pb-4">
            <li>
              <Link to="/" className="block text-white py-2 hover:text-gray-300">Home</Link>
            </li>
            <li>
              <Link to="/about" className="block text-white py-2 hover:text-gray-300">About</Link>
            </li>
            <li>
              <Link to="/services" className="block text-white py-2 hover:text-gray-300">Services</Link>
            </li>
            <li>
              <Link to="/contact" className="block text-white py-2 hover:text-gray-300">Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;