import React from 'react'
import Image from 'next/image'
import map from '../Images/map.jpg'
import NavBar from '../components/NavBar'
import { Inknut_Antiqua, Inter } from 'next/font/google';
const inknutAntiqua = Inknut_Antiqua({ weight: '600', subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });
const page = () => {
  return (
    <div className='bg-[#FFBD05]'>
                <NavBar />
                <div className='flex flex-col justify-center'>
                    <div className='relative w-full h-[60vh] md:h-screen overflow-hidden'>
                        <Image
                            src={map}
                            priority
                            alt='Kaaba'
                            fill
                            className='object-cover'
                        />
                        {/* <div className='absolute inset-0 bg-[#FFBD05] opacity-20 z-10'></div> */}
    
                        <div className='absolute inset-0 flex flex-col justify-center px-4 md:px-10 z-20 pt-10 ' >
                            <div className='bg-[#FFBD05] px-10 py-5 lg:w-[900px] rounded-lg '>
                                <h1 className={`text-[#371275] text-2xl md:text-4xl  font-semibold leading-snug ${inknutAntiqua.className}`}>
                                Connect with Moulavi Tours & Travels
    
                            </h1>
                            <p className='mt-2 md:mt-6 text-base md:text-2xl font-normal text-[#371275] max-w-2xl mb-6 lg:mb-10'>
                                Your sacred journey begins with a conversation.
    
                            </p>
                            </div>
                            {/* <a href='#' className='uppercase px-10 md:px-13 py-4 md:py-5 bg-[#371275] w-fit text-white trxl-lg lg:text-2xl border-2 md:border-4 rounded-xl border-[#FFBD05]'>Book Your Ziyara Now</a> */}
                        </div>
                    </div>

                    </div>
                    </div>
  )
}

export default page