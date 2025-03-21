import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

function Find() {
  return (
    

<div className='container'>
    <div>
      <Container className='h-100 mt-3'>
        <Row className="align-items-center py-5">
          
          <Col md={6} className="text-center text-md-start">
           
            <h2 className="mb-4 text-[50px] text-danger">Find a designer you’ll love
            </h2>

            <p className="lead">
            We make great design work happen with our global community
            <br></br>  of professional designers.
            If you'd like to speak to a human,
            <br></br> talk to one of our design experts.

            </p>

            <p className='lead1'>
            Want a free simple website?<br></br>
             Try the Vista x Wix website builder today. No design expertise or<br></br>
             team needed.


            </p>
          </Col>

          
          <Col md={6} className="text-center">
            <img
              // src={girl}
              src="https://assets.99static.com/workbench/assets/images/designer-search-logged-out-header-9e99c15bdf.png"
              alt="Empowered Girl"
              
            />
          </Col>
        </Row>
      </Container>
    </div>
    </div>
    
  )
}

export default Find