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
import { useRef } from "react";

export default function Home() {
  const eventsRef = useRef(null)
  const lineUpRef = useRef(null)
  const contactRef = useRef(null)

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <MobileProvider>
      <main className="min-h-screen no-scrollbar min-w-screen bg-white md:pr-[5.75rem]">
        <Sidebar
          eventsRef={eventsRef}
          lineUpRef={lineUpRef}
          contactRef={contactRef}
          scrollToSection={scrollToSection}
        />

        <div className="w-full no-scrollbar h-full">
          <Navbar 
            eventsRef={eventsRef}
            lineUpRef={lineUpRef}
            contactRef={contactRef}
            scrollToSection={scrollToSection}
          />

          <Banner />
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
