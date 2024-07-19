'use client'

import Link from 'next/link';
import React from 'react'
// import { IoMdClose } from "react-icons/io";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import { TfiYoutube } from "react-icons/tfi";
import { FaSquareThreads } from "react-icons/fa6";

const socialLinks = [
    { logo: <FaFacebookF />, link: "https://www.facebook.com/profile.php?id=61561406462648" },
    { logo: <FaSquareThreads />, link: "https://www.threads.net/@showhouseindia?xmt=AQGzgo8oWmk5WLHxlIjHmc_PMHGUs4TW4y8g9IMcDjjm2-0" },
    { logo: <FaInstagram />, link: "https://www.instagram.com/showhouseindia/" },
    // { logo: <TfiYoutube />, link: "/" },
]

const NavMenu = ({
    eventsRef,
    lineUpRef,
    contactRef,
    scrollToSection,
    setIsNavMenuVisible
}) => {
    const navItems = [
        {
            name: "Events",
            link: eventsRef
        },
        {
            name: "Artists Line Up",
            link: lineUpRef
        },
        {
            name: "Contact",
            link: contactRef
        },
    ]

    const handleClick = (ref) => {
        console.log("hi")
        setIsNavMenuVisible(false)
        scrollToSection(ref)
    }

  return (
    <div className='bg-[#171717] w-[18rem]  h-[calc(100vh-5rem)] md:animate-slide-in z-[99] md:-z-10 flex flex-col items-center justify-between md:h-[calc(100vh-9.25rem)] absolute top-[100%] md:top-[9.25rem] right-0 md:bottom-0 md:right-[100%] py-8'>
        <div className='w-full h-fit flex flex-col items-start justify-start py-24 px-10 gap-4'>
            {navItems.map((item, id) => (
                <button 
                    key={id}
                    onClick={() => handleClick(item.link)}
                    className='text-3xl text-off-white font-sans hover:text-pink font-extrabold'
                >
                    {item.name}
                </button>
            ))}
        </div>
        <div className='w-full pb-40 md:pb-0 flex items-center justify-center gap-4'>
            {socialLinks.map((item, id) => (
                <Link
                    key={id}
                    href={item.link}
                    target='blank'
                    className='text-pink text-2xl text-opacity-60 hover:text-opacity-100' 
                >
                    {item.logo}
                </Link>
            ))}
        </div>
    </div>
  )
}

export default NavMenu