"use client";
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import logo from '../Images/moulavilonglogo.png';
import { motion, AnimatePresence } from 'framer-motion';
import mainlogo from '../Images/moulavi bg main.png';
import { Inknut_Antiqua, Inter } from 'next/font/google';



const inknutAntiqua = Inknut_Antiqua({ weight: '600', subsets: ['latin'] });
const inter = Inter({ weight: '600', subsets: ['latin'] });



const NavBar = ({ bgColor = 'transparent' }) => {
    const [sidebar, setSidebar] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [active, setActive] = useState('');

    const router = useRouter();
    const pathname = usePathname();
    const sidebarRef = useRef(null);
    const dropdownRef = useRef(null);


    const togglesidebar = () => {
        setSidebar(!sidebar);
    };

    const handlhome = () => {
        if (pathname === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            router.push('/');
        }
    };

    const handleabout = () => {
        if (pathname === '/About_us') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            router.push('/About_us');
        }
    }

    const handleservices = () => {
        if (pathname === '/') {
            handleScrollToSection('services');
        } else if (pathname !== '/') {
            router.push('/');
            handleScrollToSection('services');
        }
    };


    const handleScrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (sidebar && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setSidebar(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);
        document.addEventListener('touchstart', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
            document.removeEventListener('touchstart', handleOutsideClick);
        };
    }, [sidebar]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    return (
        <div className='flex justify-between items-center text-black py-4 px-5 fixed top-0 left-0 right-0 z-50 backdrop-blur-sm h-[70px]' style={{ backgroundColor: bgColor }}>
            <div className='text-2xl font-bold md:ml-[20px]'>
                <Image src={mainlogo} alt='logo' width={40} height={40} onClick={handlhome} className="cursor-pointer" />
            </div>

            <div className='space-x-4 hidden md:flex'>

                <button className={`text-white duration-300 hover:text-[black] font-semibold cursor-pointer ${inter.className}`} onClick={handlhome}>Home</button>

                <button className={`text-white duration-300 hover:text-[black] font-semibold cursor-pointer ${inter.className}`} onClick={handleabout}>About Us</button>


                <div className='relative' ref={dropdownRef}>
                    <button
                        className={`text-white hover:text-[black] font-semibold cursor-pointer duration-300 ${inter.className} flex gap-1`}
                        onClick={() => setDropdown(!dropdown)}
                    >
                        Services <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="24" fill="none">
                            <defs />
                            <path fill="currentColor" d="M6.604,8.555 C6.726,8.717 7.09,9.198 7.306,9.476 C7.74,10.032 8.333,10.771 8.973,11.508 C9.616,12.249 10.292,12.97 10.892,13.501 C11.193,13.766 11.457,13.968 11.675,14.1 C11.88,14.223 12.002,14.249 12.002,14.249 C12.002,14.249 12.119,14.223 12.324,14.1 C12.543,13.968 12.807,13.766 13.108,13.501 C13.708,12.97 14.383,12.249 15.026,11.508 C15.666,10.771 16.259,10.032 16.693,9.476 C16.91,9.198 17.273,8.717 17.395,8.556 C17.641,8.222 18.111,8.15 18.445,8.396 C18.778,8.642 18.849,9.111 18.604,9.445 L18.602,9.447 C18.474,9.617 18.097,10.116 17.876,10.399 C17.432,10.968 16.822,11.729 16.159,12.492 C15.5,13.251 14.774,14.03 14.101,14.624 C13.765,14.921 13.425,15.188 13.099,15.384 C12.793,15.569 12.406,15.75 12,15.75 C11.593,15.75 11.206,15.569 10.901,15.384 C10.575,15.188 10.234,14.921 9.899,14.624 C9.226,14.03 8.5,13.251 7.841,12.492 C7.178,11.729 6.568,10.968 6.124,10.399 C5.902,10.115 5.526,9.616 5.398,9.447 L5.396,9.445 C5.151,9.112 5.222,8.642 5.555,8.396 C5.889,8.151 6.358,8.222 6.604,8.555 Z" />
                        </svg>
                    </button>
                    {dropdown && (
                        <ul className='absolute left-1/2 -translate-x-1/2 bg-white text-black shadow-lg rounded mt-2 z-50 w-[200px] flex flex-col duration-300'>
                            <a href="/Flight-ticket" className={`hover:text-[#371275] cursor-pointer border-b border-[#ccc] py-3 px-3 ${inter.className} duration-300`}  >Flight Ticket</a>
                            <a href='/bus-service' className={`hover:text-[#371275] cursor-pointer border-b border-[#ccc] py-3 px-3 ${inter.className} duration-300`} >Bus Service</a>
                            <a href='/Hotels' className={`hover:text-[#371275] cursor-pointer border-b border-[#ccc] py-3 px-3 ${inter.className} duration-300`}>Hotels</a>
                            <a href='/Hajj&Umrah' className={`hover:text-[#371275] cursor-pointer border-b border-[#ccc] py-3 px-3 ${inter.className} duration-300`} >Hajj & Umrah</a>
                            <a href='/Global-Visa' className={`hover:text-[#371275] cursor-pointer border-b border-[#ccc] py-3 px-3 ${inter.className} duration-300`}>Global Visa</a>
                            <a href='/Attestation' className={`hover:text-[#371275] cursor-pointer border-b border-[#ccc] py-3 px-3 ${inter.className} duration-300`}>Attestation</a>
                        </ul>
                    )}
                </div>

                <a href='/Contact' className={`text-white duration-300 hover:text-[black] font-semibold cursor-pointer ${inter.className}`} >
                    Contact Us
                </a>

                <button className={`text-white duration-300 hover:text-[black] font-semibold cursor-pointer ${inter.className}`} onClick={() => router.push('/login')}>
                    Login
                </button>

            </div>


            <div className='space-x-4 hidden md:flex'>
                <button className={`bg-[#FFBD05] text-[#371275] duration-300 font-semibold px-4 py-2 rounded cursor-pointer hover:bg-[#ffbc05a2] ${inter.className}`} onClick={() => handleScrollToSection('contact-us')}>Contact Now</button>
            </div>

            <div className='md:hidden flex items-center'>
                <button className='text-[#FFBD05] duration-300 hover:text-[#ffbc05cc] font-semibold cursor-pointer' onClick={togglesidebar}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                        <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                    </svg>
                </button>
            </div>

            <AnimatePresence>
                {sidebar && (
                    <motion.div
                        ref={sidebarRef}
                        initial={{ opacity: 0, y: -300 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -300 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="fixed top-0 left-0 w-full bg-[#F2EFE7] shadow-lg z-50 h-[350px] px-8 py-8 md:hidden "
                    >
                        <div className="relative flex justify-center items-center ">
                            <Image src={logo} alt='logo' width={100} height={100} className="cursor-pointer mb-4 w-[180px] h-[40px]" onClick={handlhome} />
                        </div>
                        <h2 className="text-2xl font-bold font-[inkut-antiqua]">Menu</h2>
                        <button className="text-black hover:text-[#ffbc05cc] font-semibold absolute top-5 right-5 text-3xl" onClick={togglesidebar}>
                            &times;
                        </button>
                        <ul className="flex flex-col space-y-4 mt-4">
                            <li onClick={handlhome} className="text-black hover:text-[#ffbc05cc] font-semibold cursor-pointer duration-300">Home</li>
                            <li onClick={() => router.push('/About_us')} className="text-black hover:text-[#ffbc05cc] font-semibold cursor-pointer duration-300">About Us</li>
                            <li onClick={() => { handleScrollToSection('services'); setSidebar(false); }} className="text-black hover:text-[#ffbc05cc] font-semibold cursor-pointer duration-300">Services</li>
                            <a href='/Contact' className="text-black hover:text-[#ffbc05cc] font-semibold cursor-pointer duration-300">Contact Us</a>
                            <li onClick={() => router.push('/login')} className="text-black hover:text-[#ffbc05cc] font-semibold cursor-pointer duration-300">Login</li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default NavBar;
