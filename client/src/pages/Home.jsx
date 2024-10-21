import React from 'react'
import Hero from '../components/Hero'
import Process from '../components/Process'
import RemovalExample from '../components/RemovalExample'
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div className='mt-40'>
      <Hero/>
      <Process/>
      <RemovalExample/>
      <Testimonials/>
      
    </div>
  )
}

export default Home