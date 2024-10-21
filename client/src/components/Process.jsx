import React from 'react'

const Process = () => {
  return (
    <div className='mt-20 mx-4 lg:mx-44 py-20 xl:py-40'>

        <h1 className='font-primary text-center text-xl md:text-2xl lg:text-3xl'>Background removal process:</h1>

        <div className='font-secondary flex items-start flex-wrap gap-10 mt-16 xl:mt-24 justify-center'>
            {/* 1 */}
            <div className='bg-white border drop-shadow-sm p-7 pb-10 rounded-md hover:scale-150 transition-all duration-500'>
                
                <div>
                    <p className='text-2xl font-medium flex items-center justify-center gap-5'>1. Upload</p>
                    <p className='text-lg text-neutral-700 mt-3'>Begin by uploading an image.</p>
                </div>
            </div>

            {/* 2 */}
            <div className='bg-white border drop-shadow-sm p-7 pb-10 rounded-md hover:scale-150 transition-all duration-500'>
                
                <div>
                    <p className='text-2xl font-medium flex items-center justify-center gap-5'>2. Remove</p>
                    <p className='text-lg text-neutral-700 mt-3'>Background automatically removed within seconds.</p>
                </div>
            </div>

            {/* 3 */}
            <div className='bg-white border drop-shadow-sm p-7 pb-10 rounded-md hover:scale-150 transition-all duration-500'>
                
                <div>
                    <p className='text-2xl font-medium flex items-center justify-center gap-5'>3. Download</p>
                    <p className='text-lg text-neutral-700 mt-3'>Your image is ready to go!</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Process