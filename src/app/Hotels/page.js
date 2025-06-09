'use client';
import React from 'react'
import Image from 'next/image'
import hotel from '../Images/hotelbg.jpg'
import tick from '../Images/tick.png';
import { Inknut_Antiqua, Inter } from 'next/font/google';
import WhyChooseUs2 from '../components/WhyChooseUs2';
import StayWithUs from './StayWithUs';
import Contact from '../components/Contact';
import NavBar from '../components/NavBar';
import Faq from '../components/Faq';
import WhatsappAndCall from '../components/WhatsappAndCall';
import { motion } from 'framer-motion';


const inknutAntiqua = Inknut_Antiqua({ weight: '600', subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: 'easeOut' }
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
                        src={hotel}
                        priority
                        alt='Kaaba'
                        fill
                        className='object-cover'
                    />
                    <div className='absolute inset-0 bg-[#371275] opacity-50 z-10'></div>

                    <div className='absolute inset-0 flex flex-col justify-center px-4 md:px-10 z-20 pt-10'>
                        <h1 className={`text-white text-2xl md:text-4xl font-semibold  leading-snug ${inknutAntiqua.className}`}>
                            Find Your Perfect Stay with Moulavi Travels
                        </h1>
                        <p className='mt-2 md:mt-6 text-base md:text-2xl font-normal text-white max-w-2xl mb-6 lg:mb-10'>
                            Enjoy comfortable stays and warm hospitality that make you feel at home, no matter where you travel.
                        </p>
                        <button onClick={() => handleScrollToSection('call')} className='uppercase px-10 md:px-13 py-4 md:py-5 bg-[#371275] w-fit text-white trxl-lg lg:text-2xl border-2 md:border-4 rounded-xl border-[#FFBD05] cursor-pointer'>Book Your Stay Now </button>
                    </div>
                </div>

                {/* stay with us */}
                <StayWithUs />

                <div className='bg-[#FFBD05]'>
                    <div className='flex flex-col p-4 py-10 lg:gap-8 max-w-7xl mx-auto w-full'>
                        <div>
                            <h1 className={`text-[#371275] md:text-xl border-3 border-[#371275] w-fit px-4 md:px-8 py-2 font-[550] ${inter.className}`}>
                                OUR SERVICES
                            </h1>
                            <h2 className={`${inknutAntiqua.className} mt-4 text-2xl text-[#371275]`}>
                                Explore the World with Reverence
                            </h2>

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
                                        <h3 className="md:text-xl font-bold">Wide Hotel Selection (Ziyara-Focused)</h3>
                                        <p>Find the ideal stay for your Ziyara, from guesthouses to hotels with prayer spaces.</p>
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
                                        <h3 className="md:text-xl font-bold">24/7 Pilgrim Support</h3>
                                        <p>Find the ideal stay for your spiritual journey — from guesthouses near holy sites to hotels with prayer spaces.</p>
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
                                        <h3 className="md:text-xl font-bold">Easy Booking Process</h3>
                                        <p>Book your Ziyara stay in just a few clicks — simple and hassle-free.</p>
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
                                        <h3 className="md:text-xl font-bold">Expert Recommendations (Sacred Stays)</h3>
                                        <p>Find the best places to stay near holy sites for a peaceful Ziyara.</p>
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
                                        <h3 className="md:text-xl font-bold">Best Price Guarantee</h3>
                                        <p>Book with confidence knowing you’re getting the best deal.</p>
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
                                        <h3 className="md:text-xl font-bold">Additional Ziyara Services</h3>
                                        {/* <p>We’re here to assist you at every step, anytime you need help during your journey.</p> */}
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

            </div>
        </div>
    )
}

export default Page;
