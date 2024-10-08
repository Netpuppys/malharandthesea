'use client'

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Banner from "./components/Banner";
import Footer from "@/components/Footer";
import Component2 from "./components/Component2";
import Component3 from "./components/Component3";
import Component4 from "./components/Component4";
import Component5 from "./components/Component5";
import Component6 from "./components/Component6";
import LineUp from "./components/LineUp";
import { MobileProvider } from "./utils/MobileContext";
import Form from "./components/Form";
import { useEffect, useRef, useState } from "react";

export default function Home() {
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

          <Banner 
            logoPadding={logoPadding}
          />
          <Component2 />
          <Component3 />
          <Component4 />
          <Component5
            eventsRef={eventsRef}
          />
          <Component6 />
          <LineUp 
            lineUpRef={lineUpRef}
          />
          <Form
            contactRef={contactRef}
          />
          <Footer />
        </div>
      </main>
    </MobileProvider>
  );
}
