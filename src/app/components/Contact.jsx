import Image from 'next/image';
import logo from '../Images/moulavilonglogo.png';
import facebook from '../Images/Facebook F.png';
import instagram from '../Images/Instagram.png';
import mail from '../Images/Mail .png';
import location from '../Images/Location.png';
import newmail from '../Images/newmail.png';
import phone from '../Images/newphone.png';
import { Inknut_Antiqua, Inter } from 'next/font/google';

const inknutAntiqua = Inknut_Antiqua({ weight: '600', subsets: ['latin'] });
const inter = Inter({ weight: '600', subsets: ['latin'] });

const Contact = () => {
  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      {/* First grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='flex flex-col items-center md:items-start'>
          <Image src={logo} alt='logo' className='w-[300px] h-[60px] md:w-[350px] md:h-[70px]' />
          <p className={`mt-5 text-center md:text-left text-sm md:text-base text-[#371275] ${inter.className}`}>
            Expert guidance for visas and immigration - simplifying your journey.
          </p>

          <div className='mt-6 hidden md:block'>
            <h1 className={`text-[#371275] text-[17px] font-bold ${inter.className}`}>Social Media</h1>
            <div className='flex gap-3 mt-3'>
              {[facebook, instagram].map((icon, i) => (
                <div key={i} className="w-[50px] h-[50px] border border-[#371275] rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <Image src={icon} alt="social-icon" className="w-[30px] h-[30px]" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='flex flex-col items-center'>
          <h1 className={`text-3xl md:text-4xl text-[#371275] font-bold mb-6 ${inknutAntiqua.className}`}>
            CONTACT US
          </h1>
          <div className='relative w-full max-w-[400px]'>
            <Image
              src={mail}
              alt='mail'
              className='absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 hover:scale-110 transition-transform'
            />
            <input
              type='email'
              placeholder='Your email address'
              className='w-full h-[60px] bg-white rounded-lg pl-14 pr-4 text-gray-600 placeholder-gray-400 border border-gray-300'
            />
          </div>
          <button className='bg-[#371275] text-[#FFBD05] w-full max-w-[400px] h-[60px] mt-5 rounded-lg hover:bg-[#201728]'>
            Subscribe
          </button>
        </div>
      </div>

      {/* Social icons mobile */}
      <div className='mt-8 md:hidden'>
        <h1 className={`text-[#371275] text-[17px] font-bold ${inter.className}`}>Social Media</h1>
        <div className='flex gap-3 mt-3'>
          {[facebook, instagram].map((icon, i) => (
            <div key={i} className="w-[50px] h-[50px] border border-[#371275] rounded-full flex items-center justify-center hover:scale-110 transition-transform">
              <Image src={icon} alt="social-icon" className="w-[30px] h-[30px]" />
            </div>
          ))}
        </div>
      </div>

      <div className='my-8 h-[1px] w-full bg-[#371275]'></div>

      {/* Contact info */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='flex flex-col gap-4'>
          <h1 className={`text-[30px] text-[#371275] ${inknutAntiqua.className}`}>CONTACT INFO</h1>

          <div className='flex items-start gap-4'>
            <Image src={location} alt='loc' className='w-8 h-8 hover:scale-110 transition-transform' />
            <p className={`text-[#371275] ${inter.className}`}>
              Near Tahweel Al Rajhi,<br />
              Sitteen St. Sharafiya - Jeddah -<br />
              Saudi Arabia
            </p>
          </div>

          <div className='flex items-start gap-4'>
            <Image src={phone} alt='phone' className='w-8 h-8' />
            <div className='flex flex-col gap-2'>
              <a href='tel:+966552678666' className={`text-[#371275] ${inter.className}`}>
                +966552678666
              </a>
              <a href='tel:+966533111487' className={`text-[#371275] ${inter.className}`}>+966533111487</a>

              <a href="tel:+966504538927" className={`text-[#371275] ${inter.className}`}>+966504538927</a>

            </div>

          </div>

          <div className='flex items-start gap-4'>
            <Image src={newmail} alt='mail' className='w-8 h-8' />
            <a href="mailto:moulavitravels1959@gmail.com" className={`text-[#371275] ${inter.className}`}>
              moulavitravels1959@gmail.com
            </a>
          </div>
        </div>

        {/* Services + Links */}
        <div className='flex flex-col md:flex-row justify-between gap-10 md:gap-20'>
          <div>
            <h1 className={`text-[#371275] text-lg font-bold ${inter.className}`}>Services</h1>
            {['Holidays', 'Hotels', 'Flight Ticket', 'Hajj & Umrah'].map((text, i) => (
              <p key={i} className={`mt-2 text-[#371275] font-medium hover:underline cursor-pointer ${inter.className}`}>
                {text}
              </p>
            ))}
          </div>
          <div>
            <h1 className={`text-[#371275] text-lg font-bold ${inter.className}`}>Quick Links</h1>
           
            <div className='flex flex-col '>
              <a href="/Contact-Us" className={`mt-2 text-[#371275] font-medium hover:underline cursor-pointer ${inter.className}`}>Contact Us</a>
              <a href="/About_us" className={`mt-2 text-[#371275] font-medium hover:underline cursor-pointer ${inter.className}`}>About Us</a>
              <a href="/login" className={`mt-2 text-[#371275] font-medium hover:underline cursor-pointer ${inter.className}`}>Admin Login <span className='text-red-500'> *</span> </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
