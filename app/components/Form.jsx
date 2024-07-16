import React from 'react'
import { VscTriangleRight } from "react-icons/vsc";

const Form = () => {
  return (
    <div className='w-full bg-white py-10 px-10 md:px-20'>
        <p className='text-pink text-6xl font-sans font-extrabold'>
            HAVE QUESTIONS? CONTACT US!
        </p>
        
        <div className='mt-10 px-10 w-full flex flex-col xl:flex-row gap-4 md:gap-6'>
            <div className='w-full xl:w-1/2 h-fit flex flex-wrap items-center justify-center gap-6 gap-y-4'>
                <input
                    type='text'
                    placeholder='First Name'
                    className='w-full md:w-[calc(50%-0.75rem)] h-20 px-4 border-2 border-gray-300 placeholder:text-gray-500 text-2xl focus:outline-none'
                />
                <input
                    type='text'
                    placeholder='Last Name'
                    className='w-full md:w-[calc(50%-0.75rem)] h-20 px-4 border-2 border-gray-300 placeholder:text-gray-500 text-2xl focus:outline-none'
                />
                <input
                    type='text'
                    placeholder='Email'
                    className='w-full md:w-[calc(50%-0.75rem)] h-20 px-4 border-2 border-gray-300 placeholder:text-gray-500 text-2xl focus:outline-none'
                />
                <input
                    type='text'
                    placeholder='Phone'
                    className='w-full md:w-[calc(50%-0.75rem)] h-20 px-4 border-2 border-gray-300 placeholder:text-gray-500 text-2xl focus:outline-none'
                />
            </div>

            <div className='w-full xl:w-1/2'>
                <textarea
                    type="text"
                    placeholder='Message'
                    className='w-full h-44 p-4 border-2 border-gray-300 placeholder:text-gray-500 text-2xl focus:outline-none'
                />
                <div className='w-full mt-5 flex items-center justify-end'>
                    <button className='text-3xl tracking-tight font-bold font-sans text-aqua flex items-center justify-center'>
                        SUBMIT FORM <VscTriangleRight />
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Form