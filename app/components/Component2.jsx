import React from 'react'
import placeholder from "../../public/banner/heroBanner.png"
import VerticalCarousel from '@/components/ui/VerticalCarousel'
import itcLogo from "../../public/logos/itcLogo.png"
import showhouseLogo from "../../public/logos/showhouseLogo.png"
import nabLogo from "../../public/logos/nabLogo.png"
import Image from 'next/image'

const images = [
    itcLogo,
    nabLogo,
    showhouseLogo
]

const desc1 = "An average music concert typically sees thousands of attendees jostling for space, sitting and standing in rows, with the artists performing at a distance. These concerts last a couple of hours with minimal interaction between the artists and the audience. Attendees often face long queues for food and beverages, and the event ends as abruptly as it started, leaving you more tired than soothed by the music."
const desc2 = "Malhar & the Sea is none of the above."
const desc3 = "This immersive, interactive, and exclusive music concert will take place at the ITC Grand Goa Resort and Spa on 30th and 31st August 2024. It’s a one-of-a-kind residential concert featuring icons of Indian music, ranging from Indian classical and Sufi Qawwali to Rock, Pop, and Fado. The festival will center around Jugalbandis, where artists will perform soulful solos and stimulating duets. This intimate concert will host only 150 couples, allowing them to immerse themselves in music while enjoying the luxurious hospitality of the ITC Grand Goa and cuisine prepared by world-renowned chefs."
const desc4 = "In a unique experience, attendees will have the chance to see artists up close, even before and after performances, as they mingle over meals and cocktails with internationally renowned mixologist Beckaly Franks, who is being specially brought in for this festival."

const Component2 = () => {
  return (
    <div className='w-full max-h-fit relative bg-white flex flex-col-reverse pt-[15rem] py-10 lg:py-0 lg:flex-row'>
        <div className='w-full lg:w-[50%] lg:h-[60rem]'>
            {/* top */}
            <div className='bg-aqua absolute top-0 left-0 lg:relative font-sans w-full h-[15rem] flex items-center justify-center gap-5 py-20 px-10'>
                <p className='text-white text-nowrap text-3xl xl:text-5xl'>
                    30-31 AUGUST, 2024
                </p>
                <span className='text-7xl text-black'>|</span>
                <p className='text-black text-nowrap text-2xl xl:text-4xl font-bold'>
                    ITC Grand Goa & Resort
                </p>
            </div>

            <div className='w-full px-5 md:px-10 lg:h-[calc(100%-15rem)] flex flex-col items-center justify-center gap-14'>
                {/* <VerticalCarousel images={images} /> */}
                <iframe 
                    // width="560" 
                    // height="315" 
                    className='w-full aspect-video hidden lg:block'
                    src="https://www.youtube.com/embed/H1CIBqDeWQ0?si=lx9pxBGex6JcNJ6v" 
                    // title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen
                ></iframe>
                <div className='w-full flex flex-col items-center justify-center'>
                    <p className='uppercase text-xl text-black leading-none font-light font-sans text-center'>
                        in association <br/> with
                    </p>

                    <div className='flex items-center md:flex-col lg:flex-row justify-center gap-4 pr-10 md:pr-0 lg:pr-10'>
                        {images.map((item, id) => (
                            <Image
                                key={id}
                                src={item}
                                className='h-14 md:h-24 object-contain'
                                alt='itc nab showhouse'
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>

        <div className='w-full lg:w-[50%] h-full pt-20 pl-10 pr-7 pb-5'>
            <p className='text-wrap mb-5 text-[3rem] xl:text-[5rem] leading-[3rem] xl:leading-[5rem] text text-pink font-sans font-bold'>
                MUSIC BEYOND <br/>BARRIERS: MALHAR & <br/>THE SEA
            </p>
            <p className='text-lg text-black font-extralight tracking-tight'>
                {desc1} 
                <br /> 
                <br /> 
                {desc2} 
                <br /> 
                <br /> 
                {desc3} 
                <br /> 
                <br /> 
                {desc4}
            </p>
        </div>
    </div>
  )
}

export default Component2