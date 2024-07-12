import React from 'react';
import logo from '../../Svgs/logo.svg'

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-1 flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="Dylan Estate Logo" className="h-40" />
            </div>
          </div>
          <div className="col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <ul>
                <li className='mb-3'><a href="#" className="hover:underline">HOME</a></li>
                <li className='mb-3'><a href="#" className="hover:underline">PROPERTIES</a></li>
                <li className='mb-3'><a href="#" className="hover:underline">LIST YOUR PROPERTY</a></li>
                <li className='mb-3'><a href="#" className="hover:underline">SAVED SEARCHES</a></li>
              </ul>
            </div>
            <div>
              <ul>
                <li className='mb-3'><a href="#" className="hover:underline">ABOUT MIRA ROAD</a></li>
                <li className='mb-3'><a href="#" className="hover:underline">EMI CALCULATOR</a></li>
                <li className='mb-3'><a href="#" className="hover:underline">TESTAMONIALS</a></li>
                <li className='mb-3'><a href="#" className="hover:underline">EXPLORE NEIGHBORHOOD</a></li>
              </ul>
            </div>
            <div>
              <ul>
                <li className='mb-3'><a href="#" className="hover:underline">ABOUT US</a></li>
                <li className='mb-3'><a href="#" className="hover:underline">CONTACT US</a></li>
                <li className='mb-3'><a href="#" className="hover:underline">FAQ'S</a></li>
              </ul>
            </div>
            <div>
              <div>
                <h3 className="font-bold">CONTACT US</h3>
                <p>B/28, Shop No 1, Madhukar Co Op Housing Society, Sector 5, Shanti</p>
              </div>
              <div className="mt-4">
                <h3 className="font-bold">OFFICE HOURS</h3>
                <p>B/28, Shop No 1, Madhukar Co Op Housing Society, Sector 5, Shanti</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-white pt-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p>&copy; 2024 Dylan Estates. All rights reserved. Dylan Estates - Your Neighborhood Experts</p>
            <div className="flex space-x-4 justify-center md:justify-start mt-2">
              <a href="#" className="hover:underline">Privacy Policy</a>
              <a href="#" className="hover:underline">Terms & Conditions</a>
            </div>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:underline flex items-center space-x-1">
              <span>🌐</span>
              <span>English (IN)</span>
            </a>
            <a href="#" className="hover:underline flex items-center space-x-1">
              <span>₹</span>
              <span>INR</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
