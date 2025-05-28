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

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const startTime = Date.now();
    const maxLoadingDuration = 7000; // max wait 5s

    const mediaElements = document.querySelectorAll('img.critical-media, video.critical-media');
    let loadedCount = 0;

    const onMediaLoaded = () => {
      loadedCount++;
      if (loadedCount === mediaElements.length) {
        const elapsed = Date.now() - startTime;
        const remaining = 1500 - elapsed; // min spinner 1.2s
        setTimeout(() => setLoading(false), remaining > 0 ? remaining : 0);
      }
    };

    if (mediaElements.length === 0) {
      // No critical media — just wait min time
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
      <Contact />
      <Footer />

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
