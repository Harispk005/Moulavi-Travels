"use client";
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import mainlogo from '../Images/moulavi bg main.png';

const NavBar = ({ bgColor = 'transparent' }) => {
    const [sidebar, setSidebar] = useState(false);

    const router = useRouter();
    const pathname = usePathname(); 

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

    return (
        <div className='flex justify-between items-center text-black py-4 px-5 fixed top-0 left-0 right-0 z-50 backdrop-blur-sm h-[70px]' style={{ backgroundColor: bgColor }}>
            <div className='text-2xl font-bold md:ml-[20px]'>
                <Image src={mainlogo} alt='logo' width={40} height={40} onClick={handlhome} className="cursor-pointer" />
            </div>

            <div className='space-x-4 hidden md:flex'>
                <button onClick={handlhome} className='text-white hover:text-[#ffbc05cc] font-semibold'>Home</button>
                <button className='text-white hover:text-[#ffbc05cc] font-semibold' onClick={() => router.push('/About_us')}>About Us</button>
                <a href='#' className='text-white hover:text-[#ffbc05cc] font-semibold'>Services</a>
                <a href='#' className='text-white hover:text-[#ffbc05cc] font-semibold'>Contact Us</a>
                <a href='#' className='text-white hover:text-[#ffbc05cc] font-semibold'>Login</a>
            </div>

            <div className='space-x-4 hidden md:flex'>
                <button className='bg-[#FFBD05] text-[#371275] font-semibold px-4 py-2 rounded'>Contact Now</button>
            </div>

            <div className='md:hidden flex items-center'>
                <button className='text-[#FFBD05] hover:text-[#ffbc05cc] font-semibold' onClick={togglesidebar}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                        <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                    </svg>
                </button>
            </div>

            <AnimatePresence>
                {sidebar && (
                    <motion.div
                        initial={{ opacity: 0, y: -300 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -300 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="fixed top-0 left-0 w-full bg-[#F2EFE7] shadow-lg z-50 h-[300px] px-8 py-8 md:hidden"
                    >
                        <h2 className="text-2xl font-bold font-[inkut-antiqua]">Menu</h2>
                        <button className="text-black hover:text-[#ffbc05cc] font-semibold absolute top-5 right-5 text-3xl" onClick={togglesidebar}>
                            &times;
                        </button>
                        <ul className="flex flex-col space-y-4 mt-4">
                            <li onClick={handlhome} className="text-black hover:text-[#ffbc05cc] font-semibold cursor-pointer">Home</li>
                            <li onClick={() => router.push('/About_us')} className="text-black hover:text-[#ffbc05cc] font-semibold cursor-pointer">About Us</li>
                            <li className="text-black hover:text-[#ffbc05cc] font-semibold cursor-pointer">Services</li>
                            <li className="text-black hover:text-[#ffbc05cc] font-semibold cursor-pointer">Contact Us</li>
                            <li className="text-black hover:text-[#ffbc05cc] font-semibold cursor-pointer">Login</li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default NavBar;
