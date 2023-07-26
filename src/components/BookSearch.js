import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import { motion } from "framer-motion";

import { useState } from "react";
import { useSearchBookListings } from "../hooks/useSearchBookListings";

import "../styles/Button.css";
import "../styles/PageHeader.css";
import "../styles/FormInput.css";
import "../styles/FormContainer.css";


const SearchBook = ({ addResultBooks }) => {
    const [searchTitle, setSearchTitle] = useState("");
    const {searchBookListings, error, loading} = useSearchBookListings()

    const handleSubmit = async (e) => {
        e.preventDefault();
        // call the hook to handle book search by title
        const searchBookLists = await searchBookListings(searchTitle);
        addResultBooks(searchBookLists)
        setSearchTitle("")
      };

  return (
    <Container className="form-container d-flex flex-column align-items-center">
      <h1 className="page-header mt-5">Book search</h1>
      <Form
        className="d-flex flex-column align-items-center"
        onSubmit={handleSubmit}
      >
        <Form.Group controlId="title">
          <Form.Control
            type="text"
            placeholder="Title"
            className="form-input"
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
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
