"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ReactPlayer from 'react-player';
import logo from '../Images/moulavilonglogo.png';
import { AnimatePresence, motion } from 'framer-motion';
import { Inknut_Antiqua, Inter } from 'next/font/google';


const inknutAntiqua = Inknut_Antiqua({ weight: '600', subsets: ['latin'] });
const inter = Inter({ weight: '600', subsets: ['latin'] });

const Hero = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedHero, setSelectedHero] = useState(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    fetch('https://moulavitravels-backend.onrender.com/hero') // Your backend API, change if needed
      .then(res => res.json())
      .then(data => {
        setHeroes(data);
      })
      .catch(err => {
        console.error('Failed to fetch heroes:', err);
      });
  }, []);

  const openWithHero = (hero) => {
    setSelectedHero(hero);
    setCarouselIndex(0);
    setOpenModal(true);
  };

  const nextSlide = () => {
    if (!selectedHero?.posters) return;
    setCarouselIndex((prev) => (prev + 1) % selectedHero.posters.length);
  };

  const prevSlide = () => {
    if (!selectedHero?.posters) return;
    setCarouselIndex((prev) => (prev - 1 + selectedHero.posters.length) % selectedHero.posters.length);
  };

  const handleScrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='relative w-full h-[80vh] md:h-screen overflow-hidden'>
      {/* Background Video */}
      <ReactPlayer
        url='/bg-video.mp4'
        playing
        loop
        muted
        width='100%'
        height='100%'
        className='absolute top-0 left-0 z-0 object-cover'
        config={{
          file: {
            attributes: {
              playsInline: true,
              style: {
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              },
            },
          },
        }}
      />

      <div className='absolute inset-0 flex flex-col justify-center items-center z-10 bg-black/40'>
        <div className='max-w-[800px] mt-35 md:mt-15'>
          <Image src={logo} alt='Logo' width={350} height={70} priority />
        </div>

        <div className='w-full p-3 md:p-10 mt-4 md:mt-0 md:my-5 text-center'>
          <h1 className={`text-2xl md:text-4xl font-semibold md:mt-10 text-white ${inknutAntiqua.className}`}>
            JOURNEY WITH FAITH, EXPLORE <br /> WITH WONDER
          </h1>
          <h1 className='mt-4 mb-10 md:text-3xl font-semibold text-white'>
            Book Your Ziyara Now, Let Us Guide You Home.
          </h1>
          <div className='flex flex-row justify-center items-center gap-4 md:gap-10'>
            <a href='/packages' className='bg-white text-[#371275] font-semibold py-3 px-4 md:px-10 rounded md:text-2xl cursor-pointer hover:bg-[#371275] hover:text-white transition-colors duration-300 text-sm' >
              Explore Packages
            </a>
            <button className='bg-[#FFBD05] text-[#371275] font-semibold py-3 px-10 rounded md:text-2xl hover:bg-[#371275] hover:text-white transition-colors duration-300 text-sm' onClick={() => handleScrollToSection('services')}>
              Our Services            </button>

          </div>
        </div>

        <div className='w-full py-5 bg-[#371275]/80 flex justify-around mt-10 md:mt-5 text-white md:h-[70px]'>
          {heroes.length === 0 ? (
            <p className="text-white">Loading...</p>
          ) : (
            heroes.map((hero) => (
              <h3
                key={hero._id}
                className='font-semibold text-sm md:text-2xl cursor-pointer'
                onClick={() => openWithHero(hero)}
              >
                {hero.title}
              </h3>
            ))
          )}
        </div>


      </div>        <AnimatePresence>
          {openModal && selectedHero && (
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/50 bg-opacity-50"
              onClick={() => setOpenModal(false)}
            >
              <motion.div
                key="modal"
                initial={{ opacity: 0, scale: 0.9, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="bg-white rounded-lg shadow-lg w-full max-w-xl mx-4 p-6 relative  md:mt-5"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-0 right-2 text-gray-500 hover:text-gray-700 text-2xl"
                  onClick={() => setOpenModal(false)}
                >
                  &times;
                </button>

                <div className='flex flex-col items-center justify-center'>
                  <h2 className="text-lg md:text-xl font-semibold text-center">{selectedHero.title}</h2>
                  <p className='text-justify py-2 mx-5'>
                    {selectedHero.desc}
                  </p>
                  <a href="/packages" className="w-fit bg-yellow-500 text-white py-2 px-8 rounded hover:bg-yellow-600 transition ">
                    View More
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
    </div>
  );
};

export default Hero;
