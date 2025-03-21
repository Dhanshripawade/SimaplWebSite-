import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Container } from 'react-bootstrap';
import { FaSearch, FaPhoneAlt } from 'react-icons/fa';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <Navbar expand="lg" className="bg-white shadow-sm h-150px">
      <Container >
        <Navbar.Brand href="#">
          {/* <img
            src="<div class="site-header__site-logo__image 
            
           
            aria-label="99designs by Vista"
            alt="logo"
            width="100"
          /> */}

          <h3>
          <Link to="/"  className='text-decoration-none border-0 text-dark p-2'>Designs by Vita</Link>
          </h3>
        </Navbar.Brand>

        <Nav className="me-auto">
          <Link to="/categories"  className='text-decoration-none border-0 text-dark p-2'>Categories</Link>
          <Link to="/Howitworkspage" className='text-decoration-none border-0 text-dark p-2'>How it works</Link>
          <Link to="/FindaDesigner " className='text-decoration-none border-0 text-dark p-2'>Find a designer</Link>
          <Link to="/Inspiration" className='text-decoration-none border-0 text-dark p-2'>Inspiration</Link>
          {/* <Nav.Link href="#">Studio</Nav.Link> */}
        </Nav>

        <div className="d-flex align-items-center">
          <FaPhoneAlt className="me-2 text-dark" />
          <span className="me-4">1 800 513 1678</span>
          <Nav.Link href="#" className="me-3">
            Log in
          </Nav.Link>

          <Form>
            <InputGroup>
              <InputGroup.Text>
                <FaSearch />
              </InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Search keywords eg. retro, minimal"
                className="rounded-pill"
              />
            </InputGroup>
          </Form>
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;
