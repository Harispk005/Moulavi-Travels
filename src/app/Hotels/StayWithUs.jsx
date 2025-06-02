import React from 'react'
import Image from 'next/image';
import busServiceImg from '../Images/bus-service-img.png';
import hotelexp from '../Images/hotelexp.jpg'

import { Inknut_Antiqua, Inter } from 'next/font/google';


const inknutAntiqua = Inknut_Antiqua({ weight: '600', subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });


const StayWithUs = () => {
  return (
    <div className='bg-[#371275] '>
        <div className='flex flex-col p-4 max-w-7xl mx-auto bg-[#371275]  w-full mt-4'>
                <h1 className={`text-[#371275] bg-[#FFBD05] md:text-xl border-3 border-[#FFBD05] w-fit px-4 md:px-8 py-2 font-[550] mb-4  ${inter.className}`}> STAY WITH US</h1>
                <h2 className={`${inknutAntiqua.className} mt-4 text-2xl lg:text-3xl text-[#FFBD05] `}>Experience Ziyara with Comfort, Care, and Complete Peace of Mind – Only at Moulavi Travels.</h2>
                <div className='flex flex-col lg:flex-row gap-4 lg:gap-8 lg:mt-4'>
                    <p className=' text-justify mt-4 text-[#FFBD05] md:text-lg'>
                      At Moulavi Travels, we bring you the perfect blend of comfort, convenience, and affordability.
                      <br/><br/>
                       Whether you're planning a spiritual ziyara, a family trip, or a business visit, our wide selection of trusted hotel stays ensures there's something for every traveler.<br/> With a smooth booking process and accommodations across key destinations, finding your ideal stay is just a few clicks away.<br/><br/> Let Moulavi Travels make your journey restful and memorable — wherever your path leads. 
                    </p>
                    <Image src={hotelexp} alt="busServiceImg" className="w-full lg:min-w-1/2 object-cover lg:h-[500px] lg:-mt-10 rounded-lg" priority />
                </div>
            </div>
    </div>
  )
}

export default StayWithUs;