'use client'

import React from 'react'
import Image from 'next/image'
import map from '../Images/map.jpg'
import NavBar from '../components/NavBar'
import { motion } from 'framer-motion';
import phone from '../Images/newphone.png';
import newmail from '../Images/newmail.png';
import WhatsApp from '../Images/WhatsApp.png';
import DeliveryTime from '../Images/Delivery Time.png';
import Address from '../Images/Address.png';

import { Inknut_Antiqua, Inter } from 'next/font/google';
import ContactNow from '../components/ContactNow'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
const inknutAntiqua = Inknut_Antiqua({ weight: '600', subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: (custom) => ({
        opacity: 1,
        x: 0,
        transition: {
            duration: 1,
            delay: custom * 0.3, // 0s, 0.3s, 0.6s...
        },
    }),
};
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
                        <div className='bg-[#FFBD05] px-5 md:px-10 py-5 w-fit rounded-lg '>
                            <h1 className={`text-[#371275] text-2xl md:text-4xl  font-semibold leading-snug ${inknutAntiqua.className}`}>
                                Connect with Moulavi Tours & Travels

                            </h1>
                            <p className='mt-2 md:mt-6 text-base md:text-2xl font-normal text-[#371275] max-w-2xl mb-4'>
                                Your sacred journey begins with a conversation.

                            </p>
                        </div>
                        {/* <a href='#' className='uppercase px-10 md:px-13 py-4 md:py-5 bg-[#371275] w-fit text-white trxl-lg lg:text-2xl border-2 md:border-4 rounded-xl border-[#FFBD05]'>Book Your Ziyara Now</a> */}
                    </div>
                </div>

            </div>
            <div className=" bg-[#371275] py-5 mt-3 md:px-0 md:py-0 md:mt-0">
                <div className='p-3 md:p-10  max-w-7xl mx-auto'>
                    <h1 className={`text-[#371275] md:text-xl border-3 bg-[#FFBD05] w-fit px-8 py-2 font-[550] ${inter.className}`}>YOU CAN CONNECT</h1>
                    <h1 className={`text-[#FFBD05] text-lg md:text-3xl font-semibold my-5 ${inknutAntiqua.className}`}>We&apos;re Here to Assist You</h1>
                    <p className='text-white md:text-xl'>Ready to embark on your spiritual journey? Our dedicated team is available to answer your questions, provide guidance, and help you plan the perfect Ziyara pilgrimage experience.</p>

                    <div className='flex flex-wrap justify-center items-center md:gap-6 mt-10'>

                        <motion.div
                            custom={0}
                            variants={textVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className='flex flex-col justify-center items-center text-center text-[#371275] p-5 py-8 rounded-lg w-[300px] md:w-[350px] m-2 border-2 border-[#FFBD05]'>
                            <div className='relative p-2 bg-[#FFBD05] rounded-full'>
                                <Image src={phone} alt='phone' className='w-10 h-10' />
                            </div>

                            <h1 className={`text-[#FFBD05] text-lg md:text-xl font-semibold mt-4 max-w-[250px] ${inter.className}`}>
                                Call Us Directly
                            </h1>

                            <p className={`text-white text-xs md:text-sm text-justify mt-2 max-w-[250px] ${inter.className}`}>
                                +966552678666
                            </p>
                            <p className={`text-white text-xs text-justify mt-2 max-w-[250px] `}>Available Sunday - Thursday, 9 AM - 6 PM</p>
                            <a href='tel:+966552678666' className={`text-[#371275] md:text-xl border-3 bg-[#FFBD05] hover:bg-[#371275] hover:text-[#FFBD05] w-fit px-8 py-2 font-[550] transition duration-300 ${inter.className} mt-6 rounded-xl`}>Call Now</a>
                        </motion.div>



                        <motion.div
                            custom={1}
                            variants={textVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }} className='flex flex-col justify-center items-center text-center text-[#371275] p-5 py-8 rounded-lg w-[300px] md:w-[350px] m-2 border-2 border-[#FFBD05]'>
                            <div className='relative p-2 bg-[#FFBD05] rounded-full'>
                                <Image src={newmail} alt='newmail' className='w-10 h-10' />
                            </div>

                            <h1 className={`text-[#FFBD05] text-lg md:text-xl font-semibold mt-4 max-w-[250px] ${inter.className}`}>
                                Send Us an Email
                            </h1>

                            <p className={`text-white text-xs md:text-sm text-justify mt-2 max-w-[250px] ${inter.className}`}>
                                moulavitravels1959@gmail.com
                            </p>
                            <p className={`text-white text-xs text-justify mt-2 max-w-[250px] `}>We respond within 24 hours</p>
                            <a href='mailto:moulavitravels1959@gmail.com' className={`text-[#371275] md:text-xl border-3 bg-[#FFBD05] hover:bg-[#371275] hover:text-[#FFBD05] w-fit px-8 py-2 font-[550] transition duration-300 ${inter.className} mt-6 rounded-xl`}>Send Email</a>

                        </motion.div>

                        <motion.div
                            custom={2}
                            variants={textVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }} className='flex flex-col justify-center items-center text-center  text-[#371275] p-5 py-8 rounded-lg w-[300px] md:w-[350px] m-2 border-2 border-[#FFBD05]'>
                            <div className='relative p-2 bg-[#FFBD05] rounded-full'>
                                <Image src={WhatsApp} alt='WhatsApp' className='w-10 h-10' />
                            </div>

                            <h1 className={`text-[#FFBD05] text-lg md:text-xl font-semibold mt-4  ${inter.className}`}>
                                Message Us on WhatsApp
                            </h1>

                            <p className={`text-white text-xs md:text-sm text-justify mt-2 max-w-[250px] ${inter.className}`}>
                                +966552678666
                            </p>
                            <p className={`text-white text-xs text-justify mt-2 max-w-[250px] `}>Quick responses, 7 days a week</p>
                            <a
                                href="https://wa.me/966552678666?text=Hi%20I%20would%20like%20to%20know%20more%20about%20your%20services"

                                target="_blank"
                                rel="noopener noreferrer"
                                className={`text-[#371275] md:text-xl border-3 bg-[#FFBD05] hover:bg-[#371275] hover:text-[#FFBD05] w-fit px-8 py-2 font-[550] transition duration-300 ${inter.className} mt-6 rounded-xl`}
                            >
                                WhatsApp Now
                            </a>

                        </motion.div>
                    </div>
                </div>
            </div>
            <div className=" bg-[#FFBD05] py-5 mt-3 md:px-0 md:py-0 md:mt-0">
                <div className='p-3 md:p-10  max-w-7xl mx-auto'>
                    <h1 className={`text-[#371275] md:text-xl border-3 bg-[#FFBD05] w-fit px-8 py-2 font-[550] ${inter.className}`}>OFFICE LOCATION</h1>
                    <h1 className={`text-[#371275] text-lg md:text-3xl font-semibold my-5 ${inknutAntiqua.className}`}>Our Office Location</h1>
                    <p className='text-[#371275] md:text-xl'>Visit us at our convenient location in the heart of Thrissur. Our experienced team is ready to meet with you personally to discuss your pilgrimage plans.</p>

                    <div className='w-full border-3 p-4 md:p-10 mt-8 border-[#371275] border-solid rounded-lg flex flex-col gap-8'>
                        <div>
                            <div className='flex gap-4 items-center'  >
                                <Image src={Address} alt='Address' className='w-10 h-10' />

                                <h2 className={`${inter.className} text-[#371275] md:text-xl font-bold`}>Address</h2>

                            </div>
                            <h3 className='text-[#371275] md:text-lg mt-4'>Near Tahweel, 2066 King Fahd Br Rd, 2066, Al Baghdadiyah Ash Sharqiyah District, 7971, Jeddah 22241, Saudi Arabia</h3>

                        </div>
                        <div>
                            <div className='flex gap-4 items-center'  >
                                <Image src={DeliveryTime} alt='delivaryTime' className='w-10 h-10' />

                                <h2 className={`${inter.className} text-[#371275] md:text-xl font-bold`}>Office Hours</h2>

                            </div>
                            <h3 className='text-[#371275] md:text-lg mt-4'>
                                Monday - Thursday: 9:30 AM - 11:00 PM<br />
                                Friday : 4:30 PM - 11:00 PM <br />
                                Saturday & Sunday : 9:30 AM - 11:00 PM
                            </h3>

                        </div>
                    </div>
                </div>
            </div>
            <ContactNow />
            <Contact />
            <Footer />
        </div>
    )
}

export default page