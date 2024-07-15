import Image from 'next/image'
import React from 'react'
import banner from "../../public/banner/heroBanner.png"

const cardData = [
    {
        image: banner,
        title: "Luxurious Stay",
        desc: "Enjoy a world-class residential concert experience at the ITC Grand Goa Resort and Spa, known for its exceptional hospitality"
    },
    {
        image: banner,
        title: "Gourmet Cuisine",
        desc: "Savor gourmet meals and exquisite cocktails prepared by renowned chefs in a luxurious setting"
    },
    {
        image: banner,
        title: "Exclusive Musical Performances",
        desc: "Delight in soul-stirring performances, featuring Indian classical, Sufi Qawwali, rock, pop, and fado music"
    },
]

const Component3 = () => {
  return (
    <div className='flex flex-col bg-off-white items-center justify-center py-24 w-full'>
        <p className='mb-10 text-7xl font-sans text-pink font-extrabold'>
            A 5 STAR MUSICAL EVENT
        </p>

        <div className='flex items-center justify-center px-52'>
            {cardData.map((item, index) => (
                <div key={index} className='flex  flex-col relative items-center justify-start px-10 gap-3'>
                    <Image
                        src={item.image}
                        className='w-[18rem]'
                        alt={item.title}
                    />
                    <p className='text-pink text-3xl font-sans font-bold'>
                        {item.title}
                    </p>
                    <p className='text-black text-wrap text-2xl font-sans font-bold text-center'>
                        {item.desc}
                    </p>

                    {(index !== cardData.length -1) &&
                    <div className='bg-black absolute top-5 right-0 h-[70%] w-[2px] rounded-full'>.</div>}
                </div>
            ))
            }
        </div>
    </div>
  )
}

export default Component3