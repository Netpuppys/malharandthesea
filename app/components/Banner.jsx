import React from 'react'
import BannerCarousel from '@/components/ui/BannerCarousel'

const Banner = () => {
  return (
    <div className='w-full pt-[10rem] md:pt-0 relative flex items-center justify-center overflow-hidden h-[calc(100vh-9.25rem)]'>
      <div className='relative w-full h-full'>
        <div className='shadow-inset-custom w-full h-full absolute left-0 top-0'></div>
        {/* <Image
            src={bannerImg}
            className='w-full h-full -z-10'
            alt='banner'
        /> */}
        <BannerCarousel />
      </div>
    </div>
  )
}

export default Banner