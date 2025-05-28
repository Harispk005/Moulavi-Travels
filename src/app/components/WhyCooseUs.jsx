import Image from 'next/image';
import Link from 'next/link';
import arrow from '../Images/Circled Down Left Arrow.png';
import masjidali from '../Images/new mosque.jpg';
import mosque from '../Images/2 mosque.png';
import { motion } from 'framer-motion';
import { Inknut_Antiqua, Inter  } from 'next/font/google';


const inknutAntiqua = Inknut_Antiqua({ weight: '600', subsets: ['latin'] });
const inter = Inter ({ weight: '600', subsets: ['latin'] });
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
    return (
        <div className="px-2 py-5 mt-5 md:px-0 md:py-0 md:mt-0 text-[#FFBD05] bg-[#371275]">
            <div className="p-3 md:p-10">
                <motion.h1 variants={textVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className={`text-[#371275] bg-[#FFBD05] w-fit px-8 py-2 font-semibold ${inter.className}`}>
                    WHY CHOOSE US
                </motion.h1>

                <div className="w-full flex justify-between items-start">
                    <motion.h2 variants={textVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }} className={`text-lg md:text-3xl font-semibold mt-5 ${inknutAntiqua.className}`}>
                        DISCOVER YOUR ZIYARA <br />
                        BEGINS HERE
                    </motion.h2>
                    <div className="md:w-1/3 lg:mr-0 hidden md:block">
                        <motion.h4
                            variants={textVariants}
                            initial="hidden"
                            whileInView="visible"
                            className="text-white text-justify">
                            We are trusted travel agent providing<br />
                            unforgettable travel experiences. With a team<br />
                            of experts and a wide network, we ensure every<br /> detail of your perfect trip runs perfectly.
                        </motion.h4>
                        <motion.div
                            variants={textVariants}
                            initial="hidden"
                            whileInView="visible"
                        >
                            <Link href="#" className="flex items-center gap-2 mt-2 font-bold">
                                LEARN MORE <Image src={arrow} alt="Arrow" width={20} height={20} />
                            </Link>
                        </motion.div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row mt-3 items-center gap-7 px-2 md:max-w-3/4">
                    <div className="overflow-hidden sm:max-w-1/2">
                        <MotionImage
                            src={masjidali}
                            alt="Mosque illustration"
                            variants={imageVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="w-full object-cover rounded-2xl md:rounded-4xl md:h-[400px]"
                        />
                    </div>

                    <div className="overflow-hidden sm:max-w-1/2">
                        <MotionImage
                            src={mosque}
                            alt="Decorative group graphic"
                            variants={imageVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className=" object-cover rounded-2xl md:rounded-4xl md:h-[400px]"
                        />
                    </div>

                </div>

                <motion.div variants={textVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }} className="md:w-md px-2">
                    <div className="grid grid-cols-3 gap-2 mt-5">
                        <Link href="#" className="bg-[#FFBD05] text-[#371275] text-center py-1 rounded-lg">JEDDAH</Link>
                        <Link href="#" className="bg-[#371275] text-[#FFBD05] text-center py-1 border border-[#FFBD05] rounded-lg">MAKKAH</Link>
                        <Link href="#" className="bg-[#371275] text-[#FFBD05] text-center py-1 border border-[#FFBD05] rounded-lg">RABIQ</Link>
                    </div>
                    <div className="grid grid-cols-3 gap-2 mt-3">
                        <Link href="#" className="bg-[#371275] text-[#FFBD05] text-center py-1 border border-[#FFBD05] rounded-lg">YANBU</Link>
                        <Link href="#" className="bg-[#371275] text-[#FFBD05] text-center py-1 border border-[#FFBD05] rounded-lg">UMLUJ</Link>
                        <Link href="#" className="bg-[#371275] text-[#FFBD05] text-center py-1 border border-[#FFBD05] rounded-lg">ALWAJ</Link>
                    </div>
                </motion.div>

                <div className="md:hidden mt-5 px-2">
                    <h4 className="text-white text-sm">
                        We are trusted travel agent providing unforgettable travel experiences. With a team
                        of experts and a wide network, we ensure every detail of your perfect trip runs perfectly.
                    </h4>
                    <Link href="#" className="flex items-center gap-2 mt-2">
                        LEARN MORE <Image src={arrow} alt="Arrow" width={20} height={20} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default WhyChoose;
