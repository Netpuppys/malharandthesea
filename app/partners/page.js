'use client'

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

import Footer from "@/components/Footer";

import { MobileProvider } from "../utils/MobileContext";
import Form from "../components/Form";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import partner1 from "../../public/partners/air-india.png"
import partner2 from "../../public/partners/dbs.png"
import partner3 from "../../public/partners/divi.png"
import partner4 from "../../public/partners/fc.png"
import partner5 from "../../public/partners/volvo.png"

export default function Partners() {
  const eventsRef = useRef(null)
  const lineUpRef = useRef(null)
  const contactRef = useRef(null)
  const logoRef = useRef(null)

  const [ logoPadding, setLogoPadding ] = useState()
  const [ navBtnHover, setNavBtnHover ] = useState(false)

  useEffect(() => {
    console.log(navBtnHover)
  }, [navBtnHover])

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ top: 0, behavior: 'smooth' });
    }
  };

  const updateLogoPadding = () => {
    if (logoRef.current) {
      setLogoPadding(logoRef.current.offsetHeight - 148);
    }
  };

  useEffect(() => {
    // Set the initial logo padding
    updateLogoPadding();

    // Update logo padding on window resize
    window.addEventListener('resize', updateLogoPadding);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateLogoPadding);
    };
  }, []);

  return (
    <MobileProvider>
      <main className="min-h-screen no-scrollbar min-w-screen bg-white md:pr-[5.75rem]">
        <Sidebar
          eventsRef={eventsRef}
          lineUpRef={lineUpRef}
          contactRef={contactRef}
          scrollToSection={scrollToSection}
          setNavBtnHover={setNavBtnHover}
        />

        <div className="w-full no-scrollbar h-full">
          <Navbar 
            navBtnHover={navBtnHover}
            logoRef={logoRef}
            eventsRef={eventsRef}
            lineUpRef={lineUpRef}
            contactRef={contactRef}
            scrollToSection={scrollToSection}
          />

          <div className='w-full pt-[10rem] md:pt-0 relative flex items-center justify-center overflow-hidden'>
            <div className='relative w-full h-full flex items-center justify-center'>
              
              <div className='w-screen md:w-[calc(80vw-5.74rem)] my-20'>
                <p className='mb-10 text-5xl lg:text-7xl text-center font-sans text-pink font-extrabold'>
                    Partners
                </p>
                
                <div className="grid grid-cols-3 gap-4">
                    <div class="overflow-hidden rounded-lg bg-white shadow">
                      <div class="px-4 py-5 sm:p-6">
                        <Image src={partner1} />
                      </div>
                    </div>
                    <div class="overflow-hidden rounded-lg bg-white shadow">
                      <div class="px-4 py-5 sm:p-6">
                        <Image src={partner2} />
                      </div>
                    </div>
                    <div class="overflow-hidden rounded-lg bg-white shadow">
                      <div class="px-4 py-5 sm:p-6">
                        <Image src={partner3} />
                      </div>
                    </div>
                    <div class="overflow-hidden rounded-lg bg-white shadow">
                      <div class="px-4 py-5 sm:p-6">
                        <Image src={partner4} />
                      </div>
                    </div>
                    <div class="overflow-hidden rounded-lg bg-white shadow">
                      <div class="px-4 py-5 sm:p-6">
                        <Image src={partner5} />
                      </div>
                    </div>
                </div>  
              </div>
              
            </div>
          </div>

          <Form
            contactRef={contactRef}
          />
          <Footer />
        </div>
      </main>
    </MobileProvider>
  );
}
