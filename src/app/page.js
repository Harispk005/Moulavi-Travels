'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import logo from './Images/moulavilonglogo.png';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import BookNow from './components/BookNow';
import ContactNow from './components/ContactNow';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhyChooseUs from './components/WhyCooseUs';
import ServiceFlow from './components/ServiceFlow';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const startTime = Date.now();
    const maxLoadingDuration = 7000;

    const mediaElements = document.querySelectorAll('img.critical-media, video.critical-media');
    let loadedCount = 0;

    const onMediaLoaded = () => {
      loadedCount++;
      if (loadedCount === mediaElements.length) {
        const elapsed = Date.now() - startTime;
        const remaining = 1500 - elapsed;
        setTimeout(() => setLoading(false), remaining > 0 ? remaining : 0);
      }
    };

    if (mediaElements.length === 0) {
      setTimeout(() => setLoading(false), 1200);
      return;
    }

    mediaElements.forEach((el) => {
      el.addEventListener('load', onMediaLoaded);
      el.addEventListener('error', onMediaLoaded);
      el.addEventListener('loadeddata', onMediaLoaded);

      if ((el.tagName === 'IMG' && el.complete) || (el.tagName === 'VIDEO' && el.readyState >= 3)) {
        onMediaLoaded();
      }
    });

    const timeout = setTimeout(() => setLoading(false), maxLoadingDuration);

    return () => {
      clearTimeout(timeout);
      mediaElements.forEach((el) => {
        el.removeEventListener('load', onMediaLoaded);
        el.removeEventListener('error', onMediaLoaded);
        el.removeEventListener('loadeddata', onMediaLoaded);
      });
    };
  }, []);

  if (!isClient) return null;

  return (
    <div className="relative bg-[#FFBD05] min-h-screen">
      <NavBar />
      <Hero />
      <About />
      <WhyChooseUs />
      <div id="services">
        <Services />
      </div>
      <ServiceFlow />
      {/* <BookNow /> */}
      <div id="contact">
        <ContactNow />
      </div>
      <div id="contact-us">
        <Contact />
      </div>
      <Footer />

      {/* Floating Call and WhatsApp Icons */}
      <div className="fixed bottom-5 right-4 flex flex-col gap-4 z-40  ">
     
        <a
          href="https://wa.me/+966533111487?text=Hi%2C%20I%27m%20interested%20in%20booking%20a%20ticket%20with%20Moulavi%20Travels."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-[50%] h-[53px] flex justify-center items-center shadow-lg transition"
        >
          <i className="fab fa-whatsapp text-2xl"></i>
        </a>

   
        <a
          href='tel:+966552678666' 
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-[50%] h-[53px] flex justify-center items-center shadow-lg transition"
        >
          <i className="fas fa-phone text-xl"></i>
        </a>
      </div>

      {/* Loading screen */}
      {loading && (
        <div className="fixed inset-0 z-50 flex flex-col gap-4 items-center justify-center bg-[#FFBD05] text-white text-2xl">
          <Image
            src={logo}
            alt="Loading"
            width={300}
            height={300}
            className="critical-media"
            priority
          />
          <div className="mt-4 w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
}
