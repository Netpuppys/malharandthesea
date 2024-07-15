'use client'

import React, { useState } from 'react'
import placeholder from "../../public/banner/heroBanner.png"
import Image from 'next/image'

const images = [
    placeholder,
    placeholder,
    placeholder,
    placeholder,
]

const Component4 = () => {
    const [ selectedImages, setSelectedImages ] = useState(images.slice(0, 4))
    const [ currentImage, setCurrentImage ] = useState(0)

  return (
    <div className='bg-white py-24 h-[40rem] flex w-full'>
        <div className='w-[50%] pl-[15%] flex flex-col items-start justify-center'>
            <p className='text-pink text-[4.5rem] leading-none font-sans font-extrabold'>
                13 ARTISTS, THE ARABIAN SEA & THE RAINS
            </p>

            <div className='h-full p-12 grid grid-cols-2 grid-rows-2 items-center justify-center gap-10'>
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
            </div>
        </div>
        <div className='w-[50%] h-full flex items-center justify-end'>
            <Image
                src={images[currentImage]}
                className='w-[80%]'
                alt='malhaar'
            />
        </div>
    </div>
  )
}

export default Component4