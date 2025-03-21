import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

2

function Description() {
  return (
    <div className='container'>
    <div>
      <Container>
        <Row className="align-items-center py-5">
          {/* Left Side - Description */}
          <Col md={6} className="text-center text-md-start">
            {/* <h2 className="mb-4" >Simple websites</h2> */}
            <h2 className="mb-4 text-[90px]">Simple websites</h2>

            <p className="lead">
              Make your business shine online with a custom simple website <br></br>
               designed just for you by a professional designer. Need ideas?<br></br>
                We’ve collected some amazing examples of simple websites <br></br>
                from our global community of designers. Get inspired and start<br></br>
                 planning the perfect simple web design today.<br></br>
            </p>

            <p className='lead1'>
            Want a free simple website?<br></br>
             Try the Vista x Wix website builder today. No design expertise or<br></br>
             team needed.


            </p>
          </Col>

          {/* Right Side - Image */}
          <Col md={6} className="text-center">
            <img
              // src={girl}
              src="https://images-platform.99static.com//mXKUA7Ehxj4hg0PMGsQVBmt1g9Y=/0x0:1500x1500/fit-in/590x590/99designs-contests-attachments/110/110960/attachment_110960667"
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
