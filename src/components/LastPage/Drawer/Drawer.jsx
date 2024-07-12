import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import { FaBus, FaTrain, FaSubway, FaPlane, FaHospital, FaPills, FaSchool, FaUniversity, FaShoppingCart, FaStore, FaDumbbell, FaTree } from 'react-icons/fa';

const Drawer = () => {
  const [openDrawer, setOpenDrawer] = useState(null);
  const [activeTab, setActiveTab] = useState('transport');

  const toggleDrawer = (drawer) => {
    setOpenDrawer(openDrawer === drawer ? null : drawer);
  };

  const renderTransportContent = () => (
    <div className="space-y-2 bg-white">
      <div className="p-4 border rounded-lg ">
        <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleDrawer('bus')}>
          <div className="flex items-center space-x-2">
            <FaBus className="text-xl text-gray-600" />
            <span className="font-semibold text-gray-700">Bus Station</span>
          </div>
          <span>{openDrawer === 'bus' ? '▲' : '▼'}</span>
        </div>
        {openDrawer === 'bus' && (
          <div className="mt-2 space-y-1">
            <div className="flex justify-between text-gray-600">
              <span>Mira Road Station (E)</span>
              <span>0.7 km | 3 mins</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Mira Road Station (E)</span>
              <span>0.8 km | 2 mins</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Mira Road Station (E)</span>
              <span>0.9 km | 4 mins</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Mira Road Police Station</span>
              <span>1.8 km | 6 mins</span>
            </div>
          </div>
        )}
      </div>
      <div className="p-4 border rounded-lg">
        <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleDrawer('railway')}>
          <div className="flex items-center space-x-2">
            <FaTrain className="text-xl text-gray-600" />
            <span className="font-semibold text-gray-700">Railway Station</span>
          </div>
          <span>{openDrawer === 'railway' ? '▲' : '▼'}</span>
        </div>
        {openDrawer === 'railway' && (
          <div className="mt-2 space-y-1">
            <div className="flex justify-between text-gray-600">
              <span>Railway Station A</span>
              <span>1.2 km | 5 mins</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Railway Station B</span>
              <span>2.3 km | 10 mins</span>
            </div>
          </div>
        )}
      </div>
      <div className="p-4 border rounded-lg">
        <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleDrawer('metro')}>
          <div className="flex items-center space-x-2">
            <FaSubway className="text-xl text-gray-600" />
            <span className="font-semibold text-gray-700">Metro Stations</span>
          </div>
          <span>{openDrawer === 'metro' ? '▲' : '▼'}</span>
        </div>
        {openDrawer === 'metro' && (
          <div className="mt-2 space-y-1">
            <div className="flex justify-between text-gray-600">
              <span>Metro Station A</span>
              <span>0.5 km | 2 mins</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Metro Station B</span>
              <span>1.0 km | 4 mins</span>
            </div>
          </div>
        )}
      </div>
      <div className="p-4 border rounded-lg">
        <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleDrawer('airport')}>
          <div className="flex items-center space-x-2">
            <FaPlane className="text-xl text-gray-600" />
            <span className="font-semibold text-gray-700">Airport</span>
          </div>
          <span>{openDrawer === 'airport' ? '▲' : '▼'}</span>
        </div>
        {openDrawer === 'airport' && (
          <div className="mt-2 space-y-1">
            <div className="flex justify-between text-gray-600">
              <span>Airport A</span>
              <span>15 km | 30 mins</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Airport B</span>
              <span>20 km | 45 mins</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const renderEssentialsContent = () => (
    <div className="space-y-2 bg-white">
      <div className="p-4 border rounded-lg">
        <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleDrawer('hospitals')}>
          <div className="flex items-center space-x-2">
            <FaHospital className="text-xl text-gray-600" />
            <span className="font-semibold text-gray-700">Hospitals</span>
          </div>
          <span>{openDrawer === 'hospitals' ? '▲' : '▼'}</span>
        </div>
        {openDrawer === 'hospitals' && (
          <div className="mt-2 space-y-1">
            <div className="flex justify-between text-gray-600">
              <span>Life Care Hospital</span>
              <span>0.4 km | 1 mins</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Saibaba Hospital</span>
              <span>3.6 km | 12 mins</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Riddhi Siddhi Hospital</span>
              <span>1.0 km | 4 mins</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Sanjeevani Hospital</span>
              <span>1.4 km | 6 mins</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Karuna Nursing Home</span>
              <span>1.8 km | 6 mins</span>
            </div>
          </div>
        )}
      </div>
      <div className="p-4 border rounded-lg">
        <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleDrawer('pharmacy')}>
          <div className="flex items-center space-x-2">
            <FaPills className="text-xl text-gray-600" />
            <span className="font-semibold text-gray-700">Pharmacy</span>
          </div>
          <span>{openDrawer === 'pharmacy' ? '▲' : '▼'}</span>
        </div>
        {openDrawer === 'pharmacy' && (
          <div className="mt-2 space-y-1">
            <div className="flex justify-between text-gray-600">
              <span>Pharmacy A</span>
              <span>0.3 km | 2 mins</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Pharmacy B</span>
              <span>0.5 km | 3 mins</span>
            </div>
          </div>
        )}
      </div>
      <div className="p-4 border rounded-lg">
        <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleDrawer('schools')}>
          <div className="flex items-center space-x-2">
            <FaSchool className="text-xl text-gray-600" />
            <span className="font-semibold text-gray-700">Schools</span>
          </div>
          <span>{openDrawer === 'schools' ? '▲' : '▼'}</span>
        </div>
        {openDrawer === 'schools' && (
          <div className="mt-2 space-y-1">
            <div className="flex justify-between text-gray-600">
              <span>School A</span>
              <span>0.7 km | 5 mins</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>School B</span>
              <span>1.2 km | 7 mins</span>
            </div>
          </div>
        )}
      </div>
      <div className="p-4 border rounded-lg">
        <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleDrawer('atm')}>
          <div className="flex items-center space-x-2">
            <FaUniversity className="text-xl text-gray-600" />
            <span className="font-semibold text-gray-700">Atm</span>
          </div>
          <span>{openDrawer === 'atm' ? '▲' : '▼'}</span>
        </div>
        {openDrawer === 'atm' && (
          <div className="mt-2 space-y-1">
            <div className="flex justify-between text-gray-600">
              <span>ATM A</span>
              <span>0.2 km | 1 mins</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>ATM B</span>
              <span>0.4 km | 2 mins</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const renderUtilityContent = () => (
    <div className="space-y-2 bg-white">
      {/* Add your Utility section drawers and contents here */}
      <div className="p-4 border rounded-lg">
        <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleDrawer('utility1')}>
          <div className="flex items-center space-x-2">
            <FaShoppingCart className="text-xl text-gray-600" />
            <span className="font-semibold text-gray-700">Super Markets</span>
          </div>
          <span>{openDrawer === 'utility1' ? '▲' : '▼'}</span>
        </div>
        {openDrawer === 'utility1' && (
          <div className="mt-2 space-y-1">
            <div className="flex justify-between text-gray-600">
              <span>New Apna Bazar</span>
              <span>1.4 km | 4 mins</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>R.C.M Bazar</span>
              <span>3.3 km | 11 mins</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Asmita Super Market</span>
              <span>0.8 km | 3 mins</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>D Mart</span>
              <span>3.2 km | 10 mins</span>
            </div>
          </div>
        )}
      </div>
      <div className="p-4 border rounded-lg">
        <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleDrawer('utility2')}>
          <div className="flex items-center space-x-2">
            <FaStore className="text-xl text-gray-600" />
            <span className="font-semibold text-gray-700">Shopping Mall</span>
          </div>
          <span>{openDrawer === 'utility2' ? '▲' : '▼'}</span>
        </div>
        {openDrawer === 'utility2' && (
          <div className="mt-2 space-y-1">
            {/* Utility 2 details */}
          </div>
        )}
      </div>
      <div className="p-4 border rounded-lg">
        <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleDrawer('utility2')}>
          <div className="flex items-center space-x-2">
            <FaDumbbell className="text-xl text-gray-600" />
            <span className="font-semibold text-gray-700">GYM</span>
          </div>
          <span>{openDrawer === 'utility2' ? '▲' : '▼'}</span>
        </div>
        {openDrawer === 'utility2' && (
          <div className="mt-2 space-y-1">
            {/* Utility 2 details */}
          </div>
        )}
      </div>
      <div className="p-4 border rounded-lg">
        <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleDrawer('utility2')}>
          <div className="flex items-center space-x-2">
            <FaTree className="text-xl text-gray-600" />
            <span className="font-semibold text-gray-700">Park</span>
          </div>
          <span>{openDrawer === 'utility2' ? '▲' : '▼'}</span>
        </div>
        {openDrawer === 'utility2' && (
          <div className="mt-2 space-y-1">
            {/* Utility 2 details */}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="w-full mx-auto mt-10 p-4 bg-red-100 rounded-lg shadow-lg max-[725px]:w-11/12 max-[725px]:mb-4">
      <div className="flex space-x-4 mb-4 ">
        <button
          className={`flex-1 text-center py-2 w- border-b-2 ${activeTab === 'transport' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-600'}`}
          onClick={() => setActiveTab('transport')}
        >
          Transport
        </button>
        <button
          className={`flex-1 text-center py-2 border-b-2 ${activeTab === 'essentials' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-600'}`}
          onClick={() => setActiveTab('essentials')}
        >
          Essentials
        </button>
        <button
          className={`flex-1 text-center py-2 border-b-2 ${activeTab === 'utility' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-600'}`}
          onClick={() => setActiveTab('utility')}
        >
          Utility
        </button>
      </div>
      {activeTab === 'transport' && renderTransportContent()}
      {activeTab === 'essentials' && renderEssentialsContent()}
      {activeTab === 'utility' && renderUtilityContent()}
    </div>
  );
};

export default Drawer;
