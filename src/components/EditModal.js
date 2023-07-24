import { useState } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";

const EditModal = ({ show, handleClose, bookData }) => {
  const [editedBook, setEditedBook] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditedBook((prevBook) => ({
      ...prevBook,
      book: {
        ...prevBook.book,
        [name]: value,
      },
    }));
  };

  const handleSaveChanges = () => {
    console.log("Edited Book Data:", editedBook);
    setEditedBook({});
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Edit Book And Listing Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group as={Row} controlId="formTitle">
              <Form.Label column sm={3}>
                Image Url:
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="text"
                  name="url"
                  value={bookData.book.imgUrl}
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formTitle">
              <Form.Label column sm={3}>
                Title:
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="text"
                  name="title"
                  value={bookData.book.title}
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formAuthor">
              <Form.Label column sm={3}>
                Author:
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="text"
                  name="author"
                  value={bookData.book.author}
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPage">
              <Form.Label column sm={3}>
                Pages:
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="number"
                  name="page"
                  value={bookData.book.page}
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formReleaseYear">
              <Form.Label column sm={3}>
                Release Year:
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="number"
                  name="releaseYear"
                  value={bookData.book.releaseYear}
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formStatus">
              <Form.Label column sm={3}>
                Status:
              </Form.Label>
              <Col sm={9}>
                <Form.Select
                  onChange={handleChange}
                  defaultValue="Available"
                  name="Status"
                >
                  <option value="available">Available</option>
                  <option value="borrowed">Borrowed</option>
                </Form.Select>
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditModal;
