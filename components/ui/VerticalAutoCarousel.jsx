'use client'

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

// const images = [
//   banner1,
//   banner3,
//   banner2,
// ];

const VerticalAutoCarousel = ({ images, updateInterval }) => {
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
    }, updateInterval); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length, updateInterval]);

  return (
    <div className="overflow-hidden w-full h-full relative" ref={carouselRef}>
      <div
        className="flex flex-col w-full transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateY(-${index * height}px)` }}
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
              height={height}
            //   height={carouselRef.current?.offsetHeight || 500}
              className="object-cover min-h-full max-h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalAutoCarousel;
