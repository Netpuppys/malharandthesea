"use client"

import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { VscTriangleLeft, VscTriangleRight } from "react-icons/vsc";
import cocktailImage from "../../public/backgrounds/cocktailImage.png"
import activity1 from "../../public/activities/activity1.jpeg"
import activity2 from "../../public/activities/activity2.jpeg"
import activity3 from "../../public/activities/activity3.jpeg"
import activity4 from "../../public/activities/activity4.jpeg"
import activity5 from "../../public/activities/activity5.jpg"

const images = [
    activity1,
    activity2,
    activity3,
    activity4,
    activity5,
]

const content = [
    {
        title: "Immersive Experience for 200 Couples",
        subTitle: "An exclusive, intimate concert at ITC Grand Goa Resort & Spa."
    },
    {
        title: "Musical Odyssey Across Genres",
        subTitle: "From Indian classical to Portuguese Fado, a diverse lineup awaits."
    },
    {
        title: "Artistic Fusion and Unique Collaborations",
        subTitle: "Witness innovative jugalbandis and live art creation."
    },
    {
        title: "Cultural Kaleidoscope of Goa",
        subTitle: "International and Indian artists unite in celebration of Goa's cultural tapestry."
    },
    {
        title: "Art with Impact",
        subTitle: "Auctioning Paresh Maity's painting to support the visually impaired community in Goa."
    }
];

const Component6 = () => {
    const [ currentData, setCurrentData ] = useState(0)
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

    const handleContentChange = (right) => {
        if (right) {
            if (currentData === content.length-1) {
                setCurrentData(0)
                setIndex(0);
                return
            } else {
                setCurrentData(prev => prev+1)
                setIndex(prev => prev+1)
                return
            }
        } 
        if (!right) {
            if (currentData === 0) {
                setCurrentData(content.length-1)
                setIndex(content.length-1)
                return
            } else {
                setCurrentData(prev => prev-1)
                setIndex(prev => prev-1)
                return
            }
        }
    }

  return (
    <div className='w-full h-[20rem] xl:h-[40rem] overflow-hidden relative flex items-center justify-center px-10'>
        {/* <Image
            src={cocktailImage}
            className='object-cover h-full w-full z-0 absolute top-0 left-0'
            alt='cocktail party'
        /> */}
        <div className="overflow-hidden shadow-inset-custom w-full z-0 absolute top-0 left-0 h-full" ref={carouselRef}>
            <div
                className="flex bg-black shadow-inset-custom items-start justify-start w-fit h-full transition-transform duration-1000 ease-in-out overflow-y-hidden overflow-x-scroll"
                style={{ transform: `translateX(-${index * width}px)` }}
            >
                {images.map((src, i) => (
                <Image
                    key={i}
                    src={src}
                    alt={`Slide ${i}`}
                    className="w-screen opacity-60 md:w-[calc(100vw-5.75rem)] min-h-full max-w-none shadow-inset-custom object-cover"
                />
                ))}
            </div>
        </div>
        <div className='h-[70%] flex flex-col z-10 items-center justify-between gap-4 xl:gap-10 xl:px-24'>
            <h1 className='text-pink drop-shadow-lg text-center max-w-[60rem] text-4xl xl:text-8xl font-sans font-extrabold'>
                {content[currentData].title}
            </h1>
            <h4 className='text-white drop-shadow-lg text-center max-w-[50rem] text-2xl xl:text-5xl font-sans font-bold text-wrap'>
                {content[currentData].subTitle}
            </h4>

            <div className='flex items-center justify-center gap-4'>
                <button 
                    onClick={() => handleContentChange(false)} 
                    className='text-2xl xl:text-6xl text-white focus:outline-none'
                >
                    <VscTriangleLeft />
                </button>
                <div className=' text-xl xl:text-5xl text-white'>|</div>
                <button 
                    onClick={() => handleContentChange(true)} 
                    className='text-2xl xl:text-6xl text-white focus:outline-none'
                >
                    <VscTriangleRight />
                </button>
            </div>
        </div>
    </div>
  )
}

export default Component6