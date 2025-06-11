'use client';

import React from 'react';
import { PhoneCall } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { Inknut_Antiqua } from 'next/font/google';
import { motion } from 'framer-motion';

const inknutAntiqua = Inknut_Antiqua({ weight: '600', subsets: ['latin'] });

const buttonVariants = {
  hidden: { opacity: 0, x: -50 }, // Start 50px left
  visible: (custom) => ({
    opacity: 1,
    x: 0, // Move to natural position
    transition: { delay: custom * 0.3, duration: 0.6, ease: 'easeOut' },
  }),
  hover: { scale: 1.05, transition: { duration: 0.2 } },
  tap: { scale: 0.95 },
};

const WhatsappAndCall = ({ id }) => {
  return (
    <div
      id={id}
      className="bg-[#FFBD05] p-4 lg:pb-10 max-w-7xl mx-auto w-full mt-4"
    >
      <h2
        className={`${inknutAntiqua.className} mt-4 text-2xl lg:text-3xl text-[#371275]`}
      >
        Your Path, Your Peace — Begin Your Spiritual Journey with Moulavi Travels.
      </h2>
      <p className="text-justify mt-4 md:mt-8 text-[#371275] md:text-lg">
        From spontaneous ziyara trips to long-planned spiritual journeys, Moulavi
        Travels offers the perfect flight options for every kind of traveler.
      </p>
      <div className="flex gap-5 mt-8">
        <motion.a
          href="tel:+966552678666"
          className="bg-[#371275] text-[#FFBD05] h-[50px] w-[180px] flex items-center justify-center rounded-2xl hover:bg-[#1d1728] hover:text-[#FFBD05] transition-colors duration-300"
          variants={buttonVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          whileHover="hover"
          whileTap="tap"
        >
          <span className="mr-2">
            <PhoneCall />
          </span>
          Call Now
        </motion.a>

        <motion.a
          href="https://wa.me/+966533111487?text=Hi%2C%20I%27m%20interested%20in%20booking%20a%20ticket%20with%20Moulavi%20Travels."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#FFBD05] text-[#371275] h-[50px] w-[180px] border-2 border-[#371275] flex items-center justify-center rounded-2xl hover:bg-[#371275] hover:text-[#FFBD05] transition-colors duration-300"
          variants={buttonVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          whileHover="hover"
          whileTap="tap"
        >
          <FaWhatsapp className="mr-2 h-6 w-6" />
          WhatsApp Now
        </motion.a>
      </div>
    </div>
  );
};

export default WhatsappAndCall;
