import React, {useState} from 'react'

const RemovalExample = () => {

    const [sliderPosition, setSliderPosition] = useState(50)
    const handleSliderChange = (e) => {
        setSliderPosition(e.target.value)
    }

  return (
    <div className='mx-4 lg:mx-44 py-20 xl:py-40'>
        <h1 className='font-primary text-center text-xl md:text-2xl lg:text-3xl'>High-Precision <br /> Background Removal for Crisp Results</h1>
    </div>
  )
}

export default RemovalExample