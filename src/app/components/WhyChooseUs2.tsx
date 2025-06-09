import React from 'react'
import Image from 'next/image';
import busServiceImg from '../Images/passport.jpg';
import { Inknut_Antiqua, Inter } from 'next/font/google';



const inknutAntiqua = Inknut_Antiqua({ weight: '600', subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });


const WhyChooseUs2 = () => {
  return (
    <>
      <div className='bg-[#371275] '>
        <div className='flex flex-col p-4 lg:pb-10 max-w-7xl mx-auto bg-[#371275]  w-full mt-4'>
          <h1 className={`text-[#371275] bg-[#FFBD05] md:text-xl border-3 border-[#FFBD05] w-fit px-4 md:px-8 py-2 font-[550] mb-4  ${inter.className}`}> CHOOSE WITH CONFIDENCE</h1>
          <h2 className={`${inknutAntiqua.className} mt-4 text-2xl lg:text-3xl text-[#FFBD05] `}>WHY CHOOSE MOULAVI?</h2>
          <div className='flex flex-col lg:flex-row gap-4 lg:gap-8 lg:mt-4'>
            <p className=' text-justify mt-4 text-[#FFBD05] md:text-lg'>
              At Moulavi Travels (Ziyara), we provide a complete range of travel services tailored to meet the needs of every traveler.
              With access to a wide variety of flight options from trusted airlines, you’ll enjoy the freedom to choose the perfect itinerary that fits your schedule and budget.
              <br />
              <br />
              We’re committed to offering the best prices on flight tickets, ensuring you get great value with every booking. Plus, our 24/7 customer support is always here to help you with any questions or concerns, giving you peace of mind throughout the process.
              <br />
              <br />
              Make the most of your travel experience with our exclusive deals and discounts—because at Moulavi Travels (Ziyara), we believe in making your journey affordable, smooth, and memorable.
              <br />
              <br />
              Book your flights with us today and feel the difference.
            </p>
            <Image src={busServiceImg} alt="busServiceImg" className="w-full lg:min-w-1/2 object-cover lg:h-[500px] lg:-mt-10 rounded-lg  " priority />
          </div>
        </div>
      </div>

   
    
    </>
  )
}

export default WhyChooseUs2