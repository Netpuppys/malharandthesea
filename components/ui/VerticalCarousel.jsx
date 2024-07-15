'use client'

import Image from 'next/image'
import React, { useState } from 'react'

const VerticalCarousel = ({ images }) => {
    const [ selectedImages, setSelectedImages ] = useState(images.slice(0, 3))
    const [ currentImage, setCurrentImage ] = useState(0)

  return (
    <div className='w-full h-[20rem] flex items-center gap-6'>
        <div className='h-full flex flex-col items-center justify-between gap-2'>
            {selectedImages.map((item, index) => (
            <div 
                key={index} 
                onClick={() => setCurrentImage(index)}
                className='h-[33%] relative flex items-center overflow-hidden justify-center pb-3 pr-3'
            >
                <Image
                    src={item}
                    className="max-w-[10rem] object-cover max-h-[100%]"
                    alt="malhaar"
                />
                <div className='border-black w-[80%] border-r-2 border-b-2 h-[80%] absolute bottom-0 right-0'>.</div>
                {/* <div className='bg-black h-[80%] w-1 absolute bottom-0 right-0'>.</div> */}
            </div>))}
        </div>
        <div className='w-full h-full bg-black overflow-hidden'>
                <Image
                    src={images[currentImage]}
                    className='object-cover min-h-full min-w-full'
                    alt='malhaar'
                />
        </div>
    </div>
  )
}

export default VerticalCarousel