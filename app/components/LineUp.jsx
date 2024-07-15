'use client'

import React, { useState } from 'react'
import iraDubey from "../../public/guests/iraDubey.png"
import Image from 'next/image'
// import iraDubey from "../../public/guests/"

const eventGuests = [
    {
        date: "Friday",
        guests: [
            {
                name: "Ira Dubey",
                image: iraDubey
            },
            {
                name: "Kaushiki Chakraborty",
                image: iraDubey
            },
            {
                name: "Purbayan Chatterjee",
                image: iraDubey
            },
            {
                name: "Ustad Amjad Ali Khan",
                image: iraDubey
            },
            {
                name: "Paresh Maity",
                image: iraDubey
            },
            {
                name: "Shivam Bhardwaj",
                image: iraDubey
            }
        ]
    },
    {
        date: "Saturday",
        guests: [
            {
                name: "Beckaly Franks",
                image: iraDubey
            },
            {
                name: "Nadia Rebelo",
                image: iraDubey
            },
            {
                name: "Amaan Ali Bangash",
                image: iraDubey
            },
            {
                name: "Ayaan Ali Bangash",
                image: iraDubey
            },
            {
                name: "Ustad Shujaat Husain Khan",
                image: iraDubey
            },
            {
                name: "Rakesh Chaurasia",
                image: iraDubey
            },
            {
                name: "Gary Lawyer",
                image: iraDubey
            },
            {
                name: "Kaiya Maxfield",
                image: iraDubey
            }
        ]
    }
]


const LineUp = () => {
    const [ selectedDay, setSelectedDay ] = useState(0)

  return (
    <div className='w-full px-20 py-10'>
        <div className='w-full flex items-center justify-between'>
            <h1 className='text-pink font-sans text-6xl font-extrabold'>
            LINE UP
            </h1>
            
            <div className='pt-20 flex items-center justify-center gap-2'>
                {eventGuests.map((item, id) => (
                <button 
                    key={id}
                    onClick={() => setSelectedDay(id)}
                    className={` ${(selectedDay === id)? "bg-aqua" : "bg-off-white"} py-3 uppercase px-6 text-3xl font-bold font-sans text-black`}
                >
                    {item.date}
                </button>))}
            </div>
        </div>

        <div className='w-full p-20 flex items-center justify-start gap-[4rem] flex-wrap'>
            {eventGuests[selectedDay].guests.map((item, id) => (
                <div key={id} className='w-[calc(25%-3rem)] h-[26rem]'>
                    <div className='w-full mb-8 aspect-square relative border-black border-r-4 border-b-4'>
                        <div className='w-full absolute top-[-1rem] left-[-1rem] aspect-square overflow-hidden '>
                            <Image
                                src={item.image}
                                className='object-cover'
                                alt={item.name}
                            />
                        </div>
                    </div>

                    <p className='font-sans w-full pr-4 text-wrap tracking-tight text-5xl text-black font-extrabold'>
                        {item.name}
                    </p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default LineUp