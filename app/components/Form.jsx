'use client'

import React, { useRef, useState } from 'react'
import { VscTriangleRight } from "react-icons/vsc";
import emailjs from '@emailjs/browser';

const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID
const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID
const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY

const Form = ({ contactRef }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        message: ''
      });
      const [ isLoader, setIsLoader ] = useState(false)

      const formRef = useRef()
    
      const handleChange = (key, value) => {
        setFormData(prev => ({
          ...prev,
          [key]: value
        }));
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoader(true)
        const { firstName, lastName, phoneNumber, email, message } = formData;
        
        // const name = firstName + " " + lastName;

        const templateParams = {
            firstName,
            lastName,
            phoneNumber,
            email,
            message
        };
    
        emailjs
            .send(serviceId, templateId, templateParams, {
            publicKey: publicKey,
          })

          .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            setIsLoader(false)
            alert('Message sent successfully!');
            setFormData({
              firstName: '',
              lastName: '',
              phoneNumber: '',
              email: '',
              message: ''
            });
          })
          .catch((error) => {
            console.log('FAILED...', error);
            setIsLoader(false)
            alert('Message failed to send.');
          });
      };
    

  return (
    <div ref={contactRef} className='w-full bg-white py-10 px-10 md:px-20'>
        <p className='text-pink text-6xl font-sans font-extrabold'>
            HAVE QUESTIONS? CONTACT US!
        </p>
        
        <form ref={formRef} onSubmit={handleSubmit} className='mt-10 px-5 w-full flex flex-col xl:flex-row gap-4 md:gap-6'>
            <div className='w-full xl:w-1/2 h-fit flex flex-wrap items-center justify-center gap-6 gap-y-4'>
                <input
                    type='text'
                    placeholder='First Name'
                    value={formData.firstName}
                    onChange={e => handleChange("firstName", e.target.value)}
                    required
                    className='w-full md:w-[calc(50%-0.75rem)] h-20 px-4 border-2 border-gray-300 placeholder:text-gray-500 text-2xl focus:outline-none'
                />
                <input
                    type='text'
                    placeholder='Last Name'
                    value={formData.lastName}
                    onChange={e => handleChange("lastName", e.target.value)}
                    required
                    className='w-full md:w-[calc(50%-0.75rem)] h-20 px-4 border-2 border-gray-300 placeholder:text-gray-500 text-2xl focus:outline-none'
                />
                <input
                    type='email'
                    placeholder='Email'
                    value={formData.email}
                    onChange={e => handleChange("email", e.target.value)}
                    required
                    className='w-full md:w-[calc(50%-0.75rem)] h-20 px-4 border-2 border-gray-300 placeholder:text-gray-500 text-2xl focus:outline-none'
                />
                <input
                    type='number'
                    placeholder='Phone'
                    value={formData.phoneNumber}
                    onChange={e => handleChange("phoneNumber", e.target.value)}
                    required
                    className='w-full md:w-[calc(50%-0.75rem)] h-20 px-4 border-2 appearance-none border-gray-300 placeholder:text-gray-500 text-2xl focus:outline-none'
                />
            </div>

            <div className='w-full xl:w-1/2'>
                <textarea
                    type="text"
                    placeholder='Message'
                    value={formData.message}
                    onChange={e => handleChange("message", e.target.value)}
                    required
                    className='w-full h-44 p-4 border-2 border-gray-300 placeholder:text-gray-500 text-2xl focus:outline-none'
                />
                <div className='w-full mt-5 flex items-center justify-start lg:justify-end'>
                    <button 
                        className='text-3xl tracking-tight font-bold font-sans text-aqua flex items-center justify-center'
                    >
                        {!isLoader?
                        <>
                        SUBMIT FORM <VscTriangleRight />
                        </> :
                        <div class='h-full flex space-x-2 justify-center items-center bg-white'>
                            <span class='sr-only'>Loading...</span>
                            <div class='h-4 w-4 bg-aqua rounded-full animate-bounce [animation-delay:-0.3s]'></div>
                            <div class='h-4 w-4 bg-pink rounded-full animate-bounce [animation-delay:-0.15s]'></div>
                            <div class='h-4 w-4 bg-aqua rounded-full animate-bounce'></div>
                        </div>}
                    </button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Form