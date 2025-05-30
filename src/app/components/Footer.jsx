import Image from 'next/image';
import kerala from '../Images/kerala new.png';
import tafi from '../Images/tafi1 new.png';
import iaai from '../Images/iaai new.png';
import tafi2 from '../Images/tafi2 new.png';
import saudi from '../Images/saudi new.png';
import iata from '../Images/iata new.png';import { Inknut_Antiqua, Inter } from 'next/font/google';


const inknutAntiqua = Inknut_Antiqua({ weight: '600', subsets: ['latin'] });
const inter = Inter({ weight: '600', subsets: ['latin'] });
const Footer = () => {
  return (
    <div className='w-full'>
      <div className='bg-[#371275] w-full md:h-[280px] py-10'>
        <h1 className={`text-center text-[#FFBD05] text-[20px] md:text-[25px] py-3 ${inknutAntiqua.className}`}>
          Member Of
        </h1>

        <div className='grid grid-cols-2 md:flex md:justify-evenly gap-y-4 md:gap-0 mt-6'>
          <div className='flex justify-center'>
            <Image src={kerala} alt='kerala' className='w-[80px] md:w-[130px] h-[60px] md:h-[100px]' />
          </div>
          <div className='flex justify-center'>
            <Image src={tafi} alt='tafi' className='w-[80px] md:w-[130px] h-[60px] md:h-[100px]' />
          </div>
          <div className='flex justify-center'>
            <Image src={iaai} alt='iaai' className='w-[80px] md:w-[130px] h-[60px] md:h-[100px]' />
          </div>
          <div className='flex justify-center'>
            <Image src={tafi2} alt='tafi2' className='w-[80px] md:w-[130px] h-[60px] md:h-[100px]' />
          </div>
          <div className='flex justify-center'>
            <Image src={saudi} alt='saudi' className='w-[80px] md:w-[140px] h-[60px] md:h-[100px]' />
          </div>
          <div className='flex justify-center'>
            <Image src={iata} alt='iata' className='w-[80px] md:w-[130px] h-[60px] md:h-[100px]' />
          </div>
        </div>
      </div>

      <div className='w-full h-[40px] flex items-center justify-center'>
        <p className={`text-[#371275] font-medium text-[12px] md:text-[15px] mt-2 ${inter.className}`}>
          Copyright © 2025 Moulavi Travells. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
