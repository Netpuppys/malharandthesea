'use client'

import React, { useState } from 'react'
import placeholder from "../../public/banner/heroBanner.png"
import Image from 'next/image'
import { VscTriangleLeft, VscTriangleRight } from "react-icons/vsc";

const images = [
    placeholder,
    placeholder,
    placeholder,
    placeholder,
]

const cardContent = [
    {
        title: "Mixology Masterclass with Beckaly Franks",
        content: "Join Hong Kong’s Queen of Mixology, Beckaly Franks, for an exclusive masterclass. Voted Altos Bartenders' Bartender in Asia’s 50 Best Bars 2023, Beckaly will share her expert tips and craft unforgettable cocktails. Secure your spot for this unique experience!"
    },
]

const Component4 = () => {
    const [ selectedImages, setSelectedImages ] = useState(images.slice(0, 4))
    const [ currentImage, setCurrentImage ] = useState(0)

  return (
    <div className='bg-white py-24 xl:h-[40rem] flex xl:flex-row flex-col items-center justify-center gap-20 w-full'>
        <div className='w-full xl:w-[50%] px-20 xl:px-40 flex flex-col items-start justify-center gap-10'>
            <p className='text-pink text-[3rem] xl:text-[4.5rem] leading-none font-sans font-extrabold'>
                {cardContent[0].title}
            </p>

            <p className='text-xl font-extralight hidden lg:block text-black text-opacity-75'>
                {cardContent[0].content}
            </p>

            {/* <div className='h-full p-12 grid grid-cols-2 grid-rows-2 items-center justify-center gap-10'>
            {selectedImages.map((item, index) => (
                <div 
                    key={index} 
                    onClick={() => setCurrentImage(index)}
                    className=' w-fit relative flex items-center overflow-hidden justify-center pb-2 pr-2'
                >
                    <Image
                        src={item}
                        className="max-w-[10rem] object-cover max-h-[100%]"
                        alt="malhaar"
                    />
                    <div className='border-black w-[80%] border-r-2 border-b-2 h-[80%] absolute bottom-0 right-0'>.</div>
                </div>
            ))}
            </div> */}

        </div>
        <div className='w-full xl:w-[50%] relative h-full flex items-center justify-center xl:justify-end'>
            <Image
                src={images[currentImage]}
                className='w-[80%]'
                alt='malhaar'
            />

            <div className='absolute xl:hidden top-0 px-5 left-0 w-full h-full flex items-center justify-between'>
                <button
                    className='text-3xl text-black'
                >
                    <VscTriangleLeft />
                </button>

                <button
                    className='text-3xl text-black'
                >
                    <VscTriangleRight />
                </button>
            </div>
        </div>
    </div>
  )
}

export default Component4