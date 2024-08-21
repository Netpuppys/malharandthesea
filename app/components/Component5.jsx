"use client"

import React, { useState } from 'react'
import ticketBg from "../../public/backgrounds/ticketFilled.png"
import Image from 'next/image'
import { VscTriangleRight } from "react-icons/vsc";
import Link from 'next/link';

const eventTimeline = [
    {
        date: "Friday, August 30, 2024",
        events: [
            {
                time: "1:00 PM onwards",
                title: "Guest Check-In",
                details: ""
            },
            {
                time: "4:30 PM",
                title: "Make new friends over Hi-Tea",
                details: "Prolific stage and film actor Ira Dubey welcomes the guests to a Hi-Tea where the guests get to know each other over informal and lively conversations amidst the pitter patter of the rain on the sea."
            },
            {
                time: "5:00 PM – 6:30 PM",
                title: "Saaz Aur Awaaz",
                details: "Individual solos followed by innovative jugalbandi by Kaushiki & Purbayan. The perfect way to start the amazing music festival amidst the sound of the thunder, rain and the waves crashing on the beach."
            },
            {
                time: "7:00 PM – 8:30 PM",
                title: "Strokes and Strings",
                details: "The sarod maestro Ustad Amjad Ali Khan strikes the chords with various ragas. Paresh Maity’s canvas comes alive with the inspiration of the ragas, monsoon & the sea… a feast for the senses, a perfect jugalbandi of art and music."
            },
            {
                time: "8:30 PM",
                title: "Art with a Heart",
                details: "The masterpiece just created by Paresh Maity will be put up for a silent auction, and the proceeds shall be donated to NAB – National Association for the Blind."
            },
            {
                time: "8:30 PM onwards",
                title: "Jugalbandi of Flavours and Spirits",
                details: "Exotic coastal cuisine curated by the master chefs of ITC Grand Goa and paired with the choicest beverages."
            },
            {
                time: "10:00 PM onwards",
                title: "Sufi Qawwali Performance",
                details: "Shivam Bhardwaj is the next shining beacon in the world of Sufi music. He has sung for the legendary music director A R Rahman, Sting, Lucky Ali, and Salim-Suleiman. As this prodigal artist sets the night on fire, get ready to dance to a soulful and high energy performance of Sufi Qawwali."
            }
        ]
    },
    {
        date: "Saturday, August 31, 2024",
        events: [
            {
                time: "10:00 AM onwards",
                title: "Free Time",
                details: "Step out and discover the quaint local spots of South Goa or, head to an immersive cocktail masterclass with bartending maestro, Beckaly Franks"
            },
            {
                time: "12:00 PM – 1:00 PM",
                title: "Mixology MasterclassMixology Masterclass ~ With Beckaly Franks",
                details: "Flown in especially for Malhar & the Sea, Hong Kong’s Queen of Mixology, Beckaly was recently voted Altos Bartenders Bartender in Asia’s 50 BESTBARS 2023. Champion of diversity and slinger of awesome drinks, the Hawaii born, US bred and Hong Kong honed Beckaly has burned her path to the top of the cocktail scene in Asia."
            },
            {
                time: "1:00 PM – 2:30 PM",
                title: "Delectable lunch with Fado and other Portuguese/Goan music.",
                details: "ITC Hotels, known for their cuisines, promises to present the most stunning lunch created by their award winning chefs while the rain presents the background music. And what better combination than one of the finest Fadistas (Fado singer) of India, Nadia Rebelo who has mesmerized the world with her amazing rendition of Fado, traditional Portugese music."
            },
            {
                time: "5:00 PM – 6:30 PM",
                title: "Sundowner with Amaan Ali Bangash & Ayaan Ali Bangash.",
                details: "Catch the young sarod maestros & youth icons Amaan Ali Bangash & Ayaan Ali Bangash in a fresh new avatar. They will perform semi classical & folk music in their inimitable style. Their musical presentation, aptly titled, ‘Songs of the River”, will trace the musical journey of various rivers from the Himalayas to the Bay of Bengal in the east & Arabian Sea in the west."
            },
            {
                time: "7:00 PM – 8:30 PM",
                title: "Suron Ki Barsaat",
                details: "Ustad Shujaat Husain Khan is one of the most popular North Indian classical musicians of his generation. Son of Ustad Vilayat Khan, he keeps alive the rich heritage of his father. An amazing showman, he enthralls the audience with the Gayaki Ang on his sitar, which is imitative of the subtleties of the human voice. Rakesh Chaurasia is a child prodigy and the nephew of flute maestro Pt. Hariprasad Chaurasia. Rakesh is the most accomplished and sought-after flutist in the world over. And proving that talent, he has brought home two Grammy Awards this year."
            },
            {
                time: "8:30 PM – 10:00 PM",
                title: "Grand Finale Dinner",
                details: "The coolest bar With Beckaly Franks and the Grand Finale Dinner!"
            },
            {
                time: "10:00 PM onwards",
                title: "After-party… dance into the night",
                details: "A priceless, high-energy after-party with the King of Blues, Jazz and Pop, Gary Lawyer. He jams in with Kaiya Maxfield, the legendary Queen of Pop from London, flown in especially for this festival. Get ready to dance till you drop!"
            }
        ]
    },
    {
        date: "Sunday, September 1, 2024",
        events: [
            {
                time: "9:00 AM – 12:00 PM",
                title: "Breakfast and Checkout",
                details: "Brunch with local Goan cultural troupe"
            }
        ]
    }
]

