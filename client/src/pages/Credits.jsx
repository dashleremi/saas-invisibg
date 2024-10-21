import React from 'react'
import { plans } from '../assets/assets'

const Credits = () => {
  return (
    <div className='min-h-[80vh] text-center pt-14 mb-10'>
        <button className='border border-gray-400 px-10 py-2 rounded-full mb-6 font-secondary text-xl'>Plans</button>
        <h1 className='mt-10 font-primary text-center text-xl md:text-2xl lg:text-3xl mb-6'>Choose a plan right for you:</h1>
        <div className='flex flex-wrap justify-center gap-10 text-left'>
          {plans.map((items, index) => (
            <div className='mt-28 font-secondary bg-white drop-shadow-sm border rounded-md py-20 px-16 text-[#535353] hover:scale-150 transition-all duration-500' key={index}>
                <img width={50} src="web-icon.png" alt="" />
                <p className='mt-3 font-semibold text-xl'>{items.id}</p>
                <p className='text-lg'>{items.description}</p>
                <p className='mt-6'>
                  <span className='text-3xl font-medium text-black'>
                    ${items.price}
                  </span>/ {items.credits} credits
                </p>
                <button className='w-full bg-[#2a2a2a] text-white mt-8 text-xl rounded-md py-3 min-w-25 hover:bg-[#00000059]'>Purchase</button>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Credits