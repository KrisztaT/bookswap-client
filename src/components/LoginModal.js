import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Spinner from 'react-bootstrap/Spinner';
import { motion } from "framer-motion";

import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { useNavigate } from "react-router-dom";

import "../styles/Button.css";
import "../styles/Logo.css";
import "../styles/PageHeader.css";
import "../styles/FormInput.css";
import "../styles/Modal.css";
import "../styles/Error.css";

const LoginModal = ({ show, handleClose }) => {
  // state variables to store form input values
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // custom hook to handle the login process
  const { login, error, loading } = useLogin();

  // react router's navigate function to redirect after successful join
  const navigate = useNavigate();

  // function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // call the login function with form input values and wait for the result
    const result = await login(username, password);

    // if the join was successful
    if (result) {
      // navigate to the /borrowing route
      navigate("/borrowing");
      // close the modal
      handleClose();
    }
  };

  // login modal form
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        data-testid="login-modal"
      >
        <Modal.Header
          closeButton
          className="bg-light d-flex flex-column align-items-center justify-content-center"
        >
          <img src="./bookswap_logo.svg" alt="logo" className="logo" />
        </Modal.Header>
        <Modal.Body className="d-flex flex-column align-items-center justify-content-center modal-body">
          <p className="page-header">Log in to BookSwap</p>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Username"
                autoFocus
                className="form-input"
                onChange={(e) => setUsername(e.target.value)}
                input={username}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Control
                type="password"
                placeholder="Password"
                className="form-input"
                onChange={(e) => setPassword(e.target.value)}
                input={password}
              />
            </Form.Group>
            {error && <div className="error-message mt-3">{error}</div>}
            <motion.div
              className="d-flex flex-column align-items-center justify-content-center"
              initial={{ rotateZ: 0 }}
              animate={{
                rotateZ: [0, -15, 10, -10, 6, -4, 0],
                transition: {
                  duration: 1,
                  repeat: 3,
                },
              }}
            >
              <Button
                type="submit"
                className="btn-custom m-3"
                disabled={loading}
                data-testid="login-button"
              >
                {loading ?  <Spinner animation="border" variant="light"  size="sm"/> : "Login"}
              </Button>
            </motion.div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LoginModal;
