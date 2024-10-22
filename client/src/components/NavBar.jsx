import React, { useContext, useEffect } from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import { useClerk, useUser, UserButton } from "@clerk/clerk-react";
import { AppContext } from '../context/AppContext';
import { CiCoinInsert } from "react-icons/ci";

const NavBar = () => {

  const { openSignIn } = useClerk()
  const { isSignedIn, user } = useUser()
  const { credit, loadCreditsData } = useContext(AppContext)

  const navigate = useNavigate()

  useEffect(() => {
    if(isSignedIn) {
      loadCreditsData()
    }
  }, [isSignedIn])

  return (
    <div className='flex items-center justify-between mx-4 py-10 lg:mx-44 font-primary'>
        <Link to='/'><button className='flex items-center w-20 h-20'><img src="web-icon.png" alt="logo"/><span className='text-3xl'>InvisiBG</span></button></Link>
        {
          isSignedIn
          ?<div className='flex items-center gap-5 sm:gap-10'>
            <button onClick={()=>navigate('/credits')} className='flex items-center gap-2 bg-gray-400 px-4 sm:px-7 py-1.5 sm:py-2.5 rounded-full text-white hover:scale-105 transition-all duration-700'>
            <CiCoinInsert size={30} />
            <p className='text-md sm:text-sm font-medium text-white'>Credits: {credit} </p>
            </button>
            <p className='text-black max-sm:hidden font-secondary'>Hi, {user.fullName}</p>
            <UserButton />
          </div>
          :<button onClick={() => openSignIn({})} className='flex items-center text-xl gap-2 px-10 py-3 rounded-full border border-t border-[#0000007d] hover:bg-[#47474726] transition-all duration-300'>Start Here<IoIosArrowRoundForward size={30} /></button>
        }
    </div>
  )
}

export default NavBar