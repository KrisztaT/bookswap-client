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
  // state variables to store form input values and errors
  const [searchTitle, setSearchTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [location, setLocation] = useState("");
  const [condition, setCondition] = useState("");
  // custom hook to handle search book listings
  const {
    searchBookListings,
    error: hookError,
    loading,
  } = useSearchBookListings();
  const [error, setError] = useState("");

  // function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // validate if searchTitle is defined
    if (!searchTitle.trim()) {
      setError("Title field is mandatory.");
      return;
    }
    // call the hook to handle book search by criteria provided
    const searchBookLists = await searchBookListings(
      searchTitle,
      author,
      location,
      condition
    );
    // update the search result state in the parent component
    addResultBooks(searchBookLists);

    // reset form input values and errors after successful search
    setSearchTitle("");
    setAuthor("");
    setLocation("");
    setCondition("");
    setError("");
  };

  // form for the search
  return (
    <div className="d-flex flex-column align-items-center justify-content-center mx-2">  
    <Container className="form-container d-flex flex-column align-items-center justify-content-center pt-1">
      <h1 className="page-header text-center my-3">Book search</h1>
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
            {/* ... conditional rendering of errors ... */}
          {hookError && <div className="error-message">{hookError}</div>}
          {error && <div className="error-message">{error}</div>}
          <Button
            type="submit"
            className="btn-custom mt-3 mb-3"
            disabled={loading}
          >
            Search
          </Button>
        </motion.div>
      </Form>
    </Container>
    </div>
  );
};

export default SearchBook;
