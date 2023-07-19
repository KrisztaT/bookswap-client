import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import { motion } from "framer-motion";

import { useState } from "react";

import "../styles/Button.css";
import "../styles/PageHeader.css";
import "../styles/FormInput.css";
import "../styles/FormContainer.css";

const AddBook = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [page, setPage] = useState("");
  const [releaseYear, setReleaseYear] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <Container
      className="form-container d-flex flex-column align-items-center"
    >
      <h1 className="page-header mt-5">Add Book to Swap Listing</h1>
      <Form className="d-flex flex-column align-items-center" onSubmit={handleSubmit}>
        <Form.Group controlId="imageUrl">
          <Form.Control
            type="text"
            placeholder="Image Url"
            autoFocus
            className="form-input"
            onChange={(e) => setImageUrl(e.target.value)}
            input={imageUrl}
          />
        </Form.Group>
        <Form.Group controlId="title">
          <Form.Control
            type="text"
            placeholder="Title"
            className="form-input"
            onChange={(e) => setTitle(e.target.value)}
            input={title}
          />
        </Form.Group>
        <Form.Group controlId="author">
          <Form.Control
            type="text"
            placeholder="Author"
            className="form-input"
            onChange={(e) => setAuthor(e.target.value)}
            input={author}
          />
        </Form.Group>
        <Form.Group controlId="page">
          <Form.Control
            type="text"
            placeholder="Page"
            className="form-input"
            onChange={(e) => setPage(e.target.value)}
            input={page}
          />
        </Form.Group>
        <Form.Group controlId="releaseYear">
          <Form.Control
            type="text"
            placeholder="Release Year"
            className="form-input"
            onChange={(e) => setReleaseYear(e.target.value)}
            input={releaseYear}
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
          <Button type="submit" className="btn-custom mt-4 mb-5">
            Add
          </Button>
        </motion.div>
      </Form>
    </Container>
  );
};

export default AddBook;
