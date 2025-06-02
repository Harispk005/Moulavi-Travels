import React from 'react'
import Image from 'next/image';
import busServiceImg from '../Images/passport.jpg';
import { PhoneCall } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { Inknut_Antiqua, Inter } from 'next/font/google';


const inknutAntiqua = Inknut_Antiqua({ weight: '600', subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });


const WhyChooseUs2 = () => {
  return (
    <>
      <div className='bg-[#371275] '>
        <div className='flex flex-col p-4 max-w-7xl mx-auto bg-[#371275]  w-full mt-4'>
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

      <div className='bg-[#FFBD05] p-4 max-w-7xl mx-auto w-full mt-4'>
        <h2 className={`${inknutAntiqua.className} mt-4 text-2xl lg:text-3xl text-[#371275] `}>Your Path, Your Peace — Begin Your Spiritual Journey with Moulavi Travels.</h2>
        <p className=' text-justify mt-4 md:mt-8 text-[#371275] md:text-lg'>
          From spontaneous ziyara trips to long-planned spiritual journeys, Moulavi Travels offers the perfect flight options for every kind of traveler.
        </p>
        <div className='flex gap-5 mt-8'>
          <button className="bg-[#371275] text-[#FFBD05] h-[50px] w-[180px] flex items-center justify-center rounded-2xl hover:bg-[#1d1728] hover:text-[#FFBD05] transition-colors duration-300">   
            <span className="mr-2">
              <PhoneCall />
            </span>
            Call Now
          </button>

          <button className="bg-[#FFBD05] text-[#371275] h-[50px] w-[180px] border-2 border-[#371275] flex items-center justify-center rounded-2xl hover:bg-[#371275] hover:text-[#FFBD05] transition-colors duration-300">
            <FaWhatsapp className=" mr-2 h-6 w-6 " />
            WhatsApp Now
          </button>
        </div>

      </div>
    </>
  )
}

export default WhyChooseUs2