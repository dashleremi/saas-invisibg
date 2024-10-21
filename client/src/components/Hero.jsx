import React from 'react'
import { AiOutlineUpload } from "react-icons/ai";

const Hero = () => {
  return (
    <div className='flex items-center justify-evenly max-sm:flex-col-reverse mt-20 lg:px-44 sm:mt-30'>
        {/* Left */}
        <div className='font-secondary mt-20'>
            <h1 className='text-6xl font-medium leading-tight'><span className='font-primary'>Picture Perfect</span><br />
            ... minus the background</h1>
            <p className='my-3 text-2xl text-gray-600'>Effortlessly isolate objects from any image with AI-powered background removal, <br />
            perfect for clean, professional visuals.</p>

            <div className='mt-14'>
                <input type="file"  name='' id='upload1' hidden/>
                <label className='inline-flex items-center gap-3 px-8 py-3.5 rounded-full cursor-pointer border border-t border-[#0000001d] bg-[#ffffff] m-auto hover:bg-[#47474726] transition-all duration-300' htmlFor="upload1">
                <AiOutlineUpload  size={20}/>
                <p className='text-[17px] font-medium'>Upload Image</p>
                </label>
            </div>
        </div>

        {/* Right */}
        <div className='w-full max-w-md mt-20'>
            <img src="hero-image.png" alt="hero" className='rounded-md' />
        </div>
    </div>
  )
}

export default Hero