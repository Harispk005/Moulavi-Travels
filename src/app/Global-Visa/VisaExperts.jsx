'use client';
import React from 'react';
import Image from 'next/image';
import globe from '../Images/globe.jpg';
import { Inknut_Antiqua, Inter } from 'next/font/google';

const inknutAntiqua = Inknut_Antiqua({ weight: '600', subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

const VisaExperts = () => {
  return (
    <div className='bg-[#371275]'>
      <div className='flex flex-col p-4 max-w-7xl mx-auto bg-[#371275] w-full mt-4'>
        <h1 className={`text-[#371275] bg-[#FFBD05] md:text-xl border-3 border-[#FFBD05] w-fit px-4 md:px-8 py-2 font-[550] mb-4 ${inter.className}`}>
          VISA EXPERTS
        </h1>
        <h2 className={`${inknutAntiqua.className} mt-4 text-2xl lg:text-3xl text-[#FFBD05]`}>
         Your Passport to Seamless Travel.
        </h2>

        <div className='flex flex-col lg:flex-row gap-4 lg:gap-8 mt-4'>
          <div className='flex-1'>
            <p className='text-justify text-[#FFBD05] md:text-lg h-full lg:py-2 '>
            Are you ready to embark on a spiritual journey to the sacred cities of Mecca and Madina, explore historic landmarks, or experience the vibrant cultures of new destinations? Moulavi Travels is here to make your dream a reality.<br/>
             We specialize in a wide range of visa services to ensure your journey is smooth and stress-free.<br/>
              Whether you're planning to perform Hajj and Umrah, study abroad, work internationally, or reunite with family, we offer personalized guidance every step of the way.<br/>
               From securing work permits, student visas, and family reunifications to permanent residency applications, we ensure your visa process is seamless and hassle-free.<br/>Our team works closely with you to ensure your application is complete, accurate, and perfectly tailored to maximize the chances of approval. We are committed to providing support and expertise for your travels, helping you unlock a world of opportunities. Don’t let visa complexities slow you down. Contact Moulavi Travels today, and we’ll guide you toward a successful, stress-free journey.


            </p>
          </div>

          <div className='flex-1'>
            <Image
              src={globe}
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

export default VisaExperts;
