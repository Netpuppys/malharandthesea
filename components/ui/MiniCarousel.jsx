'use client'

import { useEffect, useRef, useState } from 'react';
import banner1 from "../../public/banner/heroBanner.png";
import banner2 from "../../public/banner/banner2.jpeg";
import banner3 from "../../public/banner/banner3.jpeg";
import Image from 'next/image';

// const images = [
//   banner1,
//   banner3,
//   banner2,
// ];

const MiniCarousel = ({ images }) => {
  const [index, setIndex] = useState(0);
  const carouselRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (carouselRef.current) {
        setWidth(carouselRef.current.offsetWidth);
        setHeight(carouselRef.current.offsetHeight);
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
  }, [images.length]);

  return (
    <div className="overflow-hidden w-full h-full relative" ref={carouselRef}>
      <div
        className="flex h-full transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${index * width}px)` }}
      >
        {images.map((src, i) => (
          <div key={i} 
            className="overflow-hidden flex-shrink-0"
            style={{ width: width, height: height }}
            >
            <Image
              src={src}
              alt={`Slide ${i}`}
              layout="responsive"
              width={width}
              height={"auto"}
            //   height={carouselRef.current?.offsetHeight || 500}
              className="object-cover min-h-full max-h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MiniCarousel;
