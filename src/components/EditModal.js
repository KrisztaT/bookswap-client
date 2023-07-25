import { useState } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";

import { useUpdateBookAndListing } from "../hooks/useUpdateBookAndListing";

import "../styles/Button.css";
import "../styles/PageHeader.css"


const EditModal = ({ show, handleClose, bookData, handleEdit }) => {
  const [editedBook, setEditedBook] = useState();
  const { updateBookAndListing, error, loading } =
    useUpdateBookAndListing();

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
    const result = await updateBookAndListing(
      editedBook,
      bookData.book._id,
      bookData.listing._id
    );
    console.log(result);
   handleEdit(result);
    setEditedBook({});
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton className="bg-light d-flex flex-column align-content-center justify-content-center">
          <Modal.Title className="page-header">Edit Book And Listing Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {bookData.book.isCreated ? (
              <>
                <Form.Group as={Row} controlId="formUrl" className="mt-1">
                <p className="page-header-smaller mb-3">Book details</p>
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
                <Form.Group as={Row} controlId="formStatus" className="mt-3">
                  <p className="page-header-smaller mb-3">Listing details</p>
                  <Form.Label column sm={3}>
                    Status:
                  </Form.Label>
                  <Col sm={9}>
                    <Form.Select
                      onChange={handleChange}
                      defaultValue="Available"
                      name="availability"
                    >
                      <option defaultValue="available">available</option>
                      <option defaultValue="borrowed">borrowed</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
              </>
            ) : (
              <Form.Group as={Row} controlId="formStatus" className="mt-1">
                <p className="page-header-smaller mb-3">Listing details</p>
                <Form.Label column sm={3}>
                  Status:
                </Form.Label>
                <Col sm={9}>
                  <Form.Select
                    onChange={handleChange}
                    defaultValue="Available"
                    name="availability"
                  >
                    <option defaultValue="available">available</option>
                    <option defaultValue="borrowed">borrowed</option>
                  </Form.Select>
                </Col>
              </Form.Group>
            )}
          </Form>
        </Modal.Body>
        <Modal.Footer className="bg-light d-flex align-content-center justify-content-center">
          <Button
            className="btn-custom-bkg"
            onClick={handleSaveChanges}
            disabled={loading}
          >
            Save Changes
          </Button>
          {error && <div className="error-message">{error}</div>}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditModal;
