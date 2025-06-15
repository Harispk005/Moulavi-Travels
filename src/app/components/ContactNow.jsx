'use client';
import { useRef, useState } from 'react';
import Image from 'next/image';
import emailjs from '@emailjs/browser';
import img from '../Images/Trip-amico__2__1-removebg-preview 1.png';
import bg from '../Images/image.jpg';
import { Inknut_Antiqua, Inter } from 'next/font/google';

const inknutAntiqua = Inknut_Antiqua({ weight: '600', subsets: ['latin'] });
const inter = Inter({ weight: '600', subsets: ['latin'] });

const ContactNow = () => {
    const form = useRef();
    const [statusMessage, setStatusMessage] = useState('');
    const [messageType, setMessageType] = useState('');

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const sendEmail = (e) => {
        e.preventDefault();
        const email = form.current.email.value;

        if (!validateEmail(email)) {
            setStatusMessage('Please enter a valid email address.');
            setMessageType('error');
            return;
        }

        emailjs
            .sendForm('service_y1h2v89', 'template_f9xrp15', form.current, 'NXTiCRuwWTixiXGBL')
            .then(
                (result) => {
                    setStatusMessage('Message sent successfully!');
                    setMessageType('success');
                    e.target.reset();
                },
                (error) => {
                    setStatusMessage('Failed to send message.');
                    setMessageType('error');
                }
            );
    };

    return (
        <div className="py-5 mt-3 md:px-0 md:py-0 md:mt-0" id="contact-us">
            <div className="p-3 md:p-10">
                <h1
                    className={`text-[#371275] md:text-xl border-3 border-[#371275] w-fit px-8 py-2 font-[550] ${inter.className}`}
                >
                    CONTACT NOW
                </h1>
                <div className="w-full flex justify-between">
                    <h2 className="text-lg text-[#371275] md:text-3xl font-semibold mt-5 font-[inkut-antiqua]">
                        CONTACT US FOR BEST <br />
                        WAY TO TRAVEL
                    </h2>
                </div>
            </div>

            <form ref={form} onSubmit={sendEmail} className="md:grid grid-cols-1 md:grid-cols-2">
                <div>
                    <div className="flex items-center gap-2 px-8 md:px-8 lg:ml-60 md:mt-7">
                        <label htmlFor="name" className="text-[#371275] font-semibold">
                            Name*
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className={`bg-transparent border-b-2 border-[#371275] focus:outline-none w-65 md:w-90 text-[14px] text-[#371275] ${inter.className}`}
                        />
                    </div>
                    <div className="hidden md:block md:mt-25 md:absolute">
                        <Image src={img} alt="Preview" className="h-[400px] w-[350px]" />
                    </div>
                </div>

                <div className="pr-8">
                    <div className="flex items-center gap-2 px-8 mt-8 md:px-0 md:ml-10">
                        <label htmlFor="mobile" className="text-[#371275] font-semibold">
                            Mobile
                        </label>
                        <input
                            type="text"
                            id="mobile"
                            name="mobile"
                            className={`bg-transparent border-b-2 border-[#371275] focus:outline-none w-70 md:w-90 md:ml-5  text-[14px] text-[#371275] ${inter.className}`}
                        />
                    </div>

                    <br />

                    <div className="flex items-center gap-2 px-8 mt-8 md:px-0 md:ml-10 md:mt-[20px]">
                        <label htmlFor="email" className="text-[#371275] font-semibold">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className={`bg-transparent border-b-2 border-[#371275] focus:outline-none w-70 md:w-90 ml-2 md:ml-8  text-[14px] text-[#371275] ${inter.className}`}
                        />
                    </div>

                    <br />
                    <br />

                    <div className="flex items-center gap-2 px-8 md:px-0 md:ml-10 md:mt-[20px]">
                        <label htmlFor="selectType" className="text-[#371275] font-semibold">
                            Select Type
                        </label>
                        <select
                            id="selectType"
                            name="type"
                            required
                            className={`bg-transparent border-b-2 border-[#371275] focus:outline-none w-66 md:w-87 mr-2  text-[14px] text-[#371275] ${inter.className}`}
                        >
                            <option value="" disabled selected>Select a service</option>
                            <option value="International & Domestic Flight Ticket">International & Domestic Flight Tickets</option>
                            <option value="Worldwide Tour Packages">Worldwide Tour Packages</option>
                            <option value="Visa Services">Visa Services</option>
                            <option value="Ziyarah Packages: Madinah, Makkah & Taif">Ziyarah Packages: Madinah, Makkah & Taif</option>
                            <option value="Saudi Arabia Tour Packages: AlUla, Abha & Al Bahah">Saudi Arabia Tour Packages: AlUla, Abha & Al Bahah</option>
                            <option value="Visa Renewal: Family, Personal & Business">Visa Renewal: Family, Personal & Business</option>
                            <option value="Hotel Bookings">Hotel Bookings</option>
                            <option value="Cruise Packages">Cruise Packages</option>
                            <option value="Other">Other Services</option>
                        </select>
                    </div>

                    <br />

                    <div className="flex items-center gap-2 px-5 mt-8 md:px-0 md:ml-10 md:mt-[20px]">
                        <label htmlFor="message" className="text-[#371275] font-semibold">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            className={`bg-transparent border-2 h-[80px] border-[#371275] rounded-[10px] focus:outline-none w-64 md:w-90 md:ml-4 p-3  text-[14px] text-[#371275] ${inter.className}`}                        />
                    </div>

                    {statusMessage && (
                        <div
                            className={`text-sm mt-2 md:ml-10 ${messageType === 'success' ? 'text-[#371275]' : 'text-red-600'
                                }`}
                        >
                            {statusMessage}
                        </div>
                    )}

                    <br />

                    <div className="flex items-center gap-2 md:mt-[20px] md:ml-10 justify-center">
                        <button
                            type="submit"
                            className="bg-[#371275] text-[#FFBD05] w-[150px] h-[40px] rounded-[5px] hover:bg-[#371280] ml-15 md:ml-0"
                        >
                            SEND
                        </button>
                    </div>
                </div>
            </form>

            <div className="md:hidden absolute">
                <Image src={img} alt="Preview" className="h-[300px] w-[250px]" />
            </div>

            <div className="mt-50 md:mt-[30px]">
                <Image src={bg} alt="Background" className="w-full h-[170px] object-fill" />
            </div>
        </div>
    );
};

export default ContactNow;
