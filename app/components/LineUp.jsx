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
                image: ustadAmjad
            },
            {
                name: "Paresh Maity",
                image: pareshMaity
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
                name: "Tasawwur Qawwali Ensemble",
                image: ShivamBharadwaj
            },
            {
                name: "Hosted By Ira Dubey",
                image: iraDubey
            },
        ]
    },
    {
        date: "Saturday",
        guests: [
            {
                name: "Shujaat Husain Khan",
                image: ustadShujaat
            },
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
                name: "Rakesh Chaurasia",
                image: rakeshChaurasia
            },
            {
                name: "Gary Lawyer",
                image: garryLawyer
            },
            {
                name: "Kaiya Maxfield",
                image: kaiyaMaxfield
            }
        ]
    }
]


const LineUp = ({ lineUpRef }) => {
    const { isMobile } = useMobile()
    const [ selectedDay, setSelectedDay ] = useState(0)
    const [ viewAll, setViewAll ] = useState(false)

    const lineUpList = () => {
        if (isMobile) {
            return viewAll? 20 : 2
        } else {
            return 20
        }
    }

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

        <div className='w-full p-5 pt-10 flex items-center justify-center gap-8 lg:gap-[4rem] flex-wrap'>
            {eventGuests[selectedDay].guests.slice(0, lineUpList()).map((item, id) => (
                <div key={id} className='w-[100%] max-w-[18rem] h-[28rem] xl:h-[26rem] pl-5 lg:pl-0'>
                    <div className='w-full mb-8 aspect-square relative border-black border-r-4 border-b-4'>
                        <div className='w-full absolute top-[-1rem] left-[-1rem] aspect-square overflow-hidden '>
                            <Image
                                src={item.image}
                                className='object-cover w-full h-full'
                                alt={item.name}
                            />
                        </div>
                    </div>

                    <p className='font-sans  w-full pr-4 text-wrap tracking-tight text-5xl text-black font-extrabold'>
                        {item.name}
                    </p>
                </div>
            ))}
        </div>

        <button 
            onClick={() => setViewAll(prev => !prev)}
            className={` ${(viewAll)? "bg-aqua" : "bg-off-white"} py-3 lg:hidden uppercase px-6 text-3xl font-bold font-sans text-black`}
        >
            {viewAll? "Collapse" : "View All"}
        </button>
    </div>
  )
}

export default LineUp