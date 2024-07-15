"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import { VscTriangleLeft, VscTriangleRight } from "react-icons/vsc";
import cocktailImage from "../../public/backgrounds/cocktailImage.png"

const content = [
    {
        title: "Immersive Experience for 150 Couples",
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

    const handleContentChange = (right) => {
        if (right) {
            if (currentData === content.length-1) {
                setCurrentData(0)
                return
            } else {
                setCurrentData(prev => prev+1)
                return
            }
            return
        } 
        if (!right) {
            if (currentData === 0) {
                setCurrentData(content.length-1)
                return
            } else {
                setCurrentData(prev => prev-1)
                return
            }
            return
        }
    }

  return (
    <div className='w-full h-[40rem] overflow-hidden relative flex items-center justify-center px-10'>
        <Image
            src={cocktailImage}
            className='object-cover h-full w-full z-0 absolute top-0 left-0'
            alt='cocktail party'
        />
        <div className='h-[70%] flex flex-col z-10 items-center justify-between px-24'>
            <h1 className='text-pink text-center max-w-[60rem] text-8xl font-sans font-extrabold'>
                {content[currentData].title}
            </h1>
            <h4 className='text-white text-center max-w-[50rem] text-5xl font-sans font-bold text-wrap line-clamp-2'>
                {content[currentData].subTitle}
            </h4>

            <div className='flex items-center justify-center gap-4'>
                <button 
                    onClick={() => handleContentChange(false)} 
                    className='text-6xl text-white focus:outline-none'
                >
                    <VscTriangleLeft />
                </button>
                <div className='text-5xl text-white'>|</div>
                <button 
                    onClick={() => handleContentChange(true)} 
                    className='text-6xl text-white focus:outline-none'
                >
                    <VscTriangleRight />
                </button>
            </div>
        </div>
    </div>
  )
}

export default Component6