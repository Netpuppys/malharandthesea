'use client'

import Image from "next/image"
import pinkBg from "../public/backgrounds/pinkDotBg.png"
import { LuMenu } from "react-icons/lu";
import { useState } from "react";
import NavMenu from "./NavMenu";
import { IoMdClose } from "react-icons/io";
import bmsBtn from "../public/sidebar/bmsBtn.png"

const Sidebar = () => {
    const [ isNavMenuVisible, setIsNavMenuVisible ] = useState(false)

  return (
    <div className="w-[5.75rem] hidden md:block h-screen fixed top-0 overflow-visible right-0 z-[99] bg-off-white">

        {isNavMenuVisible && <NavMenu />}
        {console.log(isNavMenuVisible)}

        <button 
            onClick={() => setIsNavMenuVisible(prev => !prev)}
            className="group relative overflow-visible w-full h-[9.25rem] max-h-[9.25rem]"
        >
            <div
                className="relative z-40 w-full h-full flex items-center justify-center"
            >
                <Image
                    src={pinkBg}
                    className="w-full absolute z-10 top-0 left-0 h-full"
                    alt="Main menu"
                />
                <p className="text-[#e8e8e8] z-20 text-5xl">
                    {isNavMenuVisible? <IoMdClose /> : <LuMenu />}
                </p>
            </div>
            <div className={`absolute z-20 animate-slide-in ${isNavMenuVisible? "flex" : "hidden" }  group-hover:flex h-full w-[18rem] max-w-none top-0 right-[100%]`}>
                <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                        src={pinkBg}
                        className="absolute w-full h-full top-0 left-0 z-10"
                        alt="menu hover btn"
                    />
                    <p className="text-[#e8e8e8] text-3xl z-20 font-sans">
                        MAIN MENU
                    </p>
                </div>
            </div>
        </button>

        <div className="w-full h-[calc(100%-9.25rem)] bg-white flex z-50 items-center justify-center">
            <button className="w-12 h-fit">
                <Image
                    src={bmsBtn}
                    className="w-full h-full"
                    alt="Main menu"
                />
            </button>
        </div>
    </div>
  )
}

export default Sidebar