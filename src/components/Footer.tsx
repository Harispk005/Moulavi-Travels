
import kerala from '../Images/kerala new.png'
import tafi from '../Images/tafi1 new.png'
import iaai from '../Images/iaai new.png'
import tafi2 from '../Images/tafi2 new.png'
import saudi from '../Images/saudi new.png'
import iata from '../Images/iata new.png'


const Footer = () => {
  return (
    <>
    <div className='bg-[#371275] w-full md:h-[280px] py-10 '>
        <h1 className='text-center text-[#FFBD05] text-[20px] font-[Inknut_Antiqua] py-3'>
        Member Of
        </h1>
        <div className='md:flex md:mt-6 grid grid-cols-2 md:justify-evenly '>
            <img src={kerala} alt='kerala' className='w-[80px] md:w-[150px] h-[60px] md:h-[100px] ml-[80px] md:ml-0 mt-3 md:mt-0' />
            <img src={tafi} alt='tafi' className='w-[80px] md:w-[150px] h-[60px] md:h-[100px]  ml-[50px] md:ml-[80px]  mt-3 md:mt-0' />
            <img src={iaai} alt='tafi' className='w-[80px]md:w-[150px] h-[60px] md:h-[100px]  ml-[80px]  mt-3 md:mt-0' />
            <img src={tafi2} alt='tafi' className='w-[80px]md:w-[150px] h-[60px] md:h-[100px]  ml-[50px] md:ml-[80px]  mt-3 md:mt-0' />
            <img src={saudi} alt='tafi' className='w-[80px] md:w-[150px] h-[60px] md:h-[100px]  ml-[80px]  mt-3 md:mt-0' />
            <img src={iata} alt='tafi' className='w-[80px] md:w-[150px] h-[60px] md:h-[100px]  ml-[50px] md:ml-[80px]  mt-3 md:mt-0' />

        </div>

    </div>
    <div className='w-full h-[40px] flex items-center justify-center'>
        <p className='text-[#371275] font-medium text-[12px] md:text-18px '>Copyright © 2025 Moulavi Travells. All rights reserved</p>
    </div>
    </>
  )
}

export default Footer