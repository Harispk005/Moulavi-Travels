'use client';

import React from 'react';
import Image from 'next/image';
import Flight from '../Images/flight.jpg';
import Kid from '../Images/kid.jpg';
import tick from '../Images/tick.png';
import { motion } from 'framer-motion';

import { Inknut_Antiqua, Inter } from 'next/font/google';
import WhyChooseUs2 from '../components/WhyChooseUs2';
import WhatsappAndCall from '../components/WhatsappAndCall';

const inknutAntiqua = Inknut_Antiqua({ weight: '600', subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

const services = [
    {
        title: 'Flight Booking',
        description: 'Simple and secure flight booking with just a few clicks.',
    },
    {
        title: 'Best Price Guarantee',
        description: 'Book with confidence knowing you’re getting the best deal.',
    },
    {
        title: 'Flexible Options',
        description: 'Find flights that fit your schedule and travel preferences.',
    },
    {
        title: 'Travel Insurance',
        description: 'Travel safely and securely with added protection.',
    },
    {
        title: '24/7 Customer Support',
        description: 'Get help and support whenever you need it.',
    },
];


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
        transition: {
            duration: 0.6,
            ease: 'easeOut',
        },
    },
};

const Middleview = () => {
    const handleScrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="flex flex-col justify-center">
            {/* Hero Section */}
            <div className="relative w-full h-[60vh] md:h-screen overflow-hidden">
                <Image src={Flight} priority alt="Kaaba" fill className="object-cover" />
                <div className="absolute inset-0 bg-[#371275] opacity-50 z-10"></div>
                <div className="absolute inset-0 flex flex-col justify-center px-4 md:px-10 z-20 pt-10">
                    <h1
                        className={`text-white text-2xl md:text-4xl font-semibold leading-snug ${inknutAntiqua.className}`}
                    >
                        Best Flights. Best Deals
                    </h1>
                    <p className="mt-2 md:mt-6 text-base md:text-2xl font-normal text-white max-w-2xl mb-6 lg:mb-10">
                        From budget-friendly options to premium experiences, find the perfect flight to match
                        your preferences and budget with Moulavi Travels.
                    </p>
                    <button
                        onClick={() => handleScrollToSection('call')}
                        className="uppercase px-10 md:px-13 py-4 md:py-5 bg-[#371275] w-fit text-white trxl-lg lg:text-2xl border-2 md:border-4 rounded-xl border-[#FFBD05] cursor-pointer"
                    >
                        Book Your Flight Tickets Now
                    </button>
                </div>
            </div>

            {/* Our Services */}
            <div className="flex flex-col p-4 py-10 lg:gap-8 max-w-7xl mx-auto w-full">
                <h1
                    className={`text-[#371275] md:text-xl border-3 border-[#371275] w-fit px-8 py-2 font-[550] ${inter.className}`}
                >
                    OUR SERVICES
                </h1>
            </div>
            <div className="flex flex-col p-4 lg:flex-row lg:gap-8 max-w-7xl mx-auto">
                <Image src={Kid} alt="kid" className="rounded-lg md:h-[300px] object-cover w-full" />
                <div className="flex flex-col mt-4 gap-4">
                    <p className={`text-justify text-[#371275] md:text-[17px] ${inter.className}`}>
                        Travel Freely, Worry Less – Moulavi Travels is Here for You. Whether it’s a business
                        trip, a family vacation, or a solo getaway, Moulavi Travels ensures your journey is
                        smooth and hassle-free. <br /> With a trusted network of airlines and travel partners,
                        we provide a wide range of flight options tailored to your needs and budget.
                        <br /> From economy to business class, short hauls to long-distance journeys — we’ve got
                        it all. <br /> Just enter your destination and travel dates, and we’ll handle the rest.
                    </p>
                    <p className={`text-justify text-[#371275] md:text-[17px] ${inter.className}`}>
                        Booking your next flight is just a few clicks away. Start your journey with Moulavi
                        Travels today.
                    </p>
                </div>
            </div>


            <div className="flex flex-col p-4 py-10 lg:gap-8 max-w-7xl mx-auto w-full">
                <div>
                    <h1
                        className={`text-[#371275] md:text-xl border-3 border-[#371275] w-fit px-4 md:px-8 py-2 font-[550] ${inter.className}`}
                    >
                        OUR SERVICES
                    </h1>
                    <h2 className={`${inknutAntiqua.className} mt-4 text-2xl text-[#371275]`}>
                        Explore Sacred Destinations with Expertise
                    </h2>
                    <p className={`text-justify mt-4 text-[#371275] md:text-xl ${inter.className}`}>
                        At Moulavi Travels, we are dedicated to providing a comfortable, safe, and spiritual
                        journey for all your Ziyara needs.
                    </p>
                </div>

                {/* Animated Services List */}
                <motion.div
                    className="text-[#371275] mt-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div className="flex flex-col gap-4 lg:gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                className="flex gap-4 lg:gap-8 md:items-center"
                                variants={itemVariants}
                            >
                                <Image
                                    src={tick}
                                    alt="tick"
                                    className="h-9 w-9  lg:h-12 lg:w-12 object-cover md:mt-[10px]"
                                />
                                <div>
                                    <h3 className="md:text-xl font-bold">{service.title}</h3>
                                    <p>{service.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Why Choose Us Section */}
            <WhyChooseUs2 />

            {/* Call & WhatsApp Floating Button */}
            <WhatsappAndCall id="call" />
        </div>
    );
};

export default Middleview;
