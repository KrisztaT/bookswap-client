import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Spinner from 'react-bootstrap/Spinner';

import { motion } from "framer-motion";

import { useAddBookToListing } from "../hooks/useAddBookToListing";

import { useState } from "react";

import "../styles/Button.css";
import "../styles/PageHeader.css";
import "../styles/FormInput.css";
import "../styles/FormContainer.css";
import "../styles/Page.css";

const AddBook = ({ addBookToLenderList }) => {
  // custom hook to handle adding a book to the listing
  const { addBookToListing, error, loading } = useAddBookToListing();

  // states to store form input values
  const [imgUrl, setImgUrl] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [page, setPage] = useState("");
  const [releaseYear, setReleaseYear] = useState("");
  const [location, setLocation] = useState("");
  const [condition, setCondition] = useState("");

  // handle form submission, calling addBookToListing function to manage api call
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBook = await addBookToListing(
      imgUrl,
      title,
      author,
      page,
      releaseYear,
      location,
      condition
    );
    // if the api request was successful
    if (newBook !== false) {
      // add the newly added book to the lender list state in the parent
      addBookToLenderList(newBook);
      // reset form input values after successful book addition
      setImgUrl("");
      setTitle("");
      setAuthor("");
      setPage("");
      setReleaseYear("");
      setLocation("");
      setCondition("");
    }
  };

  // Form layout for adding book listing
  return (
    <div className="d-flex flex-column align-items-center justify-content-center mx-2 mb-4">  
    <Container
      className="form-container d-flex flex-column align-items-center justify-content-center mt-3 mb-5"
      id="add-book"
    >
      <h1 className="page-header mt-4">Add Book to Swap Listing </h1>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col className="d-flex flex-column align-items-center">
            <h1 className="page-header-smaller mt-3">Book details</h1>
            <Form.Group controlId="imageUrl">
              <Form.Control
                type="text"
                placeholder="Image Url"
                className="form-input"
                onChange={(e) => setImgUrl(e.target.value)}
                value={imgUrl}
              />
            </Form.Group>
            <Form.Group controlId="title">
              <Form.Control
                type="text"
                placeholder="Title (required)"
                className="form-input"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </Form.Group>
            <Form.Group controlId="author">
              <Form.Control
                type="text"
                placeholder="Author (required)"
                className="form-input"
                onChange={(e) => setAuthor(e.target.value)}
                value={author}
              />
            </Form.Group>
            <Form.Group controlId="page">
              <Form.Control
                type="number"
                placeholder="Page"
                className="form-input"
                onChange={(e) => setPage(e.target.value)}
                value={page}
              />
            </Form.Group>
            <Form.Group controlId="releaseYear">
              <Form.Control
                type="number"
                placeholder="Release Year"
                className="form-input"
                onChange={(e) => setReleaseYear(e.target.value)}
                value={releaseYear}
              />
            </Form.Group>
          </Col>
          <Col className="d-flex flex-column align-items-center">
            <h1 className="page-header-smaller mt-3">Listing details</h1>
            <Form.Group controlId="availability">
              <Form.Control
                type="text"
                placeholder="Status: available"
                className="form-input"
                disabled={true}
              />
            </Form.Group>
            <Form.Group controlId="location">
              <Form.Control
                type="text"
                placeholder="Location (required)"
                className="form-input"
                onChange={(e) => setLocation(e.target.value)}
                value={location}
              />
            </Form.Group>
            <Form.Group controlId="condition">
              <Form.Select
                type="text"
                placeholder="Condition"
                className="form-input"
                onChange={(e) => setCondition(e.target.value)}
                value={condition}
              >
                <option value="" disabled>
                  Select Condition (required)
                </option>
                <option value="new">new</option>
                <option value="good">good</option>
                <option value="acceptable">acceptable</option>
                <option value="used">used</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
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
          {error && <div className="error-message">{error}</div>}
          <Button
            type="submit"
            className="btn-custom mt-3 mb-5"
            disabled={loading}
          >
             {loading ?  <Spinner animation="border" variant="light" size="sm"/> : "Add"}
          </Button>
        </motion.div>
      </Form>
    </Container>
    </div>
  );
};

export default AddBook;
