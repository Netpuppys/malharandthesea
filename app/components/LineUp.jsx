'use client'

import React, { useState } from 'react'
import iraDubey from "../../public/guests/iraDubey.png"
import Image from 'next/image'
import Kaushiki from "../../public/guests/Kaushiki.jpeg"
import purbayaChatterjee from "../../public/guests/PurbayanChatterjee.jpeg"
import ustadAmjad from "../../public/guests/UstadAmjad.jpeg"
import pareshMaity from "../../public/guests/PareshMaity.jpeg"
import ShivamBharadwaj from "../../public/guests/ShivamBharadwaj.jpeg"
import BeckalyFranks from "../../public/guests/BeckalyFranks.jpeg"
import nadiaRebelo from "../../public/guests/NadiaRebelo.jpeg"
import ustadShujaat from "../../public/guests/ustadShujaat.jpeg"
import rakeshChaurasia from "../../public/guests/RakeshChaurasia.jpg"
import garryLawyer from "../../public/guests/GarryLawyer.jpeg"
import amaanAndAyaan from "../../public/guests/amaanAndAyaan.jpeg"

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
                image: Kaushiki
            },
            {
                name: "Purbayan Chatterjee",
                image: purbayaChatterjee
            },
            {
                name: "Ustad Amjad Ali Khan",
                image: ustadAmjad
            },
            {
                name: "Paresh Maity",
                image: pareshMaity
            },
            {
                name: "Shivam Bhardwaj",
                image: ShivamBharadwaj
            }
        ]
    },
    {
        date: "Saturday",
        guests: [
            {
                name: "Beckaly Franks",
                image: BeckalyFranks
            },
            {
                name: "Nadia Rebelo",
                image: nadiaRebelo
            },
            {
                name: "Amaan & Ayaan Ali Bangash",
                image: amaanAndAyaan
            }, 
            // {
            //     name: "Ayaan Ali Bangash",
            //     image: iraDubey
            // },
            {
                name: "Ustad Shujaat Husain Khan",
                image: ustadShujaat
            },
            {
                name: "Rakesh Chaurasia",
                image: rakeshChaurasia
            },
            {
                name: "Gary Lawyer",
                image: garryLawyer
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
    const [ viewAll, setViewAll ] = useState(false)

  return (
    <div className='w-full px-20 py-10'>
        <div className='w-full flex flex-col xl:flex-row items-center justify-between'>
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

        <div className='w-full p-5 pt-10 xl:p-20 flex items-center justify-center gap-4 lg:gap-[4rem] flex-wrap'>
            {eventGuests[selectedDay].guests.slice(0, viewAll? 20 : 2).map((item, id) => (
                <div key={id} className='w-[100%] lg:w-[calc(33%-2.7rem)] xl:w-[calc(25%-3rem)] h-[28rem] xl:h-[26rem]'>
                    <div className='w-full mb-8 aspect-square relative border-black border-r-4 border-b-4'>
                        <div className='w-full absolute top-[-1rem] left-[-1rem] aspect-square overflow-hidden '>
                            <Image
                                src={item.image}
                                className='object-cover w-full h-full'
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

        <button 
            onClick={() => setViewAll(prev => !prev)}
            className={` ${(viewAll)? "bg-aqua" : "bg-off-white"} py-3 uppercase px-6 text-3xl font-bold font-sans text-black`}
        >
            {viewAll? "Collapse" : "View All"}
        </button>
    </div>
  )
}

export default LineUp