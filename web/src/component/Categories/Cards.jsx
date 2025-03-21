import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import cards1 from '../../assets/cards1.png'
import cards2 from '../../assets/cards2.png'
import cards3 from '../../assets/cards3.png'
import cards4 from '../../assets/cards4.png'


function Cards() {
  return (
    <div className='container mt-5 '>
    <CardGroup >
      <Card >
        <Card.Img variant="top " src={cards1} />
        
      </Card>

      <Card>
        <Card.Img variant="top" src={cards2} />
      
        
      </Card>

      <Card>
        <Card.Img variant="top" src={cards3} />

      </Card>
      <Card>
        <Card.Img variant="top" src={cards4} />
      
      </Card>
    </CardGroup>
    </div>
  );
}

export default Cards;
