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
        link: "/"
    },
    {
        name: "Instagram",
        link: "/"
    },
]

const Navbar = () => {
    const [ isNavMenuVisible, setIsNavMenuVisible ] = useState(false)

  return (
    <div className={`h-[5rem] md:h-[9.25rem] z-50 relative w-full bg-custom-gradient pr-4 md:pr-14 flex items-center justify-between`}>

        {isNavMenuVisible && <NavMenu />}

        <button
            className="h-full overflow-visible bg-black pr-2 lg:pr-6"
        >
            <Image
                src={malhaarLogo}
                className="object-contain w-[26vw] lg:w-[19vw]"
                alt="malhaar logo"
            /> 
        </button>

        <div className="hidden md:flex items-center justify-center gap-6">
            {links.map((link, id) => (
                <Link key={id} href={link.link} className="uppercase text-white text-3xl font-sans font-bold">
                    {link.name}
                </Link>
            ))}

            <button 
                className="uppercase ml-4 font-sans text-3xl text-white font-bold py-3 px-6 bg-aqua"
            >
                TICKETS
            </button>
        </div>

        <button 
            className=" md:hidden"
            onClick={() => setIsNavMenuVisible(prev => !prev)}
        >
            <p className="text-[#e8e8e8] z-20 text-5xl">
                {isNavMenuVisible? <IoMdClose /> : <LuMenu />}
            </p>
        </button>
    </div>
  )
}

export default Navbar