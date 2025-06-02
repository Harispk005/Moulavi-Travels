import React from 'react'
import Image from 'next/image'
import Attstation from '../Images/attestation-bg.jpg'
import tick from '../Images/tick.png';
import { Inknut_Antiqua, Inter } from 'next/font/google';
import WhyChooseUs2 from '../components/WhyChooseUs2';
import Contact from '../components/Contact';
import NavBar from '../components/NavBar';
import Faq from '../components/Faq';
import Stamp from './Stamp';




const inknutAntiqua = Inknut_Antiqua({ weight: '600', subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

const Page = () => {

    return (
        <div className='bg-[#FFBD05]'>
            <NavBar />
            <div className='flex flex-col justify-center'>
                <div className='relative w-full h-[60vh] md:h-screen overflow-hidden'>
                    <Image
                        src={Attstation}
                        priority
                        alt='Kaaba'
                        fill
                        className='object-cover'
                    />
                    <div className='absolute inset-0 bg-[black] opacity-50 z-10'></div>

                    <div className='absolute inset-0 flex flex-col justify-center px-4 md:px-10 z-20 pt-10'>
                        <h1 className={`text-white text-2xl md:text-4xl font-semibold leading-snug ${inknutAntiqua.className}`}>
                            Certify. Verify. Achieve.

                        </h1>
                        <p className='mt-2 md:mt-6 text-base md:text-2xl font-normal text-white max-w-2xl mb-6 lg:mb-10'>
                            We work with trusted authorities to officially attest your documents, ensuring they&apos;sre valid and accepted worldwid
                        </p>
                        <a href='#' className='uppercase px-10 md:px-13 py-4 md:py-5 bg-[#371275] w-fit text-white trxl-lg lg:text-2xl border-2 md:border-4 rounded-xl border-[#FFBD05]'>Book Your Ziyara Now</a>
                    </div>
                </div>

                <Stamp />

                <div className='bg-[#FFBD05]'>
                    <div className='flex flex-col p-4 py-10 lg:gap-8 max-w-7xl mx-auto w-full'>
                        <div>
                            <h1 className={`text-[#371275] md:text-xl border-3 border-[#371275] w-fit px-4 md:px-8 py-2 font-[550] ${inter.className}`}>
                                OUR ATTESTATION SERVICES
                            </h1>
                            <h2 className={`${inknutAntiqua.className} mt-4 text-2xl text-[#371275]`}>
                                Travel Smart, Travel with Experts
                            </h2>
                            <p className={` text-justify mt-4 text-[#371275] md:text-xl ${inter.className}`}>At Moulavi Travels, we are dedicated to providing a comfortable, safe, and spiritual journey for all your Ziyara needs.
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
                                        <h3 className="md:text-xl font-bold">Document Verification</h3>
                                        <p>Offers precise and certified document translation services.</p>
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
                                        <h3 className="md:text-xl font-bold">Tracking & Delivery</h3>
                                        <p>Timely progress updates and delivery.</p>
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
                                        <h3 className="md:text-xl font-bold">Embassy Liaison</h3>
                                        <p>Streamline communication with embassies for faster processing.</p>
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
                                        <h3 className="md:text-xl font-bold">Translation Services</h3>
                                        <p>Offers precise and certified document translation services.</p>
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
                                        <h3 className="md:text-xl font-bold">Consultation & Guidance</h3>
                                        <p>Professional guidance at every step of the process.</p>
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
                                        <h3 className="md:text-xl font-bold">Express Services</h3>
                                        <p>Fast-track attestation for your urgent requirements.</p>
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
