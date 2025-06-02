import Image from 'next/image';
import { motion } from 'framer-motion';
import ChooseUs from '../Images/Chooseusbg.jpg';
import { Inknut_Antiqua, Inter } from 'next/font/google';
import { useRouter } from 'next/navigation';
import GalleryCarousel from './GalleryCarousel';
import arrow from '../Images/Circled Down Left Arrow.png'

const inknutAntiqua = Inknut_Antiqua({ weight: '600', subsets: ['latin'] });
const inter = Inter({ weight: '600', subsets: ['latin'] });
const MotionImage = motion(Image);

const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const imageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const WhyChoose = () => {
    const router = useRouter();
    return (
        <div className="relative px-2 py-5 mt-5 md:px-0 md:py-0 md:mt-0 text-[#FFBD05] bg-[#371275] overflow-hidden">
            {/* Background Image */}
            <Image
                src={ChooseUs}
                alt=""
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                layout="fill"
            />
            <div className='absolute inset-0 bg-[#371275] opacity-50 z-10'></div>
            {/* Overlay Content */}
            <div className="relative z-10 p-3 md:p-10 flex flex-col items-start">
                <motion.h1
                    variants={textVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className={`text-[#371275] bg-[#FFBD05] w-fit px-8 py-2 font-semibold ${inter.className}`}
                >

                    WHY CHOOSE US
                </motion.h1>
                <h2 className={`${inknutAntiqua.className} mt-4 text-2xl text-[white]`}>
                    Experience Comfort, Steps from the Haram
                </h2>

                {/* Gallery */}
                <GalleryCarousel />


                <div className='flex flex-col md:flex-row items-center justify-between mt-5 gap-5'>
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 p-5 max-w-screen-lg ">
                        <motion.div
                            variants={textVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className={`text-[#371275] bg-[#FFBD05] px-5 py-4 font-semibold text-sm md:text-base text-center w-full max-w-[300px] ${inter.className}`}
                        >
                            Expert Spiritual Guidance
                        </motion.div>

                        <motion.div
                            variants={textVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className={`text-[#371275] bg-[#FFBD05] px-5 py-4 font-semibold text-sm md:text-base text-center w-full max-w-[300px] ${inter.className}`}
                        >
                            Comfortable Accommodations
                        </motion.div>

                        <motion.div
                            variants={textVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className={`text-[#371275] bg-[#FFBD05] px-5 py-4 font-semibold text-sm md:text-base text-center w-full max-w-[300px] ${inter.className}`}
                        >
                            Seamless Travel Planning
                        </motion.div>

                        <motion.div
                            variants={textVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className={`text-[#371275] bg-[#FFBD05] px-5 py-4 font-semibold text-sm md:text-base text-center w-full max-w-[300px] col-span-1 ${inter.className}`}
                        >
                            24/7 Support Team
                        </motion.div>

                        <motion.div
                            variants={textVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className={`text-[#371275] bg-[#FFBD05] px-5 py-4 font-semibold text-sm md:text-base text-center w-full max-w-[300px] col-span-1 ${inter.className}`}
                        >
                            Guided Religious Tours
                        </motion.div>
                    </div>
                    <div className="mt-5 px-4 z-20 relative w-full max-w-[400px] lg:ml-20">
                        <h4 className="text-white text-sm">
                            We are a trusted travel agent providing unforgettable travel experiences. With a team
                            of experts and a wide network, we ensure every detail of your perfect trip runs perfectly.
                        </h4>
                        <button className="flex items-center gap-2 mt-2 text-white font-semibold">
                            LEARN MORE <Image src={arrow} alt="Arrow" width={20} height={20} />
                        </button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default WhyChoose;
