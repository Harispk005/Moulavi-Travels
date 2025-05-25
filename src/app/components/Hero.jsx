"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import ReactPlayer from 'react-player';
import logo from '../Images/moulavilonglogo.png';
import poster1 from '../Images/poster1.jpg';
import poster2 from '../Images/poster2.jpg';
import { AnimatePresence, motion } from 'framer-motion';



const posters = {
  occation1: [poster1],
  occation2: [poster1],
  occation3: [poster1, poster2]
}

const Hero = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedOccasion, setSelectedOccasion] = useState(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const openWithOccasion = (occasionKey) => {
    setSelectedOccasion(occasionKey);
    setCarouselIndex(0);
    setOpenModal(true);
  };

  const nextSlide = () => {
    const slides = posters[selectedOccasion];
    setCarouselIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    const slides = posters[selectedOccasion];
    setCarouselIndex((prev) => (prev - 1 + slides.length) % slides.length);
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
          <h1 className='text-2xl md:text-4xl font-semibold font-[inkut-antiqua] md:mt-10 text-white'>
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
          <h3 className='font-semibold text-sm md:text-2xl cursor-pointer' onClick={() => openWithOccasion('occation1')}>MADEENA ZIYARA</h3>
          <h3 className='font-semibold text-sm md:text-2xl cursor-pointer' onClick={() => openWithOccasion('occation2')}>JEDDAH SHARAFIYA</h3>
          <h3 className='font-semibold text-sm md:text-2xl cursor-pointer' onClick={() => openWithOccasion('occation3')}>TAIF TOUR</h3>
        </div>
        <AnimatePresence>
          {openModal && (
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
                className="bg-white rounded-lg shadow-lg  w-full mx-4 p-6 relative md:w-[700px] md:h-[80vh] md:grid md:grid-cols-2 md:mt-5 "
              >
                <button
                  className="absolute top-0 right-2 text-gray-500 hover:text-gray-700 text-2xl"
                  onClick={() => setOpenModal(false)}
                >
                  &times;
                </button>

                {posters[selectedOccasion].length > 1 ? (
                  <div className="relative">
                    <Image
                      src={posters[selectedOccasion][carouselIndex]}
                      alt="Poster"
                      className="w-full h-auto mb-4 rounded"
                    />
                    <div className="flex justify-between absolute top-1/2 left-0 right-0 px-4">
                      <button onClick={prevSlide} className="text-3xl font-bold text-white">&#8249;</button>
                      <button onClick={nextSlide} className="text-3xl font-bold text-white">&#8250;</button>
                    </div>
                  </div>
                ) : (
                  <Image
                    src={posters[selectedOccasion][0]}
                    alt="Poster"
                    className="w-full h-auto mb-4 rounded"
                  />
                )}

                <div className='flex flex-col items-center justify-center'>
                  <p className='hidden md:block text-justify py-2 mx-5'>
                    At Moulavi Travels, we are pleased to offer our specialized Visit Visa Renewal trips to Jordan, operating every Monday and Thursday. This service is designed for the convenience of our valued passengers, covering key cities including Jeddah, Makkah, Rabiq, Yanbu, Umluj, and Alwaj. Our luxury buses are equipped with free Wi-Fi and washroom facilities, ensuring a comfortable and safe journey. Trust Moulavi Travels for a hassle-free visa renewal experience with professional service and reliable scheduling. For bookings and inquiries, please contact us at the numbers provided.
                  </p>
                  <button className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 transition ml-6 ">
                    Book Now
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div >
    </div >
  );
};

export default Hero;
