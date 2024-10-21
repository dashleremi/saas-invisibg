import React from 'react'
import { testimonialsData } from '../assets/assets'

const Testimonials = () => {
  return (
    <div className='mt-10 mx-4 lg:mx-44 py-20 xl:py-40 font-secondary'>
        {/* title */}
        <h1 className='font-primary text-center text-xl md:text-2xl lg:text-3xl'>Client Reviews</h1>

        <div className='mt-24 grid grid-cols-2 md:grid-cols-3 gap-10 max-w-4xl mx-auto px-4 py-8'>
            {testimonialsData.map((item, index) => (
                <div className='bg-white rounded-md p-10 drop-shadow-md max-w-lg m-auto hover:scale-150 transition-all duration-700' key={index}>
                    <p className='text-4xl text-[#7c7c7c67]'>"</p>
                    <p className='text-lg text-[#000000d1]'>{item.text}</p>
                    <div className='flex items-center gap-3 mt-5'>
                        <img className='w-10 h-10 object-cover rounded-full' src={item.image} alt="" />
                        <div>
                            <p className='text-lg font-normal'>{item.author}</p>
                            <p className='text-md text-[#7d7d7d]'>{item.jobTitle}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Testimonials