import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import './card.css';



function Card() {
  const [userType, setUserType] = useState('owner');
  const [country, setCountry] = useState('India');
  const [email, setEmail] = useState('');
  const [showOTP, setShowOTP] = useState(false);

  const handleNextClick = () => {
    setShowOTP(true);
  };

  return (
    <div className="bg-white rounded-lg relative shadow-lg w-full max-w-xl h-96 flex flex-col mt-5 mb-5">
      <h2 className="bg-yellow-50 text-xl rounded-3xl font-bold text-center text-gray-800 mb-6 sticky top-0 z-10 p-4">
        LETS GET YOU STARTED !
      </h2>
      
      <div className="flex-grow relative overflow-y-scroll custom-scrollbar p-4">
        {!showOTP ? (
          <>
            <div className="mb-10 mt-2 ml-8">
              <label className="block text-gray-700 font-semibold mb-2">
                <span className="text-red-500">*</span> I am:
              </label>
              <div className="flex items-center space-x-8">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="userType"
                    value="owner"
                    checked={userType === 'owner'}
                    onChange={() => setUserType('owner')}
                    className="form-radio h-5 w-5 text-blue-600"
                  />
                  <span className="ml-2 text-gray-700 font-semibold">Owner</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="userType"
                    value="builder"
                    checked={userType === 'builder'}
                    onChange={() => setUserType('builder')}
                    className="form-radio h-5 w-5 text-blue-600"
                  />
                  <span className="ml-2 text-gray-700 font-semibold">Builder</span>
                </label>
              </div>
            </div>

            <div className="mb-10 mt-2 ml-8">
              <label className="block text-gray-700 font-semibold mb-2">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div className="mb-10 mt-2 ml-8">
              <label className="block text-gray-700 font-semibold mb-2">
                Country <span className="text-red-500">*</span>
              </label>
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option value="India">India</option>
                {/* Add more country options as needed */}
              </select>
            </div>

            <div className="mb-10 mt-2 ml-8">
              <label className="block text-gray-700 font-semibold mb-2">
                Phone <span className="text-red-500">*</span>
              </label>
              <div className="flex">
                <select className="border rounded-l-lg px-4 py-2 bg-gray-100">
                  <option value="+91">+91</option>
                  {/* Add more country codes as needed */}
                </select>
                <input
                  type="tel"
                  placeholder="000-000-0000"
                  className="w-full px-4 py-2 border-t border-r border-b rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
            </div>

            <p className='text-gray-700 mt-2 ml-8'>OR</p>
            <br/>

            <div className="mb-10 mt-2 ml-8">
              <label className="block text-gray-700 font-semibold mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
          </>
        ) : (
          <div className="mb-10 mt-2 ml-8">
            <label className="block text-gray-700 font-semibold mb-2">
              Enter OTP sent on 999-999-9999 <span className="text-red-500">*</span>
              <a href="#" className="text-blue-600 ml-2 text-right">Change</a>
            </label>
            <input
              type="text"
              placeholder="000000"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-center"
            />
            <a href="#" className="text-blue-600 mt-2 block text-right">Resend OTP</a>
          </div>
        )}
      </div>

      <div className="sticky bottom-0 bg-yellow-50 z-10 p-4 rounded-3xl flex items-center justify-between">
          <p className="text-sm text-gray-600">Need Help? <span className="font-bold text-gray-800">Call 9999999999</span></p>
          {showOTP ? (
          <Link to="/part1" className="bg-blue-900 text-white px-4 py-2 rounded-lg shadow">
            NEXT
          </Link>
        ) : (
          <button 
            className="bg-blue-900 text-white px-4 py-2 rounded-lg shadow" 
            onClick={handleNextClick}
          >
            NEXT
          </button>
        )}
      </div>
    </div>
  );
}

export default Card;
