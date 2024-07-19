import React from 'react'
import BannerCarousel from '@/components/ui/BannerCarousel'
import BannerSmall from '@/components/ui/BannerSmall'

const Banner = ({ logoPadding }) => {
  return (
    <div className='w-full pt-[10rem] md:pt-0 relative flex items-center justify-center overflow-hidden md:min-h-[800px] md:h-[calc(100vh-9.25rem)]'>
      <div className='relative w-full h-full flex items-center justify-center'>

        <div className='shadow-inset-custom bg-black w-full h-full absolute left-0 top-0'></div>
        <div style={{ paddingTop: logoPadding+"px" }} className='hidden md:block md:w-[20vw] h-full pr-2 bg-black'>
            <BannerSmall />
        </div>

        <div className='w-screen md:w-[calc(80vw-5.74rem)] h-full'>
          <BannerCarousel />
        </div>
      </div>
    </div>
  )
}

export default Banner