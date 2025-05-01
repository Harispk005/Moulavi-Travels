import React from 'react'
import kerala from '../Images/image (9).png'
import tafi from '../Images/image 2.png'
import iaai from '../Images/image 3.png'
import af from '../Images/image 1 (1).png'
import saudi from '../Images/image 4.png'
import iata from '../Images/image 5.png'


const Footer = () => {
  return (
    <>
    <div className='bg-[#371275] w-full h-[280px] py-10 '>
        <h1 className='text-center text-[#FFBD05] text-[20px] font-[Inknut_Antiqua] py-3'>
        Member Of
        </h1>
        <div className='flex justify-center items-center mt-6'>
            <img src={kerala} alt='kerala' className='w-[100px] h-[80px] ml-[100px]' />
            <img src={tafi} alt='tafi' className='w-[100px] h-[80px] ml-[100px]' />
            <img src={iaai} alt='tafi' className='w-[100px] h-[80px] ml-[100px]' />
            <img src={af} alt='tafi' className='w-[100px] h-[80px] ml-[100px]' />
            <img src={saudi} alt='tafi' className='w-[100px] h-[80px] ml-[100px]' />
            <img src={iata} alt='tafi' className='w-[100px] h-[80px] ml-[100px]' />

        </div>

    </div>
    <div className='w-full h-[50px] flex items-center justify-center'>
        <p className='text-[#371275] font-medium'>Copyright © 2025 Moulavi Long. All rights reserved</p>
    </div>
    </>
  )
}

export default Footer