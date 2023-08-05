import { useState } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner'

import { useUpdateBookAndListing } from "../hooks/useUpdateBookAndListing";

import "../styles/Button.css";
import "../styles/PageHeader.css";

const EditModal = ({ show, handleClose, bookData, handleEdit }) => {
  // state variable to store edited book data
  const [editedBook, setEditedBook] = useState();
  // Custom hook to handle updating book and listing data
  const { updateBookAndListing, error, loading } = useUpdateBookAndListing();

  // function to handle changes in the form input fields and add it to the previous state
  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditedBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };

  // function to handle saving changes after editing
  const handleSaveChanges = async () => {
    // call the updateBookAndListing function to handle api request
    const result = await updateBookAndListing(
      editedBook,
      bookData.book._id,
      bookData.listing._id
    );
    // if the fetch is successful
    if (result) {
      // call the handleEdit function with the updated book data to modify state
      handleEdit(result);
      // reset the editedBook state
      setEditedBook({});
      // close the modal after successful update
      handleClose();
    }
  };

  // edit modal is conditionally rendered depending on if the user added the book to the database or not
  // if the user added the book to the db book details are allowed to be updated, in other case only
  // lending information can be updated
  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header
          closeButton
          className="bg-light d-flex flex-column align-content-center justify-content-center"
        >
          <Modal.Title className="page-header">
            Edit Book And Listing Details
          </Modal.Title>
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
                      name="imgUrl"
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
                      defaultValue={bookData.listing.availability}
                      name="availability"
                    >
                      <option value="available">available</option>
                      <option value="borrowed">borrowed</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="location">
                  <Form.Label column sm={3}>
                    Location:
                  </Form.Label>
                  <Col sm={9}>
                    <Form.Control
                      type="text"
                      name="location"
                      onChange={handleChange}
                      defaultValue={bookData.listing.location}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="condition">
                  <Form.Label column sm={3}>
                    Condition:
                  </Form.Label>
                  <Col sm={9}>
                    <Form.Select
                      type="text"
                      name="condition"
                      className=""
                      onChange={handleChange}
                      defaultValue={bookData.listing.condition}
                    >
                      <option value="new">new</option>
                      <option value="good">good</option>
                      <option value="acceptable">acceptable</option>
                      <option value="used">used</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
              </>
            ) : (
              <>
                <Form.Group as={Row} controlId="formStatus" className="mt-1">
                  <p className="page-header-smaller mb-3">Listing details</p>
                  <Form.Label column sm={3}>
                    Status:
                  </Form.Label>
                  <Col sm={9}>
                    <Form.Select
                      onChange={handleChange}
                      defaultValue={bookData.listing.availability}
                      name="availability"
                    >
                      <option value="available">available</option>
                      <option value="borrowed">borrowed</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="location">
                  <Form.Label column sm={3}>
                    Location:
                  </Form.Label>
                  <Col sm={9}>
                    <Form.Control
                      type="text"
                      name="location"
                      onChange={handleChange}
                      defaultValue={bookData.listing.location}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="condition">
                  <Form.Label column sm={3}>
                    Condition:
                  </Form.Label>
                  <Col sm={9}>
                    <Form.Select
                      type="text"
                      name="condition"
                      className=""
                      onChange={handleChange}
                      defaultValue={bookData.listing.condition}
                    >
                      <option value="new">new</option>
                      <option value="good">good</option>
                      <option value="acceptable">acceptable</option>
                      <option value="used">used</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
              </>
            )}
          </Form>
        </Modal.Body>
        <Modal.Footer className="bg-light d-flex flex-column align-content-center justify-content-center">
          {error && <div className="error-message">{error}</div>}
          <Button
            className="btn-custom-bkg"
            onClick={handleSaveChanges}
            disabled={loading}
          >
             {loading ?  <Spinner animation="border" variant="light" /> : "Save Changes"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditModal;
