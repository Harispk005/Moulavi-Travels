    import background from '../Images/background.jpg'
    import fam from '../Images/fam.png'

    const BookNow = () => {
        return (
            <div className='relative w-full'>
                <div >
                    <img src={background} alt="background" className='w-full h-[63vh] md:h-[100vh]' />
                </div>
                <div className='absolute top-[110px] md:top-[130px] left-[160px] md:left-[220px] transform -translate-x-1/2 -translate-y-1/2'>

                <h1 className="text-[#371275] text-center md:h-[45px] bg-[#FFBD05] w-[190px] px-8 py-2 font-semibold">
                  BOOK NOW
                </h1>
                    <div className="flex flex-col items-center mt-[40px]">
                        <h1 className="text-[#FFBD05] text-[25px] md:text-[30px] text-lg font-medium font-[inknut-antiqua] md:w-[350px]">EASY BOOKING FOR
                            YOUR TRIP</h1>
                    </div>

                </div>
                <div className='absolute top-[250px] md:top-[260px] left-[210px] md:left-[430px] transform -translate-x-1/2 -translate-y-1/2'>
                    <p className='w-[400px] md:w-full text-justify px-5 py-5 font-medium text-white md:text-[18px]'>Explore Beyond the Map<br/>
                        Tell us where you want to go, and we'll plan a perfect trip to make your travel dreams a reality.</p>
                </div>
                <div className='absolute top-[330px] md:top-[370px] left-[290px] md:left-[150px] transform -translate-x-1/2 -translate-y-1/2'>
                    <button className='w-[200px] md:w-[220px] h-[55px] rounded-[20px] bg-[#FFBD05] text-[#371275] font-semibold border-3 border-[#371275] shadow-md hover:bg-yellow-400 transition'>APPLY VISA NOW</button>
                </div>

                <div className='absolute top-[455px] md:top-[500px] justify-center items-center transform -translate-x-1/2 -translate-y-1/2'>
                <img src={fam} alt='fam' className='h-[250px] w-[450px] md:h-[350px] md:w-[600px] ml-[205px] md:ml-[190%] md:mt-[58px] '/> 
                </div>

            </div>
        )
    }

    export default BookNow