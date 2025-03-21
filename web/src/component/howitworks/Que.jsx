import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import sejal from '../../assets/sejal.png'


2

function Que() {
  return (
    <div className='container'>
    <div className='container'>
    <div>
      <Container>
        <Row className="align-items-center py-5">
          
          <Col md={6} className="text-center text-md-start">
           
            <h2 className="mb-4 text-[90px] text-danger">
                Questions?
            </h2>

            <p className="lead">
            Our support gurus are here to help you achieve design enlightenment.<br></br>
             Check out our FAQs, send us an email,<br></br>
              or give us a call.


            </p>

            <p className='lead1'>
             800 513 1678
.           </p>
            <p>
                Free Design Consultation
            </p>
          </Col>

          
          <Col md={6} className="text-center ">
            <img
              // src={girl}
              src={sejal}
              alt="Empowered Girl"
            //   className="img-fluid shadow-lg"
            />
          </Col>
        </Row>
      </Container>
    </div>
    </div>
    </div>






  );
}

export default Que;
