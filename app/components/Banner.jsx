import React from 'react'
import bannerImg from "../../public/banner/heroBanner.png"
import Image from 'next/image'

const Banner = () => {
  return (
    <div className='w-full relative flex items-center justify-center overflow-hidden h-[calc(100vh-9.25rem)]'>
      <div className='relative w-full h-full '>
        <div className='shadow-inset-custom w-full h-full absolute left-0 top-0'></div>
        <Image
            src={bannerImg}
            className='w-full h-full -z-10'
            alt='banner'
        />
      </div>

        <button className='absolute bottom-[4.4rem] left-44 z-30 bg-[#E91AB0] px-8 py-3 text-4xl text-white font-sans font-bold'>
            BUY TICKETS
        </button>
    </div>
  )
}

export default Banner