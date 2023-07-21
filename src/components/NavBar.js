import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { BoxArrowRight } from "react-bootstrap-icons";
import { Link, useNavigate } from "react-router-dom";

import LoginModal from "./LoginModal";
import JoinModal from "./JoinModal";

import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";

import "../styles/Button.css";
import "../styles/Logo.css";
import "../styles/NavLink.css";

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

  const { logout } = useLogout();
  const { user } = useAuthContext();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/");
  }

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
          <Navbar.Brand as={Link} to="/">
            <img className="mx-4 logo" src="./bookswap_logo.svg" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="">
            <Nav className="me-auto fs-2 text-center "></Nav>
            {user && (
              <Nav>
                <Nav.Link eventKey="1" as={Link} to="/">
                  <h3 className="nav-link">Home</h3>
                </Nav.Link>
                <Nav.Link eventKey="2" as={Link} to="/borrowing">
                  <h3 className="nav-link">Borrowing</h3>
                </Nav.Link>
                <Nav.Link eventKey="3" as={Link} to="/lending" >
                  <h3 className="nav-link">Lending</h3>
                </Nav.Link>
                <Nav.Link eventKey="4" href="">
                  <BoxArrowRight className="nav-icon" onClick={handleLogout} />
                </Nav.Link>
              </Nav>
            )}
            {!user && (
              <Nav>
                <Nav.Link eventKey="5" onClick={handleShowLoginModal} >
                  <Button className="btn-custom">Login</Button>
                </Nav.Link>
                <Nav.Link eventKey="6" onClick={handleShowJoinModal}>
                  <Button className="btn-custom">Join</Button>
                </Nav.Link>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <LoginModal show={showLoginModal} handleClose={handleCloseLoginModal} />
      <JoinModal show={showJoinModal} handleClose={handleCloseJoinModal} />
    </div>
  );
};

export default NavBar;
