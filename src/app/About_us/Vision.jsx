import React from 'react';
import { Inknut_Antiqua, Inter } from 'next/font/google';
import Image from 'next/image';
import vision from '../Images/vison.jpg';
import mission from '../Images/mission.jpg';


const inknutAntiqua = Inknut_Antiqua({ weight: '600', subsets: ['latin'] });
const inter = Inter({
  weight: ['400', '600'],
  subsets: ['latin'],
});

const Vision = () => {
  return (
    <>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5 place-items-center min-h-[80vh] md:min-h-screen p-2">
        <div className="flex flex-col items-center w-[340px] md:w-[370px] h-[40vh] md:h-[55vh] bg-[#371275] rounded-xl p-4">
          <h2 className={`text-white font-semibold mt-3 md:mt-5 text-2xl md:text-3xl ${inknutAntiqua.className}`}>
            Our Vision
          </h2>

          <ul className={`text-white text-sm md:text-base space-y-2 mt-15 md:mt-7 ${inter.className} font-normal`}>
            {[
              "Pilgrimage to the 3 Holy sanctuaries.",
              "Visit sacred sites around the world.",
              "Educate and instill the love of our deen.",
              "Provide family-friendly tours",
              "Support you throughout your travels",
              "Provide you with a Journey Of A Lifetime."
            ].map((text, index) => (
              <li key={index} className="flex items-start">
                <svg className="w-4 h-4 mr-2 mt-[2px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-center w-[340px] md:w-[370px] h-[40vh] md:h-[55vh] bg-[#371275] rounded-xl p-4">
          <h2 className={`text-white font-semibold mt-3 md:mt-5 text-2xl md:text-3xl ${inknutAntiqua.className}`}>
            Tours We Offer
          </h2>
          <button className='bg-transparent text-[#FFBD05] border-2 border-[#FFBD05] w-[300px] h-[50px] md:h-[60px] mt-7 hover:bg-[#FFBD05] hover:text-[#371275] transition-colors duration-300 font-semibold'>
            Makkah Historical  Study Tour
          </button>
          <button className='bg-transparent text-[#FFBD05] border-2 border-[#FFBD05] w-[300px] h-[50px] md:h-[60px] mt-7 hover:bg-[#FFBD05] hover:text-[#371275] transition-colors duration-300 font-semibold'>
            Taif Tour
          </button>
          <button className='bg-transparent text-[#FFBD05] border-2 border-[#FFBD05] w-[300px] h-[50px] md:h-[60px] mt-7 hover:bg-[#FFBD05] hover:text-[#371275] transition-colors duration-300 font-semibold'>
            Jordan Visit Visa Renewal
          </button>
        </div>
      </div>

      <div className=" py-5 mt-3 md:px-0 md:py-0 md:mt-0 h-screen bg-[#371275]">
        <div className='p-3 md:p-10'>
          <h1 className={`text-[#371275] md:text-xl border-3 bg-[#FFBD05] w-fit px-8 py-2  font-semibold ${inter.className}`}>OUR VISION</h1>
          

          <div className="flex flex-col md:flex-row items-center  mt-10 gap-6">
            <Image
              src={vision}
              alt="Vision Image"
              className="w-[350px] md:w-[500px] h-auto rounded-lg"
            />

            <div className="bg-[#371275] md:p-6 rounded-xl w-[90%] md:w-full">
              <h1 className={`text-[white] text-lg md:text-4xl font-semibold mt-5 ${inknutAntiqua.className}`}>Services Beyond Commitments</h1>
              <p className={`text-[#FFBD05] text-sm md:text-lg text-justify font-semibold mt-20 ${inter.className}`}>
                At Moulavi Tours and Travels, our profound vision extends beyond mere travel; we aspire to be the guiding light for spiritual journeys. We envision a world where every pilgrim can embark on their sacred Ziyara with absolute peace of mind, deeply connected to their faith, and enriched by authentic experiences. Our commitment is to meticulously craft every itinerary, ensuring comfort, safety, and profound spiritual fulfillment. We leverage our deep understanding of the holy sites and the wisdom of our expert guides to transform travel into a truly transformative pilgrimage. Ultimately, we aim to be the most trusted name, leaving an indelible spiritual mark on the lives of every traveler we are blessed to serve.
              </p>
            </div>
          </div>

        </div>        
      </div>

        <div className=" py-5  md:px-0 md:py-0 md:mt-0 h-screen bg-[#371275]">
        <div className='p-3 md:p-10 mt-10 md:mt-0'>
          <h1 className={`text-[#371275] md:text-xl border-3 bg-[#FFBD05] w-fit px-8 py-2  font-semibold ${inter.className}`}>OUR MISSION</h1>
          

          <div className="flex flex-col md:flex-row items-center justify-end mt-10 gap-6">
           <div className="bg-[#371275] md:p-6 rounded-xl w-[90%] md:w-full">
            <h1 className={`text-white text-lg md:text-4xl font-semibold mt-5 ${inknutAntiqua.className}`}>Trusted Immigration and Visa Advice</h1>
             <p className={`text-[#FFBD05] text-sm md:text-lg text-justify font-semibold mt-20 ${inter.className}`}>
               At Moulavi Tours and Travels, our mission is to empower individuals to embark on their sacred dream journeys with unwavering confidence and spiritual fulfillment. We achieve this by continuously innovating our services and leveraging profound industry expertise to provide the most efficient, effective, and spiritually enriching Ziyara solutions. Ultimately, we strive to become a symbol of reliability and excellence, leaving a lasting positive impact on the lives of every pilgrim we serve.
              </p>
            </div>
            <Image
              src={mission}
              alt="Vision Image"
              className="w-[350px] md:w-[500px] h-auto rounded-lg"
            />
          </div>

        </div>

        
      </div>



    </>
  );
};

export default Vision;
