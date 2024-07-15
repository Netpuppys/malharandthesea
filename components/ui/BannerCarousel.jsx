'use client'

import { useEffect, useRef, useState } from 'react';
import banner1 from "../../public/banner/heroBanner.png";
import banner2 from "../../public/banner/banner2.jpeg";
import banner3 from "../../public/banner/banner3.jpeg";
import Image from 'next/image';

const images = [
  banner1,
  banner3,
  banner2,
];

const BannerCarousel = () => {
  const [index, setIndex] = useState(0);
  const carouselRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (carouselRef.current) {
        setWidth(carouselRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);

    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden w-full h-full relative" ref={carouselRef}>
      <div
        className="flex w-fit h-full transition-transform duration-1000 ease-in-out overflow-x-scroll"
        style={{ transform: `translateX(-${index * width}px)` }}
      >
        {images.map((src, i) => (
          <Image
            key={i}
            src={src}
            alt={`Slide ${i}`}
            className="w-screen md:w-[calc(100vw-5.75rem)] min-h-full max-w-none object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default BannerCarousel;
