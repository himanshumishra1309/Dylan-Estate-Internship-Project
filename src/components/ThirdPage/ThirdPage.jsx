import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

function ThirdPage() {
    const navigate = useNavigate();
    
    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/lastpage');
    };

    useEffect(()=>{
        return ()=>{
            document.body.style.backgroundColor = "white"
        }
    },[])
  return (
    <div className='mt-20 ml-20 max-[525px]:ml-4 max-[525px]:mt-10'>
      <p className='text-2xl mb-6'>Thank you for listing your property with us,</p>
      <p className='text-xl mb-6'>Your listing will be reviewed and will go live within 24 hours.</p>
      <p className='text-xl mb-6'>We will now manage your listing and get in touch with you after finding the best suitable tenant as per your preference. 
      </p>
      <p className='text-blue-800 text-lg mb-10'>-Dylan Estates</p>

      <button className='w-56 h-10 bg-blue-950 text-white rounded-xl text-lg mr-5 max-[525px]:mb-5'>Edit Property Listing</button>
      <button onClick={handleSubmit} className='w-56 h-10 bg-blue-950 text-white rounded-xl text-lg mr-5'>Preview Property Listing</button>
    </div>
  )
}

export default ThirdPage
