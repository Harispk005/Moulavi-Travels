'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import tick from '../Images/tick.png';
import { Inknut_Antiqua, Inter } from 'next/font/google';
import WhyChooseUs2 from '../components/WhyChooseUs2';
import Contact from '../components/Contact';
import NavBar from '../components/NavBar';
import Faq from '../components/Faq';
import WhatsappAndCall from '../components/WhatsappAndCall';
import { motion } from 'framer-motion';
import axios from 'axios';
import bg from '../Images/packagesbg.jpg'

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

    const [posters, setPosters] = useState([]);

    useEffect(() => {
        const fetchPosters = async () => {
            try {
                const res = await axios.get('https://moulavitravels-backend.onrender.com/bus-posters');
                setPosters(res.data);
                console.log(res.data);


            } catch (err) {
                console.error('Failed to fetch posters:', err);
            }
        };

        fetchPosters();
    }, []);

    return (
        <div className='bg-[#FFBD05]'>
            <NavBar />
            <div className='flex flex-col justify-center'>
                {/* Hero Section */}
                <div className='relative w-full h-[60vh] md:h-screen overflow-hidden'>
                     <Image
                        src={bg}
                        priority
                        alt='BG'
                        fill
                        className='object-cover'
                    />
                    <div className='absolute inset-0 bg-[#371275] opacity-50 z-10'></div>

                    <div className='absolute inset-0 flex flex-col justify-center px-4 md:px-10 z-20 pt-10'>
                        <h1 className={`text-white text-2xl md:text-4xl font-semibold leading-snug ${inknutAntiqua.className}`}>
                            Discover the World with Moulavi Travels
                        </h1>
                        <p className='mt-2 md:mt-6 text-base md:text-2xl font-normal text-white max-w-2xl mb-6 lg:mb-10'>
                            Choose from our carefully curated tour packages and experience spiritual, cultural, and scenic wonders like never before.
                        </p>
                        <button
                            onClick={() => handleScrollToSection('call')}
                            className='uppercase px-10 md:px-13 py-4 md:py-5 bg-[#371275] w-fit text-white trxl-lg lg:text-2xl border-2 md:border-4 rounded-xl border-[#FFBD05] cursor-pointer'
                        >
                            Book Your Tour Now
                        </button>
                    </div>
                </div>

                {/* Posters / Offers Section */}
                {posters.length > 0 && (
                    <div className='bg-[#371275]'>
                        <div className='flex flex-col p-4 lg:pb-10 max-w-7xl mx-auto w-full mt-4'>
                            <h1 className={`text-[#371275] bg-[#FFBD05] md:text-xl border-3 border-[#FFBD05] w-fit px-4 md:px-8 py-2 font-[550] mb-4 ${inter.className}`}>
                                SPECIAL OFFERS
                            </h1>
                            <h2 className={`${inknutAntiqua.className} mt-4 text-2xl lg:text-3xl text-[#FFBD05]`}>
                                LATEST DEALS & TOUR POSTERS
                            </h2>

                            {/* Loop through each poster */}
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
                                {posters.map((poster, idx) => (
                                    <div key={idx} className='bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300'>
                                        <div className='w-full h-[500px] relative'>
                                            <Image
                                                src={poster.image}
                                                alt={`poster-${idx}`}
                                                fill
                                                className='object-cover'
                                            />
                                        </div>
                                        <div className='p-4 flex flex-col gap-2'>
                                            <h3 className='text-[#371275] text-xl font-bold'>{poster.heading}</h3>
                                            <p className='text-[#333] text-sm'>{poster.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>


                        </div>
                    </div>
                )}



                {/* Package Highlights */}
                <div className='bg-[#FFBD05]'>
                    <div className='flex flex-col p-4 py-10 lg:gap-8 max-w-7xl mx-auto w-full'>
                        <div>
                            <h1 className={`text-[#371275] md:text-xl border-3 border-[#371275] w-fit px-4 md:px-8 py-2 font-[550] ${inter.className}`}>
                                TOUR HIGHLIGHTS
                            </h1>
                            <h2 className={`${inknutAntiqua.className} mt-4 text-2xl text-[#371275]`}>
                                Experience More with Every Journey
                            </h2>
                        </div>

                        <motion.div
                            className='text-[#371275] mt-4'
                            variants={containerVariants}
                            initial='hidden'
                            whileInView='visible'
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <div className='flex flex-col gap-4 lg:gap-8'>
                                {[
                                    { title: 'Multiple Destinations in One Package', desc: 'Explore sacred cities, historical landmarks, and breathtaking nature all in one itinerary.' },
                                    { title: 'All-Inclusive Travel Plans', desc: 'From flights and transfers to accommodations and meals — we handle it all.' },
                                    { title: 'Local Guides and Interpreters', desc: 'Get deep insights from certified guides familiar with local customs and language.' },
                                    { title: 'Customizable Packages', desc: 'Tailor your travel experience to match your pace and interest.' },
                                    { title: 'Group and Family Discounts', desc: 'Travel together and save more with special group rates.' },
                                    { title: '24/7 On-Tour Support', desc: 'We’re here for you throughout the trip, just a call away.' },
                                ].map((item, idx) => (
                                    <motion.div key={idx} className='flex gap-4 lg:gap-8 md:items-center' variants={itemVariants}>
                                        <Image
                                            src={tick}
                                            alt='tick'
                                            className='h-8 w-8 lg:h-12 lg:w-12 object-cover md:mt-[10px]'
                                        />
                                        <div>
                                            <h3 className='md:text-xl font-bold'>{item.title}</h3>
                                            <p>{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Add Tour Gallery Section if you want */}
                {/* Example: <TourGallery images={...} /> */}

                <WhyChooseUs2 />
                <WhatsappAndCall id='call' />
                <Faq />
                <Contact />
            </div>
        </div>
    );
};

export default Page;
