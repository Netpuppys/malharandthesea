'use client'

import Image from "next/image"
import pinkBg from "../public/backgrounds/pinkDotBg.png"
import subscribeBtn from "../public/sidebar/subscribeBtn.png"
import { LuMenu } from "react-icons/lu";
import { useState } from "react";
import NavMenu from "./NavMenu";
import { IoMdClose } from "react-icons/io";

const Sidebar = () => {
    const [ isNavMenuVisible, setIsNavMenuVisible ] = useState(false)

  return (
    <div className="w-[5.75rem] h-screen fixed top-0 overflow-visible right-0 z-50 bg-off-white">

        {isNavMenuVisible && <NavMenu />}

        <button className="group relative overflow-visible w-full h-[9.25rem] max-h-[9.25rem]">
            <div
                onClick={() => setIsNavMenuVisible(prev => !prev)}
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

        <div className="w-full h-[calc(100%-9.25rem)] bg-off-white flex z-50 items-center justify-center">
            <button className="w-8 h-fit">
                <Image
                    src={subscribeBtn}
                    className="w-full h-full"
                    alt="Main menu"
                />
            </button>
        </div>
    </div>
  )
}

export default Sidebar