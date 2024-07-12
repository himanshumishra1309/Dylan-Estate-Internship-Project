import React, {useState} from 'react'
import houseimage from '../../Svgs/houseimage.svg'
import heart from '../../Svgs/heart.svg'
import share from '../../Svgs/share.svg'
import location from '../../Svgs/location.svg'
import rent from '../../Svgs/sq-ft.svg'

function Housecard() {
    const [isHearted, setIsHearted] = useState(false);

    const toggleHeart = () => {
        setIsHearted(!isHearted);
    };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 max-[768px]:w-40 max-[725px]:w-full">
        <div className="relative">
            <img className="w-full" src={houseimage} alt="Flat" />
            <div className="absolute top-2 right-2 flex space-x-2 z-10">
                <img 
                    src={heart} 
                    alt="heart" 
                    onClick={toggleHeart} 
                    className={`cursor-pointer ${isHearted ? 'filter-black' : ''}`} 
                />
                <img src={share} alt="share" className="cursor-pointer" />
            </div>
        </div>
        <div className="px-6 py-4 bg-white max-[768px]:px-2">
            <div className="font-bold text-xl mb-2 max-[768px]:text-sm">Modern & Luxury 2BHK Flat For Rent</div>
            <div className='flex items-center pt-2'>
                <img src={location}/><p className="text-gray-700 text-base max-[768px]:text-xs">
                Kashimira, Mira Road East, Mumbai
                </p>
            </div>
        </div>
        <div className="px-6 pb-2 flex flex-col justify-start items-start bg-white">
            <span className="text-gray-900 font-bold max-[768px]:text-xs">₹ 60.50 Lac</span>
            <div className='flex items-center'>
                <img src={rent}/><span className="text-gray-600 max-[768px]:text-xs">1850 Sq. ft.</span>
            </div>
        </div>
    </div>
  )
}

export default Housecard
