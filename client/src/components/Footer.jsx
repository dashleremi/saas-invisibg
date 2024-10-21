import React from 'react'
import { Link } from 'react-router-dom';
import { FaGithub, FaGoogle, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='font-primary flex items-center justify-between gap-4 px-4 lg:px-44 py-3'>
        <Link to='/'><button className='flex items-center w-10 h-10'><img src="web-icon.png" alt="logo"/><span className='text-xl'>InvisiBG</span></button></Link>
        <p className='font-secondary'>Copyright @ramiaemidashler.com | All rights reserved.</p>

        <div className='flex items-center justify-center gap-5'>
            <a href="mailto:emi.dashler@gmail.com" target='_blank' rel='noopener noreferrer'><FaGoogle size={25} /></a>
            <a href="https://github.com/dashleremi" target='_blank' rel='noopener noreferrer'><FaGithub size={25} /></a>
            <a href="https://www.instagram.com/emi.dashler/" target='_blank' rel='noopener noreferrer'><FaInstagram size={25} /></a>
        </div>
    </div>
  )
}

export default Footer