import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { motion } from "framer-motion";

import { useState } from "react";
import { useSearchBookListings } from "../hooks/useSearchBookListings";

import "../styles/Button.css";
import "../styles/PageHeader.css";
import "../styles/FormInput.css";
import "../styles/FormContainer.css";
import "../styles/Page.css";

const SearchBook = ({ addResultBooks }) => {
  const [searchTitle, setSearchTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [location, setLocation] = useState("");
  const [condition, setCondition] = useState("");
  const {
    searchBookListings,
    error: hookError,
    loading,
  } = useSearchBookListings();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // validate if searchTitle is defined
    if (!searchTitle.trim()) {
      setError("Title field is mandatory.");
      return;
    }
    // call the hook to handle book search by title
    const searchBookLists = await searchBookListings(
      searchTitle,
      author,
      location,
      condition
    );
    addResultBooks(searchBookLists);
    setSearchTitle("");
    setAuthor("");
    setLocation("");
    setCondition("");
    setError("");
  };

  return (
    <Container className="form-container d-flex flex-column align-items-center justify-content-center mt-5">
      <h1 className="page-header text-center page-upper-padding">Book search</h1>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col className="d-flex flex-column align-items-center">
            <Form.Group controlId="title">
              <Form.Control
                type="text"
                placeholder="Title (required)"
                className="form-input"
                value={searchTitle}
                onChange={(e) => setSearchTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="author">
              <Form.Control
                type="text"
                placeholder="Author"
                className="form-input"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col className="d-flex flex-column align-items-center">
            <Form.Group controlId="location">
              <Form.Control
                type="text"
                placeholder="Location"
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
          {hookError && <div className="error-message">{hookError}</div>}
          {error && <div className="error-message">{error}</div>}
          <Button
            type="submit"
            className="btn-custom mt-4 mb-4"
            disabled={loading}
          >
            Search
          </Button>
        </motion.div>
      </Form>
    </Container>
  );
};

export default SearchBook;
