import React from 'react'
import stay1 from "../../public/featured/stay1.jpeg"
import stay2 from "../../public/featured/stay2.jpeg"
import cuisine1 from "../../public/featured/cuisine1.jpeg"
import cuisine2 from "../../public/featured/cuisine2.jpeg"
import music1 from "../../public/featured/music1.jpeg"
import music2 from "../../public/featured/music2.jpeg"
import MiniCarousel from '@/components/ui/MiniCarousel'

const cardData = [
    {
        image: [ stay1, stay2 ],
        title: "Luxurious Stay",
        desc: "Enjoy a world-class residential concert experience at the ITC Grand Goa Resort and Spa, known for its exceptional hospitality"
    },
    {
        image: [ cuisine1, cuisine2 ],
        title: "Gourmet Cuisine",
        desc: "Savor gourmet meals and exquisite cocktails prepared by renowned chefs in a luxurious setting"
    },
    {
        image: [ music1, music2 ],
        title: "Exclusive Musical Performances",
        desc: "Delight in soul-stirring performances, featuring Indian classical, Sufi Qawwali, rock, pop, and fado music"
    },
]

const Component3 = () => {
  return (
    <div className='flex flex-col bg-off-white items-center justify-center py-24 w-full'>
        <p className='mb-10 text-5xl lg:text-7xl text-center lg:text-left font-sans text-pink font-extrabold'>
            A 5 STAR MUSICAL EVENT
        </p>

        <div className='flex flex-col lg:flex-row items-center gap-10 lg:gap-0 justify-center px-10 xl:px-48'>
            {cardData.map((item, index) => (
                <div key={index} className='flex lg:h-[30rem] xl:h-[26rem] flex-col relative items-center justify-start px-10 gap-5 lg:gap-3'>
                    {/* <Image
                        src={item.image}
                        className='w-full lg:w-[18rem]'
                        alt={item.title}
                    /> */}
                    <div className='w-[18rem] aspect-video'>
                        <MiniCarousel
                            images={item.image}
                        />
                    </div>
                    
                    <p className='text-pink text-4xl lg:text-2xl xl:text-3xl font-sans font-bold text-center'>
                        {item.title}
                    </p>
                    <p className='text-black px-10 lg:px-0 text-wrap text-xl xl:text-2xl text-center'>
                        {item.desc}
                    </p>

                    {(index !== cardData.length -1) &&
                    <div className='bg-black hidden lg:block absolute top-5 right-0 h-[70%] w-[2px] rounded-full'>.</div>}
                </div>
            ))
            }
        </div>
    </div>
  )
}

export default Component3