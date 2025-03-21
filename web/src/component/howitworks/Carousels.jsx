import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


import card1 from '../../assets/card1.png'
import card2 from '../../assets/card2.png'


function Carousels() {
  return (
<div className='container'>
    <div>
        <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img    
          className="d-block w-80 h-40" 
          src={card1}/>"
          {/* alt="First slide" */}
        
         <Carousel.Caption>
          {/* <h5>First slide label</h5> */}
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption> 
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-40"
          src={card2}
        //   alt="Second slide"
        />
        
      
      </Carousel.Item>
    </Carousel>

    </div>
    </div>
  )
}

export default Carousels