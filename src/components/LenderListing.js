import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import "../styles/PageHeader.css";
import "../styles/Card.css";

const LenderListing = ({
  books,
  handleBookEdit,
  handleListingDelete,
  handleListingEdit,
}) => {
  return (
    <Container>
      <h1 className="page-header m-5">Listed books</h1>
      {books.map((bookData) => (
        <Card key={bookData.book._id}>
          <Row>
            <Col xs={4}>
              <img
                src={bookData.book.imgUrl}
                alt={bookData.book.title}
                style={{ width: "100px", height: "150px", objectFit: "cover" }}
              />
            </Col>
            <Col xs={4}>
              <h5>{bookData.book.title}</h5>
              <p> {bookData.book.author}</p>
              <p>{bookData.book.page} pages</p>
              <p>{bookData.book.releaseYear}</p>
            </Col>
            <Col
              xs={4}
              className="d-flex align-items-center justify-content-center"
            >
              <Button
                variant="outline-primary"
                onClick={() => handleBookEdit(bookData.book._id)}
              >
                Edit
              </Button>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <p>Status {bookData.listing.availability} </p>
            </Col>
            <Col
              xs={6}
              className="d-flex align-items-center justify-content-between"
            >
              <Button
                variant="outline-primary"
                onClick={() => handleListingEdit(bookData.listing._id)}
              >
                Edit
              </Button>{" "}
              <Button
                variant="outline-danger"
                onClick={() => handleListingDelete(bookData.listing._id)}
              >
                Delete
              </Button>
            </Col>
          </Row>
        </Card>
      ))}
    </Container>
  );
};

export default LenderListing;
