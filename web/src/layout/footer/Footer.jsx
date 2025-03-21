import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './footer.css';

function Footer() {
  return (
    

    <footer class="bg-light py-5 mt-5">
  <div class="container mt-2">
    <div class="row text-start">
      <div class="col-md-3">
        <h5>Company</h5>
        <ul class="list-unstyled">
          <li>About</li>
          <li>Contact</li>
          <li>Careers</li>
          <li>Team</li>
          <li>Press releases</li>
          <li>In the media</li>
          <li>Testimonials</li>
          <li>99nonprofits</li>
        </ul>
      </div>
      <div class="col-md-3">
        <h5>Design services</h5>
        <ul class="list-unstyled">
          <li>Design contests</li>
          <li>1-to-1 Projects</li>
          <li>Find a designer</li>
          <li>Discover inspiration</li>
          <li>Pricing</li>
          <li>99designs Studio</li>
          <li>99designs Pro</li>
        </ul>
      </div>
      <div class="col-md-3">
        <h5>Get a design</h5>
        <ul class="list-unstyled">
          <li>Logo design</li>
          <li>Business card</li>
          <li>Web page design</li>
          <li>Brand guide</li>
          <li>Packaging design</li>
          <li>T-shirt design</li>
          <li>Book cover design</li>
          <li>Browse all categories</li>
        </ul>
      </div>
      <div class="col-md-3">
        <h5>Resources</h5>
        <ul class="list-unstyled">
          <li>Become a designer</li>
          <li>Blog</li>
          <li>Design without borders</li>
          <li>99awards</li>
          <li>Affiliates</li>
          <li>Logo ideas</li>
          <li>T-shirt ideas</li>
          <li>Designer resources</li>
          <li>Featured partners</li>
          <li>Help</li>
        </ul>
      </div>
    </div>
  </div>
</footer>

  );
}

export default Footer;
