import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

const NavBar = () => {
  return (
    <div className='flex items-center justify-between mx-4 py-3 lg:mx-44'>
        <div className='w-20 h-20'>
            <button className='flex items-center'><img src="public/web-icon.png" alt="logo"/><span>InvisiBG</span></button>
        </div>
        <button>Start Here<IoIosArrowRoundForward size={20} /></button>
    </div>
  )
}

export default NavBar