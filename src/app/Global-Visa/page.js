'use client';
import React from 'react'
import Image from 'next/image'
import GlobalVisa from '../Images/globalvisa-bg.jpg';
import tick from '../Images/tick.png';
import { Inknut_Antiqua, Inter } from 'next/font/google';
import WhyChooseUs2 from '../components/WhyChooseUs2';
import Contact from '../components/Contact';
import NavBar from '../components/NavBar';
import Faq from '../components/Faq';
import VisaExperts from './VisaExperts';
import WhatsappAndCall from '../components/WhatsappAndCall';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';



const inknutAntiqua = Inknut_Antiqua({ weight: '600', subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' },
    },
};
const Page = () => {
    const handleScrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div className='bg-[#FFBD05]'>
            <NavBar />
            <div className='flex flex-col justify-center'>
                <div className='relative w-full h-[60vh] md:h-screen overflow-hidden'>
                    <Image
                        src={GlobalVisa}
                        priority
                        alt='Kaaba'
                        fill
                        className='object-cover'
                    />
                    <div className='absolute inset-0 bg-[#FFBD05] opacity-20 z-10'></div>

                    <div className='absolute inset-0 flex flex-col justify-center px-4 md:px-10 z-20 pt-10'>
                        <h1 className={`text-white text-2xl md:text-4xl  font-semibold leading-snug ${inknutAntiqua.className}`}>
                            Step Into a World of Possibilities

                        </h1>
                        <p className='mt-2 md:mt-6 text-base md:text-2xl font-normal text-white max-w-2xl mb-6 lg:mb-10'>
                            From guidance to the final destination, we make every part of your journey easy.

                        </p>
                        <button onClick={() => handleScrollToSection('call')} className='uppercase px-10 md:px-13 py-4 md:py-5 bg-[#371275] w-fit text-white trxl-lg lg:text-2xl border-2 md:border-4 rounded-xl border-[#FFBD05]'>Book Your Visa Now</button>
                    </div>
                </div>

                <VisaExperts />

                <div className='bg-[#FFBD05]'>
                    <div className='flex flex-col p-4 py-10 lg:gap-8 max-w-7xl mx-auto w-full'>
                        <div>
                            <h1 className={`text-[#371275] md:text-xl border-3 border-[#371275] w-fit px-4 md:px-8 py-2 font-[550] ${inter.className}`}>
                                OUR GLOBAL VISA  SERVICES
                            </h1>
                            <h2 className={`${inknutAntiqua.className} mt-4 text-2xl text-[#371275]`}>
                                Embark on a Spiritual Journey with Moulavi Travels
                            </h2>
                            <p className={` text-justify mt-4 text-[#371275] md:text-xl ${inter.className}`}>At Moulavi Travels, we are dedicated to providing a comfortable, safe, and spiritual journey for all your Ziyara needs.
                            </p>
                        </div>

                        <motion.div
                            className="text-[#371275] mt-4"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <div className="flex flex-col gap-4 lg:gap-8">
                                {/* Service 1 */}
                                <motion.div className="flex gap-4 lg:gap-8 md:items-center" variants={itemVariants}>
                                    <Image
                                        src={tick}
                                        alt="tick"
                                        className="h-8 w-8 lg:h-12 lg:w-12 object-cover md:mt-[10px]"
                                    />
                                    <div>
                                        <h3 className="md:text-xl font-bold">Visa Consultation</h3>
                                        <p>Your trusted advisor for visa queries, offering clear guidance every step of the way.</p>
                                    </div>
                                </motion.div>

                                {/* Service 2 */}
                                <motion.div className="flex gap-4 lg:gap-8 md:items-center" variants={itemVariants}>
                                    <Image
                                        src={tick}
                                        alt="tick"
                                        className="h-8 w-8 lg:h-12 lg:w-12 object-cover md:mt-[10px]"
                                    />
                                    <div>
                                        <h3 className="md:text-xl font-bold">Embassy Liaison</h3>
                                        <p>Direct embassy communication for quick processing and issue resolution.</p>
                                    </div>
                                </motion.div>

                                {/* Service 3 */}
                                <motion.div className="flex gap-4 lg:gap-8 md:items-center" variants={itemVariants}>
                                    <Image
                                        src={tick}
                                        alt="tick"
                                        className="h-8 w-8 lg:h-12 lg:w-12 object-cover md:mt-[10px]"
                                    />
                                    <div>
                                        <h3 className="md:text-xl font-bold">Application Assistance</h3>
                                        <p>Expert guidance from start to finish, simplifying your application journey.</p>
                                    </div>
                                </motion.div>

                                {/* Service 4 */}
                                <motion.div className="flex gap-4 lg:gap-8 md:items-center" variants={itemVariants}>
                                    <Image
                                        src={tick}
                                        alt="tick"
                                        className="h-8 w-8 lg:h-12 lg:w-12 object-cover md:mt-[10px]"
                                    />
                                    <div>
                                        <h3 className="md:text-xl font-bold">Status Updates</h3>
                                        <p>Stay informed with regular updates throughout your application process.</p>
                                    </div>
                                </motion.div>

                                {/* Service 5 */}
                                <motion.div className="flex gap-4 lg:gap-8 md:items-center" variants={itemVariants}>
                                    <Image
                                        src={tick}
                                        alt="tick"
                                        className="h-8 w-8 lg:h-12 lg:w-12 object-cover md:mt-[10px]"
                                    />
                                    <div>
                                        <h3 className="md:text-xl font-bold">Document Review</h3>
                                        <p>Meticulous document review to ensure accuracy and increase approval success.</p>
                                    </div>
                                </motion.div>

                                {/* Service 6 */}
                                <motion.div className="flex gap-4 lg:gap-8 md:items-center" variants={itemVariants}>
                                    <Image
                                        src={tick}
                                        alt="tick"
                                        className="h-8 w-8 lg:h-12 lg:w-12 object-cover md:mt-[10px]"
                                    />
                                    <div>
                                        <h3 className="md:text-xl font-bold">Post-Approval Support</h3>
                                        <p>Ongoing support after approval, ensuring a smooth and seamless journey ahead.</p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* why choose us */}

                <WhyChooseUs2 />
                <WhatsappAndCall id='call' />
                <Faq />
                <Contact />
                <Footer />

            </div>
        </div>
    )
}

export default Page;
