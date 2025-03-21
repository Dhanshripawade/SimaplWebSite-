
import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';


function FaqSection() 
{
  const [search, setSearch] = useState('');
  const faqData = [
    "Fun websites", "Cool websites", "Creative websites", "Beautiful websites",
    "Aesthetic websites", "Clean websites", "Awesome websites", "Luxury websites",
    "Unique websites", "Innovative websites", "Winning websites", "Premium websites",
    "Building websites", "Development websites", "Design firm websites", "Ecommerce websites",
    "Icon websites", "Game websites", "Wedding websites", "Course websites"
  ];

  const filteredFaq = faqData.filter((faq) =>
    faq.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='container'>
    <Container className='mt-5'>
      {/* <Form className="mb-4"> */}
        {/* <Form.Control
          type="text"
          placeholder="Search FAQ..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Form> */}
      <Row className="g-3">
        {filteredFaq.map((faq, index) => (
          <Col xs={12} sm={6} md={4} lg={3} key={index} className="d-flex justify-content-center">
            <Button variant="light" className="faq-button rounded-pill shadow-sm px-5">
              {faq}
            </Button>
          </Col>
        ))}
      </Row>
    </Container>
    </div>

  );
}

export default FaqSection;
