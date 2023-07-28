import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { motion } from "framer-motion";

import { useAddBookToListing } from "../hooks/useAddBookToListing";

import { useState } from "react";

import "../styles/Button.css";
import "../styles/PageHeader.css";
import "../styles/FormInput.css";
import "../styles/FormContainer.css";

const AddBook = ({ addBookToLenderList }) => {
  const { addBookToListing, error, loading } = useAddBookToListing();

  const [imgUrl, setImgUrl] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [page, setPage] = useState("");
  const [releaseYear, setReleaseYear] = useState("");
  const [location, setLocation] = useState("");
  const [condition, setCondition] = useState("");

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
    if (newBook !== false) {
      addBookToLenderList(newBook);
      setImgUrl("");
      setTitle("");
      setAuthor("");
      setPage("");
      setReleaseYear("");
      setLocation("");
      setCondition("");
    }
  };

  return (
    <Container className="form-container d-flex flex-column align-items-center justify-content-center">
      <h1 className="page-header mt-5">
        Add Book to Swap Listing{" "}
      </h1>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col className="d-flex flex-column align-items-center">
            <h1 className="page-header-smaller mt-4">Book details</h1>
            <Form.Group controlId="imageUrl">
              <Form.Control
                type="text"
                placeholder="Image Url"
                autoFocus
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
            <h1 className="page-header-smaller mt-4">Listing details</h1>
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
                  Select Condition
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
            className="btn-custom mt-4 mb-5"
            disabled={loading}
          >
            Add
          </Button>
        </motion.div>
      </Form>
    </Container>
  );
};

export default AddBook;
