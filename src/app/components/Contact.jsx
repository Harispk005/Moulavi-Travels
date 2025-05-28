import Image from 'next/image';
import logo from '../Images/moulavilonglogo.png';
import facebook from '../Images/Facebook F.png';
import instagram from '../Images/Instagram.png';
import mail from '../Images/Mail .png';
import location from '../Images/Location.png';
import newmail from '../Images/newmail.png';
import phone from '../Images/newphone.png';

const Contact = () => {
  return (
    <div className="px-2 py-5 mt-3 md:px-0 md:py-0 md:mt-0">
      {/* 1st grid */}
      <div className='h-auto w-full md:grid md:grid-cols-2'>
        <div className='flex flex-col items-center md:mr-[300px] md:mt-[30px]'>
          <Image src={logo} alt='logo' className='w-[300px] h-[60px] md:w-[350px] md:h-[70px]' />
          <div className='mt-5 text-center w-full md:ml-[90px]'>
            <p className='text-[14px] md:text-[15px] font-medium w-full px-4 text-[#371275] text-justify'>
              Expert guidance for visas and immigration - simplifying your journey.
            </p>
          </div>

          <div className='mt-5 md:block hidden'>
            <h1 className='text-[#371275] text-[17px] font-bold'>Social Media</h1>
            <div className='flex gap-3 mt-3'>
              <div className="w-[50px] h-[50px] border-3 border-[#371275] rounded-full flex items-center justify-center transform transition-transform duration-300 hover:scale-110">
                <Image src={facebook} alt="face" className="w-[30px] h-[30px]" />
              </div>

              <div className="w-[50px] h-[50px] border-3 border-[#371275] rounded-full flex items-center justify-center transform transition-transform duration-300 hover:scale-110">
                <Image src={instagram} alt="insta" className="w-[30px] h-[30px]" />
              </div>
            </div>
          </div>
        </div>

        {/* 2nd grid */}
        <div className='items-center py-10'>
          <h1 className="text-center text-[30px] md:text-center md:text-[35px] md:ml-0 mb-5 text-[#371275] font-bold font-['Inknut_Antiqua']">
            CONTACT US
          </h1>
          <div className='flex flex-col items-center relative'>
            <div className='relative w-[350px] md:w-[400px]'>
              <Image
                src={mail}
                alt='mail'
                className='absolute left-[20px] top-[37px] transform -translate-y-1/2 w-7 h-7 transition-transform duration-300 hover:scale-110'
              />
              <input
                type='email'
                placeholder=' Your email address'
                className='w-full h-[70px] bg-white border-none rounded-[10px] pl-14 pr-4 text-gray-600 placeholder-gray-400'
              />
            </div>
            <button className='bg-[#371275] text-[#FFBD05] w-[350px] md:w-[400px] h-[70px] mt-5 rounded-[10px] hover:bg-[#201728]'>
              Subscribe
            </button>
          </div>

        </div>
      </div>

      <div className='mb-5 md:hidden ml-[40px]'>
        <h1 className='text-[#371275] text-[17px] font-bold'>Social Media</h1>
        <div className='flex gap-3 mt-3'>
          <div className="w-[50px] h-[50px] border-3 border-[#371275] rounded-full flex items-center justify-center transform transition-transform duration-300 hover:scale-110">
            <Image src={facebook} alt="face" className="w-[30px] h-[30px]" />
          </div>

          <div className="w-[50px] h-[50px] border-3 border-[#371275] rounded-full flex items-center justify-center transform transition-transform duration-300 hover:scale-110">
            <Image src={instagram} alt="insta" className="w-[30px] h-[30px]" />
          </div>
        </div>
      </div>

      <div className='h-[1px] w-full bg-[#371275]'></div>

      {/* Contact info */}
      <div className='h-auto w-full md:grid md:grid-cols-2'>
        <div className='flex flex-col'>
          <div className='mx-[30px] mt-[30px]'>
            <h1 className="text-[30px] text-[#371275] font-['Inknut_Antiqua']">CONTACT INFO</h1>
          </div>
          <div className='flex mt-8 mx-8'>
            <Image src={location} alt='loc' className='w-[35px] h-[35px] mt-[4px] transform transition-transform duration-300 hover:scale-110' />
            <p className='text-justify ml-[20px] text-[#371275] cursor-pointer hover:underline transition-all duration-200'>
              Near Tahweel Al Rajhi,<br />
              Sitteen St. Sharafiya - Jeddah -<br />
              Saudi Arabia
            </p>
          </div>
          <div className='flex mt-1 mx-8'>
            <Image src={phone} alt='phone' className='w-[35px] h-[35px]' />
            <p className='text-justify ml-[20px] mt-2 text-[#371275] cursor-pointer hover:underline transition-all duration-200'>
              +966552678666,<br/>
              +966533111487, +966504538927
            </p>
          </div>
          <div className='flex mt-4 mx-8'>
            <Image src={newmail} alt='mail' className='w-[35px] h-[35px]' />
            <p className='text-justify ml-[20px] mt-2 text-[#371275] cursor-pointer hover:underline transition-all duration-200'>
              moulavitravels1959@gmail.com
            </p>
          </div>
        </div>

        <div className='flex justify-center gap-40 mt-[80px]'>
          <div>
            <h1 className='text-[#371275] text-[18px] font-bold'>Services</h1>
            <p className='mt-3 text-[#371275] font-medium cursor-pointer hover:underline transition-all duration-200'>Holidays</p>
            <p className='mt-2 text-[#371275] font-medium cursor-pointer hover:underline transition-all duration-200'>Hotels</p>
            <p className='mt-2 text-[#371275] font-medium cursor-pointer hover:underline transition-all duration-200'>Flight Ticket</p>
            <p className='mt-2 text-[#371275] font-medium cursor-pointer hover:underline transition-all duration-200'>Hajj & Umrah</p>
          </div>
          <div>
            <h1 className='text-[#371275] text-[18px] font-bold'>Quick links</h1>
            <p className='mt-3 text-[#371275] font-medium cursor-pointer hover:underline transition-all duration-200'>Contact Us</p>
            <p className='mt-2 text-[#371275] font-medium cursor-pointer hover:underline transition-all duration-200'>About Us</p>
            <p className='mt-2 text-[#371275] font-medium cursor-pointer hover:underline transition-all duration-200'>*Admin Login</p>
          </div>
        </div>
      </div>

      <div className='h-[1px] w-full bg-[#371275] mt-8'></div>
    </div>
  );
};

export default Contact;
