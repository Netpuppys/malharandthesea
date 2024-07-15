'use client'

import Image from "next/image"
import malhaarLogo from "../public/logos/malhaarLogo.png"
import Link from "next/link"
import { useState } from "react"
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
    <div className="h-[9.25rem] w-full bg-white px-14 flex items-center justify-between">
        <button
            className=""
        >
            <Image
                src={malhaarLogo}
                className=""
                alt="malhaar logo"
            /> 
        </button>

        <div className="flex items-center justify-center gap-6">
            {links.map((link, id) => (
                <Link key={id} href={link.link} className="uppercase text-black text-3xl font-sans font-bold">
                    {link.name}
                </Link>
            ))}

            <button 
                className="uppercase ml-4 font-sans text-3xl text-black font-bold py-3 px-6 bg-aqua"
            >
                TICKETS
            </button>
        </div>

        
    </div>
  )
}

export default Navbar