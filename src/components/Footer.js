import React from 'react';
import { Container } from 'react-bootstrap';
import { Facebook, Twitter, Instagram } from 'react-bootstrap-icons';


const Footer = () => {
  return (
    <footer className="bg-light mt-auto py-2">
      <Container className="d-flex align-items-center justify-content-between">
            <p className="footer-text">&copy; {new Date().getFullYear()} BookSwap</p>
            <div className="social-icons">
              <Facebook className="icon" />
              <Twitter className="icon" />
              <Instagram className="icon" />
            </div>
      </Container>
    </footer>
  );
};

export default Footer;
