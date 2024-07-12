import React, {useContext, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './part4.css';

function Part4() {

    const navigate = useNavigate();

    useEffect(()=>{
      return ()=>{
          document.body.style.backgroundColor = "white"
      }
  },[])
    
    const handleSubmit = (event) => {
        event.preventDefault();

        if (window.innerWidth < 525) {
          const transitionDiv = document.querySelector('.transition-div');
          transitionDiv.style.backgroundPosition = 'left';
  
          setTimeout(() => {
            navigate('/part5');
          }, 500);
        }
        else{
          navigate('/part5');
        }
    };

  return (
    <div className=" flex flex-col mt-10 max-[768px]:p-5 max-[768px]:mt-2 max-[550px]: w-full">
      <div className="flex-grow flex justify-center items-center">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl flex flex-col" style={{ maxHeight: '80vh' }}>
          <div className="flex bg-gray-50 rounded-t-lg sticky top-0 z-50">
            <button className="max-[550px]:text-sm max-[525px]:hidden flex-1 p-4 rounded-t-lg text-center text-gray-500 ">PROPERTY DETAILS</button>
            <button className="max-[550px]:text-sm max-[525px]:hidden flex-1 p-4 rounded-t-lg text-center text-gray-500">LOCATION DETAILS</button>
            <button className="max-[550px]:text-sm max-[525px]:hidden flex-1 p-4 rounded-t-lg text-center text-gray-500">FEATURES & AMENITIES</button>
            <button className="max-[550px]:text-sm max-[525px]:w-full flex-1 p-4 rounded-t-lg text-center text-blue-900 bg-slate-300 font-semibold">PRICE DETAILS</button>
            <button className="max-[550px]:text-sm max-[525px]:hidden flex-1 p-4 rounded-t-lg text-center text-gray-500">PROPERTY IMAGES</button>
          </div>

          <div className='h-2 w-full bg-slate-200 transition-div'>
            <div className='h-2 w-3/5 bg-blue-800 max-[525px]:hidden'></div>
          </div>

          <div className="p-8 overflow-y-scroll custom-scrollbar" style={{ backgroundColor: 'white', padding: '20px' }}>
            <div className="grid grid-cols-2 gap-4 ml-10 max-[525px]:ml-2">
              <div className="flex flex-col mb-10">
                <label htmlFor="rent" className="text-gray-700 font-medium">Rent <span className="text-red-500">*</span></label>
                <div className="relative">
                  <input type="text" id="rent" name="rent" onChange={(e)=> setRent(e.target.value)} className="border border-gray-300 rounded px-4 py-2 w-full" placeholder="₹ / Month" />
                </div>
              </div>
              <div className="flex flex-col mb-10">
                <label htmlFor="security" className="text-gray-700 font-medium">Security <span className="text-red-500">*</span></label>
                <div className="relative">
                  <input type="text" id="security" name="security" onChange={(e)=> setSecurity(e.target.value)} className="border border-gray-300 rounded px-4 py-2 w-full" placeholder="₹ / Month" />
                </div>
              </div>
              <div className="flex flex-col mb-10">
                <label htmlFor="maintenance" className="text-gray-700 font-medium">Maintenance <span className="text-red-500">*</span></label>
                <select id="maintenance" name="maintenance" className="border border-gray-300 rounded px-4 py-2 w-full">
                  <option value="">Maintenance</option>
                </select>
              </div>
              <div className="flex flex-col mb-10">
                <label htmlFor="maintenanceAmount" className="text-gray-700 font-medium">Maintenance <span className="text-red-500">*</span></label>
                <div className="flex space-x-2">
                  <input type="text" id="maintenanceAmount" name="maintenanceAmount" className="border border-gray-300 rounded px-4 py-2 w-1/2" placeholder="₹ Maintenance" />
                  <select id="maintenanceFrequency" name="maintenanceFrequency" className="border border-gray-300 rounded px-4 py-2 w-1/2">
                    <option value="monthly">Monthly</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col col-span-2 mb-6">
                <label htmlFor="additionalPricing" className="text-gray-700 font-medium">Additional Pricing details to convey to agent?</label>
                <textarea id="additionalPricing" name="additionalPricing" className="border border-gray-300 rounded px-4 py-2 w-full h-24" placeholder="Do you have any concerns regarding pricing of your property? Add your concerns here or call us."></textarea>
              </div>
            </div>
          </div>

          <div className="bg-blue-900 text-white p-4 rounded-b-lg flex justify-between items-center sticky bottom-0 z-50">
            <p className="text-sm">Need Help? Call 9999999999</p>
            <button onClick={handleSubmit} className="bg-blue-900 text-white px-4 py-2 rounded-lg shadow hover:shadow-white hover:bg-gradient-to-l from-white to-blue-600">NEXT</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Part4;
