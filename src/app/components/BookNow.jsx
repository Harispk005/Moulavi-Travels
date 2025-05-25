import Image from 'next/image';
import background from '../Images/background.jpg';
import fam from '../Images/fam3.png';

const BookNow = () => {
    return (
        <div className='relative w-full'>
            <div>
                <Image src={background} alt='background' className='w-full ' />
            </div>
            <div className='absolute top-[110px] md:top-[130px] left-[160px] md:left-[220px] transform -translate-x-1/2 -translate-y-1/2 "px-2 py-5 mt-3 md:px-0 md:py-0 md:mt-0'>
                <h1 className='text-[#371275] text-center md:h-[45px] bg-[#FFBD05] w-[190px] px-8 py-2 font-semibold'>
                    BOOK NOW
                </h1>
                <div className='flex flex-col items-center mt-[40px]'>
                    <h1 className='text-[#FFBD05] text-[25px] md:text-[30px] text-lg font-medium font-[inknut-antiqua] md:w-[350px]'>EASY BOOKING FOR YOUR TRIP</h1>
                </div>
            </div>
            <div className='absolute top-[250px] md:top-[260px] left-[210px] md:left-[430px] transform -translate-x-1/2 -translate-y-1/2'>
                <p className='w-[400px] md:w-full text-justify px-5 py-5 font-medium text-white md:text-[18px]'>Explore Beyond the Map<br />
                    Tell us where you want to go, and we'll plan a perfect trip to make your travel dreams a reality.</p>
            </div>
            <div className='absolute top-[330px] md:top-[370px] left-[290px] md:left-[150px] transform -translate-x-1/2 -translate-y-1/2'>
                <button className='w-[200px] md:w-[220px] h-[55px] rounded-[20px] bg-[#FFBD05] text-[#371275] font-semibold border-3 border-[#371275] shadow-md hover:bg-yellow-400 transition'>APPLY VISA NOW</button>
            </div>
            <div className='absolute bottom-0 top-114 md:top-[440px] justify-center items-center transform -translate-x-1/2 -translate-y-1/2'>
                {/* <Image src={fam} alt='fam' className='h-[240px] w-[250px] md:h-[400px] md:w-[400px] ml-[205px] md:ml-[293%] md:mt-[0px]' /> */}
            </div>
        </div>
    );
};

export default BookNow;
