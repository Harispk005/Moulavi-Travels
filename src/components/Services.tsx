import plane from '../Images/Airplane Take Off.png'
import hotel from '../Images/Hotel.png'
import beach from '../Images/Beach Umbrella.png'
import hajj from '../Images/Kaaba.png'
import globe from '../Images/Cryptocurrency Global.png'
import file from '../Images/Documents.png'
import bus from '../Images/image-removebg-preview (5) 1.png'
import train from '../Images/train.png'
import group from '../Images/Group 9.png'

const Services = () => {
  return (
    <div className='bg-[#FFBD05] '>
      <div className='p-3 md:p-10'>
        <h1 className='text-[#371275] md:text-xl border-3 border-[#371275] w-fit px-8 py-2 font-[550] '>OUR SERVICES</h1>
        <h1 className={'text-[#371275] text-lg md:text-3xl font-semibold mt-5 font-[inkut-antiqua]'}>WE PROVIDE BEST SERVICES</h1>
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-10 mt-5 md:mt-10'>
          <div className='bg-[#371275] text-white p-3 md:p-5 rounded-lg '>
            <img src={plane} alt="airplane" className='w-15 h-15 md:w-20 m:h-20 ' />
            <h1 className='text-lg md:text-xl font-semibold mt-2'>FLIGHT TICKET</h1>
            <p className='mt-2  md:text-lg md:font-medium'>Find Great deals on worldwide.</p>
          </div>
          <div className='bg-[#371275] text-white p-3 md:p-5 rounded-lg '>
            <img src={hotel} alt="airplane" className='w-15 h-15 md:w-20 m:h-20 ' />
            <h1 className='text-lg md:text-xl font-semibold mt-2'>HOTELS</h1>
            <p className='mt-2 md:text-lg md:font-medium'>Find your ideal accommodation, from luxury to budget.</p>
          </div>
          <div className='bg-[#371275] text-white p-3 md:p-5 rounded-lg '>
            <img src={beach} alt="airplane" className='w-15 h-15 md:w-20 m:h-20 ' />
            <h1 className='text-lg md:text-xl font-semibold mt-2'>HOLIDAYS</h1>
            <p className='mt-2 md:text-lg md:font-medium'>Experience the best, remember forever.</p>
          </div>
          <div className='bg-[#371275] text-white p-3 md:p-5 rounded-lg '>
            <img src={hajj} alt="airplane" className='w-15 h-15 md:w-20 m:h-20 ' />
            <h1 className='text-lg md:text-xl font-semibold mt-2'>HAJJ & UMRAH</h1>
            <p className='mt-2 md:text-lg md:font-medium'>Travel with us for a meaningful Hajj and Umrah experience.</p>
          </div>
          <div className='bg-[#371275] text-white p-3 md:p-5 rounded-lg '>
            <img src={globe} alt="airplane" className='w-15 h-15 md:w-20 m:h-20 ' />
            <h1 className='text-lg md:text-xl font-semibold mt-2'>GLOBAL VISA</h1>
            <p className='mt-2 md:text-lg md:font-medium'>Simplify your visa application process.</p>
          </div>
          <div className='bg-[#371275] text-white p-3 md:p-5 rounded-lg '>
            <img src={file} alt="airplane" className='w-15 h-15 md:w-20 m:h-20 ' />
            <h1 className='text-lg md:text-xl font-semibold mt-2'>ATTESTATION</h1>
            <p className='mt-2 md:text-lg md:font-medium'>Fast and easy apostille services.</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col md:flex-row md:justify-between mt-5 gap-10 '>
        <div className='flex items-center'>
          <img src={bus} alt="" className='w-1/2  md:w-[350px] object-contain' />
          <h1 className='text-[#371275] text-xl md:text-3xl font-semibold'>FROM
            ACCOMODATION TO ACTIVITIES - <br /> <span className='text-white'>WE COVER IT  ALL.</span> </h1>
        </div>
        <div className='flex flex-col '>
          <div className='text-[#371275] flex md:flex-col-reverse md:justify-center items-center md:gap-3 text-2xl px-3 mt-3'>
            <h1 className='font-semibold'>1000+ <span className='font-normal'>Our client in the world</span></h1>
            <img src={group} alt="" className='object-cover w-[150px]' />
          </div>
          <img src={train} alt="" className=' md:w-[550px] object-contain'  />
        </div>

      </div>
    </div>
  )
}

export default Services