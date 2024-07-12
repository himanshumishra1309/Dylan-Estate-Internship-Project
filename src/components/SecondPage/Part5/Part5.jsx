import React, {useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './part5.css';
import AddPhotosImage from '../../Svgs/addphoto.svg';
import Popup from '../Popup/Popup';

function Part5() {
    const navigate = useNavigate();
    const [isPopupVisible, setPopupVisible] = useState(false);

    const handleSavePostClick = (event) => {
        event.preventDefault();
        setPopupVisible(true);
    };

    useEffect(()=>{
        return ()=>{
            document.body.style.backgroundColor = "white"
        }
    },[])

    const handleContinue = () => {
        setPopupVisible(false);
        if (window.innerWidth < 525) {
            const transitionDiv = document.querySelector('.transition-div');
            transitionDiv.style.backgroundPosition = 'left';
    
            setTimeout(() => {
                navigate('/thirdpage');
            }, 500);
          }
          else{
            navigate('/thirdpage');
          }
        
    };
    

    return (
        <div className="flex flex-col mt-10 max-[768px]:p-5 max-[768px]:mt-2 max-[550px]: w-full">
            <div className="flex-grow flex justify-center items-center">
                <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl flex flex-col" style={{ maxHeight: '80vh' }}>
                    <div className="flex bg-gray-50 rounded-t-lg sticky top-0 z-50">
                        <button className="max-[550px]:text-sm max-[525px]:hidden flex-1 p-4 rounded-t-lg text-center text-gray-500 ">PROPERTY DETAILS</button>
                        <button className="max-[550px]:text-sm max-[525px]:hidden flex-1 p-4 rounded-t-lg text-center text-gray-500">LOCATION DETAILS</button>
                        <button className="max-[550px]:text-sm max-[525px]:hidden flex-1 p-4 rounded-t-lg text-center text-gray-500">FEATURES & AMENITIES</button>
                        <button className="max-[550px]:text-sm max-[525px]:hidden flex-1 p-4 rounded-t-lg text-center text-gray-500">PRICE DETAILS</button>
                        <button className="max-[550px]:text-sm max-[525px]:w-full flex-1 p-4 rounded-t-lg text-center text-blue-900 bg-slate-300 font-semibold">PROPERTY IMAGES</button>
                    </div>

                    <div className='h-2 w-full bg-slate-200 transition-div'>
                        <div className='h-2 w-4/5 bg-blue-800 max-[525px]:hidden'></div>
                    </div>

                    <div className="p-8 overflow-y-scroll custom-scrollbar">
                        <div>
                            <p className='text-xl mb-10'>Add Photos / videos to attract more tenants!</p>
                            <p className='text-lg mb-5'>Add Photos of living room, bedroom, bathroom, floor, doors, kitchen, balcony, location map, neighborhood, etc</p>
                            <div>
                                <img src={AddPhotosImage} alt="Add Photos Now" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                            </div>
                            <p className='text-xl mt-7 mb-7'>OR</p>
                            <p className='text-xl mb-7'>We can upload them for you! You can email the pictures and videos to us at Dylanestate.com</p>
                            <p className='text-sm mt-7 mb-7'>Accepted formats are .jpg, .gif, .bmp & .png.<br />Maximum size allowed is 20 MB. Minimum dimension allowed 600*400 Pixel</p>
                        </div>
                    </div>

                    <div className="bg-blue-900 text-white p-4 rounded-b-lg flex justify-between items-center sticky bottom-0 z-50">
                        <p className="text-sm">Need Help? Call 9999999999</p>
                        <button onClick={handleSavePostClick} className="bg-blue-900 text-white px-4 py-2 rounded-lg shadow hover:shadow-white hover:bg-gradient-to-l from-white to-blue-600">Save & Post</button>
                    </div>
                </div>
            </div>
            <Popup 
                isVisible={isPopupVisible} 
                onClose={() => setPopupVisible(false)} 
                onContinue={handleContinue} 
            />
        </div>
    );
}

export default Part5;
