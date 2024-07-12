import React, {useEffect, useContext} from 'react'
import './lastpage.css'
import lastpageimg from '../Svgs/lastpageimg.svg'
import phone from '../Svgs/phone.svg'
import location from '../Svgs/location.svg'
import circleWheart from '../Svgs/circleWheart.svg'
import circleWshare from '../Svgs/circleWshare.svg'
import bedroom from '../Svgs/bedroom.svg'
import bathroom from '../Svgs/bathroom.svg'
import sqft from '../Svgs/sq-ft.svg'
import building from '../Svgs/building.svg'
import direction from '../Svgs/direction.svg'
import balcony from '../Svgs/balcony.svg'
import sofa from '../Svgs/sofa.svg'
import tenet from '../Svgs/tenet.svg'
import flooring from '../Svgs/flooring.svg'
import immediate from '../Svgs/immediate.svg'
import pet from '../Svgs/pet.svg'
import bmc from '../Svgs/bmc.svg'
import food from '../Svgs/food.svg'
import electricity from '../Svgs/electricity.svg'
import property from '../Svgs/property.svg'
import flat from '../Svgs/flat.svg'
import security1 from '../Svgs/security_.svg'
import security2 from '../Svgs/security.svg'
import cctv from '../Svgs/cctv.svg'
import map3 from '../Svgs/map3.svg'
import enl from '../Svgs/enl.svg'
import firesafety from '../Svgs/firesafety.svg'
import intercom from '../Svgs/intercom.svg'
import lift from '../Svgs/lift.svg'
import maintainance from '../Svgs/maintainance.svg'
import parking from '../Svgs/parking.svg'
import pfbu from '../Svgs/pfbu.svg'
import ppbu from '../Svgs/ppbu.svg'
import watersupply from '../Svgs/watersupply.svg'
import profile from '../Svgs/profile.svg'
import rating from '../Svgs/rating.svg'
import Housecard from './HouseCard/Housecard'
import Footer from './Footer/Footer'
import Drawer from './Drawer/Drawer'

