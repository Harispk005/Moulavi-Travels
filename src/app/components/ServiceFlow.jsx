import React from 'react'
import { motion } from 'framer-motion';
import { Inknut_Antiqua, Inter } from 'next/font/google';
import { FilePenLine, User, LogOut } from 'lucide-react';


const inknutAntiqua = Inknut_Antiqua({ weight: '600', subsets: ['latin'] });
const inter = Inter({ weight: '600', subsets: ['latin'] });

const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: (custom) => ({
        opacity: 1,
        x: 0,
        transition: {
            duration: 1,
            delay: custom * 0.3, // 0s, 0.3s, 0.6s...
        },
    }),
};


const ServiceFlow = () => {
    return (
        <div className=" bg-[#371275] py-5 mt-3 md:px-0 md:py-0 md:mt-0">
            <div className='p-3 md:p-10'>
                <h1 className={`text-[#371275] md:text-xl border-3 bg-[#FFBD05] w-fit px-8 py-2 font-[550] ${inter.className}`}>SERVICE FLOW</h1>
                <h1 className={`text-[#FFBD05] text-lg md:text-3xl font-semibold mt-5 ${inknutAntiqua.className}`}>Our Ziyara Service Flow</h1>

                <div className='flex flex-wrap justify-center items-center gap-6 mt-10'>

                    <motion.div
                        custom={0}
                        variants={textVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className='flex flex-col justify-center items-center text-center h-[250px] md:h-[300px] text-[#371275] p-5 rounded-lg w-[300px] md:w-[350px] m-2 border-2 border-[#FFBD05]'>
                        <h1 className={`text-white text-lg md:text-2xl font-semibold ${inknutAntiqua.className}`}>Step-1</h1>
                        <FilePenLine className='text-white w-13 h-13 mt-8' />

                        <h1 className={`text-white text-lg md:text-2xl font-semibold mt-4 max-w-[250px] ${inter.className}`}>
                            Register Your Service
                        </h1>

                        <p className={`text-white text-xs md:text-sm text-justify mt-4 max-w-[250px] ${inter.className}`}>
                            Sign up easily. Share your details, book your Ziyara, and we'll start planning.
                        </p>
                    </motion.div>



                    <motion.div
                        custom={1}
                        variants={textVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }} className='flex flex-col justify-center items-center text-center h-[250px] md:h-[300px] text-[#371275] p-5 rounded-lg w-[300px] md:w-[350px] m-2 border-2 border-[#FFBD05]'>
                        <h1 className={`text-white text-lg md:text-2xl font-semibold ${inknutAntiqua.className}`}>Step-2</h1>
                        <User className='text-white w-13 h-13 mt-8' />

                        <h1 className={`text-white text-lg md:text-2xl font-semibold mt-4 max-w-[250px] ${inter.className}`}>
                            Personal Guidence
                        </h1>

                        <p className={`text-white text-xs md:text-sm text-justify mt-4 max-w-[250px] ${inter.className}`}>
                            Our experts will help you create your perfect Ziyara plan.
                        </p>
                    </motion.div>

                    <motion.div
                        custom={2}
                        variants={textVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }} className='flex flex-col justify-center items-center text-center h-[250px] md:h-[300px] text-[#371275] p-5 rounded-lg w-[300px] md:w-[350px] m-2 border-2 border-[#FFBD05]'>
                        <h1 className={`text-white text-lg md:text-2xl font-semibold ${inknutAntiqua.className}`}>Step-3</h1>
                        <LogOut className='text-white w-13 h-13 mt-8' />

                        <h1 className={`text-white text-lg md:text-2xl font-semibold mt-4 max-w-[250px] ${inter.className}`}>
                            Book & Depart
                        </h1>

                        <p className={`text-white text-xs md:text-sm text-justify mt-4 max-w-[250px] ${inter.className}`}>
                            We handle all bookings and visas. Get your travel documents and enjoy your Ziyara journey.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
export default ServiceFlow