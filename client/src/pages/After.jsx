import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const After = () => {

  const { resultImage, image } = useContext(AppContext)

  return (
    <div className='mx-4 my-3 lg:max-44 mt-14 min-h-[75vh]'>
      
      <div className='bg-white rounded-lg px-8 py-6 drop-shadow-sm'>
        {/* image container */}
        <div className='flex flex-col sm:grid grid-cols-2 gap-8'>
          {/* left side */}
          <div>
            <p className='font-secondary font-semibold text-xl mb-2'>Original</p>
            <img className='rounded-md border' src={image ? URL.createObjectURL(image): ''} alt="" />
          </div>
          {/* right side */}
          <div className='flex flex-col'>
            <p className='font-secondary font-semibold text-xl mb-2'>Background Removed</p>
            <div className='rounded-md border border-gray-300 h-full relative bg-layer overflow-hidden'>
              <img src={resultImage ? resultImage : ""} alt="" />
              {
                !resultImage && image && <div className='absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2'>
                <div className='border-4 border-[#000000b1] rounded-full h-12 w-12 border-t-transparent animate-spin'>
                </div>
              </div>
              }
            </div>
          </div>
        </div>

        {/* buttons for another image, download */}
        { resultImage && <div className='flex justify-center sm:justify-end items-center flex-wrap gap-8 mt-6 font-secondary text-xl'>
          <button className='px-8 py-3 rounded-full text-[#000000a8] border border-t border-[#c1c1c1] hover:bg-[#47474726] transition-all duration-300'>Try different image</button>
          <a href={resultImage} download className='px-8 py-3 text-white rounded-full bg-[#000000de] hover:bg-[#47474726] transition-all duration-300'>Download image</a>
        </div>}
      </div>

    </div>
  )
}

export default After