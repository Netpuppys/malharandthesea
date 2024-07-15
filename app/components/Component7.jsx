import React from 'react'
import timeRunningOutImage from "../../public/banner/timeRunningOut.png"
import Image from 'next/image'

const description = "Immerse yourself in the magic of Malhar & The Sea. Secure your spot today and enjoy an unforgettable weekend of music, luxury, and adventure! Act now, and get ready to create memories that will last a lifetime! Buy your passes now and join the waitlist before it's too late!"

const Component7 = () => {
  return (
    <div className='w-full p-20 px-32 bg-off-white flex items-center justify-center gap-24'>
        <Image
            src={timeRunningOutImage}
            className={"w-[50%]"}
            alt={description}
        />

        <div className='w-[50%]'>
            <h1 className='text-pink uppercase mb-10 font-sans font-bold text-7xl'>
                Time&apos;s Running Out!
            </h1>
            <p className='text-xl font-extralight text-black text-opacity-70'>
                {description}
            </p>
        </div>
    </div>
  )
}

export default Component7