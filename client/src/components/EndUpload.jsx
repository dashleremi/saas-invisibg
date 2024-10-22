import React, { useContext } from 'react'
import { AiOutlineUpload } from "react-icons/ai";
import { AppContext } from '../context/AppContext';

const EndUpload = () => {

  const { removeBg } = useContext(AppContext)

  return (
    <div className='pb-16 mt-10 mx-4 lg:mx-44 py-20 xl:py-40'>
        <h1 className='font-primary text-center text-xl md:text-2xl lg:text-3xl'>Start Removing. Try Now</h1>

        <div className='flex items-center justify-evenly max-sm:flex-col-reverse mt-20 lg:px-44 sm:mt-30'>
                <input onChange={e => removeBg(e.target.files[0])} type="file"  accept='image/*' id='upload2' hidden/>
                <label className='inline-flex items-center gap-3 px-8 py-3.5 rounded-full cursor-pointer border border-t border-[#0000001d] bg-[#ffffff] m-auto hover:bg-[#47474726] transition-all duration-300' htmlFor="upload2">
                <AiOutlineUpload  size={20}/>
                <p className='text-[17px] font-secondary font-medium'>Upload Image</p>
                </label>
        </div>
    </div>
  )
}

export default EndUpload