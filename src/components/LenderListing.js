import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

import "../styles/PageHeader.css";
import "../styles/Card.css";
import "../styles/Button.css";

const LenderListing = ({
  books,
  handleBookEdit,
  handleListingEdit,
  error,
}) => {


  return (
    <Container className="mb-5">
      <h1 className="page-header mb-3 mt-5">Listed books</h1>
      <div className="d-flex justify-content-center align-content-center flex-wrap">
        {error && <div className="error-message">{error}</div>}
        {books &&
          books.map((bookData) => (
            <Card
              key={`${bookData.book._id}-${bookData.listing._id}`}
              className="card m-3"
            >
              <Row>
                <Col xs={4}>
                  <img
                    src={bookData.book.imgUrl}
                    alt={bookData.book.title}
                    style={{
                      width: "100px",
                      height: "140px",
                      objectFit: "cover",
                    }}
                  />
                </Col>
                <Col xs={8}>
                  <p className="mb-2">
                    <b>{bookData.book.title}</b>
                  </p>
                  <p>{bookData.book.author}</p>
                  <p>{bookData.book.page} pages</p>
                  <p>{bookData.book.releaseYear}</p>
                </Col>
              </Row>
              <Row className="mb-2 mt-2 second-row ">
                <Col xs={12} className="mt-2 mb-2 d-flex align-items-center justify-content-start">
                  <p>Status: {bookData.listing.availability} </p>
                </Col>
              </Row>
              <Row className="">
                <Col 
                  xs={12}
                  className="d-flex align-items-center justify-content-center "
                >
                  {bookData.book.isCreated ? (
                  <Button
                    onClick={() => handleBookEdit(bookData.book._id)}
                    className="btn-custom-bkg"
                  >Edit book & listing
                  </Button>
                   ) : <Button
                   onClick={() => handleListingEdit(bookData.listing._id)}
                   className="btn-custom-bkg"
                 >Edit listing
                 </Button>}
                </Col>
              </Row>
            </Card>
          ))}
      </div>
    </Container>
  );
};

export default LenderListing;
