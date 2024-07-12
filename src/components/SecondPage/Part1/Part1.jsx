import React, { useState, useEffect} from 'react';
import './part1.css'
import {useNavigate} from 'react-router-dom'

function Part1() {
    const [propertyFor, setPropertyFor] = useState('rent');
    const [propertyType, setPropertyType] = useState('');
    const [builtUpArea, setBuiltUpArea] = useState('');
    const [carpetArea, setCarpetArea] = useState('');
    const [selectedCommercialOption, setSelectedCommercialOption] = useState('');
    const [selectedResidentialOption, setSelectedResidentialOption] = useState('');
    const [propertyOnFloor, setPropertyOnFloor] = useState('');
    const [totalFloors, setTotalFloors] = useState('');
    const [propertyFacing, setPropertyFacing] = useState('');
    const [propertyAge, setPropertyAge] = useState('');
    const [bhkType, setBhkType] = useState('');
    const [bathrooms, setBathrooms] = useState('');
    const [balcony, setBalcony] = useState('');
    const [tenantPreference, setTenantPreference] = useState('');
    const [availability, setAvailability] = useState('');
    const navigate = useNavigate();

    useEffect(()=>{
      return ()=>{
          document.body.style.backgroundColor = "white";
      }
    },[])
  
    const handlePropertyForChange = (value) => {
      setPropertyFor(value);
      setPropertyType('');
    };
  
    const handlePropertyTypeChange = (value) => {
      setPropertyType(value === propertyType ? '' : value);
    };
  
    const handleCommercialOptionClick = (option) => {
      setSelectedCommercialOption(option === selectedCommercialOption ? '' : option);
    };
  
    const handleResidentialOptionClick = (option) => {
      setSelectedResidentialOption(option === selectedResidentialOption ? '' : option);
    };
  
    const renderPropertyTypeOptions = () => {
      if (propertyType === 'commercial' || propertyType === 'land') {
        const commercialOptions = [
          'Office Space',
          'Co working',
          'Restaurant / Cafe',
          'Shop/Showroom',
          'Industrial Bldg.',
          'Industrial Shed',
          'Warehouse/Godown',
        ];
        return (
          <div className="flex flex-wrap gap-2 mb-12">
            {commercialOptions.map((option) => (
              <button
                key={option}
                className={`btn px-4 py-2 border rounded-3xl focus:outline-none ${selectedCommercialOption === option ? 'bg-gradient-to-b from-blue-300 to-blue-900 text-white' : ''}`}
                onClick={() => handleCommercialOptionClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
        );
      } else if (propertyType === 'residential') {
        const residentialOptions = ['Flat / Apartment', 'House / Villa'];
        return (
          <div className="flex flex-wrap gap-2 mb-12">
            {residentialOptions.map((option) => (
              <button
                key={option}
                className={`btn px-4 py-2 border rounded-3xl focus:outline-none ${selectedResidentialOption === option ? 'bg-gradient-to-b from-white to-blue-600 text-white' : ''}`}
                onClick={() => handleResidentialOptionClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
        );
      }
      return null;
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      
      if (window.innerWidth < 525) {
        const transitionDiv = document.querySelector('.transition-div');
        transitionDiv.style.backgroundPosition = 'left';

        setTimeout(() => {
          navigate('/part2');
        }, 500);
      }
      else{
        navigate('/part2');
      }
    };
  
    return (
      <div className="flex flex-col mt-10 max-[768px]:p-5 max-[768px]:mt-2 max-[550px]: w-full" >
        <div className="flex-grow flex justify-center items-center ">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl flex flex-col relative" style={{ maxHeight: '80vh' }}>
            <div className="flex bg-gray-50 rounded-t-lg sticky top-0 z-10 max-[550px]:text-sm">
              <button className="max-[550px]:text-sm max-[525px]:w-full p-4 rounded-t-lg flex-1 text-center text-blue-900 font-semibold bg-slate-300">PROPERTY DETAILS</button>
              <button className="max-[550px]:text-sm max-[525px]:hidden p-4 rounded-t-lg flex-1 text-center text-gray-500">LOCATION DETAILS</button>
              <button className="max-[550px]:text-sm max-[525px]:hidden p-4 rounded-t-lg flex-1 text-center text-gray-500">FEATURES & AMENITIES</button>
              <button className="max-[550px]:text-sm max-[525px]:hidden p-4 rounded-t-lg flex-1 text-center text-gray-500">PRICE DETAILS</button>
              <button className="max-[550px]:text-sm max-[525px]:hidden p-4 rounded-t-lg flex-1 text-center text-gray-500">PROPERTY IMAGES</button>
            </div>

            <div className='h-6 w-full bg-slate-200 transition-div'></div>
  
            <div className=" overflow-y-scroll custom-scrollbar">
              <div className="mb-12 ml-6 max-[768px]: pr-5">
                <label className="block text-gray-700 font-semibold mb-2">
                  <span className="text-red-500">*</span> Property For:
                </label>
                <div className="grid grid-cols-3">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="propertyFor"
                      value="rent"
                      checked={propertyFor === 'rent'}
                      onChange={() => handlePropertyForChange('rent')}
                      className="form-radio h-5 w-5 text-blue-600"
                    />
                    <span className="ml-2 text-gray-700 font-semibold">Rent</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="propertyFor"
                      value="sale"
                      checked={propertyFor === 'sale'}
                      onChange={() => handlePropertyForChange('sale')}
                      className="form-radio h-5 w-5 text-blue-600"
                    />
                    <span className="ml-2 text-gray-700 font-semibold">Sale</span>
                  </label>
                </div>
              </div>
  
              <div className="mb-12 ml-6 max-[768px]: pr-5">
                <label className="block text-gray-700 font-semibold mb-2">
                  <span className="text-red-500">*</span> Property Type:
                </label>
                <div className="grid grid-cols-3 max-[525px]:grid max-[525px]:grid-cols-2">
                  <label className="inline-flex items-center max-[525px]:mb-5">
                    <input
                      type="radio"
                      name="propertyType"
                      value="residential"
                      checked={propertyType === 'residential'}
                      onChange={() => handlePropertyTypeChange('residential')}
                      className="form-radio h-5 w-5 text-blue-600"
                      required
                    />
                    <span className="ml-2 text-gray-700 font-semibold">Residential</span>
                  </label>
                  <label className="inline-flex items-center max-[525px]:mb-5">
                    <input
                      type="radio"
                      name="propertyType"
                      value="commercial"
                      checked={propertyType === 'commercial'}
                      onChange={() => handlePropertyTypeChange('commercial')}
                      className="form-radio h-5 w-5 text-blue-600"
                    />
                    <span className="ml-2 text-gray-700 font-semibold">Commercial</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="propertyType"
                      value="land"
                      checked={propertyType === 'land'}
                      onChange={() => handlePropertyTypeChange('land')}
                      className="form-radio h-5 w-5 text-blue-600"
                    />
                    <span className="ml-2 text-gray-700 font-semibold">Land / Plot</span>
                  </label>
                </div>
              </div>
  
              {renderPropertyTypeOptions()}
  
              <div className="flex space-x-8 mb-12 ml-6 max-[768px]: pr-5 max-[525px]:flex-col max-[525px]:space-x-0">
                <div className="w-1/2 max-[525px]:w-full max-[525px]:mb-4">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Built up Area <span className="text-red-500">*</span>
                  </label>
                  <div className="flex">
                    <input
                      type="text"
                      value={builtUpArea}
                      onChange={(e) => setBuiltUpArea(e.target.value)}
                      className="w-full px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      required
                    />
                    <span className="inline-flex items-center px-4 border rounded-r-lg bg-gray-100">Sq. Ft.</span>
                  </div>
                </div>
                <div className="w-1/2 max-[525px]:w-full">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Carpet Area <span className="text-red-500">*</span>
                  </label>
                  <div className="flex">
                    <input
                      type="text"
                      value={carpetArea}
                      onChange={(e) => setCarpetArea(e.target.value)}
                      className="w-full px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      required
                    />
                    <span className="inline-flex items-center px-4 border rounded-r-lg bg-gray-100">Sq. Ft.</span>
                  </div>
                </div>
              </div>
              <div className="flex space-x-8 mb-12 ml-6 max-[525px]:ml-0 max-[768px]: p-5 max-[525px]:flex max-[525px]:flex-col max-[525px]:space-x-0">
                <div className="w-1/4 max-[525px]:w-full ">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Property on Floor <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={propertyOnFloor}
                    onChange={(e) => setPropertyOnFloor(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                  />
                </div>
                <div className="w-1/4 max-[525px]:w-full max-[525px]:mt-5">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Total Floors <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={totalFloors}
                    onChange={(e) => setTotalFloors(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                  />
                </div>
  
                <div className="w-2/4 max-[525px]:w-full max-[525px]:mt-5">
                  <label className="block text-gray-700 font-semibold mb-2">
                    <span className="text-red-500">*</span> Property Facing
                  </label>
                  <select
                    value={propertyFacing}
                    onChange={(e) => setPropertyFacing(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                    >
                    <option value="">Select</option>
                    <option value="north">North</option>
                    <option value="south">South</option>
                    <option value="east">East</option>
                    <option value="west">West</option>
                  </select>
                </div>
              </div>
              <div className="mb-12 ml-6 max-[768px]: pr-5">
                <label className="block text-gray-700 font-semibold mb-2">
                  Property Age <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-2 max-[768px]:grid max-[768px]:grid-cols-3">
                  {['Less Than 1 year','0-1 years', '1-5 years', '5-10 years', 'Greater than 10 years'].map((age) => (
                    <button
                      key={age}
                      className={`btn px-4 py-2 border rounded-3xl focus:outline-none ${propertyAge === age ? 'bg-gradient-to-b from-blue-300 to-blue-950 text-white' : ''}`}
                      onClick={() =>{
                        setPropertyAge(age);
                      } }
                      required
                    >
                      {age}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mb-12 ml-6 max-[768px]: pr-5">
                <label className="block text-gray-700 font-semibold mb-2">
                  BHK Type <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-2 max-[768px]:grid max-[768px]:grid-cols-3">
                  {['1 RK','1 BHK', '2 BHK', '3 BHK', '4 BHK', '5+ BHK'].map((type) => (
                    <button
                      key={type}
                      className={`btn px-4 py-2 border rounded-3xl focus:outline-none ${bhkType === type ? 'bg-gradient-to-b from-blue-300 to-blue-950 text-white' : ''}`}
                      onClick={() => setBhkType(type)}
                      required
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mb-12 ml-6 max-[768px]: pr-5">
                <label className="block text-gray-700 font-semibold mb-2">
                  Bathrooms/Toilets <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-2 max-[768px]:grid max-[768px]:grid-cols-3">
                  {['1', '2', '3', '4', '5', '6+'].map((bathroom) => (
                    <button
                      key={bathroom}
                      className={`btn px-4 py-2 border rounded-3xl focus:outline-none ${bathrooms === bathroom ? 'bg-gradient-to-b from-blue-300 to-blue-950 text-white' : ''}`}
                      onClick={() => setBathrooms(bathroom)}
                      required
                    >
                      {bathroom}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mb-12 ml-6 max-[768px]: pr-5">
                <label className="block text-gray-700 font-semibold mb-2">
                  Balcony <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-2">
                  {['Yes', 'No'].map((option) => (
                    <button
                      key={option}
                      className={`btn px-4 py-2 border rounded-3xl focus:outline-none ${balcony === option ? 'bg-gradient-to-b from-blue-300 to-blue-950 text-white' : ''}`}
                      onClick={() => setBalcony(option)}
                      required
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mb-12 ml-6 max-[768px]: pr-5">
                <label className="block text-gray-700 font-semibold mb-2">
                  Tenant Preference <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-2 max-[768px]:grid max-[768px]:grid-cols-3 max-[374px]:grid-cols-2">
                  {['Family', 'Bachelor', 'Any'].map((preference) => (
                    <button
                      key={preference}
                      className={`btn px-4 py-2 border rounded-3xl focus:outline-none ${tenantPreference === preference ? 'bg-gradient-to-b from-blue-300 to-blue-950 text-white' : ''}`}
                      onClick={() => setTenantPreference(preference)}
                      required
                    >
                      {preference}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mb-12 ml-6 max-[768px]: pr-5">
                <label className="block text-gray-700 font-semibold mb-2">
                  Availability <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-2 max-[374px]:grid max-[374px]:grid-cols-2">
                  {['Immediate', 'Within 1 month', 'Within 3 months'].map((availabilityOption) => (
                    <button
                      key={availabilityOption}
                      className={`btn px-4 py-2 border rounded-3xl focus:outline-none ${availability === availabilityOption ? 'bg-gradient-to-b from-blue-300 to-blue-950 text-white' : ''}`}
                      onClick={() => setAvailability(availabilityOption)}
                      required
                    >
                      {availabilityOption}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mb-12 ml-6 max-[768px]: pr-5">
                <label className="block text-gray-700 font-semibold mb-2">
                  Property Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  className="w-full px-4 py-2 border rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                  rows="4"
                  placeholder="Add a description for your property to attract the best tenant"
                ></textarea>
              </div>
              <div className="bg-blue-900 text-white p-4 rounded-b-lg flex justify-between items-center sticky bottom-0 z-50">
              <p className="text-sm">Need Help? Call 9999999999</p>
              <button onClick={handleSubmit} className="bg-blue-900 text-white px-4 py-2 rounded-lg shadow hover:shadow-white hover:bg-gradient-to-l from-white to-blue-600">NEXT</button>
            </div>
            </div>
  
            
          </div>
        </div>
      </div>
  )
}

export default Part1
