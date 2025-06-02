'use client';
import React from 'react';
import Image from 'next/image';
import AttestCont from '../Images/attestation-cont.jpg';
import { Inknut_Antiqua, Inter } from 'next/font/google';

const inknutAntiqua = Inknut_Antiqua({ weight: '600', subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

const VisaExperts = () => {
    return (
        <div className='bg-[#371275]'>
            <div className='flex flex-col p-4 max-w-7xl mx-auto bg-[#371275] w-full mt-4'>
                <h1 className={`text-[#371275] bg-[#FFBD05] md:text-xl border-3 border-[#FFBD05] w-fit px-4 md:px-8 py-2 font-[550] mb-4 ${inter.className}`}>
                    STAMP
                </h1>
                <h2 className={`${inknutAntiqua.className} mt-4 text-2xl lg:text-3xl text-[#FFBD05]`}>
                    Secure Your Success, Verify Your Future
                </h2>

                <div className='flex flex-col lg:flex-row gap-4 lg:gap-8 mt-4'>
                    <div className='flex-1'>
                        <p className='text-justify text-[#FFBD05] md:text-lg h-full lg:py-3 '>
                            At Moulavi Travels, we specialize in simplifying the complex process of document attestation.<br/><br/> Whether you’re planning to study, work, or settle abroad, we ensure your documents are validated accurately, efficiently, and as per international standards.<br/> <br/>Our expert team offers step-by-step guidance, from initial consultation to final certification, minimizing delays and confusion.<br/><br/> We collaborate with authorized departments and embassies to guarantee global acceptance of your documents.<br/><br/> With a focus on precision, speed, and reliability, Moulavi Travels is your trusted partner in securing attestation for educational, professional, or personal purposes—so you can move forward with confidence.


                        </p>
                    </div>

                    <div className='flex-1'>
                        <Image
                            src={AttestCont}
                            alt="Hotel Experience"
                            className="object-cover w-full h-full rounded-lg"
                            style={{ height: '100%' }}
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VisaExperts;
