import React from 'react'
import pinkDotBg from "../public/backgrounds/pinkDotBg.png"
import Image from 'next/image'
import { IoMdArrowDropright } from "react-icons/io";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TfiYoutube } from "react-icons/tfi";
import Link from 'next/link';

const socialLinks = [
    { logo: <FaFacebookF />, link: "/" },
    { logo: <FaXTwitter />, link: "/" },
    { logo: <FaInstagram />, link: "/" },
    { logo: <TfiYoutube />, link: "/" },
]

const Footer = () => {
    const mobile = "9830912967"
    const email = "mrinalini@showhouseindia.com"

  return (
    <div className='relative font-sans w-full overflow-hidden p-10 lg:p-20 flex items-center  lg:h-[20rem] justify-center'>
        <div className='absolute z-0 flex top-0 left-0 overflow-hidden w-full h-full'>
            <Image
                src={pinkDotBg}
                className='h-full'
            />
            <Image
                src={pinkDotBg}
                className='h-full'
            />
            <Image
                src={pinkDotBg}
                className='h-full'
            />
            <Image
                src={pinkDotBg}
                className='h-full'
            />
        </div>
        
        <div className='w-full z-10 flex items-center justify-between flex-col lg:flex-row gap-10'>
            <div className='w-fit'>
                <p className='font-sans mb-4 text-4xl lg:text-6xl text-white uppercase font-extrabold'>
                    reserve your slot before its too late !
                </p>

                <div className='max-w-[40rem] border-b-2 mb-4 border-black flex items-center justify-center'>
                    <input
                        type='text'
                        className='bg-transparent py-2 w-full text-3xl placeholder:text-black hover:placeholder:text-white text-white uppercase font-bold focus:outline-none'
                        placeholder='enter your email'
                    />
                    <span className='w-[2px] bg-black h-[80%]'>.</span>
                    <button className='text-black flex px-3 lg:px-10 py-2 items-center justify-center bg-transparent text-3xl uppercase font-bold focus:outline-none'>
                        Submit <IoMdArrowDropright />
                    </button>
                </div>

                <div className='flex flex-col lg:flex-row lg:items-center justify-start lg:gap-10'>
                    <p className='font-sans text-black text-2xl sm:text-3xl font-bold'>
                        Contact Us - <span className='text-off-white'>{mobile}</span>
                    </p>
                    <p className='font-sans text-black text-2xl sm:text-3xl font-bold'>
                        Email - <span className='text-off-white'>{email}</span>
                    </p>
                </div>
            </div>

            <div className='w-full md:w-fit'>
                <p className='text-black text-3xl font-bold mb-4'>
                    FOLLOW US
                </p>
                <div className='flex w-full items-center justify-start md:justify-center gap-3'>
                    {socialLinks.map((item, id) => (
                        <Link href={item.link} key={id} className='bg-black hover:bg-aqua text-white text-3xl w-[3.75rem] aspect-square flex items-center justify-center'>
                            {item.logo}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer