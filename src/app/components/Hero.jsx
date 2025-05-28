"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ReactPlayer from 'react-player';
import logo from '../Images/moulavilonglogo.png';
import { AnimatePresence, motion } from 'framer-motion';
import { Inknut_Antiqua, Inter  } from 'next/font/google';


const inknutAntiqua = Inknut_Antiqua({ weight: '600', subsets: ['latin'] });
const inter = Inter ({ weight: '600', subsets: ['latin'] });

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
        <div className='max-w-[800px] mt-10 md:mt-15'>
          <Image src={logo} alt='Logo' width={350} height={70} priority />
        </div>

        <div className='w-full p-3 md:p-10 mt-20 md:mt-0 md:my-5 text-center'>
          <h1 className={`text-2xl md:text-4xl font-semibold md:mt-10 text-white ${inknutAntiqua.className}`}>
            JOURNEY WITH FAITH, EXPLORE <br /> WITH WONDER
          </h1>
          <h1 className='mt-4 mb-10 md:text-3xl font-semibold text-white'>
            Book Your Ziyara Now, Let Us Guide You Home.
          </h1>
          <a href='#' className='bg-[#FFBD05] text-[#371275] font-semibold py-3 px-10 rounded md:text-2xl'>
            Book Now
          </a>
        </div>

        <div className='w-full py-5 bg-[#FFBD05]/80 flex justify-around mt-20 md:mt-5 text-white md:h-[70px]'>
<<<<<<< HEAD
          <h3 className={`font-semibold text-sm md:text-2xl cursor-pointer ${inter.className}`} onClick={() => openWithOccasion('occation1')}>MADEENA ZIYARA</h3>
          <h3 className={`font-semibold text-sm md:text-2xl cursor-pointer ${inter.className}`}onClick={() => openWithOccasion('occation2')}>JEDDAH SHARAFIYA</h3>
          <h3 className={`font-semibold text-sm md:text-2xl cursor-pointer ${inter.className}`} onClick={() => openWithOccasion('occation3')}>TAIF TOUR</h3>
=======
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
>>>>>>> 3855de8def45c5e31cd4ce012b9b35b6e49b2d09
        </div>

        <AnimatePresence>
          {openModal && selectedHero && (
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black bg-opacity-50"
              onClick={() => setOpenModal(false)}
            >
              <motion.div
                key="modal"
                initial={{ opacity: 0, scale: 0.9, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="bg-white rounded-lg shadow-lg w-full mx-4 p-6 relative md:w-[700px] md:h-[80vh] md:grid md:grid-cols-2 md:mt-5"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-0 right-2 text-gray-500 hover:text-gray-700 text-2xl"
                  onClick={() => setOpenModal(false)}
                >
                  &times;
                </button>

                {selectedHero.posters && selectedHero.posters.length > 1 ? (
                  <div className="relative">
                    <Image
                      src={selectedHero.posters[carouselIndex]}
                      alt="Poster"
                      className="w-full h-auto mb-4 rounded"
                      width={600}
                      height={400}
                    />
                    <div className="flex justify-between absolute top-1/2 left-0 right-0 px-4">
                      <button onClick={prevSlide} className="text-3xl font-bold text-white">&#8249;</button>
                      <button onClick={nextSlide} className="text-3xl font-bold text-white">&#8250;</button>
                    </div>
                  </div>
                ) : selectedHero.posters && selectedHero.posters.length === 1 ? (
                  <Image
                    src={posters[selectedOccasion][carouselIndex]}
                    alt="Poster"
                    className="w-full h-auto mb-4 rounded"
                  />
                ) : null}

                <div className='flex flex-col items-center justify-center'>
                  <h2 className="text-lg md:text-xl font-semibold text-center">{selectedHero.title}</h2>
                  <p className='hidden md:block text-justify py-2 mx-5'>
                    {selectedHero.desc}
                  </p>
                  <button className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 transition ml-6 ">
                    Book Now
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Hero;
