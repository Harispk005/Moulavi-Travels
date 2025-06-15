'use client';
import { useEffect, useState } from 'react';
import React from 'react';
import logo from '../Images/moulavilonglogo.png';
import NavBar from '../components/NavBar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Image from 'next/image'
import Bus from '../Images/busbg.jpg'
import tick from '../Images/tick.png';
import busServiceImg from '../Images/bus-service-img.png';
import { motion } from 'framer-motion';
import { Inknut_Antiqua, Inter } from 'next/font/google';
import axios from 'axios';
import WhatsappAndCall from '../components/WhatsappAndCall';
import Faq from '../components/Faq';

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
    const [loading, setLoading] = useState(true);
    const [isClient, setIsClient] = useState(false);
    const [services, setServices] = useState([]);
    const [timing, setTiming] = useState([]);


    useEffect(() => {
        setIsClient(true);
        const startTime = Date.now();
        const maxLoadingDuration = 7000;

        const mediaElements = document.querySelectorAll('img.critical-media, video.critical-media');
        let loadedCount = 0;

        const fetchServices = async () => {
            try {
                const res = await axios.get("https://moulavitravels-backend.onrender.com/bus-services");
                setServices(res.data);
            } catch (err) {
                console.log("❌ Error fetching services:", err.message);
            }
        };
        fetchServices();

        const fetchTiming = async () => {
            try {
                const res = await axios.get("https://moulavitravels-backend.onrender.com/bus-timing");
                setTiming(res.data);
                console.log("Bus Timings:", res.data);

            } catch (err) {
                console.log("❌ Error fetching Timing:", err.message);
            }
        };
        fetchTiming();

        const onMediaLoaded = () => {
            loadedCount++;
            if (loadedCount === mediaElements.length) {
                const elapsed = Date.now() - startTime;
                const remaining = 1500 - elapsed;
                setTimeout(() => setLoading(false), remaining > 0 ? remaining : 0);
            }
        };

        if (mediaElements.length === 0) {
            setTimeout(() => setLoading(false), 1200);
            return;
        }

        mediaElements.forEach((el) => {
            el.addEventListener('load', onMediaLoaded);
            el.addEventListener('error', onMediaLoaded);
            el.addEventListener('loadeddata', onMediaLoaded);

            if ((el.tagName === 'IMG' && el.complete) || (el.tagName === 'VIDEO' && el.readyState >= 3)) {
                onMediaLoaded();
            }
        });

        const timeout = setTimeout(() => setLoading(false), maxLoadingDuration);

        return () => {
            clearTimeout(timeout);
            mediaElements.forEach((el) => {
                el.removeEventListener('load', onMediaLoaded);
                el.removeEventListener('error', onMediaLoaded);
                el.removeEventListener('loadeddata', onMediaLoaded);
            });
        };
    }, []);

    if (!isClient) return null;

    const handleScrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };


    return (
        <div className="relative bg-[#FFBD05] min-h-screen">
            <NavBar />

            <div className='flex flex-col justify-center'>
                <div className='relative w-full h-[70vh] md:h-screen overflow-hidden'>
                    <Image
                        src={Bus}
                        priority
                        alt='Kaaba'
                        fill
                        className='object-cover'
                    />
                    <div className='absolute inset-0 bg-[#371275] opacity-50 z-10'></div>

                    <div className='absolute inset-0 flex flex-col justify-center px-4 md:px-10 z-20 pt-10'>
                        <h1 className={`text-white text-2xl md:text-4xl font-semibold leading-snug ${inknutAntiqua.className}`}>
                            Perfect Ziyara Journeys, Seamless Travel.
                        </h1>
                        <p className='mt-2 md:mt-6 text-base md:text-2xl font-normal text-white max-w-2xl mb-6 lg:mb-10'>
                            Enjoy comfortable stays and warm hospitality that make you feel at home, no matter where you travel.
                        </p>
                        <button onClick={() => handleScrollToSection('call')} className='uppercase px-10 md:px-13 py-4 md:py-5 bg-[#371275] w-fit text-white trxl-lg lg:text-2xl border-2 md:border-4 rounded-xl border-[#FFBD05] cursor-pointer'>Book Your Bus Ticket Now</button>


                    </div>
                </div>

                <div className='flex flex-col p-4 py-10 lg:gap-8  max-w-7xl mx-auto w-full'>
                    <div className=' '>
                        <h1 className={`text-[#371275] md:text-xl border-3 border-[#371275] w-fit px-4 md:px-8 py-2 font-[550]  ${inter.className}`}>OUR ZiIYARA BUS SERVICES</h1>
                        <h2 className={`${inknutAntiqua.className} mt-4 text-2xl text-[#371275] `}>Explore Sacred Destinations with Expertise</h2>
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
                                    <h3 className="md:text-xl font-bold">Ziyara Bus Booking</h3>
                                    <p>Simple and secure bus booking for your holy pilgrimage with just a few clicks.</p>
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
                                    <h3 className="md:text-xl font-bold">Reliable Schedule</h3>
                                    <p>Travel with confidence knowing you&apos;re getting timely and reliable bus services.</p>
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
                                    <h3 className="md:text-xl font-bold">Flexible Tour Options</h3>
                                    <p>Find Ziyara packages that fit your schedule and spiritual preferences.</p>
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
                                    <h3 className="md:text-xl font-bold">Dedicated Customer Support</h3>
                                    <p>Get help and support whenever you need it, 24/7, for a worry-free journey.</p>
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
                                    <h3 className="md:text-xl font-bold">Comfort & Safety Assured</h3>
                                    <p>Travel safely and securely with our well-maintained fleet and experienced drivers.</p>
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
                                    <h3 className="md:text-xl font-bold">Special Ziyara Packages</h3>
                                    <p>Exclusive deals and discounts tailored just for your spiritual travel.</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>


                </div>
            </div>
            <div className='flex flex-col py-10  w-full bg-[#371275] '>
                <div className='flex flex-col p-4 max-w-7xl mx-auto  w-full'>
                    <h1 className={`text-[#371275] bg-[#FFBD05] md:text-xl border-3 border-[#FFBD05] w-fit px-4 md:px-8 py-2 font-[550] mb-4  ${inter.className}`}> ZIYARA BUS TIMINGS & AVAILABILITY</h1>
                    <h2 className={`${inknutAntiqua.className} mt-4 text-2xl text-[#FFBD05] `}>Your Journey, Your Schedule. Every Route, Every Day.</h2>
                    <p className=' text-justify mt-4 text-[#FFBD05] md:text-xl max-w-4xl'>Now embark on your Ziyara without any worries or hassles. Moulavi Travels has your back. We offer a wide range of bus options and flexible timings to suit your preferences and pilgrimage plans. Simply view your desired route and date, and let us take care of the rest.</p>
                </div>

                <div className="overflow-x-auto p-4 w-full max-w-7xl mx-auto">
                    <table className="w-full table-auto border-collapse border border-transparent rounded-lg shadow-lg" style={{ backgroundColor: '#FFBD05', color: '#371275' }}>
                        <thead>
                            <tr>
                                <th className="border-b-2 border-[#371275] px-6 py-3 text-left font-semibold text-[#371275]">Route/Destination</th>
                                <th className="border-b-2 border-[#371275] px-6 py-3 text-left font-semibold text-[#371275]">Departure Time</th>
                                <th className="border-b-2 border-[#371275] px-6 py-3 text-left font-semibold text-[#371275]">Days Available</th>
                                <th className="border-b-2 border-[#371275] px-6 py-3 text-left font-semibold text-[#371275]">Status</th>
                                <th className="border-b-2 border-[#371275] px-6 py-3 text-left font-semibold text-[#371275]">Book Now</th>
                            </tr>
                        </thead>
                        <tbody>
                            {timing.map((item) => (
                                <tr key={item._id} className="odd:bg-yellow-300 even:bg-yellow-400 ">
                                    <td className="px-6 py-4 border-b border-[#371275]">{item.route} / {item.destination}</td>
                                    <td className="px-6 py-4 border-b border-[#371275]">{item.time}</td>
                                    <td className="px-6 py-4 border-b border-[#371275]">{item.daysAvailable}</td>
                                    <td className="px-6 py-4 border-b border-[#371275]">{item.status}</td>
                                    <td className="px-6 py-4 border-b border-[#371275]">
                                        <a
                                            href={`https://wa.me/966533111487?text=${encodeURIComponent(
                                                `Hi, I'm interested in booking a bus to ${item.destination} (Route: ${item.route}) on ${item.daysAvailable} departing at ${item.time}.`
                                            )}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-[#371275] text-[#FFBD05] px-4 py-2 rounded hover:bg-[#2d0e61] transition"
                                        >
                                            Book
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className='flex flex-col p-4 max-w-7xl mx-auto  w-full mt-4'>
                    <h1 className={`text-[#371275] bg-[#FFBD05] md:text-xl border-3 border-[#FFBD05] w-fit px-4 md:px-8 py-2 font-[550] mb-4  ${inter.className}`}> CHOOSE WITH CONFIDENCE</h1>
                    <h2 className={`${inknutAntiqua.className} mt-4 text-2xl lg:text-3xl text-[#FFBD05] `}>WHY CHOOSE MOULAVI?</h2>
                    <div className='flex flex-col lg:flex-row gap-4 lg:gap-8 lg:mt-4'>
                        <p className=' text-justify mt-4 text-[#FFBD05] md:text-lg'>
                            At Moulavi Travels (Ziyara), we provide a complete range of travel services tailored to meet the needs of every traveler.
                            With access to a wide variety of flight options from trusted airlines, you’ll enjoy the freedom to choose the perfect itinerary that fits your schedule and budget.
                            <br />
                            <br />
                            We’re committed to offering the best prices on flight tickets, ensuring you get great value with every booking. Plus, our 24/7 customer support is always here to help you with any questions or concerns, giving you peace of mind throughout the process.
                            <br />
                            <br />
                            Make the most of your travel experience with our exclusive deals and discounts—because at Moulavi Travels (Ziyara), we believe in making your journey affordable, smooth, and memorable.
                            <br />
                            <br />
                            Book your flights with us today and feel the difference.
                        </p>
                        <Image src={busServiceImg} alt="busServiceImg" className="w-full lg:min-w-1/2 object-cover lg:h-[500px] lg:-mt-10" priority />
                    </div>
                </div>
            </div>
            <WhatsappAndCall id='call' />
            <Faq />
            <Contact id="contact_about" />
            <Footer />

            {loading && (
                <div className="fixed inset-0 z-50 flex flex-col gap-4 items-center justify-center bg-[#FFBD05] text-white text-2xl">
                    <Image
                        src={logo}
                        alt="Loading"
                        width={300}
                        height={300}
                        className="critical-media"
                        priority
                    />
                    <div className="mt-4 w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                </div>
            )}
        </div>
    );
};

export default Page;
