import { useState } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import { useUpdateBook } from "../hooks/useUpdateBook";

const EditModal = ({ show, handleClose, bookData }) => {
    const [editedBook, setEditedBook] = useState();
    const {updateBook, error, loading} = useUpdateBook()
  
    const handleChange = (event) => {
        const { name, value } = event.target;
        setEditedBook((prevBook) => ({
          ...prevBook,
          [name]: value,
        }));
        console.log(editedBook);
      };
       

  const handleSaveChanges = async () => {
    console.log(editedBook, bookData.book._id);
    const result = await updateBook(editedBook, bookData.book._id);
   console.log(result)
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
            <Form.Group as={Row} controlId="formUrl">
              <Form.Label column sm={3}>
                Image Url:
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="text"
                  name="url"
                  defaultValue={bookData.book.imgUrl}
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
                  defaultValue={bookData.book.title}
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
                  defaultValue={bookData.book.author}
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
                  defaultValue={bookData.book.page}
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
                  defaultValue={bookData.book.releaseYear}
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
                  name="availability"
                >
                  <option defaultValue="available">Available</option>
                  <option defaultValue="borrowed">Borrowed</option>
                </Form.Select>
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} disabled={loading}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChanges} disabled={loading}>
            Save Changes
          </Button>
          {error && <div className="error-message">{error}</div>}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditModal;
