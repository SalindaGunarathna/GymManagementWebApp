import React from 'react'
import Hero from "../componatas/hero/Hero"
import Aboutus from "../componatas/Aboutus"
import PopulurPackages from '../componatas/PopulurPackages'
import CoachCard from '../componatas/CoachCard'
import Ribbon from "../componatas/Ribbon1"

import MembershipCard from '../componatas/MembershipCard'



const Home = () => {
  return (
    <div>

      <Hero/>
      <Aboutus/>
    
      <PopulurPackages/>
      <Ribbon/>
      <CoachCard/>
      <MembershipCard/>

      
      

      
    </div>
    
  )
}

export default Home