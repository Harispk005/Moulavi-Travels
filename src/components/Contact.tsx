import logo from '../Images/moulavilonglogo.png'
import facebook from '../Images/Facebook F.png'
import instagram from '../Images/Instagram (1).png'
import mail from '../Images/Mail (1).png'
import location from '../Images/Location (1).png'
import phone from '../Images/contact.png'

const Contact = () => {
  return (
    <>
      {/* 1stgrid */}
      <div className='h-auto w-full md:grid md:grid-cols-2 '>
        <div className='flex flex-col items-center md:mr-[300px] md:mt-[30px]'>
          <img src={logo} alt='logo' className='w-[300px] h-[60px] md:w-[350px] md:h-[70px]' />
          <div className='mt-5 text-center w-full md:ml-[120px]'>
            <p className='text-[17px] w-full  px-4 text-[#371275] text-justify'>Expert guidance for visas and <br /><span>immigration - simplifying your journey.</span> </p>
          </div>
          <div className='mt-5'>
            <h1 className=' text-[#371275] text-[17px] font-bold'>Social Media</h1>
            <div className='flex gap-3 mt-3 '>
              <div className="w-[50px] h-[50px] border-3 border-[#371275] rounded-full flex items-center justify-center transform transition-transform duration-300 hover:scale-110">
                <img src={facebook} alt="face" className="w-[30px] h-[30px]" />
              </div>

              <div className="w-[50px] h-[50px] border-3 border-[#371275] rounded-full flex items-center justify-center transform transition-transform duration-300 hover:scale-110">
                <img src={instagram} alt="insta" className="w-[30px] h-[30px]" />
              </div>
            </div>
          </div>
        </div>
        {/* 2nd grid */}
        <div className='items-center py-10'>
          <h1 className=" text-center text-[35px] text-[#371275] font-['Inknut_Antiqua']">Contact Us</h1>
          <div className='flex flex-col items-center relative'>
            <img src={mail} alt='mail' className='absolute left-[50px] top-[55px] md:left-[220px] md:top-[57px] transform -translate-y-1/2 w-7 h-7 transform transition-transform duration-300 hover:scale-110 ' />
            <input type='email' placeholder='                                Your email address' className='w-[400px] h-[70px] mt-5 bg-white border-none rounded-[5px]' />
            <button className='bg-[#371275] text-[#FFBD05] w-[400px] h-[70px] mt-5 rounded-[5px] hover:bg-[#201728]'>Subscribe</button>
          </div>
        </div>
      </div>
      <div className='h-[1px] w-full bg-[#371275]'></div>

      {/*  contact info*/}

      <div className='h-auto w-full md:grid md:grid-cols-2'>
        <div className='flex flex-col '>
          <div className='mx-[30px] mt-[30px]'>
            <h1 className="text-[30px] text-[#371275] font-['Inknut_Antiqua']">CONTACT INFO</h1>
          </div>
          <div className='flex mt-8 mx-8 '>
            <img src={location} alt='loc' className='w-[35px] h-[35px] mt-[4px] transform transition-transform duration-300 hover:scale-110' />
            <p className='text-justify ml-[20px] text-[#371275] cursor-pointer hover:underline transition-all duration-200 '>Near Tahweel Al Ra-
              jhi,<br /> Sitteen St.
              Sharafiya - Jeddah -<br />
              Saudi Arabia</p>
          </div>
          <div className='flex mt-4 mx-8'>
            <img src={phone} alt='phone' className='w-[35px] h-[35px]'/>
            <p className='text-justify ml-[20px] mt-2 text-[#371275] cursor-pointer hover:underline transition-all duration-200 '>+966 0558517448</p>
          </div>
          <div className='flex mt-4 mx-8'>
            <img src={mail} alt='phone' className='w-[35px] h-[35px]'/>
            <p className='text-justify ml-[20px] mt-2 text-[#371275] cursor-pointer hover:underline transition-all duration-200 '>basilmoulavitravels@gmail.com</p>
          </div>


        </div>

        <div className='flex justify-center gap-40 mt-[80px]'>
        <div>
        <h1 className='text-[#371275] text-[18px] font-bold'>Services</h1>
        <p className='mt-3 text-[#371275] font-medium cursor-pointer hover:underline transition-all duration-200 '>Holidays</p>
        <p className='mt-2 text-[#371275] font-medium cursor-pointer hover:underline transition-all duration-200 '>Hotels</p>
        <p className='mt-2 text-[#371275] font-medium cursor-pointer hover:underline transition-all duration-200 '>Flight Ticket</p>
        <p className='mt-2 text-[#371275] font-medium cursor-pointer hover:underline transition-all duration-200 '>Hajj & Umrah</p>
        </div>
        <div>
        <h1 className='text-[#371275] text-[18px] font-bold'>Quick links</h1>
        <p className='mt-3 text-[#371275] font-medium cursor-pointer hover:underline transition-all duration-200 '>Contact Us</p>
        <p className='mt-2 text-[#371275] font-medium cursor-pointer hover:underline transition-all duration-200 '>About Us</p>
        <p  className='mt-2 text-[#371275] font-medium cursor-pointer hover:underline transition-all duration-200 '>*Admin Login</p>
        </div>
        </div>
       
     
      </div>
      <div className='h-[1px] w-full bg-[#371275] mt-8'></div>
    </>
  )
}

export default Contact
