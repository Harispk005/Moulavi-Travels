'use client';
import { useEffect, useState } from 'react';
import React from 'react';
import Image from 'next/image';
import logo from '../Images/moulavilonglogo.png';
import NavBar from '../components/NavBar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Flight_Middleview from './Flight_Middleview';

const Page = () => {
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
      <Flight_Middleview/>
      <Contact id="contact_about" />
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
};

export default Page;
