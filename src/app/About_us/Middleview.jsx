import React from 'react'
import Image from 'next/image'
import Madina from '../Images/madina.jpg'
import { Inknut_Antiqua, Inter } from 'next/font/google';


const inknutAntiqua = Inknut_Antiqua({ weight: '600', subsets: ['latin'] });
const inter = Inter({ weight: '600', subsets: ['latin'] });

const Middleview = () => {
  return (
    <div className='flex flex-col justify-center'>
      <div className='relative w-full h-[60vh] md:h-screen overflow-hidden'>
        <Image
          src={Madina}
          alt='Kaaba'
          fill
          className='object-cover'
        />
        <div className='absolute inset-0 bg-black opacity-40 z-10'></div>

        <div className='absolute inset-0 flex flex-col justify-center items-center text-center px-4 md:px-10 z-20'>
          <h1 className={`text-white text-3xl md:text-5xl font-bold ${inknutAntiqua.className}`}>
            Discover our story
          </h1>
          <p className='mt-4 md:mt-6 text-base md:text-2xl font-medium text-white max-w-2xl'>
            Get to know who we are and what drives our mission at Moulavi Travels.
          </p>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <h1 className={`text-2xl md:text-[30px] mt-5 mb-4 md:mt-10 ${inknutAntiqua.className} text-[#371275]`}>About Moulavi Travels!</h1>

        <p className={`p-3 md:p-8 text-justify text-[#371275] ${inter.className} max-w-7xl`}>

          Assalamu Alaikum, welcome to Moulavi Tours an Islamic travel agency with the goal of providing all travelers with a Journey Of A Lifetime. Our focus extends not just to provide you with a physical journey to great Islamic sites around the world but also to provide a spiritually uplifting journey full of amazing Ziyarats, educational talks, and an extensive range of media to make your experience that will benefit you in this world and the Akhira, Insha’Allah.
          At Moulavi Travels, we understand the importance of these spiritual journeys for families and strive to make each one as memorable and fun-filled as possible. Our team and scholars have years of experience in arranging tours to Islamic destinations and will work with you to ensure that your travel plans meet your specific needs and preferences to ensure you have A Journey Of A Lifetime.
          <br />
          We offer family-friendly tours that cater to all age groups, making it easy for families and those solo to explore our rich Islamic heritage and culture together. From the beauty and serene experience of the Kaaba and Masjid Nabawi to the stunning architecture of Masjid Al-Aqsa, our tours offer an opportunity to create memories that will last a lifetime and most importantly provide education by our qualified scholars throughout our Ziyarahs.
          Join us on a journey of self-discovery with Moulavi travels, where we’ll take care of all the details, and all you need to do is focus on is nourishing the soul and enjoying it together as a group. We look forward to serving you and making your dream of undertaking these Ziyarahs come true.”
        </p>

      </div>
    </div>
  )
}

export default Middleview
