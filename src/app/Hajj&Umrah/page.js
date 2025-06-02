import React from 'react'
import Image from 'next/image'
import Hajj from '../Images/hajj&umrah-bg.jpg'
import tick from '../Images/tick.png';
import { Inknut_Antiqua, Inter } from 'next/font/google';
import WhyChooseUs2 from '../components/WhyChooseUs2';
import Contact from '../components/Contact';
import NavBar from '../components/NavBar';
import Faq from '../components/Faq';
import SacredJourneys from './SacredJourneys';


const inknutAntiqua = Inknut_Antiqua({ weight: '600', subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

const Page = () => {

    return (
        <div className='bg-[#FFBD05]'>
            <NavBar />
            <div className='flex flex-col justify-center'>
                <div className='relative w-full h-[60vh] md:h-screen overflow-hidden'>
                    <Image
                        src={Hajj}
                        priority
                        alt='Kaaba'
                        fill
                        className='object-cover'
                    />
                    <div className='absolute inset-0 bg-[black] opacity-50 z-10'></div>

                    <div className='absolute inset-0 flex flex-col justify-center px-4 md:px-10 z-20 pt-10'>
                        <h1 className={`text-white text-2xl xl:text-5xl font-bold leading-snug ${inknutAntiqua.className}`}>
                            Begin your sacred journey to the holy cities with Moulavi Travels.
                        </h1>
                        <p className='mt-2 md:mt-6 text-base md:text-2xl font-normal text-white max-w-2xl mb-6 lg:mb-10'>
                            Your dream of visiting the holy cities of Mecca and Madina is our responsibility. Moulavi Travels ensures a smooth, peaceful journey for your Hajj and Umrah.
                        </p>
                        <a href='#' className='uppercase px-10 md:px-13 py-4 md:py-5 bg-[#371275] w-fit text-white trxl-lg lg:text-2xl border-2 md:border-4 rounded-xl border-[#FFBD05]'>Book Your Ziyara Now</a>
                    </div>
                </div>

                {/* stay with us */}
                <SacredJourneys />

                <div className='bg-[#FFBD05]'>
                    <div className='flex flex-col p-4 py-10 lg:gap-8 max-w-7xl mx-auto w-full'>
                        <div>
                            <h1 className={`text-[#371275] md:text-xl border-3 border-[#371275] w-fit px-4 md:px-8 py-2 font-[550] ${inter.className}`}>
                                OUR HAJJ & UMRAH  SERVICES
                            </h1>
                            <h2 className={`${inknutAntiqua.className} mt-4 text-2xl text-[#371275]`}>
                                Experience the World with Trusted Guidance
                            </h2>

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
                                        <h3 className="md:text-xl font-bold">Visa Assistance</h3>
                                        <p>Easy visa process to make your travel stress-free.
                                        </p>
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
                                        <h3 className="md:text-xl font-bold">Accommodation Arrangements</h3>
                                        <p>Convenient, comfortable stays near sacred places.
                                        </p>
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
                                        <h3 className="md:text-xl font-bold">Expert Guided Tours</h3>
                                        <p>Customized journeys designed for groups of every size.
                                        </p>
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
                                        <h3 className="md:text-xl font-bold">24/7 Support</h3>
                                        <p>Help is just a call away, with our dedicated support team available 24/7.
                                        </p>
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
                                        <h3 className="md:text-xl font-bold">Transportation Services</h3>
                                        <p> Efficient and dependable transportation to support your spiritual journey.
                                        </p>
                                    </div>
                                </div>

                                {/* Service 6 */}
                                <div className="flex gap-4 lg:gap-8 md:items-center">
                                    <Image
                                        src={tick}
                                        alt="tick"
                                        className="h-8 w-8 lg:h-12 lg:w-12 object-cover md:mt-[10px]"
                                    />
                                    <div>
                                        <h3 className="md:text-xl font-bold">Group Packages</h3>
                                        <p>Customized journeys designed for groups of every size.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* why choose us */}

                <WhyChooseUs2 />
                <Faq />
                <Contact />

            </div>
        </div>
    )
}

export default Page;
