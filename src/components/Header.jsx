import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">ConsumeWise</div>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-300 transition duration-300">Home</Link>
          <Link to="/about" className="hover:text-gray-300 transition duration-300">About</Link>
          <Link to="/preferences" className="hover:text-gray-300 transition duration-300">Preferences</Link>
          <Link to="/login" className="hover:text-gray-300 transition duration-300">Login</Link>
          <Link to="/signup" className="hover:text-gray-300 transition duration-300">SignUp</Link>
        </nav>
        <div className="md:hidden top-0 right-0 relative">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
          {isMenuOpen && (
            <nav className="flex flex-col space-y-2 mt-2 bg-blue-600 p-4 rounded-lg shadow-lg absolute top-4 right-0">
              <Link to="/home" className="hover:text-gray-300 transition duration-300">Home</Link>
              <Link to="/about" className="hover:text-gray-300 transition duration-300">About</Link>
              <Link to="/preferences" className="hover:text-gray-300 transition duration-300">Preferences</Link>
              <Link to="/login" className="hover:text-gray-300 transition duration-300">Login</Link>
              <Link to="/signup" className="hover:text-gray-300 transition duration-300">Sign Up</Link>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;