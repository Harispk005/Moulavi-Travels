import React from 'react'
import Image from 'next/image'
import Flight from '../Images/flight.jpg'
import Kid from '../Images/kid.jpg'
import { Inknut_Antiqua, Inter } from 'next/font/google';


const inknutAntiqua = Inknut_Antiqua({ weight: '600', subsets: ['latin'] });
const inter = Inter({ weight: '600', subsets: ['latin'] });

const Middleview = () => {
    return (
        <div className='flex flex-col justify-center'>
            <div className='relative w-full h-[60vh] md:h-screen overflow-hidden'>
                <Image
                    src={Flight}
                    priority
                    alt='Kaaba'
                    fill
                    className='object-cover'
                />
                <div className='absolute inset-0 bg-black opacity-50 z-10'></div>

                <div className='absolute inset-0 flex flex-col justify-center items-center text-center px-4 md:px-10 z-20'>
                    <h1 className={`text-white text-3xl md:text-5xl font-bold ${inknutAntiqua.className}`}>
                        Best Flights. Best Deals
                    </h1>
                    <p className='mt-4 md:mt-6 text-base md:text-2xl font-medium text-white max-w-2xl'>
                        From budget-friendly options to premium experiences, find the perfect flight to match your preferences and budget with Safiya.
                    </p>
                </div>
            </div>
            <div className='flex flex-col md:flex-row justify-start p-5 md:p-10'>
                <Image src={Kid} alt='kid ' className='md:w-[700px] md:h-[500px] rounded-2xl' />
                <div className='flex flex-col p-3'>
                    <h1 className={`text-[#371275] md:text-xl border-3 border-[#371275] w-fit px-8 py-2 font-[550] md:ml-[40px] ${inter.className}`}>OUR SERVICES</h1>
                    <p className={`p-2 md:p-10 text-justify mt-5 md:mt-20 text-[#371275] md:text-[17px] ${inter.className}`}>Travel Freely, Worry Less – Moulavi Travels is Here for You. Whether it’s a business trip, a family vacation, or a solo getaway, Moulavi Travels ensures your journey is smooth and hassle-free. With a trusted network of airlines and travel partners, we provide a wide range of flight options tailored to your needs and budget.
                        From economy to business class, short hauls to long-distance journeys — we’ve got it all. Just enter your destination and travel dates, and we’ll handle the rest.

                        Booking your next flight is just a few clicks away. Start your journey with Moulavi Travels today.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Middleview
