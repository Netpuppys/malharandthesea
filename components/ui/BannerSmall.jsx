'use client'

import { useEffect, useRef, useState } from 'react';
import banner1 from "../../public/banner/small1.png";
import banner2 from "../../public/banner/small2.png";
import banner3 from "../../public/banner/small3.png";
import Image from 'next/image';

const images = [
    banner3,
    banner1,
    banner2,
];


const BannerSmall = () => {
  const [index, setIndex] = useState(0);
  const carouselRef2 = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (carouselRef2.current) {
        setWidth(carouselRef2.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);

    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden w-full h-full relative" ref={carouselRef2}>
      <div
        className="flex items-start  justify-start w-fit h-full transition-transform no-scrollbar duration-1000 ease-in-out overflow-y-hidden overflow-x-scroll"
        style={{ transform: `translateX(-${index * width}px)` }}
      >
        {images.map((src, i) => (
          <Image
            key={i}
            src={src}
            alt={`Slide ${i}`}
            width={width}
            className="h-full max-w-none object-fill"
          />
        ))}
      </div>
    </div>
  );
};

export default BannerSmall;
