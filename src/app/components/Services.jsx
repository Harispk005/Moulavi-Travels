'use client'
import Image from 'next/image';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import plane from '../Images/Airplane Take Off.png';
import hotel from '../Images/Hotel.png';
import beach from '../Images/Beach Umbrella.png';
import hajj from '../Images/Kaaba.png';
import globe from '../Images/Cryptocurrency Global.png';
import file from '../Images/Documents.png';
import bus from '../Images/image-removebg-preview (5) 1.png';
import train from '../Images/train.png';
import group from '../Images/Group 9.png';
import { Inknut_Antiqua, Inter  } from 'next/font/google';


const inknutAntiqua = Inknut_Antiqua({ weight: '600', subsets: ['latin'] });
const inter = Inter ({ weight: '600', subsets: ['latin'] });

const cardVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const Services = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start(i => 'visible');
    }
  }, [controls, inView]);

  return (
    <div className=" py-5 mt-3 md:px-0 md:py-0 md:mt-0">
      <div className='p-3 md:p-10'>
        <h1 className={`text-[#371275] md:text-xl border-3 border-[#371275] w-fit px-8 py-2 font-[550] ${inter.className}`}>OUR SERVICES</h1>
        <h1 className={`text-[#371275] text-lg md:text-3xl font-semibold mt-5 ${inknutAntiqua.className}`}>WE PROVIDE BEST SERVICES</h1>

        <div
          ref={ref}
          className='grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-10 mt-5 md:mt-10'
        >
          <motion.div
            className='bg-[#371275] text-white p-3 md:p-5 rounded-lg'
            custom={0}
            initial="hidden"
            animate={controls}
            variants={cardVariants}
          >
            <Image src={plane} alt='airplane' className='w-15 h-15 md:w-20 m:h-20 ' />
            <h1 className='text-lg md:text-xl font-semibold mt-2'>FLIGHT TICKET</h1>
            <p className='mt-2 md:text-lg md:font-medium'>Find Great deals on worldwide.</p>
          </motion.div>

          <motion.div
            className='bg-[#371275] text-white p-3 md:p-5 rounded-lg'
            custom={1}
            initial="hidden"
            animate={controls}
            variants={cardVariants}
          >
            <Image src={hotel} alt='hotel' className='w-15 h-15 md:w-20 m:h-20 ' />
            <h1 className='text-lg md:text-xl font-semibold mt-2'>HOTELS</h1>
            <p className='mt-2 md:text-lg md:font-medium'>Find your ideal accommodation, from luxury to budget.</p>
          </motion.div>

          <motion.div
            className='bg-[#371275] text-white p-3 md:p-5 rounded-lg'
            custom={2}
            initial="hidden"
            animate={controls}
            variants={cardVariants}
          >
            <Image src={beach} alt='beach' className='w-15 h-15 md:w-20 m:h-20 ' />
            <h1 className='text-lg md:text-xl font-semibold mt-2'>HOLIDAYS</h1>
            <p className='mt-2 md:text-lg md:font-medium'>Experience the best, remember forever.</p>
          </motion.div>

          <motion.div
            className='bg-[#371275] text-white p-3 md:p-5 rounded-lg'
            custom={3}
            initial="hidden"
            animate={controls}
            variants={cardVariants}
          >
            <Image src={hajj} alt='kaaba' className='w-15 h-15 md:w-20 m:h-20 ' />
            <h1 className='text-lg md:text-xl font-semibold mt-2'>HAJJ & UMRAH</h1>
            <p className='mt-2 md:text-lg md:font-medium'>Travel with us for a meaningful Hajj and Umrah experience.</p>
          </motion.div>

          <motion.div
            className='bg-[#371275] text-white p-3 md:p-5 rounded-lg'
            custom={4}
            initial="hidden"
            animate={controls}
            variants={cardVariants}
          >
            <Image src={globe} alt='globe' className='w-15 h-15 md:w-20 m:h-20 ' />
            <h1 className='text-lg md:text-xl font-semibold mt-2'>GLOBAL VISA</h1>
            <p className='mt-2 md:text-lg md:font-medium'>Simplify your visa application process.</p>
          </motion.div>

          <motion.div
            className='bg-[#371275] text-white p-3 md:p-5 rounded-lg'
            custom={5}
            initial="hidden"
            animate={controls}
            variants={cardVariants}
          >
            <Image src={file} alt='file' className='w-15 h-15 md:w-20 m:h-20 ' />
            <h1 className='text-lg md:text-xl font-semibold mt-2'>ATTESTATION</h1>
            <p className='mt-2 md:text-lg md:font-medium'>Fast and easy apostille services.</p>
          </motion.div>
        </div>


      </div>
      <div className='flex flex-col md:flex-row md:justify-between mt-5 gap-10 '>
        <div className='flex items-center'>
          <Image src={bus} alt='bus' className='w-1/2  md:w-[350px] object-contain' />
          <h1 className='text-[#371275] text-xl md:text-3xl font-semibold'>FROM ACCOMODATION TO ACTIVITIES - <br /> <span className='text-white'>WE COVER IT  ALL.</span></h1>
        </div>
        <div className='flex flex-col mt-0 '>
          <div className='text-[#371275] flex md:flex-col-reverse md:justify-center items-center md:gap-3 text-2xl px-3 mt-3'>
            <h1 className='font-semibold'>1000+ <span className='font-normal'>Our client in the world</span></h1>
            <Image src={group} alt='group' className='object-cover w-[150px]' />
          </div>

        <div className=''>
            <Image src={train} alt='train' className=' md:w-[550px] object-contain' />
        </div>

        </div>
      </div>
    </div>
  );
};

export default Services;