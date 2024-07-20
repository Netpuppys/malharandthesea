'use client'

import Image from "next/image"
import malhaarLogo from "../public/logos/malhaarLogo.png"
import Link from "next/link"
import { useState } from "react"
import { IoMdClose } from "react-icons/io"
import { LuMenu } from "react-icons/lu"
import NavMenu from "./NavMenu"

const links = [
    {
        name: "Facebook",
        link: "https://www.facebook.com/profile.php?id=61561406462648"
    },
    {
        name: "Instagram",
        link: "https://www.instagram.com/showhouseindia/"
    },
]

const Navbar = ({ 
    logoRef,
    eventsRef,
    lineUpRef,
    contactRef,
    scrollToSection,
    navBtnHover
}) => {
    const [ isNavMenuVisible, setIsNavMenuVisible ] = useState(false)

  return (
    <div style={navBtnHover ? { paddingRight: "20rem" } : {}} className={`fixed md:relative h-[10rem] md:h-[9.25rem] z-50 w-full bg-custom-gradient md:pr-14 flex items-center justify-between`}>

        {isNavMenuVisible && 
            <NavMenu 
                eventsRef={eventsRef}
                lineUpRef={lineUpRef}
                contactRef={contactRef}
                scrollToSection={scrollToSection}
                setIsNavMenuVisible={setIsNavMenuVisible}
            />}

        <button
            className="h-full w-[7.875rem] md:w-fit overflow-visible"
        >
            <div ref={logoRef} className="h-full  w-full bg-white md:bg-black md:w-[20vw] md:h-fit pb-0 md:pr-2 md:pb-2">
                <Image
                    src={malhaarLogo}
                    className="object-fill md:w-full h-full md:max-h-[430px]"
                    alt="malhaar logo"
                /> 
            </div>
        </button>

        <div className="hidden md:flex items-center justify-center gap-6">
            {links.map((link, id) => (
                <Link key={id} target="blank" href={link.link} className="uppercase text-white text-3xl font-sans font-bold">
                    {link.name}
                </Link>
            ))}

            <Link 
                href={process.env.NEXT_PUBLIC_BOOKMYSHOW}
                className='z-30 bg-[#E91AB0] px-8 py-3 text-4xl text-white font-sans font-bold'
            >
                BUY TICKETS
            </Link>
        </div>

        <div className="md:hidden bg-transparent w-[calc(100%-7.875rem)] h-full">
            <div className="w-full h-1/2 border-l-2 border-white flex items-center justify-end pr-4">
                <button 
                    className=" md:hidden"
                    onClick={() => setIsNavMenuVisible(prev => !prev)}
                >
                    <p className="text-[#e8e8e8] z-20 text-5xl">
                        {isNavMenuVisible? <IoMdClose /> : <LuMenu />}
                    </p>
                </button>
            </div>
            <div className="w-full h-1/2 flex">
                <Link
                    href={process.env.NEXT_PUBLIC_BOOKMYSHOW}
                    target="blank"
                    className='w-full h-full bg-[#E91AB0] border-l-2 border-white px-8 py-3 text-4xl text-white font-sans font-bold flex items-center justify-center'
                >
                    BUY TICKETS
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar