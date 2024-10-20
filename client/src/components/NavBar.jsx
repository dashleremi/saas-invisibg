import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='flex items-center justify-between mx-4 py-10 lg:mx-44 font-primary'>
        <Link to='/'><button className='flex items-center w-20 h-20'><img src="web-icon.png" alt="logo"/><span className='text-3xl'>InvisiBG</span></button></Link>
        <button className='flex items-center text-xl gap-2 px-10 py-3 rounded-full border border-t border-[#0000007d] hover:bg-[#47474726] transition-all duration-300'>Start Here<IoIosArrowRoundForward size={30} /></button>
    </div>
  )
}

export default NavBar