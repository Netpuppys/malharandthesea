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
import kaiyaMaxfield from "../../public/guests/kaiyaMaxfield.jpg"
import { useMobile } from '../utils/MobileContext'

const eventGuests = [
    {
        date: "Friday",
        guests: [
            {
                name: "Ustad Amjad Ali Khan",
                image: ustadAmjad,
                size:"wide"
            },
            {
                name: "Paresh Maity",
                image: pareshMaity,
                size:"tall"
            },
            {
                name: "Kaushiki Chakraborty",
                image: Kaushiki,
                size:"tall"
            },
            {
                name: "Purbayan Chatterjee",
                image: purbayaChatterjee,
                size:"tall"
            },
            {
                name: "Tasawwur Qawwali Ensemble",
                image: ShivamBharadwaj,
                size:"tall"
            },
            {
                name: "Hosted By Ira Dubey",
                image: iraDubey,
                size:"wide"
            },
        ]
    },
    {
        date: "Saturday",
        guests: [
            {
                name: "Shujaat Husain Khan",
                image: ustadShujaat,
                size:"wide"
            },
            {
                name: "Beckaly Franks",
                image: BeckalyFranks,
                size:"tall"
            },
            {
                name: "Nadia Rebelo",
                image: nadiaRebelo,
                size:"tall"
            },
            {
                name: "Amaan & Ayaan Ali Bangash",
                image: amaanAndAyaan,
                size:"tall"
            }, 
            // {
            //     name: "Ayaan Ali Bangash",
            //     image: iraDubey
            // },
            {
                name: "Rakesh Chaurasia",
                image: rakeshChaurasia,
                size:"tall"
            },
            {
                name: "Kaiya Maxfield",
                image: kaiyaMaxfield,
                size:"big"
            },
            {
                name: "Gary Lawyer",
                image: garryLawyer,
                size:"wide"
            }
            
        ]
    }
]


const LineUp = ({ lineUpRef }) => {
    const { isMobile } = useMobile()
    const [ selectedDay, setSelectedDay ] = useState(0)
    const [ viewAll, setViewAll ] = useState(false)

    // const lineUpList = () => {
    //     if (isMobile) {
    //         return viewAll? 20 : 2
    //     } else {
    //         return 20
    //     }
    // }

  return (
    <div ref={lineUpRef} className='w-full px-10 py-10'>
        <div className='w-full flex flex-col xl:flex-row items-center justify-between'>
            <h1 className='text-pink font-sans text-6xl font-extrabold'>
            ARTIST LINE UP
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

        <div className='w-full grid-wrapper'>
            {eventGuests[selectedDay].guests.map((item, id) => (
                <div key={id} className={`relative flex-col ${item.size ? item.size : ""}`}>
                    {/* <div className='mb-2 aspect-square relative'>
                        <div className='w-full absolute top-0 left-0 aspect-square overflow-hidden '>
                            <Image
                                src={item.image}
                                className='object-cover w-full h-full'
                                alt={item.name}
                            />
                        </div>
                    </div> */}
                    <Image src={item.image}
                                className='object-cover w-full h-full'
                                alt={item.name}
                            />

                    <p className='absolute bottom-0 text-pink p-2 md:p-4 bg-black font-sans w-full text-wrap tracking-tight lg:text-5xl text-black font-extrabold'>
                        {item.name}
                    </p>
                </div>


            ))}
        </div>

        {/* <button 
            onClick={() => setViewAll(prev => !prev)}
            className={` ${(viewAll)? "bg-aqua" : "bg-off-white"} py-3 lg:hidden uppercase px-6 text-3xl font-bold font-sans text-black`}
        >
            {viewAll? "Collapse" : "View All"}
        </button> */}
    </div>
  )
}

export default LineUp