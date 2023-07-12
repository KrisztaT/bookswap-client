import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { motion } from "framer-motion";
import { useState } from "react";
import { useLogin } from "../utils/useLogin";
import "../styles/Button.css";
import "../styles/Logo.css";
import "../styles/PageHeader.css";
import "../styles/FormInput.css";
import "../styles/Modal.css";
import "../styles/Error.css";

const LoginModal = ({ show, handleClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login, error, loading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop="static">
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
                type="text"
                placeholder="Password"
                className="form-input"
                onChange={(e) => setPassword(e.target.value)}
                input={password}
              />
            </Form.Group>

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
              >
                Login
              </Button>
              {error && <div className="error-message">{error}</div>}
            </motion.div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LoginModal;
