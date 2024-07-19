'use client'

import React, { useEffect, useState } from 'react'
import historicImage from "../../public/banner/historical.jpeg"
import mixologyImage from "../../public/banner/mixology.png"
import partyImage from "../../public/banner/concertSlide.jpg"
import VerticalAutoCarousel from '@/components/ui/VerticalAutoCarousel';
import ScrollText from '@/components/ui/ScrollText';
import ScrollText2 from '@/components/ui/ScrollText2';

const images = [
    historicImage,
    mixologyImage,
    partyImage,
]

const textArray = [
    "Discover the Hidden Gems of South Goa!",
    "Mixology Masterclass with Beckaly Franks",
    "After-Party: Dance into the Night"
]

const contentArray = [
    "Step out and explore charming local spots, from cozy cafes and vibrant markets to serene beaches. Experience the true essence of South Goa and make unforgettable memories!",
    "Join Hong Kong’s Queen of Mixology, Beckaly Franks, for an exclusive masterclass. Voted Altos Bartenders' Bartender in Asia’s 50 Best Bars 2023, Beckaly will share her expert tips and craft unforgettable cocktails. Secure your spot for this unique experience!",
    "Join the King of Blues, Jazz, and Pop, Gary Lawyer, and London's Queen of Pop, Kaiya Maxfield, for an unforgettable, high-energy after-party. Get ready to dance till you drop!"
]

const Component4 = () => {
    const [ text, setText ] = useState(0)
    const updateInterval = 10000

    useEffect(() => {
        const interval = setInterval(() => {
          setText((prevIndex) => (prevIndex + 1) % textArray.length);
        }, updateInterval);
    
        return () => clearInterval(interval);
      }, [textArray.length, updateInterval]);
  return (
    <div className='bg-white py-20 xl:h-[35rem] flex xl:flex-row flex-col items-center justify-center gap-10 w-full'>
        <div className='w-full xl:w-[50%] px-20 xl:px-28 flex flex-col items-start justify-center'>
            <div className='w-full h-[5rem] flex items-center justify-center xl:h-[12rem]'>
            <ScrollText
                textArray={textArray}
                updateInterval={updateInterval}
                styles={"text-pink max-w-full text-wrap text-[2.5rem] lg:text-[3.5rem] leading-none font-sans font-extrabold"}
            />
            <p className='text-pink lg:hidden max-w-full text-wrap text-[2.5rem] lg:text-[3.5rem] leading-none font-sans font-extrabold'>
                {textArray[text]}
            </p>
            </div>

            <div className='w-full hidden xl:block h-[12rem]'>
                <ScrollText2
                    textArray={contentArray}
                    updateInterval={updateInterval}
                    styles={"text-xl max-w-full text-wrap font-extralight hidden lg:block text-black text-opacity-75"}
                />
            </div>

        </div>
        <div className='w-full xl:w-[50%] relative h-full flex items-center justify-center xl:justify-end'>
            <div className='w-[80%] aspect-video'>
                <VerticalAutoCarousel
                    images={images}
                    updateInterval={updateInterval}
                />
            </div>

            {/* <div className='absolute xl:hidden top-0 px-5 left-0 w-full h-full flex items-center justify-between'>
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
            </div> */}
        </div>
    </div>
  )
}

export default Component4