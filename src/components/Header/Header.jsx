import React, { useState } from 'react';
import logo from '../Svgs/logo.svg';
import headercomponent from '../Svgs/headercomponent.svg';
import './header.css'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className=" header w-full bg-yellow-50 p-4 sticky lg:w-full max-sm:w-full top-0 z-50 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <img src={logo} alt="Logo" className="h-12" />
        <button
          className="lg:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
        <nav className="hidden lg:flex lg:items-center lg:space-x-8">
          <p className="text-gray-700 font-semibold hover:underline cursor-pointer">Properties</p>
          <p className="text-gray-700 font-semibold hover:underline cursor-pointer">My Dashboard/Activity</p>
          <p className="text-gray-700 font-semibold underline cursor-pointer">List Your Property</p>
          <p className="text-gray-700 font-semibold hover:underline cursor-pointer">Contact Us</p>
          <p className="text-gray-700 font-semibold hover:underline cursor-pointer">More</p>
          <div className="w-0.5 h-6 bg-gray-700"></div>
          <div className="flex items-center space-x-4 w-20">
            <img src={headercomponent} alt="Logo" className="h-12" />
          </div>
        </nav>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden bg-yellow-50 shadow-lg">
          <ul className="flex flex-col space-y-4 p-4">
            <li className="text-gray-700 font-semibold hover:underline cursor-pointer">Properties</li>
            <li className="text-gray-700 font-semibold hover:underline cursor-pointer">My Dashboard/Activity</li>
            <li className="text-gray-700 font-semibold underline cursor-pointer">List Your Property</li>
            <li className="text-gray-700 font-semibold hover:underline cursor-pointer">Contact Us</li>
            <li className="text-gray-700 font-semibold hover:underline cursor-pointer">More</li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
