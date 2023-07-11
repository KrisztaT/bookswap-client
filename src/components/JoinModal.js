import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { motion } from "framer-motion";
import "../styles/Button.css"
import "../styles/Logo.css"
import "../styles/PageHeader.css"
import "../styles/FormInput.css"
import "../styles/Modal.css"

const JoinModal = ({ show, handleClose }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop="static" >
        <Modal.Header closeButton className="bg-light d-flex flex-column align-items-center justify-content-center">
            <img src="./bookswap_logo.svg" alt="logo" className="logo" />
        </Modal.Header>
        <Modal.Body className="d-flex flex-column align-items-center justify-content-center modal-body">
            <p className="page-header">Join BookSwap</p>
          <Form className="">
            <Form.Group
              className=""
              controlId="exampleForm.ControlInput1"
            >
              <Form.Control
                type="text"
                placeholder="Username"
                autoFocus
                className="form-input"
              />
            </Form.Group>
            <Form.Group
              className=""
              controlId="exampleForm.ControlInput1"
            >
              <Form.Control
                type="text"
                placeholder="First Name"
                className="form-input"
              />
            </Form.Group>
            <Form.Group
              className=""
              controlId="exampleForm.ControlInput1"
            >
              <Form.Control
                type="text"
                placeholder="Email"
                className="form-input"
              />
            </Form.Group>
            <Form.Group
              className=""
              controlId="exampleForm.ControlInput1"
            >
              <Form.Control
                type="text"
                placeholder="Password"
                className="form-input"
              />
            </Form.Group>
            
          </Form>
          <motion.div
            initial={{ rotateZ: 0 }}
            animate={{
              rotateZ: [0, -15, 10, -10, 6, -4, 0],
              transition: {
                duration: 1,
                repeat: 3,
              },
            }}
          >
            <Button className="btn-custom m-4">Join</Button>
          </motion.div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default JoinModal;