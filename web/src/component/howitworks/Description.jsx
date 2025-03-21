import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

2

function Description() {
  return (
    <div className='container'>
    <div>
      <Container>
        <Row className="align-items-center py-5">
          
          <Col md={6} className="text-center text-md-start">
           
            <h2 className="mb-4 text-[50px] text-danger">How it works ?
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
              src="https://images-platform.99static.com//JmGZazgkobl5Pv1NDUJmV86wOIk=/0x0:2529x2529/fit-in/500x500/projects-files/164/16437/1643734/f481cf3d-7710-40c7-b39f-6d2d6f5617a9.png"
              alt="Empowered Girl"
              className="img-fluid rounded shadow-lg"
            />
          </Col>
        </Row>
      </Container>
    </div>
    </div>

  );
}

export default Description;
