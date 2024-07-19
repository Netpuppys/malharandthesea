'use client'

import { useEffect, useRef, useState } from 'react';
import banner1 from "../../public/banner/1.png";
import banner2 from "../../public/banner/2.png";
import banner3 from "../../public/banner/3.png";
import Image from 'next/image';
import { useMobile } from '@/app/utils/MobileContext';
import bannerMobile1 from "../../public/banner/bannerMobile1.png"
import bannerMobile2 from "../../public/banner/bannerMobile2.png"
import bannerMobile3 from "../../public/banner/bannerMobile3.png"

const images = [
  banner1,
  banner3,
  banner2,
];

const imagesMobile = [
  bannerMobile1,
  bannerMobile2,
  bannerMobile3,
]

const BannerCarousel = () => {
  const { isMobile } = useMobile()
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
    }, 5000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden w-full h-full relative" ref={carouselRef}>
      <div
        className="flex items-start justify-start w-fit h-full transition-transform no-scrollbar duration-1000 ease-in-out overflow-y-hidden overflow-x-scroll"
        style={{ transform: `translateX(-${index * width}px)` }}
      >
        {(isMobile? imagesMobile : images).map((src, i) => (
          <Image
            key={i}
            src={src}
            alt={`Slide ${i}`}
            className="w-screen md:w-[calc(80vw-5.75rem)] h-full max-w-none object-fill"
          />
        ))}
      </div>
    </div>
  );
};

export default BannerCarousel;
