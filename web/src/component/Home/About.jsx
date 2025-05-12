import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './About.css';

function About() 

{
  const cardData = [
    {
      imgSrc: 'https://images-platform.99static.com//d9J8JrQ2D3_ewk-0X1zaDgPBm74=/0x0:1600x1600/fit-in/500x500/99designs-contests-attachments/87/87009/attachment_87009004',
      title: 'Card title 1',
      text: 'This is a wider card with supporting text below as a natural lead-in to additional content.'
    },
    {
      imgSrc: 'https://images-platform.99static.com//Xl0EqH6L-qkJ9NWfP8S_dq1KiD0=/220x0:1180x960/fit-in/500x500/99designs-contests-attachments/92/92122/attachment_92122113',
      title: 'Card title 2',
      text: 'This card has supporting text below as a natural lead-in to additional content.'
    },
    {
      imgSrc: 'https://images-platform.99static.com//tphp834SZzqw0h_5ol6K8ytnT0E=/221x52:1271x1102/fit-in/500x500/99designs-contests-attachments/128/128027/attachment_128027732',
      title: 'Card title 3',
      text: 'This is a wider card with supporting text below as a natural lead-in to additional content.'
    },
    {
      imgSrc: 'https://images-platform.99static.com//tEkq02Qv-ins0GUDNZDQHcaN63g=/0x0:1700x1700/fit-in/500x500/projects-files/46/4690/469023/f1cbe8ff-3964-437e-9d64-21efe7c9e06d.png',
      title: 'Card title 4',
      text: 'This is a wider card with supporting text below as a natural lead-in to additional content.'
    },
    {
      imgSrc: 'https://images-platform.99static.com//xQbse1Ke1k3I9K412Nv-a_2UTP0=/160x0:1459x1299/fit-in/500x500/99designs-contests-attachments/72/72662/attachment_72662248',
      title: 'Card title 5',
      text: 'This is a wider card with supporting text below as a natural lead-in to additional content.'
    },
    {
      imgSrc: 'https://images-platform.99static.com//tphp834SZzqw0h_5ol6K8ytnT0E=/221x52:1271x1102/fit-in/500x500/99designs-contests-attachments/128/128027/attachment_128027732',
      title: 'Card title 6',
      text: 'This is a wider card with supporting text below as a natural lead-in to additional content.'
    }
  ];

  return (
    <div className='container'>
    <div className='cards-container'>
      <Row xs={1} md={3} className="g-4">
        {cardData.map((card, index) => (
          <Col key={index}>
            <Card className='card-item hover-effect'>
              <Card.Img variant="top" src={card.imgSrc} width="350px" height="350px" alt={card.title} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="d-flex justify-content-center align-items-center " style={{ height: '100px' }}>
        <button className="btn btn-light text-white bg-black px-5 py-3" style={{ borderRadius: '25px' }}>  More Simple Websites  </button>
      </div>

      <div className='para d-flex justify-content-center align-items-center' style={{ height: '80px' }}>
        <h2>Simple websites not a good fit? Try something else:
        </h2>
      </div>

      <div className="d-flex justify-content-center">
      <div className="input-group mb-3 w-50">
    <span className="input-group-text">
      <i className="bi bi-search"></i> {/* Bootstrap Search Icon */}
    </span>
    <input type="text" className="form-control " placeholder="Search keywords example: retro, minimal, bear, mystery" />
  </div>
</div>


       
    </div>
    </div>
    
  );
}

export default About;
