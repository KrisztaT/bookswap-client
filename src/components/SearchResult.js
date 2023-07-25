import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import "../styles/PageHeader.css";
import "../styles/Card.css";
import "../styles/Button.css";

const SearchResult = ({ resultBooks }) => {
  return (
    <Container className="mb-5">
      <h1 className="page-header mb-3 mt-5">Search Result</h1>
      <div className="d-flex justify-content-center align-content-center flex-wrap">
        {resultBooks &&
          resultBooks.map((bookData) => (
            <Card
              key={`${bookData.book._id}-${bookData.listing._id}`}
              className="card-available"
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
              <Row className="second-row-available">
                <Col
                  xs={12}
                  className="mt-1 mb-1 d-flex align-items-center justify-content-start"
                >
                  <p>Status: {bookData.listing.availability} </p>
                  <p>Status: {bookData.user.name} </p>
                  <p>Status: {bookData.user.email} </p>
                </Col>
              </Row>
            </Card>
          ))}
      </div>
    </Container>
  );
};

export default SearchResult;
