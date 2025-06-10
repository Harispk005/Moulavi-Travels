"use client";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Image from 'next/image';
import Link from 'next/link';
import team from '../Images/Good team-pana 1.png';
import tick from '../Images/tick.png';
import Contact from "../Images/contact.png";
import { Inknut_Antiqua, Inter } from 'next/font/google';
import { useRouter } from "next/navigation";


const inknutAntiqua = Inknut_Antiqua({ weight: '600', subsets: ['latin'] });
const inter = Inter({ weight: '600', subsets: ['latin'] });

const About = () => {
    const controls = useAnimation();
    const router = useRouter();
    const [ref, inView] = useInView({ triggerOnce: true });
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <div className="px-2 py-5 mt-3 md:px-0 md:py-0 md:mt-0">
            <div className="p-3 md:p-10">
                <h1 className={`text-[#371275] md:text-xl border-3 border-[#371275] w-fit px-4 py-2 font-[550] ${inter.className}`}>
                    ABOUT MOULAVI
                </h1>
                <h1 className={`text-[#371275] text-lg md:text-3xl font-semibold mt-3 ${inknutAntiqua.className}`}>
                    TOP - NOTCH IMMIGRATION AND VISA CONSULTING
                </h1>
                <p className={`text-[#371275] text-lg md:text-xl mt-3 ${inter.className}`}>
                    Expert guidance and personalized support for a seamless immigration journey
                </p>
                <div className="flex flex-col-reverse md:grid md:grid-cols-2 items-center">
                    <Image
                        src={team}
                        alt="team"
                        className="px-5 md:px-10 h-[300px] md:w-[400px] md:ml-[100px]"
                    />
                    <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={controls}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
                        }}
                        className="flex flex-col gap-5 md:gap-10 mt-5 md:mt-0"
                    >
                        <div className="flex gap-2 text-[#371275]">
                            <Image src={tick} alt="tick" className="h-8 w-8 object-cover md:mt-[10px]" />
                            <div className="md:ml-[10px]">
                                <h1 className={`text-xl font-normal ${inter.className}`}>Manpower Solutions & Visa Services</h1>
                                <h3 className={`text-base ${inter.className}`}>Expert manpower solutions and visa services for a global workforce.</h3>
                            </div>
                        </div>

                        <div className="flex gap-2 text-[#371275]">
                            <Image src={tick} alt="tick" className="h-8 w-8 object-cover md:mt-[10px]" />
                            <div className="md:ml-[10px]">
                                <h1 className={`text-xl font-normal ${inter.className}`}>Best Immigration Consultants</h1>
                                <h3 className={`text-base ${inter.className}`}>Trusted immigration consultants for a stress-free experience.</h3>
                            </div>
                        </div>

                        <div className="flex gap-5 text-[#371275] items-center">
                            <button
                                onClick={() => router.push("/About_us")}
                                className="bg-[#371275] text-[#FFBD05] font-[550] py-2 px-4 text-sm rounded cursor-pointer 
             hover:bg-[#FFBD05] hover:text-[#371275] hover:border-2 hover:border-[#371275] border-2 border-[#371275] duration-300
             md:py-3 md:px-5 md:text-base"
                            >
                                MORE ABOUT US
                            </button>

                            <div className="font-[550] text-base md:text-xl py-2 md:py-3 flex items-center cursor-pointer">
                                <Image
                                    src={Contact}
                                    alt="contact"
                                    className="mr-2 h-10 w-10 md:h-14 md:w-14"
                                />
                                <a href="tel:+966552678666">
                                    Contact Agent<br />
                                    +966 552678666
                                </a>
                            </div>

                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default About;
