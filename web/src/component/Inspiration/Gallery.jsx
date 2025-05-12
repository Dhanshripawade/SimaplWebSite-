import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Card, Button, Container, Row, Col, Form } from 'react-bootstrap';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Container, Row, Col, Form } from 'react-bootstrap';


const designData = [
  {
    id: 1,
    image: 'https://images-workbench.99static.com/ZyGptayzSj115rhgsWXrOwB1FfE=/229x0:1196x967/fit-in/500x500/filters:fill(white,true):format(webp)/http://s3.amazonaws.com/projects-files/193/19359/1935970/4c4e4a76-31f2-4236-87d5-70edeaf31d44.jpg',
    author: 'Terry Bogard',
    likes: 9
  },
  {
    id: 2,
    image: 'https://images-workbench.99static.com/Jo3aUAMocHc_WpuM4kBpk-V8o-4=/0x0:1200x1200/fit-in/500x500/filters:fill(white,true):format(webp)/http://s3.amazonaws.com/projects-files/193/19360/1936093/c02bc628-653e-4340-949a-ccf027bf8d53.jpg',
    author: 'bo_rad',
    likes: 32
  },
  {
    id: 3,
    image: 'https://images-workbench.99static.com/7w31PnGYn57ewlWDfQG257lvfVQ=/0x0:2000x2000/fit-in/500x500/filters:fill(white,true):format(webp)/99designs-contests-attachments/156/156436/attachment_156436960',
    author: 'jagokandank',
    likes: 30
  },
  {
    id: 4,
    image: 'https://images-workbench.99static.com/kwGZCbNz4OuBgyLWcoQqnLD89pc=/8x1861:1500x3353/fit-in/500x500/filters:fill(white,true):format(webp)/99designs-contests-attachments/156/156427/attachment_156427240',
    author: 'merci dsgn',
    likes: 16
  },
  {
    id: 3,
    image: 'https://images-workbench.99static.com/OQycPyzcafUK9EZnkiDH3Ca0tuE=/334x187:1359x1211/fit-in/500x500/filters:fill(white,true):format(webp)/http://s3.amazonaws.com/projects-files/193/19317/1931737/d9d0db81-c70b-4977-afec-bc9b43f12013.jpg',
    author: 'Boja',
    likes: 22
  },
  {
    id: 3,
    image: 'https://images-workbench.99static.com/0Jk1f529uqlA9ZeOAoyrad3zeEg=/0x0:663x663/fit-in/500x500/filters:fill(white,true):format(webp)/99designs-contests-attachments/156/156390/attachment_156390810',
    author: 'BlindB',
    likes: 61
  },
  {
    id: 3,
    image: 'https://images-workbench.99static.com/H0W0ahN8nVI30LqGXRSOoA98AEU=/180x320:1316x1455/fit-in/500x500/filters:fill(white,true):format(webp)/http://s3.amazonaws.com/projects-files/193/19343/1934327/d7ed8559-2808-4968-8a93-823c9f0b9c27.jpg',
    author: 'Spoon Lancer',
    likes: 4
  },
  {
    id: 3,
    image: 'https://images-workbench.99static.com/SCRnRCe91v7P-nhkiYzQx7ywcrw=/93x89:1907x1903/fit-in/500x500/filters:fill(white,true):format(webp)/99designs-contests-attachments/156/156276/attachment_156276243',
    author: 'FreshApple',
    likes: 22
  },
  {
    id: 3,
    image: 'https://images-workbench.99static.com/3J_a9r7TMgwggfOkiB67ZUg0imE=/399x0:1673x1274/fit-in/500x500/filters:fill(white,true):format(webp)/99designs-contests-attachments/156/156424/attachment_156424030',
    author: 'KsBoy',
    likes: 14
  },
  {
    id: 3,
    image: 'https://images-workbench.99static.com/duSPf4Sw2lC2CXtwKK9pe9UkExM=/0x0:1000x1000/fit-in/500x500/filters:fill(white,true):format(webp)/99designs-contests-attachments/156/156465/attachment_156465924',
    author: 'diwaz',
    likes: 2
  },
  {
    id: 3,
    image: 'https://images-workbench.99static.com/S638k8AoIKbfsIgcC7kuOmo_wDw=/48x0:1052x1005/fit-in/500x500/filters:fill(white,true):format(webp)/http://s3.amazonaws.com/projects-files/189/18996/1899643/00152d42-e5e3-4973-80d1-4ac6f30b2e2b.jpg',
    author: 'Luz studio',
    likes: 30
  },
  {
    id: 3,
    image: 'https://images-workbench.99static.com/u0_MorciFKka4M-8tcjBzESVjbo=/494x4333:1346x5185/fit-in/500x500/filters:fill(white,true):format(webp)/99designs-contests-attachments/156/156363/attachment_156363886',
    author: 'artSigma',
    likes: 30
  },
  {
    id: 3,
    image: 'https://images-workbench.99static.com/RadmgiQsPL5u9njScpU0IFKqzN0=/123x125:1862x1864/fit-in/500x500/filters:fill(white,true):format(webp)/http://s3.amazonaws.com/projects-files/191/19177/1917723/fe720aee-2e49-491c-afbd-9afed532e10b.jpg',
    author: 'andesign',
    likes: 2
  },
  {
    id: 3,
    image: 'https://images-workbench.99static.com/oTMnRAZApw2ed0jOl3mJ7uN-9B8=/14x0:1013x1000/fit-in/500x500/filters:fill(white,true):format(webp)/http://s3.amazonaws.com/projects-files/189/18990/1899081/527e99f1-80ad-4609-b2d1-8596b9e68ed4.jpg',
    author: 'Netlines',
    likes: 14
  },
  {
    id: 3,
    image: 'https://images-workbench.99static.com/CbTGMA_M4xugbZOA_ux5f9FapYA=/0x0:5400x5400/fit-in/500x500/filters:fill(white,true):format(webp)/http://s3.amazonaws.com/projects-files/193/19300/1930037/58852adc-08ac-4301-bf6f-f9aecb38ae34.jpg',
    author: 'Spoon Lancer',
    likes: 6
  },
  {
    id: 3,
    image: 'https://images-workbench.99static.com/t8odk1yPrUA6mdCUIE6HftjY7_0=/0x0:1920x1920/fit-in/500x500/filters:fill(white,true):format(webp)/99designs-contests-attachments/156/156393/attachment_156393087',
    author: 'Spoon Lancer',
    likes: 9
  }
  

];

const Gallery = () => {
  const [filterLiked, setFilterLiked] = useState(false);
  const [search, setSearch] = useState('');

  const filteredDesigns = designData.filter(design =>
    design.author.toLowerCase().includes(search.toLowerCase()) && (!filterLiked || design.likes > 10)
  );

  return (
    <Container className="my-4">
      <h2 className="text-center mb-4 mt-5">Discover graphic design ideas & inspiration</h2>
      <Form.Group className="mb-3" controlId="search">
        <Form.Control
          type="text "
          placeholder="Search tags and keywords"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Form.Group>
      <Form.Check
        type="switch"
        id="like-filter"
        label="Filter your liked designs"
        checked={filterLiked}
        onChange={() => setFilterLiked(!filterLiked)}
      />
      <Row>
        {filteredDesigns.map((design) => (
          <Col md={3} key={design.id} className="mb-4">
            <Card>
              <Card.Img variant="top" src={design.image} />
              <Card.Body>
                <Card.Title>{design.author}</Card.Title>
                <Card.Text>👍 {design.likes}</Card.Text>
                <Button variant="primary">Like</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Gallery;