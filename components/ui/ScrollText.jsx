'use client';

import { useEffect, useRef, useState } from 'react';

const ScrollText = ({ textArray, updateInterval, styles }) => {
  const [index, setIndex] = useState(0);
  const carouselRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (carouselRef.current) {
        setDimensions({
          width: carouselRef.current.offsetWidth,
          height: carouselRef.current.offsetHeight,
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, updateInterval);

    return () => clearInterval(interval);
  }, [textArray.length, updateInterval]);

  return (
    <div className="hidden lg:block overflow-y-hidden overflow-x-visible w-full h-full relative" ref={carouselRef}>
      <div
        className="flex flex-col w-full transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateY(-${index * dimensions.height}px)` }}
      >
        {textArray.map((text, i) => (
          <div
            key={i}
            className={` flex-shrink-0`}
            style={{ width: dimensions.width, height: dimensions.height }}
          >
            <p className={styles}>{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollText;
