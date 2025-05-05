
import team from '../Images/Good team-pana 1.png'
import tick from '../Images/tick.png'


const About = () => {
    return (
        <div className='bg-[#FFBD05]'>
            <div className='p-3 md:p-10'>
                <h1 className='text-[#371275] md:text-xl border-3 border-[#371275] w-fit px-4 py-2 font-[550]'>ABOUT MOULAVI</h1>
                <h1 className={'text-[#371275] text-lg md:text-3xl font-semibold mt-3 font-[inkut-antiqua]' + ' ' }>TOP - NOTCH IMMIGRATION  AND VISA CONSULTING</h1>
                <p className='text-[#371275] text-lg md:text-xl mt-3'>Expert guidance and personalized support for a seamless immigration journey</p>
                <div className='flex flex-col-reverse md:grid md:grid-cols-2  items-center '>
                    <img src={team} alt="team" className='px-5 md:px-10 h-[300px] md:ml-[100px]' />
                    <div className='flex flex-col gap-5 md:gap-10 mt-5 md:mt-0 '>
                        <div className='flex gap-2  text-[#371275] '>
                            <img src={tick} alt="" className='h-8 w-8 object-cover md:mt-[10px] ' />
                            <div className='md:ml-[10px]'>
                                <h1 className='text-xl font-normal'>Manpower Solutions & Visa Services</h1>
                                <h3>Expert manpower solutions and visa services for a global workforce.</h3>

                            </div>
                        </div>
                        <div className='flex gap-2  text-[#371275] '>
                        <img src={tick} alt="" className='h-8 w-8 object-cover md:mt-[10px] ' />
                        <div className='md:ml-[10px]'>
                                <h1 className='text-xl font-normal'>Best Immigration Consultants</h1>
                                <h3>Trusted immigration consultants for a stress-free experience.</h3>

                            </div>
                        </div>
                        <div className='flex gap-5  text-[#371275] items-center'>   
                            <a href="" className='bg-[#371275] text-[#FFBD05] font-[550] py-3 rounded px-5'>MORE ABOUT US</a>
                            <a href="" className='font-[550] text-xl py-3 '>Contact Agent</a>
                        </div>
                    </div>

                </div>
                  
            </div>
        </div>
    )
}

export default About