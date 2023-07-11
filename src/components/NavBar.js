import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import LoginModal from "./LoginModal";
import JoinModal from "./JoinModal";
import "../styles/Button.css"
import "../styles/Logo.css"


const NavBar = () => {

  // login and join modal states  
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showJoinModal, setShowJoinModal] = useState(false);

  // setting Login modal state
  const handleShowLoginModal = () => setShowLoginModal(true);
  const handleCloseLoginModal = () => setShowLoginModal(false);
 
  // setting Join modal state
  const handleCloseJoinModal = () => setShowJoinModal(false);
  const handleShowJoinModal = () => setShowJoinModal(true);


  return (
    <div>
      <Navbar
        collapseOnSelect
        className="text-center"
        bg="light"
        fixed="top"
        expand="md"
      >
        <Container className="container-border">
            <Navbar.Brand href="#home">
              <img
                className="mx-4 logo"
                src="./bookswap_logo.svg"
                alt="logo"
              />
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="">
            <Nav className="me-auto fs-2 text-center "></Nav>
            <Nav>
              <Nav.Link onClick={handleShowLoginModal}>
                <Button className="btn-custom">Login</Button>
              </Nav.Link>
              <Nav.Link onClick={handleShowJoinModal}>
                <Button className="btn-custom">Join</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <LoginModal show={showLoginModal} handleClose={handleCloseLoginModal} />
      <JoinModal show={showJoinModal} handleClose={handleCloseJoinModal} />
    </div>
  );
};

export default NavBar;
