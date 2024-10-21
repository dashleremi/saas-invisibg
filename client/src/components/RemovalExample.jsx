import React, {useState} from 'react'


const RemovalExample = () => {

    const [sliderPosition, setSliderPosition] = useState(50) // showing 50% of an image
    const handleSliderChange = (e) => {
        setSliderPosition(e.target.value)
    }

  return (
    <div className='pb-10 md:py-20 mx-2'>

        <h1 className='mb-12 sm:mb-24 font-primary text-center text-xl md:text-2xl lg:text-3xl'>High-Precision <br /> Background Removal for Crisp Results</h1>

        {/* background images */}
        <div className='relative w-full max-w-3xl overflow-hidden m-auto rounded-xl'>
            <img src="removal-before2.png" style={{clipPath: `inset(0 ${100.2 - sliderPosition}% 0 0)`}} alt="" />
            <img className='absolute top-0 left-0 w-full h-full' src="removal-after2.png" style={{clipPath: `inset(0 0 0 ${sliderPosition}%)`}}  alt="" />

            {/* image slider for before and after */}
            <input className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10 slider' type="range" min={0} max={100} value={sliderPosition} onChange={handleSliderChange} />
        </div>
    </div>
  )
}

export default RemovalExample