const DetailsCard = ({title, details, hideCard }) => {

    return (
        <div onClick={hideCard} className='w-screen z-50 h-screen top-0 left-0 fixed p-6 flex items-center justify-center'>
            <div className='p-8 max-w-[30rem] rounded-3xl bg-white shadow-2xl z-50 bg-opacity-100'>
                <p className='text-pink text-center mb-5 w-full text-wrap font-sans font-bold text-5xl'>
                    {title}
                </p>
                <p className='text-black text-opacity-70 w-full font-light text-xl text-wrap'>
                    {details}
                </p>
            </div>
        </div>
    )
}


const Component5 = ({ eventsRef }) => {
    const [ selectedDay, setSelectedDay ] = useState(0)
    const [ showDetails, setShowDetails ] = useState(false)
    const [expandedEvent, setExpandedEvent] = useState(null);

    const handleReadMoreClick = (id) => {
        setExpandedEvent(id);
        setShowDetails(true);
    };

    const handleHideCard = (id) => {
        setExpandedEvent(null);
        setShowDetails(false);
    };

    const handleClick = () => {
        return `gtag_report_conversion(${process.env.NEXT_PUBLIC_BOOKMYSHOW})`
    }

  return (
    <div ref={eventsRef} id="events" className='w-full relative pt-60 md:pt-80 lg:pt-0 bg-[#F4F4F3] py-16'>
        {showDetails && 
        <DetailsCard 
            title={eventTimeline[selectedDay].events[expandedEvent].title}
            details={eventTimeline[selectedDay].events[expandedEvent].details}
            hideCard={handleHideCard}
        />}

        <div className='w-full absolute lg:relative top-0 flex justify-end px-10 sm:px-20 md:px-20 h-fit'>
            <Image
                src={ticketBg}
                className='lg:max-w-[50%] w-[100%]'
                alt='malhaar'
            />
        </div>
        <div className='w-full px-10 xl:px-32'>
            <p className='text-pink mb-4 text-6xl font-bold font-sans'>
                EVENTS
            </p>

            <div className='flex gap-1'>
                {[1,2,3].map((item, id) => (
                <button 
                    key={id}
                    onClick={() => setSelectedDay(id)}
                    className={` ${(selectedDay === id)? "bg-aqua" : "bg-off-white"} py-3 uppercase px-6 text-3xl font-bold font-sans text-black`}
                >
                    DAY {item}
                </button>))}
            </div>
        </div>

        <div className='w-full px-10 xl:px-32 py-10'>
            {eventTimeline[selectedDay].events.map((item, id) => (
                <div 
                    key={id} 
                    className={`w-full flex flex-col gap-4 xl:gap-0 relative xl:flex-row  xl:h-40 py-5 border-black border-b-2 ${id === eventTimeline[selectedDay].events.length-1 && "border-b-0"}`}
                >
                    <div className='flex flex-col xl:w-[15%] xl:border-r-2 border-black'>
                        <p className='text-pink xl:mb-3 text-2xl text-wrap pr-4 font-sans font-bold'>
                            {eventTimeline[selectedDay].date}
                        </p>
                        <p className='text-black text-opacity-70'>
                            {item.time}
                        </p>
                    </div>
                    <div className='flex xl:w-[70%] flex-col xl:flex-row border-black xl:border-r-2 items-center justify-between xl:px-10'>
                        <p className='text-black mb-3 xl:mb-0 w-full xl:w-[50%] font-sans font-bold text-4xl'>
                            {item.title}
                        </p>
                        <div className='text-black text-opacity-70 w-full xl:w-[50%] font-light text-base'>
                                {expandedEvent === id ? (
                                    <p>{item.details}</p>
                                ) : (
                                    <p className='line-clamp-4'>
                                        {item.details}
                                    </p>
                                )}
                                {item.details.length > 150 && expandedEvent !== id && (
                                    <button 
                                        className='text-aqua font-bold'
                                        onClick={() => handleReadMoreClick(id)}
                                    >
                                        Read More
                                    </button>
                                )}
                            </div>
                    </div>
                    <div className='xl:w-[15%] hidden lg:flex items-center justify-center'>
                        <a
                            href={process.env.NEXT_PUBLIC_BOOKMYSHOW}
                            target="blank"
                            onClick={handleClick}
                            className='text-3xl absolute top-10 right-0 xl:relative flex items-center justify-center uppercase font-bold text-aqua font-sans'
                        >
                            Book Now <VscTriangleRight />
                        </a>
                    </div>
                </div>
            ))
            }
        </div>
    </div>
  )
}

export default Component5
