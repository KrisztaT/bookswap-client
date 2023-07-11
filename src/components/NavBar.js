import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import "../styles/NavBar.css"

const NavBar = () => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        className="text-center"
        bg="light"
        fixed="top"
      >
        <Container className="container-border">
            <Navbar.Brand href="#home">
              <img
                className="mx-4 img-navbar"
                src="./bookswap_logo.svg"
                alt="logo"
              />
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="">
            <Nav className="me-auto fs-2 text-center "></Nav>
            <Nav>
              <Nav.Link href="">
                <Button className="btn-navbar">Login</Button>
              </Nav.Link>
              <Nav.Link href="">
                <Button className="btn-navbar">Join</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
