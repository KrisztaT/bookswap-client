import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { PencilSquare, Trash} from "react-bootstrap-icons";

import "../styles/PageHeader.css";
import "../styles/Card.css";

const LenderListing = ({
  books,
  handleBookEdit,
  handleListingDelete,
  handleListingEdit,
  error,
}) => {
  return (
    <Container>
      <h1 className="page-header m-5">Listed books</h1>
      <div className="d-flex justify-content-center align-content-center flex-wrap">
        {error && <div className="error-message">{error}</div>}
        {books &&
          books.map((bookData) => (
            <Card key={`${bookData.book._id}-${bookData.listing._id}`} className="card m-3">
              <Row>
                <Col xs={4}>
                  <img
                    src={bookData.book.imgUrl}
                    alt={bookData.book.title}
                    style={{
                      width: "100px",
                      height: "150px",
                      objectFit: "cover",
                    }}
                  />
                </Col>
                <Col xs={6}>
                  <p><b>{bookData.book.title}</b></p>
                  <p>{bookData.book.author}</p>
                  <p>{bookData.book.page} pages</p>
                  <p>{bookData.book.releaseYear}</p>
                </Col>
                <Col
                  xs={2}
                  className="d-flex align-items-center justify-content-center"
                >
                  <PencilSquare
                    size={32}
                    onClick={() => handleBookEdit(bookData.book._id)}
                    className="icon-hover"
                    color="#19b4b4"
                    title="Edit book"
                  />
                </Col>
              </Row>
              <Row className="mt-2 second-row">
                <Col xs={8} className="mt-2">
                  <p>Status: {bookData.listing.availability} </p>
                </Col>
                <Col
                  xs={4}
                  className="d-flex align-items-center justify-content-between"
                >
                  <PencilSquare
                    onClick={() => handleListingEdit(bookData.listing._id)}
                    size={32}
                    className="icon-hover"
                    color="#19b4b4"
                    title="Edit listing"
                  />
                  <Trash
                    onClick={() => handleListingDelete(bookData.listing._id)}
                    size={32}
                    className="icon-hover"
                    color="#E4572E"
                    title="Delete listing"
                  />
                   
                  
                </Col>
              </Row>
            </Card>
          ))}
      </div>
    </Container>
  );
};

export default LenderListing;
