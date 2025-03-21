import React from 'react'
import Description from '../../component/Home/Description'
import About from '../../component/Home/About'
import FaqSection from '../../component/Home/FaqSection'
import {Link} from 'react-router-dom'


function Homepage() {
  return (
    <div>
      
      

<Description/>
        {/* <Hero/> */}

        <About/>
        <FaqSection/>
    
    </div>
  )
}

export default Homepage