import React, { useState, useEffect } from 'react';
import './part2.css';
import { useNavigate } from 'react-router-dom';
import map1 from '../../Svgs/map1.svg'
import location from '../../Svgs/gokulvillagelocation.svg'

function Part2() {
  const [buildingName, setBuildingName] = useState('');
  const [locality, setLocality] = useState('');
  const [landmark, setLandmark] = useState('');
  const [city, setCity] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [bgImage, setBgImage] = useState(map1);
  const navigate = useNavigate();

  useEffect(()=>{
    return ()=>{
        document.body.style.backgroundColor = "white"
    }
  },[])

  const handleInputClick = () => {
    setInputValue('Gokul Village chs 2, shanti park, miraroad east');
    const loc = document.querySelector('.locationSvg');
    loc.style.display = 'block';
    // setBgImage(map2);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (window.innerWidth < 525) {
      const transitionDiv = document.querySelector('.transition-div');
      transitionDiv.style.backgroundPosition = 'left';

      setTimeout(() => {
        navigate('/part3');
      }, 500);
    }
    else{
      navigate('/part3');
    }
  };

  return (
    <div className="flex flex-col mt-10 max-[768px]:p-5 max-[768px]:mt-2 max-[550px]: w-full">
      <div className="flex-grow flex justify-center items-center">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl flex flex-col sticky" style={{ maxHeight: '80vh' }}>
          <div className="flex bg-gray-50 rounded-t-lg sticky top-0 z-10 max-[550px]:text-sm">
            <button className="max-[550px]:text-sm max-[525px]:hidden flex-1 p-4 rounded-t-lg text-center text-gray-500">PROPERTY DETAILS</button>
            <button className="max-[550px]:text-sm max-[525px]:w-full flex-1 p-4 rounded-t-lg text-center text-blue-900 bg-slate-300 font-semibold">LOCATION DETAILS</button>
            <button className="max-[550px]:text-sm max-[525px]:hidden flex-1 p-4 rounded-t-lg text-center text-gray-500">FEATURES & AMENITIES</button>
            <button className="max-[550px]:text-sm max-[525px]:hidden flex-1 p-4 rounded-t-lg text-center text-gray-500">PRICE DETAILS</button>
            <button className="max-[550px]:text-sm max-[525px]:hidden flex-1 p-4 rounded-t-lg text-center text-gray-500">PROPERTY IMAGES</button>
          </div>

          <div className='h-2 w-full bg-slate-200 transition-div'>
            <div className='h-2 w-1/5 bg-blue-800 max-[525px]:hidden'></div>
          </div>

          <div className="p-8 overflow-y-scroll custom-scrollbar ml-10 max-[768px]:ml-0">
            <div className="flex space-x-8 mb-12 max-[525px]:flex-col max-[525px]:space-x-0 max-[525px]:mb-5">
              <div className="w-1/2 max-[525px]:w-full max-[525px]:mb-5">
                <label className="block text-gray-700 font-semibold mb-2">
                  Building/ Society Name <span className="text-red-500">*</span>
                </label>
                <div className="flex">
                  <select
                    value={buildingName}
                    onChange={(e) => setBuildingName(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 cursor-pointer"
                    required
                  >
                    <option value=" "></option>
                    <option value="Gokul Village CHS 2">Gokul Village CHS 2</option>
                  </select>
                </div>
              </div>
              <div className="w-1/2 max-[525px]:w-full max-[525px]:mb-5">
                <label className="block text-gray-700 font-semibold mb-2">
                  Locality / Area <span className="text-red-500">*</span>
                </label>
                <div className="flex">
                  <select
                    value={locality}
                    onChange={(e) => setLocality(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 cursor-pointer"
                    required
                  >
                    <option value=" "></option>
                    <option value="Shanti Park, Miraroad east">Shanti Park, Miraroad east</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex space-x-8 mb-12 max-[525px]:flex-col max-[525px]:space-x-0 max-[525px]:mb-5">
              <div className="w-1/2 max-[525px]:w-full max-[525px]:mb-5">
                <label className="block text-gray-700 font-semibold mb-2">
                  Landmark <span className="text-red-500">*</span>
                </label>
                <div className="flex">
                  <select
                    value={landmark}
                    onChange={(e) => setLandmark(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 cursor-pointer"
                    required
                  >
                    <option value=" "></option>
                    <option value="Gokul Village CHS 2">Prominent LandMark</option>
                  </select>
                </div>
              </div>
              <div className="w-1/2 max-[525px]:w-full max-[525px]:mb-5">
                <label className="block text-gray-700 font-semibold mb-2">
                  City <span className="text-red-500">*</span>
                </label>
                <div className="flex">
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 cursor-pointer"
                    required
                  >
                    <option value=" "></option>
                    <option value="Shanti Park, Miraroad east">Mumbai, Maharashtra</option>
                  </select>
                </div>
              </div>
            </div>
            <div>
                <label className="block text-gray-700 font-semibold mb-2">
                Mark Locality on Map <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                    <img src={bgImage} alt="Map" className="w-full h-auto" />
                    <img src={location} alt='location' className="locationSvg hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    
                    <div className="absolute top-10 left-0 w-full h-full flex items-start justify-center max-[525px]:top-3">
                        <input
                            type="text"
                            value={inputValue}
                            onClick={handleInputClick}
                            className="w-2/3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 max-[525px]:w-full max-[525px]:mr-5 max-[525px]:ml-5"
                            placeholder="Search your society or nearest landmark"
                        />
                    </div>
                    
                </div>
            </div>
          </div>

          <div className="bg-blue-900 text-white p-4 rounded-b-lg flex justify-between items-center sticky bottom-0 z-50">
            <p className="text-sm">Need Help? Call 9999999999</p>
            <button onClick={handleSubmit} className="bg-blue-900 text-white px-4 py-2 rounded-lg shadow hover:shadow-white hover:bg-gradient-to-l from-blue-300 to-blue-600">NEXT</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Part2;
