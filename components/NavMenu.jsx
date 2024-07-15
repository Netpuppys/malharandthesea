import Link from 'next/link';
import React from 'react'
import { IoMdClose } from "react-icons/io";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TfiYoutube } from "react-icons/tfi";

const socialLinks = [
    { logo: <FaFacebookF />, link: "/" },
    { logo: <FaXTwitter />, link: "/" },
    { logo: <FaInstagram />, link: "/" },
    { logo: <TfiYoutube />, link: "/" },
]

const navItems = [
    {
        name: "Home",
        link: "/"
    },
    {
        name: "Book",
        link: "/"
    },
    {
        name: "Contact",
        link: "/"
    },
]

const NavMenu = () => {
  return (
    <div className='bg-[#171717] animate-slide-in -z-10 flex flex-col items-center justify-between w-[18rem] h-[calc(100vh-9.25rem)] absolute bottom-0 right-[100%] py-8'>
        <div className='w-full h-fit flex flex-col items-start justify-start py-24 px-10 gap-4'>
            {navItems.map((item, id) => (
                <Link key={id} href={item.link}
                    className='text-5xl text-off-white font-sans hover:text-pink font-extrabold'
                >
                    {item.name}
                </Link>
            ))}
        </div>
        <div className='w-full flex items-center justify-center gap-4'>
            {socialLinks.map((item,id) => (
                <Link
                    key={id}
                    href={item.link}
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