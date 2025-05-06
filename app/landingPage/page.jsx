import React from 'react'
import Hero from "./hero"
import Popular from "./popularHome"
import InteriorDesignSection from './interioi';
import Dream from "./dream"


const page = () => {
  return (
    <div>
        <Hero/>
        <InteriorDesignSection />
        <Dream/>
        <Popular/>
      
    </div>
  )
}

export default page