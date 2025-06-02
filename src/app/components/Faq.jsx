'use client'
import React, { useState } from 'react'
import Image from 'next/image';
import { X, ArrowUpRight } from 'lucide-react';
import busServiceImg from '../Images/bus-service-img.png';
import { Inknut_Antiqua, Inter } from 'next/font/google';

const inknutAntiqua = Inknut_Antiqua({ weight: '600', subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

const Faq = () => {
    const [Question1, setQuestion1] = useState(true);
    const [Question2, setQuestion2] = useState(false);
    const [Question3, setQuestion3] = useState(false);
    const [Question4, setQuestion4] = useState(false);
    const [Question5, setQuestion5] = useState(false);

    return (
        <div className='bg-[#371275]'>
            <div className='flex flex-col p-4 py-10 lg:gap-8 max-w-7xl mx-auto w-full'>
                <h1 className={`text-[#371275] md:text-xl border-3 bg-[#FFBD05] w-fit px-4 md:px-8 py-2 font-[550] ${inter.className}`}>
                    FREQUENTLY ASKED QUESTIONS (FAQS)
                </h1>
                <h2 className={`${inknutAntiqua.className} mt-4 text-2xl text-[#FFBD05]`}>
                    Popular Questions From our Clients
                </h2>
            </div>

            <div className='flex flex-col p-4 max-w-7xl mx-auto bg-[#371275] w-full mt-4'>
                <div className='flex flex-col lg:flex-row gap-4 lg:gap-8 lg:mt-4'>

                    {/* Left Column: All Questions */}
                    <div className='flex flex-col gap-4 w-full lg:w-1/2 '>
                        {/* Question 1 */}
                        <div className={`bg-[#371275] border-2 border-[#FFBD05] p-4 rounded-lg transition-all duration-180 ease-in-out cursor-pointer ${Question1 ? 'h-[240px] md:h-[160px]' : 'h-[70px]'}`} onClick={() => setQuestion1(!Question1)}>
                            <div className='flex items-center justify-between gap-2'>
                                <h3 className={`text-[#FFBD05]  text-[15px] md:text-[17px] lg:text-[17px] font-bold ${inter.className}`}>
                                    How can I apply for a student visa?
                                </h3>
                                <button className='text-[#FFBD05]' onClick={() => setQuestion1(!Question1)}>
                                    {Question1 ? <X className="w-5 h-5 cursor-pointer" /> : <ArrowUpRight className="w-5 h-5 cursor-pointer" />}
                                </button>
                            </div>
                            {Question1 && (
                                <p className='text-white mt-2'>
                                    Applying for a Student Visa involves several steps, and the process may vary depending on the country you intend to study in. Generally, you will need to be accepted into a recognized educational institution and provide proof of enrollment, financial stability, and health insurance coverage.
                                </p>
                            )}
                        </div>

                        {/* Question 2 */}
                        <div className={`bg-[#371275] border-2 border-[#FFBD05] p-4 rounded-lg transition-all duration-180 ease-in-out cursor-pointer ${Question2 ? 'h-[220px] md:h-[160px]' : 'h-[70px]'}`}onClick={() => setQuestion2(!Question2)}>
                            <div className='flex items-center justify-between gap-2'>
                                <h3 className={`text-[#FFBD05]  text-[15px] md:text-[17px] lg:text-[17px] font-bold ${inter.className}`}>
                                    How long does it take for a Tourist visa to process?
                                </h3>
                                <button className='text-[#FFBD05]' onClick={() => setQuestion2(!Question2)}>
                                    {Question2 ? <X className="w-5 h-5 cursor-pointer" /> : <ArrowUpRight className="w-5 h-5 cursor-pointer" />}
                                </button>
                            </div>
                            {Question2 && (
                                <p className='text-white mt-2'>
                                    The processing time for a Tourist Visa varies, typically taking anywhere from a few days to several weeks. It's advised to apply well in advance of your travel dates to ensure sufficient processing time.
                                </p>
                            )}
                        </div>

                        {/* Question 3 */}
                        <div className={`bg-[#371275] border-2 border-[#FFBD05] p-4 rounded-lg transition-all duration-180 ease-in-out cursor-pointer ${Question3 ? 'h-[170px] md:h-[160px]' : 'h-[70px]'}`} onClick={() => setQuestion3(!Question3)}>
                            <div className='flex items-center justify-between gap-2'>
                                <h3 className={`text-[#FFBD05]  text-[15px] md:text-[17px] lg:text-[17px] font-bold ${inter.className}`}>
                                    What is your cancellation policy?
                                </h3>
                                <button className='text-[#FFBD05]' onClick={() => setQuestion3(!Question3)}>
                                    {Question3 ? <X className="w-5 h-5 cursor-pointer" /> : <ArrowUpRight className="w-5 h-5 cursor-pointer" />}
                                </button>
                            </div>
                            {Question3 && (
                                <p className='text-white mt-2'>
                                    Our cancellation policy varies depending on the specific service booked. We encourage you to review the specific terms and conditions for your chosen package or service.
                                </p>
                            )}
                        </div>

                        {/* Question 4 */}
                        <div className={`bg-[#371275] border-2 border-[#FFBD05] p-4 rounded-lg transition-all duration-180 ease-in-out cursor-pointer ${Question4 ? 'h-[150px] md:h-[160px]' : 'h-[70px]'}`}onClick={() => setQuestion4(!Question4)}>
                            <div className='flex items-center justify-between gap-2'>
                                <h3 className={`text-[#FFBD05]  text-[15px] md:text-[17px] lg:text-[17px] font-bold ${inter.className}`}>
                                    What documents do I need?
                                </h3>
                                <button className='text-[#FFBD05]' onClick={() => setQuestion4(!Question4)}>
                                    {Question4 ? <X className="w-5 h-5 cursor-pointer" /> : <ArrowUpRight className="w-5 h-5 cursor-pointer" />}
                                </button>
                            </div>
                            {Question4 && (
                                <p className='text-white mt-2'>
                                    You typically need a valid passport, financial proof, enrollment confirmation, and sometimes a language test result.
                                </p>
                            )}
                        </div>

                        {/* Question 5 */}
                        <div className={`bg-[#371275] border-2 border-[#FFBD05] p-4 rounded-lg transition-all duration-180 ease-in-out cursor-pointer ${Question5 ? 'h-[200px] md:h-[160px]' : 'h-[70px]'}`} onClick={() => setQuestion5(!Question5)}>
                            <div className='flex items-center justify-between gap-2'>
                                <h3 className={`text-[#FFBD05] text-[15px] md:text-[17px] lg:text-[17px] font-bold ${inter.className}`}>
                                    What are the payment options available?
                                </h3>
                                <button className='text-[#FFBD05]' onClick={() => setQuestion5(!Question5)}>
                                    {Question5 ? <X className="w-5 h-5 cursor-pointer" /> : <ArrowUpRight className="w-5 h-5 cursor-pointer" />}
                                </button>
                            </div>
                            {Question5 && (
                                <p className='text-white mt-2'>
                                    We offer a variety of secure payment options for your convenience, including:
                                    Credit card payments
                                    Debit card payments
                                    Bank transfers
                                    Online payment gateways
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Right Column: Image */}
                    <div className='w-full lg:w-1/2 mt-10 md:mt-0 lg:mt-0'>
                        <Image
                            src={busServiceImg}
                            alt="Bus Service"
                            className="w-full object-cover lg:h-[500px] rounded-lg"
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq;
