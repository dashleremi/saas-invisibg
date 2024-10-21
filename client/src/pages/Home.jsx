import React from 'react'
import Hero from '../components/Hero'
import Process from '../components/Process'
import RemovalExample from '../components/RemovalExample'
import Testimonials from "../components/Testimonials";
import EndUpload from "../components/EndUpload";

const Home = () => {
  return (
    <div className='mt-40'>
      <Hero/>
      <Process/>
      <RemovalExample/>
      <Testimonials/>
      <EndUpload/>
    </div>
  )
}

export default Home