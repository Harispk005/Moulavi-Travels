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

                <button className={`text-white hover:text-[black] font-semibold cursor-pointer ${inter.className}`} onClick={handlhome}>Home</button>

                <button className={`text-white hover:text-[black] font-semibold cursor-pointer ${inter.className}`} onClick={handleabout}>About Us</button>


                <div className='relative' ref={dropdownRef}>
                    <button
                        className={`text-white hover:text-[black] font-semibold cursor-pointer ${inter.className}`}
                        onClick={() => setDropdown(!dropdown)}
                    >
                        Services
                    </button>
                    {dropdown && (
                        <ul className='absolute left-1/2 -translate-x-1/2 bg-white text-black shadow-lg rounded mt-2 z-50 w-[200px] flex flex-col'>
                            <a href="/Flight-ticket" className={`hover:text-[#371275] cursor-pointer border-b border-[#ccc] py-3 px-3 ${inter.className}`}  >Flight Ticket</a>
                            <a href='/bus-service' className={`hover:text-[#371275] cursor-pointer border-b border-[#ccc] py-3 px-3 ${inter.className}`} >Bus Ticket</a>
                            <a href='/Hotels' className={`hover:text-[#371275] cursor-pointer border-b border-[#ccc] py-3 px-3 ${inter.className}`}>Hotels</a>
                            <a href='/Hajj&Umrah' className={`hover:text-[#371275] cursor-pointer border-b border-[#ccc] py-3 px-3 ${inter.className}`} >Hajj & Umrah</a>
                            <a href='/Global-Visa' className={`hover:text-[#371275] cursor-pointer border-b border-[#ccc] py-3 px-3 ${inter.className}`}>Global Visa</a>
                            <a href='/Attestation' className={`hover:text-[#371275] cursor-pointer border-b border-[#ccc] py-3 px-3 ${inter.className}`}>Attestation</a>
                        </ul>
                    )}
                </div>

                <button className={`text-white hover:text-[black] font-semibold cursor-pointer ${inter.className}`} onClick={() => handleScrollToSection('contact')}>
                    Contact Us
                </button>

                <button className={`text-white hover:text-[black] font-semibold cursor-pointer ${inter.className}`} onClick={() => router.push('/login')}>
                    Login
                </button>

            </div>


            <div className='space-x-4 hidden md:flex'>
                <button className={`bg-[#FFBD05] text-[#371275] font-semibold px-4 py-2 rounded cursor-pointer hover:bg-[#ffbc05a2] ${inter.className}`} onClick={() => handleScrollToSection('contact-us')}>Contact Now</button>
            </div>

            <div className='md:hidden flex items-center'>
                <button className='text-[#FFBD05] hover:text-[#ffbc05cc] font-semibold cursor-pointer' onClick={togglesidebar}>
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
                            <li onClick={handlhome} className="text-black hover:text-[#ffbc05cc] font-semibold cursor-pointer">Home</li>
                            <li onClick={() => router.push('/About_us')} className="text-black hover:text-[#ffbc05cc] font-semibold cursor-pointer">About Us</li>
                            <li onClick={() => { handleScrollToSection('services'); setSidebar(false); }} className="text-black hover:text-[#ffbc05cc] font-semibold cursor-pointer">Services</li>
                            <li onClick={() => { handleScrollToSection('contact'); setSidebar(false); }} className="text-black hover:text-[#ffbc05cc] font-semibold cursor-pointer">Contact Us</li>
                            <li onClick={() => router.push('/login')} className="text-black hover:text-[#ffbc05cc] font-semibold cursor-pointer">Login</li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default NavBar;
