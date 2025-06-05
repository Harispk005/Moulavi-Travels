'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import img1 from '../Images/im1.jpg';
import img2 from '../Images/im2.jpg';
import img3 from '../Images/im3.jpg';
import img4 from '../Images/im4.jpg';
import img5 from '../Images/im5.jpg';
import img6 from '../Images/im6.jpg';

const images = [img1, img2, img3, img4, img5, img6];

const duplicatedImages = [...images, ...images];

const AutoGallery = () => {
    return (
        <div className="w-full overflow-hidden bg-transparent py-10">
            <motion.div
                className="flex gap-3"
                animate={{ x: ['0%', '-30%'] }}
                transition={{
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: 'linear',
                    duration: 20,
                }}
            >
                {duplicatedImages.map((img, index) => (
                    <div key={index} className="min-w-[200px] flex-shrink-0 h-[200px]">
                        <Image
                            src={img}
                            alt={`gallery-${index}`}
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default AutoGallery;
