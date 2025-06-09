import React from 'react'
import Image from 'next/image'
import Flight from '../Images/flight.jpg'
import Kid from '../Images/kid.jpg'
import tick from '../Images/tick.png';
import busServiceImg from '../Images/bus-service-img.png';


import { Inknut_Antiqua, Inter } from 'next/font/google';
import WhyChooseUs2 from '../components/WhyChooseUs2';
import WhatsappAndCall from '../components/WhatsappAndCall';


const inknutAntiqua = Inknut_Antiqua({ weight: '600', subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

const Middleview = () => {

      const handleScrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

   
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
                <div className='absolute inset-0 bg-[#371275] opacity-50 z-10'></div>

                <div className='absolute inset-0 flex flex-col justify-center px-4 md:px-10 z-20 pt-10'>
                    <h1 className={`text-white text-2xl md:text-4xl font-semibold leading-snug ${inknutAntiqua.className}`}>
                        Best Flights. Best Deals
                    </h1>
                    <p className='mt-2 md:mt-6 text-base md:text-2xl font-normal text-white max-w-2xl mb-6 lg:mb-10'>
                        From budget-friendly options to premium experiences, find the perfect flight to match your preferences and budget with Safiya.
                    </p>
                    <button onClick={()=> handleScrollToSection('call')}
                        className='uppercase px-10 md:px-13 py-4 md:py-5 bg-[#371275] w-fit text-white trxl-lg lg:text-2xl border-2 md:border-4 rounded-xl border-[#FFBD05] cursor-pointer'>Book Your Tickets Now</button>
                </div>
            </div>

            <div className='flex flex-col p-4 py-10 lg:gap-8 max-w-7xl mx-auto w-full'>
                <h1 className={`text-[#371275] md:text-xl border-3 border-[#371275] w-fit px-8 py-2 font-[550]  ${inter.className}`}>OUR SERVICES</h1>
            </div>
            <div className='flex flex-col p-4 lg:flex-row lg:gap-8  max-w-7xl mx-auto'>
                <Image src={Kid} alt='kid ' className='rounded-lg md:h-[300px] object-cover w-full' />
                <div className='flex flex-col mt-4 gap-4'>

                    <p className={` text-justify  text-[#371275] md:text-[17px] ${inter.className}`}>Travel Freely, Worry Less – Moulavi Travels is Here for You. Whether it’s a business trip, a family vacation, or a solo getaway, Moulavi Travels ensures your journey is smooth and hassle-free. <br /> With a trusted network of airlines and travel partners, we provide a wide range of flight options tailored to your needs and budget.
                        <br /> From economy to business class, short hauls to long-distance journeys — we’ve got it all. <br /> Just enter your destination and travel dates, and we’ll handle the rest.

                    </p>
                    <p className={` text-justify  text-[#371275] md:text-[17px] ${inter.className}`}>
                        Booking your next flight is just a few clicks away. Start your journey with Moulavi Travels today.
                    </p>
                </div>
            </div>

            <div className='flex flex-col p-4 py-10 lg:gap-8 max-w-7xl mx-auto w-full'>
                <div>
                    <h1 className={`text-[#371275] md:text-xl border-3 border-[#371275] w-fit px-4 md:px-8 py-2 font-[550] ${inter.className}`}>
                        OUR ZIYARA BUS SERVICES
                    </h1>
                    <h2 className={`${inknutAntiqua.className} mt-4 text-2xl text-[#371275]`}>
                        Explore Sacred Destinations with Expertise
                    </h2>
                    <p className={`text-justify mt-4 text-[#371275] md:text-xl ${inter.className}`}>
                        At Moulavi Travels, we are dedicated to providing a comfortable, safe, and spiritual journey for all your Ziyara needs.
                    </p>
                </div>

                <div className='text-[#371275] mt-4'>
                    <div className='flex flex-col gap-4 lg:gap-8'>
                        {/* Service 1 */}
                        <div className="flex gap-4 lg:gap-8 md:items-center">
                            <Image
                                src={tick}
                                alt="tick"
                                className="h-8 w-8 lg:h-12 lg:w-12 object-cover md:mt-[10px]"
                            />
                            <div>
                                <h3 className="md:text-xl font-bold">Flight Booking</h3>
                                <p>Simple and secure flight booking with just a few clicks.</p>
                            </div>
                        </div>

                        {/* Service 2 */}
                        <div className="flex gap-4 lg:gap-8 md:items-center">
                            <Image
                                src={tick}
                                alt="tick"
                                className="h-8 w-8 lg:h-12 lg:w-12 object-cover md:mt-[10px]"
                            />
                            <div>
                                <h3 className="md:text-xl font-bold">Best Price Guarantee</h3>
                                <p>Book with confidence knowing you’re getting the best deal.</p>
                            </div>
                        </div>

                        {/* Service 3 */}
                        <div className="flex gap-4 lg:gap-8 md:items-center">
                            <Image
                                src={tick}
                                alt="tick"
                                className="h-8 w-8 lg:h-12 lg:w-12 object-cover md:mt-[10px]"
                            />
                            <div>
                                <h3 className="md:text-xl font-bold">Flexible Options</h3>
                                <p>Find flights that fit your schedule and travel preferences.</p>
                            </div>
                        </div>

                        {/* Service 4 */}
                        <div className="flex gap-4 lg:gap-8 md:items-center">
                            <Image
                                src={tick}
                                alt="tick"
                                className="h-8 w-8 lg:h-12 lg:w-12 object-cover md:mt-[10px]"
                            />
                            <div>
                                <h3 className="md:text-xl font-bold">Travel Insurance</h3>
                                <p>Travel safely and securely with added protection.</p>
                            </div>
                        </div>

                        {/* Service 5 */}
                        <div className="flex gap-4 lg:gap-8 md:items-center">
                            <Image
                                src={tick}
                                alt="tick"
                                className="h-8 w-8 lg:h-12 lg:w-12 object-cover md:mt-[10px]"
                            />
                            <div>
                                <h3 className="md:text-xl font-bold">24/7 Customer Support</h3>
                                <p>Get help and support whenever you need it.</p>
                            </div>
                        </div>

                        {/* Service 6 */}
                        {/* <div className="flex gap-4 lg:gap-8 md:items-center">
                            <Image
                                src={tick}
                                alt="tick"
                                className="h-8 w-8 lg:h-12 lg:w-12 object-cover md:mt-[10px]"
                            />
                            <div>
                                <h3 className="md:text-xl font-bold">24/7 Customer Support</h3>
                                <p>We’re here to assist you at every step, anytime you need help during your journey.</p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>

            {/* why choose us */}

            <WhyChooseUs2 />
            <WhatsappAndCall id='call'/>
            

        </div>
    )
}

export default Middleview