function LastPage() {

    const overview = [
        { svg: bedroom, label: 'Two (2)', value: 'Bedrooms' },
        { svg: bathroom, label: 'One(1)', value: 'Bathrooms' },
        { svg: sqft, label: '580', value: 'Sq. Ft.' },
        { svg: building, label: 'Ground', value: 'Property on Floor' },
        { svg: building, label: '4', value: 'Total Floors' },
        { svg: direction, label: 'East', value: 'Facing' },
        { svg: balcony, label: 'No-Balcony', value: 'Balcony' },
        { svg: sofa, label: 'Semi-Furnished', value: 'Furnishing' },
        { svg: tenet, label: 'Any (Family / Bachelor)', value: 'Tenant Preference' },
        { svg: flooring, label: 'Normal tiles white', value: 'Flooring' },
        { svg: immediate, label: 'Immediate', value: 'Availability' },
        { svg: pet, label: 'Municipal Corporation (BMC)', value: 'Water Supply' },
        { svg: bmc, label: 'Yes', value: 'Pets Allowed' },
        { svg: food, label: 'Allowed', value: 'Non- Veg ' },
        { svg: electricity, label: 'No/ Rare Powercut', value: 'Electricity Status' },
        { svg: property, label: '5 Years', value: 'Property Age' },
        { svg: flat, label: 'Flats & Apartments', value: 'Property Type' },
        { svg: security1, label: 'yes', value: 'Gated Security' }
    ];

    const amenities = [
        { svg: security2, label: '24x7 Security', value: '24x7-security' },
        { svg: cctv, label: 'CCTV Cameras', value: 'cctv' },
        { svg: lift, label: 'Lift', value: 'lift' },
        { svg: parking, label: 'Reserved Parking', value: 'reserved-parking' },
        { svg: watersupply, label: 'Regular Water Supply', value: 'regular-water-supply' },
        { svg: ppbu, label: 'Power Backup Partial', value: 'power-backup-partial' },
        { svg: pfbu, label: 'Power Backup Full', value: 'power-backup-full' },
        { svg: maintainance, label: 'Maintenance Staff', value: 'maintenance-staff' },
        { svg: intercom, label: 'Intercom', value: 'intercom' },
        { svg: firesafety, label: 'Fire Safety', value: 'fire-safety' }
    ];

    useEffect(() => {
        return () => {
            document.body.style.backgroundColor = "white"
        };
    }, []);

    return (
        <>
            <div className='flex flex-row mt-10 ml-10 mr-10 max-[768px]:ml-3 max-[768px]:mt-3 max-[768px]:mr-3 max-[667px]:flex-col'>
                <div className='leftside flex flex-col w-2/3 pr-20 max-[768px]:pr-5 max-[667px]:w-full'>
                    <div className='w-full mb-20 max-[768px]:mb-14'>
                        <div className='flex flex-col mb-5'>
                            <h1 className='text-3xl max-[768px]:text-xl'>1 BHK Flat / Apartment For Rent in Gokul Village Chs 2 </h1>
                            <p className='text-3xl max-[768px]:text-xl'>(545 Sq.ft.)</p>
                        </div>
                        <div className='flex flex-row items-center justify-between w-full'>
                            <div className='flex flex-row items-center'>
                                <img src={location} /><p className='text-lg ml-3 max-[768px]:text-sm'>Gokul village chs 2 Shanti Park, near st. Xaviours High school</p>
                            </div>
                            <div className='flex'>
                                <img className='max-[768px]:w-8' src={circleWheart} />
                                <img className='max-[768px]:w-8' src={circleWshare} />
                            </div>
                        </div>
                        <div>
                            <img className='w-full' src={lastpageimg} />
                        </div>
                    </div>
                    <div className='shadow p-10 mb-10 max-[768px]:p-5'>
                        <div className='flex flex-row justify-between mb-10'>
                            <h1 className='text-2xl font-semibold max-[768px]:text-lg'>Property Overview</h1>
                            <p className='text-sm max-[768px]:text-xs'>Society: Gokul Village</p>
                        </div>
                        <div className='grid grid-cols-3'>
                        {overview.map((obj) => (
                            <div key={obj.label} className="flex items-start space-x-2 mb-12 max-[450px]:flex-col max-[450px]:justify-center max-[450px]:items-center">
                                <img src={obj.svg} alt={obj.label} className='pt-1'/>
                                <div className='flex flex-col items-start justify-start'>
                                <p className="text-blue-950 font-semibold max-[450px]:text-center">{obj.label}</p>
                                <p className="text-slate-500 max-[450px]:text-center">{obj.value}</p>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                    <div className='shadow p-10 pl-0 mb-10 max-[768px]:p-4'>
                        <h1 className='text-2xl font-semibold ml-10 mb-10 max-[768px]:ml-3'>Aminities</h1>
                        <div className="grid grid-cols-4 gap-4 mt-2">
                            {amenities.map((amenity) => (
                            <div key={amenity.value} className="flex flex-col items-center mb-10">
                                <img src={amenity.svg} alt={`${amenity.label} Icon`} />
                                <input type="checkbox" name="amenities" value={amenity.value} className='h-5 w-5 border-none shadow-none cursor-pointer text-blue-600'/>
                            </div>
                            ))}
                        </div>
                    </div>
                    <div className='shadow p-10 mb-10 max-[768px]:p-5 max-[768px]:mb-6'>
                        <h1 className='text-3xl font-semibold mb-10 max-[768px]:text-xl max-[768px]:mb-4'>Description</h1>
                        <div className=''>
                            <p className='text-lg max-[768px]:text-sm'>Spread over 510 sqft. this home is an ideal place to live in.  Access to bus station & medical stores is very easy & convenient from this house.</p>
                            <br/>
                            <p className='text-lg max-[768px]:text-sm'>If you are a frequent traveller, then you'll be happy to note that train station is less than 10 minutes from this house.  With PVR Cinemas - Mira Road, Maxus Cinemas & INOX close by, you can catch your favourite movies running & never worry about missing a show because of traffic. </p>
                            <br/>
                            <p className='text-lg max-[768px]:text-sm'>Never miss out on lifestyle as Rassaz Mall......</p>
                            <br/>
                            <p className='text-lg font-bold underline'>Show more</p>
                        </div>
                    </div>
                </div>
                <div className='rightside flex flex-col w-1/3 p-5 max-[667px]:w-full'>
                    <div className='bg-amber-100 w-full h-24 flex items-center justify-around mb-10 shadow-md max-[768px]:mb-3'>
                        <div className='flex flex-col items-center'>
                            <div className='flex items-center'>
                                <span className='text-3xl max-[768px]:text-lg max-[1024px]:text-lg'>₹ 20,000/</span><p className='text-xl max-[768px]:text-lg max-[1024px]:text-lg'>Month</p>
                            </div>
                            <p className='max-[768px]:text-xs max-[1024px]:text-xs'>(Rent- Negotiable)</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <span className='text-3xl max-[768px]:text-lg max-[1024px]:text-lg'>₹ 20,000</span>
                            <p className='max-[768px]:text-xs max-[1024px]:text-xs'>(Deposit)</p>
                        </div>
                    </div>
                    <div className='flex flex-col bg-amber-50 w-full h-auto justify-center shadow-lg'>
                        <div className='flex flex-col justify-center m-5'>
                            <div className='flex flex-col'>
                                <span className='font-bold text-2xl mb-2 max-[768px]:text-lg'>Send an Inquiry for this property?</span>
                                <span className='text-sm mb-2 max-[768px]:text-xs'>Contact Person :  Melvin Lasrado</span>
                            </div>
                            <div className='flex text-wrap items-center w-full h-auto border bg-white p-4 mt-4 mb-4 max-[768px]:mt-2 max-[768px]:mb-2'>
                                <img className='size-6 ml-4 mr-3 max-[768px]:size-3 max-[768px]:ml-1' src={phone}/><span className='font-semibold text-xl max-[768px]:text-sm max-[1024px]:text-sm'>+91-9999999999</span>
                            </div>
                            <input type='text' placeholder='Name' className='border h-10 mb-4 max-[768px]:h-7 max-[768px]:mb-2'/>
                            <input type='mail' placeholder='Email' className='border h-10 mb-4 max-[768px]:h-7 max-[768px]:mb-2 '/>
                            <div className='flex mb-5'>
                                <span className='flex justify-center items-center w-12 h-10 bg-white border max-[768px]:h-7'>+91</span>
                                <div className='flex justify-start items-center ml-2 w-full h-10 bg-white border pl-5 max-[768px]:h-7 max-[768px]:text-sm max-[1024px]:text-sm max-[768px]:pl-0 max-[768px]:height-auto'>999-999-9999</div>
                            </div>
                            <div className='w-full h-auto bg-white flex items-center justify-start p-7 mb-10 max-[768px]:text-xs max-[768px]:p-2 max-[768px]:mb-5'>I would like more information about Sector 5, shanti nagar, anubhav society</div>
                            <button className='w-full bg-blue-950 text-white tex-lg flex items-center justify-center h-10 rounded-md'>SEND INQUIRY</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='shadow-2xl flex flex-col m-10 max-[768px]:m-4'>
                <h1 className='text-3xl font-semibold ml-10 mt-6 mb-5 max-[768px]:ml-5'>Explore Neighborhoood</h1>
                <div className='flex flex-row max-[725px]:flex-col'>
                    <div className=' Lside flex flex-col w-2/3 mb-10 p-6 max-[725px]:w-full max-[725px]:mb-0'>
                        
                        <div className='flex justify-between max-[768px]:flex-col max-[1024px]:flex-col max-[1163px]:flex-col'>
                            <div className='flex items-center max-[768px]:mb-5 max-[1024px]:mb-5 max-[1163px]:mb-5'>
                                <img src={enl}/>
                                <p className='text-md ml-4 max-[768px]:text-lg '>Gokul Village chs 2</p>
                            </div>
                            <div className='flex items-center'>
                                <p className='text-lg mr-5'>To:</p>
                                <input className='border w-96 h-8 mr-5'/>
                                <button className='w-40 h-8 bg-blue-950 text-white'>Search</button>
                            </div>
                        </div>
                        <div>
                            <img className='w-full mt-5 h-auto' src={map3}/>
                        </div>
                    </div>
                    <div className='Rside flex flex-col w-1/3 mr-5 max-[768px]:mr-5 max-[725px]:w-full'>
                        <Drawer/>
                    </div>
                </div>
            </div>
            <div className='shadow-2xl flex flex-col m-10 p-10 max-[768px]:m-4 max-[450px]:p-5'>
                <h1 className='text-4xl font-semibold mb-12'>Ratings & Reviews</h1>
                <div className='grid grid-cols-2 max-[565px]:grid-cols-1'>
                    <div className='mr-20 max-[768px]:mr-5 max-[565px]:mb-10'>
                        <div className='flex flex-row justify-between mb-5 items-center'>
                            <div className='flex flex-row'>
                                <img className='max-[768px]:size-9' src={profile}/>
                                <div className='flex flex-col ml-4'>
                                    <span className='font-semibold max-[768px]:text-sm'>Aishwarya Malik</span>
                                    <span className='text-sm max-[768px]:text-xs'>Tenant (8 months)</span>
                                </div>
                            </div>
                            <div>
                                <img className='max-[768px]:size-14' src={rating}/>
                            </div>
                        </div>
                        <div>
                            <p className='font-semibold'>Good Society</p>
                            <p>The garden view is mesmerizing, the exposure of natural light is good.</p>
                            <p>Easy access to stores, markets and schools.</p>
                        </div>
                    </div>
                    <div className='mr-20 max-[768px]:mr-5'>
                        <div className='flex flex-row justify-between mb-5 items-center'>
                            <div className='flex flex-row'>
                                <img className='max-[768px]:size-9' src={profile}/>
                                <div className='flex flex-col ml-4'>
                                    <span className='font-semibold max-[768px]:text-sm'>Rajendra Prasad</span>
                                    <span className='text-sm max-[768px]:text-xs'>Owner(10+ years)</span>
                                </div>
                            </div>
                            <div>
                                <img className='max-[768px]:size-14' src={rating}/>
                            </div>
                        </div>
                        <div>
                            <p className='font-semibold'>Good Society & Apartment</p>
                            <p>With its thoughtfully designed apartments, power backup, and 24x7 security, it offers a secure and worry-free living experience.
                            Easy access to stores, markets and schools....</p>
                            <br/>
                            <p className='font-bold underline'>Show more</p>
                        </div>
                    </div>
                </div>
                <button className='bg-blue-950 text-white w-80 h-12 mt-10 max-[425px]:w-60 max-[450px]:text-lg'>Write a Review</button>
            </div>
            <div className='bg-amber-50 p-8 mb-10 max-[768px]:p-2 max-[725px]:p-0 '>
                <h1 className='text-3xl font-bold pl-5 mb-8'>Similar Properties in MiraRoad</h1>
                <div className='grid grid-cols-4 max-[750px]:grid-cols-2 max-[725px]:gap-4 max-[725px]:mr-8'>
                    <Housecard/>
                    <Housecard/>
                    <Housecard/>
                    <Housecard/>
                </div>
            </div>
            <div className='m-10 p-10 border shadow-md max-[768px]:p-5'>
                <h1 className='text-4xl mb-10 max-[768px]:text-xl max-[768px]:mb-5'>About Miraroad</h1>
                <p className='mb-2 max-[768px]:text-sm'>Spread over 510 sqft. this home is an ideal place to live in.  Access to bus station & medical stores is very easy & convenient from this house.  </p>
                <p className='mb-2 max-[768px]:text-sm'>If you are a frequent traveller, then you'll be happy to note that train station is less than 10 minutes from this house.  With PVR Cinemas - Mira Road, Maxus Cinemas & INOX close by, you can catch your favourite movies running & never worry about missing a show because of traffic. </p>
                <p className='mb-2 max-[768px]:text-sm'>Never miss out on lifestyle as Rassaz Mall......</p>
                <p className='text-blue-950 font-bold max-[768px]:text-sm'>Show more</p>
                <button className='w-52 h-10 bg-blue-950 text-white font-semibold mt-16 max-[768px]:mt-6'>Write a Review</button>
            </div>
            <Footer/>
        </>
    );
}

export default LastPage
