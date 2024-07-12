import React, {useEffect}from 'react';
import { useNavigate } from 'react-router-dom';
import './part3.css';
import security from '../../Svgs/security.svg'
import cctv from '../../Svgs/cctv.svg'
import clubhouse from '../../Svgs/clubhouse.svg'
import communityhall from '../../Svgs/communityhall.svg'
import firesafety from '../../Svgs/firesafety.svg'
import garden from '../../Svgs/garden.svg'
import gym from '../../Svgs/gym.svg'
import intercom from '../../Svgs/intercom.svg'
import kidsarea from '../../Svgs/kidsarea.svg'
import lift from '../../Svgs/lift.svg'
import maintainance from '../../Svgs/maintainance.svg'
import parking from '../../Svgs/parking.svg'
import pfbu from '../../Svgs/pfbu.svg'
import ppbu from '../../Svgs/ppbu.svg'
import pool from '../../Svgs/pool.svg'
import shopping from '../../Svgs/shopping.svg'
import sports from '../../Svgs/sports.svg'
import watersupply from '../../Svgs/watersupply.svg'


function Part3() {
    const amenities = [
        { svg: security, label: '24x7 Security', value: '24x7-security' },
        { svg: cctv, label: 'CCTV Cameras', value: 'cctv' },
        { svg: lift, label: 'Lift', value: 'lift' },
        { svg: parking, label: 'Reserved Parking', value: 'reserved-parking' },
        { svg: watersupply, label: 'Regular Water Supply', value: 'regular-water-supply' },
        { svg: ppbu, label: 'Power Backup Partial', value: 'power-backup-partial' },
        { svg: pfbu, label: 'Power Backup Full', value: 'power-backup-full' },
        { svg: maintainance, label: 'Maintenance Staff', value: 'maintenance-staff' },
        { svg: garden, label: 'Garden/Park', value: 'garden-park' },
        { svg: kidsarea, label: 'Kids Play Area', value: 'kids-play-area' },
        { svg: sports, label: 'Sport', value: 'sport' },
        { svg: gym, label: 'Property Gym', value: 'property-gym' },
        { svg: communityhall, label: 'Community Hall', value: 'community-hall' },
        { svg: shopping, label: 'Shopping Center', value: 'shopping-center' },
        { svg: clubhouse, label: 'Club House', value: 'club-house' },
        { svg: pool, label: 'Swimming Pool', value: 'swimming-pool' },
        { svg: intercom, label: 'Intercom', value: 'intercom' },
        { svg: firesafety, label: 'Fire Safety', value: 'fire-safety' }
    ];

    useEffect(()=>{
      return ()=>{
          document.body.style.backgroundColor = "white"
      }
  },[])
    
    const navigate = useNavigate();
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if (window.innerWidth < 525) {
          const transitionDiv = document.querySelector('.transition-div');
          transitionDiv.style.backgroundPosition = 'left';
    
          setTimeout(() => {
            navigate('/part4');
          }, 500);
        }
        else{
          navigate('/part4');
        }
    };
    
  return (
    <div className="flex flex-col mt-10 max-[768px]:p-5 max-[768px]:mt-2 max-[550px]: w-full">
      <div className="flex-grow flex justify-center items-center">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl flex flex-col" style={{ maxHeight: '80vh' }}>
          <div className="flex bg-gray-50 rounded-t-lg sticky top-0 z-10 max-[550px]:text-sm">
            <button className="max-[550px]:text-sm max-[525px]:hidden flex-1 p-4 rounded-t-lg text-center text-gray-500">PROPERTY DETAILS</button>
            <button className="max-[550px]:text-sm max-[525px]:hidden flex-1 p-4 rounded-t-lg text-center text-gray-500">LOCATION DETAILS</button>
            <button className="max-[550px]:text-sm max-[525px]:w-full flex-1 p-4 rounded-t-lg text-center text-blue-900 bg-slate-300 font-semibold">FEATURES & AMENITIES</button>
            <button className="max-[550px]:text-sm max-[525px]:hidden flex-1 p-4 rounded-t-lg text-center text-gray-500">PRICE DETAILS</button>
            <button className="max-[550px]:text-sm max-[525px]:hidden flex-1 p-4 rounded-t-lg text-center text-gray-500">PROPERTY IMAGES</button>
          </div>

          <div className='h-2 w-full bg-slate-200 transition-div max-[525px]:h-6'>
            <div className='h-2 w-2/5 bg-blue-800 max-[525px]:hidden'></div>
          </div>

          <div className="p-8 overflow-y-scroll custom-scrollbar" style={{ backgroundColor: 'white', padding: '20px' }}>
            
            <form>
              <div className="space-y-4 ml-12 max-[525px]:space-y-0 max-[525px]:ml-4">
              <h1 className="block text-gray-700 font-bold text-xl mb-10">Genral Features</h1>
                    <div className="flex flex-col mb-14">
                      <label className="block text-gray-700 text-lg font-bold mb-2">
                        <span className="text-red-500">*</span> Non-Veg:
                      </label>
                      <div className="grid grid-cols-3 gap-x-4 mt-6 mb-8">
                        <label className="inline-flex items-center">
                          <input type="radio" name="nonveg" value="allowed" className="form-radio h-5 w-5 text-blue-600" /> Allowed
                        </label>
                        <label className="inline-flex items-center">
                          <input type="radio" name="nonveg" value="not-allowed" className="form-radio h-5 w-5 text-blue-600" /> Not Allowed
                        </label>
                      </div>
                    </div>

                    <div className="flex flex-col ">
                      <label className="block text-gray-700 text-lg font-bold mb-2">
                        <span className="text-red-500">*</span> Pets Allowed:
                      </label>
                      <div className="grid grid-cols-3 gap-x-4 mt-6 mb-9 max-[525px]:grid-cols-2">
                        <label className="inline-flex items-center">
                          <input type="radio" name="pets" value="yes" className="form-radio h-5 w-5 text-blue-600" /> Yes
                        </label>
                        <label className="inline-flex items-center">
                          <input type="radio" name="pets" value="no" className="form-radio h-5 w-5 text-blue-600" /> No
                        </label>
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <label className="block text-gray-700 text-lg font-bold mb-2">
                        <span className="text-red-500">*</span> Electricity:
                      </label>
                      <div className="grid grid-cols-3 gap-x-4 mt-6 mb-9 max-[525px]:grid-cols-2">
                        <label className="inline-flex items-center">
                          <input type="radio" name="electricity" value="rare-powercut" className="form-radio h-5 w-5 text-blue-600" /> Rare/No Powercut
                        </label>
                        <label className="inline-flex items-center">
                          <input type="radio" name="electricity" value="frequent-powercut" className="form-radio h-5 w-5 text-blue-600" /> Frequent Powercut
                        </label>
                      </div>
                    </div>

                <div className="flex flex-col">
                      <label className="block text-gray-700 text-lg font-bold mb-2">
                        <span className="text-red-500">*</span> Water Supply:
                      </label>
                      <div className="grid grid-cols-3 gap-x-4 mt-6 mb-9 max-[525px]:grid-cols-2">
                        <label className="inline-flex items-center">
                          <input type="radio" name="water-supply" value="municipal-corporation" className="form-radio h-5 w-5 text-blue-600" /> Municipal Corporation
                        </label>
                        <label className="inline-flex items-center">
                          <input type="radio" name="water-supply" value="borewell" className="form-radio h-5 w-5 text-blue-600" /> Borewell
                        </label>
                        <label className="inline-flex items-center max-[525px]:mt-5">
                          <input type="radio" name="water-supply" value="both" className="form-radio h-5 w-5 text-blue-600" /> Both
                        </label>
                      </div>
                </div>

                <hr className='h-7'/>

                <div className="flex flex-col">
                  <label className="block text-gray-700 text-lg font-bold mb-2">
                    <span className="text-red-500">*</span> Furnishing:
                  </label>
                  <div className="grid grid-cols-3 gap-x-4 mt-6 mb-9 max-[525px]:grid-cols-2">
                  <label className="inline-flex items-center">
                    <input type="checkbox" name="furnishing" value="fully-furnished" className="mr-2 h-5 w-5 text-blue-600" /> Fully Furnished
                    </label>
                    <label className="inline-flex items-center">
                    <input type="checkbox" name="furnishing" value="semi-furnished" className="ml-4 mr-2 h-5 w-5 text-blue-600" /> Semi Furnished
                    </label>
                    <label className="inline-flex items-center max-[525px]:mt-5">
                    <input type="checkbox" name="furnishing" value="unfurnished" className="ml-4 mr-2 h-5 w-5 text-blue-600 max-[525px]:ml-0" /> Unfurnished
                    </label>
                  </div>
                </div>

                <hr className='h-7'/>


                <div className="flex flex-col">
                  <label className="block text-gray-700 text-lg font-bold mb-2">
                    <span className="text-red-500">*</span> Additional Features:
                  </label>
                  <div className="grid grid-cols-3 gap-x-4 mt-6 mb-9 max-[525px]:grid-cols-2 max-[525px]:gap-x-0">
                    <label className="inline-flex items-center max-[525px]:mb-5">
                    <input type="checkbox" name="additional-features" value="air-conditioning" className="mr-2 h-5 w-5 text-blue-600" /> Air Conditioning
                    </label>
                    <label className="inline-flex items-center max-[525px]:mb-5">
                    <input type="checkbox" name="additional-features" value="ceiling-fans" className="ml-4 mr-2 h-5 w-5 text-blue-600 max-[525px]:ml-0" /> Ceiling Fans
                    </label>
                    <label className="inline-flex items-center max-[525px]:mb-5">
                    <input type="checkbox" name="additional-features" value="refrigerator" className="ml-4 mr-2 h-5 w-5 text-blue-600 max-[525px]:ml-0" /> Refrigerator
                    </label>
                    <label className="inline-flex items-center mt-5 max-[525px]:mb-5 max-[525px]:mt-0">
                    <input type="checkbox" name="additional-features" value="washing-machine" className="mr-2 h-5 w-5 text-blue-600" /> Washing Machine
                    </label>
                    <label className="inline-flex items-center mt-5 max-[525px]:mb-5 max-[525px]:mt-0">
                    <input type="checkbox" name="additional-features" value="microwave" className="ml-4 mr-2 h-5 w-5 text-blue-600 max-[525px]:ml-0" /> Microwave
                    </label>
                    <label className="inline-flex items-center mt-5 max-[525px]:mb-5 max-[525px]:mt-0">
                    <input type="checkbox" name="additional-features" value="oven" className="max-[525px]:ml-0 ml-4 mr-2 h-5 w-5 text-blue-600" /> Oven
                    </label>
                  </div>
                </div>

                <hr className='h-7'/>


                <div className="flex flex-col">
                  <label className="block text-gray-700 text-lg font-bold mb-2">
                    <span className="text-red-500">*</span> Tiles:
                  </label>
                  <div className="grid grid-cols-3 gap-x-4 mt-6 mb-9 max-[525px]:grid-cols-2">
                    <label className="inline-flex items-center">
                      <input type="checkbox" name="tiles" value="normal-white-tiles" className="mr-2 h-5 w-5 text-blue-600" /> Normal White Tiles
                    </label>
                    <label className="inline-flex items-center">
                      <input type="checkbox" name="tiles" value="marble" className="ml-4 mr-2 h-5 w-5 text-blue-600" /> Marble
                    </label>
                    <label className="inline-flex items-center max-[525px]:mt-5">
                      <input type="checkbox" name="tiles" value="vitrified-tiles" className="ml-4 mr-2 h-5 w-5 text-blue-600 max-[525px]:ml-0 " /> Vitrified Tiles
                    </label>
                  </div>
                </div>

                <hr className='h-7'/>


                <div className="flex flex-col">
                  <label className="block text-gray-700 text-lg font-bold mb-2">
                    <span className="text-red-500">*</span> Safety:
                  </label>
                  <div className="grid grid-cols-3 gap-x-4 mt-6 mb-9 max-[525px]:grid-cols-2">
                    <label className="inline-flex items-center">
                      <input type="checkbox" name="safety" value="24x7-security" className="mr-2 h-5 w-5 text-blue-600" /> 24x7 Security by Guard/Security
                    </label>
                    <label className="inline-flex items-center">
                      <input type="checkbox" name="safety" value="security-systems-cctv" className="ml-4 mr-2 h-5 w-5 text-blue-600" /> Security Systems - CCTV
                    </label>
                  </div>
                </div>

                <hr className='h-7'/>


                <div>
                  <label className="block text-gray-700 text-lg font-bold mb-10">
                    Society Amenities:
                  </label>
                    <div className="grid grid-cols-4 gap-4 mt-2">
                        {amenities.map((amenity) => (
                        <div key={amenity.value} className="flex flex-col items-center mb-10">
                            <img src={amenity.svg} alt={`${amenity.label} Icon`} />
                            <input type="checkbox" name="amenities" value={amenity.value} className='h-5 w-5 text-blue-600'/>
                        </div>
                        ))}
                    </div>
                </div>
              </div>
            </form>
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

export default Part3;
