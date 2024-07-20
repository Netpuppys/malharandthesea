"use client"

import React, { useState } from 'react'
import ticketBg from "../../public/backgrounds/ticketFilled.png"
import Image from 'next/image'
import { VscTriangleRight } from "react-icons/vsc";
import Link from 'next/link';

const eventTimeline = [
    {
        date: "Friday, August 30, 2024",
        events: [
            {
                time: "1:00 PM onwards",
                title: "Guest Check-In",
                details: ""
            },
            {
                time: "4:30 PM",
                title: "Hi-Tea",
                details: "Hosted by Ira Dubey. Meet and mingle over tea amidst the rain and sea."
            },
            {
                time: "5:00 PM – 6:30 PM",
                title: "Saaz Aur Awaaz",
                details: "Kaushiki Chakraborty and Purbayan Chatterjee. Solo performances followed by a unique jugalbandi."
            },
            {
                time: "7:00 PM – 8:30 PM",
                title: "Strokes and Strings",
                details: "Ustad Amjad Ali Khan and Paresh Maity. Sarod performance by Ustad Amjad Ali Khan with live painting by Paresh Maity."
            },
            {
                time: "8:30 PM",
                title: "Art with a Heart",
                details: "Silent auction of Paresh Maity’s artwork, with proceeds supporting NAB – National Association for the Blind."
            },
            {
                time: "8:30 PM onwards",
                title: "Jugalbandi of Flavours and Spirits",
                details: "Exotic coastal cuisine by ITC Grand Goa chefs paired with fine beverages."
            },
            {
                time: "10:00 PM onwards",
                title: "Sufi Qawwali Performance",
                details: "Shivam Bhardwaj. Energetic Sufi Qawwali performance to end the night."
            }
        ]
    },
    {
        date: "Saturday, August 31, 2024",
        events: [
            {
                time: "10:00 AM onwards",
                title: "Free Time",
                details: "Explore South Goa or join a cocktail masterclass with Beckaly Franks."
            },
            {
                time: "12:00 PM – 1:00 PM",
                title: "Mixology Masterclass",
                details: "Learn cocktail techniques from Beckaly Franks, Hong Kong’s top mixologist."
            },
            {
                time: "1:00 PM – 2:30 PM",
                title: "Lunch with Fado",
                details: "Enjoy lunch by ITC Hotels with live Fado music by Nadia Rebelo."
            },
            {
                time: "5:00 PM – 6:30 PM",
                title: "Sundowner",
                details: "Performance by Amaan Ali Bangash & Ayaan Ali Bangash."
            },
            {
                time: "7:00 PM – 8:30 PM",
                title: "Suron Ki Barsaat",
                details: "Ustad Shujaat Husain Khan & Rakesh Chaurasia perform solos and a duet."
            },
            {
                time: "8:30 PM – 10:00 PM",
                title: "Grand Finale Dinner",
                details: "Dinner with cocktails by Beckaly Franks."
            },
            {
                time: "10:00 PM onwards",
                title: "After-Party",
                details: "Dance with Gary Lawyer and Kaiya Maxfield."
            }
        ]
    },
    {
        date: "Sunday, September 1, 2024",
        events: [
            {
                time: "9:00 AM – 12:00 PM",
                title: "Brunch",
                details: "Enjoy brunch with a local Goan cultural performance."
            }
        ]
    }
]


const Component5 = ({ eventsRef }) => {
    const [ selectedDay, setSelectedDay ] = useState(0)

  return (
    <div ref={eventsRef} className='w-full relative pt-60 md:pt-80 lg:pt-0 bg-[#F4F4F3] py-16'>
        <div className='w-full absolute lg:relative top-0 flex justify-end px-10 sm:px-20 md:px-20 h-fit'>
            <Image
                src={ticketBg}
                className='lg:max-w-[50%] w-[100%]'
                alt='malhaar'
            />
        </div>
        <div className='w-full px-10 xl:px-32'>
            <p className='text-pink mb-4 text-6xl font-bold font-sans'>
                EVENTS
            </p>

            <div className='flex gap-1'>
                {[1,2,3].map((item, id) => (
                <button 
                    key={id}
                    onClick={() => setSelectedDay(id)}
                    className={` ${(selectedDay === id)? "bg-aqua" : "bg-off-white"} py-3 uppercase px-6 text-3xl font-bold font-sans text-black`}
                >
                    DAY {item}
                </button>))}
            </div>
        </div>

        <div className='w-full px-10 xl:px-32 py-10'>
            {eventTimeline[selectedDay].events.map((item, id) => (
                <div 
                    key={id} 
                    className={`w-full flex flex-col gap-4 xl:gap-0 relative xl:flex-row  xl:h-40 py-5 border-black border-b-2 ${id === eventTimeline[selectedDay].events.length-1 && "border-b-0"}`}
                >
                    <div className='flex flex-col xl:w-[15%] xl:border-r-2 border-black'>
                        <p className='text-pink xl:mb-3 text-2xl text-wrap pr-4 font-sans font-bold'>
                            {eventTimeline[selectedDay].date}
                        </p>
                        <p className='text-black text-opacity-70'>
                            {item.time}
                        </p>
                    </div>
                    <div className='flex xl:w-[70%] flex-col xl:flex-row border-black xl:border-r-2 items-center justify-between xl:px-10'>
                        <p className='text-black mb-3 xl:mb-0 w-full xl:w-[50%] font-sans font-bold text-4xl'>
                            {item.title}
                        </p>
                        <p className='text-black text-opacity-70 w-full xl:w-[50%] font-light text-lg line-clamp-3'>
                            {item.details}
                        </p>
                    </div>
                    <div className='xl:w-[15%] hidden lg:flex items-center justify-center'>
                        <Link 
                            href={process.env.NEXT_PUBLIC_BOOKMYSHOW}
                            target="blank"
                            className='text-3xl absolute top-10 right-0 xl:relative flex items-center justify-center uppercase font-bold text-aqua font-sans'
                        >
                            Book Now <VscTriangleRight />
                        </Link>
                    </div>
                </div>
            ))
            }
        </div>
    </div>
  )
}

export default Component5