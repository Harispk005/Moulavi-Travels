'use client';
import React from 'react';
import Image from 'next/image';
import HajjCont from '../Images/hajj&umrah-cont.jpg';
import { Inknut_Antiqua, Inter } from 'next/font/google';

const inknutAntiqua = Inknut_Antiqua({ weight: '600', subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

const SacredJourneys = () => {
  return (
    <div className='bg-[#371275]'>
      <div className='flex flex-col p-4 max-w-7xl mx-auto bg-[#371275] w-full mt-4'>
        <h1 className={`text-[#371275] bg-[#FFBD05] md:text-xl border-3 border-[#FFBD05] w-fit px-4 md:px-8 py-2 font-[550] mb-4 ${inter.className}`}>
          SACRED JOURNEYS
        </h1>
        <h2 className={`${inknutAntiqua.className} mt-4 text-2xl lg:text-3xl text-[#FFBD05]`}>
          Walk towards the Kaaba with peace – guided by Moulavi Travels.
        </h2>

        <div className='flex flex-col lg:flex-row gap-4 lg:gap-8 mt-4'>
          <div className='flex-1'>
            <p className='text-justify text-[#FFBD05] md:text-lg h-full '>
              For years, Moulavi Travels has been a trusted guide for pilgrims embarking on the sacred journeys of Hajj and Umrah. We recognize the deep emotional and spiritual importance of these pilgrimages and are committed to providing you with a peaceful, respectful, and well-managed experience.<br/><br/>Our services go beyond just travel—we assist you with visa processing, flight bookings, accommodation, and on-ground guidance.<br/>
               Every package is carefully crafted to suit your needs, whether you’re looking for a private Hajj experience or a convenient group Umrah journey.<br/>
               <br/>
                We ensure your comfort with handpicked hotels close to the Holy Sites in Makkah and Madina, quality transport, and spiritual support throughout your journey.<br/><br/> Our dedicated team is available at every step to offer assistance and make sure you can focus on your ibadah without worry. With Moulavi Travels, you are not just booking a trip—you are preparing for a journey of a lifetime, handled with care, respect, and devotion.
            </p>
          </div>

          <div className='flex-1'>
            <Image
              src={HajjCont}
              alt="Hotel Experience"
              className="object-cover w-full h-full rounded-lg"
              style={{ height: '80%' }}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SacredJourneys;
