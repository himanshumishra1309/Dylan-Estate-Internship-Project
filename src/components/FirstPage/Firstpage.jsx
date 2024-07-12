import React, { useEffect } from 'react'
import Card from '../Card/Card'
import tick from '../Svgs/tick.svg'

function Firstpage() {
    useEffect(()=>{
        return ()=>{
            document.body.style.backgroundColor = "rgb(1, 1, 60)"
        }
    },[])
  return (
    <>
    <div className='flex items-start flex-col justify-center ml-20 mb-16 mt-16 max-[768px]:m-3 max-[768px]:mb-10'>
        <h1 className='max-[768px]:text-start text-white text-4xl'>Sell or Rent your Property For Free</h1>
        <br/>
        <p className='max-[768px]:text-start text-white text-xl'>Whether you’re ready to sell or looking for answers, we’ll guide you with data and expertise specific to your needs.</p>
    </div>
    <div className='max-[600px]:flex-col max-[768px]:p-5 flex items-center justify-around'>
        <div>
            <h2 className='text-white text-3xl mb-7'>Upload your property in 5 simple steps</h2>
            <p className="flex items-center space-x-2 mb-3 text-white">
                <img src={tick} alt="tick" className="h-10 w-10"/>
                <span>Add your properties <b>Basic Details</b></span>
            </p>
            <p className="flex items-center space-x-2 mb-3 text-white">
                <img src={tick} alt="tick" className="h-10 w-10"/>
                <span>Add property <b>Location</b></span>
            </p>
            <p className="flex items-center space-x-2 mb-3 text-white">
                <img src={tick} alt="tick" className="h-10 w-10"/>
                <span>Add property <b>Features and amenities</b></span>
            </p>
            <p className="flex items-center space-x-2 mb-3 text-white">
                <img src={tick} alt="tick" className="h-10 w-10"/>
                <span>Add <b>Price details</b></span>
            </p>
            <p className="flex items-center space-x-2 mb-3 text-white">
                <img src={tick} alt="tick" className="h-10 w-10"/>
                <span>Add your best <b>Property Shots</b></span>
            </p>
        </div>
    <Card/>
    </div>

    </>
  )
}

export default Firstpage
